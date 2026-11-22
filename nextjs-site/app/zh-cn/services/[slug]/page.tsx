import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import { chineseServices } from "@/data/services.zh-cn";
import { chineseIncluded } from "@/data/services-included.zh-cn";
import { chineseServiceDetails } from "@/data/services-detail.zh-cn";
import { seoMeta } from "@/lib/seo";

interface ServiceDetailPageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: ServiceDetailPageProps): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  const translation = chineseServices[params.slug];
  const detail = chineseServiceDetails[params.slug];

  if (!service || !translation || !detail) return {};

  const path = `/zh-cn/services/${service.slug}/`;

  return {
    title: detail.seoTitle,
    description: translation.description,
    ...seoMeta({
      title: detail.seoTitle,
      description: translation.description,
      path,
    }),
    alternates: {
      canonical: `https://www.t-matglobal.com${path}`,
      languages: {
        en: `https://www.t-matglobal.com/services/${service.slug}/`,
        "zh-CN": `https://www.t-matglobal.com${path}`,
      },
    },
  };
}

export default function ChineseServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const service = services.find((item) => item.slug === params.slug);
  const translation = chineseServices[params.slug];
  const included = chineseIncluded[params.slug];
  const detail = chineseServiceDetails[params.slug];

  if (!service || !translation || !included || !detail) notFound();

  return (
    <>
      <PageHero
        firstWord={translation.title}
        bgVariant="vault"
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[3fr_2fr] lg:px-8">
          <div>
            {detail.expandedDescription.map((paragraph, index) => (
              <p
                key={index}
                className="mt-6 font-body text-lg leading-relaxed text-brand-black first:mt-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mx-auto w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={`/services/${service.slug}.jpg`}
              alt={translation.title}
              width={800}
              height={533}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            segments={[
              { text: "服务", color: "black" },
              { text: "内容", color: "green" },
            ]}
          />
          <ul className="mt-8 space-y-4">
            {included.map((item, index) => (
              <li
                key={index}
                className="flex gap-3 font-body text-lg text-brand-black"
              >
                <span className="mt-1 text-brand-accent">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            segments={[
              { text: "适合", color: "black" },
              { text: "客户", color: "green" },
            ]}
          />
          <p className="mt-6 font-body text-lg leading-relaxed text-brand-black">
            {detail.whoThisIsFor}
          </p>
        </div>
      </section>

      <section className="bg-brand-green py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Link
            href="/zh-cn/contact"
            className="block w-full rounded bg-brand-black px-10 py-5 font-heading text-lg font-bold uppercase tracking-wider text-white transition-colors hover:bg-black sm:inline-block sm:w-auto sm:text-xl"
          >
            免费获取 DevSecOps 安全评估
          </Link>
        </div>
      </section>
    </>
  );
}
