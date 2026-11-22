export const chineseServiceDetails: Record<
  string,
  { seoTitle: string; expandedDescription: string[]; whoThisIsFor: string }
> = {
  "software-development": {
    seoTitle: "定制软件开发服务 | T-Mat Global",
    expandedDescription: [
      "许多软件项目将安全视为发布前的最后一道检查，而不是开发过程的一部分。这种方式容易积累技术债务和安全风险，也会让企业在产品上线后面临额外的整改成本。",
      "T-Mat Global 将开发与安全作为一个完整流程。从需求分析、系统架构到生产部署，我们构建 Web 平台、SaaS 产品、企业系统及 API，并在开发过程中实施代码审查、自动化测试和安全扫描。我们致力于交付安全、可靠且便于持续维护的软件产品。",
    ],
    whoThisIsFor:
      "适合希望由一个合作伙伴负责产品开发、软件安全及云基础设施运营的创业者和企业，而不是分别协调开发团队与安全服务商。",
  },
  "devsecops-consulting": {
    seoTitle: "DevSecOps 咨询服务 | T-Mat Global",
    expandedDescription: [
      "在许多企业中，安全检查仍集中在软件交付周期的末端。这种方式难以适应持续交付和多应用环境，也容易造成发布延迟及审计风险。",
      "T-Mat Global 通过评估现有 SDLC、工具链和安全流程，设计适合企业的 DevSecOps 架构。我们与工程和安全团队协作，将安全策略、自动化检查及安全门禁融入 GitHub Actions、GitLab、Jenkins 和 Azure DevOps 等工具链。",
    ],
    whoThisIsFor:
      "适合希望从被动安全审查转向持续集成安全实践，同时保持软件发布效率的工程、平台及信息安全负责人。",
  },
  "cicd-pipeline-security": {
    seoTitle: "CI/CD 流水线安全服务 | T-Mat Global",
    expandedDescription: [
      "CI/CD 流水线通常拥有源代码、凭证和生产部署权限，因此可能成为攻击者的重要目标。权限配置不当、密钥泄露及未经审查的构建插件，都可能使生产环境面临风险。",
      "T-Mat Global 为构建和发布流程实施自动化安全控制，包括密钥扫描、SAST/DAST 集成、分支保护、审批机制及最小权限配置。我们还支持签名构建产物和 SBOM 工作流，帮助企业提高软件供应链的可追溯性。",
    ],
    whoThisIsFor:
      "适合使用 GitHub Actions、GitLab CI、Jenkins 或 Azure DevOps，并希望通过自动化安全门禁取代人工检查的平台工程和 DevOps 团队。",
  },
  "cloud-security": {
    seoTitle: "AWS、Azure 与 GCP 云安全服务 | T-Mat Global",
    expandedDescription: [
      "云环境中的错误配置、过度授权和不安全的网络规则，可能造成数据暴露及未经授权的访问。当企业同时运行多个云账户和环境时，持续管理这些风险会更加复杂。",
      "T-Mat Global 提供 AWS、Azure 和 GCP 云架构及配置审查，依据 CIS 基准评估安全状态，并实施 IAM 最小权限、云安全防护策略、网络分段及持续云安全态势管理（CSPM）。我们也帮助配置日志、监控和告警，以支持安全事件响应。",
    ],
    whoThisIsFor:
      "适合在 AWS、Azure 或 GCP 上运行生产工作负载，并需要独立安全评估、云配置加固及持续安全态势管理的企业。",
  },
  "container-kubernetes-security": {
    seoTitle: "容器与 Kubernetes 安全服务 | T-Mat Global",
    expandedDescription: [
      "容器和 Kubernetes 平台能够帮助团队大规模交付应用，但未经扫描的镜像、不安全的准入策略和过度授权的 RBAC 配置，都可能扩大攻击面。",
      "T-Mat Global 将安全控制融入容器构建和部署流程，包括镜像扫描、OPA/Gatekeeper 或 Kyverno 准入策略、运行时威胁检测及 CIS Kubernetes 基准加固。我们还审查密钥管理、网络策略和镜像供应链安全。",
    ],
    whoThisIsFor:
      "适合在 Kubernetes、EKS、AKS、GKE 或自建集群上运行生产工作负载，并需要端到端容器安全保护的工程与平台团队。",
  },
  "compliance-automation": {
    seoTitle: "SOC 2、ISO 27001 合规自动化服务 | T-Mat Global",
    expandedDescription: [
      "传统审计准备通常需要团队手动收集截图、整理记录并从多个工具中寻找合规证据。这种方式耗时且容易出错，也难以持续了解两次审计之间的安全状态。",
      "T-Mat Global 帮助企业将现有安全控制映射到 SOC 2、ISO 27001、HIPAA 和 PCI DSS 等框架，并从云平台、CI/CD 工具及身份管理系统中自动收集合规证据。持续监控仪表板和差距修复路线图能够帮助团队更有序地管理审计准备工作。",
    ],
    whoThisIsFor:
      "适合准备首次认证，或希望减少现有认证维护过程中人工工作量的合规、信息安全及工程团队。",
  },
  "vulnerability-management": {
    seoTitle: "漏洞管理与安全修复服务 | T-Mat Global",
    expandedDescription: [
      "应用程序、基础设施和第三方依赖可能持续产生大量漏洞发现。如果缺少风险优先级和明确的责任分配，团队很容易被大量告警淹没，重要问题也可能得不到及时处理。",
      "T-Mat Global 提供持续漏洞扫描，并根据可利用性和业务影响对风险进行排序。我们通过集中化跟踪、明确的 SLA、软件成分分析（SCA）及定期修复评审，帮助团队持续推进漏洞整改，并向管理层和工程团队提供安全报告。",
    ],
    whoThisIsFor:
      "适合存在大量待处理漏洞，需要建立风险优先级、责任分配和持续修复机制，而不仅仅是增加扫描报告的企业。",
  },
  "infrastructure-as-code": {
    seoTitle: "Terraform 基础设施即代码服务 | T-Mat Global",
    expandedDescription: [
      "手动配置基础设施容易造成开发、预发布和生产环境之间的差异，也使配置变更难以复现、审计和回滚。随着环境规模扩大，这些问题可能影响交付效率和系统稳定性。",
      "T-Mat Global 使用 Terraform 和 Ansible 构建可复用的基础设施模块，并将配置纳入版本控制和代码审查流程。我们还可集成 OPA、Sentinel 或 Checkov 等策略即代码检查，并配置状态管理与偏差检测，帮助团队建立可审计且默认安全的基础设施。",
    ],
    whoThisIsFor:
      "适合希望从手动或部分自动化配置转向可复现、可审计并受策略控制的基础设施即代码实践的平台工程团队。",
  },
  "managed-devsecops": {
    seoTitle: "7×24 小时托管 DevSecOps 服务 | T-Mat Global",
    expandedDescription: [
      "安全事件、流水线故障和基础设施告警不会只在工作时间发生。对于跨美国、阿联酋和英国时区运营的企业，建立内部全天候专业团队可能需要大量招聘、培训和运营投入。",
      "T-Mat Global 提供 7×24 小时托管 DevSecOps 支持，覆盖流水线、基础设施及安全告警监控，并提供事件响应手册、值班升级流程、持续流水线维护和月度安全报告。我们的交付团队面向不同工作时区提供支持，并按照约定的 SLA 响应关键事件。",
    ],
    whoThisIsFor:
      "适合需要跨时区持续 DevSecOps 监控和支持，但不希望从零开始组建内部全天候专业团队的企业。",
  },
};
