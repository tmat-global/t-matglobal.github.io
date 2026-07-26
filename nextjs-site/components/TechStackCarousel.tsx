"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";
import { techStack } from "@/data/techStack";

const TRIANGLE_PATTERN =
  "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%2740%27%20height%3D%2740%27%20viewBox%3D%270%200%2040%2040%27%3E%3Cpath%20d%3D%27M20%204%20L36%2032%20L4%2032%20Z%27%20fill%3D%27none%27%20stroke%3D%27rgba%280%2C0%2C0%2C0.06%29%27%20stroke-width%3D%271%27/%3E%3C/svg%3E";

export default function TechStackCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState<string | null>(null);

  const scroll = (direction: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const toggle = (name: string) => {
    setFlipped((current) => (current === name ? null : name));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>, name: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(name);
    }
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
        <ScrollFadeIn>
          <SectionHeading
            align="center"
            className="mb-4"
            segments={[
              { text: "OUR TEAM WORKS ON", color: "black" },
              { text: "TECHNOLOGIES SUCH AS", color: "green" },
            ]}
          />
          <p className="mb-12 text-center font-body text-sm text-brand-black/50">
            Hover or tap a card to see how we actually use it in delivery.
          </p>
        </ScrollFadeIn>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {techStack.map((tech, i) => {
            const isFlipped = flipped === tech.name;
            return (
              <ScrollFadeIn
                key={tech.name}
                delayMs={(i % 6) * 80}
                className="w-40 shrink-0 snap-start sm:w-44"
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-pressed={isFlipped}
                  aria-label={`${tech.name} — show usage details`}
                  onMouseEnter={() => setFlipped(tech.name)}
                  onMouseLeave={() =>
                    setFlipped((current) => (current === tech.name ? null : current))
                  }
                  onClick={() => toggle(tech.name)}
                  onKeyDown={(e) => handleKeyDown(e, tech.name)}
                  className="aspect-square cursor-pointer [perspective:1000px]"
                >
                  <div
                    className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
                      isFlipped ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white p-6 shadow-md [backface-visibility:hidden]">
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

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-brand-black p-4 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <p className="font-heading text-xs font-bold uppercase tracking-wide text-brand-green">
                        {tech.name}
                      </p>
                      <p className="font-body text-[11px] leading-snug text-white/80">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            );
          })}
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
