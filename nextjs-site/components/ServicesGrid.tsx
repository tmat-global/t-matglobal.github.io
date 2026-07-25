import Link from "next/link";
import { services } from "@/data/services";
import SectionHeading from "@/components/SectionHeading";

interface ServicesGridProps {
  limit?: number;
  showHeading?: boolean;
}

export default function ServicesGrid({
  limit,
  showHeading = true,
}: ServicesGridProps) {
  const list = limit ? services.slice(0, limit) : services;
  const isTruncated = Boolean(limit && limit < services.length);

  return (
    <section className="bg-brand-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading ? (
          <SectionHeading
            align="center"
            className="mb-16"
            segments={[
              { text: "OUR", color: "white" },
              { text: "SERVICES", color: "green" },
            ]}
          />
        ) : null}

        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {list.map((service) => (
            <div key={service.slug}>
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-4 line-clamp-4 font-body text-base leading-relaxed text-gray-300">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-brand-accent hover:underline"
              >
                Read more ...
              </Link>
            </div>
          ))}
        </div>

        {isTruncated ? (
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="block w-full rounded bg-brand-green px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark sm:inline-block sm:w-auto"
            >
              View All Services
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
