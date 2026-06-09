import { MetadataRoute } from "next";
import { CALCULATORS, SITE_URL } from "@/lib/constants";
import { getProgrammaticSitemapEntries } from "@/data/sitemap-entries";
import { getAllBlogSlugs } from "@/data/blogs";
import { getAllGlossarySlugs } from "@/data/glossary";
import { getAllComparisonSlugs } from "@/data/comparisons";
import { getAllFAQSlugs } from "@/data/faqs";
<<<<<<< HEAD
import { getAllNewCalculatorSlugs } from "@/lib/all-calculators";
=======
>>>>>>> 4ed6793d4d69d1bb84b4ed9ef8e97c626cda1658

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/glossary`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
<<<<<<< HEAD
    { url: `${SITE_URL}/calculators`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
=======
>>>>>>> 4ed6793d4d69d1bb84b4ed9ef8e97c626cda1658
  ];

  const calculatorPages: MetadataRoute.Sitemap = CALCULATORS.map((calc) => ({
    url: `${SITE_URL}/${calc.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

<<<<<<< HEAD
  const newCalculatorPages: MetadataRoute.Sitemap = getAllNewCalculatorSlugs().map((slug) => ({
    url: `${SITE_URL}/calculators/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

=======
>>>>>>> 4ed6793d4d69d1bb84b4ed9ef8e97c626cda1658
  const blogPages: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const faqPages: MetadataRoute.Sitemap = getAllFAQSlugs().map((slug) => ({
    url: `${SITE_URL}/faq/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const glossaryPages: MetadataRoute.Sitemap = getAllGlossarySlugs().map((slug) => ({
    url: `${SITE_URL}/glossary/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const comparisonPages: MetadataRoute.Sitemap = getAllComparisonSlugs().map((slug) => ({
    url: `${SITE_URL}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const programmaticPages = getProgrammaticSitemapEntries();

  return [
    ...staticPages,
    ...calculatorPages,
<<<<<<< HEAD
    ...newCalculatorPages,
=======
>>>>>>> 4ed6793d4d69d1bb84b4ed9ef8e97c626cda1658
    ...blogPages,
    ...faqPages,
    ...glossaryPages,
    ...comparisonPages,
    ...programmaticPages,
  ];
}
