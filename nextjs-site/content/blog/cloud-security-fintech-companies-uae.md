---
title: "Cloud Security for Fintech Companies in the UAE: Regulations, Risks and Best Practices"
date: "2026-11-20"
description: "A practical guide to cloud security for UAE fintech companies, covering CBUAE, DFSA and ADGM requirements, data protection, cloud outsourcing, cybersecurity, incident response and compliance."
tags: ["Cloud Security", "Fintech", "UAE", "CBUAE", "Cybersecurity", "DevSecOps", "Compliance"]
image: "/blog/cloud-security-fintech-companies-uae-cover.jpg"
readingTime: "13 min read"
---

The UAE has become an important market for financial technology. Digital payments, mobile banking, buy now, pay later services, lending platforms, payment gateways and financial applications are changing how individuals and businesses manage money. Behind these services are cloud platforms that handle sensitive customer information, financial transactions and business-critical operations.

But moving financial services to the cloud introduces serious security and regulatory responsibilities. A misconfigured storage bucket, compromised administrator account, exposed API or poorly managed cloud vendor can affect customer data, financial transactions and the trust a fintech company has spent years building.

For fintech companies operating in the UAE, cloud security is not simply an IT responsibility. It is connected to regulatory compliance, operational resilience, customer protection and business continuity.

The regulatory position also depends on where and how a company operates. A financial institution regulated by the Central Bank of the UAE (CBUAE) does not automatically follow the same detailed rulebook as a firm authorised by the Dubai Financial Services Authority (DFSA) in DIFC or the Financial Services Regulatory Authority (FSRA) in ADGM.

This guide explains the major regulatory considerations, cloud security controls and practical implementation steps fintech engineering teams should understand when building and operating secure financial platforms in the UAE. Regulatory requirements should always be checked against the latest rules and the company's specific licence and activities.

## Why is cloud security important for UAE fintech companies?

Fintech applications process information that attackers can use to steal money, impersonate customers or disrupt financial services.

Depending on the business model, this information can include:

- Customer identity and verification documents.
- Bank account and payment information.
- Transaction histories and financial records.
- Authentication credentials and session tokens.
- API keys and integration credentials.
- Business and merchant information.
- Internal financial reports and operational records.

A security incident involving this information can create financial losses, regulatory consequences, operational disruption and reputational damage.

Consider a payment platform operating in the UAE. Its application may use cloud-hosted APIs, managed databases, object storage, payment service integrations and third-party identity verification providers. If an attacker obtains access to an administrative account, they may be able to access several connected services.

Cloud security must therefore protect the complete environment rather than just the application server.

## Which UAE regulatory authority applies to a fintech company?

Before selecting cloud security controls, identify the company's regulatory jurisdiction and the activities it is authorised to perform.

There is no single cybersecurity rulebook that automatically applies to every business describing itself as a fintech company.

### 1. Central Bank of the UAE (CBUAE)

The CBUAE regulates financial institutions and activities within its statutory remit, including relevant banking, payment and other licensed financial activities.

Its regulatory framework includes requirements concerning risk management, information security, consumer protection, outsourcing and operational resilience.

A particularly important development is the CBUAE Operational Risk Management Regulation, Circular No. C 1/2026, effective from 14 September 2026.

Article 8 addresses ICT and cybersecurity management. It requires covered Licensed Financial Institutions (LFIs) to establish an ICT and cybersecurity risk framework within their operational risk management and operational resilience arrangements.

The requirements include:

- Identifying and assessing ICT and cybersecurity risks.
- Implementing appropriate security and mitigation measures.
- Regularly monitoring and testing those measures.
- Maintaining appropriate cybersecurity infrastructure.
- Establishing protection, detection, response and recovery programmes.
- Informing the Board and Senior Management about relevant risk exposures and incidents.
- Managing risks involving third-party technology providers.

Article 8.9 also requires an LFI's Master System of Record to be continuously maintained and stored within the UAE, including in outsourcing arrangements. The provision contains a specific exception for branches of foreign financial institutions, subject to Central Bank approval.

This is an important requirement to consider when designing cloud architecture for a CBUAE-regulated institution. It should not be interpreted as a universal data residency rule for every fintech company or every category of cloud data.

Official reference:
https://rulebook.centralbank.ae/en/rulebook/operational-risk-management-regulation

https://rulebook.centralbank.ae/en/rulebook/article-8-ict-and-cybersecurity-management

### 2. Dubai Financial Services Authority (DFSA)

The DFSA regulates financial services conducted in or from the Dubai International Financial Centre (DIFC), within its jurisdiction.

Its Cyber Risk Management Rules are set out in the General Module of the DFSA Rulebook.

DFSA-authorised firms must maintain an appropriate framework to identify and mitigate cyber risks and to detect, respond to and recover from cyber incidents.

The framework should reflect the nature, scale and complexity of the firm's activities.

DFSA also expects senior management and the governing body to understand cyber vulnerabilities and provide appropriate oversight and resources.

The regulator does not prescribe one mandatory cybersecurity framework for every firm. Its published guidance identifies recognised approaches such as ISO 27001, the NIST Cybersecurity Framework and CIS Critical Security Controls.

For a fintech company operating in DIFC, cloud security should therefore be integrated into its wider cyber risk management and governance arrangements.

Official references:

https://www.dfsa.ae/what-we-do/supervision/cyber-risk-supervision/summary

https://dfsa-prod.60413.aws.thomsonreuters.com/rulebook/gen-552

### 3. Abu Dhabi Global Market (ADGM) and FSRA

ADGM is an international financial centre in Abu Dhabi. Its Financial Services Regulatory Authority supervises financial services firms within its regulatory jurisdiction.

ADGM's FSRA introduced amendments to its regulatory framework covering cyber risk management for Authorised Persons and Recognised Bodies.

The amendments became applicable on 31 January 2026 following a six-month transition period announced in July 2025.

The updated framework integrates cyber risk management into existing risk management arrangements and addresses the proportionality of controls and relationships with IT service providers.

For an ADGM-regulated fintech business, cloud infrastructure, third-party providers, cyber incident management and operational resilience should be assessed against the applicable FSRA requirements.

Official reference:

https://www.adgm.com/media/announcements/adgms-fsra-issues-cyber-risk-management-framework

### 4. Understand the applicable data protection legislation

Data protection requirements depend on the entity, the data being processed and the applicable jurisdiction.

The UAE Federal Decree-Law No. 45 of 2021 concerning the Protection of Personal Data establishes a federal personal data protection framework.

However, Article 2 contains exclusions, including certain personal banking and credit data that are regulated under other legislation, as well as companies and establishments in qualifying free zones that have special data protection legislation.

DIFC and ADGM also have their own data protection frameworks.

A fintech company must therefore identify which data protection requirements apply to each processing activity rather than assuming that one law covers every dataset.

For ADGM entities, the ADGM Data Protection Regulations 2021 establish specific obligations for entities processing personal data within the ADGM framework.

For DIFC entities, the DIFC Data Protection Law No. 5 of 2020 is an important part of the applicable legal framework.

Official references:

https://uaelegislation.gov.ae/en/legislations/1972/download

https://www.adgm.com/operating-in-adgm/office-of-data-protection/guidance

https://www.difc.com/business/laws-and-regulations/legal-database

## What are the biggest cloud security risks for fintech companies?

Understanding the main threats helps engineering teams prioritise security controls.

### 1. Misconfigured cloud storage

Cloud storage is frequently used for identity documents, transaction exports, application backups and internal reports.

A publicly accessible storage bucket or incorrectly configured access policy can expose sensitive information.

Recommended controls:

- Block public access unless explicitly required.
- Use private storage buckets by default.
- Apply least-privilege IAM permissions.
- Encrypt stored data.
- Enable access logging.
- Monitor storage policy changes.
- Regularly scan for exposed resources.

### 2. Compromised administrator accounts

Cloud administrator accounts can control infrastructure, databases, security policies and application deployments.

If an attacker compromises a privileged account, the impact can extend across the entire cloud environment.

Recommended controls:

- Enforce multi-factor authentication.
- Use role-based access control.
- Avoid permanent administrator access.
- Implement privileged access management.
- Review permissions regularly.
- Monitor suspicious login activity.
- Use separate accounts for administration and daily work.

### 3. Insecure APIs and payment integrations

Fintech platforms depend on APIs for payments, customer verification, account information and external financial services.

An insecure API can expose customer records or allow unauthorised transaction activity.

Recommended controls:

- Require strong authentication and authorisation.
- Validate every request on the server.
- Apply rate limiting.
- Protect against replay attacks where relevant.
- Use secure API gateways.
- Validate webhook signatures.
- Rotate API credentials.
- Monitor unusual transaction and API behaviour.

### 4. Ransomware and data theft

Financial platforms are attractive targets because they hold commercially valuable and sensitive information.

Attackers may encrypt business systems, steal data or attempt to disrupt customer-facing services.

Recommended controls:

- Maintain isolated and tested backups.
- Implement endpoint detection and response.
- Monitor privileged activity.
- Segment critical infrastructure.
- Patch known vulnerabilities.
- Test disaster recovery procedures.
- Maintain a documented incident response plan.

### 5. Third-party and supply-chain vulnerabilities

Fintech companies rarely operate independently. They depend on cloud providers, software vendors, payment processors, identity verification providers and development tools.

A security weakness in one supplier can create risk across the wider platform.

Recommended controls:

- Assess vendors before onboarding.
- Review security certifications and independent assurance.
- Document data access and processing arrangements.
- Review subcontractor dependencies.
- Include incident notification obligations in contracts.
- Define audit and access rights.
- Maintain an exit and migration strategy.

## How should fintech companies secure cloud infrastructure?

A secure cloud environment requires multiple layers of protection. No single product or security tool can provide complete protection.

### 1. Build a strong identity and access management strategy

Identity security should be one of the first priorities.

Every employee, application and automated process should have only the permissions required to perform its function.

For AWS environments, this means using IAM roles, temporary credentials, multi-factor authentication and tightly controlled administrative access.

For Azure environments, use Microsoft Entra ID, managed identities, Conditional Access and privileged identity controls where appropriate.

For Google Cloud, use Cloud IAM, service accounts and appropriate workload identity mechanisms.

Avoid sharing administrator credentials between employees or storing access keys inside source code.

### 2. Encrypt sensitive information

Encryption protects information against unauthorised access when data is stored or transferred.

Fintech platforms should consider:

- Encryption at rest for databases and object storage.
- TLS for application and service communication.
- Centralised key management.
- Key rotation and access monitoring.
- Separation of encryption key administration from normal application access.
- Appropriate backup encryption.

Cloud providers offer managed encryption services, but the company remains responsible for configuring them correctly and managing access to the relevant keys.

### 3. Secure databases and financial records

Financial databases should never be directly exposed to the public internet without a properly justified and protected architecture.

Use private networking, restricted security groups, database authentication, encrypted connections and activity monitoring.

Important controls include:

- Restricting database access to approved services.
- Separating production and non-production environments.
- Monitoring database administrator activity.
- Protecting database backups.
- Implementing database access reviews.
- Using tokenisation or masking where appropriate.
- Testing recovery procedures.

Where a specific CBUAE requirement applies to the Master System of Record, architecture and storage decisions must account for the applicable UAE location requirements.

### 4. Protect cloud networks

Network security helps limit the impact of an attack.

A typical fintech cloud environment should separate public application components from private databases, internal services and administrative systems.

Consider:

- Private subnets for databases and internal workloads.
- Network access control lists and security groups.
- Web application firewalls.
- DDoS protection.
- Private connectivity where appropriate.
- Centralised network logging.
- Restricted administrative access.
- Network segmentation between critical services.

Avoid allowing unrestricted communication between all cloud resources.

### 5. Implement DevSecOps in the development lifecycle

Security should be integrated into application development rather than introduced only before production deployment.

A DevSecOps pipeline can identify security weaknesses before vulnerable code reaches customers.

A practical CI/CD security pipeline should include:

1. Static Application Security Testing (SAST).
2. Software Composition Analysis (SCA).
3. Secret scanning.
4. Infrastructure as Code scanning.
5. Container image scanning.
6. Dependency vulnerability checks.
7. Dynamic Application Security Testing (DAST), where appropriate.
8. Approval and deployment controls.

High-risk findings should have defined remediation deadlines and ownership.

For fintech companies, the deployment process should also maintain an auditable record of code changes, approvals and production releases.

See our [DevSecOps implementation guide](/blog/devsecops-implementation-guide-startups) for more information.

### 6. Monitor security events continuously

Security monitoring helps identify suspicious activity before it becomes a major incident.

A fintech company should collect and review relevant events from:

- Cloud identity and access management.
- Network security controls.
- Application authentication systems.
- Database audit logs.
- API gateways.
- Endpoint detection tools.
- Infrastructure configuration changes.
- Payment transaction monitoring systems.

Security teams should establish alerts for unusual privileged access, repeated failed logins, suspicious API activity, unexpected data transfers and changes to critical infrastructure.

A centralised SIEM platform can help correlate these events and support incident investigation.

## How should fintech companies handle cloud outsourcing and data residency?

Cloud outsourcing is one of the most important areas to review when building a fintech security strategy in the UAE.

A company may use a cloud provider whose infrastructure, support personnel, subcontractors and data processing operations span multiple countries.

This creates questions around data access, confidentiality, regulatory oversight, business continuity and contractual responsibilities.

### What does the CBUAE require for bank outsourcing?

The CBUAE Outsourcing Regulation for Banks, Circular No. 14/2021, and its accompanying Standards establish requirements for banks operating in the UAE.

These include due diligence, appropriate governance, ongoing monitoring and contractual arrangements.

The framework also addresses overseas outsourcing.

Under Article 6 of the regulation:

- The Master System of Record, including Confidential Data, must be maintained and stored within the UAE.
- The specific exception for branches of foreign banks requires Central Bank approval and an appropriately updated UAE copy.
- Sharing customers' Confidential Data outside the UAE requires Central Bank approval and prior written customer consent, together with the specified acknowledgement concerning overseas legal proceedings.
- Overseas service provider arrangements must meet the applicable safeguards.

These requirements are specific to the banks and arrangements covered by the regulation. Other financial institutions may be governed by different applicable provisions.

A cloud provider's regional availability alone does not establish regulatory compliance.

Official reference:

https://rulebook.centralbank.ae/en/rulebook/outsourcing-regulation-banks

https://rulebook.centralbank.ae/en/rulebook/outsourcing-standards-banks

### What should a fintech company check before selecting a cloud provider?

Before moving production financial workloads to a cloud platform, review:

- Available data centre regions.
- Data storage and processing locations.
- Backup and disaster recovery locations.
- Support and administrative access arrangements.
- Subcontractor locations and responsibilities.
- Encryption and key management capabilities.
- Security certifications and audit reports.
- Incident notification procedures.
- Contractual audit and regulatory access rights.
- Data portability and exit arrangements.

The correct approach is to map each data category and processing activity against the rules applicable to the company.

Do not assume that choosing a UAE cloud region automatically resolves every data protection, outsourcing or regulatory requirement.

## What does a practical cloud security architecture look like?

A fintech cloud architecture should protect the customer-facing application, internal services, financial records and operational infrastructure.

An example AWS-based architecture may include:

- Route 53 for DNS.
- CloudFront for content delivery.
- AWS WAF and Shield for application and DDoS protection.
- Application Load Balancer for controlled application traffic.
- Private VPC subnets for application and database workloads.
- Amazon ECS, EKS or EC2 for application hosting.
- Amazon RDS for managed relational databases.
- AWS KMS for encryption key management.
- AWS Secrets Manager for application secrets.
- CloudTrail and CloudWatch for audit and operational monitoring.
- Amazon GuardDuty and Security Hub for security findings and posture management.
- AWS Backup for backup and recovery workflows.

This is an illustrative architecture, not a regulatory-approved reference design. Services, configurations and locations must be selected according to the company's risk assessment and applicable requirements.

The most important principle is that security controls must work together.

For example, an encrypted database is not adequately protected if an attacker can obtain unrestricted administrator credentials. Similarly, a secure application is not enough if backups are publicly accessible.

## How should fintech companies prepare for a cybersecurity incident?

Preventive controls reduce risk, but no cloud environment can guarantee that incidents will never occur.

A fintech company needs a tested incident response process.

### Step 1: Detect the incident

Use security monitoring, application alerts and cloud audit logs to identify suspicious activity.

### Step 2: Assess the impact

Determine which applications, accounts, databases, customers and services may be affected.

### Step 3: Contain the threat

Disable compromised credentials, isolate affected workloads and restrict suspicious network activity while preserving relevant evidence.

### Step 4: Notify the appropriate stakeholders

Follow the applicable regulatory, contractual and legal notification requirements.

Notification timelines and reporting channels must be confirmed for the company's actual regulatory jurisdiction and incident type. Do not assume that one universal UAE notification deadline applies to all fintech businesses.

### Step 5: Recover operations

Restore systems from verified backups, rotate compromised credentials, patch vulnerabilities and validate system integrity before returning services to normal operation.

### Step 6: Review and improve

Document the incident, identify the root cause, assess the effectiveness of existing controls and implement corrective actions.

Incident response exercises should involve engineering, security, compliance, legal and senior management teams.

See our [incident response plan template](/blog/incident-response-plan-startups-template) for a practical starting point.

## What should be included in a fintech cloud security checklist?

Use this checklist when reviewing an existing cloud environment or preparing a new financial application for production.

### Identity and access security

- [ ] MFA enforced for privileged accounts.
- [ ] Least-privilege access policies implemented.
- [ ] Temporary credentials used where possible.
- [ ] Administrative activity logged.
- [ ] Access permissions reviewed regularly.

### Data protection

- [ ] Sensitive information classified.
- [ ] Encryption at rest and in transit enabled.
- [ ] Encryption keys centrally managed.
- [ ] Secrets stored outside source code.
- [ ] Backup access restricted.
- [ ] Data retention and deletion policies documented.

### Infrastructure security

- [ ] Production databases kept in appropriately restricted networks.
- [ ] Public storage exposure checked.
- [ ] WAF and DDoS protections assessed.
- [ ] Security patches applied.
- [ ] Network segmentation implemented.
- [ ] Infrastructure configurations continuously reviewed.

### Application and DevSecOps security

- [ ] SAST and dependency scanning integrated into CI/CD.
- [ ] Secret scanning enabled.
- [ ] Container images scanned.
- [ ] Infrastructure as Code scanned.
- [ ] Production changes reviewed and auditable.
- [ ] API authentication and authorisation tested.

### Regulatory and operational readiness

- [ ] Applicable regulatory authority identified.
- [ ] Relevant data protection legislation identified.
- [ ] Cloud outsourcing risk assessment completed.
- [ ] Data location and processing arrangements documented.
- [ ] Third-party contracts reviewed.
- [ ] Incident response plan maintained.
- [ ] Business continuity and disaster recovery tested.
- [ ] Relevant regulatory reporting responsibilities documented.

## What does a 90-day cloud security improvement plan look like?

Fintech companies do not need to redesign their entire cloud environment at once. A phased implementation makes it easier to prioritise the highest risks.

### Days 1 to 30: Assess and identify risks

- Identify the regulatory authorities and legal requirements applicable to the business.
- Inventory cloud accounts, applications, databases and external integrations.
- Classify sensitive financial and customer information.
- Review IAM permissions and privileged accounts.
- Identify publicly exposed resources.
- Review cloud provider and third-party arrangements.
- Perform an initial vulnerability and configuration assessment.

### Days 31 to 60: Implement essential controls

- Enforce MFA and privileged access management.
- Configure encryption and key management.
- Secure databases and storage services.
- Introduce network segmentation.
- Integrate security scanning into CI/CD.
- Configure centralised security logging.
- Establish vulnerability remediation processes.
- Review backup and recovery configurations.

### Days 61 to 90: Validate and improve resilience

- Conduct penetration testing.
- Test incident response procedures.
- Validate backup restoration and disaster recovery.
- Review third-party security arrangements.
- Check applicable regulatory and data residency requirements.
- Establish security metrics and management reporting.
- Document outstanding risks and remediation ownership.

The objective is to establish a repeatable security programme rather than complete a one-time compliance exercise.

## What common cloud security mistakes should UAE fintech companies avoid?

- Assuming that using a major cloud provider automatically makes an application compliant.
- Treating CBUAE, DFSA and FSRA requirements as interchangeable.
- Assuming all UAE fintech companies have identical data residency requirements.
- Ignoring overseas support access and subcontractors.
- Giving developers unrestricted production access.
- Storing API keys and passwords in source code.
- Failing to monitor privileged activity.
- Relying on backups without testing restoration.
- Performing penetration testing only before launch.
- Ignoring vulnerabilities in third-party dependencies.
- Having no clear incident escalation or reporting process.
- Treating cybersecurity as an IT-only responsibility instead of an organisation-wide risk.

## How can T-Mat Global help fintech companies improve cloud security?

T-Mat Global Technologies is a founder-led, DPIIT-recognized technology delivery partner from India. We bring production expertise from the Fortune 100 ecosystem to companies and engineering teams across the US, UAE and UK.

We help organisations build, secure and maintain cloud infrastructure through practical engineering and DevSecOps services.

Our cloud security capabilities include:

- AWS and cloud infrastructure security assessments.
- Cloud architecture reviews and security hardening.
- IAM and privileged access management improvements.
- CI/CD security integration.
- Vulnerability assessment and remediation.
- Infrastructure as Code security.
- Container and Kubernetes security.
- Cloud monitoring and incident response support.
- Backup, recovery and operational resilience improvements.
- Third-party cloud security and configuration reviews.

Our founder, Sainath Mitalakar, is an AWS Certified DevOps Engineer Professional with production expertise from the Fortune 100 ecosystem.

For UAE fintech companies, we can help engineering teams assess technical security gaps, improve cloud configurations and implement stronger operational practices. Regulatory interpretation, licensing advice and formal compliance sign-off should be handled with appropriately qualified legal and compliance professionals.

Explore our [services](/services) and [managed DevSecOps support](/services/managed-devsecops).

## Get a free cloud security assessment

Is your fintech platform ready for the security challenges of operating in the UAE?

Whether you are building a new financial application, moving workloads to the cloud or reviewing an existing production environment, T-Mat Global can help identify technical security gaps and recommend practical improvements.

Visit [t-matglobal.com](https://www.t-matglobal.com), email info@t-matglobal.com or [book your free assessment](/contact).

## Frequently asked questions

### What cloud security regulations apply to fintech companies in the UAE?

It depends on the company's activities and regulatory jurisdiction. CBUAE-regulated institutions must consider applicable Central Bank requirements. DIFC firms must consider DFSA rules, while ADGM-regulated firms must consider FSRA requirements. Relevant data protection laws and other applicable UAE legislation must also be assessed.

### Is cloud hosting allowed for fintech companies in the UAE?

Cloud services can be used, but the arrangement must satisfy the applicable regulatory, security, outsourcing, data protection and operational requirements. A cloud provider's availability in the UAE does not automatically establish compliance.

### Must all fintech customer data be stored inside the UAE?

There is no single blanket rule that can safely be applied to every fintech company and every category of information. Certain CBUAE requirements impose specific UAE storage and outsourcing conditions, including the Master System of Record requirements for covered institutions. The applicable rules must be assessed for each entity and data category.

### What is the CBUAE Operational Risk Management Regulation 2026?

It is a Central Bank regulation establishing operational risk management and operational resilience requirements for Licensed Financial Institutions. Circular C 1/2026 became effective on 14 September 2026. Article 8 specifically addresses ICT and cybersecurity management.

### Does the UAE Personal Data Protection Law apply to every fintech company?

Not automatically. Federal Decree-Law No. 45 of 2021 contains exclusions, including certain personal banking and credit data governed by other legislation and entities in qualifying financial free zones with their own data protection legislation. The applicable legal framework depends on the entity and processing activity.

### What is the difference between DFSA and FSRA?

The DFSA regulates financial services within DIFC, Dubai. The FSRA regulates financial services within ADGM, Abu Dhabi. They have separate regulatory frameworks and requirements.

### Which cloud platform is best for a fintech company in the UAE?

AWS, Microsoft Azure and Google Cloud all provide security capabilities that can support financial workloads. The right choice depends on the business architecture, regulatory obligations, available regions, data requirements, integration needs and operational capabilities.

### How often should fintech companies perform cloud security assessments?

Security assessments should be risk-based and ongoing. Companies should review security controls regularly, reassess after significant infrastructure or application changes and perform appropriate penetration testing and incident response exercises.

### Can DevSecOps help fintech companies meet cloud security requirements?

Yes. DevSecOps helps integrate security into software development and deployment through automated scanning, access controls, secure infrastructure configurations, vulnerability remediation and auditable release processes. It supports security objectives but does not independently establish regulatory compliance.

## Official UAE regulatory references

The following official resources were reviewed when preparing this article:

1. [CBUAE Operational Risk Management Regulation](https://rulebook.centralbank.ae/en/rulebook/operational-risk-management-regulation)
2. [CBUAE Article 8: ICT and Cybersecurity Management](https://rulebook.centralbank.ae/en/rulebook/article-8-ict-and-cybersecurity-management)
3. [CBUAE Outsourcing Regulation for Banks](https://rulebook.centralbank.ae/en/rulebook/outsourcing-regulation-banks)
4. [CBUAE Outsourcing Standards for Banks](https://rulebook.centralbank.ae/en/rulebook/outsourcing-standards-banks)
5. [DFSA Cyber Risk Supervision](https://www.dfsa.ae/what-we-do/supervision/cyber-risk-supervision/summary)
6. [DFSA General Module - Cyber Risk Management](https://dfsa-prod.60413.aws.thomsonreuters.com/rulebook/gen-552)
7. [ADGM FSRA Cyber Risk Management Framework](https://www.adgm.com/media/announcements/adgms-fsra-issues-cyber-risk-management-framework)
8. [UAE Federal Personal Data Protection Law](https://uaelegislation.gov.ae/en/legislations/1972/download)
9. [ADGM Office of Data Protection](https://www.adgm.com/operating-in-adgm/office-of-data-protection/guidance)

This article is intended for general technical and educational information. It is not legal, regulatory or financial advice. Regulatory requirements should be confirmed against the latest applicable legislation, rulebooks and supervisory directions before implementation.
