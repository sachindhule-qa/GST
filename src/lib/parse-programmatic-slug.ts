import {
  AMOUNT_RANGES,
  BUSINESS_TYPES,
  GST_RATES,
  INDIAN_STATES,
  PRODUCT_CATEGORIES,
  getAmountBySlug,
  getBusinessBySlug,
  getProductBySlug,
  getRateBySlug,
  getStateBySlug,
} from "@/data/calculators";

export type ProgrammaticPageType =
  | { type: "product"; product: ReturnType<typeof getProductBySlug> }
  | { type: "rate"; rate: ReturnType<typeof getRateBySlug> }
  | { type: "amount-rate"; amount: ReturnType<typeof getAmountBySlug>; rate: ReturnType<typeof getRateBySlug> }
  | { type: "state"; state: ReturnType<typeof getStateBySlug> }
  | { type: "business"; business: ReturnType<typeof getBusinessBySlug> };

export function parseProgrammaticSlug(slug: string): ProgrammaticPageType | null {
  // gst-on-{amount}-at-{rate}
  const amountRateMatch = slug.match(/^gst-on-(.+)-at-(\d+)$/);
  if (amountRateMatch) {
    const amount = getAmountBySlug(amountRateMatch[1]);
    const rate = getRateBySlug(amountRateMatch[2]);
    if (amount && rate) return { type: "amount-rate", amount, rate };
    return null;
  }

  // gst-on-{product}
  if (slug.startsWith("gst-on-")) {
    const productSlug = slug.slice("gst-on-".length);
    const product = getProductBySlug(productSlug);
    if (product) return { type: "product", product };
    return null;
  }

  // gst-for-{business}
  if (slug.startsWith("gst-for-")) {
    const business = getBusinessBySlug(slug.slice("gst-for-".length));
    if (business) return { type: "business", business };
    return null;
  }

  // gst-calculator-{state} (exclude static gst-calculator-XX-percent pages)
  if (slug.startsWith("gst-calculator-")) {
    const stateSlug = slug.slice("gst-calculator-".length);
    if (!stateSlug.endsWith("-percent")) {
      const state = getStateBySlug(stateSlug);
      if (state) return { type: "state", state };
    }
    return null;
  }

  // gst-{rate}-percent
  const rateMatch = slug.match(/^gst-(\d+)-percent$/);
  if (rateMatch) {
    const rate = getRateBySlug(rateMatch[1]);
    if (rate) return { type: "rate", rate };
    return null;
  }

  return null;
}

export function getAllProgrammaticSlugs(): string[] {
  const productSlugs = PRODUCT_CATEGORIES.map((p) => `gst-on-${p.slug}`);
  const rateSlugs = GST_RATES.map((r) => `gst-${r.slug}-percent`);
  const amountRateSlugs = AMOUNT_RANGES.flatMap((a) =>
    GST_RATES.map((r) => `gst-on-${a.slug}-at-${r.slug}`)
  );
  const stateSlugs = INDIAN_STATES.map((s) => `gst-calculator-${s.slug}`);
  const businessSlugs = BUSINESS_TYPES.map((b) => `gst-for-${b.slug}`);

  return [...productSlugs, ...rateSlugs, ...amountRateSlugs, ...stateSlugs, ...businessSlugs];
}
