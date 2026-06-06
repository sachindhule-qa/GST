"use client";

import { useMemo, useState } from "react";
import { calculateGSTOnRent, formatCurrency } from "@/lib/calculators";
import CopyShareButtons from "./CopyShareButtons";

export default function GSTOnRentWidget() {
  const [rent, setRent] = useState("50000");
  const [isRegistered, setIsRegistered] = useState(true);

  const result = useMemo(
    () => calculateGSTOnRent(parseFloat(rent) || 0, isRegistered),
    [rent, isRegistered]
  );

  const shareText = useMemo(
    () =>
      [
        `Monthly Rent: ${formatCurrency(parseFloat(rent) || 0)}`,
        `Landlord GST Registered: ${isRegistered ? "Yes" : "No"}`,
        `Monthly GST (18%): ${formatCurrency(result.gst)}`,
        `Total Monthly: ${formatCurrency(result.total)}`,
        `Annual GST: ${formatCurrency(result.annualGST)}`,
      ].join("\n"),
    [rent, isRegistered, result]
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label htmlFor="rent-amount" className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Rent (Commercial)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base">₹</span>
            <input
              id="rent-amount"
              type="number"
              inputMode="decimal"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              className="w-full pl-8 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
            />
          </div>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">Landlord GST Registered?</span>
          <div className="flex gap-2">
            {([true, false] as const).map((reg) => (
              <button
                key={String(reg)}
                type="button"
                onClick={() => setIsRegistered(reg)}
                className={`flex-1 py-3 px-3 text-sm font-medium rounded-lg border transition-colors min-h-[48px] ${
                  isRegistered === reg
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {reg ? "Yes" : "No"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase">Base Rent</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.base)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">GST (18%)</p>
            <p className="text-lg font-bold text-primary">{formatCurrency(result.gst)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Total Monthly</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.total)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Annual GST</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.annualGST)}</p>
          </div>
        </div>
      </div>

      <CopyShareButtons text={shareText} />
    </div>
  );
}
