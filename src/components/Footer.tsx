import Link from "next/link";
import { CALCULATORS, SITE_NAME, SITE_URL } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";

const CONTENT_LINKS = [
  { href: "/blog", label: "Blog & Articles" },
  { href: "/faq", label: "FAQ Library" },
  { href: "/glossary", label: "Finance Glossary" },
  { href: "/compare", label: "Comparisons" },
];

const POPULAR_GLOSSARY = [
  { slug: "cgst", term: "CGST" },
  { slug: "sgst", term: "SGST" },
  { slug: "igst", term: "IGST" },
  { slug: "input-tax-credit", term: "Input Tax Credit" },
  { slug: "gstin", term: "GSTIN" },
  { slug: "tds", term: "TDS" },
  { slug: "emi", term: "EMI" },
  { slug: "sip", term: "SIP" },
];

const POPULAR_COMPARISONS = [
  { slug: "cgst-vs-sgst", label: "CGST vs SGST" },
  { slug: "gst-vs-vat", label: "GST vs VAT" },
  { slug: "fd-vs-sip", label: "FD vs SIP" },
  { slug: "old-vs-new-tax-regime", label: "Old vs New Tax Regime" },
  { slug: "rd-vs-fd", label: "RD vs FD" },
];

export default function Footer() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: "India's free GST, tax, and finance calculator platform with 15+ calculators, expert articles, and comprehensive tax guidance.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: SITE_URL,
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <JsonLd data={[organizationSchema, webSiteSchema]} />
      <footer className="bg-gray-900 text-gray-300 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="text-white font-bold text-lg flex items-center gap-2 mb-3">
                <span className="bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">₹</span>
                {SITE_NAME}
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed">
                Free GST, tax, and finance calculators for Indian businesses and individuals. Accurate, fast, no signup required.
              </p>
            </div>

            {/* Calculators */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Calculators</h3>
              <ul className="space-y-2">
                {CALCULATORS.slice(0, 8).map((calc) => (
                  <li key={calc.slug}>
                    <Link href={`/${calc.slug}`} className="text-xs text-gray-400 hover:text-white transition-colors">
                      {calc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Resources</h3>
              <ul className="space-y-2 mb-4">
                {CONTENT_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider mt-4">Compare</h3>
              <ul className="space-y-2">
                {POPULAR_COMPARISONS.slice(0, 4).map((c) => (
                  <li key={c.slug}>
                    <Link href={`/compare/${c.slug}`} className="text-xs text-gray-400 hover:text-white transition-colors">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Glossary */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Glossary</h3>
              <ul className="space-y-2">
                {POPULAR_GLOSSARY.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/glossary/${g.slug}`} className="text-xs text-gray-400 hover:text-white transition-colors">
                      {g.term} Meaning
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} {SITE_NAME}. For reference only — verify with a CA for tax filing.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sitemap.xml" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
