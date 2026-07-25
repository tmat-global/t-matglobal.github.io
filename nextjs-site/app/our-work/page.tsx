import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import OurWorkHeroIllustration from "@/components/illustrations/OurWorkHeroIllustration";
import DeviceMockupCarousel from "@/components/DeviceMockupCarousel";
import DashboardGallery from "@/components/DashboardGallery";

const TITLE = "Our Work | DevSecOps Case Studies Across US, UAE & UK";
const DESCRIPTION =
  "See how T-Mat Global's DevSecOps team secures and operates platforms for enterprise clients — from hotel operations SaaS to healthcare systems, ERPs, and laboratory information systems — across the US, UAE, and UK.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        firstWord="OUR"
        restOfTitle="WORK"
        illustration={<OurWorkHeroIllustration />}
      />
      <DeviceMockupCarousel />
      <DashboardGallery />
    </>
  );
}
