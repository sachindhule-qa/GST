export type Comparison = {
  slug: string;
  title: string;
  description: string;
  termA: string;
  termB: string;
  silo: string;
  keywords: string;
  summary: string;
  table: { attribute: string; a: string; b: string }[];
  verdict: string;
  relatedCalculator?: string;
};

export const COMPARISONS: Comparison[] = [
  {
    slug: "cgst-vs-sgst",
    title: "CGST vs SGST: Key Differences Explained",
    description: "Understand the difference between CGST and SGST — who collects them, when they apply, and how they appear on GST invoices in India.",
    termA: "CGST",
    termB: "SGST",
    silo: "gst",
    keywords: "CGST vs SGST, difference between CGST and SGST, CGST meaning, SGST meaning",
    summary: "CGST and SGST are twin taxes levied simultaneously on intra-state transactions in India. CGST goes to the central government, SGST to the state. They are always equal in rate.",
    table: [
      { attribute: "Full Form", a: "Central Goods and Services Tax", b: "State Goods and Services Tax" },
      { attribute: "Levied By", a: "Central Government", b: "State Government" },
      { attribute: "Revenue Goes To", a: "Union of India", b: "Respective State", },
      { attribute: "Governing Law", a: "CGST Act, 2017", b: "SGST Act of each state" },
      { attribute: "Applicable When", a: "Intra-state supply", b: "Intra-state supply" },
      { attribute: "Rate", a: "Half of total GST rate", b: "Half of total GST rate" },
      { attribute: "ITC Usage", a: "Against CGST → then IGST", b: "Against SGST → then IGST" },
      { attribute: "Inter-State Transaction", a: "Not applicable", b: "Not applicable (IGST applies)" },
    ],
    verdict: "CGST and SGST are not alternatives — they apply simultaneously on every intra-state transaction. You cannot choose one over the other. For inter-state supplies, neither applies — only IGST does.",
    relatedCalculator: "gst-calculator",
  },
  {
    slug: "gst-vs-vat",
    title: "GST vs VAT: How India's Tax System Changed",
    description: "Compare GST and VAT — understand how GST replaced VAT in India, key differences in rate structure, compliance, and ITC mechanism.",
    termA: "GST",
    termB: "VAT",
    silo: "gst",
    keywords: "GST vs VAT India, difference between GST and VAT, VAT to GST transition",
    summary: "VAT (Value Added Tax) was the primary indirect tax on goods in India before 1 July 2017, when it was subsumed into GST. GST is a comprehensive destination-based tax covering both goods and services.",
    table: [
      { attribute: "Full Form", a: "Goods and Services Tax", b: "Value Added Tax" },
      { attribute: "Introduced", a: "1 July 2017", b: "2003-2005 (state-wise rollout)" },
      { attribute: "Coverage", a: "Goods AND services", b: "Only goods (services had Service Tax)" },
      { attribute: "Type", a: "Destination-based", b: "Origin-based" },
      { attribute: "Rate Uniformity", a: "Uniform across India (4 slabs)", b: "Varied by state (12.5–14.5%)" },
      { attribute: "Inter-State", a: "IGST (seamless credit)", b: "CST (no ITC — cascading)" },
      { attribute: "Compliance", a: "Single portal (gst.gov.in)", b: "State-wise — 29+ different systems" },
      { attribute: "ITC", a: "Full credit on inputs + services", b: "Credit only within state on goods" },
    ],
    verdict: "GST is far superior to VAT — it eliminated cascading taxes, unified the national market, extended credit to services, and simplified compliance. The 'one nation one tax' goal is largely achieved.",
    relatedCalculator: "gst-calculator",
  },
  {
    slug: "fd-vs-sip",
    title: "FD vs SIP: Which Investment Is Better in 2025?",
    description: "Compare Fixed Deposit vs SIP (Systematic Investment Plan) for Indian investors — returns, risk, liquidity, tax, and which suits your goals.",
    termA: "FD",
    termB: "SIP",
    silo: "finance",
    keywords: "FD vs SIP, fixed deposit vs SIP, FD vs mutual fund SIP, which is better FD or SIP",
    summary: "FD provides guaranteed returns with zero market risk. SIP in equity mutual funds offers potentially higher returns with market-linked risk. The right choice depends on your goals, risk tolerance, and time horizon.",
    table: [
      { attribute: "Returns", a: "6.5–9.5% (fixed, guaranteed)", b: "10–15% CAGR (historical, not guaranteed)" },
      { attribute: "Risk", a: "Zero market risk", b: "Market risk (short-term volatility)" },
      { attribute: "Minimum Investment", a: "₹1,000 (most banks)", b: "₹100/month (some funds)" },
      { attribute: "Liquidity", a: "Premature withdrawal with penalty", b: "Redeemable T+2 (equity funds)" },
      { attribute: "Tax on Returns", a: "Taxable at slab rate", b: "LTCG 12.5% >₹1.25L (equity >1 yr)" },
      { attribute: "DICGC Insurance", a: "Yes, up to ₹5L per bank", b: "No — market-linked" },
      { attribute: "Lock-in", a: "None (except tax-saving FD: 5 yr)", b: "None (except ELSS: 3 yr)" },
      { attribute: "Beat Inflation", a: "Rarely (real return ≈ 1–2%)", b: "Consistently (real return ≈ 6–8%)" },
    ],
    verdict: "For emergency fund and short-term goals (1–3 years): FD wins. For wealth creation and long-term goals (5+ years): SIP wins. Ideal portfolio: FD for 6 months' expenses + SIP for everything else.",
  },
  {
    slug: "rd-vs-fd",
    title: "RD vs FD: Which Bank Deposit is Right for You?",
    description: "Compare Recurring Deposit (RD) vs Fixed Deposit (FD) — interest rates, deposit structure, maturity, tax, and ideal use cases.",
    termA: "RD",
    termB: "FD",
    silo: "banking",
    keywords: "RD vs FD, recurring deposit vs fixed deposit, which is better RD or FD",
    summary: "RD suits those with regular income who want to save systematically every month. FD suits those with a lump sum to park. Both are safe, DICGC-insured, and tax-equivalent.",
    table: [
      { attribute: "Deposit Type", a: "Fixed monthly instalments", b: "Lump sum at start" },
      { attribute: "Minimum Amount", a: "₹100/month", b: "₹1,000 (typically)" },
      { attribute: "Flexibility", a: "Fixed date, fixed amount", b: "One-time deposit, then fixed" },
      { attribute: "Interest Rate", a: "Same as FD for same tenure", b: "Same as RD for same tenure" },
      { attribute: "Interest Compounding", a: "Quarterly (on monthly instalments)", b: "Quarterly (on lump sum)" },
      { attribute: "Maturity Proceeds", a: "Less than FD (same rate, less invested)", b: "Higher (full amount invested longer)" },
      { attribute: "Premature Closure", a: "Allowed with penalty (0.5–1%)", b: "Allowed with penalty (0.5–1%)" },
      { attribute: "Best For", a: "Salaried individuals, monthly savings", b: "Lump sum investors, bonus deployment" },
    ],
    verdict: "RD and FD offer the same interest rate for the same tenure at the same bank. Choose RD if you're building savings systematically from salary. Choose FD if you have a lump sum (bonus, inheritance). For identical amounts, FD grows more because the full amount earns interest from day one.",
  },
  {
    slug: "old-vs-new-tax-regime",
    title: "Old vs New Tax Regime 2025-26: Complete Comparison",
    description: "Compare old and new income tax regime for FY 2025-26. Tax slabs, deductions, when each is better, and how to decide for your income level.",
    termA: "Old Tax Regime",
    termB: "New Tax Regime",
    silo: "tax",
    keywords: "old vs new tax regime 2025, old regime vs new regime, which tax regime is better",
    summary: "The new tax regime offers lower slab rates but eliminates most deductions. The old regime has higher rates but allows 80C, HRA, home loan interest, and other deductions. The 'better' regime depends on your total deductions.",
    table: [
      { attribute: "Default From FY 2023-24", a: "No (must explicitly opt)", b: "Yes" },
      { attribute: "Standard Deduction", a: "₹50,000", b: "₹75,000" },
      { attribute: "Section 80C", a: "Yes (up to ₹1.5L)", b: "No" },
      { attribute: "HRA Exemption", a: "Yes", b: "No" },
      { attribute: "Home Loan Interest (24b)", a: "Yes (up to ₹2L)", b: "No" },
      { attribute: "NPS 80CCD(1B)", a: "Yes (₹50,000)", b: "No" },
      { attribute: "Tax Rate ₹7–10L", a: "20%", b: "10%" },
      { attribute: "Tax Rate ₹10–12L", a: "30%", b: "15%" },
      { attribute: "Flexibility to Switch", a: "Can switch yearly (salaried)", b: "Can switch yearly (salaried)" },
    ],
    verdict: "New regime wins if your deductions are below ₹3–4L. Old regime wins if you have full 80C (₹1.5L) + NPS (₹50K) + HRA (high) + home loan interest (₹2L). Calculate both before filing.",
    relatedCalculator: "income-tax-calculator-2024-25",
  },
  {
    slug: "personal-loan-vs-business-loan",
    title: "Personal Loan vs Business Loan: Key Differences",
    description: "Compare personal loan and business loan in India — interest rates, eligibility, tax benefits, processing time, and which to choose.",
    termA: "Personal Loan",
    termB: "Business Loan",
    silo: "loans",
    keywords: "personal loan vs business loan, difference between personal and business loan India",
    summary: "Personal loans are faster but costlier. Business loans have lower rates and tax benefits but require more documentation. Always use a business loan for business purposes when eligible.",
    table: [
      { attribute: "Interest Rate", a: "10.5–24% p.a.", b: "8.5–18% p.a." },
      { attribute: "Collateral", a: "Not required (unsecured)", b: "Optional (secured is cheaper)" },
      { attribute: "Approval Time", a: "24–72 hours", b: "3–21 days" },
      { attribute: "End Use", a: "No restriction", b: "Business purpose" },
      { attribute: "Tax Benefit", a: "No (not tax deductible)", b: "Interest fully deductible" },
      { attribute: "Documentation", a: "Minimal (income proof, KYC)", b: "Extensive (IT returns, GST, P&L)" },
      { attribute: "Tenure", a: "12–60 months", b: "12–84 months" },
      { attribute: "Minimum Eligibility", a: "Salaried with ₹25K/month income", b: "Business 2+ years, ₹10L+ turnover" },
    ],
    verdict: "If eligible, always prefer a business loan for business expenses — lower rate + tax deductibility makes effective cost 30–50% lower than personal loan. Use personal loan only for urgent needs where speed matters.",
  },
  {
    slug: "term-insurance-vs-ulip",
    title: "Term Insurance vs ULIP: Which Life Cover is Better?",
    description: "Compare term insurance and ULIP (Unit Linked Insurance Plan) — cost, returns, coverage, flexibility, and which policy serves your needs.",
    termA: "Term Insurance",
    termB: "ULIP",
    silo: "finance",
    keywords: "term insurance vs ULIP, term plan vs ULIP, which is better term plan or ULIP India",
    summary: "Term insurance provides pure life cover at minimal cost. ULIP combines insurance with investment — but at higher charges. For most Indians, 'buy term + invest rest' is the superior strategy.",
    table: [
      { attribute: "Purpose", a: "Pure life cover (protection)", b: "Life cover + investment" },
      { attribute: "Premium (₹1Cr cover, 30yr)", a: "₹8,000–15,000/year", b: "₹1,00,000+/year" },
      { attribute: "Returns", a: "No maturity benefit (zero)", b: "Market-linked (variable)" },
      { attribute: "Charges", a: "Mortality charge only", b: "Mortality + Fund management + Admin charges" },
      { attribute: "Lock-in", a: "None (can stop any time)", b: "5 years mandatory" },
      { attribute: "Tax Benefit", a: "80C + 10(10D) maturity exempt", b: "80C + 10(10D) if premium <10% of SA" },
      { attribute: "Flexibility", a: "High — can increase/decrease", b: "Medium — switch funds allowed" },
      { attribute: "Ideal For", a: "Everyone needing life cover", b: "Investors wanting single product convenience" },
    ],
    verdict: "Buy term insurance for coverage (₹1Cr at ₹12K/year). Invest the premium difference (₹88K+) in equity mutual funds via SIP. This 'term + MF' approach consistently outperforms ULIPs over 10+ years due to lower charges.",
  },
  {
    slug: "nps-vs-ppf",
    title: "NPS vs PPF: Best Retirement Investment for India 2025",
    description: "Compare NPS and PPF for retirement savings — returns, tax benefits, liquidity, withdrawal rules, and which is better for long-term wealth.",
    termA: "NPS",
    termB: "PPF",
    silo: "investment",
    keywords: "NPS vs PPF, national pension system vs PPF, which is better NPS or PPF, retirement investment India",
    summary: "NPS offers equity-linked returns and extra tax deduction of ₹50,000 under 80CCD(1B). PPF offers guaranteed returns with complete EEE tax status. Both are excellent; ideally use both.",
    table: [
      { attribute: "Returns", a: "8–12% (market-linked)", b: "7.1% (guaranteed, government-set)" },
      { attribute: "Risk", a: "Market risk (equity portion)", b: "Zero (government-backed)" },
      { attribute: "Tax Deduction", a: "₹2L total (80CCD(1)+1B)", b: "₹1.5L (within 80C)" },
      { attribute: "Interest/Returns Tax", a: "Taxable (annuity income)", b: "Fully tax-free" },
      { attribute: "Maturity Tax", a: "40% annuity (taxable), 60% lump (exempt)", b: "Fully tax-free" },
      { attribute: "Lock-in", a: "Till 60 years (with partial withdrawal rules)", b: "15 years (extendable)" },
      { attribute: "Min Contribution", a: "₹1,000/year", b: "₹500/year" },
      { attribute: "Max Contribution", a: "No limit", b: "₹1.5L/year" },
    ],
    verdict: "Use PPF for guaranteed, tax-free accumulation (₹1.5L/year). Add NPS Tier 1 for equity upside and the extra ₹50,000 tax deduction. Combined, they provide diversified, tax-optimal retirement savings.",
  },
  {
    slug: "cgst-vs-igst",
    title: "CGST vs IGST: When Does Each Apply?",
    description: "Compare CGST and IGST in Indian GST — which applies to intra-state vs inter-state transactions, and how ITC is utilised.",
    termA: "CGST",
    termB: "IGST",
    silo: "gst",
    keywords: "CGST vs IGST, difference between CGST and IGST, intra-state vs inter-state GST",
    summary: "CGST applies only to intra-state transactions alongside SGST. IGST applies exclusively to inter-state transactions, imports, and exports. You will never see both CGST and IGST on the same invoice.",
    table: [
      { attribute: "Full Form", a: "Central GST", b: "Integrated GST" },
      { attribute: "Applies To", a: "Within the same state/UT", b: "Between states, imports, exports" },
      { attribute: "Rate", a: "50% of applicable GST rate", b: "Full GST rate (CGST + SGST combined)" },
      { attribute: "Collected By", a: "Central Government", b: "Central Government" },
      { attribute: "Distributed To", a: "Centre only", b: "Centre + destination state" },
      { attribute: "ITC Utilisation", a: "CGST → CGST, then IGST", b: "IGST → IGST, CGST, then SGST" },
      { attribute: "On Invoice", a: "Two lines: CGST + SGST", b: "One line: IGST" },
      { attribute: "Place of Supply", a: "Same as supplier's state", b: "Different from supplier's state" },
    ],
    verdict: "The choice between CGST+SGST and IGST is not a choice — it's determined by the place of supply. Intra-state = CGST+SGST. Inter-state = IGST. Applying the wrong one creates compliance issues.",
    relatedCalculator: "gst-calculator",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return COMPARISONS.find((c) => c.slug === slug);
}

export function getComparisonsBySilo(silo: string): Comparison[] {
  return COMPARISONS.filter((c) => c.silo === silo);
}

export function getRelatedComparisons(slug: string, count = 3): Comparison[] {
  const current = getComparisonBySlug(slug);
  if (!current) return COMPARISONS.slice(0, count);
  return COMPARISONS.filter(
    (c) => c.slug !== slug && c.silo === current.silo
  ).slice(0, count);
}

export function getAllComparisonSlugs(): string[] {
  return COMPARISONS.map((c) => c.slug);
}
