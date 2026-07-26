import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import AboutTaglineBand from "@/components/AboutTaglineBand";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

const TITLE =
  "About T-Mat Global | AWS Certified DevSecOps Team, Pune, India";
const DESCRIPTION =
  "T-Mat Global is India's dedicated pure-play DevSecOps company, founded by an AWS DevOps Professional certified engineer with enterprise experience at T-Mobile USA. DPIIT-recognized, serving the US, UAE, and UK.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const ACCOMPLISHMENTS = [
  "Built a full-stack DevSecOps practice spanning CI/CD security, cloud security, container security, compliance automation, vulnerability management, and infrastructure as code",
  "Earned DPIIT Startup India recognition",
  "Established a 24/7 managed operations capability aligned to US, UAE, and UK working hours",
  "Brought Fortune 500 delivery discipline, learned firsthand inside enterprise environments like T-Mobile USA, to growing businesses that couldn't previously access it",
];

const DIFFERENTIATORS = [
  "Pure-play focus: security and delivery pipeline work is all we do",
  "Enterprise pedigree: our team has worked inside Fortune 500-grade delivery environments, not just around them",
  "Startup agility: DPIIT-recognized, lean, and able to move at the pace growing businesses need",
  "Genuine 24/7 coverage: a delivery model actually structured around US, UAE, and UK time zones, not a follow-the-sun handoff that loses context",
];

export default function AboutPage() {
  return (
    <>
      <PageHero firstWord="ABOUT" restOfTitle="US" bgVariant="team" />
      <AboutTaglineBand />

      <section className="bg-white py-20">
        <ScrollFadeIn className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 font-body text-base leading-relaxed text-brand-black/80">
            <p>
              T-Mat Global Technologies was founded on a simple observation:
              most enterprises treat security as a final checkpoint bolted
              onto the end of software delivery, rather than a property
              built into the pipeline itself. That gap between how fast
              modern teams want to ship and how security teams are
              resourced to keep up is where{" "}
              <strong className="font-semibold text-brand-black">
                pure-play DevSecOps
              </strong>{" "}
              lives — and it&apos;s the gap we built T-Mat Global to close.
            </p>

            <p>
              Our founder spent years as an{" "}
              <strong className="font-semibold text-brand-black">
                enterprise DevOps engineer at T-Mobile USA
              </strong>
              , working inside a Fortune 500 delivery organization where
              release velocity and security compliance had to coexist at
              scale. That experience shaped a conviction that carried
              directly into T-Mat Global:{" "}
              <strong className="font-semibold text-brand-black">
                enterprise-grade delivery standards
              </strong>{" "}
              shouldn&apos;t be reserved for enterprises with
              enterprise-sized budgets.
            </p>

            <p>
              Today, T-Mat Global is India&apos;s dedicated,{" "}
              <strong className="font-semibold text-brand-black">
                pure-play DevSecOps company
              </strong>{" "}
              — we don&apos;t treat security as a side practice inside a
              broader IT consultancy, it&apos;s the entire business. We work
              with growing businesses across the{" "}
              <strong className="font-semibold text-brand-black">
                US, UAE, and UK
              </strong>
              , embedding security into CI/CD pipelines, hardening cloud and
              Kubernetes environments, automating compliance evidence
              collection, and providing{" "}
              <strong className="font-semibold text-brand-black">
                24/7 managed DevSecOps
              </strong>{" "}
              coverage across time zones.
            </p>

            <p>
              As a{" "}
              <strong className="font-semibold text-brand-black">
                DPIIT-recognized startup
              </strong>
              , we combine the agility of a startup with the delivery
              discipline of the enterprise environments our team has worked
              inside. That combination is deliberate — it&apos;s how a
              growing business gets Fortune 500 security standards without a
              Fortune 500 budget or headcount.
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
                  { text: "WHAT DID WE", color: "black" },
                  { text: "ACCOMPLISH?", color: "green" },
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
                alt="Illustration of a team reaching a goal"
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
                alt="Illustration of a team collaborating"
                width={600}
                height={480}
                className="mx-auto h-auto w-full max-w-md"
              />
            </div>
            <div>
              <SectionHeading
                segments={[
                  { text: "WHAT MAKES US", color: "black" },
                  { text: "DIFFERENT?", color: "green" },
                ]}
              />
              <p className="mt-6 font-body text-base leading-relaxed text-brand-black/70">
                Most consultancies bolt security onto a broader IT or
                software development practice. T-Mat Global doesn&apos;t —
                DevSecOps is the entire business, not a service line
                competing for attention against ten others.
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
