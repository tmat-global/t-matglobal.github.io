---
title: "AWS Cloud Security Checklist for Startups"
date: "2026-11-04"
description: "A practical AWS cloud security checklist for startups: accounts, IAM, logging, encryption, networking, detection and backups. Covers the first 30 days."
tags: ["AWS Security", "Cloud Security", "IAM", "Startups", "Security Checklist"]
image: "/blog/aws-cloud-security-checklist-startups-cover.jpg"
readingTime: "11 min read"
---

Most security problems on AWS are not clever attacks. They are leaked access keys, over-broad permissions, storage left open to the internet, ports exposed to the world and no logs to show what happened. All of them are preventable, and most can be fixed in a few weeks by a small team.

This checklist is written for startups running on AWS. It is ordered by priority, so you can work through it from the top. Cloud services change quickly, so confirm details in AWS's current documentation before you apply them.

## What is AWS security best practice for a startup?

AWS security best practice is protecting the things you control under the shared responsibility model: your identities, data, configuration and network rules. AWS secures the underlying cloud, and you secure what you build and store in it.

For a startup, that means keeping accounts separated, giving people and software only the access they need, logging everything, encrypting data, closing unnecessary network paths, and being able to recover.

## What are the biggest AWS security risks for startups?

The most common risks are credentials that leak or never expire, permissions that are too broad, publicly exposed storage and servers, and a lack of logging and alerts.

- Long-lived access keys in code, laptops, chat or public repositories.
- Everyone as administrator, in one account that holds development and production together.
- Storage buckets, databases or servers reachable from the internet by mistake.
- SSH and remote desktop ports open to the whole internet.
- No audit trail, so an incident cannot be investigated.
- Nobody watching alerts, or no budget alarms to catch a runaway bill.

## The AWS cloud security checklist: 17 controls

### Accounts and identity

1. **Separate your accounts.** Use AWS Organizations with separate accounts for production, staging and development, plus a dedicated account for logs and security tooling. Add service control policies (SCPs) as guardrails, for example to block unused regions.
2. **Lock down the root user.** MFA is now enforced for root users on all AWS account types. Use a phishing-resistant method such as a passkey or FIDO2 security key, never create access keys for root, keep recovery details in a password vault and use root only for the few tasks that need it. In Organizations, centralized root access management lets you remove root credentials from member accounts. Also set a security contact on each account.
3. **Use single sign-on with MFA for people.** Use IAM Identity Center and your identity provider, so staff sign in with temporary credentials. Avoid long-lived IAM user access keys for humans.
4. **Apply least privilege.** Give roles only the permissions they need, start narrow and add as required. Use IAM Access Analyzer to find access granted outside your organisation and permissions that are never used. Review access every quarter.
5. **Give workloads roles, not keys.** Applications on EC2, containers and Lambda should use IAM roles. For CI/CD, use OpenID Connect federation instead of stored keys. Our guide to [securing GitHub Actions workflows](/blog/secure-github-actions-workflows-ghostaction) shows how.
6. **Keep secrets in a secrets manager.** Use AWS Secrets Manager or Systems Manager Parameter Store, never code, images or chat. Rotate secrets and rotate immediately after any suspected exposure.

### Logging, detection and cost

7. **Turn on CloudTrail for the whole organisation.** Create an organisation trail covering all regions, store the logs in a separate log account with restricted access and enable log file validation.
8. **Turn on threat detection and posture checks.** Enable Amazon GuardDuty in every account and region you use. Enable AWS Security Hub (cloud security posture management) and run the AWS Foundational Security Best Practices and the CIS AWS Foundations Benchmark. Check which benchmark versions Security Hub currently supports, since newer versions are published over time.
9. **Set budgets and billing alarms.** A sudden spike can be the first sign of stolen credentials. Use AWS Budgets and Cost Anomaly Detection. See our guide to [cloud cost optimization for startups](/blog/cloud-cost-optimization-startups-aws).
10. **Send alerts to a person who will act.** Route GuardDuty, Security Hub and budget alerts to a channel with a named owner, and agree who responds out of hours.

### Data protection

11. **Block public storage by default.** Turn on S3 Block Public Access at the account level, keep encryption on, enable versioning for important buckets and log access to sensitive ones.

```bash
aws s3control put-public-access-block --account-id 123456789012 \
  --public-access-block-configuration \
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
```

12. **Encrypt volumes and databases, and keep databases private.** Turn on default EBS encryption, enable encryption at rest for RDS and other data stores, keep databases in private subnets without public addresses and control access to encryption keys with KMS key policies.

### Network and servers

13. **Close SSH and remote desktop to the internet.** No security group should allow port 22 or 3389 from 0.0.0.0/0. Use AWS Systems Manager Session Manager for administrative access instead of open ports.

```bash
aws ec2 describe-security-groups \
  --filters Name=ip-permission.from-port,Values=22 Name=ip-permission.cidr,Values=0.0.0.0/0 \
  --query "SecurityGroups[].{ID:GroupId,Name:GroupName}" --output table
```

14. **Require IMDSv2 on EC2.** The newer instance metadata service version protects instance credentials from several common attacks. Security Hub checks for it.

```bash
aws ec2 modify-instance-metadata-options --instance-id i-0123456789abcdef0 \
  --http-tokens required --http-endpoint enabled
```

### Resilience and process

15. **Back up and test restores.** Use AWS Backup, copy critical backups to another region you are allowed to use and run a restore test at least twice a year. See our guide to [cloud disaster recovery in the UAE](/blog/cloud-disaster-recovery-uae-aws-outage-lessons).
16. **Patch, scan and review infrastructure changes.** Use Systems Manager Patch Manager or rebuild from updated images, run Amazon Inspector for vulnerability scanning and define infrastructure as code with a reviewed pipeline. See our comparison of [Terraform, OpenTofu, Pulumi and CloudFormation](/blog/terraform-vs-opentofu-vs-pulumi-vs-cloudformation-startups).
17. **Write a one-page incident runbook.** Cover how to revoke keys, isolate an instance, preserve evidence and who to call. Practise it once. Our [production readiness checklist](/blog/production-readiness-checklist-saas-startups) covers incident response in more detail.

## What does a 30-day AWS security plan look like?

- **Week 1:** separate accounts, root lock-down, single sign-on with MFA, budgets and billing alarms.
- **Week 2:** organisation CloudTrail, GuardDuty, Security Hub and alerts to a named owner.
- **Week 3:** S3 Block Public Access, encryption for volumes and databases, close SSH and RDP, require IMDSv2, move secrets into a secrets manager.
- **Week 4:** backups with a restore test, an access review with Access Analyzer and the incident runbook.

## Which security standards should you measure against?

Start with the AWS Foundational Security Best Practices and the CIS AWS Foundations Benchmark, both available as automated checks in AWS Security Hub. They give you a scored list of misconfigurations to fix, in priority order.

These checks also help with SOC 2 and ISO 27001 preparation, because they show your controls are in place and monitored. They do not make you compliant on their own, so confirm requirements with your auditor.

## What mistakes do startups make on AWS?

- Running everything in one account.
- Using the root user for daily work, or sharing one administrator login.
- Leaving access keys in code or public repositories.
- Turning on security tools but never reading the alerts.
- Opening a port "temporarily" and never closing it.
- Skipping backups tests until they are needed.
- Treating security as a one-off project instead of a monthly habit.

## How can T-Mat Global help with AWS security?

T-Mat Global Technologies is a founder-led, DPIIT-recognized technology delivery partner from India. We bring production expertise from the Fortune 100 ecosystem to startups and engineering teams across the US, UAE and UK. We help with cloud infrastructure, DevOps, CI/CD, cloud security, vulnerability remediation and production support, and engagements can be project-based, ongoing maintenance or managed infrastructure support. Our founder, Sainath Mitalakar, is an AWS Certified DevOps Engineer Professional with production expertise from the Fortune 100 ecosystem.

We can review your AWS setup against this checklist, fix the gaps that matter first and set up monitoring so they stay fixed. See our [cloud security service](/services/cloud-security) and our other [services](/services).

## Get a free assessment

Need help securing your AWS environment or CI/CD pipelines? Contact T-Mat Global to discuss your requirements. Visit [t-matglobal.com](https://www.t-matglobal.com) or email info@t-matglobal.com, and [book your free assessment](/contact).

## Frequently asked questions

### What is the first thing to secure in a new AWS account?

The root user. Enable MFA, use a passkey or security key, never create access keys for it, and set up single sign-on for daily work instead.

### Is AWS secure by default?

AWS secures the underlying infrastructure, and has added safer defaults over time, but you are responsible for your configuration: identities, permissions, data, network rules and logging.

### Do startups need GuardDuty and Security Hub?

They are low-effort ways to get threat detection and a scored list of misconfigurations. Turn them on early, and make sure someone reads the alerts.

### How do I stop access keys from leaking?

Avoid long-lived keys. Use single sign-on for people and IAM roles for workloads, store secrets in a secrets manager, scan repositories for secrets and rotate anything that might be exposed.

### Should I use multiple AWS accounts?

Yes. Separate accounts for production, staging, development and logging limit the damage from a mistake or a compromise, and make permissions simpler to manage.

### What is IMDSv2?

It is a newer version of the EC2 instance metadata service that requires a session token, which protects instance credentials from several common request-forgery attacks. Security Hub checks that instances require it.

### How often should we review AWS security?

Check Security Hub findings monthly, review access quarterly and run a backup restore test at least twice a year.

### Does this checklist make us SOC 2 compliant?

No. It strengthens your technical controls and provides useful evidence, but SOC 2 also covers policies, processes and an auditor's assessment.
