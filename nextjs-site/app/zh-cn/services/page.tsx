import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ServicesFullList from "@/components/ServicesFullList";

const TITLE = "DevOps、云安全与 DevSecOps 服务";
const DESCRIPTION =
  "探索 T-Mat Global 为企业提供的软件开发、DevSecOps 咨询、CI/CD 流水线安全、云安全、Kubernetes 安全、合规自动化、漏洞管理及全天候托管服务。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...seoMeta({
    title: TITLE,
    description: DESCRIPTION,
    path: "/zh-cn/services/",
  }),
  alternates: {
    canonical: "https://www.t-matglobal.com/zh-cn/services/",
    languages: {
      en: "https://www.t-matglobal.com/services/",
      "zh-CN": "https://www.t-matglobal.com/zh-cn/services/",
    },
  },
};

export default function ChineseServicesPage() {
  return (
    <>
      <PageHero firstWord="我们的" restOfTitle="服务" bgVariant="dashboard" />
      <ServicesFullList locale="zh-CN" />
    </>
  );
}
