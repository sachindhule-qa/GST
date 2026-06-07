import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getComparisonBySlug,
  getAllComparisonSlugs,
  getRelatedComparisons,
} from "@/data/comparisons";
import { createMetadata, createBreadcrumbJsonLd, createFAQJsonLd } from "@/lib/seo";
import { getRelatedLinks } from "@/lib/internal-links";
import ContentPageLayout from "@/components/ContentPageLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const comp = getComparisonBySlug(params.slug);
  if (!comp) return {};
  return createMetadata({
    title: comp.title,
    description: comp.description,
    keywords: comp.keywords,
    slug: `compare/${comp.slug}`,
  });
}

export default function CompareDetailPage({ params }: Props) {
  const comp = getComparisonBySlug(params.slug);
  if (!comp) notFound();

  const relatedComparisons = getRelatedComparisons(comp.slug, 4);
  const { calculators, blogs, faqs, glossary } = getRelatedLinks({
    silo: comp.silo,
    currentSlug: comp.slug,
    currentType: "comparison",
    count: 4,
  });

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Compare", href: "/compare" },
    { name: comp.title, href: `/compare/${comp.slug}` },
  ];

  const comparisonFAQs = [
    {
      question: `What is the difference between ${comp.termA} and ${comp.termB}?`,
      answer: comp.summary,
    },
    {
      question: `Which is better — ${comp.termA} or ${comp.termB}?`,
      answer: comp.verdict,
    },
    {
      question: `When should I use ${comp.termA} instead of ${comp.termB}?`,
      answer: comp.table.map((r) => `${r.attribute}: ${comp.termA} — ${r.a}`).join(". "),
    },
  ];

  const schemas = [
    createBreadcrumbJsonLd(breadcrumbs),
    createFAQJsonLd(comparisonFAQs),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: comp.title,
      description: comp.description,
      url: `${SITE_URL}/compare/${comp.slug}`,
    },
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <ContentPageLayout
        breadcrumbs={breadcrumbs}
        badge="Comparison"
        title={comp.title}
        description={comp.description}
        relatedCalculators={calculators}
        relatedBlogs={blogs}
        relatedFAQs={faqs}
        relatedGlossary={glossary}
        relatedComparisons={relatedComparisons.map((c) => ({
          href: `/compare/${c.slug}`,
          title: c.title,
          description: `${c.termA} vs ${c.termB}`,
          type: "comparison" as const,
        }))}
      >
        {/* Summary */}
        <p className="text-gray-700 leading-relaxed mb-8">{comp.summary}</p>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-semibold text-gray-600 border-b border-gray-200 w-1/3">
                  Feature
                </th>
                <th className="text-left p-3 font-semibold text-blue-700 border-b border-gray-200 w-1/3">
                  {comp.termA}
                </th>
                <th className="text-left p-3 font-semibold text-purple-700 border-b border-gray-200 w-1/3">
                  {comp.termB}
                </th>
              </tr>
            </thead>
            <tbody>
              {comp.table.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium text-gray-700 border-b border-gray-100">
                    {row.attribute}
                  </td>
                  <td className="p-3 text-gray-600 border-b border-gray-100">{row.a}</td>
                  <td className="p-3 text-gray-600 border-b border-gray-100">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Verdict */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-2">⚖️ Verdict</h2>
          <p className="text-gray-700 leading-relaxed">{comp.verdict}</p>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {comparisonFAQs.map((qa, i) => (
              <details key={i} className="border border-gray-200 rounded-lg p-4" open={i === 0}>
                <summary className="font-semibold text-gray-900 cursor-pointer">{qa.question}</summary>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{qa.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </ContentPageLayout>
    </>
  );
}
