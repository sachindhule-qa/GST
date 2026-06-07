import { Metadata } from "next";
import Link from "next/link";
import { COMPARISONS } from "@/data/comparisons";
import { createMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "GST & Finance Comparisons — Side-by-Side Analysis India 2025",
  description:
    "Detailed comparisons of GST types, tax regimes, investment options, and loan products. CGST vs SGST, FD vs SIP, Old vs New Tax Regime, and more.",
  keywords: "CGST vs SGST, FD vs SIP, old vs new tax regime, GST vs VAT, RD vs FD comparison",
  slug: "compare",
});

const SILO_LABELS: Record<string, string> = {
  gst: "GST",
  tax: "Income Tax",
  finance: "Finance",
  investment: "Investment",
  banking: "Banking",
  loans: "Loans",
};

const SILO_COLORS: Record<string, string> = {
  gst: "bg-blue-100 text-blue-700",
  tax: "bg-purple-100 text-purple-700",
  finance: "bg-green-100 text-green-700",
  investment: "bg-yellow-100 text-yellow-700",
  banking: "bg-orange-100 text-orange-700",
  loans: "bg-red-100 text-red-700",
};

export default function CompareIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Compare", href: "/compare" }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">GST & Finance Comparisons</h1>
        <p className="text-gray-600 text-lg">
          Side-by-side comparisons of GST components, tax regimes, investments, and financial products — helping you make informed decisions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {COMPARISONS.map((comp) => (
          <Link
            key={comp.slug}
            href={`/compare/${comp.slug}`}
            className="group border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${SILO_COLORS[comp.silo] || "bg-gray-100 text-gray-600"}`}>
                {SILO_LABELS[comp.silo] || comp.silo}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-bold text-gray-800 bg-gray-100 px-2 py-1 rounded">{comp.termA}</span>
              <span className="text-gray-400 font-bold">vs</span>
              <span className="text-sm font-bold text-gray-800 bg-gray-100 px-2 py-1 rounded">{comp.termB}</span>
            </div>
            <h2 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors">
              {comp.title}
            </h2>
            <p className="text-xs text-gray-500 line-clamp-2">{comp.description}</p>
            <div className="mt-3 text-xs text-blue-600 font-medium flex items-center gap-1">
              See full comparison →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
