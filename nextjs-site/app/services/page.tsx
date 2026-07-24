import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "DevSecOps, cloud, and platform engineering services delivered by T-Mat Global to enterprise clients across the US, UAE, and UK.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero firstWord="SERVICES" imageSrc="/heroes/services.jpg" />
      <ServicesGrid showHeading={false} />
    </>
  );
}
