import { notFound } from "next/navigation";
import { Metadata } from "next";
import { NEW_CALCULATORS, getNewCalculatorBySlug, getAllNewCalculatorSlugs } from "@/lib/all-calculators";
import { createMetadata, createFAQJsonLd, createBreadcrumbJsonLd } from "@/lib/seo";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import UniversalCalculatorWidget from "@/components/UniversalCalculatorWidget";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllNewCalculatorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const calc = getNewCalculatorBySlug(params.slug);
  if (!calc) return {};
  return createMetadata({
    title: `${calc.h1} — Free Online Calculator`,
    description: `${calc.intro.slice(0, 155)}`,
    keywords: `${calc.name} India, ${calc.name} online, free ${calc.name.toLowerCase()}, ${calc.slug.replace(/-/g, " ")} 2025`,
    slug: `calculators/${calc.slug}`,
  });
}

const CATEGORY_LABEL: Record<string, string> = {
  gst: "GST",
  tax: "Tax",
  payroll: "Payroll",
  finance: "Finance",
  investment: "Investment",
  loan: "Loans",
  business: "Business",
  banking: "Banking",
};

const RELATED_BY_CATEGORY: Record<string, string[]> = {
  loan: ["emi-calculator", "home-loan-calculator", "personal-loan-calculator", "car-loan-calculator"],
  investment: ["sip-calculator", "ppf-calculator", "nps-calculator", "elss-calculator", "lumpsum-calculator", "step-up-sip-calculator"],
  banking: ["fd-calculator", "rd-calculator", "compound-interest-calculator"],
  payroll: ["salary-calculator", "epf-calculator", "gratuity-calculator-2025"],
  business: ["roi-calculator", "margin-calculator", "break-even-calculator", "gst-profit-calculator"],
  tax: ["income-tax-calculator"],
  finance: ["inflation-calculator", "retirement-calculator", "compound-interest-calculator"],
};

export default function NewCalculatorPage({ params }: Props) {
  const calc = getNewCalculatorBySlug(params.slug);
  if (!calc) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: CATEGORY_LABEL[calc.category] || "Calculators", href: "/" },
    { name: calc.name, href: `/calculators/${calc.slug}` },
  ];

  const related = (RELATED_BY_CATEGORY[calc.category] || [])
    .filter((s) => s !== calc.slug)
    .slice(0, 4)
    .map((s) => NEW_CALCULATORS.find((c) => c.slug === s))
    .filter(Boolean) as typeof NEW_CALCULATORS;

  const faqSchema = createFAQJsonLd(calc.faqs);
  const breadcrumbSchema = createBreadcrumbJsonLd(breadcrumbs);
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: calc.h1,
    description: calc.intro,
    url: `${SITE_URL}/calculators/${calc.slug}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema, calculatorSchema]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb items={breadcrumbs} />

        <div className="mt-6 lg:grid lg:grid-cols-[1fr_360px] lg:gap-10">
          {/* Left — Content */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded mb-3">
              {CATEGORY_LABEL[calc.category]} Calculator
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">{calc.h1}</h1>
            <p className="text-gray-600 text-base leading-relaxed mb-8">{calc.intro}</p>

            {/* Mobile Widget */}
            <div className="lg:hidden mb-8">
              <UniversalCalculatorWidget calculator={calc} />
            </div>

            {/* How It Works */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">How It Works</h2>
              <p className="text-gray-600 leading-relaxed">{calc.howItWorks}</p>
            </div>

            {/* Formula */}
            <div className="bg-gray-50 rounded-xl p-4 mb-8">
              <h2 className="text-base font-bold text-gray-900 mb-2">Formula</h2>
              <code className="text-sm text-blue-700 font-mono">{calc.formula}</code>
            </div>

            {/* Examples */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Calculation Examples</h2>
              <div className="space-y-3">
                {calc.examples.map((ex, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">{ex.label}</p>
                    <p className="text-sm text-green-700 font-medium bg-green-50 rounded-lg px-3 py-2">{ex.result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-0 divide-y divide-gray-100">
                {calc.faqs.map((faq, i) => (
                  <details key={i} className="py-4 group" open={i === 0}>
                    <summary className="flex justify-between items-start cursor-pointer list-none">
                      <h3 className="text-sm font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <span className="text-gray-400 shrink-0 group-open:rotate-180 transition-transform mt-0.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Related Blogs */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {calc.blogSlugs.map((slug) => (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    className="block border border-gray-100 rounded-xl p-3 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                  >
                    <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">Article</span>
                    <p className="text-sm font-medium text-gray-800 mt-2 group-hover:text-blue-700 leading-snug">
                      {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Calculators */}
            {related.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Related Calculators</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/calculators/${r.slug}`}
                      className="block border border-gray-100 rounded-xl p-3 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                    >
                      <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-medium">Calculator</span>
                      <p className="text-sm font-medium text-gray-800 mt-2 group-hover:text-blue-700">{r.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{r.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right — Sticky Widget (Desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-6">
              <UniversalCalculatorWidget calculator={calc} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
