import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const TITLE = "预约产品演示";
const DESCRIPTION =
  "预约与 T-Mat Global 的会议，了解我们如何将安全防护融入您的 CI/CD 流水线、云环境和软件交付流程。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.t-matglobal.com/zh-cn/schedule-demo/",
    languages: {
      en: "https://www.t-matglobal.com/schedule-demo/",
      "zh-CN": "https://www.t-matglobal.com/zh-cn/schedule-demo/",
    },
  },
};

export default function ScheduleDemoPage() {
  return (
    <>
      <PageHero
        firstWord="预约"
        restOfTitle="产品演示"
        bgVariant="team"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CalendlyEmbed height={800} locale="zh-CN" />
        </div>
      </section>
    </>
  );
}
