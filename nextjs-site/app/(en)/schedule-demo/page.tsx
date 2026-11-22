import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const TITLE =
  "Schedule a Demo";
const DESCRIPTION =
  "Book time with T-Mat Global to see how we embed security into your CI/CD pipeline, cloud environment, and delivery workflow.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...seoMeta({ title: TITLE, description: DESCRIPTION, path: "/schedule-demo/" }),
};

export default function ScheduleDemoPage() {
  return (
    <>
      <PageHero
        firstWord="SCHEDULE"
        restOfTitle="A DEMO"
        bgVariant="team"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CalendlyEmbed height={800} />
        </div>
      </section>
    </>
  );
}
