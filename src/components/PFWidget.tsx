"use client";

import { useMemo, useState } from "react";
import { calculatePF, formatCurrency } from "@/lib/calculators";
import CopyShareButtons from "./CopyShareButtons";

export default function PFWidget() {
  const [basic, setBasic] = useState("30000");

  const result = useMemo(() => calculatePF(parseFloat(basic) || 0), [basic]);

  const shareText = useMemo(
    () =>
      [
        `Basic Salary: ${formatCurrency(parseFloat(basic) || 0)}`,
        `Employee PF (12%): ${formatCurrency(result.employeePF)}`,
        `Employer EPF: ${formatCurrency(result.employerEPF)}`,
        `Employer EPS: ${formatCurrency(result.employerEPS)}`,
        `Total Contribution: ${formatCurrency(result.totalContribution)}`,
      ].join("\n"),
    [basic, result]
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="mb-6 max-w-md">
        <label htmlFor="pf-basic" className="block text-sm font-medium text-gray-700 mb-2">
          Basic Salary (Monthly)
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base">₹</span>
          <input
            id="pf-basic"
            type="number"
            inputMode="decimal"
            value={basic}
            onChange={(e) => setBasic(e.target.value)}
            className="w-full pl-8 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
          />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase">Employee PF</p>
            <p className="text-lg font-bold text-primary">{formatCurrency(result.employeePF)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Employer EPF</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.employerEPF)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Employer EPS</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.employerEPS)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Total</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.totalContribution)}</p>
          </div>
        </div>
      </div>

      <CopyShareButtons text={shareText} />
    </div>
  );
}
