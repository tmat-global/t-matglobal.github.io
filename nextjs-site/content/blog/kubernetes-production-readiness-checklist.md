---
title: "Kubernetes Production Readiness Checklist"
date: "2026-11-12"
description: "A Kubernetes production readiness checklist covering probes, resources, autoscaling, security, observability, upgrades and ingress after ingress-nginx retired."
tags: ["Kubernetes", "Production Readiness", "Container Security", "DevOps", "Cloud Native"]
image: "/blog/kubernetes-production-readiness-checklist-cover.jpg"
readingTime: "12 min read"
---

Kubernetes makes it easy to run a container. It does not make it easy to run one safely for paying customers. A cluster that works in a demo can fail in production in familiar ways: pods that restart in a loop, one noisy service starving the rest, a node drain that takes everything down at once, a credential that reaches every pod, and an upgrade nobody planned.

This checklist covers what a startup or small platform team should have in place before putting real traffic on Kubernetes. It also covers a change that catches many teams out: the Ingress NGINX controller was retired in March 2026. Kubernetes moves quickly, so confirm details against the current documentation for your version.

## What is Kubernetes production readiness?

Kubernetes production readiness is the set of settings, controls and routines that let a cluster run workloads reliably, securely and recoverably under real traffic, and that let your team change it safely.

It covers workload settings such as health checks and resource limits, security controls, traffic handling, monitoring, backups and upgrades. It is the Kubernetes-specific layer on top of our general [production readiness checklist for SaaS startups](/blog/production-readiness-checklist-saas-startups).

## The Kubernetes production readiness checklist: 18 controls

### Reliability

1. **Health probes.** Add readiness probes so traffic only reaches pods that can serve it, liveness probes so stuck containers restart and startup probes for slow-starting applications.
2. **Resource requests and limits.** Set CPU and memory requests for every container so the scheduler can place pods sensibly. Set memory limits to contain leaks. CPU limits are debated because they can throttle applications, so decide deliberately for each workload.
3. **Replicas, spread and disruption budgets.** Run at least two replicas of anything customer-facing, spread them across nodes and zones, and add a PodDisruptionBudget so voluntary disruptions such as node drains cannot remove every pod at once.
4. **Safe rollouts and graceful shutdown.** Use rolling updates with no unavailable pods, allow time for pods to finish requests on shutdown, and keep a tested rollback.
5. **Autoscaling.** Use a Horizontal Pod Autoscaler for pods and node autoscaling, such as Cluster Autoscaler or Karpenter, for capacity. Load test so you know the limits before customers do.

An illustrative excerpt that brings several of these together:

```yaml
spec:
  replicas: 3
  strategy:
    rollingUpdate:
      maxUnavailable: 0
      maxSurge: 1
  template:
    spec:
      terminationGracePeriodSeconds: 30
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
      topologySpreadConstraints:
        - maxSkew: 1
          topologyKey: topology.kubernetes.io/zone
          whenUnsatisfiable: ScheduleAnyway
          labelSelector:
            matchLabels:
              app: web
      containers:
        - name: web
          image: registry.example.com/web@sha256:<digest>  # pin by digest or exact tag
          ports:
            - containerPort: 8080
          readinessProbe:
            httpGet: { path: /healthz/ready, port: 8080 }
          livenessProbe:
            httpGet: { path: /healthz/live, port: 8080 }
          resources:
            requests: { cpu: 250m, memory: 256Mi }
            limits: { memory: 512Mi }
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            capabilities:
              drop: ["ALL"]
```

```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: web
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: web
```

### Security

6. **Pod security standards and security contexts.** Kubernetes replaced PodSecurityPolicy with Pod Security Admission, which applies the Pod Security Standards (privileged, baseline and restricted) per namespace. Start in warn mode, fix what it reports, then enforce. In containers, run as non-root, drop capabilities and disallow privilege escalation, as in the excerpt above.

```bash
kubectl label namespace prod \
  pod-security.kubernetes.io/warn=restricted \
  pod-security.kubernetes.io/enforce=baseline
```

7. **RBAC and service accounts.** Grant least privilege, never give applications cluster-admin, use a separate service account per workload and turn off token auto-mounting for pods that do not call the Kubernetes API.
8. **Secrets.** Enable encryption at rest for secrets, prefer an external secrets manager, and never commit secrets to manifests. See our guide to [secrets management in CI/CD](/blog/secrets-management-cicd-common-leaks-fixes).
9. **Network policies.** Start with a default-deny policy per namespace and allow only the traffic you need. Remember to allow DNS, and confirm that your network plugin enforces policies.

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
  namespace: prod
spec:
  podSelector: {}
  policyTypes: ["Ingress", "Egress"]
```

10. **Image supply chain and admission rules.** Pull from trusted registries, use minimal base images, scan images in CI, pin by digest or exact tag and never use `latest` in production. Enforce rules at admission with Kubernetes' built-in validating admission policies or a tool such as Kyverno or OPA Gatekeeper. Our post on [Kubernetes security and AI-generated manifests](/blog/kubernetes-security-ai-generated-manifests) explains why review matters.

### Traffic

11. **Ingress and TLS.** The Ingress NGINX controller was retired on March 24, 2026. It receives no further releases, bug fixes or security patches, and it often sits at the most exposed point of a cluster. If you still run it, plan a migration to the Gateway API or another maintained controller. The ingress2gateway tool, which reached version 1.0 in March 2026, can translate existing Ingress resources, including many common annotations, into Gateway API resources. Test carefully, since behaviour differs. Automate certificates with a tool such as cert-manager.

### Observability

12. **Metrics, logs and alerts.** Collect metrics for pods, nodes and the control plane, centralise logs, and alert on symptoms customers feel, such as error rate and latency, not only on CPU. Give every alert an owner and a runbook.
13. **Audit logs.** Turn on Kubernetes audit logging and cloud control plane logs, and keep them somewhere separate from the cluster.

### Recovery

14. **Backups and restore tests.** Back up persistent volumes and the cluster configuration, keep manifests in Git, use a tool such as Velero where it fits and, above all, test a restore. Prefer managed databases for critical data. See our guide to [cloud disaster recovery](/blog/cloud-disaster-recovery-uae-aws-outage-lessons).

### Change and lifecycle

15. **GitOps and infrastructure as code.** Keep manifests and cluster definitions in Git, change them through reviewed pull requests, and detect drift. See our comparison of [Terraform, OpenTofu, Pulumi and CloudFormation](/blog/terraform-vs-opentofu-vs-pulumi-vs-cloudformation-startups).
16. **Upgrades and deprecated APIs.** Each Kubernetes minor version is supported for a limited time, roughly a year of patches plus a short upgrade window, so plan regular upgrades and check kubernetes.io/releases for exact dates. Test in staging first, check for deprecated APIs and read the release notes for changes that affect nodes. For example, Kubernetes 1.35 was the last release to support containerd 1.x.

```bash
# Which deprecated APIs is your cluster still receiving requests for?
kubectl get --raw /metrics | grep apiserver_requested_deprecated_apis
```

17. **Quotas and cost guardrails.** Use ResourceQuotas and LimitRanges per namespace, set budgets and alerts, and review idle capacity. See our guide to [cloud cost optimization for startups](/blog/cloud-cost-optimization-startups-aws).
18. **Runbooks and on-call.** Write short runbooks for the most likely failures, such as crash loops, failed rollouts, node pressure and certificate expiry. Agree who responds and practise once.

## What are the most common Kubernetes production mistakes?

- Running without resource requests, so one busy service starves others.
- Missing readiness probes, so traffic reaches pods that cannot serve it.
- A single replica for a customer-facing service.
- Using `latest` image tags, which makes rollbacks and audits unreliable.
- Giving workloads cluster-wide permissions.
- No default-deny network policy, so any pod can talk to any other.
- Leaving a retired or unpatched ingress controller exposed.
- Never testing restores or upgrades until something forces it.

## How should you prioritise this checklist?

If your cluster is already live, start with the items that remove the biggest risks:

1. Fix probes, requests, replicas and disruption budgets for customer-facing services.
2. Replace Ingress NGINX if you use it, and tighten RBAC and secrets.
3. Add default-deny network policies and pod security enforcement.
4. Test a restore and write the first runbooks.
5. Set a regular upgrade rhythm.

Do you need Kubernetes at all? Not always. A small application can run well on a simpler managed platform, and moving to Kubernetes later is easier than operating it before you need it.

## How can T-Mat Global help with Kubernetes?

T-Mat Global Technologies is a founder-led, DPIIT-recognized technology delivery partner from India. We bring production expertise from the Fortune 100 ecosystem to startups and engineering teams across the US, UAE and UK. We help with cloud infrastructure, DevOps, CI/CD, cloud security, vulnerability remediation and production support, and engagements can be project-based, ongoing maintenance or managed infrastructure support. Our founder, Sainath Mitalakar, is an AWS Certified DevOps Engineer Professional with production expertise from the Fortune 100 ecosystem.

We can review your cluster against this checklist, fix the gaps that matter first, help you plan an ingress migration and set up monitoring and upgrade routines. See our [container and Kubernetes security service](/services/container-kubernetes-security) and our other [services](/services).

## Get a free assessment

Need help getting your Kubernetes setup production-ready? Contact T-Mat Global to discuss your requirements. Visit [t-matglobal.com](https://www.t-matglobal.com) or email info@t-matglobal.com, and [book your free assessment](/contact).

## Frequently asked questions

### What is a Kubernetes production readiness checklist?

It is a list of settings and practices, covering reliability, security, traffic handling, monitoring, recovery and upgrades, that a cluster should meet before it serves real customers.

### Is Ingress NGINX still safe to use?

No. The Kubernetes project retired it on March 24, 2026, so it receives no security patches. Existing installations keep running, but you should plan a migration to the Gateway API or another maintained controller.

### What replaced PodSecurityPolicy?

Pod Security Admission, which enforces the Pod Security Standards (privileged, baseline and restricted) at the namespace level.

### How many replicas should a production service have?

At least two for anything customer-facing, spread across nodes and zones, with a PodDisruptionBudget so that maintenance does not remove them all at once.

### Should I set CPU limits?

Always set CPU and memory requests. Memory limits are common to contain leaks. CPU limits can throttle applications, so apply them deliberately after measuring.

### What is a PodDisruptionBudget?

It is a rule that limits how many pods of an application can be unavailable during voluntary disruptions such as node drains and upgrades.

### How often should we upgrade Kubernetes?

Each minor version is supported for a limited period, so plan upgrades at least once or twice a year, and before your version reaches end of support. Test in staging and check for deprecated APIs first.

### Do we really need Kubernetes?

Not always. Small applications can run well on simpler managed platforms. Choose Kubernetes when you need its flexibility and have people who can operate it.
