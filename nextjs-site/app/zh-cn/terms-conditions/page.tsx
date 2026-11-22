import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "条款与条件 | T-Mat Global",
  description: "T-Mat Global 网站使用及 DevSecOps 服务合作的相关条款。",
  alternates: {
    canonical: "https://www.t-matglobal.com/zh-cn/terms-conditions/",
    languages: {
      en: "https://www.t-matglobal.com/terms-conditions/",
      "zh-CN": "https://www.t-matglobal.com/zh-cn/terms-conditions/",
    },
  },
};

const sections = [
  ["1. 条款接受", "本条款与条件适用于您使用 t-matglobal.com 网站以及与 T-Mat Global Technologies（以下简称“T-Mat Global”、“我们”）的初步业务接洽。使用本网站或通过网站提交咨询，即表示您同意本条款。"],
  ["2. 关于我们的服务", "T-Mat Global 提供 DevSecOps 咨询、CI/CD 流水线安全、云安全、容器及 Kubernetes 安全、合规自动化、漏洞管理、基础设施即代码以及全天候托管式 DevSecOps 服务。本网站的服务介绍仅供一般参考，不构成具有约束力的要约。"],
  ["3. 项目合作与工作说明书", "具体项目由双方另行签署的工作说明书、主服务协议或类似合同约定，其中包括服务范围、交付成果、费用、时间安排及其他条款。如已签署的协议与本网站一般条款存在冲突，以双方签署的协议为准。"],
  ["4. 网站使用", "您同意仅出于合法目的使用本网站，不得试图干扰、探测或破坏网站的安全性或可用性。本网站的文字、图形、标识及设计等内容归 T-Mat Global 或其许可方所有，未经许可不得复制。"],
  ["5. 客户责任", "在项目合作过程中，客户应及时提供 T-Mat Global 合理需要的访问权限、信息和决策，包括相关系统、代码仓库及人员的配合，以便按约定交付服务。"],
  ["6. 保密", "双方同意对合作过程中共享的非公开信息予以保密。正式项目通常还会通过与工作说明书一同签署的双向保密协议进一步约定保密责任。"],
  ["7. 费用与付款", "具体项目的费用、付款计划和开票条款以适用的工作说明书为准。仅通过本网站提交一般咨询不会产生付款义务。"],
  ["8. 知识产权", "除非工作说明书另有约定，付费项目中专门为客户创建的交付成果在全额付款后归客户所有。T-Mat Global 保留其既有工具、框架、方法，以及在服务交付过程中使用或形成的一般知识和技术的所有权。"],
  ["9. 责任限制", "在法律允许的最大范围内，T-Mat Global 不对因使用本网站而产生的间接、附带或后果性损害承担责任。具体付费项目的责任范围以适用的工作说明书或主服务协议为准。"],
  ["10. 终止", "任何一方均可按照适用工作说明书或主服务协议中规定的终止条款终止正在进行的项目合作。"],
  ["11. 适用法律", "除非与特定客户签署的工作说明书明确另有约定，本条款受印度法律管辖，但不包括法律冲突规则。"],
  ["12. 条款变更", "我们可能不时更新本条款与条件。更新内容及修订日期将在本页面公布。"],
  ["13. 联系我们", "如对本条款有任何疑问，请发送邮件至 info@t-matglobal.com。"],
];

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero firstWord="条款与" restOfTitle="条件" bgVariant="network" />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 w-full max-w-xs">
            <Image src="/legal/careers.svg" alt="" width={400} height={400} className="mx-auto h-auto w-full" />
          </div>
          <p className="mt-8 font-body text-sm text-brand-black/50">最后更新：2026 年 2 月</p>
          <div className="mt-6 space-y-10 font-body text-base leading-relaxed text-brand-black/80">
            {sections.map(([heading, body]) => (
              <div key={heading}>
                <h2 className="font-heading text-xl font-bold text-brand-black">{heading}</h2>
                <p className="mt-3">{body}</p>
              </div>
            ))}
            <p>联系邮箱：<a href="mailto:info@t-matglobal.com" className="font-semibold text-brand-accent hover:underline">info@t-matglobal.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
