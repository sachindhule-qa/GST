import { FAQItem } from "./seo";

export type CalculatorPageData = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  keywords: string;
  intro: string;
  steps: { title: string; description: string; icon: string }[];
  formula: { title: string; content: string };
  examples: { label: string; calculation: string; result: string }[];
  faqs: FAQItem[];
};

const defaultSteps = [
  { title: "Enter Amount", description: "Type the amount or value in the input field.", icon: "input" },
  { title: "Select Options", description: "Choose rate, type, or relevant parameters.", icon: "calculate" },
  { title: "View Results", description: "Get instant breakdown with copy and share options.", icon: "result" },
];

export const CALCULATOR_PAGES: Record<string, CalculatorPageData> = {
  "gst-calculator": {
    slug: "gst-calculator",
    h1: "GST Calculator India 2024-25",
    title: "GST Calculator India 2024-25",
    description:
      "Free GST calculator India 2024-25. Calculate CGST, SGST, IGST instantly for 5%, 12%, 18%, 28% rates. Exclusive & inclusive GST calculation online.",
    keywords: "GST calculator, GST calculator India, CGST SGST calculator, IGST calculator, GST calculation online",
    intro: "Calculate Goods and Services Tax (GST) instantly for any amount. Supports all standard GST rates with CGST/SGST and IGST breakdown for intra-state and inter-state supplies.",
    steps: defaultSteps,
    formula: {
      title: "GST Formula",
      content: `Exclusive GST:\n  GST Amount = (Original Amount × GST Rate) / 100\n  Total = Original Amount + GST Amount\n  CGST = SGST = GST Amount / 2 (intra-state)\n  IGST = GST Amount (inter-state)\n\nInclusive GST:\n  GST Amount = Amount - (Amount × 100) / (100 + Rate)\n  Base Amount = Amount - GST Amount`,
    },
    examples: [
      { label: "₹10,000 at 18% (Exclusive)", calculation: "GST = 10000 × 18/100 = ₹1,800", result: "Total: ₹11,800 | CGST: ₹900 | SGST: ₹900" },
      { label: "₹11,800 at 18% (Inclusive)", calculation: "Base = 11800 × 100/118 = ₹10,000", result: "GST: ₹1,800 | CGST: ₹900 | SGST: ₹900" },
      { label: "₹50,000 at 5% (Exclusive)", calculation: "GST = 50000 × 5/100 = ₹2,500", result: "Total: ₹52,500 | CGST: ₹1,250 | SGST: ₹1,250" },
    ],
    faqs: [
      { question: "How to calculate GST in India?", answer: "For exclusive pricing: GST = Amount × Rate / 100. For inclusive pricing: GST = Amount - (Amount × 100) / (100 + Rate). CGST and SGST are each half of total GST for intra-state supplies." },
      { question: "What is the difference between CGST and SGST?", answer: "CGST (Central GST) and SGST (State GST) apply to intra-state transactions and are each 50% of the total GST. IGST applies to inter-state transactions as a single combined tax." },
      { question: "What are the current GST rates in India?", answer: "India has four main GST slabs: 5%, 12%, 18%, and 28%. Some items are exempt (0%) or taxed at special rates like 3% for gold." },
      { question: "Is this GST calculator free?", answer: "Yes, GSTCalc.in provides a completely free GST calculator with no registration required. All calculations happen instantly in your browser." },
      { question: "Can I calculate GST for inclusive prices?", answer: "Yes, select 'Incl. GST' to reverse-calculate the base amount and GST component from a tax-inclusive price." },
    ],
  },
  "reverse-gst-calculator": {
    slug: "reverse-gst-calculator",
    h1: "Reverse GST Calculator India 2024-25",
    title: "Reverse GST Calculator India",
    description:
      "Reverse GST calculator to extract GST from inclusive price. Find base amount, CGST & SGST from GST-inclusive amount instantly. Free online tool India.",
    keywords: "reverse GST calculator, GST inclusive calculator, extract GST from total, reverse GST calculation India",
    intro: "Extract GST from an inclusive price. Enter the total amount including GST and find the base amount, GST component, and CGST/SGST split instantly.",
    steps: defaultSteps,
    formula: {
      title: "Reverse GST Formula",
      content: `Base Amount = Inclusive Amount × 100 / (100 + GST Rate)\nGST Amount = Inclusive Amount - Base Amount\nCGST = SGST = GST Amount / 2`,
    },
    examples: [
      { label: "₹1,180 inclusive at 18%", calculation: "Base = 1180 × 100/118", result: "Base: ₹1,000 | GST: ₹180" },
      { label: "₹5,600 inclusive at 12%", calculation: "Base = 5600 × 100/112", result: "Base: ₹5,000 | GST: ₹600" },
      { label: "₹10,500 inclusive at 5%", calculation: "Base = 10500 × 100/105", result: "Base: ₹10,000 | GST: ₹500" },
    ],
    faqs: [
      { question: "What is reverse GST calculation?", answer: "Reverse GST calculation extracts the tax component from a GST-inclusive price to find the original base amount before tax was added." },
      { question: "How to remove GST from total amount?", answer: "Divide the inclusive amount by (1 + Rate/100). For 18% GST: Base = Inclusive × 100/118." },
      { question: "When is reverse GST used?", answer: "Reverse GST is used when you know the final invoice amount and need to determine the taxable value and GST for accounting or filing purposes." },
      { question: "Does reverse GST work for all rates?", answer: "Yes, the reverse GST formula works for all GST rates including 5%, 12%, 18%, and 28%." },
      { question: "Is CGST and SGST split in reverse GST?", answer: "Yes, once the total GST is extracted, it is equally divided into CGST and SGST for intra-state supplies." },
    ],
  },
  "gst-calculator-18-percent": {
    slug: "gst-calculator-18-percent",
    h1: "GST Calculator 18 Percent India 2024-25",
    title: "GST Calculator 18%",
    description:
      "GST calculator 18 percent for India. Quick 18% GST calculation with CGST 9% and SGST 9% breakdown. Calculate exclusive and inclusive 18% GST online free.",
    keywords: "GST calculator 18 percent, 18% GST calculator, GST 18% India, CGST 9% SGST 9%",
    intro: "Fast 18% GST calculator for the most common GST slab in India. Instantly calculate CGST (9%), SGST (9%), or IGST (18%) on any amount.",
    steps: defaultSteps,
    formula: { title: "18% GST Formula", content: "GST = Amount × 18 / 100\nCGST = SGST = GST / 2 (9% each)\nIGST = GST (18% for inter-state)" },
    examples: [
      { label: "₹1,000 exclusive", calculation: "1800 = 1000 × 18%", result: "Total: ₹1,180" },
      { label: "₹10,000 exclusive", calculation: "GST = ₹1,800", result: "Total: ₹11,800" },
      { label: "₹1,180 inclusive", calculation: "Base = ₹1,000", result: "GST: ₹180" },
    ],
    faqs: [
      { question: "What items are taxed at 18% GST?", answer: "18% GST applies to most services, electronics, soaps, capital goods, and many manufactured products. It is the most commonly used GST rate in India." },
      { question: "What is CGST and SGST on 18% GST?", answer: "For intra-state supplies, 18% GST splits into 9% CGST and 9% SGST." },
      { question: "How to calculate 18% GST on ₹10,000?", answer: "GST = ₹1,800. Total inclusive amount = ₹11,800. CGST = SGST = ₹900 each." },
      { question: "Is 18% GST applicable on rent?", answer: "Commercial rent from GST-registered landlords typically attracts 18% GST under SAC 997212." },
      { question: "Can I use this for invoices?", answer: "Yes, use this calculator to verify GST amounts on invoices. Always confirm with your CA for official filings." },
    ],
  },
  "gst-calculator-12-percent": {
    slug: "gst-calculator-12-percent",
    h1: "GST Calculator 12 Percent India 2024-25",
    title: "GST Calculator 12%",
    description:
      "GST calculator 12 percent India. Calculate 12% GST with CGST 6% and SGST 6% split. Free online 12% GST calculator for exclusive and inclusive amounts.",
    keywords: "GST calculator 12 percent, 12% GST calculator, GST 12% India",
    intro: "Calculate 12% GST instantly. This rate applies to processed foods, medicines, hotel accommodation, and various other goods and services.",
    steps: defaultSteps,
    formula: { title: "12% GST Formula", content: "GST = Amount × 12 / 100\nCGST = SGST = GST / 2 (6% each)" },
    examples: [
      { label: "₹5,000 exclusive", calculation: "GST = ₹600", result: "Total: ₹5,600" },
      { label: "₹5,600 inclusive", calculation: "Base = ₹5,000", result: "GST: ₹600" },
      { label: "₹25,000 exclusive", calculation: "GST = ₹3,000", result: "Total: ₹28,000" },
    ],
    faqs: [
      { question: "What is taxed at 12% GST?", answer: "12% GST applies to items like processed foods, fruit juices, medicines, hotel rooms (₹1,000-₹7,500/night), and business class air travel." },
      { question: "How to split 12% GST?", answer: "CGST is 6% and SGST is 6% for intra-state transactions, totaling 12%." },
      { question: "How to calculate 12% GST on ₹5,000?", answer: "GST = ₹600. Total = ₹5,600. CGST = SGST = ₹300." },
      { question: "Is restaurant food 12% GST?", answer: "Non-AC restaurants with turnover up to ₹1.5 crore may charge 5% GST. AC restaurants and hotels typically charge 5% or 12% depending on conditions." },
      { question: "Can I calculate inclusive 12% GST?", answer: "Yes, switch to Incl. GST mode to extract the base amount from a tax-inclusive price." },
    ],
  },
  "gst-calculator-5-percent": {
    slug: "gst-calculator-5-percent",
    h1: "GST Calculator 5 Percent India 2024-25",
    title: "GST Calculator 5%",
    description:
      "GST calculator 5 percent India. Calculate 5% GST with CGST 2.5% and SGST 2.5%. Free online tool for essential goods, restaurant services and more.",
    keywords: "GST calculator 5 percent, 5% GST calculator, GST 5% India",
    intro: "Quick 5% GST calculator for essential goods, packaged food items, and restaurant services. Get instant CGST/SGST breakdown.",
    steps: defaultSteps,
    formula: { title: "5% GST Formula", content: "GST = Amount × 5 / 100\nCGST = SGST = GST / 2 (2.5% each)" },
    examples: [
      { label: "₹10,000 exclusive", calculation: "GST = ₹500", result: "Total: ₹10,500" },
      { label: "₹10,500 inclusive", calculation: "Base = ₹10,000", result: "GST: ₹500" },
      { label: "₹2,000 exclusive", calculation: "GST = ₹100", result: "Total: ₹2,100" },
    ],
    faqs: [
      { question: "What items have 5% GST?", answer: "5% GST applies to packaged food items, tea, coffee, spices, rail transport, and restaurant services (non-AC)." },
      { question: "What is CGST and SGST on 5%?", answer: "CGST is 2.5% and SGST is 2.5%, totaling 5% for intra-state supplies." },
      { question: "How to calculate 5% GST on ₹10,000?", answer: "GST = ₹500. Total inclusive = ₹10,500." },
      { question: "Is 5% GST the lowest rate?", answer: "No, some essential items are at 0% (nil rated). 5% is the lowest standard GST slab." },
      { question: "Is this calculator accurate?", answer: "Yes, calculations use the official GST formula. Results are for reference; verify with your tax advisor for compliance." },
    ],
  },
  "gst-calculator-28-percent": {
    slug: "gst-calculator-28-percent",
    h1: "GST Calculator 28 Percent India 2024-25",
    title: "GST Calculator 28%",
    description:
      "GST calculator 28 percent India. Calculate highest GST slab at 28% with CGST 14% and SGST 14%. For luxury items, cars, tobacco and aerated drinks.",
    keywords: "GST calculator 28 percent, 28% GST calculator, luxury GST India",
    intro: "Calculate 28% GST — the highest standard slab in India. Applies to luxury cars, aerated drinks, tobacco products, and certain consumer goods.",
    steps: defaultSteps,
    formula: { title: "28% GST Formula", content: "GST = Amount × 28 / 100\nCGST = SGST = GST / 2 (14% each)" },
    examples: [
      { label: "₹5,00,000 car (exclusive)", calculation: "GST = ₹1,40,000", result: "Total: ₹6,40,000" },
      { label: "₹1,000 exclusive", calculation: "GST = ₹280", result: "Total: ₹1,280" },
      { label: "₹1,280 inclusive", calculation: "Base = ₹1,000", result: "GST: ₹280" },
    ],
    faqs: [
      { question: "What is taxed at 28% GST?", answer: "28% GST applies to luxury cars, aerated drinks, tobacco, cement, and certain consumer durables. Some items also attract additional cess." },
      { question: "Is cess included in 28% GST?", answer: "No, compensation cess may apply on top of 28% GST for items like tobacco and luxury cars. This calculator shows base 28% GST only." },
      { question: "How to calculate 28% GST?", answer: "Multiply the amount by 0.28. For ₹1,000: GST = ₹280, Total = ₹1,280." },
      { question: "What is CGST on 28%?", answer: "CGST is 14% and SGST is 14% for intra-state supplies at the 28% slab." },
      { question: "Can I use this for car GST?", answer: "Yes, enter the ex-showroom price to estimate GST. Note that cars may also have additional cess beyond 28%." },
    ],
  },
  "tds-calculator": {
    slug: "tds-calculator",
    h1: "TDS Calculator India 2024-25",
    title: "TDS Calculator India",
    description:
      "Free TDS calculator India 2024-25. Calculate TDS under Section 194C, 194J, 194H, 194I, 194A, 194B. Instant net amount after TDS deduction online.",
    keywords: "TDS calculator, TDS calculator India, Section 194J TDS, TDS on rent calculator",
    intro: "Calculate Tax Deducted at Source (TDS) for various sections under the Income Tax Act. Get instant TDS amount and net payable after deduction.",
    steps: defaultSteps,
    formula: {
      title: "TDS Formula",
      content: "TDS Amount = Payment Amount × TDS Rate / 100\nNet Amount = Payment Amount - TDS Amount\n\nCommon Rates:\n  194C (Contractor): 1%\n  194J (Professional): 10%\n  194H (Commission): 5%\n  194I (Rent): 10%\n  194A (Interest): 10%\n  194B (Lottery): 30%",
    },
    examples: [
      { label: "₹1,00,000 under 194J", calculation: "TDS = 10% = ₹10,000", result: "Net: ₹90,000" },
      { label: "₹50,000 under 194C", calculation: "TDS = 1% = ₹500", result: "Net: ₹49,500" },
      { label: "₹2,00,000 under 194I", calculation: "TDS = 10% = ₹20,000", result: "Net: ₹1,80,000" },
    ],
    faqs: [
      { question: "What is TDS in India?", answer: "TDS (Tax Deducted at Source) is tax collected at the time of payment. The deductor remits it to the government and issues a TDS certificate to the deductee." },
      { question: "What is TDS rate under Section 194J?", answer: "TDS under Section 194J for professional/technical services is 10% when payment exceeds ₹30,000." },
      { question: "How to calculate TDS on rent?", answer: "Under Section 194I, TDS on rent is 10% for land/building and 2% for plant/machinery when annual rent exceeds ₹2.4 lakh." },
      { question: "When is TDS not applicable?", answer: "TDS is not deducted when payment is below the threshold limit for each section, or when the payee has a lower deduction certificate." },
      { question: "Is this TDS calculator updated for 2024-25?", answer: "Yes, this calculator uses current TDS rates for major sections applicable in FY 2024-25." },
    ],
  },
  "income-tax-calculator-2024-25": {
    slug: "income-tax-calculator-2024-25",
    h1: "Income Tax Calculator India 2024-25",
    title: "Income Tax Calculator 2024-25",
    description:
      "Income tax calculator India FY 2024-25 new regime. Calculate tax with slab-wise breakdown, 4% cess. Free online income tax calculator for salaried individuals.",
    keywords: "income tax calculator India, income tax calculator 2024-25, new tax regime calculator, tax slab calculator",
    intro: "Calculate income tax under the New Tax Regime for FY 2024-25 (AY 2025-26). Get slab-wise breakdown with 4% health and education cess.",
    steps: defaultSteps,
    formula: {
      title: "New Regime Tax Slabs FY 2024-25",
      content: "Up to ₹3,00,000: Nil\n₹3,00,001 - ₹6,00,000: 5%\n₹6,00,001 - ₹9,00,000: 10%\n₹9,00,001 - ₹12,00,000: 15%\n₹12,00,001 - ₹15,00,000: 20%\nAbove ₹15,00,000: 30%\n\n+ 4% Health & Education Cess on total tax",
    },
    examples: [
      { label: "Income ₹8,00,000", calculation: "Slab-wise tax + 4% cess", result: "Total Tax: ~₹42,900" },
      { label: "Income ₹12,00,000", calculation: "Slab-wise tax + 4% cess", result: "Total Tax: ~₹1,15,800" },
      { label: "Income ₹20,00,000", calculation: "Slab-wise tax + 4% cess", result: "Total Tax: ~₹3,58,800" },
    ],
    faqs: [
      { question: "What are new regime tax slabs for 2024-25?", answer: "The new regime has 6 slabs: 0% up to ₹3L, 5% (₹3-6L), 10% (₹6-9L), 15% (₹9-12L), 20% (₹12-15L), and 30% above ₹15L." },
      { question: "What is standard deduction in new regime?", answer: "Salaried individuals get ₹75,000 standard deduction under the new regime for FY 2024-25. Enter net taxable income after deductions." },
      { question: "What is 4% cess?", answer: "Health and Education Cess at 4% is levied on the total income tax amount." },
      { question: "New regime vs old regime?", answer: "The new regime has lower rates but fewer deductions. Compare both using our calculator and consult a CA for the best option." },
      { question: "Is surcharge included?", answer: "This calculator shows base tax with cess. Surcharge applies for income above ₹50 lakh and is not included here." },
    ],
  },
  "hra-calculator": {
    slug: "hra-calculator",
    h1: "HRA Calculator India 2024-25",
    title: "HRA Calculator India",
    description:
      "HRA calculator India to compute House Rent Allowance exemption. Calculate taxable HRA for metro and non-metro cities. Free online HRA exemption calculator.",
    keywords: "HRA calculator, HRA exemption calculator, house rent allowance calculator India",
    intro: "Calculate your HRA tax exemption under Section 10(13A). Exemption is the minimum of actual HRA, rent paid minus 10% of basic, or 50%/40% of basic salary.",
    steps: defaultSteps,
    formula: {
      title: "HRA Exemption Formula",
      content: "Exemption = Minimum of:\n  1. Actual HRA received\n  2. Rent paid - 10% of Basic Salary\n  3. 50% of Basic (Metro) or 40% (Non-Metro)\n\nTaxable HRA = HRA Received - Exemption",
    },
    examples: [
      { label: "Basic ₹50K, HRA ₹20K, Rent ₹15K (Metro)", calculation: "Min of 20K, 10K, 25K", result: "Exemption: ₹10,000" },
      { label: "Basic ₹40K, HRA ₹16K, Rent ₹12K", calculation: "Min of 16K, 8K, 16K", result: "Exemption: ₹8,000" },
      { label: "Basic ₹30K, HRA ₹12K, Rent ₹5K", calculation: "Min of 12K, 2K, 12K", result: "Exemption: ₹2,000" },
    ],
    faqs: [
      { question: "How is HRA exemption calculated?", answer: "HRA exemption is the least of: actual HRA received, rent paid minus 10% of basic salary, or 50% of basic (metro) / 40% (non-metro)." },
      { question: "Which cities are metro for HRA?", answer: "Delhi, Mumbai, Kolkata, and Chennai are considered metro cities for 50% HRA exemption. All others are non-metro (40%)." },
      { question: "Can I claim HRA if I pay rent to parents?", answer: "Yes, if you pay rent to parents and have a valid rent agreement and rent receipts, you can claim HRA exemption." },
      { question: "Is HRA available in new tax regime?", answer: "No, HRA exemption is not available under the new tax regime from FY 2023-24 onwards." },
      { question: "What documents are needed for HRA?", answer: "Rent receipts, rent agreement, and landlord's PAN (if annual rent exceeds ₹1 lakh) are required." },
    ],
  },
  "pf-calculator": {
    slug: "pf-calculator",
    h1: "PF Calculator India 2024-25",
    title: "PF Calculator India",
    description:
      "PF calculator India for EPF contribution. Calculate employee 12% and employer EPF/EPS split. Free provident fund calculator for salaried employees.",
    keywords: "PF calculator, EPF calculator, provident fund calculator India, PF contribution calculator",
    intro: "Calculate Employee Provident Fund (EPF) contributions. Employee contributes 12% of basic salary; employer splits between EPF and EPS.",
    steps: defaultSteps,
    formula: {
      title: "PF Contribution Formula",
      content: "Employee PF = Basic Salary × 12%\nEmployer Total = Basic Salary × 12%\n  Employer EPS = min(Basic, ₹15,000) × 8.33%\n  Employer EPF = Employer Total - EPS",
    },
    examples: [
      { label: "Basic ₹30,000", calculation: "Employee PF = ₹3,600", result: "Total PF: ~₹7,200/month" },
      { label: "Basic ₹15,000", calculation: "Employee PF = ₹1,800", result: "Total PF: ~₹3,600/month" },
      { label: "Basic ₹50,000", calculation: "Employee PF = ₹6,000", result: "EPS capped at ₹15,000 wage" },
    ],
    faqs: [
      { question: "What is PF contribution rate?", answer: "Both employee and employer contribute 12% of basic salary + DA towards PF. EPS is capped at ₹15,000 wage ceiling." },
      { question: "What is EPS in PF?", answer: "Employee Pension Scheme (EPS) receives 8.33% of employer contribution (on wages up to ₹15,000). Remaining goes to EPF." },
      { question: "Is PF mandatory?", answer: "PF is mandatory for establishments with 20+ employees. Employees with basic salary up to ₹15,000 must join EPF." },
      { question: "Can I withdraw PF?", answer: "PF can be withdrawn partially for specific purposes or fully after 2 months of unemployment. Rules vary by circumstance." },
      { question: "Is VPF included?", answer: "This calculator shows mandatory contributions. Voluntary PF (VPF) is additional employee contribution beyond 12%." },
    ],
  },
  "gratuity-calculator": {
    slug: "gratuity-calculator",
    h1: "Gratuity Calculator India 2024-25",
    title: "Gratuity Calculator India",
    description:
      "Gratuity calculator India for employees. Calculate gratuity amount based on last drawn salary and years of service. Free online gratuity calculation tool.",
    keywords: "gratuity calculator, gratuity calculation India, payment of gratuity act calculator",
    intro: "Calculate gratuity payable under the Payment of Gratuity Act. Based on last drawn salary (basic + DA) and years of continuous service.",
    steps: defaultSteps,
    formula: {
      title: "Gratuity Formula",
      content: "Under Payment of Gratuity Act:\n  Gratuity = (15 × Last Drawn Salary × Years of Service) / 26\n\nOther establishments:\n  Gratuity = (15 × Last Drawn Salary × Years of Service) / 30\n\nMax gratuity: ₹20 lakh (as per current limits)",
    },
    examples: [
      { label: "Salary ₹50K, 10 years", calculation: "(15 × 50000 × 10) / 26", result: "Gratuity: ₹2,88,462" },
      { label: "Salary ₹30K, 5 years", calculation: "(15 × 30000 × 5) / 26", result: "Gratuity: ₹86,538" },
      { label: "Salary ₹1,00,000, 20 years", calculation: "(15 × 100000 × 20) / 26", result: "Gratuity: ₹11,53,846" },
    ],
    faqs: [
      { question: "How is gratuity calculated in India?", answer: "Gratuity = (15 × Last Drawn Salary × Years of Service) / 26 for establishments covered under the Payment of Gratuity Act." },
      { question: "When is gratuity payable?", answer: "Gratuity is payable after 5 years of continuous service, on retirement, resignation, death, or disablement." },
      { question: "What is the maximum gratuity limit?", answer: "The maximum gratuity payable is ₹20 lakh as per the Payment of Gratuity (Amendment) Act, 2018." },
      { question: "Is gratuity taxable?", answer: "Gratuity received by government employees is fully exempt. Private sector exemption limits depend on years of service and amount received." },
      { question: "What salary is used for gratuity?", answer: "Last drawn salary includes basic salary and dearness allowance (DA). Other allowances are typically excluded." },
    ],
  },
  "professional-tax-calculator": {
    slug: "professional-tax-calculator",
    h1: "Professional Tax Calculator India 2024-25",
    title: "Professional Tax Calculator India",
    description:
      "Professional tax calculator for Maharashtra, Karnataka, West Bengal, Telangana, Tamil Nadu. Calculate monthly and annual professional tax on salary.",
    keywords: "professional tax calculator, PT calculator India, Maharashtra professional tax calculator",
    intro: "Calculate state-wise professional tax deducted from salary. Rates vary by state and salary slab.",
    steps: defaultSteps,
    formula: {
      title: "Professional Tax",
      content: "Professional tax is a state-level tax on salaried individuals and professionals.\nRates vary by state and income slab.\nMaximum PT: ₹2,500 per year (₹200/month in most states)",
    },
    examples: [
      { label: "Maharashtra, ₹25,000/month", calculation: "Slab: above ₹10,000", result: "PT: ₹200/month" },
      { label: "Karnataka, ₹20,000/month", calculation: "Slab: above ₹15,000", result: "PT: ₹200/month" },
      { label: "Tamil Nadu, ₹50,000/month", calculation: "Slab: ₹45,001-60,000", result: "PT: ₹690/month" },
    ],
    faqs: [
      { question: "What is professional tax?", answer: "Professional tax is a state tax levied on salaried individuals, professionals, and traders. It is deducted by the employer from salary." },
      { question: "Which states levy professional tax?", answer: "States like Maharashtra, Karnataka, West Bengal, Tamil Nadu, Telangana, and others levy professional tax. Rates and slabs differ." },
      { question: "What is maximum professional tax?", answer: "The maximum professional tax is ₹2,500 per year (approximately ₹200 per month) in most states." },
      { question: "Is professional tax deductible?", answer: "Yes, professional tax paid is allowed as a deduction from salary income under the Income Tax Act." },
      { question: "Who is exempt from professional tax?", answer: "Exemptions vary by state. Senior citizens, disabled persons, and certain income levels may be exempt." },
    ],
  },
  "gst-on-rent-calculator": {
    slug: "gst-on-rent-calculator",
    h1: "GST on Rent Calculator India 2024-25",
    title: "GST on Rent Calculator",
    description:
      "GST on rent calculator for commercial property in India. Calculate 18% GST on commercial rent when landlord is GST registered. Free online rent GST tool.",
    keywords: "GST on rent calculator, commercial rent GST, GST on property rent India, 18% GST rent",
    intro: "Calculate 18% GST applicable on commercial property rent when the landlord is GST registered. Residential rent is generally exempt from GST.",
    steps: defaultSteps,
    formula: {
      title: "GST on Rent Formula",
      content: "GST on Rent = Monthly Rent × 18 / 100\nTotal Payable = Rent + GST\n\nApplicable when:\n  - Property is commercial\n  - Landlord is GST registered\n  - Rent exceeds ₹20 lakh/year (registration threshold)",
    },
    examples: [
      { label: "₹50,000/month commercial rent", calculation: "GST = ₹9,000", result: "Total: ₹59,000/month" },
      { label: "₹1,00,000/month rent", calculation: "GST = ₹18,000", result: "Annual GST: ₹2,16,000" },
      { label: "Residential rent", calculation: "GST not applicable", result: "Total: Rent only" },
    ],
    faqs: [
      { question: "Is GST applicable on rent?", answer: "GST at 18% applies to commercial property rent when the landlord is GST registered. Residential rent is exempt." },
      { question: "What is GST rate on commercial rent?", answer: "Commercial rent attracts 18% GST under SAC code 997212 when the landlord is registered under GST." },
      { question: "Is residential rent taxable under GST?", answer: "No, renting of residential property for use as residence is exempt from GST." },
      { question: "Who pays GST on rent?", answer: "GST is typically collected by the landlord from the tenant and deposited to the government." },
      { question: "What is the GST registration threshold for rent?", answer: "Landlords must register under GST if their aggregate turnover exceeds ₹20 lakh (₹10 lakh in special category states)." },
    ],
  },
  "hsn-code-finder": {
    slug: "hsn-code-finder",
    h1: "HSN Code Finder India 2024-25",
    title: "HSN Code Finder",
    description:
      "HSN code finder for GST India. Search HSN and SAC codes with GST rates. Free online HSN code search tool for invoices and GST filing.",
    keywords: "HSN code finder, HSN code search, SAC code finder, GST HSN code lookup",
    intro: "Search HSN (Harmonized System of Nomenclature) and SAC (Services Accounting Code) with applicable GST rates. Essential for GST invoices and returns.",
    steps: [
      { title: "Enter Keyword", description: "Type product name or HSN/SAC code.", icon: "input" },
      { title: "Browse Results", description: "View matching codes with descriptions and GST rates.", icon: "calculate" },
      { title: "Use in Invoice", description: "Copy the code for your GST invoice or return.", icon: "result" },
    ],
    formula: {
      title: "About HSN Codes",
      content: "HSN codes classify goods for GST purposes.\n4-digit: Required for turnover up to ₹5 crore\n6-digit: Required for turnover above ₹5 crore\n8-digit: For specific product classification\n\nSAC codes classify services (starting with 99)",
    },
    examples: [
      { label: "Smartphones", calculation: "Search: smartphone", result: "HSN 8517 — 18% GST" },
      { label: "Restaurant services", calculation: "Search: restaurant", result: "SAC 996311 — 5% GST" },
      { label: "Computers", calculation: "Search: computer", result: "HSN 8471 — 18% GST" },
    ],
    faqs: [
      { question: "What is HSN code?", answer: "HSN (Harmonized System of Nomenclature) is an internationally accepted product classification system used for GST invoicing and returns in India." },
      { question: "What is SAC code?", answer: "SAC (Services Accounting Code) is used to classify services under GST. Service codes typically start with 99." },
      { question: "How many digits in HSN code?", answer: "HSN codes can be 4, 6, or 8 digits depending on turnover. Businesses with turnover up to ₹5 crore use 4-digit codes." },
      { question: "Is HSN mandatory on invoices?", answer: "Yes, HSN/SAC codes are mandatory on GST invoices. The number of digits required depends on annual turnover." },
      { question: "How to find correct HSN code?", answer: "Use our HSN code finder to search by product name or browse by category. Verify with the official GST HSN master for compliance." },
    ],
  },
  "gst-invoice-number-generator": {
    slug: "gst-invoice-number-generator",
    h1: "GST Invoice Number Generator India 2024-25",
    title: "GST Invoice Number Generator",
    description:
      "GST invoice number generator for India. Create GST-compliant sequential invoice numbers with prefix, FY and month. Free online invoice number tool.",
    keywords: "GST invoice number generator, invoice number format India, GST invoice format, sequential invoice number",
    intro: "Generate GST-compliant invoice numbers with customizable prefix, financial year, and sequential numbering. Follow best practices for GST invoicing.",
    steps: defaultSteps,
    formula: {
      title: "Invoice Number Format",
      content: "Recommended Format: PREFIX/FY/MONTH/SEQUENCE\nExample: INV/2024-25/06/0001\n\nRules:\n  - Must be unique and consecutive\n  - Same series for a financial year\n  - No gaps allowed in serial numbers",
    },
    examples: [
      { label: "First invoice of June", calculation: "INV/2024-25/06/0001", result: "Invoice #1 for June 2024" },
      { label: "100th invoice", calculation: "INV/2024-25/06/0100", result: "Sequential numbering" },
      { label: "Custom prefix", calculation: "ABC/2024-25/06/0001", result: "Company-specific prefix" },
    ],
    faqs: [
      { question: "What is GST invoice number format?", answer: "GST rules require a consecutive, unique invoice number for each tax invoice. Format typically includes prefix, financial year, and serial number." },
      { question: "Can invoice numbers have gaps?", answer: "No, GST requires consecutive serial numbering within each series. Gaps can attract scrutiny during audits." },
      { question: "When to start new invoice series?", answer: "A new series typically starts each financial year (April 1). Some businesses reset monthly or use continuous numbering." },
      { question: "Is invoice number mandatory for GST?", answer: "Yes, every GST tax invoice must have a unique consecutive serial number not exceeding 16 characters." },
      { question: "Can I customize the prefix?", answer: "Yes, you can use your business initials or identifier as prefix. The serial number must remain consecutive." },
    ],
  },
};

export function getCalculatorPageData(slug: string): CalculatorPageData | undefined {
  return CALCULATOR_PAGES[slug];
}
