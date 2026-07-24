import Link from "next/link";

interface PageHeroProps {
  firstWord: string;
  restOfTitle?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
}

export default function PageHero({
  firstWord,
  restOfTitle,
  subheadline,
  ctaLabel,
  ctaHref,
  imageSrc,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-brand-black sm:min-h-[70vh]">
      <div
        className="absolute inset-0 grayscale"
        style={{
          backgroundImage: imageSrc
            ? `url(${imageSrc})`
            : "linear-gradient(135deg, #4a4a4a 0%, #232323 55%, #0a0a0a 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="inline-block bg-brand-green px-4 py-1">
            {firstWord}
          </span>
          {restOfTitle ? <> {restOfTitle}</> : null}
        </h1>

        {subheadline ? (
          <p className="mt-6 max-w-2xl font-body text-lg text-white/90">
            {subheadline}
          </p>
        ) : null}

        {ctaLabel && ctaHref ? (
          <Link
            href={ctaHref}
            className="mt-8 inline-block rounded bg-brand-green px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-green-dark"
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
