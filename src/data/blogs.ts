export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  silo: string;
  keywords: string;
  publishDate: string;
  readTime: number;
  relatedCalculator?: string;
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
    conclusion: string;
  };
};

export const BLOG_SILOS = [
  "gst", "tax", "finance", "investment", "business",
  "loans", "accounting", "salary", "government-schemes", "banking"
] as const;

export type BlogSilo = typeof BLOG_SILOS[number];

export const BLOGS: BlogPost[] = [
  // ── GST SILO ──────────────────────────────────────────────────────────────
  {
    slug: "what-is-gst-india",
    title: "What is GST? Complete Guide to Goods and Services Tax in India",
    description: "Understand GST (Goods and Services Tax) in India — its meaning, history, types, rates, and how it replaced the previous indirect tax system.",
    category: "GST Basics",
    silo: "gst",
    keywords: "what is GST, GST meaning, goods and services tax India, GST explained",
    publishDate: "2025-01-01",
    readTime: 8,
    relatedCalculator: "gst-calculator",
    content: {
      intro: "GST (Goods and Services Tax) is India's comprehensive indirect tax that unified dozens of central and state levies into one seamless system. Launched on 1 July 2017, it replaced taxes like VAT, service tax, excise duty, and octroi.",
      sections: [
        { heading: "History of GST in India", body: "The journey began in 2000 when the Vajpayee government first proposed GST. After 17 years of deliberation, the Constitution (101st Amendment) Act, 2016 paved the way for the GST Council, and the new tax went live on midnight of 30 June 2017." },
        { heading: "Types of GST: CGST, SGST, IGST, UTGST", body: "CGST (Central GST) and SGST (State GST) apply to transactions within a state, each accounting for half the total rate. IGST (Integrated GST) applies to inter-state supply and imports. UTGST applies to Union Territories without a legislature." },
        { heading: "GST Rate Slabs", body: "India uses four primary slabs: 5% for essentials, 12% for processed goods, 18% for most services and electronics, and 28% for luxury items. Special rates of 0%, 0.25%, and 3% apply to specific categories like gold and rough diamonds." },
        { heading: "GST Registration Threshold", body: "Businesses with aggregate annual turnover exceeding ₹40 lakh (₹20 lakh for special category states) for goods must register. Service providers must register if turnover exceeds ₹20 lakh (₹10 lakh for North-Eastern states)." },
        { heading: "Benefits of GST", body: "GST eliminated the cascading 'tax on tax' effect. It created a unified national market, simplified compliance through a single return system, boosted Input Tax Credit availability, and improved tax collection efficiency." },
      ],
      conclusion: "GST transformed India's indirect tax landscape. Whether you're a business owner, freelancer, or consumer, understanding GST helps you stay compliant and manage finances better. Use our free GST Calculator to compute CGST, SGST, and IGST instantly.",
    },
  },
  {
    slug: "gst-formula-explained",
    title: "GST Formula Explained: How to Calculate GST Step by Step",
    description: "Learn the exact GST formula for exclusive and inclusive calculations. Understand how CGST, SGST, and IGST are computed with worked examples.",
    category: "GST Basics",
    silo: "gst",
    keywords: "GST formula, how to calculate GST, GST calculation formula, CGST SGST calculation",
    publishDate: "2025-01-05",
    readTime: 6,
    relatedCalculator: "gst-calculator",
    content: {
      intro: "The GST formula is straightforward once you know whether the price is GST-exclusive (base price) or GST-inclusive (final price). Here's the complete breakdown.",
      sections: [
        { heading: "Exclusive GST Formula", body: "When price does not include GST: GST Amount = (Base Price × GST Rate) ÷ 100. Total Price = Base Price + GST Amount. Example: ₹10,000 at 18% → GST = ₹1,800 → Total = ₹11,800." },
        { heading: "Inclusive GST Formula (Reverse GST)", body: "When price already includes GST: Base Price = (Inclusive Price × 100) ÷ (100 + GST Rate). GST Amount = Inclusive Price − Base Price. Example: ₹11,800 at 18% → Base = ₹10,000 → GST = ₹1,800." },
        { heading: "CGST and SGST Split", body: "For intra-state transactions, GST is split equally. CGST = GST Amount ÷ 2. SGST = GST Amount ÷ 2. For ₹1,800 GST at 18%: CGST = ₹900, SGST = ₹900." },
        { heading: "IGST for Inter-State", body: "For inter-state transactions, the full GST becomes IGST. IGST = Base Price × Rate ÷ 100. No split occurs — the centre collects the full amount and shares with the destination state." },
        { heading: "Worked Examples at All Rates", body: "5%: ₹5,000 → GST ₹250, Total ₹5,250. 12%: ₹5,000 → GST ₹600, Total ₹5,600. 18%: ₹5,000 → GST ₹900, Total ₹5,900. 28%: ₹5,000 → GST ₹1,400, Total ₹6,400." },
      ],
      conclusion: "Mastering the GST formula ensures accurate invoicing, correct ITC claims, and hassle-free compliance. Bookmark our GST Calculator to skip the manual math every time.",
    },
  },
  {
    slug: "gst-rates-india-2025",
    title: "Complete GST Rate List India 2025: All Goods and Services",
    description: "Comprehensive GST rate list for 2025. Find GST rates for electronics, food, services, vehicles, medicines, and hundreds of other categories.",
    category: "GST Rates",
    silo: "gst",
    keywords: "GST rate list 2025, GST rates India, GST rate for goods, GST rate for services",
    publishDate: "2025-01-10",
    readTime: 10,
    relatedCalculator: "gst-calculator",
    content: {
      intro: "India's GST rate structure covers thousands of goods and services across five slabs: 0%, 5%, 12%, 18%, and 28%, plus special rates for gold (3%) and rough diamonds (0.25%). Here's your definitive 2025 reference.",
      sections: [
        { heading: "0% GST Items", body: "Essential goods are exempt: fresh fruits and vegetables, milk, eggs, meat, fish, rice, wheat, bread, salt, and educational services. Most agricultural produce below processing threshold attracts 0% GST." },
        { heading: "5% GST Items", body: "Packaged food items, sugar, tea, coffee, edible oils, domestic LPG, fertilizers, tractors, life-saving drugs, economy class airline tickets, and small restaurant services fall in the 5% bracket." },
        { heading: "12% GST Items", body: "Processed foods, fruit juices, butter, cheese, ghee, umbrellas, medicines and pharmaceuticals, hotel accommodation below ₹7,500/night, business class air travel, and mobile phones above ₹12,000 attract 12% GST." },
        { heading: "18% GST Items", body: "The most common slab. Includes most services (IT, telecom, financial), electronics, consumer durables, hair oil, toothpaste, soaps, ice cream, pasta, biscuits above ₹100/kg, and restaurant services (AC restaurants)." },
        { heading: "28% GST Items", body: "Luxury and demerit goods: cars, motorcycles, aerated drinks, tobacco, pan masala, cement, large TVs above 32 inches, washing machines above 10kg, dish washers, and high-end consumer electronics." },
      ],
      conclusion: "GST rates are periodically revised by the GST Council. Always verify with the latest CBIC notifications before finalising invoices. Our product-specific pages provide HSN codes and detailed breakdowns.",
    },
  },
  {
    slug: "gst-calculation-examples",
    title: "GST Calculation Examples: 20 Real-World Scenarios Solved",
    description: "Step-by-step GST calculation examples for businesses, freelancers, and consumers. Learn with real-world invoices, services, and product scenarios.",
    category: "GST Basics",
    silo: "gst",
    keywords: "GST calculation examples, GST example problems, how to calculate GST on invoice",
    publishDate: "2025-01-15",
    readTime: 12,
    relatedCalculator: "gst-calculator",
    content: {
      intro: "Nothing beats real examples for understanding GST. We've compiled 20 practical scenarios covering products, services, invoices, and reverse calculations.",
      sections: [
        { heading: "Example 1: IT Services at 18%", body: "Invoice value: ₹50,000. GST @18% = ₹9,000. CGST = ₹4,500, SGST = ₹4,500 (intra-state). Total invoice = ₹59,000." },
        { heading: "Example 2: Restaurant Bill at 5%", body: "Food bill: ₹1,200. GST @5% = ₹60. Total = ₹1,260. (AC restaurant: 5% without ITC; non-AC: 5%)." },
        { heading: "Example 3: Car Purchase at 28%", body: "Small car (≤4m, petrol): ₹7,00,000. GST @28% = ₹1,96,000. Plus compensation cess. Total outgo ~₹9.5L including all levies." },
        { heading: "Example 4: Reverse GST on Laptop", body: "MRP ₹85,000 (GST inclusive at 18%). Base = 85,000 × 100/118 = ₹72,034. GST = ₹12,966. CGST = SGST = ₹6,483 each." },
        { heading: "Example 5: Inter-State Services", body: "Pune designer invoices Mumbai client ₹30,000. IGST @18% = ₹5,400. No CGST/SGST split — IGST goes to centre. Total = ₹35,400." },
      ],
      conclusion: "These examples cover the most common GST scenarios. For instant calculations across all slabs, use our free online GST Calculator — no sign-up required.",
    },
  },
  {
    slug: "common-gst-mistakes",
    title: "10 Common GST Mistakes Businesses Make (And How to Avoid Them)",
    description: "Avoid costly GST errors. Learn the 10 most common GST mistakes in India — wrong rates, missed ITC, late filing, and more — with expert tips.",
    category: "GST Compliance",
    silo: "gst",
    keywords: "GST mistakes, common GST errors, GST compliance issues, GST penalty India",
    publishDate: "2025-01-20",
    readTime: 7,
    relatedCalculator: "gst-calculator",
    content: {
      intro: "GST compliance errors can lead to penalties, interest, and ITC denial. Here are the 10 mistakes Indian businesses most commonly make — and exactly how to avoid them.",
      sections: [
        { heading: "Mistake 1: Wrong GST Rate Applied", body: "Applying 18% where 12% applies (or vice versa) creates mismatches in GSTR-1 and GSTR-3B. Always verify HSN/SAC codes against the rate schedule before invoicing." },
        { heading: "Mistake 2: Missing Invoice Details", body: "GST invoices must include GSTIN, HSN/SAC code, place of supply, rate, and tax amount. Incomplete invoices can result in ITC rejection for your buyer." },
        { heading: "Mistake 3: Late GSTR-1 Filing", body: "Late filing of GSTR-1 prevents buyers from claiming ITC. The late fee is ₹50/day (₹20 for nil returns), capped at ₹10,000. Always file by the 11th of the next month." },
        { heading: "Mistake 4: Not Reconciling GSTR-2A", body: "Claiming ITC without matching with GSTR-2A/2B leads to notices. Reconcile monthly to ensure only eligible ITC is claimed." },
        { heading: "Mistake 5: Treating Export as Taxable Supply", body: "Zero-rated supplies (exports) should be declared under LUT or with IGST. Treating them as domestic supplies creates unnecessary tax liability." },
      ],
      conclusion: "Staying GST-compliant requires accurate rate application, timely filing, and disciplined reconciliation. A qualified CA can help you set up systems to avoid these pitfalls permanently.",
    },
  },
  {
    slug: "gst-registration-guide",
    title: "GST Registration Guide 2025: Step-by-Step Process Online",
    description: "Complete GST registration guide for India 2025. Learn eligibility, documents required, online process on GST portal, and timeline for GSTIN.",
    category: "GST Registration",
    silo: "gst",
    keywords: "GST registration, how to register for GST, GST registration process, GSTIN registration",
    publishDate: "2025-02-01",
    readTime: 9,
    relatedCalculator: "gst-calculator",
    content: {
      intro: "GST registration is mandatory for businesses above threshold limits. Here's the complete step-by-step guide to register online on the GST portal and get your GSTIN.",
      sections: [
        { heading: "Who Must Register for GST?", body: "Mandatory registration: businesses with >₹40L turnover (goods), >₹20L (services), inter-state suppliers, e-commerce operators, and those required to pay tax under reverse charge. Voluntary registration is allowed even below threshold." },
        { heading: "Documents Required", body: "PAN card, Aadhaar card, business registration proof, address proof of business, bank account details, digital signature, and photographs of authorised signatory." },
        { heading: "Step-by-Step Registration Process", body: "1. Visit gst.gov.in and click 'Register Now'. 2. Select taxpayer type and fill Part A (PAN, email, mobile). 3. Verify OTP and get TRN. 4. Fill Part B with business details, directors, bank details. 5. Upload documents. 6. Submit with DSC/EVC. 7. Receive ARN within 15 minutes. 8. Get GSTIN within 3–7 working days." },
        { heading: "What is GSTIN?", body: "GSTIN is a 15-character GST Identification Number: first 2 digits = state code, next 10 = PAN, 13th = entity type, 14th = Z (default), 15th = checksum." },
        { heading: "After Registration", body: "Display GSTIN on all invoices, letterheads, and business premises. File GSTR-1 and GSTR-3B monthly. Maintain accounts for 72 months from the due date of annual return." },
      ],
      conclusion: "GST registration is the first step towards formal business compliance. Once registered, you can issue tax invoices, claim ITC, and operate nationwide. Our GST calculators help you compute tax on every transaction.",
    },
  },
  {
    slug: "input-tax-credit-guide",
    title: "Input Tax Credit (ITC) Guide: Rules, Eligibility & How to Claim",
    description: "Complete guide to Input Tax Credit under GST. Learn ITC eligibility, blocked credits, conditions to claim, and reconciliation process for 2025.",
    category: "GST Compliance",
    silo: "gst",
    keywords: "input tax credit GST, ITC claim, GST input tax credit rules, how to claim ITC",
    publishDate: "2025-02-10",
    readTime: 10,
    relatedCalculator: "gst-calculator",
    content: {
      intro: "Input Tax Credit (ITC) is the backbone of GST — it allows businesses to deduct the GST paid on purchases from the GST collected on sales, avoiding the cascade effect.",
      sections: [
        { heading: "What is Input Tax Credit?", body: "ITC is the credit available for GST paid on inputs (raw materials, services) used for making outward taxable supplies. It reduces your net GST liability: Net Tax = Output GST − ITC." },
        { heading: "Conditions to Claim ITC", body: "1. You must be a registered dealer. 2. Hold a valid tax invoice. 3. Goods/services must be received. 4. Supplier must have filed returns and paid tax. 5. Claim within the due date (earlier of: September GSTR-3B of next FY, or date of filing annual return)." },
        { heading: "Blocked Credits (Section 17(5))", body: "ITC is NOT available on: motor vehicles (except for specified use), food and beverages, beauty treatments, health services, club memberships, rent-a-cab, insurance (except for employees), and construction of immovable property." },
        { heading: "Reversal of ITC", body: "ITC must be reversed if: payment to supplier is not made within 180 days, goods/services are used for exempt supplies, or on capital goods sold before useful life ends." },
        { heading: "Claiming ITC in GSTR-3B", body: "Report eligible ITC in Table 4 of GSTR-3B. Cross-verify with GSTR-2B (auto-populated from supplier GSTR-1). Excess ITC claimed without GSTR-2B matching attracts 100% penalty plus interest at 18% p.a." },
      ],
      conclusion: "ITC is your biggest GST benefit. Proper reconciliation and timely filing are key to maximising ITC claims. Consider using accounting software that auto-reconciles GSTR-2B for accurate claims.",
    },
  },
  {
    slug: "gst-return-filing-guide",
    title: "GST Return Filing Guide 2025: GSTR-1, GSTR-3B, GSTR-9 Explained",
    description: "Complete guide to GST return filing in India 2025. Understand GSTR-1, GSTR-3B, GSTR-9 due dates, penalties, and step-by-step filing process.",
    category: "GST Returns",
    silo: "gst",
    keywords: "GST return filing, GSTR-1, GSTR-3B, GST return due dates, how to file GST return",
    publishDate: "2025-02-15",
    readTime: 11,
    relatedCalculator: "gst-calculator",
    content: {
      intro: "GST return filing is a monthly/quarterly obligation for all registered businesses. Understanding the types of returns, due dates, and penalties is essential for compliance.",
      sections: [
        { heading: "GSTR-1: Outward Supplies", body: "Monthly (turnover >₹5Cr): 11th of next month. Quarterly (turnover ≤₹5Cr, opted QRMP): 13th of month after quarter. Contains: B2B invoices, B2C sales, credit/debit notes, advances received." },
        { heading: "GSTR-3B: Monthly Summary", body: "Monthly return summarising outward supplies, ITC claimed, and net tax payable. Due: 20th of next month (monthly filers). Late fee: ₹50/day for tax liability, ₹20/day for nil returns. Interest: 18% p.a. on late payment." },
        { heading: "GSTR-9: Annual Return", body: "Summary of all monthly/quarterly returns for the financial year. Due: 31 December of next FY. Mandatory if turnover >₹2Cr. Self-certified audit (GSTR-9C) if turnover >₹5Cr." },
        { heading: "GSTR-2B: Auto-Populated ITC", body: "Read-only statement auto-generated on 14th of each month. Shows ITC available based on suppliers' GSTR-1 filings. Use to verify eligible ITC before filing GSTR-3B." },
        { heading: "Penalties for Non-Filing", body: "Late fee: ₹100/day per act (CGST + SGST = ₹200/day), max ₹5,000. Non-filers: cancelled registration after 6 months of non-filing. Interest: 18% p.a. on tax due." },
      ],
      conclusion: "Consistent and timely return filing protects your business from penalties, preserves your buyers' ITC, and maintains a good GST compliance rating. Set calendar reminders for all due dates.",
    },
  },
  {
    slug: "cgst-vs-sgst-vs-igst",
    title: "CGST vs SGST vs IGST: Key Differences Explained Simply",
    description: "Understand the difference between CGST, SGST, and IGST in India. Learn when each applies, who collects it, and how to identify them on invoices.",
    category: "GST Basics",
    silo: "gst",
    keywords: "CGST vs SGST vs IGST, difference between CGST SGST IGST, IGST meaning",
    publishDate: "2025-02-20",
    readTime: 6,
    relatedCalculator: "gst-calculator",
    content: {
      intro: "The three components of GST — CGST, SGST, and IGST — often confuse newcomers. Here's the clearest breakdown of each, when they apply, and how they appear on invoices.",
      sections: [
        { heading: "CGST: Central Goods and Services Tax", body: "CGST is levied by the central government on intra-state supply (within the same state). It is always equal to SGST. Governed by the CGST Act, 2017. Revenue goes to the Centre." },
        { heading: "SGST: State Goods and Services Tax", body: "SGST is levied by the state government on intra-state supply. Equal to CGST. Each state has its own SGST Act mirroring the CGST Act. Revenue goes to the respective state." },
        { heading: "IGST: Integrated Goods and Services Tax", body: "IGST applies to inter-state supply and imports. It equals the total GST rate (no split). The Centre collects IGST and then shares the state portion with the destination state." },
        { heading: "How to Identify on Invoice", body: "Intra-state invoice shows two lines: CGST @9% + SGST @9% = 18% total. Inter-state invoice shows one line: IGST @18% only. Never will an invoice show both IGST and CGST/SGST simultaneously." },
        { heading: "ITC Cross-Utilisation Rules", body: "IGST credit can be used against IGST, CGST, then SGST (in that order). CGST credit used against CGST first, then IGST. SGST credit used against SGST first, then IGST. CGST and SGST cannot be used against each other." },
      ],
      conclusion: "Correct identification of CGST, SGST, and IGST ensures proper invoice issuance, correct ITC utilisation, and accurate return filing. Our GST Calculator automatically splits the applicable taxes.",
    },
  },
  {
    slug: "gst-e-invoice-guide",
    title: "GST E-Invoice Guide 2025: Applicability, Process & Benefits",
    description: "Everything about GST e-invoicing in India 2025. Learn who must generate e-invoices, the IRP process, QR codes, and how it impacts your business.",
    category: "GST Compliance",
    silo: "gst",
    keywords: "GST e-invoice, e-invoicing under GST, IRP portal, e-invoice applicability 2025",
    publishDate: "2025-03-01",
    readTime: 8,
    relatedCalculator: "gst-invoice-number-generator",
    content: {
      intro: "E-invoicing under GST requires businesses above the threshold to report B2B invoices to the Invoice Registration Portal (IRP) and receive a unique IRN before sharing with buyers.",
      sections: [
        { heading: "Who Must Generate E-Invoices?", body: "From 1 August 2023: all registered businesses with aggregate turnover exceeding ₹5 crore in any FY from 2017-18 onwards. This covers B2B invoices, B2B credit notes, debit notes, and export invoices." },
        { heading: "The E-Invoice Process", body: "1. Generate invoice in your accounting software. 2. Upload JSON to IRP (einvoice1.gst.gov.in). 3. IRP validates, deduplicates, and digitally signs. 4. IRP assigns IRN (unique 64-character hash). 5. IRP generates QR code. 6. Share signed e-invoice with buyer." },
        { heading: "What is IRN?", body: "Invoice Reference Number (IRN) is a 64-character unique identifier generated for each e-invoice by the IRP. It's generated from: GSTIN of supplier + FY + document number + document type." },
        { heading: "E-Invoice and GSTR-1", body: "E-invoice data is auto-populated into GSTR-1, reducing manual data entry. Buyers can see the invoice in their GSTR-2B immediately after reporting, enabling faster ITC." },
        { heading: "Penalties for Non-Compliance", body: "Failure to generate e-invoice: penalty equal to 100% of tax due or ₹10,000, whichever is higher. The buyer cannot claim ITC on a non-compliant invoice." },
      ],
      conclusion: "E-invoicing streamlines GST compliance, reduces errors, and accelerates ITC for your buyers. If your turnover exceeds ₹5 crore, ensure your accounting software is IRP-integrated today.",
    },
  },

  // ── TAX SILO ──────────────────────────────────────────────────────────────
  {
    slug: "income-tax-new-vs-old-regime",
    title: "New vs Old Tax Regime 2025-26: Which is Better For You?",
    description: "Compare new and old income tax regimes for FY 2025-26. Understand tax slabs, deductions, and which regime saves more tax for your income level.",
    category: "Income Tax",
    silo: "tax",
    keywords: "new vs old tax regime, new tax regime 2025, old tax regime vs new, which tax regime is better",
    publishDate: "2025-01-05",
    readTime: 9,
    relatedCalculator: "income-tax-calculator-2024-25",
    content: {
      intro: "From FY 2023-24, the new tax regime became the default. But is it always better? The answer depends on your income, investments, and deductions. Here's the definitive comparison.",
      sections: [
        { heading: "New Tax Regime Slabs (FY 2025-26)", body: "₹0–3L: Nil. ₹3–7L: 5%. ₹7–10L: 10%. ₹10–12L: 15%. ₹12–15L: 20%. Above ₹15L: 30%. Plus 4% health and education cess. Standard deduction of ₹75,000 available." },
        { heading: "Old Tax Regime Slabs (FY 2025-26)", body: "₹0–2.5L: Nil. ₹2.5–5L: 5%. ₹5–10L: 20%. Above ₹10L: 30%. Plus 4% cess. Allows deductions under 80C (₹1.5L), 80D (₹25,000), HRA, LTA, home loan interest, and standard deduction of ₹50,000." },
        { heading: "When New Regime Wins", body: "New regime is better if you have minimal deductions/investments, are early in career with low 80C investments, or have income above ₹15L where lower slabs up to ₹12L in new regime provide relief." },
        { heading: "When Old Regime Wins", body: "Old regime wins if you invest ₹1.5L in 80C, pay home loan interest >₹2L, claim HRA, and have other deductions totalling >₹3–4L. Generally beneficial for income ₹8–15L with full deductions." },
        { heading: "Breakeven Analysis", body: "For ₹10L income: New regime tax ≈ ₹54,600. Old regime with ₹3.5L deductions: ≈ ₹54,600. For ₹15L income: New regime ≈ ₹1,17,000. Old with full deductions: ≈ ₹1,02,000. Old wins here." },
      ],
      conclusion: "There's no universal answer — it depends on your specific deductions. Use our Income Tax Calculator to compute both regimes and choose the one with lower liability before filing.",
    },
  },
  {
    slug: "tds-rates-2025",
    title: "TDS Rates for FY 2025-26: Complete Section-wise Rate Chart",
    description: "Complete TDS rate chart for FY 2025-26. Find TDS rates for salary, professional fees, rent, interest, contractor payments, and all major sections.",
    category: "TDS",
    silo: "tax",
    keywords: "TDS rates 2025, TDS rate chart, TDS deduction rates, section 194 TDS rates",
    publishDate: "2025-01-10",
    readTime: 8,
    relatedCalculator: "tds-calculator",
    content: {
      intro: "TDS (Tax Deducted at Source) rates vary by payment type and section. Here's the authoritative rate chart for FY 2025-26 with threshold limits and key conditions.",
      sections: [
        { heading: "Section 192: Salary", body: "Rate: As per income tax slab. Threshold: As per basic exemption limit. Employer deducts TDS monthly based on projected annual salary less declared investments. No surcharge for deduction purposes if salary ≤₹50L." },
        { heading: "Section 194C: Contractor Payments", body: "Single payment threshold: ₹30,000. Annual threshold: ₹1,00,000. Rate: 1% (individual/HUF), 2% (others). Common for work contracts, catering, advertising, and transport." },
        { heading: "Section 194J: Professional/Technical Fees", body: "Threshold: ₹30,000 per year. Rate: 10% (professional services like CA, doctor, lawyer, engineer). 2% for technical services, royalty, and call center work." },
        { heading: "Section 194I: Rent", body: "Threshold: ₹2,40,000 per year. Rate: 10% (land, building, furniture). 2% (plant and machinery). TDS must be deducted before paying rent each month." },
        { heading: "Section 194A: Interest (Other than Bank)", body: "Threshold: ₹5,000. Rate: 10%. Applicable on interest paid by companies, cooperative societies, and post offices on fixed deposits and similar instruments." },
      ],
      conclusion: "TDS compliance requires knowing the correct section, rate, and threshold for each payment. Use our TDS Calculator to instantly compute deduction amounts for any section.",
    },
  },
  {
    slug: "section-80c-deductions-guide",
    title: "Section 80C Deductions: Complete List of Tax-Saving Investments 2025",
    description: "Maximise your tax savings with Section 80C. Complete list of eligible investments: PPF, ELSS, NSC, life insurance, home loan principal, and more.",
    category: "Tax Saving",
    silo: "tax",
    keywords: "section 80C deductions, 80C tax saving investments, tax deductions under 80C, PPF ELSS NPS tax saving",
    publishDate: "2025-01-20",
    readTime: 8,
    relatedCalculator: "income-tax-calculator-2024-25",
    content: {
      intro: "Section 80C of the Income Tax Act allows deductions up to ₹1,50,000 per financial year on specified investments and expenditures, reducing your taxable income significantly.",
      sections: [
        { heading: "Top 80C Investments by Returns", body: "ELSS Mutual Funds (12–15% historical, 3-year lock-in), PPF (7.1% currently, 15-year, tax-free), NPS (market-linked, additional ₹50,000 under 80CCD(1B)), Sukanya Samriddhi Yojana (8.2%, girl child), NSC (7.7%, 5-year)." },
        { heading: "Insurance Premium Deductions", body: "Life insurance premiums for self, spouse, and children qualify. ULIP premiums also qualify. The premium must not exceed 10% of the sum assured (20% for policies before April 2012)." },
        { heading: "Home Loan Principal", body: "Principal repayment of a home loan for a self-occupied property is eligible under 80C. Stamp duty and registration fees paid in the year of purchase also count towards the ₹1.5L limit." },
        { heading: "EPF and VPF Contributions", body: "Your contribution to EPF (12% of basic salary) qualifies under 80C. Voluntary PF contributions (VPF) also eligible. EPF returns are tax-free if the account is maintained for 5 years." },
        { heading: "Children's Tuition Fees", body: "Tuition fees paid for up to 2 children in full-time education at an Indian institution qualify. Only tuition fee counts — development fees, transport, and other charges are excluded." },
      ],
      conclusion: "Maximising 80C saves up to ₹46,800 in tax (at 30% slab + cess) per year. Combine it with 80D (health insurance) and NPS 80CCD(1B) to build a comprehensive tax-saving strategy.",
    },
  },
  {
    slug: "advance-tax-guide",
    title: "Advance Tax: Who Pays, Due Dates, and Calculation for 2025-26",
    description: "Complete guide to advance tax in India 2025-26. Learn who must pay, how to calculate, instalment due dates, and consequences of not paying.",
    category: "Income Tax",
    silo: "tax",
    keywords: "advance tax India, advance tax due dates, how to calculate advance tax, advance tax payment",
    publishDate: "2025-02-05",
    readTime: 7,
    relatedCalculator: "income-tax-calculator-2024-25",
    content: {
      intro: "Advance tax is income tax paid in instalments during the financial year rather than in a lump sum at year-end. If your tax liability exceeds ₹10,000 in a year, advance tax is mandatory.",
      sections: [
        { heading: "Who Must Pay Advance Tax?", body: "All assessees (salaried, self-employed, businesses, companies) if estimated tax liability ≥₹10,000. Exception: senior citizens (65+) without business income are exempt." },
        { heading: "Instalment Schedule", body: "15 June: ≥15% of total advance tax. 15 September: ≥45% cumulative. 15 December: ≥75% cumulative. 15 March: 100%. For presumptive taxation under 44AD/44ADA: entire advance tax by 15 March." },
        { heading: "How to Calculate", body: "Estimate annual income → compute tax as per slab → subtract TDS → if balance >₹10,000, pay advance tax. Pay each instalment via Challan 280 online at TIN-NSDL or income tax portal." },
        { heading: "Interest for Non-Payment (Sections 234B & 234C)", body: "Under 234C: 1% per month for shortfall in each instalment. Under 234B: 1% per month if advance tax paid is <90% of assessed tax. Interest calculated from April 1 to tax payment date." },
        { heading: "Paying Advance Tax Online", body: "Log into incometax.gov.in → e-Pay Tax → Challan 280 → select advance tax → enter PAN, assessment year, amount → pay via net banking or debit card." },
      ],
      conclusion: "Advance tax planning prevents large interest bills in March. Review your income quarterly and adjust instalments accordingly. Use our Income Tax Calculator to estimate your annual liability.",
    },
  },

  // ── FINANCE SILO ──────────────────────────────────────────────────────────
  {
    slug: "what-is-emi",
    title: "What is EMI? How EMI Works, Formula, and All You Need to Know",
    description: "Understand EMI (Equated Monthly Instalment) — how it's calculated, the EMI formula, factors affecting EMI, and tips to manage loan repayment.",
    category: "Loans",
    silo: "finance",
    keywords: "what is EMI, EMI meaning, how EMI is calculated, EMI formula",
    publishDate: "2025-01-05",
    readTime: 7,
    content: {
      intro: "EMI (Equated Monthly Instalment) is the fixed monthly payment made to a lender to repay a loan over a specified period. It includes both the principal and interest components.",
      sections: [
        { heading: "EMI Formula", body: "EMI = P × r × (1+r)^n / [(1+r)^n − 1]. Where P = principal loan amount, r = monthly interest rate (annual rate / 12 / 100), n = loan tenure in months. Example: ₹10L at 8.5% for 20 years → EMI = ₹8,678." },
        { heading: "Principal vs Interest in EMI", body: "In early EMIs, the interest component is higher. As the loan progresses, the principal portion increases and interest decreases. This is the reducing balance method used by all Indian banks." },
        { heading: "Factors Affecting EMI", body: "Higher loan amount → higher EMI. Higher interest rate → higher EMI. Longer tenure → lower EMI but higher total interest. Processing fees and charges add to effective cost." },
        { heading: "Prepayment and Foreclosure", body: "Prepaying reduces the outstanding principal, lowering future EMIs or tenure. Under RBI guidelines, banks cannot charge prepayment penalty on floating-rate home loans. Fixed-rate loans may have foreclosure charges." },
        { heading: "Fixed vs Floating Rate EMIs", body: "Fixed rate: EMI remains constant throughout tenure (typically 1–2% higher than floating). Floating rate: EMI changes with MCLR/repo-linked rate — beneficial in a falling rate environment." },
      ],
      conclusion: "Understanding EMI helps you plan your finances better. Always compare the total interest outgo, not just the monthly EMI, when choosing loan tenure and lender.",
    },
  },
  {
    slug: "fd-vs-sip-comparison",
    title: "FD vs SIP: Which Investment Gives Better Returns in India?",
    description: "Detailed comparison of Fixed Deposits vs SIP (Mutual Fund) for Indian investors. Understand returns, risk, tax, liquidity, and which suits your goals.",
    category: "Investment",
    silo: "finance",
    keywords: "FD vs SIP, fixed deposit vs SIP, FD vs mutual fund, which is better FD or SIP",
    publishDate: "2025-01-15",
    readTime: 8,
    content: {
      intro: "FD vs SIP is one of the most debated investment choices in India. Both serve different purposes — FD for capital protection, SIP for wealth creation. Here's the complete comparison.",
      sections: [
        { heading: "Returns Comparison", body: "FD: 6.5–7.5% p.a. (current SBI rates). SIP in equity mutual funds: 12–15% p.a. (historical 10-year CAGR of Nifty 50). Over 10 years: ₹5,000/month FD grows to ~₹8.4L vs SIP ~₹11.6L at 12%." },
        { heading: "Risk Profile", body: "FD: Zero market risk, DICGC insured up to ₹5L per bank. Capital guaranteed. SIP: Market risk (NAV fluctuates). But diversified equity SIPs have never given negative returns over any 10-year rolling period (historically)." },
        { heading: "Tax Treatment", body: "FD: Interest fully taxable as income at your slab rate. TDS @10% if interest >₹40,000/year. SIP (equity): LTCG >₹1L taxed at 12.5% if held >1 year. STCG at 20% if held <1 year. Much more tax-efficient for high earners." },
        { heading: "Liquidity", body: "FD: Can be broken anytime with 0.5–1% penalty. Liquid FDs allow instant withdrawal. SIP: Redeemable anytime (equity funds: T+2 days). ELSS SIP: 3-year lock-in. Liquid SIPs: same-day redemption." },
        { heading: "Which to Choose?", body: "FD wins for: emergency fund, short-term goals (1–3 years), risk-averse investors, senior citizens (extra 0.5% FD interest). SIP wins for: long-term goals (5+ years), wealth creation, tax efficiency, inflation beating." },
      ],
      conclusion: "The ideal strategy is both: FD for safety net (3–6 months expenses), SIP for long-term wealth. Start with ₹500/month SIP and grow it with income. Review annually.",
    },
  },
  {
    slug: "sip-calculator-guide",
    title: "SIP Calculator: How to Use It and Plan Your Mutual Fund Investment",
    description: "Learn how to use a SIP calculator to plan your mutual fund investments. Understand SIP returns, CAGR, power of compounding, and step-up SIP strategy.",
    category: "Investment",
    silo: "finance",
    keywords: "SIP calculator, how to use SIP calculator, SIP return calculator, mutual fund SIP planning",
    publishDate: "2025-02-01",
    readTime: 7,
    content: {
      intro: "A SIP (Systematic Investment Plan) calculator shows how much your regular investments in mutual funds can grow over time. It uses the power of compounding to project your wealth.",
      sections: [
        { heading: "SIP Calculator Formula", body: "FV = P × [(1+r)^n − 1] / r × (1+r). Where P = monthly SIP amount, r = monthly return (annual ÷ 12 ÷ 100), n = number of months. Example: ₹5,000/month for 20 years @12% CAGR → FV = ₹49.96 lakh." },
        { heading: "Power of Compounding in SIP", body: "₹5,000/month for 10 years @12%: invested ₹6L, final value ₹11.6L. For 20 years @12%: invested ₹12L, final value ₹49.96L. For 30 years @12%: invested ₹18L, final value ₹1.76Cr. Time is the greatest multiplier." },
        { heading: "Step-Up SIP Strategy", body: "Increase SIP by 10% every year. ₹5,000/month starting SIP with 10% step-up for 20 years @12% can grow to ~₹1.2Cr vs flat ₹50L. Aligns with salary increments and dramatically boosts corpus." },
        { heading: "Realistic Return Expectations", body: "Conservative (debt funds): 6–8%. Balanced (hybrid funds): 9–11%. Aggressive (large-cap equity): 11–13%. Small/mid-cap: 13–16% (with higher volatility). Use 10–11% as a baseline for long-term equity SIP projections." },
        { heading: "Direct vs Regular SIP", body: "Regular SIP (through distributor): expense ratio 1–2%. Direct SIP (direct plan): expense ratio 0.5–1%. Direct plan returns 0.5–1% higher annually. Over 20 years, this compounds to lakhs in additional corpus." },
      ],
      conclusion: "SIP is the most disciplined wealth-building tool for Indian retail investors. Start early, stay consistent, step up annually, and choose direct plans for maximum corpus.",
    },
  },

  // ── SALARY SILO ──────────────────────────────────────────────────────────
  {
    slug: "hra-exemption-calculation",
    title: "HRA Exemption Calculation 2025: Formula, Rules & Examples",
    description: "Complete guide to HRA tax exemption in FY 2025-26. Learn the HRA formula, conditions, metro vs non-metro rules, and how to maximise HRA benefit.",
    category: "Salary",
    silo: "salary",
    keywords: "HRA exemption, HRA calculation, how to claim HRA, house rent allowance exemption",
    publishDate: "2025-01-10",
    readTime: 7,
    relatedCalculator: "hra-calculator",
    content: {
      intro: "HRA (House Rent Allowance) exemption allows salaried employees to reduce taxable income by the rent paid for accommodation. The exemption is the minimum of three calculated values.",
      sections: [
        { heading: "HRA Exemption Formula", body: "HRA exempt = Minimum of: 1) Actual HRA received. 2) Actual rent paid minus 10% of Basic Salary. 3) 50% of Basic Salary (metro cities: Delhi, Mumbai, Chennai, Kolkata) or 40% (non-metro)." },
        { heading: "Example Calculation", body: "Basic: ₹50,000/month. HRA received: ₹20,000. Actual rent: ₹18,000. Metro city. 1) ₹20,000. 2) ₹18,000 − ₹5,000 = ₹13,000. 3) 50% of ₹50,000 = ₹25,000. HRA exempt = Min(₹20,000, ₹13,000, ₹25,000) = ₹13,000/month." },
        { heading: "Conditions to Claim HRA", body: "You must: actually reside in a rented house, receive HRA as part of salary, pay rent. If rent >₹1L/year, landlord's PAN mandatory. Cannot claim HRA if staying in own house or if the house is owned by spouse." },
        { heading: "Rent Agreement and Receipts", body: "Maintain monthly rent receipts with landlord's signature and revenue stamp if rent >₹5,000/month. Keep rental agreement. Submit to employer by March for TDS adjustment." },
        { heading: "HRA in New Tax Regime", body: "Note: HRA exemption is NOT available under the new tax regime. If HRA is significant, calculate tax under both regimes before choosing. The old regime may be better for high-rent urban employees." },
      ],
      conclusion: "HRA is one of the most valuable salary exemptions available. Calculate your exemption precisely using our HRA Calculator and ensure all documentation is in order to claim it without issues.",
    },
  },
  {
    slug: "gratuity-calculation-guide",
    title: "Gratuity Calculation in India 2025: Formula, Eligibility & Tax",
    description: "Learn how gratuity is calculated in India. Understand the gratuity formula, eligibility rules (5 years), tax exemption limits, and Payment of Gratuity Act provisions.",
    category: "Salary",
    silo: "salary",
    keywords: "gratuity calculation, how to calculate gratuity, gratuity formula India, gratuity tax exemption",
    publishDate: "2025-01-25",
    readTime: 6,
    relatedCalculator: "gratuity-calculator",
    content: {
      intro: "Gratuity is a lump-sum payment by an employer to an employee as a token of appreciation for long service. It's governed by the Payment of Gratuity Act, 1972 and becomes due after 5 years of continuous service.",
      sections: [
        { heading: "Gratuity Formula (Act Covered Employees)", body: "Gratuity = (Last drawn salary × 15/26) × Number of years of service. Salary = Basic + Dearness Allowance. Example: Salary ₹50,000, 10 years → Gratuity = (50,000 × 15/26) × 10 = ₹2,88,462." },
        { heading: "Gratuity for Non-Covered Employees", body: "For employees not covered under the Act: Gratuity = (Last drawn salary × ½) × years of service. Note: month = 30 days (not 26). Slightly different from the Act formula." },
        { heading: "Eligibility Conditions", body: "Minimum 5 years continuous service (except death/disability — gratuity paid even before 5 years). 5 years is calculated as 4 years + 240 days (for factories/mines), or 4 years + 190 days (for others working 5 days/week)." },
        { heading: "Tax Exemption on Gratuity", body: "For government employees: fully exempt. For private sector (Act covered): exempt up to minimum of actual gratuity, ₹20L, or 15/26 × last salary × years. Excess is taxable as salary income." },
        { heading: "Timeline for Payment", body: "Employer must pay gratuity within 30 days of it becoming due. Delay attracts simple interest at the rate notified by the Central Government. File Form I with employer; employer files Form L if payment due." },
      ],
      conclusion: "Gratuity is a significant retirement benefit. Ensure you complete the full 5 years (or 4 years + 240 days) before resigning to become eligible. Use our Gratuity Calculator for instant estimates.",
    },
  },
  {
    slug: "pf-epf-guide",
    title: "EPF Guide 2025: Contribution, Balance Check, Withdrawal & Pension",
    description: "Complete EPF guide for 2025. Learn EPF contribution rates, how to check balance online, partial and full withdrawal rules, and EPS pension calculation.",
    category: "Salary",
    silo: "salary",
    keywords: "EPF guide, how to check EPF balance, EPF withdrawal rules, employee provident fund",
    publishDate: "2025-02-10",
    readTime: 10,
    relatedCalculator: "pf-calculator",
    content: {
      intro: "EPF (Employee Provident Fund) is India's largest retirement savings scheme, mandatory for employees earning ≤₹15,000/month at establishments with 20+ employees.",
      sections: [
        { heading: "EPF Contribution Rates", body: "Employee: 12% of Basic + DA. Employer: 12% of Basic + DA, of which 8.33% goes to EPS (Employees' Pension Scheme), 3.67% to EPF account, plus 0.5% EDLI insurance, 0.5% admin charges." },
        { heading: "EPF Interest Rate 2024-25", body: "EPF interest rate for FY 2024-25: 8.25% p.a. (announced by EPFO). Interest is credited at year-end. Note: interest on EPF is tax-free for contributions up to ₹2.5L/year (₹5L if employer does not contribute)." },
        { heading: "How to Check EPF Balance", body: "Options: UMANG app → EPFO → Member Services. SMS 'EPFOHO UAN ENG' to 7738299899. Missed call to 011-22901406. EPFO portal (passbook.epfindia.gov.in) with UAN and password." },
        { heading: "EPF Withdrawal Rules", body: "Full withdrawal: after 2 months of unemployment or retirement at 58. Partial withdrawal: for housing (after 5 years), medical emergency, marriage (after 7 years), education, natural calamity. Tax: if withdrawn before 5 years, TDS @10% + income tax applicable." },
        { heading: "EPS Pension Calculation", body: "Monthly pension = (Pensionable salary × Pensionable service) / 70. Pensionable salary = average of last 60 months' wages (capped at ₹15,000). EPS pension is accessible from age 58 with minimum 10 years' service." },
      ],
      conclusion: "EPF is the cornerstone of retirement security for Indian employees. Activate your UAN, link Aadhaar, and monitor your balance regularly. Our PF Calculator helps you project your EPF corpus.",
    },
  },

  // ── BUSINESS SILO ─────────────────────────────────────────────────────────
  {
    slug: "business-registration-types-india",
    title: "Types of Business Registration in India 2025: Which to Choose?",
    description: "Compare Sole Proprietorship, Partnership, LLP, Pvt Ltd, and OPC in India. Understand tax treatment, compliance, liability, and ideal use case for each.",
    category: "Business",
    silo: "business",
    keywords: "business registration India, sole proprietorship vs pvt ltd, LLP vs private limited, types of business entities India",
    publishDate: "2025-01-05",
    readTime: 9,
    content: {
      intro: "Choosing the right business structure is one of the most consequential decisions for an entrepreneur in India. Each structure has different implications for tax, liability, compliance, and growth.",
      sections: [
        { heading: "Sole Proprietorship", body: "Simplest form. No separate registration (only PAN, GST if applicable). Owner and business are same legal entity — unlimited personal liability. Taxed at individual slab rates. Best for: freelancers, small traders, consultants starting out." },
        { heading: "Partnership Firm", body: "2–20 partners. Register under Partnership Act 1932 (optional but recommended). All partners jointly and severally liable. Taxed at 30% flat rate. Best for: family businesses, professional firms (CA, law)." },
        { heading: "LLP (Limited Liability Partnership)", body: "Partners have limited liability. Separate legal entity. Registered with MCA. Annual filing required. Taxed at 30%. No minimum capital. Best for: professional services, startups wanting limited liability without Pvt Ltd complexity." },
        { heading: "Private Limited Company", body: "Separate legal entity. Shareholders have limited liability. Minimum 2 directors and 2 shareholders. Annual ROC filing, audits mandatory. Taxed at 25% (turnover ≤₹400Cr) or 22% (new manufacturing). Best for: funded startups, scalable businesses." },
        { heading: "One Person Company (OPC)", body: "Single person company — combines sole proprietor flexibility with Pvt Ltd protection. Nominee required. Converts to Pvt Ltd when turnover >₹2Cr or paid-up capital >₹50L. Best for: individual entrepreneurs wanting corporate benefits." },
      ],
      conclusion: "For bootstrapped freelancers: start as proprietorship. For funded startups seeking investment: Private Limited. For professionals wanting partnership benefits with limited liability: LLP. Consult a CA before deciding.",
    },
  },
  {
    slug: "roi-calculator-guide",
    title: "ROI Calculator: How to Calculate Return on Investment for Business",
    description: "Learn how to calculate ROI (Return on Investment) for business decisions. Understand ROI formula, annualised ROI, and how to compare investment options.",
    category: "Business",
    silo: "business",
    keywords: "ROI calculator, return on investment formula, how to calculate ROI, business ROI",
    publishDate: "2025-02-15",
    readTime: 6,
    content: {
      intro: "ROI (Return on Investment) is the most fundamental metric for evaluating business and investment decisions. It tells you how much profit you earn relative to the cost of investment.",
      sections: [
        { heading: "Basic ROI Formula", body: "ROI = (Net Profit / Cost of Investment) × 100. Net Profit = Final Value − Initial Investment. Example: ₹2L investment yields ₹2.8L → ROI = (80,000/2,00,000) × 100 = 40%." },
        { heading: "Annualised ROI", body: "For comparing investments of different durations: Annualised ROI = [(1 + ROI/100)^(1/years) − 1] × 100. Example: 40% ROI over 2 years → annualised = [(1.4)^0.5 − 1] × 100 = 18.3% p.a." },
        { heading: "ROI for Marketing Campaigns", body: "Marketing ROI = (Revenue from Campaign − Campaign Cost) / Campaign Cost × 100. Include all direct costs: ad spend, creative, team time. A 3:1 ROI (₹3 revenue per ₹1 spend) is generally considered minimum viable." },
        { heading: "Business Investment ROI", body: "For equipment purchase: ROI = (Annual Revenue Generated − Annual Costs) / Equipment Cost × 100. Consider depreciation, maintenance, and opportunity cost of capital in the denominator." },
        { heading: "Limitations of ROI", body: "ROI doesn't account for time, risk, or qualitative benefits. A 100% ROI in 10 years is worse than 50% in 1 year. Always pair ROI with IRR (Internal Rate of Return) and payback period for complete analysis." },
      ],
      conclusion: "ROI is a quick litmus test for any investment. For business decisions, always compute ROI before committing capital and compare against your cost of capital (typically 12–15% for Indian SMEs).",
    },
  },

  // ── LOANS SILO ────────────────────────────────────────────────────────────
  {
    slug: "home-loan-guide-india",
    title: "Home Loan Guide India 2025: Rates, EMI, Tax Benefits & Process",
    description: "Complete home loan guide for India 2025. Compare interest rates, understand EMI calculation, Section 24 and 80EEA tax benefits, and loan process.",
    category: "Loans",
    silo: "loans",
    keywords: "home loan India, home loan interest rates 2025, home loan EMI, home loan tax benefit",
    publishDate: "2025-01-15",
    readTime: 11,
    content: {
      intro: "A home loan is likely the largest financial commitment most Indians make. Understanding rates, EMI calculation, tax benefits, and the approval process helps you make informed decisions.",
      sections: [
        { heading: "Current Home Loan Interest Rates 2025", body: "SBI: 8.50–9.15%. HDFC Bank: 8.70–9.35%. ICICI Bank: 8.75–9.30%. Bank of Baroda: 8.40–9.00%. Kotak: 8.75–9.50%. Rates are floating linked to repo rate. Government scheme (PMAY) offers subsidies of ₹2.67L for EWS/LIG." },
        { heading: "EMI Calculation for Home Loan", body: "₹50L loan at 8.5% for 20 years: Monthly EMI = ₹43,391. Total payment = ₹1,04,13,840. Interest paid = ₹54,13,840. Reducing tenure to 15 years: EMI = ₹49,224, interest saved = ₹9L+." },
        { heading: "Tax Benefits Under Section 24(b)", body: "Interest paid on home loan: ₹2L deduction (self-occupied, old regime). Unlimited deduction (let-out property). Under Section 80EEA (first-time buyers, stamp duty ≤₹45L): additional ₹1.5L interest deduction (expired March 2024 — check renewal)." },
        { heading: "Section 80C: Principal Repayment", body: "Principal repayment qualifies under Section 80C (up to ₹1.5L cap shared with other 80C investments). Only available in old tax regime. Both Section 24 and 80C benefits make home loans extremely tax-efficient." },
        { heading: "Home Loan Application Process", body: "1. Check CIBIL score (aim for 750+). 2. Compare rates across banks. 3. Submit application with income proof, KYC, property documents. 4. Bank valuation and legal verification. 5. Sanction letter. 6. Disbursement. Processing fee: 0.25–1% of loan amount." },
      ],
      conclusion: "A home loan at 8.5% effectively costs 5–6% post-tax for borrowers claiming full deductions. It remains one of the most tax-efficient borrowings in India. Use our EMI Calculator to plan repayments.",
    },
  },
  {
    slug: "personal-loan-vs-business-loan",
    title: "Personal Loan vs Business Loan: Which Should You Choose?",
    description: "Compare personal loan and business loan in India. Understand rates, eligibility, tax treatment, end use restrictions, and which works best for your needs.",
    category: "Loans",
    silo: "loans",
    keywords: "personal loan vs business loan, difference between personal and business loan, business loan India, personal loan for business",
    publishDate: "2025-02-20",
    readTime: 7,
    content: {
      intro: "Personal loans and business loans both provide capital, but they differ significantly in rates, eligibility, documentation, and tax treatment. Here's how to decide.",
      sections: [
        { heading: "Interest Rates Comparison", body: "Personal loan: 10.49–24% p.a. (unsecured, based on credit score). Business loan (secured): 8.5–14% p.a. Business loan (unsecured MSME): 11–18% p.a. Mudra Loan (Kishore): 8.5–10%. Personal loans are costlier but faster to get." },
        { heading: "Eligibility Requirements", body: "Personal loan: Salaried/self-employed, CIBIL 700+, age 21–65, minimum income ₹25,000/month. Business loan: GST registration, 3 years' IT returns, business vintage 2+ years, annual turnover proof." },
        { heading: "Tax Treatment", body: "Business loan interest: fully deductible as business expense, reducing taxable profit. Personal loan interest: NOT tax deductible unless specifically used for income-generating activity and documented. This makes business loans significantly cheaper post-tax." },
        { heading: "Processing Time", body: "Personal loan: 24–72 hours (instant disbursement with pre-approved offers). Business loan (traditional): 7–21 days with extensive documentation. NBFC business loans: 3–7 days. Fintech (Razorpay Capital, etc.): 24–48 hours for existing merchants." },
        { heading: "End Use and Documentation", body: "Personal loan: no end-use restriction (can be used for anything). Business loan: typically for business purposes — working capital, equipment, expansion. Misuse of business loan can complicate tax treatment." },
      ],
      conclusion: "If eligible, always prefer a business loan for business use — lower rates, tax deductibility, and better terms. Use a personal loan only as a last resort or for time-sensitive needs where speed matters more than cost.",
    },
  },

  // ── INVESTMENT SILO ────────────────────────────────────────────────────────
  {
    slug: "ppf-account-guide",
    title: "PPF Account Guide 2025: Interest Rate, Rules & Tax Benefits",
    description: "Complete PPF (Public Provident Fund) guide for 2025. Current interest rate, contribution limits, 15-year lock-in, partial withdrawal, loan, and EEE tax status.",
    category: "Investment",
    silo: "investment",
    keywords: "PPF account, PPF interest rate 2025, PPF rules, public provident fund India",
    publishDate: "2025-01-10",
    readTime: 8,
    content: {
      intro: "PPF (Public Provident Fund) remains India's most popular long-term savings instrument — offering government-backed safety, 7.1% interest (Q1 2025), and complete tax exemption under EEE status.",
      sections: [
        { heading: "PPF Current Interest Rate", body: "7.1% p.a. (Q1 FY 2025-26, compounded annually). Interest is calculated on the minimum balance between 5th and last day of each month. To maximise interest, deposit before the 5th of each month." },
        { heading: "Contribution Rules", body: "Minimum: ₹500/year. Maximum: ₹1,50,000/year (including NRI accounts). Deposits can be made in lump sum or up to 12 instalments. Available at SBI, post offices, ICICI, HDFC Bank, and other authorised banks." },
        { heading: "Tax Benefits (EEE Status)", body: "Exempt-Exempt-Exempt: 1) Contribution: 80C deduction up to ₹1.5L. 2) Interest: completely tax-free. 3) Maturity: fully tax-free. This makes PPF one of the very few instruments with complete tax exemption at all three stages." },
        { heading: "Withdrawal and Loan Rules", body: "Partial withdrawal: from 7th year onwards (up to 50% of balance at end of 4th year). Loan: from 3rd to 6th year (up to 25% of previous FY-end balance, interest 1% p.a.). Premature closure: allowed after 5 years for specific reasons (medical, education)." },
        { heading: "Extension After 15 Years", body: "After maturity at 15 years: extend in 5-year blocks (with or without contribution). With contribution: new deposits continue to earn interest and qualify for 80C. Without contribution: existing balance earns interest, flexible withdrawal allowed." },
      ],
      conclusion: "PPF is unbeatable for risk-averse investors seeking guaranteed tax-free returns. For a 30-year-old depositing ₹1.5L/year, PPF can accumulate ₹1.54 crore at 7.1% by retirement at 60.",
    },
  },
  {
    slug: "nps-pension-guide",
    title: "NPS Guide 2025: Returns, Contribution, Tax Benefits & Withdrawal",
    description: "Complete NPS (National Pension System) guide for 2025. Compare Tier 1 vs Tier 2, tax benefits under 80CCD, fund manager performance, and exit rules.",
    category: "Investment",
    silo: "investment",
    keywords: "NPS pension, NPS returns 2025, NPS tax benefit, national pension system India",
    publishDate: "2025-02-05",
    readTime: 9,
    content: {
      intro: "NPS (National Pension System) is India's government-backed retirement savings scheme that offers equity-linked returns with significant tax advantages — up to ₹2L deduction in the old regime.",
      sections: [
        { heading: "NPS Tax Benefits", body: "80CCD(1): Up to ₹1.5L within 80C limit. 80CCD(1B): Additional ₹50,000 exclusively for NPS (beyond 80C). Total deduction: ₹2L for aggressive tax planners. Employer contribution up to 10% of basic salary also deductible under 80CCD(2) — no cap." },
        { heading: "Tier 1 vs Tier 2", body: "Tier 1: Retirement account. Locked until 60. Tax benefits available. Mandatory to open. Minimum ₹1,000/year. Tier 2: Voluntary savings account. Withdraw anytime. No tax benefits (except for government employees). Minimum ₹250 per contribution." },
        { heading: "Asset Allocation (Tier 1)", body: "Active choice: Equity (E): up to 75% (equity index funds). Corporate bonds (C): up to 100%. Government securities (G): up to 100%. Alternative investments (A): up to 5%. Auto choice: reduces equity as you age. At 35: 75% equity. At 50: 50% equity. At 60: 15% equity." },
        { heading: "NPS Returns (Historical)", body: "Equity (E) fund 10-year CAGR: SBI Pension: ~12.5%. LIC Pension: ~11.8%. HDFC Pension: ~12.8%. Corporate bond fund: ~9%. Government bond: ~8.5%. Long-term equity NPS returns are competitive with equity mutual funds." },
        { heading: "Exit at 60", body: "At 60: minimum 40% must be invested in annuity (regular pension). Up to 60% lump sum — tax-free. If total corpus ≤₹5L: 100% can be withdrawn. Early exit (before 60): 80% in annuity, 20% lump sum. NPS corpus is not eligible for LTCG exemptions but maturity is largely tax-efficient." },
      ],
      conclusion: "NPS is ideal for those who want to build a pension alongside EPF. The additional ₹50,000 80CCD(1B) benefit alone saves ₹15,600/year in tax at 30% slab. Start early, choose active equity allocation.",
    },
  },

  // ── BANKING SILO ──────────────────────────────────────────────────────────
  {
    slug: "fd-calculator-guide",
    title: "FD Calculator Guide: How Fixed Deposit Interest is Calculated",
    description: "Understand how fixed deposit interest is calculated. Learn simple vs compound interest in FDs, TDS on FD, FD laddering strategy, and best FD rates 2025.",
    category: "Banking",
    silo: "banking",
    keywords: "FD calculator, fixed deposit interest calculation, FD interest rates 2025, how FD works",
    publishDate: "2025-01-08",
    readTime: 7,
    content: {
      intro: "A Fixed Deposit (FD) is the simplest and most trusted investment in India — deposit a lump sum for a fixed period and earn guaranteed interest. Here's exactly how interest is calculated.",
      sections: [
        { heading: "FD Interest Calculation Formula", body: "Simple Interest FD: Maturity = P + (P × R × T / 100). Compound Interest FD: Maturity = P × (1 + R/n)^(nT). Where P = principal, R = rate %, T = time (years), n = compounding frequency per year (quarterly = 4, monthly = 12)." },
        { heading: "Current Best FD Rates 2025", body: "Small finance banks offer highest rates: Unity Small Finance Bank: 9.5% (≤2Cr). ESAF Small Finance Bank: 9.25%. Ujjivan Small Finance Bank: 8.75%. Major banks: SBI 6.5–7.1%, HDFC 7–7.4%, ICICI 6.7–7.2%. Senior citizens get 0.25–0.5% extra." },
        { heading: "TDS on Fixed Deposits", body: "TDS @10% deducted if aggregate FD interest in a bank >₹40,000/year (₹50,000 for senior citizens). If PAN not provided: 20% TDS. Submit Form 15G (age <60, nil tax liability) or 15H (senior citizen) to avoid TDS." },
        { heading: "FD Laddering Strategy", body: "Instead of one large FD, create multiple FDs maturing at different intervals. Example: ₹5L split into ₹1L FD each at 1, 2, 3, 4, 5 years. Benefits: regular liquidity, benefit from rising interest rates, avoid penalties." },
        { heading: "Tax on FD Interest", body: "FD interest is added to income and taxed at your slab rate — 5%, 10%, 20%, or 30% + cess. TDS is a credit against total tax liability. Tax-saving FD (80C): 5-year lock-in, up to ₹1.5L deductible, but interest is taxable." },
      ],
      conclusion: "FDs are ideal for capital protection and predictable returns. For FY 2025-26, compare small finance bank rates (with DICGC insurance cover) against major bank rates. Ladder FDs for optimal returns and liquidity.",
    },
  },

  // ── ACCOUNTING SILO ────────────────────────────────────────────────────────
  {
    slug: "tally-gst-entry-guide",
    title: "How to Enter GST in Tally ERP 9 & Tally Prime 2025",
    description: "Step-by-step guide to GST entries in Tally ERP 9 and Tally Prime. Learn sales, purchase, credit note entries with CGST, SGST, IGST configurations.",
    category: "Accounting",
    silo: "accounting",
    keywords: "GST entry in Tally, Tally Prime GST, how to enter GST in Tally, Tally ERP GST setup",
    publishDate: "2025-01-20",
    readTime: 8,
    content: {
      intro: "Tally ERP 9 and Tally Prime are India's most widely used accounting software. Correct GST configuration in Tally is essential for accurate return filing and compliance.",
      sections: [
        { heading: "Enabling GST in Tally", body: "Gateway → F11 (Features) → Statutory and Taxation → Enable Goods and Services Tax (GST) = Yes → Set GSTIN, State, Registration Type (Regular/Composition). This enables GST features across all voucher types." },
        { heading: "Creating GST Ledgers", body: "Create: CGST Input (Duties & Taxes → CGST). CGST Output (Duties & Taxes → CGST). SGST Input, SGST Output, IGST Input, IGST Output similarly. These ledgers accumulate the respective tax amounts for each transaction." },
        { heading: "GST Sales Entry (Intra-State)", body: "Sales Voucher (F8) → Select party → Select stock item with HSN code → Amount → Tally auto-calculates CGST and SGST based on the GST rate mapped to the stock item. Final invoice shows base + CGST + SGST." },
        { heading: "GST Purchase Entry", body: "Purchase Voucher (F9) → Enter supplier invoice number → Select stock item → Tally populates CGST and SGST as input tax (ITC). Link to correct GSTR-2B entry for reconciliation." },
        { heading: "Generating GSTR-1 from Tally", body: "Gateway → Display → Statutory Reports → GST Reports → GSTR-1. Verify B2B invoices, B2C invoices, credit notes. Export as JSON for direct upload to GST portal, or generate reconciliation report for manual filing." },
      ],
      conclusion: "Proper Tally GST setup from day one eliminates reconciliation headaches. Map all stock items to correct HSN codes and ledgers during initial configuration, and it becomes virtually automatic thereafter.",
    },
  },

  // ── GOVERNMENT SCHEMES SILO ────────────────────────────────────────────────
  {
    slug: "pmay-scheme-guide",
    title: "PMAY Scheme 2025: Eligibility, Subsidy, and How to Apply Online",
    description: "Complete PMAY (Pradhan Mantri Awas Yojana) guide 2025. Urban and rural scheme eligibility, CLSS subsidy amounts, income criteria, and online application process.",
    category: "Government Schemes",
    silo: "government-schemes",
    keywords: "PMAY scheme, pradhan mantri awas yojana, PMAY eligibility, housing scheme India 2025",
    publishDate: "2025-01-15",
    readTime: 8,
    content: {
      intro: "PMAY (Pradhan Mantri Awas Yojana) aims to provide affordable housing to all Indians by 2024 (extended). The scheme offers significant interest subsidies and direct benefits for first-time homebuyers.",
      sections: [
        { heading: "PMAY Urban vs Rural", body: "PMAY-Urban (PMAY-U): for urban areas. Implemented through Urban Local Bodies. PMAY-Gramin (PMAY-G): for rural beneficiaries. Implemented through State Rural Development departments. Both operate on similar eligibility but different benefit structures." },
        { heading: "Income Categories & Subsidy", body: "EWS (≤₹3L/year): 6.5% interest subsidy on loans up to ₹6L. LIG (₹3–6L/year): 6.5% subsidy on ₹6L. MIG-I (₹6–12L/year): 4% subsidy on ₹9L. MIG-II (₹12–18L/year): 3% subsidy on ₹12L. Maximum subsidy NPV: EWS/LIG ₹2,67,280; MIG-I ₹2,35,068; MIG-II ₹2,30,156." },
        { heading: "Eligibility Conditions", body: "First-time homebuyer. No pucca house in family anywhere in India. Not previously availed central housing scheme. For CLSS: home loan for new construction or purchase. Property must be in name of woman (at least co-applicant)." },
        { heading: "How to Apply", body: "Online: pmaymis.gov.in → Citizen Assessment → choose income category → fill Aadhaar-linked form. Through bank/NBFC: apply along with home loan at listed PLIs (Primary Lending Institutions). Through CSC: Common Service Centres in villages." },
        { heading: "Pradhan Mantri Awas Yojana 2.0", body: "PMAY 2.0 was announced in Budget 2024 to cover 1 crore additional urban housing units. Enhanced subsidies for EWS and LIG categories. Check official PMAY portal for the latest guidelines and operational status." },
      ],
      conclusion: "PMAY subsidy can save lakhs on home loan interest. Even MIG-II beneficiaries save ~₹2.3L in NPV terms. Apply early through a listed bank and ensure all property and income documents are in order.",
    },
  },
  {
    slug: "mudra-loan-guide",
    title: "Mudra Loan Guide 2025: Types, Eligibility & How to Apply",
    description: "Complete guide to Pradhan Mantri MUDRA Yojana 2025. Understand Shishu, Kishore, and Tarun loans, eligibility, documents required, and application process.",
    category: "Government Schemes",
    silo: "government-schemes",
    keywords: "Mudra loan, PMMY, Mudra loan eligibility, how to apply for Mudra loan, Shishu Kishore Tarun",
    publishDate: "2025-02-01",
    readTime: 7,
    content: {
      intro: "MUDRA (Micro Units Development & Refinance Agency) loans under PMMY (Pradhan Mantri MUDRA Yojana) provide collateral-free credit to non-corporate, non-farm micro enterprises.",
      sections: [
        { heading: "Three Types of MUDRA Loans", body: "Shishu: Up to ₹50,000 for very small startups. Kishore: ₹50,001 to ₹5 lakh for established businesses. Tarun: ₹5 lakh to ₹10 lakh for growth-stage businesses. No collateral required for any category." },
        { heading: "Who Can Apply?", body: "Individuals, MSMEs, small manufacturers, vendors, artisans, shopkeepers, fruit/vegetable vendors, self-help groups, truck operators, food service units — any non-agricultural micro business. No income ceiling for Tarun." },
        { heading: "Interest Rates", body: "MUDRA loans do not have a fixed interest rate — it varies by bank. Typical range: Shishu 8–12%, Kishore 9–14%, Tarun 10–16%. PSU banks tend to offer lower rates. Interest is based on credit profile." },
        { heading: "Documents Required", body: "For Shishu: Aadhaar, PAN, business proof, address proof, 2 photographs. For Kishore/Tarun: additionally GST certificate, IT returns, balance sheet, bank statements of last 6 months, project report." },
        { heading: "How to Apply", body: "Visit any PSU bank, RRB, cooperative bank, MFI, or NBFC listed on mudra.org.in. Fill MUDRA loan application form. Attach documents. Banks process within 7–15 working days. For Shishu loans, PSB59minute portal offers instant-in-principle approval." },
      ],
      conclusion: "MUDRA loans are a transformative tool for India's micro enterprises. The collateral-free nature makes them accessible for first-time borrowers. Start with Shishu, build your credit history, and scale to Kishore/Tarun.",
    },
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOGS.find((b) => b.slug === slug);
}

export function getBlogsBySilo(silo: string): BlogPost[] {
  return BLOGS.filter((b) => b.silo === silo);
}

export function getBlogsByCalculator(calculatorSlug: string): BlogPost[] {
  return BLOGS.filter((b) => b.relatedCalculator === calculatorSlug);
}

export function getRelatedBlogs(currentSlug: string, count = 3): BlogPost[] {
  const current = getBlogBySlug(currentSlug);
  if (!current) return BLOGS.slice(0, count);
  return BLOGS.filter(
    (b) => b.slug !== currentSlug && (b.silo === current.silo || b.category === current.category)
  ).slice(0, count);
}

export function getAllBlogSlugs(): string[] {
  return BLOGS.map((b) => b.slug);
}
