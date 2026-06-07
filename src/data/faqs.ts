export type FAQPage = {
  slug: string;
  title: string;
  description: string;
  category: string;
  silo: string;
  keywords: string;
  questions: { question: string; answer: string }[];
  relatedCalculator?: string;
};

export const FAQ_PAGES: FAQPage[] = [
  // GST FAQ Pages
  {
    slug: "gst-registration-faq",
    title: "GST Registration FAQs: 20 Most Common Questions Answered",
    description: "Complete FAQ on GST registration in India. Who must register, threshold limits, process, documents, GSTIN format, and penalties for non-registration.",
    category: "GST Registration",
    silo: "gst",
    keywords: "GST registration FAQ, GST registration questions, who needs GST registration, GST threshold",
    relatedCalculator: "gst-calculator",
    questions: [
      { question: "What is the GST registration threshold for goods?", answer: "Businesses supplying goods with aggregate annual turnover exceeding ₹40 lakh must register for GST. For special category states (North-East, Uttarakhand, HP, J&K), the threshold is ₹20 lakh." },
      { question: "What is the GST registration threshold for services?", answer: "Service providers must register when aggregate annual turnover exceeds ₹20 lakh. For special category states, the threshold is ₹10 lakh." },
      { question: "How long does GST registration take?", answer: "After submitting a complete application, GSTIN is typically issued within 3–7 working days. If additional documents are required, it may take up to 30 days. Aadhaar-authenticated applications are processed faster." },
      { question: "Can I voluntarily register for GST below the threshold?", answer: "Yes, voluntary registration is permitted even below the threshold. It's beneficial if your business primarily supplies to GST-registered businesses who can then claim ITC on your invoices." },
      { question: "What is aggregate turnover for GST registration?", answer: "Aggregate turnover includes all taxable supplies, exempt supplies, exports, and inter-state supplies across all business verticals in India under the same PAN. It excludes CGST, SGST, IGST, and inward supplies under RCM." },
      { question: "What happens if I don't register for GST despite being liable?", answer: "Non-registration when required is a serious offence. Penalties: ₹10,000 or 10% of tax due (whichever is higher). For deliberate evasion: 100% of tax due. Plus interest at 18% p.a. on unpaid tax." },
      { question: "Can I use the same GSTIN for multiple states?", answer: "No. GST registration is state-specific. If you operate in multiple states, you need separate GSTIN for each state where you have a business establishment making taxable supplies." },
      { question: "What is the format of GSTIN?", answer: "GSTIN is 15 characters: 2 digits (state code) + 10 characters (PAN) + 1 digit (entity number) + 'Z' + 1 checksum digit. Example: 27AABCS1234Z1Z5 (state 27 = Maharashtra)." },
      { question: "Can an e-commerce seller register for GST below the threshold?", answer: "E-commerce sellers must mandatorily register for GST regardless of turnover if they supply through any e-commerce operator. This is an exception to the threshold rule." },
      { question: "Is Aadhaar authentication mandatory for GST registration?", answer: "Aadhaar authentication is optional but recommended — it speeds up processing and can get you a provisional GSTIN within 3 days. Without Aadhaar authentication, physical verification of business premises may be required." },
    ],
  },
  {
    slug: "gst-returns-faq",
    title: "GST Return Filing FAQs: Your Top 20 Questions Answered",
    description: "Everything about GST return filing — GSTR-1, GSTR-3B, GSTR-9 due dates, late fees, how to file, and consequences of non-filing.",
    category: "GST Returns",
    silo: "gst",
    keywords: "GST return filing FAQ, GSTR-1 due date, GSTR-3B filing, GST return questions",
    relatedCalculator: "gst-calculator",
    questions: [
      { question: "What is the due date for GSTR-1?", answer: "Monthly filers (turnover >₹5Cr): 11th of the following month. QRMP filers (turnover ≤₹5Cr): 13th of the month after the quarter. Invoice Furnishing Facility (IFF): 13th of following month for B2B invoices." },
      { question: "What is the due date for GSTR-3B?", answer: "Monthly filers: 20th of the following month. QRMP scheme (turnover ≤₹5Cr): 22nd (for certain states) or 24th of the month after quarter." },
      { question: "What is the late fee for GSTR-3B?", answer: "₹50/day for returns with tax liability (₹25 CGST + ₹25 SGST). ₹20/day for nil returns. Maximum late fee: ₹5,000 per return. Plus interest at 18% p.a. on unpaid tax from the due date." },
      { question: "Can I file GSTR-1 after GSTR-3B?", answer: "No. GSTR-1 must be filed before GSTR-3B for the same period. Filing sequence matters: GSTR-1 first, then GSTR-3B. Failure to file GSTR-1 blocks buyers' ITC in GSTR-2B." },
      { question: "What is GSTR-2B?", answer: "GSTR-2B is an auto-populated ITC statement generated on the 14th of each month. It shows ITC available based on suppliers' GSTR-1 filings. It's a read-only document and the basis for ITC claims in GSTR-3B." },
      { question: "What is the GSTR-9 annual return?", answer: "GSTR-9 is the annual return consolidating all monthly/quarterly GST returns for the financial year. Due: 31 December of the following FY. Mandatory if turnover >₹2 crore." },
      { question: "Can I revise a filed GSTR-3B?", answer: "No, GSTR-3B cannot be revised once filed. Corrections are made in subsequent months. For sales (GSTR-1), amendments can be made using amendment tables in later GSTR-1 filings." },
      { question: "What happens if I don't file GSTR-3B for 6 months?", answer: "GST registration can be cancelled suo-motu if returns are not filed for 6 consecutive months. Reinstatement requires filing all pending returns and paying outstanding tax + late fees + interest." },
      { question: "How do I file nil GSTR-3B?", answer: "Log into gst.gov.in → File Returns → Select period → GSTR-3B → Click 'Yes' if all figures are nil → File with DSC or EVC. Nil returns can also be filed via SMS: send 'NIL 3B [GSTIN] [period]' to 14409." },
      { question: "What is the QRMP scheme?", answer: "QRMP (Quarterly Return Monthly Payment) allows businesses with turnover ≤₹5Cr to file GSTR-1 and GSTR-3B quarterly while paying tax monthly via PMT-06 challan. It reduces compliance frequency without deferring tax payment." },
    ],
  },
  {
    slug: "gst-itc-faq",
    title: "Input Tax Credit (ITC) FAQs: Rules, Eligibility & Claims",
    description: "Comprehensive FAQ on GST Input Tax Credit — eligibility, blocked credits, reversal rules, GSTR-2B reconciliation, and claiming ITC correctly.",
    category: "GST ITC",
    silo: "gst",
    keywords: "input tax credit FAQ, ITC eligibility, GST ITC rules, how to claim ITC",
    questions: [
      { question: "What is Input Tax Credit in GST?", answer: "ITC is the credit of GST paid on purchases (inputs) that can be used to offset GST payable on sales (output). It prevents the cascading effect of tax on tax. Net GST payable = Output GST − ITC." },
      { question: "What are the conditions to claim ITC?", answer: "Five conditions: 1) Must be a registered dealer. 2) Hold a valid tax invoice/debit note. 3) Goods/services must have been received. 4) Supplier must have filed returns and paid tax. 5) Claim within the due date (earlier of GSTR-3B for September of next FY or date of filing annual return)." },
      { question: "On which items is ITC blocked?", answer: "ITC is blocked under Section 17(5) on: motor vehicles (except for resale, transportation business, driving school), food and beverages, beauty treatments, health/fitness services, rent-a-cab, life and health insurance, club memberships, and construction of immovable property." },
      { question: "Can I claim ITC on capital goods?", answer: "Yes, ITC is available on capital goods (machinery, equipment) used for business. If the capital good is used partly for exempt supplies, ITC must be reversed proportionally. The common credit reversal rules under Rules 42 and 43 apply." },
      { question: "What happens to ITC if the supplier doesn't file returns?", answer: "If a supplier doesn't file GSTR-1, the invoice won't appear in your GSTR-2B. You cannot claim ITC on such invoices. ITC is now strictly linked to GSTR-2B — provisional ITC credit was withdrawn from January 2022." },
      { question: "Can ITC be claimed on GST paid under reverse charge?", answer: "Yes. GST paid under RCM is eligible for ITC in the same month the payment is made and declared in GSTR-3B, subject to general ITC eligibility conditions. The ITC cannot be used to pay the RCM tax — it must be paid in cash." },
      { question: "What is ITC reversal for non-payment within 180 days?", answer: "If a registered person does not pay the invoice amount to the supplier within 180 days of invoice date, the ITC claimed must be reversed (added back to output tax). Upon payment, ITC can be re-claimed." },
      { question: "How is ITC apportioned for mixed (taxable + exempt) supplies?", answer: "Common ITC must be apportioned: ITC for taxable supplies = (Taxable turnover / Total turnover) × Common ITC. The remainder is reversed. This is calculated annually and adjusted quarterly as per Rule 42." },
      { question: "Can I transfer ITC between GSTINs?", answer: "ITC can be transferred between GSTINs of the same PAN only in specific cases: business restructuring (merger, demerger, amalgamation, lease, transfer) via FORM GST ITC-02. Regular transfer between different GSTINs for the same entity is not allowed." },
      { question: "What is the ITC limit in GSTR-3B?", answer: "ITC claimed in GSTR-3B cannot exceed 110% of the credit reflected in GSTR-2B as of 14th of the filing month. Excess claims require matching with additional GSTR-2A entries. Over-claiming ITC invites scrutiny and demands with 100% penalty." },
    ],
  },

  // Income Tax FAQ Pages
  {
    slug: "income-tax-filing-faq",
    title: "Income Tax Return Filing FAQs 2025: Most Asked Questions",
    description: "Complete FAQ on ITR filing 2025 — who must file, due dates, which ITR form to use, documents needed, and how to verify your return.",
    category: "Income Tax",
    silo: "tax",
    keywords: "income tax return FAQ, ITR filing questions, how to file ITR, ITR due date 2025",
    relatedCalculator: "income-tax-calculator-2024-25",
    questions: [
      { question: "Who must file an income tax return in India?", answer: "ITR is mandatory for: individuals with income >₹2.5L (₹3L for new regime). Those with foreign assets or income. Persons with large deposits or high-value transactions. Companies and firms (regardless of profit). Anyone claiming refund." },
      { question: "What is the ITR filing due date for FY 2024-25?", answer: "For non-audit cases (most individuals): 31 July 2025. For tax audit cases: 31 October 2025. For companies (requiring audit): 31 October 2025. Belated return (after due date): up to 31 December 2025 with late fees." },
      { question: "Which ITR form should I use?", answer: "ITR-1 (Sahaj): Salaried individuals with total income ≤₹50L, one house property. ITR-2: Individuals with capital gains, multiple house properties, or foreign income/assets. ITR-3: Business or professional income. ITR-4 (Sugam): Presumptive business income under 44AD/44ADA." },
      { question: "What is the late filing fee for ITR?", answer: "₹5,000 if filed after due date (31 July) but before 31 December. ₹1,000 if total income ≤₹5L. Nil if income ≤₹2.5L. Additionally, interest under Section 234A at 1% per month on unpaid tax." },
      { question: "Is ITR mandatory if all tax is covered by TDS?", answer: "Not strictly mandatory for individuals with income ≤₹2.5L covered by TDS. However, filing ITR is essential for: claiming refund, availing loans/visas, carrying forward capital loss, and as income proof." },
      { question: "How do I verify my ITR?", answer: "6 ways to verify: 1) Aadhaar OTP (instant). 2) Net banking EVC. 3) Demat account EVC. 4) Bank account EVC. 5) Bank ATM EVC. 6) Send signed ITR-V to CPC Bangalore within 30 days. Unverified returns are treated as not filed." },
      { question: "What documents are needed to file ITR?", answer: "Form 16 (from employer), Form 26AS (TDS statement), AIS (Annual Information Statement), bank statements, investment proofs (80C), home loan certificate (24b), capital gains statements (broker), rent receipts (HRA)." },
      { question: "Can I file ITR without Form 16?", answer: "Yes. Calculate salary from pay slips, cross-verify TDS with Form 26AS and AIS. Contact your employer for Form 16 — they are legally required to issue it by 15 June. Use the pre-filled ITR on income tax portal which auto-fetches data from AIS." },
      { question: "What is revised return?", answer: "A revised return (under Section 139(5)) corrects mistakes in the originally filed ITR. Can be filed any time before: 3 months before end of assessment year, or completion of assessment (whichever is earlier). For AY 2025-26: before 31 December 2025." },
      { question: "What is ITR-V?", answer: "ITR-V (ITR Verification Form) is a one-page document generated when ITR is filed without DSC. It must be physically signed (blue pen) and sent to CPC, Bengaluru within 30 days via ordinary post. It's the acknowledgement of your ITR filing." },
    ],
  },
  {
    slug: "tds-faq",
    title: "TDS FAQs 2025: Rules, Rates, Forms & Compliance Questions",
    description: "Complete TDS FAQ for FY 2025-26 — TDS rates for different sections, due dates for deposit, TDS returns, Form 16, 16A, Form 15G/H, and certificates.",
    category: "TDS",
    silo: "tax",
    keywords: "TDS FAQ, TDS questions, TDS deduction rules, Form 15G 15H, TDS certificate",
    relatedCalculator: "tds-calculator",
    questions: [
      { question: "What is the TDS rate on professional fees (Section 194J)?", answer: "10% for professional services (doctors, lawyers, CAs, engineers, consultants). 2% for technical services (not exclusively professional), royalties under ₹30L threshold, and call center services. Threshold: ₹30,000 per year per payee." },
      { question: "What is the TDS rate on salary (Section 192)?", answer: "TDS on salary is deducted as per income tax slabs applicable to the employee's estimated annual income. The employer computes projected income, applies the applicable rate, and deducts monthly TDS accordingly. No flat rate — it varies by slab." },
      { question: "When must TDS be deposited to the government?", answer: "For March deductions: 30 April. For all other months: 7th of the following month. Government deductors must deposit on the same day as deduction. Delay in deposit attracts interest at 1.5% per month." },
      { question: "What is Form 15G and Form 15H?", answer: "These are declarations to prevent TDS deduction when income is below taxable limit. Form 15G: for individuals below 60 years with total income below basic exemption. Form 15H: for senior citizens (60+) with nil tax liability. Submit to the bank/deductor at the start of the financial year." },
      { question: "What is the TDS threshold for bank FD interest?", answer: "TDS on FD interest is deducted if aggregate interest across all deposits in the same bank exceeds ₹40,000/year (₹50,000 for senior citizens). Rate: 10% with PAN, 20% without PAN." },
      { question: "What is TAN and who needs it?", answer: "TAN (Tax Deduction Account Number) is a 10-digit alphanumeric number required by every person who deducts or collects tax at source. Required for deducting TDS, filing TDS returns, and issuing TDS certificates. Apply through NSDL portal." },
      { question: "What is the due date for quarterly TDS returns?", answer: "Q1 (Apr–Jun): 31 July. Q2 (Jul–Sep): 31 October. Q3 (Oct–Dec): 31 January. Q4 (Jan–Mar): 31 May. Forms: 24Q (salary TDS), 26Q (other than salary), 27Q (NRI payments), 27EQ (TCS)." },
      { question: "Can TDS be avoided on professional fees?", answer: "No, TDS cannot be avoided by the deductor if payment exceeds the threshold. The recipient can apply for Lower Deduction Certificate (Section 197) from the tax officer, which allows the deductor to deduct TDS at a lower or nil rate." },
      { question: "What is Form 26AS?", answer: "Form 26AS is the annual tax statement (now called Annual Tax Statement) showing all TDS/TCS deducted on your behalf, advance tax paid, self-assessment tax paid, and other tax-related transactions. Access via income tax portal (incometax.gov.in) with your PAN login." },
      { question: "What is the penalty for not deducting TDS?", answer: "For failing to deduct TDS: 100% of the tax that should have been deducted, plus interest at 1% per month from the date payment was made to the date of actual deduction. Additionally, the expense may be disallowed in income tax computation (Section 40(a)(ia))." },
    ],
  },

  // Finance FAQs
  {
    slug: "home-loan-faq",
    title: "Home Loan FAQs 2025: Everything About Housing Loan in India",
    description: "Comprehensive home loan FAQ — interest rates, eligibility, EMI calculation, tax benefits, prepayment, balance transfer, and PMAY subsidy.",
    category: "Loans",
    silo: "loans",
    keywords: "home loan FAQ, housing loan questions India, home loan EMI FAQ, home loan interest rate",
    questions: [
      { question: "What is the current home loan interest rate in India (2025)?", answer: "Home loan rates range from 8.40% (Bank of Baroda, BOI) to 9.50%+ for regular applicants. SBI home loan: 8.50–9.15%. HDFC: 8.70–9.35%. ICICI: 8.75–9.30%. Rates are floating and reset periodically based on repo rate." },
      { question: "How is home loan EMI calculated?", answer: "EMI = P × r × (1+r)^n / [(1+r)^n − 1]. P = loan amount, r = monthly rate (annual/12/100), n = months. Example: ₹50L at 8.5% for 20 years → EMI = ₹43,391/month. Total payment = ₹1.04Cr." },
      { question: "What is the maximum home loan amount I can get?", answer: "Most banks lend up to 75–90% of property value (LTV ratio). Based on income: typically 60 times your net monthly income (for 30-year tenure). Self-employed income at 3× annual net profit. FOIR (Fixed Obligation to Income Ratio) should be ≤50%." },
      { question: "What documents are needed for home loan?", answer: "KYC: Aadhaar, PAN. Income proof: 3 months salary slips, 6 months bank statements, Form 16. Property documents: sale agreement, NOC from builder/society, approved building plan, property tax receipts. For self-employed: 2 years IT returns, P&L statement." },
      { question: "What are the tax benefits on home loan?", answer: "Section 24(b): Deduct interest paid up to ₹2L (self-occupied, old regime). No limit for let-out property. Section 80C: Principal repayment up to ₹1.5L (within 80C cap, old regime). Both available from first EMI year." },
      { question: "Can I prepay my home loan without penalty?", answer: "For floating rate home loans: banks cannot charge prepayment penalty (RBI directive). For fixed rate loans: penalty of 2–5% on prepaid amount. NHB-regulated home finance companies: no prepayment penalty on floating rate loans." },
      { question: "What is home loan balance transfer?", answer: "Balance transfer (BT) moves your outstanding home loan to another lender offering a lower interest rate. Benefits: lower EMI/tenure, better service. Costs: processing fee at new bank (0.25–1%), MOD charges, technical and legal fees. BT is beneficial if rate difference ≥0.5% and remaining tenure ≥3 years." },
      { question: "How does PMAY subsidy work?", answer: "PMAY provides Credit Linked Subsidy Scheme (CLSS) to EWS (≤₹3L annual income) and LIG (₹3–6L) categories. Subsidy: 6.5% on loan up to ₹6L. NPV of subsidy = ~₹2.67L upfront credit. Reduces effective EMI. Apply through listed PLI banks." },
      { question: "What is the difference between fixed and floating rate home loan?", answer: "Fixed rate: EMI stays constant for the fixed period (usually 2–5 years, then resets). Typically 1–1.5% higher than floating. Floating rate: linked to repo rate, resets when RBI changes policy rate. Currently, floating rate loans are more common and generally cheaper over the long term." },
      { question: "What is the minimum CIBIL score for home loan?", answer: "Most banks require 700+ CIBIL score. 750+ gets you the best rates. Below 700: higher rate or rejection. Build score: pay all EMIs and credit card bills on time, keep credit utilisation below 30%, don't apply to multiple lenders simultaneously." },
    ],
  },

  // Salary FAQs
  {
    slug: "salary-components-faq",
    title: "Salary Components FAQ: CTC, In-Hand, HRA, PF Explained",
    description: "Complete FAQ on salary components in India — CTC structure, in-hand salary, HRA, PF, professional tax, variable pay, and salary negotiation.",
    category: "Salary",
    silo: "salary",
    keywords: "salary components FAQ, CTC in-hand calculation, HRA FAQ, PF deduction questions",
    relatedCalculator: "hra-calculator",
    questions: [
      { question: "What is the difference between CTC and in-hand salary?", answer: "CTC (Cost to Company) is the total annual cost including employer PF contribution, gratuity provision, and benefits. In-hand salary = Gross Salary − Employee PF (12% of basic) − Professional Tax − TDS. Typically in-hand is 65–75% of CTC after all deductions." },
      { question: "What are the standard salary components?", answer: "Basic Salary (40–50% of CTC), HRA (40–50% of basic), Special Allowance (variable), LTA (1 month basic/year), Medical Allowance, Performance Bonus, Employer PF, Gratuity Provision, and sometimes ESOP/RSU." },
      { question: "How is EPF contribution calculated?", answer: "Employee contribution: 12% of Basic Salary. Employer contribution: 12% of Basic (8.33% → EPS, 3.67% → EPF). Both are subject to a wage ceiling of ₹15,000 (₹1,800 max employer/employee PF on ₹15,000). If salary >₹15,000, contributions are still calculated on actual salary unless the employee is an existing member." },
      { question: "What is professional tax and who pays it?", answer: "Professional Tax is a state-level tax on salaried employees. Deducted by employer from salary. Maharashtra: ₹200/month (₹2,400/year, max). Karnataka: up to ₹2,500/year. Other states have different slabs. Deductible from taxable income under the old tax regime." },
      { question: "What is LTA and how is it claimed?", answer: "LTA (Leave Travel Allowance) is exempt from tax for domestic travel (rail, air, road) to any place in India for self and family (spouse, children, dependent parents and siblings). Exemption available for 2 journeys in a block of 4 years. Current block: 2022–25. Submit travel bills to employer." },
      { question: "How much HRA is tax-exempt?", answer: "HRA exempt = minimum of: (1) Actual HRA received, (2) Rent paid − 10% of Basic, (3) 50% of Basic (metro) or 40% (non-metro). Example: Basic ₹50K, HRA ₹20K, rent ₹18K, metro city → exempt = min(₹20K, ₹13K, ₹25K) = ₹13K/month." },
      { question: "Can I opt for new tax regime if I have HRA?", answer: "Yes, you can opt for new tax regime even if you receive HRA, but HRA exemption is not available under the new regime. Calculate tax under both regimes considering your HRA amount to decide which saves more tax." },
      { question: "What is the gratuity eligibility condition?", answer: "Gratuity is payable after completing 5 years of continuous service (or 4 years + 240 days for factories). Formula: (Basic salary / 26) × 15 × years of service. Maximum tax-free gratuity: ₹20 lakh." },
      { question: "What is the 7th Pay Commission salary structure?", answer: "The 7th Pay Commission (2016) revised Central Government salaries. Pay Matrix: Level 1 (₹18,000–56,900) to Level 18 (₹2,50,000 fixed for Cabinet Secretary). Fitment factor: 2.57× from 6th CPC basic pay. HRA: 27% (X cities), 18% (Y), 9% (Z)." },
      { question: "How can I increase my in-hand salary without increasing CTC?", answer: "Restructure salary: reduce basic (less EPF deduction), increase allowances (conveyance, food, telephone — partially exempt). Shift variable pay to flexible benefit plan (NPS, sodexo coupons). Use employer NPS contribution under 80CCD(2) — not part of 80C limit and not counted in CTC broadly." },
    ],
  },
];

export function getFAQPageBySlug(slug: string): FAQPage | undefined {
  return FAQ_PAGES.find((f) => f.slug === slug);
}

export function getFAQPagesBySilo(silo: string): FAQPage[] {
  return FAQ_PAGES.filter((f) => f.silo === silo);
}

export function getRelatedFAQPages(slug: string, count = 3): FAQPage[] {
  const current = getFAQPageBySlug(slug);
  if (!current) return FAQ_PAGES.slice(0, count);
  return FAQ_PAGES.filter(
    (f) => f.slug !== slug && (f.silo === current.silo || f.category === current.category)
  ).slice(0, count);
}

export function getAllFAQSlugs(): string[] {
  return FAQ_PAGES.map((f) => f.slug);
}
