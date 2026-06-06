"use client";

import { useMemo, useState } from "react";
import { calculateProfessionalTax, formatCurrency } from "@/lib/calculators";
import CopyShareButtons from "./CopyShareButtons";

const STATES = [
  "Maharashtra",
  "Karnataka",
  "West Bengal",
  "Telangana",
  "Tamil Nadu",
];

export default function ProfessionalTaxWidget() {
  const [salary, setSalary] = useState("25000");
  const [state, setState] = useState("Maharashtra");

  const result = useMemo(
    () => calculateProfessionalTax(parseFloat(salary) || 0, state),
    [salary, state]
  );

  const shareText = useMemo(
    () =>
      [
        `Monthly Salary: ${formatCurrency(parseFloat(salary) || 0)}`,
        `State: ${state}`,
        `Monthly PT: ${formatCurrency(result.monthlyTax)}`,
        `Annual PT: ${formatCurrency(result.annualTax)}`,
      ].join("\n"),
    [salary, state, result]
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label htmlFor="pt-salary" className="block text-sm font-medium text-gray-700 mb-2">
            Gross Monthly Salary
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base">₹</span>
            <input
              id="pt-salary"
              type="number"
              inputMode="decimal"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full pl-8 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
            />
          </div>
        </div>
        <div>
          <label htmlFor="pt-state" className="block text-sm font-medium text-gray-700 mb-2">
            State
          </label>
          <select
            id="pt-state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px] bg-white"
          >
            {STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase">Monthly Tax</p>
            <p className="text-2xl font-bold text-primary">{formatCurrency(result.monthlyTax)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Annual Tax</p>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(result.annualTax)}</p>
          </div>
        </div>
      </div>

      <CopyShareButtons text={shareText} />
    </div>
  );
}
