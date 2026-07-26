import Image from "next/image";
import { Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

const VISION_ITEMS = [
  "Making security a default in every software delivery pipeline",
  "Putting India on the map for pure-play DevSecOps",
  "Fortune 500 standards for businesses of every size",
  "Continuous learning and certification across the team",
  "Expanding across US, UAE, and UK markets",
  "24/7 reliability our clients can build on",
];

export default function OurVision() {
  return (
    <section className="bg-brand-green py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <SectionHeading
            align="center"
            className="mb-16"
            segments={[{ text: "OUR VISION", color: "black" }]}
          />
        </ScrollFadeIn>

        <ul className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
          {VISION_ITEMS.map((item, i) => (
            <li key={item}>
              <ScrollFadeIn delayMs={(i % 2) * 90} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                  <Check className="h-4 w-4 text-brand-accent" strokeWidth={3} />
                </span>
                <span className="font-body text-base text-brand-black">{item}</span>
              </ScrollFadeIn>
            </li>
          ))}
        </ul>

        <ScrollFadeIn className="mx-auto mt-16 flex h-28 w-28 items-center justify-center rounded-2xl bg-white p-5 shadow-lg">
          <Image
            src="/logo.svg"
            alt="T-Mat Global logo"
            width={72}
            height={72}
          />
        </ScrollFadeIn>
      </div>
    </section>
  );
}
