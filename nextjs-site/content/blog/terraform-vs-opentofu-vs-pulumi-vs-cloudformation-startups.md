---
title: "Terraform vs OpenTofu vs Pulumi vs CloudFormation for Startups"
date: "2026-10-28"
description: "Terraform, OpenTofu, Pulumi or CloudFormation? Compare licensing, state, skills and cost, and pick the right infrastructure as code tool for your startup."
tags: ["Infrastructure as Code", "Terraform", "OpenTofu", "Pulumi", "CloudFormation"]
image: "/blog/terraform-vs-opentofu-vs-pulumi-vs-cloudformation-startups-cover.jpg"
readingTime: "11 min read"
---

Choosing an infrastructure as code (IaC) tool is one of the first technical decisions a startup makes, and one of the more annoying to reverse. Terraform, OpenTofu, Pulumi and AWS CloudFormation can all create the same cloud resources. They differ in licence, language, how they store state and how closely they tie you to one vendor.

This guide compares the four on the points that matter to a small team, gives a simple decision framework and lists the mistakes that cause real outages. Tool details change quickly, so check each project's current documentation before you commit.

## Which IaC tool should a startup choose?

If you run only on AWS with a small team, CloudFormation (or the AWS CDK) is the lowest-friction start. If you want the most widely used multi-cloud tool and the largest hiring pool, choose Terraform or OpenTofu. If your engineers prefer general-purpose programming languages, consider Pulumi.

Between Terraform and OpenTofu, the decision is mainly about licensing and governance, because day-to-day use is very similar. If you already have working infrastructure code, do not switch without a clear reason.

## What is infrastructure as code?

Infrastructure as code is the practice of defining servers, networks, databases and permissions in version-controlled files, so environments can be created, reviewed and rebuilt the same way every time.

The benefits are practical: repeatable environments, peer review of every change, an audit trail and much faster recovery. IaC is also the foundation of a good recovery plan. If you can rebuild an environment from code, you can rebuild it in another region. See our guides to [cloud disaster recovery in the UAE](/blog/cloud-disaster-recovery-uae-aws-outage-lessons) and our [production readiness checklist for SaaS startups](/blog/production-readiness-checklist-saas-startups).

## How do Terraform, OpenTofu, Pulumi and CloudFormation compare?

Each tool suits a different kind of team. Here is what each one is, where it is strong and what to watch out for.

### Terraform

Terraform uses a declarative language called HCL and works across many clouds and services, with a very large provider ecosystem and the biggest pool of engineers who already know it.

- **Licence:** Terraform has used the Business Source License 1.1 since version 1.6 (August 2023). It was previously MPL 2.0. The BSL is source-available, not an OSI-approved open source licence, and it restricts using Terraform in a way that competes with HashiCorp's commercial products. IBM completed its acquisition of HashiCorp in February 2025.
- **State:** you choose and secure a backend, such as encrypted cloud object storage with locking, or use HashiCorp's managed service.
- **Best for:** teams that want the default, widely known tool.
- **Watch out for:** the licence terms if you build products around Terraform, and the fact that its direction is set by a commercial owner.

### OpenTofu

OpenTofu is a community fork of Terraform created after the licence change. It is governed under the Linux Foundation and released under MPL 2.0, and it is largely compatible with Terraform's configuration and providers.

- **Differences:** OpenTofu has built-in state encryption since version 1.7, plus features such as provider iteration with `for_each` and early variable evaluation that Terraform's open source CLI does not have. It runs its own registry, which mirrors most Terraform providers.
- **State compatibility:** state files are largely compatible between the two, with version-dependent caveats. If you turn on OpenTofu's state encryption, Terraform can no longer read that state.
- **Watch out for:** HashiCorp-specific products such as Sentinel and HCP Terraform, which OpenTofu does not use. OpenTofu cannot use HCP Terraform as a backend, so state must be moved first.
- **Best for:** teams that want open source licensing, community governance or client-side state encryption.

### Pulumi

Pulumi lets you define infrastructure in TypeScript, Python, Go, C#, Java or YAML. Its core engine is open source under Apache 2.0.

- **State:** managed in Pulumi Cloud, which has a free tier, or in self-managed backends such as cloud object storage. Sensitive values in state are encrypted by default.
- **Providers:** Pulumi can bring in Terraform providers through a bridge, so coverage is wide.
- **Best for:** developer-heavy teams that want loops, functions and tests in a familiar language.
- **Watch out for:** a smaller community and hiring pool than Terraform, and the fact that real code makes it easy to build complicated infrastructure that is hard to review. The default experience also nudges you toward Pulumi Cloud.

### AWS CloudFormation and the AWS CDK

CloudFormation is AWS's own service. There is no separate tool or state file to manage, because AWS keeps the state of each stack.

- **Cost:** there is no charge for CloudFormation itself on AWS resources. You pay for the resources it creates.
- **Features:** change sets let you review changes before they run, and drift detection finds resources that someone changed by hand.
- **AWS CDK:** lets you write infrastructure in programming languages and generates CloudFormation from it.
- **Best for:** AWS-only teams that want the least tooling to run.
- **Watch out for:** it only works with AWS, and plain templates can become long and repetitive.

## Does the Terraform licence change matter for a startup?

For most startups using Terraform to manage their own infrastructure, the licence is unlikely to affect daily work. It matters if you build products or services that wrap or resell Terraform, if your company policy requires OSI-approved open source licences, or if you want vendor-neutral governance.

Read the licence terms and ask your legal adviser if any of those apply. This guide is not legal advice.

## How do these tools handle state and secrets?

State is the file or record that maps your code to the real resources it created. It can contain sensitive values such as database passwords and keys, so treat it as a secret.

- Store state remotely with encryption, access controls and locking. Never commit state to Git.
- Limit who can read it. Anyone who can read state can often read secrets inside it.
- Keep secrets in a secrets manager and reference them, rather than hard-coding them in configuration.
- OpenTofu can encrypt state at the client before it reaches your backend. Pulumi encrypts secret values by default. With CloudFormation, state stays in AWS and is protected by IAM.

A minimal encrypted backend for Terraform on AWS looks like this:

```hcl
terraform {
  required_version = ">= 1.6"

  backend "s3" {
    bucket  = "example-company-tfstate"
    key     = "prod/network/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0" # example only: pin to the version you have tested
    }
  }
}
```

Enable state locking in the way your backend and tool version support, so two people cannot apply changes at the same time.

## How should a startup choose?

Match the tool to your situation, not to fashion.

- **AWS only, small team, little IaC experience:** CloudFormation or the AWS CDK.
- **Multi-cloud now or later, and hiring matters:** Terraform or OpenTofu.
- **You want open source licensing or built-in state encryption:** OpenTofu.
- **Developer-heavy team that wants real programming languages:** Pulumi.
- **You already have working IaC:** keep it, and improve how you use it.

## What mistakes do startups make with IaC?

- Keeping state on one person's laptop, or committing it to Git.
- Applying changes from laptops instead of a reviewed pipeline.
- Putting everything in one huge state, so a small change is risky and slow.
- Making changes in the cloud console, which causes drift between code and reality.
- Leaving provider and module versions unpinned, so a routine run changes behaviour.
- Hard-coding secrets in configuration files.
- Having no review or policy checks, including for AI-generated infrastructure code. See our post on [Kubernetes security and AI-generated manifests](/blog/kubernetes-security-ai-generated-manifests).
- Never testing a rebuild from scratch.

## What does a safe IaC workflow look like?

A safe workflow means every change goes through version control, review and an automated pipeline.

1. Keep all infrastructure code in Git and change it through pull requests.
2. In CI, run formatting, validation and a plan on every pull request.
3. Scan the code for misconfigurations with tools such as Trivy or Checkov.
4. Review the plan output, not just the code, before approving.
5. Apply from the pipeline, with a manual approval for production, never from a laptop.
6. Use least-privilege, short-lived credentials for the pipeline. Our guide to [securing GitHub Actions workflows](/blog/secure-github-actions-workflows-ghostaction) shows how.
7. Schedule a drift check and pin versions of tools, providers and modules.

```bash
terraform fmt -check
terraform validate
terraform plan -out=tfplan
# OpenTofu users run the same steps with the tofu command
```

Well-structured IaC also makes cost work easier, because you can see and change what you run. See our guide to [cloud cost optimization for startups](/blog/cloud-cost-optimization-startups-aws).

## How hard is it to migrate between IaC tools?

Moving from Terraform to OpenTofu is usually the easiest switch, because the configuration is largely compatible. Back up your state first, test in a non-production environment and check provider and module support and any backend that is specific to a vendor.

Moving between CloudFormation and Terraform, OpenTofu or Pulumi is more work. It means importing existing resources into the new tool and checking that a plan shows no unexpected changes. Do it gradually, one stack at a time, and only if you have a clear reason.

## How can T-Mat Global help with infrastructure as code?

T-Mat Global Technologies is a founder-led technology delivery partner from India. We help startups and engineering teams with cloud infrastructure, DevOps, CI/CD, cloud security, vulnerability remediation and production support. For infrastructure as code, that can mean choosing a tool with you, structuring your modules and state, building reviewed pipelines and adding security and drift checks. Our founder, Sainath Mitalakar, is an AWS Certified DevOps Engineer Professional with production expertise from the Fortune 100 ecosystem.

See our [infrastructure as code service](/services/infrastructure-as-code) and our other [services](/services).

## Get a free assessment

Want help choosing or tidying up your infrastructure as code? Contact T-Mat Global to discuss your requirements. Visit [t-matglobal.com](https://www.t-matglobal.com) or email info@t-matglobal.com, and [book your free assessment](/contact).

## Frequently asked questions

### Is OpenTofu the same as Terraform?

They are very similar. OpenTofu is a fork of Terraform under the Linux Foundation and MPL 2.0, with its own registry and some features Terraform's CLI lacks, such as built-in state encryption. Check compatibility for your providers and modules before switching.

### Is Terraform still free to use?

The Terraform CLI is free to use under the Business Source License, but that licence is source-available, not open source, and restricts competing uses. Managed services from HashiCorp are paid products.

### Is OpenTofu ready for production?

Many teams use it in production. Test your own providers, modules and backend in a non-production environment first, and check which features you rely on.

### Should a startup use Pulumi or Terraform?

Use Pulumi if your team prefers real programming languages and is comfortable reviewing infrastructure written as code. Use Terraform or OpenTofu if you want the largest community and hiring pool.

### Is CloudFormation free?

CloudFormation itself has no charge for AWS resources. You pay for the resources it creates.

### Can I use the AWS CDK instead of CloudFormation?

Yes. The CDK lets you write infrastructure in programming languages and generates CloudFormation templates, so you still deploy through CloudFormation.

### Can I switch IaC tools later?

Yes, but it takes effort. Terraform to OpenTofu is usually straightforward, while moving to or from CloudFormation means importing existing resources. Migrate gradually and test each step.

### Does infrastructure as code improve security?

It can. Code review, automated scanning, pinned versions and least-privilege pipelines all reduce risk. It can also hurt if state or secrets are exposed, so protect both.
