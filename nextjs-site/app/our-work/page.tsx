import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies and engagements delivered by T-Mat Global for enterprise clients across the US, UAE, and UK.",
};

export default function OurWorkPage() {
  return (
    <PageHero
      firstWord="OUR"
      restOfTitle="WORK"
      imageSrc="/heroes/our-work.jpg"
    />
  );
}
