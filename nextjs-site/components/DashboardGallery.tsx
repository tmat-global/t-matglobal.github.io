"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";
import { projects } from "@/data/projects";

export default function DashboardGallery() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const prev = () =>
    setIndex((current) => (current - 1 + projects.length) % projects.length);
  const next = () => setIndex((current) => (current + 1) % projects.length);

  return (
    <section className="bg-brand-grey py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <SectionHeading
            align="center"
            className="mb-16"
            segments={[
              { text: "DIFFERENT DASHBOARDS", color: "black" },
              { text: "& PIPELINES", color: "green" },
            ]}
          />
        </ScrollFadeIn>

        <ScrollFadeIn delayMs={120} className="relative mx-auto max-w-3xl">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-accent shadow-lg transition-transform hover:scale-105 sm:-left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-accent shadow-lg transition-transform hover:scale-105 sm:-right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="overflow-hidden rounded-lg bg-white shadow-xl">
            <div className="flex items-center gap-2 bg-brand-black px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <div className="ml-3 h-5 flex-1 rounded bg-white/10" />
            </div>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={project.image}
                alt={`Dashboard and pipeline view from the ${project.name} platform`}
                fill
                className="object-cover"
              />
            </div>
            <div className="px-5 py-4">
              <p className="font-heading text-base font-bold uppercase tracking-wide text-brand-black">
                {project.name}
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        <div className="mt-8 flex items-center justify-center gap-3">
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
