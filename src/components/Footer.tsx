import Link from "next/link";
import { CALCULATORS, LAST_UPDATED, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{SITE_NAME}</h3>
            <p className="text-sm leading-relaxed">
              Free online GST, TDS, and income tax calculators for India. Fast, accurate, and mobile-friendly tools for businesses and individuals.
            </p>
            <p className="text-sm mt-4 text-gray-400">Last updated: {LAST_UPDATED}</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">GST Calculators</h3>
            <ul className="space-y-2 text-sm">
              {CALCULATORS.slice(0, 8).map((calc) => (
                <li key={calc.slug}>
                  <Link href={`/${calc.slug}`} className="hover:text-white transition-colors">
                    {calc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">More Tools</h3>
            <ul className="space-y-2 text-sm">
              {CALCULATORS.slice(8).map((calculator) => (
                <li key={calculator.slug}>
                  <Link href={`/${calculator.slug}`} className="hover:text-white transition-colors">
                    {calculator.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 text-center">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: All calculators are for informational purposes only. Consult a qualified CA or tax professional for official advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
