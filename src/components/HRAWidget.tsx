"use client";

import { useMemo, useState } from "react";
import { calculateHRA, formatCurrency } from "@/lib/calculators";
import CopyShareButtons from "./CopyShareButtons";

export default function HRAWidget() {
  const [basic, setBasic] = useState("50000");
  const [hra, setHra] = useState("20000");
  const [rent, setRent] = useState("15000");
  const [isMetro, setIsMetro] = useState(true);

  const result = useMemo(() => {
    return calculateHRA(
      parseFloat(basic) || 0,
      parseFloat(hra) || 0,
      parseFloat(rent) || 0,
      isMetro
    );
  }, [basic, hra, rent, isMetro]);

  const shareText = useMemo(
    () =>
      [
        `Basic Salary: ${formatCurrency(parseFloat(basic) || 0)}`,
        `HRA Received: ${formatCurrency(parseFloat(hra) || 0)}`,
        `Rent Paid: ${formatCurrency(parseFloat(rent) || 0)}`,
        `HRA Exemption: ${formatCurrency(result.exemption)}`,
        `Taxable HRA: ${formatCurrency(result.taxableHRA)}`,
      ].join("\n"),
    [basic, hra, rent, result]
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        {[
          { id: "basic", label: "Basic Salary (Monthly)", value: basic, set: setBasic },
          { id: "hra", label: "HRA Received (Monthly)", value: hra, set: setHra },
          { id: "rent", label: "Rent Paid (Monthly)", value: rent, set: setRent },
        ].map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
              {field.label}
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base">₹</span>
              <input
                id={field.id}
                type="number"
                inputMode="decimal"
                value={field.value}
                onChange={(e) => field.set(e.target.value)}
                className="w-full pl-8 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
              />
            </div>
          </div>
        ))}
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">City Type</span>
          <div className="flex gap-2">
            {([true, false] as const).map((metro) => (
              <button
                key={String(metro)}
                type="button"
                onClick={() => setIsMetro(metro)}
                className={`flex-1 py-3 px-3 text-sm font-medium rounded-lg border transition-colors min-h-[48px] ${
                  isMetro === metro
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {metro ? "Metro (50%)" : "Non-Metro (40%)"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500 uppercase">HRA Exemption</p>
            <p className="text-2xl font-bold text-primary">{formatCurrency(result.exemption)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Taxable HRA</p>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(result.taxableHRA)}</p>
          </div>
        </div>
        <div className="text-sm text-gray-600 space-y-1 pt-4 border-t border-blue-200">
          <p>Actual HRA: {formatCurrency(result.actualHRA)}</p>
          <p>Rent − 10% of Basic: {formatCurrency(result.rentMinusTenPercent)}</p>
          <p>{isMetro ? "50%" : "40%"} of Basic: {formatCurrency(result.percentOfBasic)}</p>
        </div>
      </div>

      <CopyShareButtons text={shareText} />
    </div>
  );
}
