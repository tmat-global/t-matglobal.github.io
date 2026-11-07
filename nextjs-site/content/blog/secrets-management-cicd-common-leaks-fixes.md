---
title: "Secrets Management in CI/CD: 7 Common Leaks and Fixes"
date: "2026-11-06"
description: "Hardcoded keys, logs, forks and old commits: see 7 common ways CI/CD secrets leak and how to fix each one with scanning, OIDC, vaults and rotation."
tags: ["Secrets Management", "CI/CD Security", "DevSecOps", "GitHub Actions", "Cloud Security"]
image: "/blog/secrets-management-cicd-common-leaks-fixes-cover.jpg"
readingTime: "10 min read"
---

Every engineering team has a mental list of the times a secret ended up somewhere it should not be. A cloud key pasted into a config file "just for testing". A token printed in a build log because someone switched on debug mode at midnight. A deployment credential created for one project two years ago that now works in six. These are not unusual mistakes. They are the standard ways CI/CD secrets leak, in startups and large companies alike.

What is worth understanding clearly in 2026 is that most of these leaks are not carelessness. They are system problems: pipelines that need credentials to work, tools that make it easy to put them in the wrong place, and no routine for finding and replacing them. GitGuardian's State of Secrets Sprawl 2026 report counted about 28.6 million new hardcoded secrets in public GitHub commits in 2025, up 34% in a year, and found that AI-assisted commits leaked secrets at roughly twice the baseline rate. This guide identifies seven of the most common ways CI/CD secrets leak and explains how to fix each one.

## What is secrets management in CI/CD?

Secrets management in CI/CD is the practice of storing, delivering, rotating and auditing credentials, such as API keys, tokens, passwords and certificates, so that pipelines can use them without people or code exposing them.

The goal is not to hide secrets better. It is to have fewer of them, make them short-lived, give each one the narrowest possible power and know where every one lives.

## Leak 1: Secrets committed to the repository

The most common leak is also the simplest: a secret written into code, a configuration file, a `.env` file or an AI tool's configuration, and then committed to Git.

Deleting the file in the next commit does not fix it, because the secret stays in the history and in every clone. GitGuardian found that roughly 64% of secrets leaked in 2022 were still valid years later, which shows how rarely they are rotated. The same report found about 24,000 secrets in MCP-related configuration files on public GitHub, and that internal repositories were about six times more likely than public ones to contain exposed critical credentials. Private does not mean safe.

**The fix:**

- Turn on secret scanning and push protection where your platform offers them (availability depends on your plan), and add a scanner to pre-commit hooks and CI so leaks are caught before they are pushed.
- Keep `.env` files out of Git, and commit a `.env.example` with fake values instead.
- If a real secret was ever committed, rotate it first. Rewriting history helps, but it does not undo the exposure.

```bash
# Scan the working tree and history for secrets (example with Gitleaks)
gitleaks detect --source . --verbose
```

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.18.4   # example only: pin to the version you have reviewed
    hooks:
      - id: gitleaks
```

## Leak 2: Secrets printed in build logs

Logs are readable by more people than the secrets inside them should ever reach, and automatic masking only works for values the system knows are secret.

Secrets reach logs through `echo` statements, environment dumps, debug mode, shell tracing and error messages that include a URL with a token in it. Derived values, such as a base64 version of a secret, are not masked automatically. In March 2025, a compromised GitHub Action dumped secrets into the workflow logs of more than 23,000 repositories. In public repositories those logs are readable by anyone.

**The fix:**

- Never print secrets, and avoid shell tracing (`set -x`) in steps that use them.
- Mask derived values explicitly.
- Limit who can read logs and how long they are kept, and scan logs for secret patterns.
- Pin third-party actions so a changed action cannot start printing your environment.

```yaml
- name: Use a derived value safely
  run: |
    TOKEN_B64=$(printf '%s' "$API_TOKEN" | base64)
    echo "::add-mask::$TOKEN_B64"
  env:
    API_TOKEN: ${{ secrets.API_TOKEN }}
```

## Leak 3: Long-lived cloud keys stored as pipeline variables

A static cloud access key never expires, so anyone who obtains it keeps access until someone notices and rotates it.

Many pipelines still store an AWS, Azure or Google Cloud key as a repository secret. One leak, from a log, a compromised action or a stolen laptop, gives an attacker the same access as your deployment pipeline.

**The fix:** use OpenID Connect (OIDC) federation, so the pipeline requests a short-lived credential for each run instead of storing a permanent key. AWS, Azure and Google Cloud all support this for GitHub Actions and other CI systems. Restrict the trust policy to your specific repository and branch, so no other repository can assume the role.

```yaml
permissions:
  id-token: write
  contents: read

steps:
  - uses: aws-actions/configure-aws-credentials@<full-commit-sha>  # pin this
    with:
      role-to-assume: arn:aws:iam::123456789012:role/github-deploy
      aws-region: us-east-1
```

```json
"Condition": {
  "StringEquals": {
    "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
  },
  "StringLike": {
    "token.actions.githubusercontent.com:sub": "repo:your-org/your-repo:ref:refs/heads/main"
  }
}
```

Our guide to [securing GitHub Actions workflows](/blog/secure-github-actions-workflows-ghostaction) covers this pattern in more detail.

## Leak 4: Secrets exposed to untrusted code

Any code that runs in a job can read the secrets that job can read, including third-party actions, dependencies and code from forks.

The tj-actions/changed-files incident (CVE-2025-30066) showed how this works. Attackers gained write access to a popular action and moved its existing version tags to a malicious commit, so every workflow that referenced a tag started running the attacker's code, which dumped secrets into logs. CISA added it to its Known Exploited Vulnerabilities catalog and recommended rotating secrets and pinning actions to commit hashes.

**The fix:**

- Pin third-party actions to full commit SHAs, not tags, and restrict which actions your organisation allows.
- Give each job only the secrets it needs. Use environments with required reviewers to protect production secrets.
- Do not expose secrets to workflows triggered by pull requests from forks, and avoid `pull_request_target` with code from untrusted sources.
- Set the default `GITHUB_TOKEN` permissions to read-only.
- Consider runtime monitoring that flags unexpected outbound connections from runners.

## Leak 5: Secrets baked into images and build artifacts

Anything passed as a Docker build argument or environment variable, or copied into an image layer, can be recovered from the image later.

Teams often pass a private package registry token to a Docker build with `ARG` or `ENV`, then publish the image. Anyone who can pull it can read the history. The same happens with source maps, test reports and build outputs that include configuration.

**The fix:** use BuildKit secret mounts, which make a secret available during one build step without writing it into any layer, and use multi-stage builds so build-time tools and credentials never reach the final image. Scan images and artifacts for secrets before you publish them.

```dockerfile
# syntax=docker/dockerfile:1
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci
```

```bash
docker build --secret id=npmrc,src=$HOME/.npmrc -t myapp:1.0.0 .
```

## Leak 6: Shared, over-scoped and never-rotated secrets

One token used by many pipelines and people means one leak exposes everything, and a secret that is never rotated stays valid indefinitely.

Typical examples: a developer's personal access token used by CI, which breaks when they leave and usually has far more permission than the pipeline needs; the same database password across development, staging and production; credentials pasted in chat or a wiki "for the team".

**The fix:**

- Create separate secrets per service and per environment, each with the least privilege that works.
- Use GitHub Apps or fine-grained tokens instead of personal tokens for automation.
- Keep secrets in a secrets manager such as AWS Secrets Manager, HashiCorp Vault, Azure Key Vault or Google Secret Manager, with automatic rotation where it is supported.
- Name an owner for every secret, set a rotation schedule and remove access when someone leaves.

## Leak 7: Slow response after a leak

The most damaging part of a leak is often not the exposure itself but the time between exposure and rotation.

Many teams do not know what a leaked key unlocks, who owns it or where else it is used. They delete the commit, hope nobody noticed and move on. Because attackers and automated scanners find exposed secrets quickly, the safe assumption is that any exposed secret is compromised.

**The fix:**

- Keep an inventory of secrets: what each one is for, who owns it, where it is used and when it expires.
- Write a short runbook. Rotate first, then investigate, review cloud audit logs such as AWS CloudTrail for unusual use, and replace the secret everywhere it was used.
- Practise the runbook once, so the first real incident is not the first time anyone follows it.

## What connects all seven leaks

Looking across these seven leaks, the pattern is clear. Secrets are in too many places, they are too powerful, they live too long and nobody can see them clearly. The fix is the same each time: fewer secrets, shorter lives, narrower scope, scanning everywhere and a routine for rotation.

AI coding assistants and MCP tools add new places where secrets land, such as generated code, prompts and tool configuration. Treat generated code like any other code: scan it, review it and never paste real credentials into a prompt. See our [MCP security checklist](/blog/mcp-security-checklist-ai-agents) for the specifics.

## A secrets management checklist for CI/CD

1. Turn on secret scanning and push protection, and add pre-commit scanning.
2. Keep `.env` files out of Git and commit example files with fake values.
3. Replace long-lived cloud keys with OIDC.
4. Store remaining secrets in a secrets manager, not in repositories or chat.
5. Scope secrets per environment and per job, and protect production with required reviewers.
6. Pin third-party actions to commit SHAs and restrict allowed actions.
7. Keep logs clean: no printing secrets, no shell tracing around them, mask derived values.
8. Use BuildKit secret mounts and scan images and artifacts.
9. Keep an inventory with owners, rotate on a schedule and rotate after any exposure.
10. Write and practise a leaked-secret runbook.

If you only do three things this week, do these: turn on scanning with push protection, replace stored cloud keys with OIDC, and rotate anything that was ever committed. Our [AWS cloud security checklist](/blog/aws-cloud-security-checklist-startups) covers the rest of your cloud account.

## How can T-Mat Global help with CI/CD secrets?

T-Mat Global Technologies is a founder-led, DPIIT-recognized technology delivery partner from India. We bring production expertise from the Fortune 100 ecosystem to startups and engineering teams across the US, UAE and UK. We help with cloud infrastructure, DevOps, CI/CD, cloud security, vulnerability remediation and production support, and engagements can be project-based, ongoing maintenance or managed infrastructure support. Our founder, Sainath Mitalakar, is an AWS Certified DevOps Engineer Professional with production expertise from the Fortune 100 ecosystem.

We can review where your secrets live, move your pipelines to short-lived credentials, set up scanning and rotation, and harden the workflows around them. See our [CI/CD pipeline security](/services/cicd-pipeline-security) and [cloud security](/services/cloud-security) services.

## Get a free assessment

Need help securing your CI/CD pipelines or finding where your secrets live? Contact T-Mat Global to discuss your requirements. Visit [t-matglobal.com](https://www.t-matglobal.com) or email info@t-matglobal.com, and [book your free assessment](/contact).

## Frequently asked questions

### What is secrets management in CI/CD?

It is the practice of storing, delivering, rotating and auditing credentials such as API keys, tokens and passwords so that pipelines can use them without people or code exposing them.

### Where should CI/CD secrets be stored?

In a dedicated secrets manager, with access limited by role and every access logged. Platform secrets can hold a small number of low-risk values, but never put secrets in code, images or chat.

### Are GitHub Actions secrets secure enough?

They are encrypted and masked in logs, but any code running in the job can still read them. Limit which jobs get which secrets, pin third-party actions and prefer OIDC over stored cloud keys.

### What is OIDC and why replace stored cloud keys with it?

OpenID Connect lets a pipeline request a short-lived credential from your cloud provider for each run, so there is no permanent key to steal. You can restrict it to a specific repository and branch.

### What should I do if a secret was committed to Git?

Rotate it immediately, then remove it from the code, check your audit logs for unusual use and scan for other copies. Rewriting history is useful, but it does not undo the exposure.

### How often should secrets be rotated?

As often as you can automate, and always after any suspected exposure or when someone with access leaves. Short-lived credentials reduce the need for manual rotation.

### Can secret scanning catch everything?

No. Scanners are pattern-based and can miss unusual formats or encoded values, so combine push protection, pre-commit and CI scanning, and regular reviews.

### How do AI coding assistants affect secret leaks?

GitGuardian found that AI-assisted commits leaked secrets at roughly twice the baseline rate, and that secrets turn up in AI tool configuration files. Scan generated code, review it and never paste real credentials into prompts.
