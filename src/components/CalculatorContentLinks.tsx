import Link from "next/link";
import { getCalculatorRelatedContent } from "@/lib/internal-links";

type Props = { calculatorSlug: string };

const TYPE_ICONS: Record<string, string> = {
  blog: "📝",
  faq: "❓",
  glossary: "📚",
  comparison: "⚖️",
};

export default function CalculatorContentLinks({ calculatorSlug }: Props) {
  const { blogs, faqs, glossary, comparisons } = getCalculatorRelatedContent(calculatorSlug);

  const sections = [
    { title: "Related Articles", items: blogs, icon: "📝" },
    { title: "FAQ Pages", items: faqs, icon: "❓" },
    { title: "Key Definitions", items: glossary, icon: "📚" },
    { title: "Comparisons", items: comparisons, icon: "⚖️" },
  ].filter((s) => s.items.length > 0);

  if (sections.length === 0) return null;

  return (
    <section className="py-10 border-t border-gray-100" aria-label="Related content">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides & Resources</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sections.map((section) =>
          section.items.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block border border-gray-100 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">{TYPE_ICONS[item.type]}</span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {item.type}
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 leading-snug line-clamp-2">
                {item.title}
              </p>
              {item.description && (
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
              )}
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
