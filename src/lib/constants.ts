export const SITE_NAME = "GSTCalc.in";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://gstcalc.in";
export const LAST_UPDATED = "June 2025";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export type CalculatorItem = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  category: "gst" | "tax" | "payroll" | "tools";
};

export const CALCULATORS: CalculatorItem[] = [
  {
    slug: "gst-calculator",
    name: "GST Calculator",
    shortName: "GST",
    description: "Calculate CGST, SGST & IGST instantly",
    icon: "receipt",
    category: "gst",
  },
  {
    slug: "reverse-gst-calculator",
    name: "Reverse GST Calculator",
    shortName: "Reverse GST",
    description: "Extract GST from inclusive price",
    icon: "reverse",
    category: "gst",
  },
  {
    slug: "gst-calculator-18-percent",
    name: "GST Calculator 18%",
    shortName: "GST 18%",
    description: "Quick 18% GST calculation",
    icon: "percent",
    category: "gst",
  },
  {
    slug: "gst-calculator-12-percent",
    name: "GST Calculator 12%",
    shortName: "GST 12%",
    description: "Quick 12% GST calculation",
    icon: "percent",
    category: "gst",
  },
  {
    slug: "gst-calculator-5-percent",
    name: "GST Calculator 5%",
    shortName: "GST 5%",
    description: "Quick 5% GST calculation",
    icon: "percent",
    category: "gst",
  },
  {
    slug: "gst-calculator-28-percent",
    name: "GST Calculator 28%",
    shortName: "GST 28%",
    description: "Quick 28% GST calculation",
    icon: "percent",
    category: "gst",
  },
  {
    slug: "tds-calculator",
    name: "TDS Calculator",
    shortName: "TDS",
    description: "Calculate TDS under various sections",
    icon: "tds",
    category: "tax",
  },
  {
    slug: "income-tax-calculator-2024-25",
    name: "Income Tax Calculator",
    shortName: "Income Tax",
    description: "New regime tax for FY 2024-25",
    icon: "tax",
    category: "tax",
  },
  {
    slug: "hra-calculator",
    name: "HRA Calculator",
    shortName: "HRA",
    description: "Calculate HRA tax exemption",
    icon: "home",
    category: "tax",
  },
  {
    slug: "pf-calculator",
    name: "PF Calculator",
    shortName: "PF",
    description: "Employee & employer PF contribution",
    icon: "pf",
    category: "payroll",
  },
  {
    slug: "gratuity-calculator",
    name: "Gratuity Calculator",
    shortName: "Gratuity",
    description: "Calculate gratuity amount",
    icon: "gratuity",
    category: "payroll",
  },
  {
    slug: "professional-tax-calculator",
    name: "Professional Tax Calculator",
    shortName: "Prof. Tax",
    description: "State-wise professional tax",
    icon: "briefcase",
    category: "tax",
  },
  {
    slug: "gst-on-rent-calculator",
    name: "GST on Rent Calculator",
    shortName: "GST Rent",
    description: "GST on commercial property rent",
    icon: "building",
    category: "gst",
  },
  {
    slug: "hsn-code-finder",
    name: "HSN Code Finder",
    shortName: "HSN Finder",
    description: "Search HSN/SAC codes for GST",
    icon: "search",
    category: "tools",
  },
  {
    slug: "gst-invoice-number-generator",
    name: "Invoice Number Generator",
    shortName: "Invoice Gen",
    description: "Generate GST-compliant invoice numbers",
    icon: "invoice",
    category: "tools",
  },
];

export function getCalculator(slug: string) {
  return CALCULATORS.find((c) => c.slug === slug);
}

export function getRelatedCalculators(slug: string, count = 3) {
  const current = getCalculator(slug);
  if (!current) return CALCULATORS.slice(0, count);
  const sameCategory = CALCULATORS.filter(
    (c) => c.slug !== slug && c.category === current.category
  );
  const others = CALCULATORS.filter(
    (c) => c.slug !== slug && c.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, count);
}
