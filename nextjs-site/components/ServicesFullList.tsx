import Link from "next/link";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import { chineseServices } from "@/data/services.zh-cn";
import { chineseIncluded } from "@/data/services-included.zh-cn";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

export default function ServicesFullList({
  locale = "en",
}: {
  locale?: "en" | "zh-CN";
}) {
  const isChinese = locale === "zh-CN";

  return (
    <>
      {services.map((service, index) => {
        const translation = chineseServices[service.slug];
        const included = chineseIncluded[service.slug];

        return (
          <section
            key={service.slug}
            className={index % 2 === 0 ? "bg-white py-16" : "bg-brand-grey py-16"}
          >
            <ScrollFadeIn className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="font-heading text-sm font-bold uppercase tracking-widest text-brand-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-brand-black sm:text-3xl">
                    {isChinese ? translation?.title ?? service.title : service.title}
                  </h2>
                  <p className="mt-4 font-body text-base leading-relaxed text-brand-black/70">
                    {isChinese
                      ? translation?.description ?? service.description
                      : service.expandedDescription[0]}
                  </p>
                  <Link
                    href={`${isChinese ? "/zh-cn" : ""}/services/${service.slug}`}
                    className="mt-6 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-brand-accent hover:underline"
                  >
                    {isChinese ? "查看完整服务详情" : "Read Full Details"} &rarr;
                  </Link>
                </div>

                <div>
                  <p className="font-heading text-sm font-bold uppercase tracking-widest text-brand-black/50">
                    {isChinese ? "服务内容" : "Sub Services"}
                  </p>
                  <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {(isChinese ? included ?? service.whatsIncluded : service.whatsIncluded).map(
                      (item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 rounded-lg border border-black/5 bg-white px-4 py-3 shadow-sm"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                            strokeWidth={3}
                          />
                          <span className="font-body text-sm text-brand-black/80">
                            {item}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </ScrollFadeIn>
          </section>
        );
      })}
    </>
  );
}
