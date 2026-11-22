import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://www.t-matglobal.com";

function route(url: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly"): MetadataRoute.Sitemap[number] {
  const englishPath = url.replace(SITE_URL, "");
  const chinesePath = `/zh-cn${englishPath === "/" ? "/" : englishPath}`;
  return {
    url,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: url,
        "zh-CN": `${SITE_URL}${chinesePath}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/services/", 0.9, "weekly"],
    ["/our-work/", 0.8, "monthly"],
    ["/vaultrak/", 0.9, "weekly"],
    ["/about/", 0.7, "monthly"],
    ["/contact/", 0.7, "monthly"],
    ["/schedule-demo/", 0.7, "monthly"],
    ["/careers/", 0.4, "monthly"],
    ["/privacy-policy/", 0.2, "yearly"],
    ["/terms-conditions/", 0.2, "yearly"],
    ["/blog/", 0.7, "weekly"],
  ];

  const staticRoutes = staticPaths.flatMap(([path, priority, frequency]) => {
    const english = route(`${SITE_URL}${path}`, priority, frequency);
    const chinesePath = `/zh-cn${path === "/" ? "/" : path}`;
    return [
      english,
      {
        ...english,
        url: `${SITE_URL}${chinesePath}`,
        alternates: {
          languages: {
            en: `${SITE_URL}${path}`,
            "zh-CN": `${SITE_URL}${chinesePath}`,
          },
        },
      },
    ];
  });

  const serviceRoutes = services.flatMap((service) => {
    const path = `/services/${service.slug}/`;
    return [
      route(`${SITE_URL}${path}`, 0.8),
      {
        url: `${SITE_URL}/zh-cn${path}`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: {
          languages: {
            en: `${SITE_URL}${path}`,
            "zh-CN": `${SITE_URL}/zh-cn${path}`,
          },
        },
      },
    ];
  });

  const posts = getAllPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
