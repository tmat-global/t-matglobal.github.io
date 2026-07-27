import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalReviewNotice from "@/components/LegalReviewNotice";
import SecurityNetworkIllustration from "@/components/illustrations/support/SecurityNetworkIllustration";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How T-Mat Global Technologies collects, uses, and protects information from visitors and clients across the US, UAE, UK, and EU.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        firstWord="PRIVACY"
        restOfTitle="POLICY"
        bgVariant="vault"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 w-full max-w-xs">
            <SecurityNetworkIllustration />
          </div>

          <LegalReviewNotice />

          <p className="mt-8 font-body text-sm text-brand-black/50">
            Last updated: July 2026
          </p>

          <div className="mt-6 space-y-10 font-body text-base leading-relaxed text-brand-black/80">
            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                1. Introduction
              </h2>
              <p className="mt-3">
                T-Mat Global Technologies (&ldquo;T-Mat Global,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                provides DevSecOps consulting and managed services to
                enterprise clients in the United States, the United Arab
                Emirates, the United Kingdom, and beyond. This Privacy Policy
                explains what information we collect through
                t-matglobal.com, how we use it, and the choices and rights
                available to you, including visitors in the UK and European
                Union.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                2. Information We Collect
              </h2>
              <p className="mt-3">
                We collect information in the following ways:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="font-semibold text-brand-black">
                    Contact form data.
                  </strong>{" "}
                  When you submit an inquiry through our contact form, we
                  collect the information you provide, such as your name,
                  email address, company name, phone number, and the
                  contents of your message.
                </li>
                <li>
                  <strong className="font-semibold text-brand-black">
                    Analytics and usage data.
                  </strong>{" "}
                  We use analytics tools to understand how visitors use our
                  site. This may include pages viewed, time spent on the
                  site, referring website, approximate location derived from
                  IP address, and device or browser type.
                </li>
                <li>
                  <strong className="font-semibold text-brand-black">
                    Cookies.
                  </strong>{" "}
                  We use cookies and similar technologies to support site
                  functionality and analytics. You can control cookies
                  through your browser settings; disabling them may affect
                  how parts of the site function.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                3. How We Use Your Information
              </h2>
              <p className="mt-3">We use the information we collect to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Respond to inquiries submitted through our contact form</li>
                <li>
                  Evaluate and follow up on requests for DevSecOps assessments
                  or engagements
                </li>
                <li>Understand and improve how visitors use our website</li>
                <li>Maintain the security and proper functioning of our site</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                4. Legal Basis for Processing (UK/EU Visitors)
              </h2>
              <p className="mt-3">
                If you are located in the United Kingdom or European Union,
                we process your personal data on the following legal bases
                under the UK GDPR and EU GDPR: your consent (for example,
                when you submit a contact form), our legitimate interests
                (for example, understanding site usage and responding to
                business inquiries), and, where applicable, steps necessary
                to enter into a contract with you or your organization.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                5. How We Share Information
              </h2>
              <p className="mt-3">
                We do not sell your personal information. We may share
                information with trusted service providers who support our
                website and business operations, such as hosting providers,
                email delivery services, and analytics providers, solely for
                the purpose of providing those services to us. We may also
                disclose information where required by law or to protect our
                rights, users, or the public.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                6. International Data Transfers
              </h2>
              <p className="mt-3">
                As a company headquartered in India serving clients across
                the US, UAE, and UK, information you submit may be
                transferred to and processed in countries other than your
                own, including India. Where we transfer personal data from
                the UK or EU, we rely on appropriate safeguards, such as
                standard contractual clauses, to protect that data.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                7. Data Retention
              </h2>
              <p className="mt-3">
                We retain contact form submissions and related correspondence
                for as long as necessary to respond to your inquiry, pursue
                a potential engagement, and comply with our legal and
                accounting obligations, after which it is deleted or
                anonymized.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                8. Your Rights (UK/EU Visitors)
              </h2>
              <p className="mt-3">
                If you are located in the UK or EU, you have the right to
                request access to, correction of, or deletion of your
                personal data; to object to or restrict certain processing;
                to request a portable copy of your data; and to withdraw
                consent at any time where processing is based on consent.
                You also have the right to lodge a complaint with your local
                data protection authority, such as the UK Information
                Commissioner&apos;s Office (ICO). To exercise any of these
                rights, contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                9. Data Security
              </h2>
              <p className="mt-3">
                We apply reasonable technical and organizational measures
                designed to protect the information we collect. No method of
                transmission or storage is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                10. Children&apos;s Privacy
              </h2>
              <p className="mt-3">
                Our website and services are intended for business audiences
                and are not directed at children. We do not knowingly
                collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                11. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                12. Contact Us
              </h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy or wish to
                exercise your data protection rights, contact us at{" "}
                <a
                  href="mailto:info@t-matglobal.com"
                  className="font-semibold text-brand-accent hover:underline"
                >
                  info@t-matglobal.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
