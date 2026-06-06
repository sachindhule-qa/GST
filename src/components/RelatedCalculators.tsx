import Link from "next/link";
import { getRelatedCalculators } from "@/lib/constants";
import { CalculatorIcon } from "./icons/CalculatorIcons";

type RelatedCalculatorsProps = {
  currentSlug: string;
};

export default function RelatedCalculators({ currentSlug }: RelatedCalculatorsProps) {
  const related = getRelatedCalculators(currentSlug, 3);

  return (
    <section className="py-12" aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-2xl font-bold text-gray-900 mb-6">
        Related Calculators
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((calc) => (
          <Link
            key={calc.slug}
            href={`/${calc.slug}`}
            className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all group"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <CalculatorIcon name={calc.icon} className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {calc.name}
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">{calc.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
