---
title: "Enterprise Observability: What to Monitor and What to Skip"
date: "2026-11-18"
description: "Enterprise observability explained: what to monitor, what to skip, how to use logs, metrics and traces, set alerts and SLOs, and control telemetry costs."
tags: ["Observability", "OpenTelemetry", "Monitoring", "SRE", "DevOps"]
image: "/blog/enterprise-observability-what-to-monitor-and-skip-cover.jpg"
readingTime: "12 min read"
---

Most large organisations do not have a shortage of monitoring data. They have too much of it. Thousands of metrics, terabytes of logs and hundreds of alerts accumulate over the years, the bill keeps rising, and when a customer-facing system slows down, nobody can quickly say where or why. Teams stop trusting alerts, dashboards go unread and incidents are still discovered by customers.

Better observability is less about collecting more and more about collecting the right things, connecting them and making them useful to the people who respond. This guide explains what to monitor first, what to stop collecting, how to design alerts people act on, where OpenTelemetry fits and how to keep costs under control across a large organisation. Tools and standards change quickly, so check the current documentation for your platform.

## What is observability?

Observability is the ability to understand what is happening inside a system from the data it produces, so you can answer questions you did not plan for in advance.

Monitoring checks known conditions: is the server up, is the error rate above a threshold? Observability adds the ability to investigate unknown problems: why did checkout slow down for one region after a release? It relies on three kinds of telemetry, plus a fourth that is emerging.

## What are the main telemetry signals and what is each for?

Metrics tell you that something is wrong, traces show where, and logs explain what happened. A fourth signal, profiles, shows which code is responsible.

- **Metrics:** numbers over time, such as request rate, error rate, latency and CPU. Cheap to store, ideal for dashboards and alerts.
- **Logs:** timestamped records of events. Rich in detail, but expensive at volume and risky if they contain sensitive data.
- **Traces:** the path of one request through many services, with the time spent in each. Essential for diagnosing slowness in distributed systems.
- **Profiles:** sampled stack traces showing which functions use CPU and memory. This signal reached public alpha in OpenTelemetry in March 2026, and it is not yet advised for anything critical.

The most powerful setups link them: an alert from a metric leads to a trace, and the trace links to the logs of the exact request.

## What should a business monitor first?

Start with what your customers and your business feel, then work inward to the systems underneath.

1. **User-facing outcomes.** Availability, latency and error rate for your critical journeys, such as login, search, checkout and payment. Add synthetic checks that run those journeys continuously from outside.
2. **The four golden signals** for every service: latency, traffic, errors and saturation.
3. **Business indicators,** such as orders, payments and sign-ups per minute. A sudden drop often shows an incident before any technical alarm.
4. **Dependencies,** including databases, queues, third-party APIs, DNS and certificate expiry dates.
5. **Saturation of resources:** CPU, memory, disk, connection pools, queue depth and thread pools.
6. **Change events,** such as deployments, configuration changes and feature flag switches, shown on your dashboards so you can connect cause and effect.
7. **Security-relevant signals:** failed logins, permission changes and unusual access. See our [AWS cloud security checklist](/blog/aws-cloud-security-checklist-startups).
8. **Cost and capacity trends,** so growth and waste do not surprise you.

## What should you skip or stop collecting?

Stop collecting data that nobody uses, that costs more than it is worth or that creates risk.

- **Alerts on raw CPU or memory** that do not affect customers. They train people to ignore pages.
- **High-cardinality metrics.** Labels with unbounded values, such as user IDs or full URLs, multiply storage and query costs sharply.
- **Debug-level logs in production** at full volume, except when you are actively investigating.
- **Duplicate telemetry** sent by several agents to several tools.
- **Dashboards nobody opens** and alerts with no owner.
- **Sensitive data in logs and traces,** such as personal data, tokens and passwords. This is a security and compliance problem as much as a cost one.
- **Tracing every request at 100%** when sampling would answer the same questions.
- **Vanity metrics** that look impressive but never drive a decision.

A useful rule: if no one has acted on a signal in the last quarter, question why you collect it.

## How do you design alerts that people act on?

Alert on symptoms that customers feel, send each alert to a named owner with a runbook, and reserve pages for problems that need a human right now.

- **Symptoms, not causes.** A high error rate on checkout matters more than a busy disk on one server.
- **Two levels.** Page for urgent, customer-impacting problems. Create tickets for issues that can wait.
- **Owner and runbook.** Every alert says who responds and what to check first.
- **Use service level objectives.** Define a target, such as a share of successful requests over 30 days, and alert when you are using up the error budget too quickly. This catches real problems and ignores harmless blips.
- **Review monthly.** Delete or fix alerts that fire often without action.

```yaml
# Prometheus alert example: adapt metric and service names to your stack
- alert: CheckoutHighErrorRate
  expr: |
    sum(rate(http_requests_total{service="checkout",status=~"5.."}[5m]))
      / sum(rate(http_requests_total{service="checkout"}[5m])) > 0.02
  for: 10m
  labels:
    severity: page
  annotations:
    summary: "Checkout error rate above 2% for 10 minutes"
    runbook: "https://wiki.example.com/runbooks/checkout-errors"
```

Our [production readiness checklist](/blog/production-readiness-checklist-saas-startups) and [incident response plan template](/blog/incident-response-plan-startups-template) cover the response side.

## Where does OpenTelemetry fit?

OpenTelemetry is the vendor-neutral standard for generating and collecting traces, metrics and logs, and it gives large organisations one consistent way to instrument many teams and tools.

It graduated from the Cloud Native Computing Foundation in May 2026, the highest maturity level, alongside Kubernetes and Prometheus. Traces, metrics and logs are stable signals, while profiles are in public alpha. Maturity varies by language, so check the status for the languages you use before you standardise.

The most useful piece for enterprises is the Collector, a pipeline that receives telemetry, processes it and sends it on. It lets you filter noisy data, sample, remove sensitive fields and send data to more than one backend without changing application code. Many organisations run it alongside Prometheus, which remains common for metrics.

```yaml
# Illustrative OpenTelemetry Collector pipeline: adapt before use
receivers:
  otlp:
    protocols:
      grpc: {}
      http: {}

processors:
  memory_limiter:
    check_interval: 1s
    limit_mib: 512
  attributes/redact:
    actions:
      - key: user.email
        action: delete
  batch: {}

exporters:
  otlp:
    endpoint: observability-backend.example.com:4317

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [memory_limiter, attributes/redact, batch]
      exporters: [otlp]
```

## How do you control observability costs?

Control cost by deciding what to keep, for how long and at what detail, and by filtering before data reaches an expensive backend.

- **Sample traces,** keeping all errors and slow requests and a fraction of normal ones.
- **Set log levels and retention** by value. Keep recent data hot, move older data to cheaper storage and delete what you have no reason to keep.
- **Limit metric cardinality** and drop labels that are not used.
- **Filter and aggregate in the Collector** before data is stored.
- **Show teams their own usage,** so the people who create data see its cost.
- **Review quarterly.** Remove unused dashboards, alerts and data sources.

See our guide to [cloud cost optimization](/blog/cloud-cost-optimization-startups-aws) for the wider approach.

## How do you build observability across a large organisation?

Give teams a shared standard and a well-supported default path, and let them add detail for their own services.

- **Shared conventions:** naming, labels, severity levels and dashboard templates, so any engineer can read any team's data.
- **A service catalogue** with an owner for every service, so alerts reach the right people.
- **A platform team** that provides instrumentation libraries, the Collector and templates.
- **Service level objectives per service,** reviewed with the business.
- **Data governance:** classification of what may appear in telemetry, access controls, retention rules and audit logs. This also supports audits such as [SOC 2](/blog/soc-2-startups-technical-controls-engineers).
- **Training and on-call practice,** so the data is used in real incidents.

## What does a 90-day plan look like?

- **Days 1 to 30:** list your critical customer journeys, define indicators and objectives for them, name owners and remove the noisiest alerts.
- **Days 31 to 60:** standardise instrumentation on OpenTelemetry for new services, build template dashboards, add tracing for the main journeys and link alerts to runbooks.
- **Days 61 to 90:** add sampling, retention rules and cost reporting, redact sensitive data in the Collector and review what you learned from real incidents. Our guide to [zero-downtime deployments](/blog/zero-downtime-deployments-blue-green-canary-rolling) shows how good telemetry supports safer releases, and our [Kubernetes production readiness checklist](/blog/kubernetes-production-readiness-checklist) covers cluster-level signals.

## What mistakes do companies make with observability?

- Buying more tools instead of fixing alert quality.
- Alerting on causes, so teams drown in noise while customers still find problems first.
- Letting every team choose its own naming, so cross-team investigation is slow.
- Putting personal data, tokens or secrets in logs.
- Keeping everything forever, then cutting retention in a panic when the bill arrives.
- Ignoring business metrics, so a silent failure goes unseen.
- Never linking metrics, traces and logs together.

## How can T-Mat Global help with observability?

T-Mat Global Technologies is a founder-led, DPIIT-recognized technology delivery partner from India. We bring production expertise from the Fortune 100 ecosystem to companies and engineering teams across the US, UAE and UK. We help with cloud infrastructure, DevOps, CI/CD, cloud security, vulnerability remediation and production support, and engagements can be project-based, ongoing maintenance or managed infrastructure support. Our founder, Sainath Mitalakar, is an AWS Certified DevOps Engineer Professional with production expertise from the Fortune 100 ecosystem.

We can review your monitoring and alerting, set up OpenTelemetry pipelines and dashboards, reduce noise and cost, and support on-call and incident response. See our [services](/services) and our [managed operations](/services/managed-devsecops) support.

## Get a free assessment

Want better visibility without the noise and the bill? Contact T-Mat Global to discuss your requirements. Visit [t-matglobal.com](https://www.t-matglobal.com) or email info@t-matglobal.com, and [book your free assessment](/contact).

## Frequently asked questions

### What is the difference between monitoring and observability?

Monitoring checks known conditions against thresholds. Observability lets you investigate unexpected problems by exploring metrics, logs and traces that your systems produce.

### What are the three pillars of observability?

Metrics, logs and traces. Metrics show that something is wrong, traces show where, and logs explain what happened. Profiles are an emerging fourth signal.

### What should we monitor first?

Customer-facing outcomes such as availability, latency and errors for your critical journeys, then the four golden signals for each service, business indicators and key dependencies.

### Is OpenTelemetry production ready?

Traces, metrics and logs are stable signals, and OpenTelemetry graduated from the CNCF in May 2026. Maturity varies by language and component, and the profiles signal is still in alpha, so check what you plan to use.

### How do we reduce observability costs?

Sample traces, limit metric cardinality, set log levels and retention by value, filter and aggregate before storage and review unused data and dashboards each quarter.

### How many alerts is too many?

If people ignore alerts, you have too many. Page only for urgent customer-impacting problems, give every alert an owner and a runbook and remove alerts that do not lead to action.

### Should we put everything in one tool?

Not necessarily. Standardise how data is produced and collected, for example with OpenTelemetry, so you can change or combine backends without re-instrumenting your applications.

### How do we keep sensitive data out of logs and traces?

Decide what may appear in telemetry, redact fields at the source and in the Collector, restrict access and set retention limits. Test for it, since leaks often arrive through new code.
