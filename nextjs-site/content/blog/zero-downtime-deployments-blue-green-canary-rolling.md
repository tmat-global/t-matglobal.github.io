---
title: "Zero-Downtime Deployments: Blue-Green vs Canary vs Rolling"
date: "2026-11-16"
description: "Compare blue-green, canary and rolling deployments for zero downtime: how each works, cost, risk, rollback and how to choose for your business systems."
tags: ["Zero Downtime Deployment", "Blue-Green Deployment", "Canary Release", "Kubernetes", "DevOps"]
image: "/blog/zero-downtime-deployments-blue-green-canary-rolling-cover.jpg"
readingTime: "12 min read"
---

For many companies, the release is still the riskiest moment of the month. Deployments wait for a late-night window, a change freeze or a long approval chain, because everyone remembers the last time a release took a critical system down during business hours. That caution has a cost: bigger, less frequent releases, which are riskier still.

Zero-downtime deployment strategies break that cycle. They let a business release during working hours, limit the damage of a bad change and recover quickly. This guide explains how rolling, blue-green and canary deployments work, how they compare on risk, cost and rollback, how to handle database changes, and how to choose for your own systems. Tools and defaults change, so confirm the details against your platform's current documentation.

## What is a zero-downtime deployment?

A zero-downtime deployment is a release method that replaces a running version of an application with a new one without making the service unavailable or breaking requests that are in progress.

In practice it needs four things: health checks so traffic only reaches working instances, graceful shutdown so in-flight requests finish, changes that are backward compatible with what is already running, and a fast way to go back. "Zero downtime" means no user-visible outage. It does not mean no risk, which is why strategy and monitoring both matter.

## How does a rolling deployment work?

A rolling deployment replaces instances of the old version with the new version a few at a time, keeping the rest serving traffic until every instance is updated.

On Kubernetes this is the default for a Deployment. Two settings control the pace: how many extra instances may exist during the rollout (`maxSurge`) and how many may be unavailable (`maxUnavailable`). Both default to 25 percent. For a business-critical service, setting `maxUnavailable` to zero keeps full capacity throughout.

```yaml
spec:
  replicas: 10
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0
```

- **Best for:** most services and routine releases, and a sensible default.
- **Strengths:** built in, simple, needs little extra capacity.
- **Watch out for:** old and new versions run side by side, so the change must be backward compatible. A bad version is exposed to a growing share of users until you notice, and rolling back is another gradual rollout.

## How does a blue-green deployment work?

A blue-green deployment runs two full environments, the live one (blue) and the new one (green), tests the new one while it takes no customer traffic, then switches all traffic over at once.

If something is wrong, you switch back to blue. The old version stays available until you are confident, then you retire it.

- **Best for:** major or infrequent releases, regulated changes that need a clean cutover and a rehearsed switch, and systems where fast rollback matters more than gradual exposure.
- **Strengths:** a clean, quick switch, full pre-release testing of the new environment and very fast rollback.
- **Watch out for:** roughly double the capacity during the cutover, shared databases that must work with both versions, session state and long-running jobs, and the fact that when you switch, every user moves at once.

Blue-green is not a built-in option of a Kubernetes Deployment. You run two Deployments behind one Service and change the Service's selector, or use a controller or a cloud load balancer that switches between two target groups.

```bash
# Switch a Service from blue to green (example names)
kubectl patch service web -p '{"spec":{"selector":{"app":"web","version":"green"}}}'
```

## How does a canary deployment work?

A canary deployment sends a small share of real traffic to the new version first, watches its health, and increases the share in steps only if the results stay good.

For example, 5 percent, then 25, 50 and 100 percent, with a pause and a check at every step. If error rates or latency worsen, the release stops and traffic returns to the stable version, with only a small group of users affected.

- **Best for:** high-traffic, customer-critical services where real-world behaviour matters and you can measure it.
- **Strengths:** the smallest blast radius, real production validation and automatic rollback when metrics cross a threshold.
- **Watch out for:** it needs good monitoring, enough traffic to tell signal from noise, and more tooling. On Kubernetes, precise percentages need a controller such as Argo Rollouts or Flagger, a service mesh, or Gateway API weighted routes. Without a traffic router, the percentage is only approximated by pod counts.

```yaml
# Gateway API: send 5 percent of traffic to the canary
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: web
spec:
  parentRefs:
    - name: public-gateway
  rules:
    - backendRefs:
        - name: web-stable
          port: 80
          weight: 95
        - name: web-canary
          port: 80
          weight: 5
```

```yaml
# Argo Rollouts: staged canary with pauses (needs a traffic router for exact weights)
strategy:
  canary:
    steps:
      - setWeight: 5
      - pause: { duration: 10m }
      - setWeight: 25
      - pause: { duration: 10m }
      - setWeight: 50
      - pause: { duration: 10m }
```

If you are still running the Ingress NGINX controller for canary annotations, note that it was retired in March 2026 and no longer receives security patches. See our [Kubernetes production readiness checklist](/blog/kubernetes-production-readiness-checklist).

## How do the three strategies compare?

- **Speed of rollback:** blue-green is fastest, canary is fast because only a small share is exposed, and rolling is slower because it reverses gradually.
- **Users exposed to a bad release:** canary exposes the fewest, rolling exposes a growing share, and blue-green exposes everyone at the moment of the switch, after pre-release testing.
- **Extra capacity:** blue-green needs roughly double during the cutover, rolling needs a small surge and canary needs a little extra.
- **Complexity and tooling:** rolling is the simplest, blue-green is moderate and canary is the most demanding.
- **Mixed versions at once:** rolling and canary both run two versions together, while blue-green keeps them in separate environments.

## Which strategy should your business choose?

Use rolling by default, canary for services where a bad release is costly and you can measure it, and blue-green for large changes that need a clean cutover. Many companies combine them.

- **Routine releases of most services:** rolling, with strong health checks and rollback.
- **Customer-critical, high-traffic services:** canary with automatic analysis.
- **Major version changes, infrastructure moves or regulated changes with a rehearsed cutover:** blue-green.
- **Risky features inside a release:** feature flags, so code ships separately from the moment a feature is switched on.

Also consider your team's maturity. A simple strategy that is monitored and well rehearsed beats an advanced one nobody trusts.

## What makes zero-downtime deployments work, whatever the strategy?

- **Readiness probes** so new instances receive traffic only when they are ready.
- **Graceful shutdown:** let instances finish in-flight requests, with a shutdown grace period and connection draining.
- **Backward-compatible changes** to APIs and messages, so old and new versions can run together.
- **Feature flags** to separate deployment from release.
- **Stateless services,** or shared session storage, so users are not logged out by a switch.
- **Idempotent background jobs,** so a job interrupted by a release can safely rerun.
- **Monitoring and automatic rollback** based on thresholds you set in advance.

## How do you handle database changes?

Use the expand and contract pattern, so every database change works with both the old and the new version of the application.

1. **Expand:** add the new column or table without removing anything. Existing code keeps working.
2. **Deploy code that works with both,** for example writing to both the old and new fields.
3. **Backfill** existing data into the new structure in small batches.
4. **Switch reads** to the new structure.
5. **Contract:** in a later release, remove the old column or table once nothing uses it.

```sql
-- Step 1, expand: additive change, safe for the running version
ALTER TABLE orders ADD COLUMN status_v2 text;
```

Avoid long locks, test migrations on production-sized data and never combine a destructive change with the release that depends on it. Plan the rollback too: a code rollback is easy, but a data change may not be reversible, which is why additive steps come first.

## What should you monitor during a rollout?

Watch the signals customers feel, compare the new version with the stable one and set thresholds that stop the release automatically.

- Error rate, latency and saturation for both versions.
- Business metrics such as orders, payments or logins per minute.
- Logs and alerts from dependent services.
- Resource use, in case the new version behaves differently under load.

Agree in advance what "bad" means, for example an error rate above a set level for several minutes. Our [production readiness checklist for SaaS companies](/blog/production-readiness-checklist-saas-startups) covers the monitoring and incident basics.

## How do deployment strategies fit enterprise change management?

Progressive delivery works well with formal change control, because it produces evidence of what was released, who approved it and how it behaved.

- Keep deployment definitions in version control, so every change is reviewed and traceable.
- Use pipeline approvals for production, with separation of duties between who writes and who approves.
- Record automated test and canary analysis results as part of the release record.
- Agree freeze windows and emergency change procedures in advance.
- Make sure the pipeline itself is secured. See our guide to [securing GitHub Actions workflows](/blog/secure-github-actions-workflows-ghostaction), and for audit expectations, our post on [SOC 2 technical controls](/blog/soc-2-startups-technical-controls-engineers).

When a release does go wrong, a clear plan matters. See our [incident response plan template](/blog/incident-response-plan-startups-template).

## What mistakes do companies make with zero-downtime deployments?

- Treating a rolling update as zero downtime without readiness probes and graceful shutdown.
- Releasing breaking database changes together with the code that needs them.
- Running a canary with no metrics or too little traffic to learn anything.
- Having a blue-green switch that nobody has rehearsed.
- Forgetting session state, caches and background jobs.
- Keeping no tested rollback plan, or one that assumes the data can be rolled back.
- Choosing a complex strategy because it sounds modern, not because the risk calls for it.

## How can T-Mat Global help with safer releases?

T-Mat Global Technologies is a founder-led, DPIIT-recognized technology delivery partner from India. We bring production expertise from the Fortune 100 ecosystem to companies and engineering teams across the US, UAE and UK. We help with cloud infrastructure, DevOps, CI/CD, cloud security, vulnerability remediation and production support, and engagements can be project-based, ongoing maintenance or managed infrastructure support. Our founder, Sainath Mitalakar, is an AWS Certified DevOps Engineer Professional with production expertise from the Fortune 100 ecosystem.

We can review your release process, design rolling, canary or blue-green pipelines with the right monitoring and rollback, and secure the pipeline around them. See our [CI/CD pipeline security service](/services/cicd-pipeline-security) and our other [services](/services).

## Get a free assessment

Want to release more often with less risk? Contact T-Mat Global to discuss your requirements. Visit [t-matglobal.com](https://www.t-matglobal.com) or email info@t-matglobal.com, and [book your free assessment](/contact).

## Frequently asked questions

### What is zero-downtime deployment?

It is releasing a new version of an application without making the service unavailable or breaking requests in progress, using health checks, graceful shutdown, compatible changes and a fast rollback.

### What is the difference between blue-green and canary deployment?

Blue-green switches all traffic from the old environment to a new one at once. Canary sends a small, growing share of traffic to the new version and checks its health at each step.

### Is rolling deployment zero downtime?

It can be, if instances are only added to service when ready and shut down gracefully, and if the change works with the old version running alongside it. Kubernetes defaults allow a quarter of capacity to be unavailable, so set `maxUnavailable` deliberately.

### Which strategy has the fastest rollback?

Blue-green, because you simply switch traffic back to the environment that is still running the old version.

### Does blue-green deployment need double the infrastructure?

Roughly, during the cutover, because both environments run at once. You can reduce cost by scaling the old environment down after you are confident.

### How do you deploy database changes without downtime?

Use expand and contract: make additive changes first, deploy code that works with both structures, backfill data, switch reads and remove the old structure in a later release.

### Do we need Kubernetes for zero-downtime deployments?

No. Load balancers, container services, virtual machine scale sets and many platforms support rolling, blue-green and canary strategies. Kubernetes is one option.

### How do feature flags help?

They separate shipping code from switching a feature on, so you can release safely, test with a small group and turn a feature off instantly without a new deployment.
