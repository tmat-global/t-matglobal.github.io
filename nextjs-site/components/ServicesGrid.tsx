import Link from "next/link";
import { services } from "@/data/services";
import { chineseServices } from "@/data/services.zh-cn";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

interface ServicesGridProps {
  limit?: number;
  showHeading?: boolean;
  locale?: "en" | "zh-CN";
}

export default function ServicesGrid({
  limit,
  showHeading = true,
  locale = "en",
}: ServicesGridProps) {
  const isChinese = locale === "zh-CN";
  const list = limit ? services.slice(0, limit) : services;
  const isTruncated = Boolean(limit && limit < services.length);

  return (
    <section className="bg-brand-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading ? (
          <ScrollFadeIn>
            <SectionHeading
              align="center"
              className="mb-16"
              segments={
                isChinese
                  ? [
                      { text: "我们的", color: "white" },
                      { text: "服务", color: "green" },
                    ]
                  : [
                      { text: "OUR", color: "white" },
                      { text: "SERVICES", color: "green" },
                    ]
              }
            />
          </ScrollFadeIn>
        ) : null}

        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => {
            const translated = chineseServices[service.slug];

            return (
              <ScrollFadeIn key={service.slug} delayMs={(i % 3) * 100}>
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white md:text-2xl">
                  {isChinese && translated
                    ? translated.title
                    : service.title}
                </h3>
                <p className="mt-4 line-clamp-4 font-body text-base leading-relaxed text-gray-300">
                  {isChinese && translated
                    ? translated.description
                    : service.description}
                </p>
                <Link
                  href={`${isChinese ? "/zh-cn" : ""}/services/${service.slug}`}
                  className="mt-4 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-brand-accent hover:underline"
                >
                  {isChinese ? "了解更多 ..." : "Read more ..."}
                </Link>
              </ScrollFadeIn>
            );
          })}
        </div>

        {isTruncated ? (
          <div className="mt-16 text-center">
            <Link
              href={isChinese ? "/zh-cn/services" : "/services"}
              className="block w-full rounded bg-brand-green px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark sm:inline-block sm:w-auto"
            >
              {isChinese ? "查看全部服务" : "View All Services"}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
