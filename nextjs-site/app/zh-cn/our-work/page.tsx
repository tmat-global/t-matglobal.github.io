import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DeviceMockupCarousel from "@/components/DeviceMockupCarousel";
import DashboardGallery from "@/components/DashboardGallery";

const TITLE = "我们的项目 | DevOps 与安全案例";
const DESCRIPTION =
  "了解 T-Mat Global 的项目实践，涵盖酒店运营软件、医疗系统、ERP 和实验室信息管理系统。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.t-matglobal.com/zh-cn/our-work/",
    languages: {
      en: "https://www.t-matglobal.com/our-work/",
      "zh-CN": "https://www.t-matglobal.com/zh-cn/our-work/",
    },
  },
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero firstWord="我们的" restOfTitle="项目" bgVariant="chart" />
      <DeviceMockupCarousel locale="zh-CN" />
      <DashboardGallery locale="zh-CN" />
    </>
  );
}
