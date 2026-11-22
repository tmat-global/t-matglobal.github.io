import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import AboutTaglineBand from "@/components/AboutTaglineBand";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

const TITLE = "关于我们 | 印度 DevOps 与 DevSecOps 合作伙伴";
const DESCRIPTION =
  "T-Mat Global 是一家获得印度 DPIIT Startup India 认可的技术公司。创始人持有 AWS DevOps Engineer Professional 认证，并拥有 Fortune 100 企业生态系统的生产环境经验。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...seoMeta({
    title: TITLE,
    description: DESCRIPTION,
    path: "/zh-cn/about/",
  }),
  alternates: {
    canonical: "https://www.t-matglobal.com/zh-cn/about/",
    languages: {
      en: "https://www.t-matglobal.com/about/",
      "zh-CN": "https://www.t-matglobal.com/zh-cn/about/",
    },
  },
};

const ACCOMPLISHMENTS = [
  "建立了涵盖 CI/CD 安全、云安全、容器安全、合规自动化、漏洞管理及基础设施即代码的 DevSecOps 全栈服务体系",
  "获得印度 DPIIT Startup India 认可",
  "建立全天候托管运营能力，服务时间覆盖美国、阿联酋和英国",
  "将创始人在 T-Mobile USA 等 Fortune 100 企业生态系统中积累的企业级交付经验，带给此前难以获得此类服务的成长型企业",
];

const DIFFERENTIATORS = [
  "专注领域：我们专注于安全与软件交付流水线，不将其作为附属业务",
  "企业级经验：团队曾在 Fortune 100 企业生态系统的交付环境中工作，拥有实际企业级经验",
  "初创企业的灵活性：获得 DPIIT 认可，保持精简，并能够快速响应成长型企业的需求",
  "真正的全天候服务：交付模式围绕美国、阿联酋和英国时区设计，确保服务连续性与上下文衔接",
];

export default function ChineseAboutPage() {
  return (
    <>
      <PageHero firstWord="关于" restOfTitle="我们" bgVariant="team" />
      <AboutTaglineBand locale="zh-CN" />

      <section className="bg-white py-20">
        <ScrollFadeIn className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 font-body text-base leading-relaxed text-brand-black/80">
            <p>
              T-Mat Global Technologies 的成立源于一个简单的观察：许多企业将安全视为软件交付最后阶段才添加的检查环节，而不是从一开始就融入交付流水线的核心能力。现代开发团队希望快速交付软件，而安全团队却往往缺乏足够资源来跟上这一速度。两者之间的差距正是
              <strong className="font-semibold text-brand-black">
                纯粹 DevSecOps
              </strong>
              发挥作用的地方，也是我们创立 T-Mat Global 希望解决的问题。
            </p>

            <p>
              我们的创始人曾在
              <strong className="font-semibold text-brand-black">
                T-Mobile USA 担任企业级 DevOps 工程师
              </strong>
              ，在 Fortune 100 企业生态系统的交付组织中工作多年，亲身参与大规模环境下的软件发布与安全合规工作。这段经历让我们坚信：
              <strong className="font-semibold text-brand-black">
                企业级交付标准
              </strong>
              不应只属于拥有大型企业预算的公司。
            </p>

            <p>
              如今，T-Mat Global 是一家立足印度、专注于
              <strong className="font-semibold text-brand-black">
                DevSecOps 的专业技术公司
              </strong>
              。安全不是我们综合 IT 咨询业务中的附属服务，而是我们的核心业务。我们服务于
              <strong className="font-semibold text-brand-black">
                美国、阿联酋和英国
              </strong>
              的成长型企业，将安全融入 CI/CD 流水线，加固云和 Kubernetes 环境，自动收集合规证据，并提供跨时区的
              <strong className="font-semibold text-brand-black">
                全天候托管 DevSecOps 服务
              </strong>
              。
            </p>

            <p>
              作为一家获得
              <strong className="font-semibold text-brand-black">
                DPIIT 认可的初创企业
              </strong>
              ，我们将初创企业的灵活性与团队在企业级环境中积累的交付规范相结合。这种模式经过精心设计，帮助成长型企业在无需承担 Fortune 100 企业级预算和人员成本的情况下，获得符合大型企业标准的安全能力。
            </p>
          </div>
        </ScrollFadeIn>
      </section>

      <section className="bg-brand-grey py-20">
        <ScrollFadeIn className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                segments={[
                  { text: "我们的", color: "black" },
                  { text: "成就", color: "green" },
                ]}
              />
              <ul className="mt-8 space-y-4">
                {ACCOMPLISHMENTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green">
                      <Check className="h-3.5 w-3.5 text-brand-black" strokeWidth={3} />
                    </span>
                    <span className="font-body text-base text-brand-black/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-first lg:order-last">
              <Image
                src="/illustrations/accomplish.svg"
                alt="团队实现目标的插图"
                width={600}
                height={480}
                className="mx-auto h-auto w-full max-w-md"
              />
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      <section className="bg-white py-20">
        <ScrollFadeIn className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Image
                src="/illustrations/different.svg"
                alt="团队协作的插图"
                width={600}
                height={480}
                className="mx-auto h-auto w-full max-w-md"
              />
            </div>
            <div>
              <SectionHeading
                segments={[
                  { text: "我们的", color: "black" },
                  { text: "优势", color: "green" },
                ]}
              />
              <p className="mt-6 font-body text-base leading-relaxed text-brand-black/70">
                许多咨询公司只是在综合 IT 或软件开发业务中附加安全服务。T-Mat Global
                不同。DevSecOps 是我们的全部业务，而不是与其他众多服务争夺关注度的其中一项业务。
              </p>
              <ul className="mt-8 space-y-4">
                {DIFFERENTIATORS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green">
                      <Check className="h-3.5 w-3.5 text-brand-black" strokeWidth={3} />
                    </span>
                    <span className="font-body text-base text-brand-black/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollFadeIn>
      </section>
    </>
  );
}
