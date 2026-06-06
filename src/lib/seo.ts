import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

type PageSEO = {
  title: string;
  description: string;
  keywords: string;
  slug: string;
};

export function createMetadata({
  title,
  description,
  keywords,
  slug,
}: PageSEO): Metadata {
  const fullTitle = `${title} - Free Online GST Calculator India 2024-25`;
  const url = `${SITE_URL}/${slug === "" ? "" : slug}`.replace(/\/$/, "") || SITE_URL;

  return {
    title: fullTitle,
    description: description.slice(0, 160),
    keywords,
    openGraph: {
      title: fullTitle,
      description: description.slice(0, 160),
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description.slice(0, 160),
    },
    alternates: {
      canonical: slug === "" ? SITE_URL : `${SITE_URL}/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export type FAQItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export function createWebAppJsonLd(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function createFAQJsonLd(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href.startsWith("http") ? item.href : `${SITE_URL}${item.href}`,
    })),
  };
}
