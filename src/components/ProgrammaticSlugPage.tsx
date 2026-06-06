import { notFound } from "next/navigation";
import GSTCalculatorWidget from "@/components/GSTCalculatorWidget";
import ProgrammaticSEOLayout from "@/components/ProgrammaticSEOLayout";
import { formatCurrency } from "@/lib/calculators";
import {
  buildExampleCalculation,
  generateAmountRateFAQs,
  generateBusinessFAQs,
  generateProductFAQs,
  generateRateFAQs,
  generateStateFAQs,
  getRelatedAmountRatePages,
  getRelatedBusinessPages,
  getRelatedProductPages,
  getRelatedRatePages,
  getRelatedStatePages,
} from "@/lib/programmatic-seo";
import { parseProgrammaticSlug } from "@/lib/parse-programmatic-slug";

type ProgrammaticSlugPageProps = {
  slug: string;
};

export default function ProgrammaticSlugPage({ slug }: ProgrammaticSlugPageProps) {
  const parsed = parseProgrammaticSlug(slug);
  if (!parsed) notFound();

  if (parsed.type === "product" && parsed.product) {
    const product = parsed.product;
    const h1 = `GST on ${product.name} — ${product.rate}% Rate (HSN ${product.hsn})`;
    const intro = `Calculate GST on ${product.name} at ${product.rate}% in India. HSN/SAC code ${product.hsn}. ${product.description}. Use our free calculator for instant CGST, SGST, and IGST breakdown.`;
    return (
      <ProgrammaticSEOLayout
        path={slug}
        h1={h1}
        intro={intro}
        calculator={<GSTCalculatorWidget defaultRate={product.rate} lockRate defaultAmount={10000} />}
        faqs={generateProductFAQs(product)}
        examples={[10000, 25000, 50000].map((a) => buildExampleCalculation(a, product.rate)).map((ex) => ({
          label: ex.label,
          calculation: ex.calculation,
          result: ex.result,
        }))}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "GST by Product", href: "/gst-calculator" },
          { name: `GST on ${product.name}`, href: `/${slug}` },
        ]}
        relatedLinks={getRelatedProductPages(product.slug)}
        relatedTitle="More Product GST Calculators"
      />
    );
  }

  if (parsed.type === "rate" && parsed.rate) {
    const rate = parsed.rate;
    const h1 = `GST Calculator ${rate.label} India 2024-25`;
    const intro = `Calculate ${rate.label} GST instantly with CGST (${rate.value / 2}%) and SGST (${rate.value / 2}%) breakdown. Free online ${rate.label} GST calculator for exclusive and inclusive amounts.`;
    return (
      <ProgrammaticSEOLayout
        path={slug}
        h1={h1}
        intro={intro}
        calculator={<GSTCalculatorWidget defaultRate={rate.value} lockRate defaultAmount={10000} />}
        faqs={generateRateFAQs(rate)}
        examples={[1000, 10000, 100000].map((a) => buildExampleCalculation(a, rate.value)).map((ex) => ({
          label: ex.label,
          calculation: ex.calculation,
          result: ex.result,
        }))}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "GST Rates", href: "/gst-calculator" },
          { name: `${rate.label} GST`, href: `/${slug}` },
        ]}
        relatedLinks={getRelatedRatePages(rate.slug)}
        relatedTitle="Other GST Rate Calculators"
      />
    );
  }

  if (parsed.type === "amount-rate" && parsed.amount && parsed.rate) {
    const { amount, rate } = parsed;
    const ex = buildExampleCalculation(amount.value, rate.value);
    const halfRate = rate.value / 2;
    const h1 = `GST on ${amount.label} at ${rate.label} India`;
    const intro = `Calculate GST on ${amount.label} at ${rate.label}. GST amount is ${formatCurrency(ex.gst)}, total inclusive price is ${formatCurrency(ex.total)}. CGST ${formatCurrency(ex.cgst)} + SGST ${formatCurrency(ex.sgst)}.`;
    return (
      <ProgrammaticSEOLayout
        path={slug}
        h1={h1}
        intro={intro}
        calculator={<GSTCalculatorWidget defaultAmount={amount.value} defaultRate={rate.value} lockRate />}
        faqs={generateAmountRateFAQs(amount, rate)}
        examples={[
          {
            label: `${amount.label} exclusive at ${rate.label}`,
            calculation: `GST = ${amount.label} × ${rate.value}% = ${formatCurrency(ex.gst)}`,
            result: `Total: ${formatCurrency(ex.total)}`,
          },
          {
            label: "CGST & SGST split",
            calculation: `CGST ${halfRate}% + SGST ${halfRate}%`,
            result: `CGST: ${formatCurrency(ex.cgst)} | SGST: ${formatCurrency(ex.sgst)}`,
          },
          {
            label: `${amount.label} inclusive at ${rate.label}`,
            calculation: `Base = ${formatCurrency(amount.value)}`,
            result: `GST: ${formatCurrency(ex.gst)} | Total: ${formatCurrency(ex.total)}`,
          },
        ]}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: `${rate.label} GST`, href: `/gst-${rate.slug}-percent` },
          { name: `${amount.label} at ${rate.label}`, href: `/${slug}` },
        ]}
        relatedLinks={getRelatedAmountRatePages(amount.slug, rate.slug)}
        relatedTitle="Related Amount & Rate Calculations"
      />
    );
  }

  if (parsed.type === "state" && parsed.state) {
    const state = parsed.state;
    const h1 = `GST Calculator ${state.name} India 2024-25`;
    const intro = `Free GST calculator for ${state.name} (State Code: ${state.code}). Calculate CGST + SGST for intra-state transactions within ${state.name}, or IGST for inter-state supplies. ${state.type === "ut" ? "Union Territory" : "State"} GST calculator.`;
    return (
      <ProgrammaticSEOLayout
        path={slug}
        h1={h1}
        intro={intro}
        calculator={<GSTCalculatorWidget defaultAmount={10000} defaultRate={18} />}
        faqs={generateStateFAQs(state)}
        examples={[5, 12, 18].map((r) => buildExampleCalculation(10000, r)).map((ex) => ({
          label: ex.label,
          calculation: ex.calculation,
          result: ex.result,
        }))}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "GST by State", href: "/gst-calculator" },
          { name: state.name, href: `/${slug}` },
        ]}
        relatedLinks={getRelatedStatePages(state.slug)}
        relatedTitle="GST Calculators by State"
      />
    );
  }

  if (parsed.type === "business" && parsed.business) {
    const business = parsed.business;
    const h1 = `GST for ${business.name} India 2024-25`;
    const intro = `Complete GST calculator and guide for ${business.name.toLowerCase()}s in India. ${business.description}. Default GST rate: ${business.defaultRate}%. Calculate CGST, SGST, and IGST on your invoices instantly.`;
    return (
      <ProgrammaticSEOLayout
        path={slug}
        h1={h1}
        intro={intro}
        calculator={<GSTCalculatorWidget defaultRate={business.defaultRate} defaultAmount={10000} />}
        faqs={generateBusinessFAQs(business)}
        examples={[10000, 50000, 100000].map((a) => buildExampleCalculation(a, business.defaultRate)).map((ex) => ({
          label: ex.label,
          calculation: ex.calculation,
          result: ex.result,
        }))}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "GST by Business", href: "/gst-calculator" },
          { name: `GST for ${business.name}`, href: `/${slug}` },
        ]}
        relatedLinks={getRelatedBusinessPages(business.slug)}
        relatedTitle="GST Calculators by Business Type"
      />
    );
  }

  notFound();
}
