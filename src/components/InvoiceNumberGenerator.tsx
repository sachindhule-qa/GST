"use client";

import { useMemo, useState } from "react";
import { generateInvoiceNumber } from "@/lib/calculators";
import CopyShareButtons from "./CopyShareButtons";

export default function InvoiceNumberGenerator() {
  const [prefix, setPrefix] = useState("INV");
  const [sequence, setSequence] = useState("1");
  const [financialYear, setFinancialYear] = useState("");

  const result = useMemo(
    () =>
      generateInvoiceNumber(
        prefix,
        parseInt(sequence, 10) || 1,
        financialYear || undefined
      ),
    [prefix, sequence, financialYear]
  );

  const shareText = useMemo(
    () => `GST Invoice Number: ${result.invoiceNumber}\nFormat: ${result.format}`,
    [result]
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
        <div>
          <label htmlFor="inv-prefix" className="block text-sm font-medium text-gray-700 mb-2">
            Invoice Prefix
          </label>
          <input
            id="inv-prefix"
            type="text"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px] uppercase"
            placeholder="INV"
          />
        </div>
        <div>
          <label htmlFor="inv-seq" className="block text-sm font-medium text-gray-700 mb-2">
            Sequence Number
          </label>
          <input
            id="inv-seq"
            type="number"
            inputMode="numeric"
            value={sequence}
            onChange={(e) => setSequence(e.target.value)}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
            min="1"
          />
        </div>
        <div>
          <label htmlFor="inv-fy" className="block text-sm font-medium text-gray-700 mb-2">
            Financial Year (optional)
          </label>
          <input
            id="inv-fy"
            type="text"
            value={financialYear}
            onChange={(e) => setFinancialYear(e.target.value)}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
            placeholder="2024-25"
          />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 sm:p-6 text-center">
        <p className="text-xs text-gray-500 uppercase mb-2">Generated Invoice Number</p>
        <p className="text-2xl sm:text-3xl font-bold text-primary font-mono break-all">
          {result.invoiceNumber}
        </p>
        <p className="text-sm text-gray-500 mt-2">Format: {result.format}</p>
      </div>

      <CopyShareButtons text={shareText} />
    </div>
  );
}
