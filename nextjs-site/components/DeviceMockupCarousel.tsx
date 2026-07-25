"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function DeviceMockupCarousel() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const prev = () =>
    setIndex((current) => (current - 1 + projects.length) % projects.length);
  const next = () => setIndex((current) => (current + 1) % projects.length);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="mb-4"
          segments={[
            { text: "RESPONSIVE DEVSECOPS", color: "black" },
            { text: "FOR ANY STACK", color: "green" },
          ]}
        />
        <p className="mx-auto max-w-2xl text-center font-body text-base text-brand-black/70">
          The platforms we secure and operate look and perform the same
          whether a client&apos;s team is on a laptop, a tablet, or a phone.
        </p>

        <div className="relative mx-auto mt-16 max-w-3xl pb-16">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand-black text-white shadow-lg transition-transform hover:scale-105 sm:-left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-brand-green text-brand-black shadow-lg transition-transform hover:scale-105 sm:-right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* laptop */}
          <div className="relative mx-auto w-[85%]">
            <div className="rounded-t-xl border-[10px] border-brand-black bg-brand-black">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-white">
                <Image
                  src={project.image}
                  alt={`Dashboard screenshot of the ${project.name} platform on a laptop`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mx-auto h-3 w-[106%] -translate-x-[3%] rounded-b-md bg-brand-black/70" />

            {/* tablet */}
            <div className="absolute -bottom-14 -left-6 w-[30%] sm:-left-12 sm:w-[26%]">
              <div className="rounded-xl border-[6px] border-brand-black bg-brand-black shadow-xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-white">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* phone */}
            <div className="absolute -bottom-16 -right-4 w-[16%] sm:-right-8 sm:w-[14%]">
              <div className="rounded-2xl border-[6px] border-brand-black bg-brand-black shadow-xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-lg bg-white">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center font-heading text-sm font-bold uppercase tracking-wide text-brand-accent">
          {project.name}
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          {projects.map((item, dotIndex) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Show ${item.name}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                dotIndex === index ? "bg-brand-green" : "bg-brand-black/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
