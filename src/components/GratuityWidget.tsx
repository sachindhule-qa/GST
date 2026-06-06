"use client";

import { useMemo, useState } from "react";
import { calculateGratuity, formatCurrency } from "@/lib/calculators";
import CopyShareButtons from "./CopyShareButtons";

export default function GratuityWidget() {
  const [salary, setSalary] = useState("50000");
  const [years, setYears] = useState("10");
  const [isCovered, setIsCovered] = useState(true);

  const result = useMemo(
    () =>
      calculateGratuity(
        parseFloat(salary) || 0,
        parseFloat(years) || 0,
        isCovered
      ),
    [salary, years, isCovered]
  );

  const shareText = useMemo(
    () =>
      [
        `Last Drawn Salary: ${formatCurrency(parseFloat(salary) || 0)}`,
        `Years of Service: ${years}`,
        `Gratuity: ${formatCurrency(result.gratuity)}`,
        `Formula: ${result.formula}`,
      ].join("\n"),
    [salary, years, result]
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label htmlFor="gratuity-salary" className="block text-sm font-medium text-gray-700 mb-2">
            Last Drawn Salary (Basic + DA)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base">₹</span>
            <input
              id="gratuity-salary"
              type="number"
              inputMode="decimal"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full pl-8 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
            />
          </div>
        </div>
        <div>
          <label htmlFor="gratuity-years" className="block text-sm font-medium text-gray-700 mb-2">
            Years of Service
          </label>
          <input
            id="gratuity-years"
            type="number"
            inputMode="decimal"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
          />
        </div>
        <div className="sm:col-span-2">
          <span className="block text-sm font-medium text-gray-700 mb-2">Coverage</span>
          <div className="flex gap-2">
            {([true, false] as const).map((covered) => (
              <button
                key={String(covered)}
                type="button"
                onClick={() => setIsCovered(covered)}
                className={`flex-1 py-3 px-3 text-sm font-medium rounded-lg border transition-colors min-h-[48px] ${
                  isCovered === covered
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {covered ? "Payment of Gratuity Act (÷26)" : "Other (÷30)"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 sm:p-6">
        <p className="text-xs text-gray-500 uppercase mb-1">Gratuity Amount</p>
        <p className="text-3xl font-bold text-primary">{formatCurrency(result.gratuity)}</p>
        {result.formula && (
          <p className="text-sm text-gray-600 mt-2 font-mono">{result.formula}</p>
        )}
      </div>

      <CopyShareButtons text={shareText} />
    </div>
  );
}
