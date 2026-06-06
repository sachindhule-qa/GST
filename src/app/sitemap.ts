import { MetadataRoute } from "next";
import { CALCULATORS, SITE_URL } from "@/lib/constants";
import { getProgrammaticSitemapEntries } from "@/data/sitemap-entries";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...CALCULATORS.map((calc) => ({
      url: `${SITE_URL}/${calc.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];

  return [...staticPages, ...getProgrammaticSitemapEntries()];
}
