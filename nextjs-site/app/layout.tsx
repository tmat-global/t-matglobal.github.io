import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactPill from "@/components/FloatingContactPill";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.t-matglobal.com"),
  title: {
    default: "T-Mat Global | Pure-Play DevSecOps Company",
    template: "%s | T-Mat Global",
  },
  description:
    "T-Mat Global is India's dedicated pure-play DevSecOps company, delivering Fortune 500 standards with 24/7 support for enterprise clients across the US, UAE, and UK.",
  openGraph: {
    title: "T-Mat Global | Pure-Play DevSecOps Company",
    description:
      "India's dedicated pure-play DevSecOps company serving US, UAE, and UK enterprise clients with 24/7 support and Fortune 500 delivery standards.",
    url: "https://www.t-matglobal.com",
    siteName: "T-Mat Global",
    type: "website",
  },
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
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContactPill />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
