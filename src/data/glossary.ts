export type GlossaryTerm = {
  slug: string;
  term: string;
  shortDefinition: string;
  fullDefinition: string;
  category: string;
  silo: string;
  relatedTerms: string[];
  example?: string;
};

export const GLOSSARY: GlossaryTerm[] = [
  // GST Terms
  {
    slug: "cgst",
    term: "CGST",
    shortDefinition: "Central Goods and Services Tax — levied by the Central Government on intra-state supply of goods and services.",
    fullDefinition: "CGST (Central Goods and Services Tax) is one of the two taxes levied on intra-state supply of goods and services in India. It is governed by the Central Goods and Services Tax Act, 2017. CGST is always equal to SGST and together they form the total GST for within-state transactions. Revenue from CGST goes to the Central Government.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["sgst", "igst", "utgst", "gstin"],
    example: "On a ₹10,000 service at 18% GST: CGST = ₹900 (9%) + SGST = ₹900 (9%) = ₹1,800 total.",
  },
  {
    slug: "sgst",
    term: "SGST",
    shortDefinition: "State Goods and Services Tax — levied by the State Government on intra-state supply of goods and services.",
    fullDefinition: "SGST (State Goods and Services Tax) is levied by state governments on transactions occurring within their state. It mirrors the CGST and is governed by each state's own SGST Act. Revenue from SGST goes entirely to the respective state government. SGST is always equal to CGST in amount.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["cgst", "igst", "gstin"],
    example: "Maharashtra SGST on ₹10,000 at 18% = ₹900. This revenue goes to Maharashtra state.",
  },
  {
    slug: "igst",
    term: "IGST",
    shortDefinition: "Integrated Goods and Services Tax — levied on inter-state supply of goods and services and imports.",
    fullDefinition: "IGST (Integrated Goods and Services Tax) is a single tax levied on inter-state supply of goods and services, imports, and exports. It is collected by the Central Government and subsequently distributed to the destination state. IGST equals the total GST rate — there is no split. IGST can be set off against CGST, SGST, or IGST liabilities in a specific order.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["cgst", "sgst", "place-of-supply"],
    example: "Delhi IT firm invoices Pune client ₹20,000 at 18%: IGST = ₹3,600 (no CGST/SGST split).",
  },
  {
    slug: "utgst",
    term: "UTGST",
    shortDefinition: "Union Territory GST — equivalent to SGST for Union Territories without a legislature.",
    fullDefinition: "UTGST (Union Territory Goods and Services Tax) applies to transactions within Union Territories that do not have their own legislature: Andaman & Nicobar Islands, Chandigarh, Dadra & Nagar Haveli, Daman & Diu, and Lakshadweep. J&K and Puducherry have their own legislatures and use SGST. Delhi uses SGST (it has its own legislature).",
    category: "GST",
    silo: "gst",
    relatedTerms: ["cgst", "sgst", "igst"],
  },
  {
    slug: "gstin",
    term: "GSTIN",
    shortDefinition: "Goods and Services Tax Identification Number — a unique 15-digit identifier for every GST registrant in India.",
    fullDefinition: "GSTIN (Goods and Services Tax Identification Number) is the unique 15-character alphanumeric identifier assigned to every GST-registered entity in India. Structure: First 2 digits = State code. Next 10 = PAN of the entity. 13th digit = Entity number (for multiple registrations of same PAN). 14th = 'Z' (default). 15th = Checksum. Every GST invoice must display the supplier's GSTIN.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["cgst", "sgst", "gst-registration"],
    example: "27AABCS1234Z1Z5 → State 27 (Maharashtra) + PAN AABCS1234Z + entity number 1.",
  },
  {
    slug: "input-tax-credit",
    term: "Input Tax Credit (ITC)",
    shortDefinition: "The mechanism allowing registered businesses to deduct GST paid on purchases from GST collected on sales.",
    fullDefinition: "Input Tax Credit (ITC) is the credit available to a registered person for the GST paid on inputs (goods and services) used for making outward taxable supplies. ITC eliminates the cascading 'tax on tax' effect. To claim ITC, the buyer must possess a valid tax invoice, the goods/services must be received, the supplier must have filed their returns and paid the tax, and the ITC must be claimed within the prescribed time limit.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["cgst", "gstr-2b", "reverse-charge"],
    example: "Purchased raw materials paying ₹18,000 GST. Sold products collecting ₹25,000 GST. Net GST payable = ₹7,000 (after ITC claim).",
  },
  {
    slug: "reverse-charge-mechanism",
    term: "Reverse Charge Mechanism (RCM)",
    shortDefinition: "Under RCM, the liability to pay GST shifts from the supplier to the recipient of goods or services.",
    fullDefinition: "Under the Reverse Charge Mechanism (RCM) in GST, the recipient of goods or services is responsible for paying the tax instead of the supplier. RCM applies in specific situations: purchase from unregistered suppliers (for notified goods), import of services, and for certain specified goods and services. The recipient pays IGST (for imports) or CGST+SGST (domestic), and can claim ITC on the same if eligible.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["input-tax-credit", "cgst", "igst"],
    example: "Registered company pays ₹10,000 to an unregistered advocate. Company must pay RCM GST @18% = ₹1,800 and can claim ITC.",
  },
  {
    slug: "composition-scheme",
    term: "Composition Scheme",
    shortDefinition: "A simplified GST compliance option for small businesses with turnover up to ₹1.5 crore, with a flat tax rate.",
    fullDefinition: "The GST Composition Scheme allows small businesses with aggregate annual turnover ≤₹1.5 crore (₹75L for special states) to pay a flat tax rate instead of regular GST. Tax rates: Manufacturers: 1% (0.5% CGST + 0.5% SGST). Restaurants: 5%. Service providers: 6%. Traders: 1%. Composition dealers cannot issue tax invoices, cannot claim ITC, cannot make inter-state supplies, and must display 'Composition Taxable Person' on all invoices.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["gstin", "input-tax-credit"],
    example: "Restaurant with ₹80L turnover opts composition scheme: tax = ₹80L × 5% = ₹4L instead of filing monthly GSTR-1/3B.",
  },
  {
    slug: "e-way-bill",
    term: "E-Way Bill",
    shortDefinition: "An electronic document required for the movement of goods worth more than ₹50,000 across India.",
    fullDefinition: "An E-Way Bill (Electronic Way Bill) is a compliance document generated on the GST portal (ewaybillgst.gov.in) for movement of goods exceeding ₹50,000 in value. It is mandatory for inter-state movement and for most intra-state movements above state-specific thresholds. The e-way bill contains details of the consignment, parties, transporter, and vehicle. Validity: 1 day per 200 km (extended for over-dimensional cargo).",
    category: "GST",
    silo: "gst",
    relatedTerms: ["gstin", "e-invoice"],
    example: "Goods worth ₹2L moved from Mumbai to Pune: e-way bill must be generated before movement begins. Valid for 1 day.",
  },
  {
    slug: "hsn-code",
    term: "HSN Code",
    shortDefinition: "Harmonised System of Nomenclature — an internationally standardised 8-digit code used to classify goods for GST.",
    fullDefinition: "HSN (Harmonised System of Nomenclature) is a 6-digit (international) or 8-digit (Indian) code that classifies goods uniformly for customs and GST purposes. Under GST, businesses with turnover ≤₹5Cr use 4-digit HSN codes; above ₹5Cr use 8-digit codes. HSN codes determine the applicable GST rate. SAC (Service Accounting Code) is the equivalent for services.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["sac-code", "gstin"],
    example: "Laptops: HSN 8471. Mobile phones: HSN 8517. Gold jewellery: HSN 7113. Always verify on cbic.gov.in.",
  },
  {
    slug: "sac-code",
    term: "SAC Code",
    shortDefinition: "Service Accounting Code — a 6-digit code used to classify services for GST purposes in India.",
    fullDefinition: "SAC (Service Accounting Code) is a 6-digit classification system used in India to identify and classify services for GST. It is based on the United Nations Central Product Classification (UNCPC). Each service type has a specific SAC that determines the applicable GST rate. SAC codes must be mentioned on invoices for service providers with annual turnover above ₹20 lakh.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["hsn-code", "gstin"],
    example: "Software development services: SAC 998314. Consulting services: SAC 998311. Advertising: SAC 998361.",
  },
  {
    slug: "gstr-1",
    term: "GSTR-1",
    shortDefinition: "Monthly/quarterly statement of outward supplies of goods and services filed by registered GST taxpayers.",
    fullDefinition: "GSTR-1 is a GST return containing details of all outward supplies (sales) made by a registered dealer during a tax period. It includes: B2B invoices, B2C sales, credit notes, debit notes, advances received, and exports. Monthly filers (turnover >₹5Cr) file by the 11th of next month. QRMP filers file quarterly by the 13th of the month after the quarter.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["gstr-3b", "input-tax-credit", "gstr-2b"],
  },
  {
    slug: "gstr-3b",
    term: "GSTR-3B",
    shortDefinition: "Monthly self-assessed summary return showing outward supplies, ITC claimed, and net GST payable.",
    fullDefinition: "GSTR-3B is a monthly summary return filed by all regular registered taxpayers. It contains: outward taxable supplies, exempt/nil-rated/non-GST supplies, eligible ITC, and net tax payable. Tax must be paid before or along with filing. Due dates: 20th (category 1: large taxpayers), or 22nd/24th of next month depending on state. Late fee: ₹50/day (₹20/day for nil return), max ₹5,000.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["gstr-1", "input-tax-credit", "gstr-2b"],
  },
  {
    slug: "annual-return-gstr-9",
    term: "GSTR-9 (Annual Return)",
    shortDefinition: "Annual GST return consolidating monthly/quarterly return details for the full financial year.",
    fullDefinition: "GSTR-9 is the annual return filed by regular taxpayers providing a complete summary of all GST transactions for the financial year. It reconciles GSTR-1 and GSTR-3B filings. Mandatory for businesses with turnover >₹2Cr. Due date: 31 December of the following financial year. GSTR-9C (self-certified reconciliation statement) is mandatory for turnover >₹5Cr.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["gstr-1", "gstr-3b"],
  },
  {
    slug: "place-of-supply",
    term: "Place of Supply",
    shortDefinition: "The location where a supply of goods or services is deemed to have taken place, determining whether GST is CGST+SGST or IGST.",
    fullDefinition: "Place of Supply (PoS) is a critical GST concept that determines whether a transaction is intra-state (CGST+SGST) or inter-state (IGST). For goods: PoS = place of delivery. For services: generally PoS = location of the recipient. Special rules apply for services like banking, transport, insurance, and telecommunications. Correct PoS determination is essential for correct tax levy.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["igst", "cgst", "sgst"],
  },
  {
    slug: "zero-rated-supply",
    term: "Zero-Rated Supply",
    shortDefinition: "Exports and supplies to SEZs taxed at 0% GST, with full ITC available to the supplier.",
    fullDefinition: "Zero-rated supply under GST Section 16 of IGST Act includes exports of goods/services and supplies to Special Economic Zones (SEZs). Unlike exempt supplies (where ITC is reversed), zero-rated suppliers can claim full ITC on inputs. They can either export under LUT without paying IGST (and claim refund of ITC) or pay IGST at the time of export and claim its refund.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["input-tax-credit", "igst"],
  },
  {
    slug: "exempt-supply",
    term: "Exempt Supply",
    shortDefinition: "Goods or services not attracting any GST, where ITC related to such supplies must be reversed.",
    fullDefinition: "Exempt supplies under GST are those on which no GST is payable. Examples include fresh produce, healthcare services, and educational services. Unlike zero-rated supplies, ITC attributable to exempt supplies must be reversed. Businesses making both taxable and exempt supplies must undertake ITC apportionment as per Rule 42 and 43 of CGST Rules.",
    category: "GST",
    silo: "gst",
    relatedTerms: ["zero-rated-supply", "input-tax-credit"],
  },

  // Income Tax Terms
  {
    slug: "tds",
    term: "TDS (Tax Deducted at Source)",
    shortDefinition: "A system where tax is deducted at the point of income payment, ensuring advance collection of income tax.",
    fullDefinition: "TDS (Tax Deducted at Source) is a mechanism under the Income Tax Act where the payer deducts a specified percentage of tax from certain payments (salary, professional fees, rent, interest, etc.) before making the payment to the recipient. The deductor deposits TDS to the government and files TDS returns quarterly. The recipient gets credit for TDS deducted when filing their income tax return.",
    category: "Income Tax",
    silo: "tax",
    relatedTerms: ["form-16", "pan", "tan"],
    example: "Architect charges ₹50,000 fee. Client deducts TDS @10% = ₹5,000, pays ₹45,000 to architect. Architect gets Form 16A showing ₹5,000 TDS credit.",
  },
  {
    slug: "form-16",
    term: "Form 16",
    shortDefinition: "TDS certificate issued by employer to employee, showing salary paid and tax deducted for the financial year.",
    fullDefinition: "Form 16 is a TDS certificate mandatorily issued by employers to salaried employees by 15 June each year. Part A: Contains employer/employee details, TAN, PAN, and quarterly TDS deposited. Part B: Detailed salary breakup, exemptions, deductions, and tax computation. Form 16 is the primary document used for filing ITR by salaried employees.",
    category: "Income Tax",
    silo: "tax",
    relatedTerms: ["tds", "itr", "pan"],
  },
  {
    slug: "pan",
    term: "PAN (Permanent Account Number)",
    shortDefinition: "A unique 10-character alphanumeric identifier issued by the Income Tax Department to all taxpayers.",
    fullDefinition: "PAN (Permanent Account Number) is a 10-character alphanumeric identifier (e.g., ABCDE1234F) issued by the Income Tax Department. It is mandatory for filing ITR, opening bank accounts, TDS credit, financial transactions above ₹50,000, and GST registration. Structure: First 3 letters (sequence), 4th (type: P=person, C=company, H=HUF), 5th (surname initial), next 4 digits, last check digit.",
    category: "Income Tax",
    silo: "tax",
    relatedTerms: ["tan", "gstin", "tds"],
  },
  {
    slug: "itr",
    term: "ITR (Income Tax Return)",
    shortDefinition: "Annual declaration filed with the Income Tax Department disclosing income, deductions, and tax paid for the financial year.",
    fullDefinition: "ITR (Income Tax Return) is the form filed annually by taxpayers to report income, claim deductions, and compute tax liability. Different ITR forms apply to different taxpayer types: ITR-1 (Sahaj) for salaried individuals with one house property and other income up to ₹50L. ITR-2 for individuals with capital gains. ITR-3 for business income. ITR-4 for presumptive taxation. Due dates: 31 July (non-audit), 31 October (audit), 31 December (companies/audit partners).",
    category: "Income Tax",
    silo: "tax",
    relatedTerms: ["pan", "form-16", "tds", "advance-tax"],
  },
  {
    slug: "advance-tax",
    term: "Advance Tax",
    shortDefinition: "Income tax paid in instalments during the financial year before the year ends, applicable when tax liability exceeds ₹10,000.",
    fullDefinition: "Advance tax is the income tax paid in four instalments during the financial year by those with tax liability exceeding ₹10,000 (after TDS credit). Instalments: 15 June (15%), 15 September (45%), 15 December (75%), 15 March (100%). Failure to pay results in interest under Sections 234B and 234C at 1% per month. Salaried employees whose entire tax is covered by TDS generally don't need to pay advance tax.",
    category: "Income Tax",
    silo: "tax",
    relatedTerms: ["itr", "tds", "section-234b"],
  },
  {
    slug: "standard-deduction",
    term: "Standard Deduction",
    shortDefinition: "A flat deduction from salary income — ₹75,000 (new regime) or ₹50,000 (old regime) — without requiring proof of actual expenditure.",
    fullDefinition: "Standard deduction is a fixed deduction from salary and pension income, introduced to simplify tax computation by replacing earlier deductions for transport and medical reimbursement. For FY 2025-26: ₹75,000 under the new tax regime, ₹50,000 under the old regime. Available to all salaried individuals and pensioners automatically without submitting any bills or receipts.",
    category: "Income Tax",
    silo: "tax",
    relatedTerms: ["itr", "old-tax-regime", "new-tax-regime"],
  },
  {
    slug: "section-80c",
    term: "Section 80C",
    shortDefinition: "Income tax deduction up to ₹1,50,000 for specified investments: PPF, ELSS, EPF, NSC, life insurance premium, home loan principal, etc.",
    fullDefinition: "Section 80C of the Income Tax Act, 1961 allows deductions up to ₹1,50,000 from taxable income (only in old tax regime) for investments in: ELSS mutual funds, PPF contributions, NSC, 5-year FD, life insurance premiums, EPF contributions, NPS under 80CCD(1), home loan principal repayment, children's tuition fees, Sukanya Samriddhi Yojana, and ULIPs.",
    category: "Income Tax",
    silo: "tax",
    relatedTerms: ["ppf", "elss", "nps", "epf"],
    example: "Investing ₹1.5L in ELSS + PPF: saves ₹46,800 tax at 30% slab (30% × ₹1.5L × 1.04 cess).",
  },
  {
    slug: "capital-gains-tax",
    term: "Capital Gains Tax",
    shortDefinition: "Tax on profit from sale of capital assets like shares, mutual funds, property, and gold in India.",
    fullDefinition: "Capital Gains Tax is levied on profits from the sale of capital assets. Types: STCG (Short-Term Capital Gains): held <12 months for listed equity/equity MF (taxed @20%), <24 months for property and gold (taxed at slab rate). LTCG (Long-Term Capital Gains): equity/equity MF held >12 months — gains above ₹1.25L taxed @12.5%. Property held >24 months — taxed @12.5% without indexation (as per Finance Act 2024 changes).",
    category: "Income Tax",
    silo: "tax",
    relatedTerms: ["itr", "stcg", "ltcg"],
  },

  // Finance Terms
  {
    slug: "emi",
    term: "EMI (Equated Monthly Instalment)",
    shortDefinition: "Fixed monthly payment to repay a loan, comprising both principal and interest components.",
    fullDefinition: "EMI is the fixed amount paid by a borrower to a lender on a specific date each month. Formula: EMI = P × r × (1+r)^n / [(1+r)^n − 1], where P = principal, r = monthly interest rate, n = number of months. Early EMIs have higher interest component; later EMIs shift more towards principal — this is the reducing balance method.",
    category: "Finance",
    silo: "finance",
    relatedTerms: ["home-loan", "personal-loan", "amortisation"],
    example: "₹30L home loan at 8.5% for 20 years: EMI = ₹26,035/month. Total interest paid = ₹32.5L.",
  },
  {
    slug: "compound-interest",
    term: "Compound Interest",
    shortDefinition: "Interest calculated on both the initial principal and the accumulated interest from previous periods — the 'interest on interest' concept.",
    fullDefinition: "Compound interest is calculated on the original principal plus all accumulated interest. Formula: A = P(1 + r/n)^(nt). Where P = principal, r = annual rate, n = compounding frequency per year, t = time in years. Higher compounding frequency = higher effective returns. Annual compounding: 8%. Monthly compounding: effective 8.3%. Daily compounding: effective 8.33%.",
    category: "Finance",
    silo: "finance",
    relatedTerms: ["simple-interest", "fd", "ppf"],
    example: "₹1L at 8% annually for 10 years: Simple interest = ₹1.8L. Compound (annual) = ₹2.16L. Compound (monthly) = ₹2.21L.",
  },
  {
    slug: "cibil-score",
    term: "CIBIL Score",
    shortDefinition: "Credit score (300–900) issued by TransUnion CIBIL indicating creditworthiness — higher is better for loan approvals.",
    fullDefinition: "CIBIL score is a 3-digit number (300–900) calculated by TransUnion CIBIL (India's oldest credit bureau) based on credit history. Factors: Payment history (35%), Credit utilisation (30%), Credit age (15%), Credit mix (10%), New credit enquiries (10%). Score 750+ = excellent — best loan rates. 700–749 = good. 650–699 = fair — higher rates. Below 650 = poor — likely rejection.",
    category: "Finance",
    silo: "finance",
    relatedTerms: ["home-loan", "personal-loan"],
    example: "CIBIL 780: Home loan at 8.5%. CIBIL 680: Same bank may offer 9.5% or reject.",
  },
  {
    slug: "repo-rate",
    term: "Repo Rate",
    shortDefinition: "The rate at which RBI lends money to commercial banks — changes affect home loan and deposit rates across India.",
    fullDefinition: "The Repo Rate (Repurchase Agreement Rate) is the interest rate at which the Reserve Bank of India (RBI) lends short-term funds to commercial banks against government securities. It is the primary monetary policy tool. When RBI raises the repo rate, borrowing becomes expensive → banks raise lending rates → EMIs rise. Rate cuts reduce borrowing costs → EMIs fall. All floating-rate loans in India are linked to the repo rate (RLLR — Repo Linked Lending Rate).",
    category: "Finance",
    silo: "finance",
    relatedTerms: ["rbi", "mclr", "inflation"],
  },
  {
    slug: "sip",
    term: "SIP (Systematic Investment Plan)",
    shortDefinition: "A method of investing a fixed amount regularly in mutual funds, leveraging rupee-cost averaging and compounding.",
    fullDefinition: "SIP (Systematic Investment Plan) allows investors to invest a fixed amount (minimum ₹100) in a mutual fund scheme at regular intervals (daily, weekly, monthly). Benefits: Rupee-cost averaging (buy more units when NAV is low), compounding, discipline, and affordability. SIP returns are calculated using XIRR (not simple average). Long-term equity SIP CAGR: historically 11–14% in India.",
    category: "Finance",
    silo: "finance",
    relatedTerms: ["mutual-fund", "nav", "elss"],
    example: "₹5,000/month SIP for 20 years at 12% CAGR: invested ₹12L, corpus ≈ ₹50L.",
  },
  {
    slug: "nav",
    term: "NAV (Net Asset Value)",
    shortDefinition: "The per-unit value of a mutual fund scheme, calculated daily by dividing total assets minus liabilities by the number of units.",
    fullDefinition: "NAV (Net Asset Value) is the market value per unit of a mutual fund. Formula: NAV = (Total Assets − Total Liabilities) / Total Units Outstanding. NAV is calculated and published daily (after market close) by AMFI. For equity funds, NAV fluctuates with market prices. Buying at a lower NAV doesn't mean it's cheaper — what matters is the growth rate of NAV over time.",
    category: "Finance",
    silo: "finance",
    relatedTerms: ["sip", "mutual-fund", "amfi"],
  },

  // Salary Terms
  {
    slug: "ctc",
    term: "CTC (Cost to Company)",
    shortDefinition: "Total annual cost incurred by an employer for an employee, including salary, allowances, and employer contributions.",
    fullDefinition: "CTC (Cost to Company) is the total annual amount an employer spends on an employee. It includes: Basic salary, HRA, special allowances, LTA, medical allowance, performance bonus, employer's PF contribution (12%), employer's ESI contribution (3.25% if applicable), gratuity provision (4.81%), and any other benefits. CTC ≠ take-home salary — significant deductions apply.",
    category: "Salary",
    silo: "salary",
    relatedTerms: ["in-hand-salary", "hra", "epf"],
    example: "₹12L CTC: Basic ₹6L, HRA ₹3L, Allowances ₹1.5L, Employer PF ₹72K, Gratuity provision ₹28.9K, Bonus ₹1L = ₹12L CTC. Take-home ≈ ₹80–85K/month.",
  },
  {
    slug: "in-hand-salary",
    term: "In-Hand Salary (Take-Home Salary)",
    shortDefinition: "The actual salary credited to an employee's bank account after all deductions like TDS, EPF, and professional tax.",
    fullDefinition: "In-hand salary = Gross salary − Employee deductions. Gross salary = Basic + HRA + all allowances. Deductions: TDS (income tax), Employee EPF contribution (12% of basic), Professional Tax (₹200/month in Maharashtra, varies by state), ESI (0.75% if applicable). Using a salary calculator gives precise in-hand figures based on CTC structure and tax regime.",
    category: "Salary",
    silo: "salary",
    relatedTerms: ["ctc", "tds", "epf", "hra"],
  },
  {
    slug: "hra",
    term: "HRA (House Rent Allowance)",
    shortDefinition: "Salary component paid by employers to cover employees' house rent expenses, partially or fully exempt from income tax.",
    fullDefinition: "HRA (House Rent Allowance) is a salary component specifically for rental accommodation expenses. Tax exemption = minimum of: (1) Actual HRA received, (2) Actual rent paid minus 10% of Basic, (3) 50% of Basic (metro cities: Delhi, Mumbai, Chennai, Kolkata) or 40% (non-metro). HRA exemption is only available in the old tax regime. If actual rent exceeds ₹1L/year, landlord's PAN must be furnished.",
    category: "Salary",
    silo: "salary",
    relatedTerms: ["ctc", "in-hand-salary", "section-80c"],
  },

  // Banking Terms
  {
    slug: "fd",
    term: "FD (Fixed Deposit)",
    shortDefinition: "A bank deposit instrument offering a fixed interest rate for a predetermined period, principal guaranteed by DICGC up to ₹5 lakh.",
    fullDefinition: "Fixed Deposit (FD) is a savings instrument offered by banks and NBFCs where a lump sum is deposited for a specific tenure (7 days to 10 years) at a pre-agreed interest rate. Interest can be cumulative (reinvested) or paid out periodically. DICGC insures ₹5L per depositor per bank (both principal + interest combined). Tax: interest is taxable as 'income from other sources' at slab rate.",
    category: "Banking",
    silo: "banking",
    relatedTerms: ["rd", "compound-interest", "tds"],
  },
  {
    slug: "rd",
    term: "RD (Recurring Deposit)",
    shortDefinition: "A bank deposit where a fixed amount is deposited monthly for a predetermined period, earning compound interest.",
    fullDefinition: "Recurring Deposit (RD) is a systematic savings product where a fixed monthly deposit earns compound interest. Minimum ₹100/month. Tenure: 6 months to 10 years. Interest = principal × (1 + r/4)^(4t) adjusted for monthly deposits (using instalment method). Tax: interest taxable at slab rate. TDS if total interest >₹40,000/year. DICGC insurance applies.",
    category: "Banking",
    silo: "banking",
    relatedTerms: ["fd", "sip", "compound-interest"],
  },
  {
    slug: "nre-account",
    term: "NRE Account",
    shortDefinition: "Non-Resident External rupee account for NRIs to deposit foreign earnings in India — tax-free interest and full repatriation allowed.",
    fullDefinition: "NRE (Non-Resident External) account is a rupee-denominated account for NRIs to park foreign earnings in India. Key features: Deposits made in foreign currency (converted to INR). Interest fully tax-free in India. Both principal and interest freely repatriable outside India. Joint account allowed with another NRI. Can maintain as savings or FD. NRE FD rates range from 6.5–7.5% (tax-free).",
    category: "Banking",
    silo: "banking",
    relatedTerms: ["nro-account", "fcnr-account"],
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return GLOSSARY.find((g) => g.slug === slug);
}

export function getGlossaryBySilo(silo: string): GlossaryTerm[] {
  return GLOSSARY.filter((g) => g.silo === silo);
}

export function getGlossaryByCategory(category: string): GlossaryTerm[] {
  return GLOSSARY.filter((g) => g.category === category);
}

export function getRelatedGlossaryTerms(slug: string): GlossaryTerm[] {
  const term = getGlossaryTermBySlug(slug);
  if (!term) return [];
  return term.relatedTerms
    .map((s) => getGlossaryTermBySlug(s))
    .filter(Boolean) as GlossaryTerm[];
}

export function getAllGlossarySlugs(): string[] {
  return GLOSSARY.map((g) => g.slug);
}
