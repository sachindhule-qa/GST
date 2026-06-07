import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getFAQPageBySlug, getAllFAQSlugs, getRelatedFAQPages } from "@/data/faqs";
import { createMetadata, createFAQJsonLd, createBreadcrumbJsonLd } from "@/lib/seo";
import { getRelatedLinks } from "@/lib/internal-links";
import ContentPageLayout from "@/components/ContentPageLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllFAQSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getFAQPageBySlug(params.slug);
  if (!page) return {};
  return createMetadata({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    slug: `faq/${page.slug}`,
  });
}

export default function FAQDetailPage({ params }: Props) {
  const page = getFAQPageBySlug(params.slug);
  if (!page) notFound();

  const relatedFAQs = getRelatedFAQPages(page.slug, 4);
  const { calculators, blogs, glossary, comparisons } = getRelatedLinks({
    silo: page.silo,
    currentSlug: page.slug,
    currentType: "faq",
    count: 4,
  });

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "FAQ", href: "/faq" },
    { name: page.title, href: `/faq/${page.slug}` },
  ];

  const faqSchema = createFAQJsonLd(page.questions);
  const breadcrumbSchema = createBreadcrumbJsonLd(breadcrumbs);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${SITE_URL}/faq/${page.slug}`,
    isPartOf: { "@type": "WebSite", name: "GSTCalc.in", url: SITE_URL },
  };

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema, webPageSchema]} />
      <ContentPageLayout
        breadcrumbs={breadcrumbs}
        badge={`FAQ — ${page.category}`}
        title={page.title}
        description={page.description}
        meta={[{ label: "Questions", value: `${page.questions.length} answered` }]}
        relatedCalculators={calculators}
        relatedBlogs={blogs}
        relatedFAQs={relatedFAQs.map((f) => ({
          href: `/faq/${f.slug}`,
          title: f.title,
          description: f.description,
          type: "faq" as const,
        }))}
        relatedGlossary={glossary}
        relatedComparisons={comparisons}
      >
        <div className="space-y-0 divide-y divide-gray-100">
          {page.questions.map((qa, i) => (
            <details
              key={i}
              className="group py-4 cursor-pointer"
              open={i === 0}
            >
              <summary className="flex items-start justify-between gap-4 list-none">
                <h2 className="text-base font-semibold text-gray-900 leading-snug pr-4">
                  {i + 1}. {qa.question}
                </h2>
                <span className="shrink-0 mt-0.5 text-gray-400 group-open:rotate-180 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">{qa.answer}</p>
            </details>
          ))}
        </div>

        {/* Related Calculator */}
        {page.relatedCalculator && (
          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm font-semibold text-blue-800 mb-1">🧮 Related Calculator</p>
            <a
              href={`/${page.relatedCalculator}`}
              className="text-blue-700 hover:text-blue-900 font-medium underline underline-offset-2 text-sm"
            >
              Use the {page.relatedCalculator.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
            </a>
          </div>
        )}
      </ContentPageLayout>
    </>
  );
}
