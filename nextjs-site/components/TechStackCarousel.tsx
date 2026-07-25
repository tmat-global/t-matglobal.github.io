"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { techStack } from "@/data/techStack";

const TRIANGLE_PATTERN =
  "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%2740%27%20height%3D%2740%27%20viewBox%3D%270%200%2040%2040%27%3E%3Cpath%20d%3D%27M20%204%20L36%2032%20L4%2032%20Z%27%20fill%3D%27none%27%20stroke%3D%27rgba%280%2C0%2C0%2C0.06%29%27%20stroke-width%3D%271%27/%3E%3C/svg%3E";

export default function TechStackCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative bg-brand-grey py-20"
      style={{
        backgroundImage: `url("${TRIANGLE_PATTERN}")`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="mb-16"
          segments={[
            { text: "OUR TEAM WORKS ON", color: "black" },
            { text: "TECHNOLOGIES SUCH AS", color: "green" },
          ]}
        />

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex aspect-square w-40 shrink-0 snap-start flex-col items-center justify-center gap-4 bg-white p-6 shadow-md sm:w-44"
            >
              <svg
                viewBox={tech.viewBox}
                className="h-16 w-16"
                fill={tech.color}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d={tech.path} />
              </svg>
              <p className="text-center font-heading text-sm font-bold uppercase tracking-wide text-brand-black">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => scroll("prev")}
            aria-label="Previous technologies"
            className="flex h-12 w-12 items-center justify-center bg-brand-black text-white transition-colors hover:bg-black"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => scroll("next")}
            aria-label="Next technologies"
            className="flex h-12 w-12 items-center justify-center bg-brand-green text-brand-black transition-colors hover:bg-brand-green-dark"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
