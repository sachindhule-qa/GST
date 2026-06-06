"use client";

import { useMemo, useState } from "react";
import { calculateIncomeTax, formatCurrency } from "@/lib/calculators";
import CopyShareButtons from "./CopyShareButtons";

export default function IncomeTaxWidget() {
  const [income, setIncome] = useState("1200000");

  const result = useMemo(() => {
    const num = parseFloat(income) || 0;
    return calculateIncomeTax(num);
  }, [income]);

  const shareText = useMemo(
    () =>
      [
        `Annual Income: ${formatCurrency(parseFloat(income) || 0)}`,
        `Gross Tax: ${formatCurrency(result.grossTax)}`,
        `Health & Education Cess (4%): ${formatCurrency(result.cess)}`,
        `Total Tax: ${formatCurrency(result.totalTax)}`,
        `Net Income: ${formatCurrency(result.netIncome)}`,
        `Effective Rate: ${result.effectiveRate.toFixed(2)}%`,
      ].join("\n"),
    [income, result]
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="mb-6">
        <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-2">
          Annual Taxable Income (New Regime FY 2024-25)
        </label>
        <div className="relative max-w-md">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base">₹</span>
          <input
            id="income"
            type="number"
            inputMode="decimal"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full pl-8 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
          />
        </div>
      </div>

      {result.breakdown.length > 0 && (
        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-gray-500 font-medium">Slab</th>
                <th className="text-right py-2 text-gray-500 font-medium">Taxable</th>
                <th className="text-right py-2 text-gray-500 font-medium">Rate</th>
                <th className="text-right py-2 text-gray-500 font-medium">Tax</th>
              </tr>
            </thead>
            <tbody>
              {result.breakdown.map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 text-gray-700">{row.slab}</td>
                  <td className="py-2 text-right">{formatCurrency(row.taxable)}</td>
                  <td className="py-2 text-right">{row.rate}%</td>
                  <td className="py-2 text-right font-medium">{formatCurrency(row.tax)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase">Gross Tax</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.grossTax)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Cess (4%)</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.cess)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Total Tax</p>
            <p className="text-lg font-bold text-primary">{formatCurrency(result.totalTax)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Net Income</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.netIncome)}</p>
          </div>
        </div>
      </div>

      <CopyShareButtons text={shareText} />
    </div>
  );
}
