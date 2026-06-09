import Breadcrumb from "./Breadcrumb";
import FAQSection from "./FAQSection";
import RelatedCalculators from "./RelatedCalculators";
import JsonLd from "./JsonLd";
import { LAST_UPDATED } from "@/lib/constants";
import {
  BreadcrumbItem,
  FAQItem,
  createBreadcrumbJsonLd,
  createFAQJsonLd,
  createWebAppJsonLd,
} from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";

type Step = { title: string; description: string; icon: string };

type Example = { label: string; calculation: string; result: string };

type CalculatorPageLayoutProps = {
  slug: string;
  h1: string;
  description: string;
  calculator: React.ReactNode;
  steps: Step[];
  formula: { title: string; content: string };
  examples: Example[];
  faqs: FAQItem[];
  breadcrumbs: BreadcrumbItem[];
};

function StepIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    input: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    calculate: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185a48.507 48.507 0 00-11.186 0C15.758 2.11 13.892 2.25 12 2.25z" />
      </svg>
    ),
    result: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };
  return <>{icons[icon] || icons.input}</>;
}

export default function CalculatorPageLayout({
  slug,
  h1,
  description,
  calculator,
  steps,
  formula,
  examples,
  faqs,
  breadcrumbs,
}: CalculatorPageLayoutProps) {
  const pageUrl = `${SITE_URL}/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          createWebAppJsonLd(h1, description, pageUrl),
          createFAQJsonLd(faqs),
          createBreadcrumbJsonLd(breadcrumbs),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb items={breadcrumbs} />

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{h1}</h1>
          <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
          <p className="text-sm text-gray-400 mt-2">Last updated: {LAST_UPDATED}</p>
        </div>

        {calculator}

        <section className="py-12" aria-labelledby="how-it-works">
          <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-primary mb-4">
                  <StepIcon icon={step.icon} />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  Step {i + 1}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8" aria-labelledby="formula">
          <h2 id="formula" className="text-2xl font-bold text-gray-900 mb-4">
            {formula.title}
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 font-mono text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
            {formula.content}
          </div>
        </section>

        <section className="py-8" aria-labelledby="examples">
          <h2 id="examples" className="text-2xl font-bold text-gray-900 mb-6">
            Example Calculations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {examples.map((ex, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{ex.label}</h3>
                <p className="text-sm text-gray-600 mb-2">{ex.calculation}</p>
                <p className="text-primary font-semibold">{ex.result}</p>
              </div>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} />
        <RelatedCalculators currentSlug={slug} />
      </div>
    </>
  );
}
// The above is the original — the CalculatorContentLinks component below is a companion
