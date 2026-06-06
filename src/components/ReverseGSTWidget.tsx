"use client";

import { useMemo, useState } from "react";
import { calculateGST, formatCurrency } from "@/lib/calculators";
import CopyShareButtons from "./CopyShareButtons";

const GST_RATES = [5, 12, 18, 28];

export default function ReverseGSTWidget() {
  const [amount, setAmount] = useState("11800");
  const [rate, setRate] = useState(18);

  const result = useMemo(() => {
    const num = parseFloat(amount) || 0;
    return calculateGST(num, rate, "inclusive");
  }, [amount, rate]);

  const shareText = useMemo(
    () =>
      [
        `GST Inclusive Amount: ${formatCurrency(parseFloat(amount) || 0)}`,
        `GST Rate: ${rate}%`,
        `Base Amount: ${formatCurrency(result.base)}`,
        `GST Amount: ${formatCurrency(result.gst)}`,
        `CGST: ${formatCurrency(result.cgst)} | SGST: ${formatCurrency(result.sgst)}`,
      ].join("\n"),
    [amount, rate, result]
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label htmlFor="reverse-amount" className="block text-sm font-medium text-gray-700 mb-2">
            GST Inclusive Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base">₹</span>
            <input
              id="reverse-amount"
              type="number"
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
            />
          </div>
        </div>
        <div>
          <label htmlFor="reverse-rate" className="block text-sm font-medium text-gray-700 mb-2">
            GST Rate (%)
          </label>
          <select
            id="reverse-rate"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px] bg-white"
          >
            {GST_RATES.map((r) => (
              <option key={r} value={r}>
                {r}%
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase">Base Amount</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.base)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">GST Amount</p>
            <p className="text-lg font-bold text-primary">{formatCurrency(result.gst)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">CGST</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.cgst)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">SGST</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.sgst)}</p>
          </div>
        </div>
      </div>

      <CopyShareButtons text={shareText} />
    </div>
  );
}
