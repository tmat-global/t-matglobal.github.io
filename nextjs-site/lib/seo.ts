import type { Metadata } from "next";

const DEFAULT_OG_IMAGE = "/og-image.png";

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function seoMeta({
  title,
  description,
  path,
  image,
}: SeoOptions): Pick<Metadata, "alternates" | "openGraph" | "twitter"> {
  const img = image ?? DEFAULT_OG_IMAGE;
  return {
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "T-Mat Global",
      type: "website",
      locale: "en_US",
      images: [{ url: img, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img],
    },
  };
}
