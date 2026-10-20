---
title: "How to Secure GitHub Actions Workflows After GhostAction"
date: "2026-10-20"
description: "GhostAction hit 500+ GitHub accounts in October 2026. Learn how to secure GitHub Actions workflows with 10 practical controls, from SHA pinning to OIDC."
tags: ["GitHub Actions", "CI/CD Security", "DevSecOps", "Supply Chain Security", "GhostAction"]
image: "/blog/secure-github-actions-workflows-ghostaction-cover.jpg"
readingTime: "9 min read"
---

In October 2026, a credential-stealing campaign called GhostAction returned and, according to Socket, pushed a malicious workflow file into tens of thousands of repositories through more than 500 compromised GitHub accounts. Nothing in those commits exploited a software bug. The attacker simply used legitimate access to add a workflow that ships your secrets elsewhere.

If your build and deploy pipeline runs on GitHub Actions, this is a direct threat to your cloud accounts, registries and production environments. This guide explains how to secure GitHub Actions workflows with controls you can apply this week.

![How to secure GitHub Actions workflows against GhostAction credential theft](/blog/secure-github-actions-workflows-ghostaction-cover.jpg)

## What is the GhostAction attack?

GhostAction is a software supply chain attack in which an attacker with write access to a repository adds a GitHub Actions workflow that reads the repository's secrets and sends them to a server the attacker controls.

The workflow looks like ordinary automation. It runs on a push, collects environment values such as cloud keys, package registry tokens and API credentials, and exfiltrates them over HTTPS. Because the commit comes from a real maintainer account, code review habits that focus on application code often miss it.

The lesson is simple: your workflow files are executable code with access to your most sensitive credentials. Treat them with the same rigor as production code.

## Why are GitHub Actions workflows such an attractive target?

Workflows are attractive because they run with secrets, they run automatically, and they are often reviewed less carefully than application code.

A single pipeline can hold AWS access keys, container registry credentials, signing keys and deployment tokens. An attacker who controls one workflow file can reach all of them without touching your servers. This is the same class of exposure we covered in our analysis of [the Shai-Hulud CI/CD pipeline exposure](/blog/shai-hulud-cicd-pipeline-exposure), and it is why CI/CD pipeline security now sits at the center of any serious DevSecOps program.

## How do you secure GitHub Actions workflows? The 10 controls that matter

To secure GitHub Actions workflows, reduce what a workflow can access, verify what it runs, and detect when it changes. The ten controls below do exactly that, in rough priority order.

### 1. Pin third-party actions to a full commit SHA

Pinning means referencing an action by its immutable commit hash instead of a mutable tag or branch. Tags can be moved to point at malicious code, as the 2025 compromise of the popular tj-actions/changed-files action showed.

```yaml
# Risky: tag can be moved
- uses: some-org/some-action@v3

# Safer: immutable commit SHA
- uses: some-org/some-action@8e5e7e5ab8b370d6c329ec480221332ada57f0ab # v3.1.0
```

Use Dependabot for GitHub Actions to keep pinned SHAs current without manual work.

### 2. Set GITHUB_TOKEN to least privilege

The default token permissions in older repositories can be broader than needed. Set read-only at the top of every workflow and grant write access only to the job that needs it.

```yaml
permissions:
  contents: read

jobs:
  deploy:
    permissions:
      contents: read
      id-token: write
```

Also set the organization default for workflow permissions to read-only in repository settings.

### 3. Replace long-lived cloud keys with OIDC

OpenID Connect (OIDC) lets a workflow request a short-lived credential from AWS, Azure or Google Cloud instead of storing a permanent access key as a secret. If GhostAction steals a stored AWS key, it works until you rotate it. A token issued through OIDC expires in minutes.

```yaml
- uses: aws-actions/configure-aws-credentials@<full-commit-sha> # pin this
  with:
    role-to-assume: arn:aws:iam::123456789012:role/github-deploy
    aws-region: us-east-1
```

Scope the IAM role trust policy to your specific repository and branch so no other repository can assume it.

### 4. Protect workflow files with CODEOWNERS and branch protection

GhostAction works by adding or changing a workflow. Require review for any change under `.github/workflows/`.

```text
/.github/workflows/ @your-org/security-reviewers
```

Combine this with branch protection that requires pull request review, blocks force pushes and applies to administrators.

### 5. Gate production secrets behind environments with required reviewers

GitHub Environments let you store secrets for production separately and require a human approval before a job can use them. A malicious workflow on a feature branch then cannot read production credentials.

### 6. Avoid risky triggers and untrusted input

The `pull_request_target` trigger runs with repository secrets, so never check out and execute code from an untrusted fork inside it. Never place untrusted values such as pull request titles, branch names or issue text directly into a shell command, because that enables script injection. Pass them through environment variables instead.

### 7. Lock down who can add automation

Restrict allowed actions at the organization level to GitHub-authored actions plus an approved list. Enforce two-factor authentication, prefer passkeys or hardware keys for maintainers, and remove inactive collaborators. GhostAction depends on compromised accounts, so account hygiene is a pipeline control.

### 8. Turn on secret scanning and push protection

Secret scanning detects exposed credentials in your repositories, and push protection blocks them before they land. This will not stop an attacker who already has access, but it shrinks the number of live secrets available to steal in the first place.

### 9. Monitor runner network traffic

Exfiltration needs an outbound connection. Runtime tools that restrict and log egress from your runners, such as StepSecurity Harden-Runner, can flag a workflow that suddenly calls an unknown domain. For self-hosted runners, enforce egress allowlists at the network level.

### 10. Audit and rotate on a schedule

Review workflow file changes weekly, alert on any new workflow added to a repository, and rotate every long-lived secret on a fixed cadence. When a campaign like GhostAction is announced, assume exposure first and rotate fast.

## How do you know if your repositories were affected by GhostAction?

Search for unexpected workflow files, then check what those workflows could have read.

1. List recent changes to `.github/workflows/` across your organization and look for files you do not recognize.
2. Review your GitHub audit log for new workflow runs, unusual commit authors and new personal access tokens.
3. Check outbound requests in run logs for unfamiliar domains.
4. If anything looks suspicious, rotate every secret that workflow could access, including cloud keys, registry tokens and deploy keys, then revoke the compromised account's sessions and tokens.

Public indicators of compromise are published by researchers at Socket, GitGuardian and StepSecurity. Compare your findings against their latest reports.

## What does a secure GitHub Actions pipeline look like in practice?

A secure pipeline has four layers: strong identity, minimal permissions, verified dependencies and runtime visibility.

- **Identity:** two-factor authentication or passkeys for every maintainer, and OIDC instead of stored cloud keys.
- **Permissions:** read-only default tokens, scoped environments and approval gates for production.
- **Verification:** pinned action SHAs, CODEOWNERS on workflow files and automated dependency updates.
- **Visibility:** secret scanning, egress monitoring and alerts on new or changed workflows.

This layered approach also supports compliance. Auditors for SOC 2 and ISO 27001 increasingly ask how you control change to build systems and protect deployment credentials. If you are building that evidence trail, see our guide to [continuous compliance and SBOM automation](/blog/continuous-compliance-sbom) and our companion piece on [pipeline security](/blog/pipeline-security-companion).

## How does VaultRak help secure your CI/CD pipeline?

VaultRak is T-Mat Global's managed DevSecOps platform. It brings pipeline security checks, vulnerability visibility and compliance evidence into one place, so your team is not stitching together separate scanners and spreadsheets. To understand the model, read [what a managed DevSecOps platform is](/blog/what-is-managed-devsecops-platform), or explore [VaultRak](https://vaultrak.com).

T-Mat Global Technologies is a DPIIT recognized DevSecOps company in India. We bring Fortune 500 production expertise to startups and engineering teams in the US, UAE and UK, covering [CI/CD pipeline security](/services), cloud security, Kubernetes security and compliance automation. Our founder, Sainath Mitalakar, is an AWS Certified DevOps Engineer Professional and a Top 25 Global DevOps Thought Leader on Thinkers360.

## Get a free DevSecOps assessment

Not sure how exposed your GitHub Actions workflows are? Our free DevSecOps assessment reviews your workflow permissions, secrets handling, third-party actions and cloud access, then gives you a prioritized fix list. [Book your free DevSecOps assessment](/contact) and find out before an attacker does.

## Frequently asked questions

### What is GitHub Actions security?

GitHub Actions security is the practice of protecting your CI/CD workflows, the secrets they use and the third-party actions they run. It covers permissions, secrets management, dependency pinning, access control and monitoring.

### Is GitHub Actions secure by default?

No. GitHub provides strong building blocks, but defaults such as broad token permissions, mutable action tags and long-lived secrets leave gaps. You need to configure least privilege, pinning and review rules yourself.

### Why should I pin GitHub Actions to a commit SHA?

A commit SHA is immutable, while tags and branches can be moved to malicious code. Pinning ensures your pipeline runs exactly the code you reviewed.

### What is OIDC in GitHub Actions?

OpenID Connect lets a workflow obtain a short-lived credential from a cloud provider such as AWS without storing a permanent key as a secret. It limits the damage if a workflow is compromised.

### How do attackers steal secrets from GitHub Actions?

Typically by gaining write access to a repository, adding a workflow that reads secrets and sends them to an external server, or by exploiting unsafe triggers and script injection in existing workflows.

### How often should I rotate GitHub secrets?

Rotate on a fixed schedule, for example every 90 days, and immediately after any suspected exposure. Replacing static cloud keys with OIDC removes much of this burden.

### Does GitHub secret scanning stop GhostAction?

Not by itself. Secret scanning reduces how many live credentials are exposed, but you also need workflow review controls, least-privilege tokens and egress monitoring to stop a hijacked account from exfiltrating secrets.

### Can a small startup afford DevSecOps for CI/CD?

Yes. Most of the controls above are free GitHub settings. A managed DevSecOps partner can then automate monitoring and compliance evidence without hiring a full security team.
