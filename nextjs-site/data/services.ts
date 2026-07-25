export interface Service {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  expandedDescription: string[];
  whatsIncluded: string[];
  whoThisIsFor: string;
}

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Software Development",
    seoTitle: "Custom Software Development | Secure SDLC by DevSecOps Experts",
    description:
      "Full-cycle custom software development delivered with security built in from the first commit. Web platforms, SaaS products, and enterprise systems designed, built, and shipped by a team that treats DevSecOps as the default, not an add-on.",
    expandedDescription: [
      "Most software gets built by a team that hands off to security once, right before launch — if at all. That model produces products that ship fast and then spend the next two years accumulating technical and security debt nobody budgeted time to fix. It's also how founders end up needing a second team just to make their first team's code deployable to an enterprise customer.",
      "T-Mat Global builds software the way we secure it: as one continuous discipline, not two handoffs. We work with founders and businesses from requirements and architecture through to production, designing systems that are secure by default because the same engineers writing the code are the ones who understand the threat model, the compliance requirements, and the infrastructure it will run on.",
      "Our teams build web platforms, SaaS products, and enterprise systems end to end — frontend, backend, APIs, data layer, and cloud infrastructure — following a secure SDLC with code review, automated testing, and security scanning built into every pull request, not bolted on before a release. What we ship is deployable to the same cloud environments and CI/CD pipelines we harden for our DevSecOps clients, because it's built by the same team.",
      "For founders and businesses that don't want to coordinate between a development shop and a separate security vendor, that means one partner accountable for the whole lifecycle: what gets built, how it's secured, and how it runs once real users depend on it.",
    ],
    whatsIncluded: [
      "Requirements gathering and system architecture design",
      "Secure SDLC with code review, automated testing, and security scanning on every pull request",
      "Web and API development across your full stack",
      "Cloud-native deployment on AWS, Azure, or GCP",
      "QA and security testing before every release",
      "Post-launch managed support and ongoing feature development",
    ],
    whoThisIsFor:
      "Founders and businesses who want one partner to build and operate their product — from the first line of code to the infrastructure it runs on — instead of coordinating between a separate development shop and security vendor.",
  },
  {
    slug: "devsecops-consulting",
    title: "DevSecOps Consulting",
    seoTitle: "DevSecOps Consulting Services | Pure-Play DevSecOps Company India",
    description:
      "Embed security into every stage of your delivery pipeline. We assess, design, and implement DevSecOps practices that let enterprises ship faster without compromising on security or compliance.",
    expandedDescription: [
      "For most enterprises, security still lives at the end of the software delivery lifecycle — a compliance gate that appears days before a release, staffed by a team that has never seen the code until it lands on their desk. That model does not scale past a handful of applications, and it does not survive contact with a board asking why the last incident took six weeks to detect.",
      "T-Mat Global's DevSecOps consulting practice starts by mapping how security actually moves through your organization today: who owns which control, where automation already exists, and where it breaks down into manual, ticket-driven processes. From that baseline, we build a target-state architecture that embeds security checks directly into the tools your engineers already use — pull requests, build pipelines, and deployment gates — rather than layering a new process on top of the ones they route around.",
      "Implementation is hands-on. Our engineers work alongside your platform and security teams inside GitHub Actions, GitLab, Jenkins, or Azure DevOps, translating policy into pipeline configuration your teams can maintain long after our engagement ends. We prioritize the changes that reduce the most risk per engineering hour spent, sequenced so releases keep shipping throughout the rollout.",
      "The result is a delivery pipeline where security is a property of the system, not a department. For CTOs managing distributed teams across US, UAE, and UK time zones, that means fewer late-stage surprises, a clearer audit trail, and a security posture that improves with every release instead of degrading between reviews.",
    ],
    whatsIncluded: [
      "DevSecOps maturity assessment benchmarked against your current SDLC",
      "Target-state security architecture and toolchain roadmap",
      "Policy-as-code design for CI/CD security gates",
      "Threat modeling workshops for your most critical applications",
      "Hands-on implementation support alongside your engineering teams",
      "KPI and metrics framework to track security debt over time",
    ],
    whoThisIsFor:
      "Engineering and security leaders at mid-to-large enterprises who need to move from reactive, end-of-cycle security reviews to continuous, pipeline-embedded security — without slowing down release velocity or rebuilding their toolchain from scratch.",
  },
  {
    slug: "cicd-pipeline-security",
    title: "CI/CD Pipeline Security",
    seoTitle: "CI/CD Pipeline Security Services | DevSecOps Company India",
    description:
      "Harden your build and release pipelines with automated security gates, secret scanning, SAST/DAST integration, and signed artifact workflows across GitHub Actions, GitLab, Jenkins, and Azure DevOps.",
    expandedDescription: [
      "Your CI/CD pipeline has more privileged access than almost any system in your environment — it can read your source code, pull your secrets, and push directly to production. Attackers know this, which is why pipeline compromise has become one of the fastest-growing categories of enterprise breach. Yet most pipelines are still secured with the same ad hoc permissions and unreviewed plugins they were built with on day one.",
      "T-Mat Global hardens build and release pipelines with automated, enforceable controls rather than manual checklists. That starts with secret scanning to catch credentials before they're committed, and extends through SAST and DAST integration that runs on every build rather than a quarterly scan. We design signed artifact workflows and software bill of materials (SBOM) generation so every build is traceable back to its source, and every deployment can be verified before it runs.",
      "We work across the toolchains enterprises actually run — GitHub Actions, GitLab, Jenkins, and Azure DevOps — configuring branch protection, approval workflows, and least-privilege pipeline permissions so no single compromised credential or misconfigured job can reach production unchecked.",
      "For CTOs, this converts pipeline security from a point-in-time audit finding into a continuously enforced standard — one that holds whether your team ships ten times a day or ten times a year.",
    ],
    whatsIncluded: [
      "Pipeline security architecture review across your existing CI/CD tooling",
      "Automated secret scanning and credential leak prevention",
      "SAST and DAST integration with policy-based build gates",
      "Signed artifacts and software bill of materials (SBOM) workflows",
      "Branch protection, approval workflows, and least-privilege pipeline permissions",
      "Ongoing pipeline security monitoring and gate tuning",
    ],
    whoThisIsFor:
      "Platform and DevOps teams running GitHub Actions, GitLab CI, Jenkins, or Azure DevOps who need enforceable, automated security gates in place of manual sign-offs and tribal-knowledge permissions.",
  },
  {
    slug: "cloud-security",
    title: "Cloud Security",
    seoTitle: "Cloud Security Consulting | AWS, Azure & GCP Security Experts",
    description:
      "Secure AWS, Azure, and GCP environments with best-practice architecture reviews, IAM hardening, guardrails, and continuous posture management aligned to CIS benchmarks.",
    expandedDescription: [
      "Misconfiguration, not zero-day exploits, is still the leading cause of cloud breaches — an overly permissive IAM role, a public storage bucket, a security group opened for a debugging session and never closed. Multiply that risk across AWS, Azure, and GCP accounts managed by different teams on different release cadences, and the exposure compounds faster than most security teams can track manually.",
      "T-Mat Global's cloud security engagements begin with an architecture and configuration review benchmarked against CIS standards for your specific cloud providers, followed by IAM hardening that replaces broad, standing permissions with least-privilege access tied to actual usage. We deploy guardrails — service control policies, Azure Policy, or GCP organization policies — that prevent risky configurations before they ship, rather than flagging them after the fact.",
      "Because cloud environments change daily, a one-time audit loses relevance within weeks. We set up continuous cloud security posture management so drift is caught and corrected automatically, with logging and alerting configured to support real incident response rather than generate noise nobody reads.",
      "For enterprises running production workloads across multiple clouds and regions — including US, UAE, and UK data residency requirements — this gives your CTO and board a defensible, continuously verified security posture instead of a point-in-time report that's outdated the day it's delivered.",
    ],
    whatsIncluded: [
      "Cloud architecture and configuration review against CIS benchmarks",
      "IAM least-privilege redesign and access governance",
      "Guardrail deployment (SCPs, Azure Policy, GCP Organization Policies)",
      "Network segmentation and perimeter hardening",
      "Continuous cloud security posture management (CSPM) setup",
      "Incident-ready logging, monitoring, and alerting configuration",
    ],
    whoThisIsFor:
      "Enterprises running production workloads on AWS, Azure, or GCP that need an independent security review and ongoing posture management — not just a point-in-time compliance audit.",
  },
  {
    slug: "container-kubernetes-security",
    title: "Container & Kubernetes Security",
    seoTitle: "Kubernetes Security & Container Security Services",
    description:
      "Protect containerized workloads end to end: image scanning, admission controls, runtime protection, and hardened Kubernetes cluster configurations.",
    expandedDescription: [
      "Kubernetes gives engineering teams enormous flexibility to ship containerized workloads at scale — and gives attackers an equally large surface if that flexibility isn't constrained. A single unscanned base image, an overly permissive admission policy, or a misconfigured RBAC role can turn a routine deployment into a cluster-wide incident.",
      "T-Mat Global secures containerized workloads end to end, starting with image scanning integrated directly into your build pipeline so vulnerable or untrusted images never reach a registry, let alone a cluster. We design admission control policies — using OPA/Gatekeeper or Kyverno — that enforce your security standards automatically at deploy time, and configure runtime protection that monitors workload behavior for the kind of anomalies static scanning can't catch.",
      "Cluster hardening follows the CIS Kubernetes Benchmark, covering RBAC configuration, secrets management, and network policies, so the platform itself is defensible, not just the workloads running on it. We also review your base image and registry supply chain, since container security is only as strong as the images it starts from.",
      "The outcome is a Kubernetes platform your engineering teams can deploy to confidently and your security team can actually reason about — whether you're running EKS, AKS, GKE, or a self-managed cluster.",
    ],
    whatsIncluded: [
      "Container image scanning integrated into the build pipeline",
      "Kubernetes admission control policy design (OPA/Gatekeeper or Kyverno)",
      "Runtime threat detection and workload behavior monitoring",
      "Cluster hardening against the CIS Kubernetes Benchmark",
      "Secrets management and RBAC configuration review",
      "Supply chain security for base images and registries",
    ],
    whoThisIsFor:
      "Teams running production workloads on Kubernetes — EKS, AKS, GKE, or self-managed — who need end-to-end container security rather than image scanning in isolation.",
  },
  {
    slug: "compliance-automation",
    title: "Compliance Automation",
    seoTitle: "Compliance Automation Services | SOC 2, ISO 27001 & HIPAA",
    description:
      "Automate evidence collection and controls for SOC 2, ISO 27001, HIPAA, and PCI DSS so audits become a byproduct of your pipeline, not a fire drill.",
    expandedDescription: [
      "For most security and compliance teams, audit season means weeks of manually pulling screenshots, chasing down evidence across a dozen tools, and reconstructing controls that were never quite documented the first time. It's expensive, it's error-prone, and it tells you nothing about whether you're actually secure between audits.",
      "T-Mat Global automates compliance for SOC 2, ISO 27001, HIPAA, and PCI DSS by mapping your existing controls directly to framework requirements and pulling evidence automatically from the tools you already run — your cloud provider, your CI/CD platform, your identity provider — instead of asking engineers to manually document what a script could verify in seconds.",
      "We build continuous compliance dashboards so gaps surface as they emerge, not during the two weeks before an auditor arrives, and we prioritize remediation by actual audit risk rather than treating every finding as equally urgent. Documentation and control narratives are generated as a byproduct of the automation, not a separate deliverable someone has to maintain by hand.",
      "For CTOs and compliance leaders operating across US, UAE, and UK regulatory environments, this turns audit readiness into an ongoing state rather than an annual scramble — and gives your team back the time they were spending proving security instead of practicing it.",
    ],
    whatsIncluded: [
      "Control mapping across SOC 2, ISO 27001, HIPAA, and PCI DSS",
      "Automated evidence collection from your existing toolchain",
      "Continuous compliance monitoring dashboards",
      "Audit-ready documentation and control narratives",
      "Gap remediation roadmap prioritized by audit risk",
      "Ongoing support through audit cycles and renewals",
    ],
    whoThisIsFor:
      "Compliance, security, and engineering leaders preparing for a first-time certification or looking to cut the manual overhead of maintaining an existing one.",
  },
  {
    slug: "vulnerability-management",
    title: "Vulnerability Management",
    seoTitle: "Vulnerability Management Services | Risk-Based Remediation",
    description:
      "Continuous scanning, risk-based prioritization, and remediation tracking across applications, infrastructure, and dependencies.",
    expandedDescription: [
      "Most vulnerability programs drown in volume long before they run out of budget. Scanners return thousands of findings across applications, infrastructure, and dependencies, and without a way to separate the critical from the cosmetic, teams either burn out chasing every CVE or quietly stop trying.",
      "T-Mat Global builds vulnerability management programs around risk, not raw counts. We run continuous scanning across your application code, infrastructure, and third-party dependencies, then prioritize findings by actual exploitability and business impact — a critical vulnerability on an internet-facing payment system is not the same problem as a low-severity finding on an internal dev tool, and your remediation queue should reflect that.",
      "Every finding is tracked to resolution through a centralized system with clear ownership and SLAs, backed by software composition analysis to catch risk introduced through open-source dependencies. We report at both the engineering level — actionable tickets, not PDF dumps — and the executive level, so your board sees trend lines, not noise.",
      "The result is a vulnerability program your team can sustain indefinitely: fewer findings that matter get missed, and the ones that don't matter stop consuming engineering time they were never worth.",
    ],
    whatsIncluded: [
      "Continuous vulnerability scanning across applications, infrastructure, and dependencies",
      "Risk-based prioritization aligned to exploitability and business impact",
      "Centralized remediation tracking with defined SLAs",
      "Software composition analysis (SCA) for open-source dependency risk",
      "Executive and engineering-level reporting dashboards",
      "Recurring remediation review cadences with your teams",
    ],
    whoThisIsFor:
      "Organizations with a growing backlog of vulnerability findings who need a prioritization framework and remediation process — not another scanner generating a report nobody acts on.",
  },
  {
    slug: "infrastructure-as-code",
    title: "Infrastructure as Code",
    seoTitle: "Infrastructure as Code Services | Terraform & Policy as Code",
    description:
      "Terraform and Ansible based provisioning with policy-as-code checks so every environment is reproducible, auditable, and secure by default.",
    expandedDescription: [
      "Manual infrastructure provisioning doesn't just slow teams down — it introduces drift between environments that makes \"it worked in staging\" a permanent feature of your incident reviews rather than an occasional annoyance. Every hand-configured resource is a resource nobody can fully reproduce, audit, or roll back with confidence.",
      "T-Mat Global builds Terraform and Ansible-based provisioning so every environment — development, staging, and production — is defined in version-controlled code, reviewable in a pull request, and reproducible on demand. We design reusable modules with secure defaults baked in, so teams provisioning new infrastructure inherit your security standards automatically instead of reimplementing them from scratch each time.",
      "Policy-as-code checks, using tools like OPA, Sentinel, or Checkov, run against every proposed change before it's applied, catching misconfigurations at review time rather than after they've been provisioned. We also implement state management and drift detection, so any manual change outside the code is surfaced immediately rather than silently diverging from what's documented.",
      "For platform teams, this means infrastructure that's not just faster to provision, but genuinely auditable — every change has a commit, a reviewer, and a policy check behind it, which matters as much to your compliance team as it does to your on-call engineer.",
    ],
    whatsIncluded: [
      "Terraform and Ansible module design for your environments",
      "Policy-as-code checks (OPA, Sentinel, or Checkov) embedded in provisioning workflows",
      "State management and drift detection setup",
      "Environment reproducibility across dev, staging, and production",
      "Secure-by-default reusable infrastructure modules",
      "Documentation and handover for your platform team",
    ],
    whoThisIsFor:
      "Platform engineering teams moving from manual or partially-automated provisioning toward fully auditable, policy-enforced infrastructure as code.",
  },
  {
    slug: "managed-devsecops",
    title: "24/7 Managed DevSecOps",
    seoTitle: "Managed DevSecOps Services | 24/7 Support for US, UAE & UK",
    description:
      "Round-the-clock monitoring, incident response, and pipeline support delivered from India with Fortune 500 delivery standards, built for US, UAE, and UK time zones.",
    expandedDescription: [
      "Security incidents and pipeline failures don't wait for business hours, and for enterprises operating across US, UAE, and UK time zones, \"business hours\" barely exists as a single window to begin with. Building an internal team that can cover all three around the clock means hiring, training, and retaining specialized engineers across multiple geographies — an expensive proposition even before you account for the 3 a.m. pages nobody wants to own.",
      "T-Mat Global's managed DevSecOps service provides round-the-clock monitoring of your pipelines, infrastructure, and security alerts, backed by defined incident response runbooks and clear on-call escalation paths. Our delivery team is structured specifically around US, UAE, and UK working hours, so there is always an engineer who understands your environment actively watching it — not a follow-the-sun handoff that loses context at every shift change.",
      "Beyond monitoring, we provide ongoing pipeline maintenance and support, keeping your CI/CD and security tooling current without waiting for a dedicated project to justify the work. Monthly reporting covers both delivery performance and security posture, giving your leadership team a consistent, board-ready view of how the environment is trending.",
      "This is delivered to the same standard our team applies across every engagement: Fortune 500 delivery discipline, SLA-backed response times, and a dedicated team that treats your production environment as if it were their own — because for the hours they're covering it, it is.",
    ],
    whatsIncluded: [
      "Round-the-clock monitoring of pipelines, infrastructure, and security alerts",
      "Defined incident response runbooks and on-call escalation paths",
      "Ongoing pipeline maintenance and support across your toolchain",
      "Monthly security and delivery performance reporting",
      "A dedicated delivery team aligned to US, UAE, and UK working hours",
      "SLA-backed response times for critical incidents",
    ],
    whoThisIsFor:
      "Enterprises that need continuous DevSecOps coverage across time zones without building and staffing an internal 24/7 team from scratch.",
  },
];
