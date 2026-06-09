import { BLOGS, getBlogsBySilo } from "@/data/blogs";
import { COMPARISONS, getComparisonsBySilo } from "@/data/comparisons";
import { FAQ_PAGES, getFAQPagesBySilo } from "@/data/faqs";
import { GLOSSARY, getGlossaryBySilo } from "@/data/glossary";
import { CALCULATORS } from "@/lib/constants";

export type InternalLink = {
  href: string;
  title: string;
  description: string;
  type: "calculator" | "blog" | "faq" | "glossary" | "comparison" | "programmatic";
};

const SILO_CALCULATORS: Record<string, string[]> = {
  gst: ["gst-calculator", "reverse-gst-calculator", "gst-calculator-18-percent", "gst-calculator-12-percent", "gst-calculator-5-percent", "gst-calculator-28-percent", "gst-on-rent-calculator"],
  tax: ["tds-calculator", "income-tax-calculator-2024-25", "hra-calculator", "professional-tax-calculator"],
  salary: ["hra-calculator", "pf-calculator", "gratuity-calculator", "professional-tax-calculator"],
  payroll: ["pf-calculator", "gratuity-calculator", "professional-tax-calculator", "hra-calculator"],
  finance: ["gst-calculator", "tds-calculator"],
  investment: ["pf-calculator"],
  loans: ["gst-calculator"],
  accounting: ["gst-calculator", "tds-calculator", "gst-invoice-number-generator"],
  banking: ["gst-calculator"],
  business: ["gst-calculator", "tds-calculator"],
  "government-schemes": ["hra-calculator", "pf-calculator"],
};

export function getRelatedLinks(options: {
  silo?: string;
  currentSlug?: string;
  currentType?: "blog" | "faq" | "glossary" | "comparison" | "calculator" | "programmatic";
  count?: number;
}): {
  calculators: InternalLink[];
  blogs: InternalLink[];
  faqs: InternalLink[];
  glossary: InternalLink[];
  comparisons: InternalLink[];
} {
  const { silo = "gst", currentSlug = "", count = 4 } = options;

  const calculatorSlugs = SILO_CALCULATORS[silo] || SILO_CALCULATORS.gst;
  const calculators: InternalLink[] = CALCULATORS.filter(
    (c) => calculatorSlugs.includes(c.slug) && c.slug !== currentSlug
  )
    .slice(0, count)
    .map((c) => ({
      href: `/${c.slug}`,
      title: c.name,
      description: c.description,
      type: "calculator",
    }));

  const blogs: InternalLink[] = getBlogsBySilo(silo)
    .filter((b) => b.slug !== currentSlug)
    .slice(0, count)
    .map((b) => ({
      href: `/blog/${b.slug}`,
      title: b.title,
      description: b.description,
      type: "blog",
    }));

  const faqs: InternalLink[] = getFAQPagesBySilo(silo)
    .filter((f) => f.slug !== currentSlug)
    .slice(0, 3)
    .map((f) => ({
      href: `/faq/${f.slug}`,
      title: f.title,
      description: f.description,
      type: "faq",
    }));

  const glossary: InternalLink[] = getGlossaryBySilo(silo)
    .filter((g) => g.slug !== currentSlug)
    .slice(0, count)
    .map((g) => ({
      href: `/glossary/${g.slug}`,
      title: `${g.term} — Meaning & Definition`,
      description: g.shortDefinition,
      type: "glossary",
    }));

  const comparisons: InternalLink[] = getComparisonsBySilo(silo)
    .filter((c) => c.slug !== currentSlug)
    .slice(0, 3)
    .map((c) => ({
      href: `/compare/${c.slug}`,
      title: c.title,
      description: c.summary.slice(0, 100) + "…",
      type: "comparison",
    }));

  return { calculators, blogs, faqs, glossary, comparisons };
}

export function getCalculatorRelatedContent(calculatorSlug: string): {
  blogs: InternalLink[];
  faqs: InternalLink[];
  glossary: InternalLink[];
  comparisons: InternalLink[];
} {
  const calc = CALCULATORS.find((c) => c.slug === calculatorSlug);
  const silo = calc?.category === "gst" ? "gst" : calc?.category === "tax" ? "tax" : calc?.category === "payroll" ? "salary" : "gst";

  const blogs: InternalLink[] = BLOGS.filter(
    (b) => b.relatedCalculator === calculatorSlug || b.silo === silo
  )
    .slice(0, 5)
    .map((b) => ({
      href: `/blog/${b.slug}`,
      title: b.title,
      description: b.description,
      type: "blog",
    }));

  const faqs: InternalLink[] = FAQ_PAGES.filter((f) => f.relatedCalculator === calculatorSlug || f.silo === silo)
    .slice(0, 3)
    .map((f) => ({
      href: `/faq/${f.slug}`,
      title: f.title,
      description: f.description,
      type: "faq",
    }));

  const glossary: InternalLink[] = GLOSSARY.filter((g) => g.silo === silo)
    .slice(0, 4)
    .map((g) => ({
      href: `/glossary/${g.slug}`,
      title: `${g.term} — Meaning`,
      description: g.shortDefinition,
      type: "glossary",
    }));

  const comparisons: InternalLink[] = COMPARISONS.filter((c) => c.silo === silo)
    .slice(0, 3)
    .map((c) => ({
      href: `/compare/${c.slug}`,
      title: c.title,
      description: `${c.termA} vs ${c.termB}`,
      type: "comparison",
    }));

  return { blogs, faqs, glossary, comparisons };
}

export function getSiloNavigation(silo: string): InternalLink[] {
  const links: InternalLink[] = [];

  getBlogsBySilo(silo)
    .slice(0, 3)
    .forEach((b) => links.push({ href: `/blog/${b.slug}`, title: b.title, description: b.category, type: "blog" }));

  getFAQPagesBySilo(silo)
    .slice(0, 2)
    .forEach((f) => links.push({ href: `/faq/${f.slug}`, title: f.title, description: f.category, type: "faq" }));

  getGlossaryBySilo(silo)
    .slice(0, 3)
    .forEach((g) => links.push({ href: `/glossary/${g.slug}`, title: g.term, description: g.shortDefinition, type: "glossary" }));

  getComparisonsBySilo(silo)
    .slice(0, 2)
    .forEach((c) => links.push({ href: `/compare/${c.slug}`, title: c.title, description: `${c.termA} vs ${c.termB}`, type: "comparison" }));

  return links;
}
