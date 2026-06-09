"use client";

import { useState } from "react";
import { NewCalculator } from "@/lib/all-calculators";

type Props = { calculator: NewCalculator };

function calculate(calc: NewCalculator, inputs: Record<string, string>): string {
  const get = (i: number) => parseFloat(inputs[i] || "0") || 0;

  switch (calc.slug) {
    case "emi-calculator":
    case "home-loan-calculator":
    case "personal-loan-calculator":
    case "car-loan-calculator": {
      const P = get(0);
      const annualRate = get(1);
      const n = calc.slug === "home-loan-calculator" ? get(2) * 12 : get(2);
      if (!P || !annualRate || !n) return "";
      const r = annualRate / 12 / 100;
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const total = emi * n;
      const interest = total - P;
      return `Monthly EMI: ₹${Math.round(emi).toLocaleString("en-IN")} | Total Interest: ₹${Math.round(interest).toLocaleString("en-IN")} | Total Payment: ₹${Math.round(total).toLocaleString("en-IN")}`;
    }

    case "sip-calculator":
    case "step-up-sip-calculator": {
      const P = get(0);
      const annualRate = get(1);
      const years = get(2);
      if (!P || !annualRate || !years) return "";
      const r = annualRate / 12 / 100;
      const n = years * 12;
      const fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const invested = P * n;
      return `Invested: ₹${Math.round(invested).toLocaleString("en-IN")} | Corpus: ₹${Math.round(fv).toLocaleString("en-IN")} | Gain: ₹${Math.round(fv - invested).toLocaleString("en-IN")}`;
    }

    case "fd-calculator": {
      const P = get(0);
      const r = get(1) / 100;
      const months = get(2);
      if (!P || !r || !months) return "";
      const n = 4; // quarterly
      const t = months / 12;
      const A = P * Math.pow(1 + r / n, n * t);
      const interest = A - P;
      return `Maturity Amount: ₹${Math.round(A).toLocaleString("en-IN")} | Interest Earned: ₹${Math.round(interest).toLocaleString("en-IN")}`;
    }

    case "rd-calculator": {
      const monthly = get(0);
      const rate = get(1) / 400; // quarterly rate
      const months = get(2);
      if (!monthly || !rate || !months) return "";
      let balance = 0;
      for (let i = 0; i < months; i++) {
        balance = (balance + monthly) * (1 + rate / 3);
      }
      const invested = monthly * months;
      return `Maturity: ₹${Math.round(balance).toLocaleString("en-IN")} | Interest: ₹${Math.round(balance - invested).toLocaleString("en-IN")} | Invested: ₹${Math.round(invested).toLocaleString("en-IN")}`;
    }

    case "ppf-calculator":
    case "sukanya-samriddhi-calculator": {
      const annual = get(0);
      const rate = (calc.slug === "sukanya-samriddhi-calculator" ? get(2) : get(1)) / 100;
      const years = calc.slug === "sukanya-samriddhi-calculator" ? Math.min(21 - get(1), 15) : get(2);
      if (!annual || !rate || !years) return "";
      let balance = 0;
      for (let i = 0; i < Math.min(years, 15); i++) {
        balance = (balance + annual) * (1 + rate);
      }
      const remainingYears = Math.max(0, years - 15);
      for (let i = 0; i < remainingYears; i++) {
        balance *= (1 + rate);
      }
      const invested = annual * Math.min(years, 15);
      return `Maturity Amount: ₹${Math.round(balance).toLocaleString("en-IN")} | Tax-Free Gain: ₹${Math.round(balance - invested).toLocaleString("en-IN")} | Invested: ₹${Math.round(invested).toLocaleString("en-IN")}`;
    }

    case "nps-calculator": {
      const monthly = get(0);
      const age = get(1);
      const retirement = get(2);
      const rate = get(3) / 100;
      if (!monthly || !age || !retirement || !rate) return "";
      const years = retirement - age;
      const r = rate / 12;
      const n = years * 12;
      const corpus = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const lumpsum = corpus * 0.6;
      const annuityCorpus = corpus * 0.4;
      const monthlyPension = (annuityCorpus * 0.06) / 12;
      return `Corpus: ₹${Math.round(corpus).toLocaleString("en-IN")} | Lump Sum (60%): ₹${Math.round(lumpsum).toLocaleString("en-IN")} | Est. Monthly Pension: ₹${Math.round(monthlyPension).toLocaleString("en-IN")}`;
    }

    case "salary-calculator": {
      const ctc = get(0);
      if (!ctc) return "";
      const monthly = ctc / 12;
      const basic = monthly * 0.4;
      const employeePF = basic * 0.12;
      const professionalTax = 200;
      const grossMonthly = monthly - (ctc * 0.04 / 12); // remove employer PF
      const inHand = grossMonthly - employeePF - professionalTax;
      return `In-Hand: ₹${Math.round(inHand).toLocaleString("en-IN")}/month | Employee PF: ₹${Math.round(employeePF).toLocaleString("en-IN")}/month | Gross: ₹${Math.round(grossMonthly).toLocaleString("en-IN")}/month`;
    }

    case "income-tax-calculator": {
      const income = get(0);
      if (!income) return "";
      // New regime FY 2025-26
      const std = 75000;
      const taxable = Math.max(0, income - std);
      let tax = 0;
      if (taxable <= 300000) tax = 0;
      else if (taxable <= 700000) tax = (taxable - 300000) * 0.05;
      else if (taxable <= 1000000) tax = 20000 + (taxable - 700000) * 0.10;
      else if (taxable <= 1200000) tax = 50000 + (taxable - 1000000) * 0.15;
      else if (taxable <= 1500000) tax = 80000 + (taxable - 1200000) * 0.20;
      else tax = 140000 + (taxable - 1500000) * 0.30;
      if (taxable <= 700000) tax = 0; // 87A rebate
      const cess = tax * 0.04;
      const total = tax + cess;
      return `New Regime Tax: ₹${Math.round(total).toLocaleString("en-IN")} | Base Tax: ₹${Math.round(tax).toLocaleString("en-IN")} | Cess: ₹${Math.round(cess).toLocaleString("en-IN")}`;
    }

    case "lumpsum-calculator":
    case "compound-interest-calculator": {
      const P = get(0);
      const rate = get(1) / 100;
      const years = get(2);
      if (!P || !rate || !years) return "";
      const fv = P * Math.pow(1 + rate, years);
      const gain = fv - P;
      return `Future Value: ₹${Math.round(fv).toLocaleString("en-IN")} | Total Gain: ₹${Math.round(gain).toLocaleString("en-IN")} | CAGR: ${get(1)}%`;
    }

    case "roi-calculator": {
      const investment = get(0);
      const returns = get(1);
      const years = get(2);
      if (!investment || !returns) return "";
      const roi = ((returns - investment) / investment) * 100;
      const annualRoi = years ? (Math.pow(returns / investment, 1 / years) - 1) * 100 : roi;
      return `ROI: ${roi.toFixed(1)}% | Annualised ROI: ${annualRoi.toFixed(1)}% | Net Profit: ₹${Math.round(returns - investment).toLocaleString("en-IN")}`;
    }

    case "margin-calculator": {
      const revenue = get(0);
      const cogs = get(1);
      const opex = get(2);
      if (!revenue || !cogs) return "";
      const grossProfit = revenue - cogs;
      const netProfit = grossProfit - opex;
      const grossMargin = (grossProfit / revenue) * 100;
      const netMargin = (netProfit / revenue) * 100;
      return `Gross Margin: ${grossMargin.toFixed(1)}% | Net Margin: ${netMargin.toFixed(1)}% | Gross Profit: ₹${Math.round(grossProfit).toLocaleString("en-IN")} | Net Profit: ₹${Math.round(netProfit).toLocaleString("en-IN")}`;
    }

    case "break-even-calculator": {
      const fixed = get(0);
      const variable = get(1);
      const price = get(2);
      if (!fixed || !variable || !price) return "";
      const contribution = price - variable;
      if (contribution <= 0) return "Selling price must be higher than variable cost";
      const bepUnits = Math.ceil(fixed / contribution);
      const bepRevenue = bepUnits * price;
      return `Break-Even: ${bepUnits.toLocaleString("en-IN")} units | Break-Even Revenue: ₹${Math.round(bepRevenue).toLocaleString("en-IN")} | Contribution per Unit: ₹${Math.round(contribution).toLocaleString("en-IN")}`;
    }

    case "gst-profit-calculator": {
      const revenue = get(0);
      const cogs = get(1);
      const opex = get(2);
      const gstRate = parseFloat(inputs[3] || "18");
      if (!revenue) return "";
      const grossProfit = revenue - cogs;
      const netGST = revenue * gstRate / 100 - cogs * gstRate / 100;
      const netProfit = grossProfit - opex;
      return `Gross Profit: ₹${Math.round(grossProfit).toLocaleString("en-IN")} | Net GST Payable: ₹${Math.round(netGST).toLocaleString("en-IN")} | Net Profit Before Tax: ₹${Math.round(netProfit).toLocaleString("en-IN")}`;
    }

    case "elss-calculator": {
      const amount = get(0);
      const rate = get(1) / 100;
      const years = get(3) || 3;
      const slabStr = inputs[2] || "30%";
      const slab = parseFloat(slabStr) / 100;
      if (!amount || !rate) return "";
      const maturity = amount * Math.pow(1 + rate, years);
      const taxSaved = amount * slab * 1.04;
      const effectiveCost = amount - taxSaved;
      return `Maturity: ₹${Math.round(maturity).toLocaleString("en-IN")} | Tax Saved: ₹${Math.round(taxSaved).toLocaleString("en-IN")} | Effective Cost: ₹${Math.round(effectiveCost).toLocaleString("en-IN")}`;
    }

    case "gratuity-calculator-2025": {
      const salary = get(0);
      const years = get(1);
      if (!salary || !years) return "";
      const gratuity = (salary / 26) * 15 * years;
      const taxFree = Math.min(gratuity, 2000000);
      const taxable = Math.max(0, gratuity - 2000000);
      return `Gratuity: ₹${Math.round(gratuity).toLocaleString("en-IN")} | Tax-Free: ₹${Math.round(taxFree).toLocaleString("en-IN")} | Taxable: ₹${Math.round(taxable).toLocaleString("en-IN")}`;
    }

    case "epf-calculator": {
      const basic = get(0);
      const currentBalance = get(1);
      const age = get(2);
      const retirement = get(3);
      if (!basic || !age || !retirement) return "";
      const years = retirement - age;
      const monthlyContrib = basic * 0.24; // 12% employee + 12% employer (3.67% EPF portion)
      const empContrib = basic * 0.12;
      const emplrContrib = basic * 0.0367;
      const totalMonthly = empContrib + emplrContrib;
      const rate = 0.0825 / 12;
      const n = years * 12;
      const futureContribs = totalMonthly * ((Math.pow(1 + rate, n) - 1) / rate) * (1 + rate);
      const futureBalance = currentBalance * Math.pow(1 + 0.0825, years);
      const total = futureContribs + futureBalance;
      return `EPF Corpus at ${retirement}: ₹${Math.round(total).toLocaleString("en-IN")} | Monthly Contribution: ₹${Math.round(totalMonthly).toLocaleString("en-IN")}`;
    }

    case "inflation-calculator": {
      const amount = get(0);
      const inflation = get(1) / 100;
      const years = get(2);
      if (!amount || !inflation || !years) return "";
      const fv = amount * Math.pow(1 + inflation, years);
      const loss = ((fv - amount) / fv) * 100;
      return `Future Equivalent: ₹${Math.round(fv).toLocaleString("en-IN")} | Purchasing Power Lost: ${loss.toFixed(1)}% | Need ${(fv / amount).toFixed(2)}× more money`;
    }

    case "retirement-calculator": {
      const age = get(0);
      const retirement = get(1);
      const expenses = get(2);
      const rate = get(3) / 100;
      if (!age || !retirement || !expenses) return "";
      const years = retirement - age;
      const inflationAdjExpenses = expenses * Math.pow(1.06, years);
      const annualExpenses = inflationAdjExpenses * 12;
      const corpusNeeded = annualExpenses * 25;
      const r = rate / 12;
      const n = years * 12;
      const monthlySIP = corpusNeeded * r / (Math.pow(1 + r, n) - 1);
      return `Corpus Needed: ₹${Math.round(corpusNeeded / 100000).toLocaleString("en-IN")} Lakh | Monthly SIP Required: ₹${Math.round(monthlySIP).toLocaleString("en-IN")} | Inflation-adj Monthly Need: ₹${Math.round(inflationAdjExpenses).toLocaleString("en-IN")}`;
    }

    default:
      return "Calculation result will appear here";
  }
}

export default function UniversalCalculatorWidget({ calculator }: Props) {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCalculate = () => {
    const res = calculate(calculator, inputs);
    setResult(res);
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
        <h2 className="text-white font-bold text-lg">{calculator.name}</h2>
        <p className="text-blue-100 text-sm mt-1">{calculator.description}</p>
      </div>

      {/* Inputs */}
      <div className="p-6 space-y-4">
        {calculator.fields.map((field, i) => (
          <div key={i}>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                value={inputs[i] || ""}
                onChange={(e) => setInputs({ ...inputs, [i]: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Select...</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type="number"
                placeholder={field.placeholder}
                value={inputs[i] || ""}
                onChange={(e) => setInputs({ ...inputs, [i]: e.target.value })}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
        ))}

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-colors text-sm mt-2"
        >
          Calculate
        </button>

        {/* Result */}
        {result && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">Result</span>
              <button
                onClick={handleCopy}
                className="text-xs text-green-600 hover:text-green-800 font-medium"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="space-y-1.5">
              {result.split(" | ").map((part, i) => {
                const [label, value] = part.split(": ");
                return (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{label}</span>
                    <span className="text-sm font-bold text-gray-900">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Formula */}
      <div className="px-6 pb-4 border-t border-gray-100 pt-4">
        <p className="text-xs text-gray-500">
          <span className="font-semibold">Formula: </span>
          <span className="font-mono">{calculator.formula}</span>
        </p>
      </div>
    </div>
  );
}
