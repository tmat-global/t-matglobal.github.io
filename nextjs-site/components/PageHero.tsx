import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ScrollFadeIn from "./illustrations/ScrollFadeIn";

interface PageHeroProps {
  firstWord: string;
  restOfTitle?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  illustration?: ReactNode;
}

export default function PageHero({
  firstWord,
  restOfTitle,
  subheadline,
  ctaLabel,
  ctaHref,
  imageSrc,
  illustration,
}: PageHeroProps) {
  const heading = (
    <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
      <span className="inline-block bg-brand-green px-4 py-1 text-brand-black">
        {firstWord}
      </span>
      {restOfTitle ? <> {restOfTitle}</> : null}
    </h1>
  );

  const subhead = subheadline ? (
    <p className="mt-6 max-w-2xl font-body text-lg text-white/90">
      {subheadline}
    </p>
  ) : null;

  const cta =
    ctaLabel && ctaHref ? (
      <Link
        href={ctaHref}
        className="mt-8 block w-full rounded bg-brand-green px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark sm:inline-block sm:w-auto"
      >
        {ctaLabel}
      </Link>
    ) : null;

  if (illustration) {
    return (
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-brand-black sm:min-h-[70vh]">
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-20">
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            {heading}
            {subhead}
            {cta}
          </div>
          <ScrollFadeIn className="w-full max-w-sm lg:w-1/2 lg:max-w-none">
            {illustration}
          </ScrollFadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-brand-black sm:min-h-[70vh]">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale"
        />
      ) : (
        <div
          className="absolute inset-0 grayscale"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #4a4a4a 0%, #232323 55%, #0a0a0a 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {heading}
        {subhead}
        {cta}
      </div>
    </section>
  );
}
