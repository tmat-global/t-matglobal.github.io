import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactPill from "@/components/FloatingContactPill";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://t-matglobal.com";
const DEFAULT_TITLE =
  "DevSecOps Company India | Pure-Play DevSecOps Services for US, UAE & UK";
const DEFAULT_DESCRIPTION =
  "T-Mat Global is India's dedicated pure-play DevSecOps company, delivering CI/CD security, cloud security, Kubernetes security, and 24/7 managed DevSecOps with Fortune 500 delivery standards for enterprise clients across the US, UAE, and UK.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | T-Mat Global",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "DevSecOps company India",
    "DevSecOps services USA",
    "CI/CD security",
    "cloud security consulting",
    "managed DevSecOps",
    "Kubernetes security",
  ],
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: "T-Mat Global",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "T-Mat Global Technologies — Pure-Play DevSecOps Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "T-Mat Global Technologies Pvt. Ltd.",
  alternateName: "T-Mat Global",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  description: DEFAULT_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: ["US", "AE", "GB", "IN"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@t-matglobal.com",
    telephone: "+91-7028278808",
    availableLanguage: ["English"],
  },
  sameAs: ["https://www.linkedin.com/company/tmatglobal/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${poppins.variable} font-body antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <SmoothScroll />
        <main>{children}</main>
        <Footer />
        <FloatingContactPill />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
