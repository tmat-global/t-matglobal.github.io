import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

export default function AboutCompany({
  locale = "en",
}: {
  locale?: "en" | "zh-CN";
}) {
  const isChinese = locale === "zh-CN";

  return (
    <section className="bg-white py-20">
      <ScrollFadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="mb-10"
          segments={[
            { text: isChinese ? "关于" : "ABOUT THE", color: "black" },
            { text: isChinese ? "公司" : "COMPANY", color: "green" },
          ]}
        />

        <p className="font-body text-xl font-bold text-brand-black">
          {isChinese
            ? "我们是 T-Mat Global Technologies，一家专注于 DevSecOps 的印度技术公司。"
            : "We are T-Mat Global Technologies, India's dedicated pure-play DevSecOps company."}
        </p>

        {isChinese ? (
          <p className="mt-6 text-justify font-body text-base leading-relaxed text-brand-black/80">
            我们由一位拥有{" "}
            <strong className="font-semibold text-brand-black">
              AWS DevOps Professional 认证
            </strong>{" "}
            的工程师创立。创始人曾在{" "}
            <strong className="font-semibold text-brand-black">
              T-Mobile USA
            </strong>{" "}
            担任企业级 DevOps 工程师。我们将{" "}
            <strong className="font-semibold text-brand-black">
              财富 100 强企业生态系统的交付标准
            </strong>{" "}
            带给美国、阿联酋和英国的成长型企业。从保护 CI/CD 流水线到提供{" "}
            <strong className="font-semibold text-brand-black">
              全天候托管云运维服务
            </strong>
            ，我们将安全融入客户的软件交付流程，而不是事后补救。作为一家获得{" "}
            <strong className="font-semibold text-brand-black">
              印度 DPIIT 认可的初创企业
            </strong>
            ，我们将初创企业的灵活性与企业级的规范相结合。
          </p>
        ) : (
          <p className="mt-6 text-justify font-body text-base leading-relaxed text-brand-black/80">
            Founded by an{" "}
            <strong className="font-semibold text-brand-black">
              AWS DevOps Professional certified engineer
            </strong>{" "}
            who previously worked as an enterprise DevOps engineer at{" "}
            <strong className="font-semibold text-brand-black">
              T-Mobile USA
            </strong>
            , we bring{" "}
            <strong className="font-semibold text-brand-black">
              Fortune 100 ecosystem delivery standards
            </strong>{" "}
            to growing businesses in the US, UAE, and UK. From securing CI/CD
            pipelines to running{" "}
            <strong className="font-semibold text-brand-black">
              24/7 managed cloud operations
            </strong>
            , we make security a built-in feature of how our clients ship
            software, not an afterthought. As a{" "}
            <strong className="font-semibold text-brand-black">
              DPIIT-recognized startup
            </strong>
            , we combine startup agility with enterprise discipline.
          </p>
        )}

        <Link
          href={isChinese ? "/zh-cn/about" : "/about"}
          className="mt-10 block w-full rounded bg-brand-green px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark sm:inline-block sm:w-auto"
        >
          {isChinese ? "了解更多" : "Read More"}
        </Link>
      </ScrollFadeIn>
    </section>
  );
}
