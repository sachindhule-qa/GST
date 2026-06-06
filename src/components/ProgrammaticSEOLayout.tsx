import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { LAST_UPDATED } from "@/lib/constants";
import {
  BreadcrumbItem,
  FAQItem,
  createBreadcrumbJsonLd,
  createFAQJsonLd,
  createWebAppJsonLd,
} from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import { RelatedLink } from "@/lib/programmatic-seo";

type Example = {
  label: string;
  calculation: string;
  result: string;
};

type ProgrammaticSEOLayoutProps = {
  path: string;
  h1: string;
  intro: string;
  calculator: React.ReactNode;
  faqs: FAQItem[];
  examples: Example[];
  breadcrumbs: BreadcrumbItem[];
  relatedLinks: RelatedLink[];
  relatedTitle?: string;
};

export default function ProgrammaticSEOLayout({
  path,
  h1,
  intro,
  calculator,
  faqs,
  examples,
  breadcrumbs,
  relatedLinks,
  relatedTitle = "Related GST Calculators",
}: ProgrammaticSEOLayoutProps) {
  const pageUrl = `${SITE_URL}/${path}`;

  return (
    <>
      <JsonLd
        data={[
          createWebAppJsonLd(h1, intro, pageUrl),
          createFAQJsonLd(faqs),
          createBreadcrumbJsonLd(breadcrumbs),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb items={breadcrumbs} />

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{h1}</h1>
          <p className="text-lg text-gray-600 max-w-3xl">{intro}</p>
          <p className="text-sm text-gray-400 mt-2">Last updated: {LAST_UPDATED}</p>
        </header>

        {calculator}

        <section className="py-10" aria-labelledby="examples-heading">
          <h2 id="examples-heading" className="text-2xl font-bold text-gray-900 mb-6">
            Example Calculations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {examples.map((ex, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{ex.label}</h3>
                <p className="text-sm text-gray-600 mb-2">{ex.calculation}</p>
                <p className="text-primary font-semibold text-sm">{ex.result}</p>
              </div>
            ))}
          </div>
        </section>

        <FAQAccordion faqs={faqs} />

        <section className="py-10" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-bold text-gray-900 mb-6">
            {relatedTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
