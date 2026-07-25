import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://t-matglobal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/our-work/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/vaultrak/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog/`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/about/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact/`, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${SITE_URL}/schedule-demo/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${SITE_URL}/careers/`, changeFrequency: "monthly", priority: 0.4 },
    {
      url: `${SITE_URL}/privacy-policy/`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/terms-conditions/`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}/`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
