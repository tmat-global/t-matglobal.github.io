import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalReviewNotice from "@/components/LegalReviewNotice";
import AuditIllustration from "@/components/illustrations/support/AuditIllustration";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing use of the T-Mat Global Technologies website and engagement with our DevSecOps services.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero
        firstWord="TERMS &"
        restOfTitle="CONDITIONS"
        imageSrc="/heroes/services.jpg"
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 w-full max-w-xs">
            <AuditIllustration />
          </div>

          <LegalReviewNotice />

          <p className="mt-8 font-body text-sm text-brand-black/50">
            Last updated: July 2026
          </p>

          <div className="mt-6 space-y-10 font-body text-base leading-relaxed text-brand-black/80">
            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                These Terms &amp; Conditions govern your use of
                t-matglobal.com and your initial engagement with T-Mat
                Global Technologies (&ldquo;T-Mat Global,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
                using this website or submitting an inquiry through it, you
                agree to these terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                2. About Our Services
              </h2>
              <p className="mt-3">
                T-Mat Global provides DevSecOps consulting, CI/CD pipeline
                security, cloud security, container and Kubernetes security,
                compliance automation, vulnerability management,
                infrastructure as code, and 24/7 managed DevSecOps services
                to enterprise clients. Service descriptions on this site are
                for general information and do not constitute a binding
                offer.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                3. Engagements &amp; Statements of Work
              </h2>
              <p className="mt-3">
                Specific engagements are governed by a separate signed
                statement of work, master services agreement, or similar
                contract between T-Mat Global and the client, which will set
                out scope, deliverables, fees, timelines, and any additional
                terms. Where a signed agreement conflicts with these general
                website terms, the signed agreement controls.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                4. Use of This Website
              </h2>
              <p className="mt-3">
                You agree to use this website only for lawful purposes and
                not to attempt to disrupt, probe, or compromise its security
                or availability. All content on this site, including text,
                graphics, logos, and design, is owned by T-Mat Global or its
                licensors and may not be reproduced without permission.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                5. Client Responsibilities
              </h2>
              <p className="mt-3">
                Where an engagement proceeds, clients are responsible for
                providing timely access, information, and decisions
                reasonably required for T-Mat Global to deliver the agreed
                services, including access to relevant systems,
                repositories, and personnel.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                6. Confidentiality
              </h2>
              <p className="mt-3">
                Both parties agree to treat non-public information shared
                during an engagement as confidential. Formal engagements are
                typically also covered by a mutual non-disclosure agreement
                executed alongside the statement of work.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                7. Fees &amp; Payment
              </h2>
              <p className="mt-3">
                Fees, payment schedules, and invoicing terms for a specific
                engagement are set out in the applicable statement of work.
                General inquiries submitted through this website do not
                create a payment obligation.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                8. Intellectual Property
              </h2>
              <p className="mt-3">
                Unless otherwise agreed in a statement of work, deliverables
                created specifically for a client as part of a paid
                engagement become the client&apos;s property upon full
                payment. T-Mat Global retains ownership of its pre-existing
                tools, frameworks, methodologies, and any general knowledge
                or techniques used or developed in the course of delivering
                services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                9. Limitation of Liability
              </h2>
              <p className="mt-3">
                To the maximum extent permitted by law, T-Mat Global will
                not be liable for indirect, incidental, or consequential
                damages arising from use of this website. Liability
                relating to a specific paid engagement is governed by the
                limitation of liability terms set out in the applicable
                statement of work or master services agreement.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                10. Termination
              </h2>
              <p className="mt-3">
                Either party may terminate an active engagement in
                accordance with the termination terms specified in the
                applicable statement of work or master services agreement.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                11. Governing Law
              </h2>
              <p className="mt-3">
                These terms are governed by the laws of India, without
                regard to conflict-of-law principles, unless a signed
                statement of work with a specific client expressly provides
                otherwise.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                12. Changes to These Terms
              </h2>
              <p className="mt-3">
                We may update these Terms &amp; Conditions from time to
                time. Changes will be posted on this page with an updated
                revision date.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold uppercase text-brand-black">
                13. Contact Us
              </h2>
              <p className="mt-3">
                Questions about these terms can be sent to{" "}
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
