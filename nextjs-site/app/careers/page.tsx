import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CollaborationIllustration from "@/components/illustrations/support/CollaborationIllustration";

const TITLE = "Careers | Join Our DevSecOps Team";
const DESCRIPTION =
  "T-Mat Global Technologies is growing. We're always interested in hearing from DevSecOps, cloud security, and platform engineers who want to work at a pure-play DevSecOps company serving the US, UAE, and UK.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function CareersPage() {
  return (
    <>
      <PageHero firstWord="CAREERS" bgVariant="team" />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 w-full max-w-xs">
            <CollaborationIllustration />
          </div>

          <p className="font-body text-lg leading-relaxed text-brand-black/80">
            T-Mat Global Technologies is growing. As a DPIIT-recognized,
            pure-play DevSecOps company serving enterprise clients across
            the US, UAE, and UK, we&apos;re always interested in hearing
            from engineers who care about security, automation, and
            reliable delivery.
          </p>

          <p className="mt-6 font-body text-lg leading-relaxed text-brand-black/80">
            We don&apos;t have specific openings listed here right now, but
            if you&apos;d like to be considered for future roles in
            DevSecOps engineering, cloud security, platform engineering, or
            related disciplines, send your CV and a short note about what
            you&apos;re looking for to the email below.
          </p>

          <a
            href="mailto:info@t-matglobal.com?subject=Career%20Inquiry"
            className="mt-10 block w-full rounded bg-brand-green px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark sm:inline-block sm:w-auto"
          >
            info@t-matglobal.com
          </a>
        </div>
      </section>
    </>
  );
}
