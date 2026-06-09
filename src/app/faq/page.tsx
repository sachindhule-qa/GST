import { Metadata } from "next";
import Link from "next/link";
import { FAQ_PAGES } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "GST & Tax FAQ Pages — India's Most Comprehensive Q&A Library",
  description:
    "Browse 200+ answered questions about GST registration, returns, ITC, income tax, TDS, home loans, salary, and more. Expert answers for Indian businesses.",
  keywords: "GST FAQ India, tax questions answered, GST return FAQ, income tax questions",
  slug: "faq",
});

const CATEGORY_ICONS: Record<string, string> = {
  "GST Registration": "📋",
  "GST Returns": "📁",
  "GST ITC": "🔄",
  "Income Tax": "💰",
  TDS: "📊",
  Loans: "🏠",
  Salary: "💼",
  Investment: "📈",
};

export default function FAQIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">GST & Tax FAQ Library</h1>
        <p className="text-gray-600 text-lg">
          Comprehensive answers to your most pressing GST, income tax, loan, and finance questions — written for Indian businesses and individuals.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FAQ_PAGES.map((faq) => (
          <Link
            key={faq.slug}
            href={`/faq/${faq.slug}`}
            className="group border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <div className="text-2xl mb-3">{CATEGORY_ICONS[faq.category] || "❓"}</div>
            <h2 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors">
              {faq.title}
            </h2>
            <p className="text-xs text-gray-500 mb-3 line-clamp-2">{faq.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {faq.questions.length} questions
              </span>
              <span className="text-xs text-blue-600 font-medium">Read FAQs →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
