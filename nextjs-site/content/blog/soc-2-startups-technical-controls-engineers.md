---
title: "SOC 2 for Startups: The Technical Controls Engineers Own"
date: "2026-11-09"
description: "SOC 2 for startups explained for engineers: the technical controls you own in access, change management, monitoring and backups, plus Type 1 vs Type 2."
tags: ["SOC 2", "Compliance", "Startups", "Cloud Security", "Engineering Controls"]
image: "/blog/soc-2-startups-technical-controls-engineers-cover.jpg"
readingTime: "11 min read"
---

Sooner or later, a startup gets its first serious security questionnaire from a customer. Somewhere in it is the question: "Do you have a SOC 2 report?" The usual reaction is to treat it as a paperwork project for whoever handles compliance.

That is only half the story. A large part of SOC 2 is technical: how people get access to production, how code reaches customers, how you find and fix vulnerabilities, what you log, and whether you can restore from a backup. Those are engineering decisions, and engineers own them. This guide explains SOC 2 in engineering terms, shows which controls land on your team and gives a 90-day plan for getting ready. Standards and auditor expectations change, so confirm details with your auditor.

## What is SOC 2?

SOC 2 is an independent audit report, not a certification, in which a licensed CPA firm evaluates whether a company's controls protect customer data against the American Institute of CPAs (AICPA) Trust Services Criteria.

Customers use the report to judge your security without auditing you themselves. It describes your systems, lists the controls you operate and gives the auditor's opinion on them. Your own team decides which controls to run. The auditor tests them.

## What is the difference between SOC 2 Type 1 and Type 2?

A Type 1 report describes how your controls are designed at a single point in time. A Type 2 report tests whether they operated effectively over an observation period, typically three to twelve months, with six months common for a first report.

Enterprise buyers usually prefer Type 2, because it shows controls working over time, not just existing on paper. A common path is a readiness assessment, then optionally a Type 1 to have something to show early, then the Type 2 observation period. Start the Type 2 window only when your controls are mature, because any exception during the period can appear in the report.

## Which Trust Services Criteria does a startup need?

Security is the only mandatory category. Availability, Confidentiality, Processing Integrity and Privacy are optional and depend on what you promise customers.

Most startups begin with Security. Add Availability if you commit to uptime, Confidentiality if customers expect you to protect their confidential data, and the others only when they match your service. A narrower scope is cheaper and faster, and you can widen it later.

## What technical controls do engineers own?

Your auditor decides the exact control set with you, but these are the areas that land on engineering. They line up mostly with the Security criteria for access (CC6), system operations (CC7) and change management (CC8).

1. **Access control.** Single sign-on with multi-factor authentication for every system, least-privilege roles, production access through approved roles, a documented process for joiners, movers and leavers, and a quarterly access review. Keep secrets out of code. See our guide to [secrets management in CI/CD](/blog/secrets-management-cicd-common-leaks-fixes).
2. **Encryption.** TLS for data in transit, encryption at rest for databases, storage and backups, and managed keys with restricted access.
3. **Change management.** Code review before merge, protected main branches, automated tests in CI/CD, approval for production releases, a rollback path and infrastructure changes through reviewed pull requests. Our posts on [securing GitHub Actions workflows](/blog/secure-github-actions-workflows-ghostaction) and on [Terraform, OpenTofu, Pulumi and CloudFormation](/blog/terraform-vs-opentofu-vs-pulumi-vs-cloudformation-startups) help here.
4. **Vulnerability management.** Scan code, dependencies, container images and cloud configuration, set fix targets by severity, and track every finding to closure. See our guide to [reducing mean time to remediation](/blog/reduce-mean-time-to-remediation-guide).
5. **Logging and monitoring.** Central logs, audit trails for cloud accounts and key systems, alerts that reach a named owner and evidence that someone reviews them. Our [AWS cloud security checklist](/blog/aws-cloud-security-checklist-startups) covers the basics.
6. **Incident response.** A written plan with roles and severity levels, a tested process and records of past incidents and their reviews.
7. **Backup, recovery and availability.** Automated backups, restore tests, a disaster recovery plan and capacity monitoring. See our guide to [cloud disaster recovery](/blog/cloud-disaster-recovery-uae-aws-outage-lessons).
8. **Network and endpoint security.** Restricted network rules, no open admin ports, hardened baselines, and managed laptops with disk encryption and screen locks.
9. **Secure development practices.** Secret scanning, dependency checks and a documented secure development process.
10. **Vendor management.** A list of the vendors and sub-processors that touch customer data, with a security review and an agreement for each.

## What evidence will auditors ask for?

Auditors ask for proof that each control ran, usually as exports, screenshots, tickets and logs, and they test samples across the observation period.

Typical examples:

- A list of users, roles and MFA status, with records of quarterly access reviews.
- Pull request approvals and branch protection settings, plus CI/CD run history.
- Vulnerability scan reports with remediation tickets and dates.
- Incident tickets and post-incident reviews.
- Backup configuration and a record of restore tests.
- Policy acknowledgements, onboarding and offboarding checklists, and vendor reviews.

Two quick examples of evidence you can pull yourself:

```bash
# AWS: credential report showing which users have console passwords and MFA enabled
aws iam generate-credential-report
aws iam get-credential-report --query Content --output text | base64 --decode
```

```bash
# GitHub: branch protection settings for a repository (rulesets are shown differently)
gh api repos/your-org/your-repo/branches/main/protection
```

Collect evidence continuously, not at the end. Retroactive evidence is weak, and gaps are hard to explain.

## How long does SOC 2 take?

A first Type 2 report commonly takes six to twelve months from kickoff to issued report, depending on how mature your controls are, the length of your observation period and your auditor's schedule.

Readiness and remediation come first, then the observation period, then the audit itself. A Type 1 can be quicker because it has no observation period. Treat any timeline you read online as a rough guide and ask your auditor for theirs.

## What does a 90-day engineering readiness plan look like?

- **Days 1 to 30:** agree scope with your auditor or advisor, inventory systems and vendors, turn on single sign-on and MFA everywhere, baseline who has access to what and switch on central logging.
- **Days 31 to 60:** enforce code review and branch protection, add scanning to CI/CD, write the incident response plan, set up and test backups.
- **Days 61 to 90:** finish policies that match how you really work, document vendors, automate evidence collection, run a readiness assessment and fix the gaps. Then start the observation period.

## What mistakes make SOC 2 harder?

- Starting the Type 2 observation period before controls are mature, so exceptions appear in the report.
- Writing policies that describe an ideal process nobody follows.
- Collecting evidence retroactively instead of continuously.
- Scoping too widely, with categories and systems you do not need.
- Relying on a tool alone. Tools collect evidence, but people still have to run the controls.
- Forgetting offboarding, shared accounts and unmanaged laptops.

## What does SOC 2 not do?

SOC 2 does not guarantee that you will never be breached, and it is not a legal compliance regime. It does not replace obligations such as data protection laws, and it does not certify you. It is an auditor's opinion about your controls over a defined period.

## Are the SOC 2 criteria changing?

The AICPA has proposed revisions to the Trust Services Criteria, including how AI is addressed. Ask your auditor which version applies to your audit period, and keep an eye on the final published criteria.

## How can T-Mat Global help with SOC 2 readiness?

T-Mat Global Technologies is a founder-led, DPIIT-recognized technology delivery partner from India. We bring production expertise from the Fortune 100 ecosystem to startups and engineering teams across the US, UAE and UK. We help with cloud infrastructure, DevOps, CI/CD, cloud security, vulnerability remediation and production support, and engagements can be project-based, ongoing maintenance or managed infrastructure support. Our founder, Sainath Mitalakar, is an AWS Certified DevOps Engineer Professional with production expertise from the Fortune 100 ecosystem.

We help implement the technical controls: access, pipelines, vulnerability remediation, logging, backups and evidence-friendly automation. We are not an auditor and we do not issue SOC 2 reports. You will need a licensed CPA firm for that. See our [compliance automation](/services/compliance-automation) and [vulnerability management](/services/vulnerability-management) services.

## Get a free assessment

Preparing for SOC 2 and unsure which technical controls you are missing? Contact T-Mat Global to discuss your requirements. Visit [t-matglobal.com](https://www.t-matglobal.com) or email info@t-matglobal.com, and [book your free assessment](/contact).

## Frequently asked questions

### What is SOC 2?

SOC 2 is an independent audit report in which a licensed CPA firm evaluates your controls against the AICPA Trust Services Criteria. It is an attestation, not a certification.

### Do startups need SOC 2?

Not by law, but many business customers ask for it before they buy. If you sell to mid-size and large companies, a SOC 2 report can shorten security reviews.

### What is the difference between SOC 2 Type 1 and Type 2?

Type 1 describes how controls are designed at one point in time. Type 2 tests whether they operated effectively over an observation period, typically three to twelve months.

### Which SOC 2 categories should a startup choose?

Security is required. Add Availability, Confidentiality, Processing Integrity or Privacy only if they match what you promise customers. A narrow scope is faster and cheaper.

### How long does a first SOC 2 report take?

Commonly six to twelve months for a Type 2, depending on readiness, the length of the observation period and your auditor's schedule.

### Can a tool make us SOC 2 compliant?

No. Tools help collect evidence and track tasks, but your team still has to run the controls, and an independent auditor issues the report.

### What technical controls does SOC 2 focus on?

Access control, encryption, change management, vulnerability management, logging and monitoring, incident response, backups and recovery, network and endpoint security, and vendor management.

### Is SOC 2 the same as ISO 27001?

No. SOC 2 is an attestation report in the AICPA framework, and ISO 27001 is a certification against an international standard. Many companies need one or both depending on their customers.
