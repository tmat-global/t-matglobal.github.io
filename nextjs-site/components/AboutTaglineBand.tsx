import Image from "next/image";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

export default function AboutTaglineBand() {
  return (
    <section className="relative bg-brand-green pb-16 pt-20">
      <div className="absolute left-1/2 top-0 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-4 shadow-lg sm:h-28 sm:w-28">
        <Image
          src="/logo.svg"
          alt="T-Mat Global logo"
          width={80}
          height={80}
          className="h-full w-full"
        />
      </div>

      <ScrollFadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand-black sm:text-4xl">
          Security Built Into Everything.
        </h2>
      </ScrollFadeIn>
    </section>
  );
}
