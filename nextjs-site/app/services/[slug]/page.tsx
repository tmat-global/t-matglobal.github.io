import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/services";
import Image from "next/image";

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
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.description,
    openGraph: { title: service.seoTitle, description: service.description },
    twitter: { title: service.seoTitle, description: service.description },
  };
}

export default function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();

  const [firstWord, ...restWords] = service.title.split(" ");
  const restOfTitle = restWords.join(" ");


  return (
    <>
      <PageHero
        firstWord={firstWord}
        restOfTitle={restOfTitle || undefined}
        bgVariant="vault"
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[3fr_2fr] lg:px-8">
          <div>
            {service.expandedDescription.map((paragraph, index) => (
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
              alt={service.title}
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
              { text: "WHAT'S", color: "black" },
              { text: "INCLUDED", color: "green" },
            ]}
          />
          <ul className="mt-8 space-y-4">
            {service.whatsIncluded.map((item, index) => (
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
              { text: "WHO THIS", color: "black" },
              { text: "IS FOR", color: "green" },
            ]}
          />
          <p className="mt-6 font-body text-lg leading-relaxed text-brand-black">
            {service.whoThisIsFor}
          </p>
        </div>
      </section>

      <section className="bg-brand-green py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Link
            href="/contact"
            className="block w-full rounded bg-brand-black px-10 py-5 font-heading text-lg font-bold uppercase tracking-wider text-white transition-colors hover:bg-black sm:inline-block sm:w-auto sm:text-xl"
          >
            Get a Free DevSecOps Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
