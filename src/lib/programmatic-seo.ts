import { calculateGST, formatCurrency } from "@/lib/calculators";
import { FAQItem } from "@/lib/seo";
import {
  AmountRange,
  BusinessType,
  GSTRate,
  IndianState,
  PRODUCT_CATEGORIES,
  ProductCategory,
  GST_RATES,
  AMOUNT_RANGES,
  INDIAN_STATES,
  BUSINESS_TYPES,
} from "@/data/calculators";

export type RelatedLink = {
  href: string;
  title: string;
  description: string;
};

export function buildExampleCalculation(amount: number, rate: number) {
  const result = calculateGST(amount, rate, "exclusive");
  return {
    label: `${formatCurrency(amount)} at ${rate}% GST`,
    calculation: `GST = ${formatCurrency(amount)} × ${rate}% = ${formatCurrency(result.gst)}`,
    result: `Total: ${formatCurrency(result.total)} | CGST: ${formatCurrency(result.cgst)} | SGST: ${formatCurrency(result.sgst)}`,
    amount,
    rate,
    ...result,
  };
}

export function generateProductFAQs(product: ProductCategory): FAQItem[] {
  return [
    {
      question: `What is the GST rate on ${product.name} in India?`,
      answer: `${product.name} attracts ${product.rate}% GST in India under HSN/SAC code ${product.hsn}. ${product.description}.`,
    },
    {
      question: `What is the HSN code for ${product.name}?`,
      answer: `The HSN/SAC code for ${product.name} is ${product.hsn}. This code must be mentioned on GST invoices when supplying ${product.name.toLowerCase()}.`,
    },
    {
      question: `How to calculate GST on ${product.name}?`,
      answer: `Multiply the base price by ${product.rate}% and divide by 100. For example, on ₹10,000: GST = ₹${((10000 * product.rate) / 100).toLocaleString("en-IN")}, Total = ₹${(10000 + (10000 * product.rate) / 100).toLocaleString("en-IN")}.`,
    },
    {
      question: `Is ${product.rate}% GST applicable on all ${product.name.toLowerCase()}?`,
      answer: `The standard GST rate for ${product.name} is ${product.rate}%. Certain exemptions or special rates may apply based on specific product classification — verify with the GST rate schedule.`,
    },
    {
      question: `Can I claim ITC on GST paid for ${product.name}?`,
      answer: `Registered businesses can claim Input Tax Credit (ITC) on GST paid for ${product.name} if used for business purposes and all conditions under Section 16 of CGST Act are met.`,
    },
  ];
}

export function generateRateFAQs(rate: GSTRate): FAQItem[] {
  return [
    {
      question: `How to calculate ${rate.label} GST in India?`,
      answer: `For exclusive pricing: GST = Amount × ${rate.value} / 100. For inclusive: Base = Amount × 100 / (100 + ${rate.value}). CGST and SGST are each ${rate.value / 2}% for intra-state supplies.`,
    },
    {
      question: `What items are taxed at ${rate.label} GST?`,
      answer: `${rate.label} is one of India's GST slabs. Common items at this rate include various goods and services as per the GST rate schedule notified by the CBIC.`,
    },
    {
      question: `What is CGST and SGST on ${rate.label}?`,
      answer: `For intra-state transactions, ${rate.label} GST splits equally: CGST ${rate.value / 2}% + SGST ${rate.value / 2}% = ${rate.label} total.`,
    },
    {
      question: `How much GST on ₹10,000 at ${rate.label}?`,
      answer: `GST on ₹10,000 at ${rate.label} = ₹${((10000 * rate.value) / 100).toLocaleString("en-IN")}. Total inclusive amount = ₹${(10000 + (10000 * rate.value) / 100).toLocaleString("en-IN")}.`,
    },
    {
      question: `Is ${rate.label} GST calculator free?`,
      answer: `Yes, this ${rate.label} GST calculator is completely free. Enter any amount for instant CGST, SGST, and IGST breakdown.`,
    },
  ];
}

export function generateAmountRateFAQs(amount: AmountRange, rate: GSTRate): FAQItem[] {
  const ex = buildExampleCalculation(amount.value, rate.value);
  return [
    {
      question: `What is GST on ${amount.label} at ${rate.label}?`,
      answer: `GST on ${amount.label} at ${rate.label} is ${formatCurrency(ex.gst)}. Total amount including GST is ${formatCurrency(ex.total)}.`,
    },
    {
      question: `How to calculate ${rate.label} GST on ${amount.label}?`,
      answer: `GST = ${amount.label} × ${rate.value} / 100 = ${formatCurrency(ex.gst)}. CGST = SGST = ${formatCurrency(ex.cgst)} each.`,
    },
    {
      question: `What is the total price of ${amount.label} plus ${rate.label} GST?`,
      answer: `The total inclusive price is ${formatCurrency(ex.total)} (${amount.label} base + ${formatCurrency(ex.gst)} GST).`,
    },
    {
      question: `What is CGST and SGST on ${amount.label} at ${rate.label}?`,
      answer: `CGST (${rate.value / 2}%) = ${formatCurrency(ex.cgst)} and SGST (${rate.value / 2}%) = ${formatCurrency(ex.sgst)} on ${amount.label}.`,
    },
    {
      question: `Can I use this for invoice verification?`,
      answer: `Yes, use this calculator to verify GST on ${amount.label} transactions at ${rate.label}. Always confirm with your CA for official filings.`,
    },
  ];
}

export function generateStateFAQs(state: IndianState): FAQItem[] {
  return [
    {
      question: `How does GST work in ${state.name}?`,
      answer: `In ${state.name}, intra-state supplies attract CGST + SGST (each half of the GST rate). Inter-state supplies from/to ${state.name} attract IGST collected by the central government.`,
    },
    {
      question: `What is the GST registration threshold in ${state.name}?`,
      answer: `${state.name} follows the national GST threshold: ₹40 lakh for goods (₹20 lakh for special category states) and ₹20 lakh for services. Check current notifications for updates.`,
    },
    {
      question: `How to file GST returns in ${state.name}?`,
      answer: `Businesses registered in ${state.name} (State Code: ${state.code}) file GSTR-1, GSTR-3B, and annual returns on the GST portal. State-specific professional tax may also apply.`,
    },
    {
      question: `What is CGST vs SGST in ${state.name}?`,
      answer: `For transactions within ${state.name}, GST is split between CGST (Central) and SGST (State) equally. For example, 18% GST = 9% CGST + 9% SGST.`,
    },
    {
      question: `Is this GST calculator specific to ${state.name}?`,
      answer: `This calculator works for all Indian states including ${state.name}. Select intra-state for CGST/SGST split or inter-state for IGST.`,
    },
  ];
}

export function generateBusinessFAQs(business: BusinessType): FAQItem[] {
  return [
    {
      question: `Do ${business.name.toLowerCase()}s need GST registration?`,
      answer: `${business.name}s must register for GST when annual turnover exceeds ₹40 lakh (goods) or ₹20 lakh (services). ${business.description}.`,
    },
    {
      question: `What GST rate applies to ${business.name.toLowerCase()}s?`,
      answer: `Most ${business.name.toLowerCase()} transactions attract ${business.defaultRate}% GST, though rates vary by specific goods or services supplied.`,
    },
    {
      question: `How to calculate GST for a ${business.name.toLowerCase()}?`,
      answer: `Multiply your invoice amount by the applicable GST rate. For ${business.defaultRate}%: GST = Amount × ${business.defaultRate} / 100. Add to base for total invoice value.`,
    },
    {
      question: `Can ${business.name.toLowerCase()}s claim Input Tax Credit?`,
      answer: `Yes, registered ${business.name.toLowerCase()}s can claim ITC on GST paid for business purchases, subject to conditions in the CGST Act.`,
    },
    {
      question: `What returns must a ${business.name.toLowerCase()} file?`,
      answer: `GST-registered ${business.name.toLowerCase()}s typically file GSTR-1 (outward supplies), GSTR-3B (summary return), and annual GSTR-9.`,
    },
  ];
}

export function getRelatedProductPages(currentSlug: string, count = 6): RelatedLink[] {
  const others = PRODUCT_CATEGORIES.filter((p) => p.slug !== currentSlug);
  const sameRate = others.filter(
    (p) => p.rate === getProductBySlug(currentSlug)?.rate
  );
  const rest = others.filter((p) => p.rate !== getProductBySlug(currentSlug)?.rate);
  return [...sameRate, ...rest].slice(0, count).map((p) => ({
    href: `/gst-on-${p.slug}`,
    title: `GST on ${p.name}`,
    description: `${p.rate}% GST · HSN ${p.hsn}`,
  }));
}

export function getRelatedRatePages(currentSlug: string, count = 6): RelatedLink[] {
  return GST_RATES.filter((r) => r.slug !== currentSlug)
    .slice(0, count)
    .map((r) => ({
      href: `/gst-${r.slug}-percent`,
      title: `${r.label} GST Calculator`,
      description: `Calculate ${r.label} GST with CGST/SGST split`,
    }));
}

export function getRelatedAmountRatePages(
  amountSlug: string,
  rateSlug: string,
  count = 6
): RelatedLink[] {
  const links: RelatedLink[] = [];
  const amount = AMOUNT_RANGES.find((a) => a.slug === amountSlug);
  const rate = GST_RATES.find((r) => r.slug === rateSlug);
  if (!amount || !rate) return links;

  GST_RATES.filter((r) => r.slug !== rateSlug)
    .slice(0, 3)
    .forEach((r) => {
      links.push({
        href: `/gst-on-${amountSlug}-at-${r.slug}`,
        title: `GST on ${amount.label} at ${r.label}`,
        description: `Calculate ${r.label} GST on ${amount.label}`,
      });
    });

  AMOUNT_RANGES.filter((a) => a.slug !== amountSlug)
    .slice(0, 3)
    .forEach((a) => {
      links.push({
        href: `/gst-on-${a.slug}-at-${rateSlug}`,
        title: `GST on ${a.label} at ${rate.label}`,
        description: `Calculate ${rate.label} GST on ${a.label}`,
      });
    });

  return links.slice(0, count);
}

export function getRelatedStatePages(currentSlug: string, count = 6): RelatedLink[] {
  return INDIAN_STATES.filter((s) => s.slug !== currentSlug)
    .slice(0, count)
    .map((s) => ({
      href: `/gst-calculator-${s.slug}`,
      title: `GST Calculator ${s.name}`,
      description: `State code ${s.code} · CGST/SGST calculator`,
    }));
}

export function getRelatedBusinessPages(currentSlug: string, count = 6): RelatedLink[] {
  return BUSINESS_TYPES.filter((b) => b.slug !== currentSlug)
    .slice(0, count)
    .map((b) => ({
      href: `/gst-for-${b.slug}`,
      title: `GST for ${b.name}`,
      description: `${b.defaultRate}% default rate · ${b.description}`,
    }));
}

function getProductBySlug(slug: string) {
  return PRODUCT_CATEGORIES.find((p) => p.slug === slug);
}
