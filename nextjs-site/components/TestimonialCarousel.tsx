"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
// import ClientLogoStrip from "@/components/ClientLogoStrip"; // disabled: no real client logos with permission yet
import { testimonials } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const prev = () =>
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((current) => (current + 1) % testimonials.length);

  return (
    <section className="relative overflow-hidden py-20">
      <Image
        src="/heroes/about.jpg"
        alt=""
        fill
        className="scale-110 object-cover blur-md"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="mb-16"
          segments={[{ text: "WHAT OUR CLIENTS SAY", color: "white" }]}
        />

        <div className="relative mx-auto max-w-2xl">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-accent shadow-lg transition-transform hover:scale-105 sm:-left-4 sm:-translate-x-1/2"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-accent shadow-lg transition-transform hover:scale-105 sm:-right-4 sm:translate-x-1/2"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative overflow-hidden rounded-lg bg-white px-8 py-14 text-center shadow-xl sm:px-16">
            <Quote
              className="absolute left-4 top-4 h-12 w-12 text-brand-accent/30 sm:h-16 sm:w-16"
              fill="currentColor"
            />
            <Quote
              className="absolute bottom-4 right-4 h-12 w-12 rotate-180 text-brand-accent/30 sm:h-16 sm:w-16"
              fill="currentColor"
            />

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-grey">
                <User className="h-10 w-10 text-brand-black/40" />
              </div>

              <p className="mt-5 font-heading text-lg font-bold text-brand-black">
                {testimonial.name}
              </p>
              <p className="mt-1 font-heading text-xs font-semibold uppercase tracking-wider text-brand-black/50">
                {testimonial.role}
              </p>

              <p className="mt-6 max-w-md font-body text-base italic leading-relaxed text-brand-black/60">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((item, dotIndex) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Show testimonial from ${item.name}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                dotIndex === index ? "bg-brand-green" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* <ClientLogoStrip /> disabled: no real client logos with permission yet */}
      </div>
    </section>
  );
}
