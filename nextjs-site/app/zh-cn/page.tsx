import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import WorkflowSteps from "@/components/WorkflowSteps";
import TechStackCarousel from "@/components/TechStackCarousel";
import AboutCompany from "@/components/AboutCompany";
import OurVision from "@/components/OurVision";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import OurProjects from "@/components/OurProjects";
import VaultRakSection from "@/components/VaultRakSection";
import BusinessVideo from "@/components/BusinessVideo";

export const metadata: Metadata = {
  title: "DevOps、云安全与 DevSecOps 服务",
  description:
    "T-Mat Global 是一家获得印度 DPIIT 认可的技术公司，为全球企业提供 DevOps、DevSecOps、云基础设施、网络安全及托管运维服务。",
  alternates: {
    canonical: "https://www.t-matglobal.com/zh-cn/",
    languages: {
      en: "https://www.t-matglobal.com/",
      "zh-CN": "https://www.t-matglobal.com/zh-cn/",
    },
  },
};

export default function ChineseHomePage() {
  return (
    <>
      <PageHero
        firstWord="安全"
        restOfTitle="DEVOPS，一站式交付。"
        subheadline="印度专注于 DevSecOps 的专业技术公司。为美国、阿联酋和英国企业提供企业级 CI/CD 流水线安全、云安全及全天候托管 DevSecOps 服务。"
        ctaLabel="免费获取 DevSecOps 安全评估"
        ctaHref="/zh-cn/contact"
        bgVariant="pipeline"
      />
      <ServicesGrid limit={6} locale="zh-CN" />
      <WorkflowSteps locale="zh-CN" />
      <TechStackCarousel locale="zh-CN" />
      <AboutCompany locale="zh-CN" />
      <OurVision locale="zh-CN" />
      <TestimonialCarousel locale="zh-CN" />
      <OurProjects locale="zh-CN" />
      <VaultRakSection locale="zh-CN" />
      <BusinessVideo locale="zh-CN" />
    </>
  );
}
