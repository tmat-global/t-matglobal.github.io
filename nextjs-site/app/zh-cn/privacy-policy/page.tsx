import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "隐私政策 | T-Mat Global",
  description: "了解 T-Mat Global 如何收集、使用和保护网站访客及客户的信息。",
  alternates: {
    canonical: "https://www.t-matglobal.com/zh-cn/privacy-policy/",
    languages: {
      en: "https://www.t-matglobal.com/privacy-policy/",
      "zh-CN": "https://www.t-matglobal.com/zh-cn/privacy-policy/",
    },
  },
};

const sections = [
  ["1. 简介", "T-Mat Global Technologies（以下简称“T-Mat Global”、“我们”）为美国、阿联酋、英国及其他地区的企业客户提供 DevSecOps 咨询和托管服务。本隐私政策说明我们通过 t-matglobal.com 收集哪些信息、如何使用这些信息，以及您可以行使的相关权利。"],
  ["2. 我们收集的信息", "联系表单信息：包括您主动提供的姓名、电子邮件地址、公司名称、电话号码和消息内容。分析及使用信息：包括访问页面、停留时间、来源网站、根据 IP 地址估算的位置，以及设备和浏览器类型。Cookie：我们使用 Cookie 和类似技术支持网站功能及分析，您可以通过浏览器设置管理 Cookie。"],
  ["3. 信息的使用方式", "我们使用收集的信息回复咨询、评估 DevSecOps 服务请求、跟进潜在业务合作、了解并改善网站使用体验、维护网站安全和正常运行，以及履行适用的法律义务。"],
  ["4. 处理信息的法律依据（英国及欧盟访客）", "对于英国或欧盟访客，我们依据适用的 UK GDPR 和 EU GDPR 处理个人数据，包括您的同意、我们的合法利益，以及在适用情况下为签订或履行合同而采取必要措施。"],
  ["5. 信息共享", "我们不会出售您的个人信息。我们可能向支持网站和业务运营的可信服务提供商共享必要信息，例如托管、邮件发送和分析服务提供商。仅在提供相关服务所需范围内共享。法律要求或为保护我们的权利、用户及公众安全时，也可能披露相关信息。"],
  ["6. 国际数据传输", "T-Mat Global 总部位于印度，并服务于美国、阿联酋和英国等地区。您提交的信息可能在您所在国家以外的地区（包括印度）处理。对于来自英国或欧盟的个人数据，我们会在适用情况下采用标准合同条款等适当保障措施。"],
  ["7. 数据保留", "我们会在回复咨询、推进潜在合作及履行法律和会计义务所需的期间内保留联系表单提交内容及相关通信。此后，我们会删除或匿名化相关信息。"],
  ["8. 您的权利（英国及欧盟访客）", "在适用法律规定的范围内，您可以请求访问、更正或删除个人数据，反对或限制某些处理活动，请求可携带的数据副本，并在基于同意处理时撤回同意。您也可以向当地数据保护监管机构（例如英国 ICO）提出投诉。"],
  ["9. 数据安全", "我们采取合理的技术和组织措施，以保护收集的信息。但任何传输或存储方式都无法保证绝对安全，因此我们不能承诺绝对安全。"],
  ["10. 儿童隐私", "我们的网站和服务面向商业用户，并非面向儿童。我们不会故意收集儿童的个人信息。"],
  ["11. 政策变更", "我们可能不时更新本隐私政策。更新内容及修订日期将在本页面公布。"],
  ["12. 联系我们", "如您对本隐私政策有疑问，或希望行使数据保护权利，请通过 info@t-matglobal.com 联系我们。"],
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero firstWord="隐私" restOfTitle="政策" bgVariant="vault" />
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
