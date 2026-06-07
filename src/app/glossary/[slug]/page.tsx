import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getGlossaryTermBySlug,
  getAllGlossarySlugs,
  getRelatedGlossaryTerms,
  getGlossaryBySilo,
} from "@/data/glossary";
import { createMetadata, createBreadcrumbJsonLd } from "@/lib/seo";
import { getRelatedLinks } from "@/lib/internal-links";
import ContentPageLayout from "@/components/ContentPageLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const term = getGlossaryTermBySlug(params.slug);
  if (!term) return {};
  return createMetadata({
    title: `${term.term} — Meaning, Definition & Explanation`,
    description: `What is ${term.term}? ${term.shortDefinition} Complete definition with examples for Indian businesses and taxpayers.`,
    keywords: `${term.term} meaning, ${term.term} definition, what is ${term.term}, ${term.term} India`,
    slug: `glossary/${term.slug}`,
  });
}

export default function GlossaryTermPage({ params }: Props) {
  const term = getGlossaryTermBySlug(params.slug);
  if (!term) notFound();

  const relatedTerms = getRelatedGlossaryTerms(term.slug);
  const moreSiloTerms = getGlossaryBySilo(term.silo)
    .filter((g) => g.slug !== term.slug && !relatedTerms.find((r) => r.slug === g.slug))
    .slice(0, 3);

  const { calculators, blogs, faqs, comparisons } = getRelatedLinks({
    silo: term.silo,
    currentSlug: term.slug,
    currentType: "glossary",
    count: 4,
  });

  const allRelatedGlossary = [...relatedTerms, ...moreSiloTerms].map((g) => ({
    href: `/glossary/${g.slug}`,
    title: `${g.term} — ${g.category}`,
    description: g.shortDefinition,
    type: "glossary" as const,
  }));

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Glossary", href: "/glossary" },
    { name: term.term, href: `/glossary/${term.slug}` },
  ];

  const definitionSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.fullDefinition,
    url: `${SITE_URL}/glossary/${term.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "GSTCalc.in Financial Glossary",
      url: `${SITE_URL}/glossary`,
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${term.term} — Meaning & Definition`,
    description: term.shortDefinition,
    url: `${SITE_URL}/glossary/${term.slug}`,
  };

  return (
    <>
      <JsonLd data={[definitionSchema, webPageSchema, createBreadcrumbJsonLd(breadcrumbs)]} />
      <ContentPageLayout
        breadcrumbs={breadcrumbs}
        badge={`${term.category} Glossary`}
        title={`${term.term} — Meaning & Definition`}
        description={term.shortDefinition}
        relatedCalculators={calculators}
        relatedBlogs={blogs}
        relatedFAQs={faqs}
        relatedGlossary={allRelatedGlossary}
        relatedComparisons={comparisons}
      >
        {/* Full Definition */}
        <div className="bg-gray-50 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Definition</h2>
          <p className="text-gray-700 leading-relaxed">{term.fullDefinition}</p>
        </div>

        {/* Example */}
        {term.example && (
          <div className="border-l-4 border-blue-400 pl-4 py-2 mb-6">
            <h2 className="text-sm font-bold text-gray-700 mb-1 uppercase tracking-wider">Example</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{term.example}</p>
          </div>
        )}

        {/* Related Terms inline */}
        {relatedTerms.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Related Terms</h2>
            <div className="flex flex-wrap gap-2">
              {relatedTerms.map((rt) => (
                <a
                  key={rt.slug}
                  href={`/glossary/${rt.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors"
                >
                  {rt.term}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* FAQ about the term */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border border-gray-200 rounded-lg p-4" open>
              <summary className="font-semibold text-gray-900 cursor-pointer">
                What is {term.term}?
              </summary>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{term.fullDefinition}</p>
            </details>
            <details className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                What does {term.term} mean in India?
              </summary>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                In the Indian {term.category} context, {term.term} refers to: {term.shortDefinition}
              </p>
            </details>
            {term.example && (
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Can you give an example of {term.term}?
                </summary>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{term.example}</p>
              </details>
            )}
          </div>
        </div>
      </ContentPageLayout>
    </>
  );
}
