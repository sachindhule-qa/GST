import { Metadata } from "next";
import Link from "next/link";
import { NEW_CALCULATORS } from "@/lib/all-calculators";
import { CALCULATORS } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "100+ Free Online Calculators India 2025 — GST, Tax, EMI, SIP & More",
  description:
    "India's largest collection of free financial calculators. GST, income tax, EMI, SIP, FD, PPF, NPS, salary, HRA, TDS, retirement and 100+ more calculators.",
  keywords: "free calculators India, GST calculator, EMI calculator, SIP calculator, income tax calculator, FD calculator India",
  slug: "calculators",
});

const CATEGORY_META: Record<string, { label: string; color: string; icon: string }> = {
  gst:        { label: "GST",        color: "bg-blue-100 text-blue-700 border-blue-200",        icon: "🧾" },
  tax:        { label: "Tax",        color: "bg-purple-100 text-purple-700 border-purple-200",   icon: "💰" },
  payroll:    { label: "Payroll",    color: "bg-indigo-100 text-indigo-700 border-indigo-200",   icon: "💼" },
  finance:    { label: "Finance",    color: "bg-green-100 text-green-700 border-green-200",      icon: "📊" },
  investment: { label: "Investment", color: "bg-yellow-100 text-yellow-700 border-yellow-200",   icon: "📈" },
  loan:       { label: "Loan",       color: "bg-red-100 text-red-700 border-red-200",            icon: "🏠" },
  business:   { label: "Business",   color: "bg-orange-100 text-orange-700 border-orange-200",   icon: "🏢" },
  banking:    { label: "Banking",    color: "bg-teal-100 text-teal-700 border-teal-200",         icon: "🏦" },
};

// Group new calculators by category
const groupedNew = NEW_CALCULATORS.reduce<Record<string, typeof NEW_CALCULATORS>>((acc, c) => {
  if (!acc[c.category]) acc[c.category] = [];
  acc[c.category].push(c);
  return acc;
}, {});

const categoryOrder = ["loan", "investment", "tax", "payroll", "business", "banking", "finance", "gst"];

export default function CalculatorsIndexPage() {
  const totalCount = CALCULATORS.length + NEW_CALCULATORS.length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Calculators", href: "/calculators" }]} />

      {/* Header */}
      <div className="mt-6 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {totalCount}+ Free Financial Calculators
        </h1>
        <p className="text-gray-600 text-lg">
          India's most comprehensive collection of free online calculators for GST, income tax, EMI, SIP, FD, salary, retirement, and business finance.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mt-4">
          {Object.entries(CATEGORY_META).map(([key, meta]) => (
            <a
              key={key}
              href={`#cat-${key}`}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${meta.color}`}
            >
              {meta.icon} {meta.label}
            </a>
          ))}
        </div>
      </div>

      {/* Existing Calculators (GST, Tax, Payroll) */}
      <section id="cat-gst" className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
          🧾 GST & Tax Calculators
          <span className="text-sm font-normal text-gray-400">({CALCULATORS.length} calculators)</span>
        </h2>
        <p className="text-sm text-gray-500 mb-4">Calculate CGST, SGST, IGST, TDS, HRA, professional tax and more</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CALCULATORS.map((calc) => (
            <Link
              key={calc.slug}
              href={`/${calc.slug}`}
              className="group flex items-start gap-3 p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all"
            >
              <span className="text-xl shrink-0">🧾</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {calc.name}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{calc.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Calculators by Category */}
      {categoryOrder.map((cat) => {
        const calcs = groupedNew[cat];
        if (!calcs || calcs.length === 0) return null;
        const meta = CATEGORY_META[cat] || { label: cat, color: "bg-gray-100 text-gray-700 border-gray-200", icon: "🔢" };

        return (
          <section key={cat} id={`cat-${cat}`} className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
              {meta.icon} {meta.label} Calculators
              <span className="text-sm font-normal text-gray-400">({calcs.length} calculators)</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {calcs.map((calc) => (
                <Link
                  key={calc.slug}
                  href={`/calculators/${calc.slug}`}
                  className="group flex items-start gap-3 p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <span className="text-xl shrink-0">{meta.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {calc.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{calc.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
        <h2 className="text-lg font-bold text-gray-900 mb-2">All Calculators Are Free — No Signup Required</h2>
        <p className="text-gray-600 text-sm mb-4">
          Instant calculations, zero ads, no data collection. Built for Indian businesses and individuals.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/blog" className="text-sm text-blue-700 font-semibold hover:underline">Read Finance Articles →</Link>
          <Link href="/glossary" className="text-sm text-blue-700 font-semibold hover:underline">Finance Glossary →</Link>
          <Link href="/compare" className="text-sm text-blue-700 font-semibold hover:underline">Compare Options →</Link>
        </div>
      </div>
    </div>
  );
}
