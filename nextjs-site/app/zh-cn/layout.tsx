import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "../globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactPill from "@/components/FloatingContactPill";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
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

const SITE_URL = "https://www.t-matglobal.com";
const TITLE = "T-Mat Global | DevOps、云安全与 DevSecOps 服务";
const DESCRIPTION =
  "T-Mat Global 是一家获得印度 DPIIT 认可的技术公司，提供 DevOps、DevSecOps、云基础设施、网络安全及生产环境运维服务。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | T-Mat Global",
  },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/zh-cn/`,
    siteName: "T-Mat Global",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "T-Mat Global Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: ["CN", "US", "AE", "GB", "IN"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@t-matglobal.com",
    telephone: "+91-9356307015",
    availableLanguage: ["Chinese", "English"],
  },
  sameAs: ["https://www.linkedin.com/company/tmatglobal/"],
};

export default function ChineseRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${oswald.variable} ${poppins.variable} font-body antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Header locale="zh-CN" />
        <SmoothScroll />
        <main>{children}</main>
        <Footer locale="zh-CN" />
        <FloatingContactPill locale="zh-CN" />
        <WhatsAppButton locale="zh-CN" />
        <ScrollToTop locale="zh-CN" />
        <CookieBanner locale="zh-CN" />
      </body>
    </html>
  );
}
