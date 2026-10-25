import type { Metadata } from "next";
import { seoMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import ServicesFullList from "@/components/ServicesFullList";

const TITLE =
  "DevOps, Cloud Security & DevSecOps Services";
const DESCRIPTION =
  "Explore T-Mat Global's DevOps, cloud security, CI/CD security, Kubernetes security and managed operations services for teams in the US, UAE and UK.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...seoMeta({ title: TITLE, description: DESCRIPTION, path: "/services/" }),
};

export default function ServicesPage() {
  return (
    <>
      <PageHero firstWord="SERVICES" bgVariant="dashboard" />
      <ServicesFullList />
    </>
  );
}
