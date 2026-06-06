import Link from "next/link";
import { CALCULATORS } from "@/lib/constants";
import { CalculatorIcon } from "./icons/CalculatorIcons";

export default function CalculatorGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {CALCULATORS.map((calc) => (
        <Link
          key={calc.slug}
          href={`/${calc.slug}`}
          className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all group"
        >
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <CalculatorIcon name={calc.icon} className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {calc.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{calc.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
