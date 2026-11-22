import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import DeviceMockupCarousel from "@/components/DeviceMockupCarousel";
import DashboardGallery from "@/components/DashboardGallery";

const TITLE =
  "Our Work | DevOps and Security Case Studies";
const DESCRIPTION =
  "Projects T-Mat Global has built, secured and operated, from hotel operations software to healthcare systems, ERPs and laboratory information systems.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...seoMeta({ title: TITLE, description: DESCRIPTION, path: "/our-work/" }),
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero firstWord="OUR" restOfTitle="WORK" bgVariant="chart" />
      <DeviceMockupCarousel />
      <DashboardGallery />
    </>
  );
}
