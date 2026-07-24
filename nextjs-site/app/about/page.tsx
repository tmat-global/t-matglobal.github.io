import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "T-Mat Global is India's dedicated pure-play DevSecOps company, built to serve enterprise clients across the US, UAE, and UK.",
};

export default function AboutPage() {
  return (
    <PageHero firstWord="ABOUT" restOfTitle="US" imageSrc="/heroes/about.jpg" />
  );
}
