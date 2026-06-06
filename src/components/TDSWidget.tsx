"use client";

import { useMemo, useState } from "react";
import { calculateTDS, formatCurrency } from "@/lib/calculators";
import CopyShareButtons from "./CopyShareButtons";

const TDS_SECTIONS = [
  { value: "194C", label: "194C - Contractor (1%)" },
  { value: "194J", label: "194J - Professional (10%)" },
  { value: "194H", label: "194H - Commission (5%)" },
  { value: "194I", label: "194I - Rent (10%)" },
  { value: "194A", label: "194A - Interest (10%)" },
  { value: "194B", label: "194B - Lottery (30%)" },
];

export default function TDSWidget() {
  const [amount, setAmount] = useState("100000");
  const [section, setSection] = useState("194J");

  const result = useMemo(() => {
    const num = parseFloat(amount) || 0;
    return calculateTDS(num, section);
  }, [amount, section]);

  const shareText = useMemo(
    () =>
      [
        `Gross Amount: ${formatCurrency(parseFloat(amount) || 0)}`,
        `TDS Section: ${section} (${result.rate}%)`,
        `TDS Deducted: ${formatCurrency(result.tds)}`,
        `Net Amount: ${formatCurrency(result.net)}`,
      ].join("\n"),
    [amount, section, result]
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label htmlFor="tds-amount" className="block text-sm font-medium text-gray-700 mb-2">
            Payment Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base">₹</span>
            <input
              id="tds-amount"
              type="number"
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
            />
          </div>
        </div>
        <div>
          <label htmlFor="tds-section" className="block text-sm font-medium text-gray-700 mb-2">
            TDS Section
          </label>
          <select
            id="tds-section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px] bg-white"
          >
            {TDS_SECTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase">TDS Rate</p>
            <p className="text-lg font-bold text-gray-900">{result.rate}%</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">TDS Deducted</p>
            <p className="text-lg font-bold text-primary">{formatCurrency(result.tds)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Net Payable</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.net)}</p>
          </div>
        </div>
      </div>

      <CopyShareButtons text={shareText} />
    </div>
  );
}
