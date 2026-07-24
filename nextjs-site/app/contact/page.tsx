import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with T-Mat Global's DevSecOps team for 24/7 enterprise support across the US, UAE, and UK.",
};

export default function ContactPage() {
  return (
    <PageHero
      firstWord="CONTACT"
      restOfTitle="US"
      imageSrc="/heroes/contact.jpg"
    />
  );
}
