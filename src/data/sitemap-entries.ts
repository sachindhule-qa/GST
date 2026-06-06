import { MetadataRoute } from "next";
import { getAllProgrammaticPaths } from "./calculators";
import { SITE_URL } from "@/lib/constants";

export function getProgrammaticSitemapEntries(): MetadataRoute.Sitemap {
  return getAllProgrammaticPaths().map((entry) => ({
    url: `${SITE_URL}/${entry.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: entry.priority,
  }));
}
