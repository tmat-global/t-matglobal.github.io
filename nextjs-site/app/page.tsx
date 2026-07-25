import PageHero from "@/components/PageHero";
import HomeHeroIllustration from "@/components/illustrations/HomeHeroIllustration";
import ServicesGrid from "@/components/ServicesGrid";
import WorkflowSteps from "@/components/WorkflowSteps";
import TechStackCarousel from "@/components/TechStackCarousel";
import AboutCompany from "@/components/AboutCompany";
import OurVision from "@/components/OurVision";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import OurProjects from "@/components/OurProjects";
import VaultRakSection from "@/components/VaultRakSection";
import BusinessVideo from "@/components/BusinessVideo";

export default function HomePage() {
  return (
    <>
      <PageHero
        firstWord="SECURE"
        restOfTitle="DEVOPS. DELIVERED."
        subheadline="India's dedicated pure-play DevSecOps company. Enterprise-grade CI/CD security, cloud security, and 24/7 managed DevSecOps for US, UAE, and UK businesses."
        ctaLabel="Get a Free DevSecOps Assessment"
        ctaHref="/contact"
        illustration={<HomeHeroIllustration />}
      />
      <ServicesGrid limit={6} />
      <WorkflowSteps />
      <TechStackCarousel />
      <AboutCompany />
      <OurVision />
      <TestimonialCarousel />
      <OurProjects />
      <VaultRakSection />
      <BusinessVideo />
    </>
  );
}
