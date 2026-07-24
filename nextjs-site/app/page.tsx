import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";

export default function HomePage() {
  return (
    <>
      <PageHero
        firstWord="SECURE"
        restOfTitle="DEVOPS. DELIVERED."
        subheadline="India's dedicated pure-play DevSecOps company. Enterprise-grade CI/CD security, cloud security, and 24/7 managed DevSecOps for US, UAE, and UK businesses."
        ctaLabel="Get a Free DevSecOps Assessment"
        ctaHref="/contact"
        imageSrc="/heroes/home.jpg"
      />
      <ServicesGrid limit={6} />
    </>
  );
}
