import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

const TITLE = "Contact Us | 24/7 Managed DevSecOps Support";
const DESCRIPTION =
  "Get in touch with T-Mat Global's DevSecOps team for a free assessment or 24/7 managed DevSecOps support across the US, UAE, and UK.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function ContactPage() {
  return (
    <>
      <PageHero firstWord="CONTACT" restOfTitle="US" bgVariant="network" />

      <section className="bg-brand-grey py-20">
        <ScrollFadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-brand-black sm:text-4xl">
            Schedule <span className="text-brand-accent">A Demo</span>
          </h2>
          <p className="mt-4 font-body text-base text-brand-black/70">
            Pick a time that works for you and we&apos;ll walk you through
            how T-Mat Global secures your delivery pipeline.
          </p>
          <div className="mt-10 text-left">
            <CalendlyEmbed />
          </div>
        </ScrollFadeIn>
      </section>

      <section className="bg-white py-20">
        <ScrollFadeIn className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase leading-tight tracking-tight text-brand-black sm:text-4xl">
                Get In Touch <span className="text-brand-accent">With Us Now</span>
              </h2>

              <Image
                src="/illustrations/support.svg"
                alt="Illustration of a support engineer on a call"
                width={600}
                height={480}
                className="mt-8 h-auto w-full max-w-md"
              />

              <div className="mt-10">
                <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-brand-black/50">
                  Contact Information
                </h2>

                <div className="mt-4 space-y-4">
                  <a
                    href="mailto:info@t-matglobal.com"
                    className="flex items-center gap-3 font-body text-base text-brand-black/80 transition-colors hover:text-brand-accent"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-grey">
                      <Mail className="h-5 w-5 text-brand-accent" />
                    </span>
                    info@t-matglobal.com
                  </a>

                  <a
                    href="tel:+917028278808"
                    className="flex items-center gap-3 font-body text-base text-brand-black/80 transition-colors hover:text-brand-accent"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-grey">
                      <Phone className="h-5 w-5 text-brand-accent" />
                    </span>
                    +91 7028278808
                  </a>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </ScrollFadeIn>
      </section>
    </>
  );
}
