import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

export default function AboutCompany() {
  return (
    <section className="bg-white py-20">
      <ScrollFadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="mb-10"
          segments={[
            { text: "ABOUT THE", color: "black" },
            { text: "COMPANY", color: "green" },
          ]}
        />

        <p className="font-body text-xl font-bold text-brand-black">
          We are T-Mat Global Technologies, India&apos;s dedicated pure-play
          DevSecOps company.
        </p>

        <p className="mt-6 text-justify font-body text-base leading-relaxed text-brand-black/80">
          Founded by an{" "}
          <strong className="font-semibold text-brand-black">
            AWS DevOps Professional certified engineer
          </strong>{" "}
          who previously worked as an enterprise DevOps engineer at{" "}
          <strong className="font-semibold text-brand-black">
            T-Mobile USA
          </strong>
          , we bring{" "}
          <strong className="font-semibold text-brand-black">
            Fortune 500 delivery standards
          </strong>{" "}
          to growing businesses in the US, UAE, and UK. From securing CI/CD
          pipelines to running{" "}
          <strong className="font-semibold text-brand-black">
            24/7 managed cloud operations
          </strong>
          , we make security a built-in feature of how our clients ship
          software, not an afterthought. As a{" "}
          <strong className="font-semibold text-brand-black">
            DPIIT-recognized startup
          </strong>
          , we combine startup agility with enterprise discipline.
        </p>

        <Link
          href="/about"
          className="mt-10 block w-full rounded bg-brand-green px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark sm:inline-block sm:w-auto"
        >
          Read More
        </Link>
      </ScrollFadeIn>
    </section>
  );
}
