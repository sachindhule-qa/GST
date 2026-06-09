import { Metadata } from "next";
import Link from "next/link";
import { GLOSSARY } from "@/data/glossary";
import { createMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "GST & Finance Glossary — Definitions of Key Terms India 2025",
  description:
    "Comprehensive glossary of GST, tax, finance, and investment terms. Plain-English definitions of CGST, SGST, IGST, ITC, TDS, EMI, NAV, CIBIL, and 100+ more terms.",
  keywords: "GST glossary, financial terms India, CGST meaning, SGST definition, ITC meaning",
  slug: "glossary",
});

// Group by first letter
function groupByFirstLetter(items: typeof GLOSSARY) {
  const groups: Record<string, typeof GLOSSARY> = {};
  items.forEach((item) => {
    const letter = item.term[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(item);
  });
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
}

const CATEGORY_COLORS: Record<string, string> = {
  GST: "bg-blue-100 text-blue-700",
  "Income Tax": "bg-purple-100 text-purple-700",
  Finance: "bg-green-100 text-green-700",
  Banking: "bg-orange-100 text-orange-700",
  Salary: "bg-indigo-100 text-indigo-700",
};

export default function GlossaryIndexPage() {
  const groups = groupByFirstLetter(GLOSSARY);
  const letters = groups.map(([l]) => l);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Glossary", href: "/glossary" }]} />

      <div className="mt-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">GST & Finance Glossary</h1>
        <p className="text-gray-600 text-lg">
          Plain-English definitions of {GLOSSARY.length}+ key terms in GST, taxation, finance, and investment.
        </p>
      </div>

      {/* Letter Nav */}
      <div className="flex flex-wrap gap-1.5 mb-8 p-3 bg-gray-50 rounded-xl">
        {letters.map((l) => (
          <a
            key={l}
            href={`#letter-${l}`}
            className="w-8 h-8 flex items-center justify-center text-sm font-bold text-blue-600 hover:bg-blue-100 rounded transition-colors"
          >
            {l}
          </a>
        ))}
      </div>

      {/* Terms by Letter */}
      <div className="space-y-10">
        {groups.map(([letter, terms]) => (
          <div key={letter} id={`letter-${letter}`}>
            <h2 className="text-2xl font-black text-gray-300 mb-4 border-b border-gray-100 pb-2">
              {letter}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {terms.map((term) => (
                <Link
                  key={term.slug}
                  href={`/glossary/${term.slug}`}
                  className="group flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                        {term.term}
                      </h3>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${CATEGORY_COLORS[term.category] || "bg-gray-100 text-gray-600"}`}>
                        {term.category}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-2">{term.shortDefinition}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
