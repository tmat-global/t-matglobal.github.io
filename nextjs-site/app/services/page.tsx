import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesFullList from "@/components/ServicesFullList";

const TITLE =
  "DevSecOps Services | CI/CD Security, Cloud Security & Managed DevSecOps";
const DESCRIPTION =
  "Explore T-Mat Global's full DevSecOps services: CI/CD pipeline security, cloud security consulting, Kubernetes security, compliance automation, and 24/7 managed DevSecOps for enterprise clients across the US, UAE, and UK.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero firstWord="SERVICES" bgVariant="dashboard" />
      <ServicesFullList />
    </>
  );
}
