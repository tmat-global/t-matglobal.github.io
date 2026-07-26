import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";
import { projects } from "@/data/projects";

export default function OurProjects() {
  return (
    <section className="bg-brand-green py-20">
      <ScrollFadeIn className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="mb-6"
          segments={[{ text: "OUR PROJECTS", color: "black" }]}
        />

        <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-brand-black/80">
          From building complete platforms as a trusted development partner
          to securing and operating them in production, here&apos;s where
          our work runs live.
        </p>

        <Link
          href="/our-work"
          className="mt-8 block w-full rounded border-2 border-brand-black px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-black hover:text-white sm:inline-block sm:w-auto"
        >
          View More
        </Link>

        <div className="mt-14 grid grid-cols-1 gap-8 text-left sm:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollFadeIn
              key={project.slug}
              delayMs={(i % 2) * 100}
              className="overflow-hidden rounded-lg bg-white shadow-xl"
            >
              <div className="flex items-center gap-2 bg-brand-black px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <div className="ml-3 h-5 flex-1 rounded bg-white/10" />
              </div>

              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={project.image}
                  alt={`Dashboard screenshot of the ${project.name} platform`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="px-5 py-4">
                <p className="font-heading text-base font-bold uppercase tracking-wide text-brand-black">
                  {project.name}
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed text-brand-black/70">
                  {project.caption}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </ScrollFadeIn>
    </section>
  );
}
