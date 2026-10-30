---
title: "MCP Security Checklist: Securing AI Agents and Servers"
date: "2026-10-30"
description: "A practical MCP security checklist for startups: tool poisoning, prompt injection, OAuth tokens, least privilege, supply chain and audit logs for AI agents."
tags: ["MCP Security", "AI Agents", "Cloud Security", "Prompt Injection", "DevSecOps"]
image: "/blog/mcp-security-checklist-ai-agents-cover.jpg"
readingTime: "10 min read"
---

AI agents are moving from chatbots to systems that read your files, call your APIs and take actions on your behalf. The Model Context Protocol (MCP), introduced by Anthropic in late 2024, has become a common way to connect agents to tools and data. The same convenience that makes it useful creates a new security problem: text returned by a tool can steer an agent that holds real credentials.

This guide explains the main MCP security risks and gives a 12-point checklist you can apply this week. It is written for founders, CTOs and engineers who build or use AI agents. MCP and its security guidance are evolving, so check the current specification and your vendors' documentation before you rely on any detail.

## What is MCP?

The Model Context Protocol is an open protocol that lets AI applications connect to external tools and data sources through standard servers. An MCP server exposes tools, such as "search tickets" or "run a query", and the AI agent decides when to call them.

Servers can run locally on a developer's machine or remotely as a hosted service. Either way, the agent acts through them with whatever access you have granted.

## Why does MCP create new security risks?

MCP creates new risks because the model reads whatever tools and servers send back and then decides what to do, so text from an untrusted source can act as instructions to an agent that holds real credentials.

The classic controls still apply: authentication, least privilege, input validation and supply chain security. The difference is that they now protect a component that an autonomous model drives.

A useful way to think about it is what security researcher Simon Willison calls the lethal trifecta. An agent is at risk of leaking data when it has all three of these at once:

1. Access to private data.
2. Exposure to untrusted content, such as emails, web pages or tickets.
3. A way to communicate externally, such as sending messages or making web requests.

Where you can, remove one of the three for each agent.

## What are the main MCP security risks?

The main risks are prompt injection through tool results, tool poisoning, over-scoped credentials, token handling flaws, malicious packages, weak local servers and unchecked agent actions.

1. **Prompt injection through tool results.** Instructions hidden in a ticket, web page, document or issue that a tool returns can steer the agent. OWASP ranks prompt injection as the top risk for LLM applications. A reported case involving GitHub's MCP server showed an assistant tricked into leaking private repository data.
2. **Tool poisoning.** A tool's description can contain hidden instructions to the model, and a server can change its tool definitions after you approved it. Research from Invariant Labs documented these attacks. Treat tool descriptions and annotations as untrusted: a server can label a delete tool "read-only" and nothing in the protocol stops it.
3. **Over-scoped credentials.** A "database" server with a generic run-SQL tool and a read-write connection, or a "GitHub" server with full repository and organisation scopes, means one bad tool call has maximum impact.
4. **Token passthrough and confused deputy.** The specification says a server must not accept tokens that were not issued for it and forward them to other APIs. A proxy that uses one static client ID toward a third-party API without per-client consent can be tricked into acting for the wrong party.
5. **Supply chain attacks.** Malicious or look-alike servers and packages are real. A poisoned package posing as an email MCP server has been reported. Unpinned versions make this worse.
6. **Weak local servers and tooling.** Local servers run code on your machine and inherit the process environment, including any secrets in it. A remote code execution flaw was reported in the MCP Inspector developer tool.
7. **Unchecked actions and runaway cost.** An agent that loops, or that can delete, pay or send without approval, can do damage quickly.

## The MCP security checklist: 12 controls

Use this list for every agent and server you run or connect.

### Before you connect a server

1. **Keep an inventory.** List every MCP server and agent integration with an owner and a purpose, and block unapproved ones. Unmanaged "shadow" servers are the most common gap.
2. **Vet the source.** Check the publisher, repository activity and reviews. Prefer official servers from the service vendor, and review the code of any server that touches sensitive data.
3. **Pin versions.** Pin exact versions or image digests, review before upgrading and watch for changed tool definitions.
4. **Sandbox local servers.** Run them in a container as a non-root user, with a read-only filesystem and no network access unless needed.

```bash
# Example for a local server that only reads files: pin the image tag or digest you reviewed
docker run --rm -i --read-only --network none --cap-drop ALL \
  --security-opt no-new-privileges \
  -v "$(pwd)/data:/data:ro" \
  example/mcp-server:1.2.3
```

### Identity and access

5. **Use OAuth with short-lived tokens,** and check that each token was issued for the MCP server (its audience). Never forward a client's token to another API. Use a separate credential for upstream calls.
6. **Apply least privilege.** Give each tool the narrowest scope it needs, separate read-only from write access, and never give an agent administrator credentials.
7. **Keep secrets out of prompts, config files and logs.** Use a secrets manager and separate credentials per environment. For local servers, pass only the environment variables they need.

### Agent behaviour

8. **Treat all tool output as untrusted input.** Keep untrusted content away from tools that can send data out.
9. **Require human approval for irreversible actions:** deleting data, payments, external messages, production changes and permission changes. Low-risk read-only actions can stay automatic.
10. **Limit tools per task.** Do not give every agent every tool, and restrict outbound network access.

### Operations

11. **Log every tool call** with who or what made it, the arguments and the result. Add rate limits and spending budgets, and alert on unusual patterns.
12. **Prepare a kill switch.** Know how to revoke tokens, disable a server and rotate secrets quickly. Review the whole setup every quarter.

## How do you secure an MCP server you build?

Build it like any internet-facing API, assuming the caller is an AI model that can be manipulated.

- Do not expose generic, powerful tools such as raw SQL or shell execution. Offer narrow tools that do one job.
- Authenticate every request, validate the token audience and authorise each action for the actual user, not a shared service account.
- Validate and limit all inputs, and protect the systems behind the server.
- Add rate limits, quotas and timeouts.
- Log requests and keep an audit trail.
- Test with adversarial content in tool inputs and outputs before release, and keep dependencies up to date.

## How do you evaluate an MCP server from a vendor?

Ask these questions before you connect it:

- What data leaves our environment, where is it processed and how long is it kept?
- Which authentication model and scopes does it use, and can we restrict individual tools?
- Can we export audit logs?
- How are tool definitions versioned, and how are we told when they change?
- What is your incident process and security contact?
- Which security reviews or certifications apply to your organisation? Ask for specifics.

## How does MCP security connect to CI/CD and cloud security?

AI coding agents and automation increasingly have access to repositories, pipelines and cloud accounts, so the controls you already use for pipelines apply to agents too.

- Give agents their own least-privilege identities and short-lived credentials. Our guide to [securing GitHub Actions workflows](/blog/secure-github-actions-workflows-ghostaction) covers the pipeline controls that matter most.
- Review AI-generated infrastructure changes as carefully as human-written ones. See our post on [Kubernetes security and AI-generated manifests](/blog/kubernetes-security-ai-generated-manifests).
- Use separate cloud accounts or roles for agents, with budgets and alerts to catch runaway use. Our [production readiness checklist](/blog/production-readiness-checklist-saas-startups) covers monitoring and incident response.

## Where should a startup start?

1. List every agent and MCP server in use, and who owns each.
2. Remove broad credentials and replace them with narrow, short-lived ones.
3. Add human approval for risky actions.
4. Turn on logging for all tool calls.
5. In a staging environment, test with a deliberately malicious document or ticket and see whether the agent obeys it.

## How can T-Mat Global help?

T-Mat Global Technologies is a founder-led technology delivery partner from India. We help startups and engineering teams with cloud security, CI/CD pipeline security, cloud infrastructure and production support. For AI agents and MCP, that can mean reviewing your integrations, designing least-privilege access, securing secrets and pipelines, and setting up monitoring and alerts. Our founder, Sainath Mitalakar, is an AWS Certified DevOps Engineer Professional with production expertise from the Fortune 100 ecosystem.

See our [cloud security](/services/cloud-security) and [CI/CD pipeline security](/services/cicd-pipeline-security) services.

## Get a free assessment

Need help securing your CI/CD pipelines or the AI agents that connect to them? Contact T-Mat Global to discuss your requirements. Visit [t-matglobal.com](https://www.t-matglobal.com) or email info@t-matglobal.com, and [book your free assessment](/contact).

## Frequently asked questions

### What is MCP?

The Model Context Protocol is an open protocol that lets AI applications connect to external tools and data sources through standard servers.

### Is MCP secure by default?

No. The specification gives security guidance, but many controls are left to the people who build and run servers and agents. Tool descriptions, tool annotations and tool results should all be treated as untrusted.

### What is tool poisoning?

It is an attack in which a tool's description or definition contains hidden instructions that manipulate the AI model, or changes after you approved it. Pin versions and review changes.

### What is prompt injection in MCP?

It is when instructions hidden in content that a tool returns, such as a ticket, web page or document, cause the agent to take actions its user did not intend.

### What is token passthrough?

It is when an MCP server accepts a token issued for another service and forwards it to a downstream API. The specification forbids it, because it bypasses controls and records the wrong identity.

### Should we use local or remote MCP servers?

Both carry risk. Local servers run code on your machine and inherit its environment, so sandbox them. Remote servers send data to a third party, so vet the vendor. Choose based on how sensitive the data is.

### Do we need human approval for every agent action?

No. Require approval for irreversible or high-impact actions such as deletions, payments, external messages and production changes. Low-risk read-only actions can run automatically.

### How do we test MCP security?

Run agents in staging with deliberately malicious content in tool inputs and outputs, check whether they obey it, and review the logs. Repeat after changes to tools, servers or permissions.
