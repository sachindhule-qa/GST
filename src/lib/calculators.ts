export type GSTResult = {
  gst: number;
  total: number;
  base: number;
  cgst: number;
  sgst: number;
  igst: number;
};

export function calculateGST(
  amount: number,
  rate: number,
  type: "exclusive" | "inclusive"
): GSTResult {
  if (amount <= 0 || rate < 0) {
    return { gst: 0, total: 0, base: 0, cgst: 0, sgst: 0, igst: 0 };
  }
  if (type === "exclusive") {
    const gst = (amount * rate) / 100;
    return {
      gst,
      total: amount + gst,
      base: amount,
      cgst: gst / 2,
      sgst: gst / 2,
      igst: gst,
    };
  }
  const gst = amount - (amount * 100) / (100 + rate);
  return {
    gst,
    base: amount - gst,
    total: amount,
    cgst: gst / 2,
    sgst: gst / 2,
    igst: gst,
  };
}

export type TDSResult = {
  tds: number;
  net: number;
  rate: number;
};

const TDS_RATES: Record<string, number> = {
  "194C": 1,
  "194J": 10,
  "194H": 5,
  "194I": 10,
  "194A": 10,
  "194B": 30,
};

export function calculateTDS(amount: number, section: string): TDSResult {
  if (amount <= 0) return { tds: 0, net: 0, rate: 0 };
  const rate = TDS_RATES[section] ?? 10;
  const tds = (amount * rate) / 100;
  return { tds, net: amount - tds, rate };
}

export type TaxSlabBreakdown = {
  slab: string;
  taxable: number;
  rate: number;
  tax: number;
};

export type IncomeTaxResult = {
  grossTax: number;
  cess: number;
  totalTax: number;
  netIncome: number;
  effectiveRate: number;
  breakdown: TaxSlabBreakdown[];
};

export function calculateIncomeTax(income: number): IncomeTaxResult {
  const slabs = [
    { min: 0, max: 300000, rate: 0 },
    { min: 300000, max: 600000, rate: 5 },
    { min: 600000, max: 900000, rate: 10 },
    { min: 900000, max: 1200000, rate: 15 },
    { min: 1200000, max: 1500000, rate: 20 },
    { min: 1500000, max: Infinity, rate: 30 },
  ];

  if (income <= 0) {
    return {
      grossTax: 0,
      cess: 0,
      totalTax: 0,
      netIncome: 0,
      effectiveRate: 0,
      breakdown: [],
    };
  }

  const breakdown: TaxSlabBreakdown[] = [];
  let grossTax = 0;

  for (const slab of slabs) {
    if (income <= slab.min) break;
    const taxable = Math.min(income, slab.max) - slab.min;
    if (taxable <= 0) continue;
    const tax = (taxable * slab.rate) / 100;
    grossTax += tax;
    breakdown.push({
      slab: `₹${formatIndian(slab.min)} – ₹${slab.max === Infinity ? "∞" : formatIndian(slab.max)}`,
      taxable,
      rate: slab.rate,
      tax,
    });
  }

  const cess = grossTax * 0.04;
  const totalTax = grossTax + cess;

  return {
    grossTax,
    cess,
    totalTax,
    netIncome: income - totalTax,
    effectiveRate: (totalTax / income) * 100,
    breakdown,
  };
}

export type HRAResult = {
  actualHRA: number;
  rentMinusTenPercent: number;
  percentOfBasic: number;
  exemption: number;
  taxableHRA: number;
};

export function calculateHRA(
  basicSalary: number,
  hraReceived: number,
  rentPaid: number,
  isMetro: boolean
): HRAResult {
  const actualHRA = hraReceived;
  const rentMinusTenPercent = Math.max(0, rentPaid - basicSalary * 0.1);
  const percentOfBasic = basicSalary * (isMetro ? 0.5 : 0.4);
  const exemption = Math.min(actualHRA, rentMinusTenPercent, percentOfBasic);
  const taxableHRA = Math.max(0, hraReceived - exemption);

  return {
    actualHRA,
    rentMinusTenPercent,
    percentOfBasic,
    exemption,
    taxableHRA,
  };
}

export type PFResult = {
  employeePF: number;
  employerEPF: number;
  employerEPS: number;
  employerTotal: number;
  totalContribution: number;
};

export function calculatePF(basicSalary: number): PFResult {
  if (basicSalary <= 0) {
    return {
      employeePF: 0,
      employerEPF: 0,
      employerEPS: 0,
      employerTotal: 0,
      totalContribution: 0,
    };
  }

  const employeePF = basicSalary * 0.12;
  const epsWage = Math.min(basicSalary, 15000);
  const employerEPS = epsWage * 0.0833;
  const employerEPF = basicSalary * 0.12 - employerEPS;
  const employerTotal = employerEPF + employerEPS;

  return {
    employeePF,
    employerEPF: Math.max(0, employerEPF),
    employerEPS,
    employerTotal,
    totalContribution: employeePF + employerTotal,
  };
}

export type GratuityResult = {
  gratuity: number;
  formula: string;
};

export function calculateGratuity(
  lastDrawnSalary: number,
  yearsOfService: number,
  isCovered: boolean
): GratuityResult {
  if (lastDrawnSalary <= 0 || yearsOfService <= 0) {
    return { gratuity: 0, formula: "" };
  }

  const divisor = isCovered ? 26 : 30;
  const gratuity = (15 * lastDrawnSalary * yearsOfService) / divisor;
  const formula = `(15 × ${formatIndian(lastDrawnSalary)} × ${yearsOfService}) ÷ ${divisor}`;

  return { gratuity, formula };
}

export type ProfessionalTaxResult = {
  monthlyTax: number;
  annualTax: number;
};

const PROFESSIONAL_TAX_SLABS: Record<
  string,
  { min: number; max: number; tax: number }[]
> = {
  Maharashtra: [
    { min: 0, max: 7500, tax: 0 },
    { min: 7501, max: 10000, tax: 175 },
    { min: 10001, max: Infinity, tax: 200 },
  ],
  Karnataka: [
    { min: 0, max: 15000, tax: 0 },
    { min: 15001, max: Infinity, tax: 200 },
  ],
  "West Bengal": [
    { min: 0, max: 10000, tax: 0 },
    { min: 10001, max: 15000, tax: 110 },
    { min: 15001, max: 25000, tax: 130 },
    { min: 25001, max: Infinity, tax: 200 },
  ],
  Telangana: [
    { min: 0, max: 15000, tax: 0 },
    { min: 15001, max: 20000, tax: 150 },
    { min: 20001, max: Infinity, tax: 200 },
  ],
  "Tamil Nadu": [
    { min: 0, max: 21000, tax: 0 },
    { min: 21001, max: 30000, tax: 135 },
    { min: 30001, max: 45000, tax: 315 },
    { min: 45001, max: 60000, tax: 690 },
    { min: 60001, max: 75000, tax: 1025 },
    { min: 75001, max: Infinity, tax: 1250 },
  ],
};

export function calculateProfessionalTax(
  monthlySalary: number,
  state: string
): ProfessionalTaxResult {
  const slabs = PROFESSIONAL_TAX_SLABS[state];
  if (!slabs || monthlySalary <= 0) {
    return { monthlyTax: 0, annualTax: 0 };
  }

  let monthlyTax = 0;
  for (const slab of slabs) {
    if (monthlySalary >= slab.min && monthlySalary <= slab.max) {
      monthlyTax = slab.tax;
      break;
    }
    if (monthlySalary > slab.max && slab.max === Infinity) {
      monthlyTax = slab.tax;
    }
  }

  return { monthlyTax, annualTax: monthlyTax * 12 };
}

export type GSTOnRentResult = GSTResult & {
  monthlyRent: number;
  annualRent: number;
  annualGST: number;
};

export function calculateGSTOnRent(
  monthlyRent: number,
  isRegistered: boolean,
  rate = 18
): GSTOnRentResult {
  const annualRent = monthlyRent * 12;
  if (!isRegistered || monthlyRent <= 0) {
    return {
      monthlyRent,
      annualRent,
      annualGST: 0,
      gst: 0,
      total: monthlyRent,
      base: monthlyRent,
      cgst: 0,
      sgst: 0,
      igst: 0,
    };
  }

  const result = calculateGST(monthlyRent, rate, "exclusive");
  return {
    ...result,
    monthlyRent,
    annualRent,
    annualGST: result.gst * 12,
  };
}

export type HSNCode = {
  code: string;
  description: string;
  gstRate: number;
};

export const HSN_CODES: HSNCode[] = [
  { code: "0101", description: "Live horses, asses, mules and hinnies", gstRate: 0 },
  { code: "0201", description: "Meat of bovine animals, fresh or chilled", gstRate: 0 },
  { code: "0401", description: "Milk and cream, not concentrated", gstRate: 0 },
  { code: "0701", description: "Potatoes, fresh or chilled", gstRate: 0 },
  { code: "0801", description: "Coconuts, fresh or dried", gstRate: 0 },
  { code: "1001", description: "Wheat and meslin", gstRate: 0 },
  { code: "1701", description: "Cane or beet sugar", gstRate: 5 },
  { code: "1905", description: "Bread, pastry, cakes, biscuits", gstRate: 5 },
  { code: "2106", description: "Food preparations not elsewhere specified", gstRate: 5 },
  { code: "2201", description: "Waters, including mineral waters", gstRate: 12 },
  { code: "2202", description: "Waters, sweetened or flavoured", gstRate: 12 },
  { code: "3004", description: "Medicaments for therapeutic uses", gstRate: 12 },
  { code: "3304", description: "Beauty or make-up preparations", gstRate: 18 },
  { code: "3401", description: "Soap, organic surface-active products", gstRate: 18 },
  { code: "3923", description: "Articles for conveyance or packing of goods", gstRate: 18 },
  { code: "4011", description: "New pneumatic tyres, of rubber", gstRate: 28 },
  { code: "4202", description: "Trunks, suitcases, vanity cases", gstRate: 18 },
  { code: "4901", description: "Printed books, brochures, leaflets", gstRate: 0 },
  { code: "6109", description: "T-shirts, singlets and other vests, knitted", gstRate: 5 },
  { code: "6203", description: "Men's or boys' suits, ensembles, jackets", gstRate: 5 },
  { code: "6403", description: "Footwear with outer soles of rubber/plastic", gstRate: 18 },
  { code: "7108", description: "Gold, unwrought or in semi-manufactured forms", gstRate: 3 },
  { code: "8414", description: "Air or vacuum pumps, compressors", gstRate: 18 },
  { code: "8471", description: "Automatic data processing machines (computers)", gstRate: 18 },
  { code: "8517", description: "Telephone sets, smartphones", gstRate: 18 },
  { code: "8703", description: "Motor cars and vehicles for transport of persons", gstRate: 28 },
  { code: "8708", description: "Parts and accessories of motor vehicles", gstRate: 28 },
  { code: "9403", description: "Other furniture and parts thereof", gstRate: 18 },
  { code: "996311", description: "Restaurant services (AC)", gstRate: 5 },
  { code: "996331", description: "Hotel accommodation services", gstRate: 12 },
  { code: "997212", description: "Rental services of commercial property", gstRate: 18 },
  { code: "998314", description: "IT consulting and support services", gstRate: 18 },
  { code: "998511", description: "Legal services by advocates", gstRate: 18 },
  { code: "998599", description: "Other professional services", gstRate: 18 },
];

export function searchHSNCodes(query: string): HSNCode[] {
  const q = query.trim().toLowerCase();
  if (!q) return HSN_CODES.slice(0, 10);
  return HSN_CODES.filter(
    (item) =>
      item.code.includes(q) ||
      item.description.toLowerCase().includes(q)
  );
}

export type InvoiceNumberResult = {
  invoiceNumber: string;
  format: string;
};

export function generateInvoiceNumber(
  prefix: string,
  sequence: number,
  financialYear?: string
): InvoiceNumberResult {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const fy =
    financialYear ||
    (now.getMonth() >= 3
      ? `${year}-${String(year + 1).slice(-2)}`
      : `${year - 1}-${String(year).slice(-2)}`);
  const cleanPrefix = prefix.toUpperCase().replace(/[^A-Z0-9]/g, "") || "INV";
  const seq = String(sequence).padStart(4, "0");
  const invoiceNumber = `${cleanPrefix}/${fy}/${month}/${seq}`;
  const format = "PREFIX/FY/MONTH/SEQUENCE";

  return { invoiceNumber, format };
}

export function formatIndian(num: number): string {
  return num.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
}

export function formatCurrency(num: number): string {
  return `₹${formatIndian(Math.round(num * 100) / 100)}`;
}
