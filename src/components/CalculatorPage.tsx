import CalculatorPageLayout from "./CalculatorPageLayout";
import CalculatorContentLinks from "./CalculatorContentLinks";
import GSTWidget from "./GSTWidget";
import ReverseGSTWidget from "./ReverseGSTWidget";
import TDSWidget from "./TDSWidget";
import IncomeTaxWidget from "./IncomeTaxWidget";
import HRAWidget from "./HRAWidget";
import PFWidget from "./PFWidget";
import GratuityWidget from "./GratuityWidget";
import ProfessionalTaxWidget from "./ProfessionalTaxWidget";
import GSTOnRentWidget from "./GSTOnRentWidget";
import HSNCodeFinder from "./HSNCodeFinder";
import InvoiceNumberGenerator from "./InvoiceNumberGenerator";
import { getCalculatorPageData } from "@/lib/calculator-pages";
import { getCalculator } from "@/lib/constants";
import { notFound } from "next/navigation";

const WIDGET_MAP: Record<string, React.ReactNode> = {
  "gst-calculator": <GSTWidget />,
  "reverse-gst-calculator": <ReverseGSTWidget />,
  "gst-calculator-18-percent": <GSTWidget defaultRate={18} lockRate />,
  "gst-calculator-12-percent": <GSTWidget defaultRate={12} lockRate />,
  "gst-calculator-5-percent": <GSTWidget defaultRate={5} lockRate />,
  "gst-calculator-28-percent": <GSTWidget defaultRate={28} lockRate />,
  "tds-calculator": <TDSWidget />,
  "income-tax-calculator-2024-25": <IncomeTaxWidget />,
  "hra-calculator": <HRAWidget />,
  "pf-calculator": <PFWidget />,
  "gratuity-calculator": <GratuityWidget />,
  "professional-tax-calculator": <ProfessionalTaxWidget />,
  "gst-on-rent-calculator": <GSTOnRentWidget />,
  "hsn-code-finder": <HSNCodeFinder />,
  "gst-invoice-number-generator": <InvoiceNumberGenerator />,
};

type CalculatorPageProps = {
  slug: string;
};

export default function CalculatorPage({ slug }: CalculatorPageProps) {
  const data = getCalculatorPageData(slug);
  const calc = getCalculator(slug);

  if (!data || !calc) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: calc.name, href: `/${slug}` },
  ];

  return (
    <>
      <CalculatorPageLayout
        slug={slug}
        h1={data.h1}
        description={data.intro}
        calculator={WIDGET_MAP[slug]}
        steps={data.steps}
        formula={data.formula}
        examples={data.examples}
        faqs={data.faqs}
        breadcrumbs={breadcrumbs}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <CalculatorContentLinks calculatorSlug={slug} />
      </div>
    </>
  );
}
