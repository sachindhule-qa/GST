"use client";

import { useMemo, useState } from "react";
import { calculateGST, formatCurrency } from "@/lib/calculators";
import CopyShareButtons from "./CopyShareButtons";

type GSTWidgetProps = {
  defaultRate?: number;
  defaultType?: "exclusive" | "inclusive";
  lockRate?: boolean;
};

const GST_RATES = [0, 5, 12, 18, 28];

export default function GSTWidget({
  defaultRate = 18,
  defaultType = "exclusive",
  lockRate = false,
}: GSTWidgetProps) {
  const [amount, setAmount] = useState("10000");
  const [rate, setRate] = useState(defaultRate);
  const [type, setType] = useState<"exclusive" | "inclusive">(defaultType);
  const [supplyType, setSupplyType] = useState<"intra" | "inter">("intra");

  const result = useMemo(() => {
    const num = parseFloat(amount) || 0;
    return calculateGST(num, rate, type);
  }, [amount, rate, type]);

  const shareText = useMemo(() => {
    const lines = [
      `Amount: ${formatCurrency(parseFloat(amount) || 0)} (${type})`,
      `GST Rate: ${rate}%`,
      `Base Amount: ${formatCurrency(result.base)}`,
      `Total GST: ${formatCurrency(result.gst)}`,
      supplyType === "intra"
        ? `CGST: ${formatCurrency(result.cgst)} | SGST: ${formatCurrency(result.sgst)}`
        : `IGST: ${formatCurrency(result.igst)}`,
      `Total: ${formatCurrency(result.total)}`,
    ];
    return lines.join("\n");
  }, [amount, rate, type, result, supplyType]);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label htmlFor="gst-amount" className="block text-sm font-medium text-gray-700 mb-2">
            {type === "exclusive" ? "Amount (Excl. GST)" : "Amount (Incl. GST)"}
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base">₹</span>
            <input
              id="gst-amount"
              type="number"
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
              placeholder="Enter amount"
            />
          </div>
        </div>

        <div>
          <label htmlFor="gst-rate" className="block text-sm font-medium text-gray-700 mb-2">
            GST Rate (%)
          </label>
          {lockRate ? (
            <div className="w-full px-4 py-3 text-base border border-gray-200 rounded-lg bg-gray-50 min-h-[48px] flex items-center font-semibold text-primary">
              {rate}%
            </div>
          ) : (
            <select
              id="gst-rate"
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
          )}
        </div>

        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">Price Type</span>
          <div className="flex gap-2">
            {(["exclusive", "inclusive"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`flex-1 py-3 px-3 text-sm font-medium rounded-lg border transition-colors min-h-[48px] ${
                  type === t
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-300 hover:border-primary"
                }`}
              >
                {t === "exclusive" ? "Excl. GST" : "Incl. GST"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">Supply Type</span>
          <div className="flex gap-2">
            {(["intra", "inter"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSupplyType(t)}
                className={`flex-1 py-3 px-3 text-sm font-medium rounded-lg border transition-colors min-h-[48px] ${
                  supplyType === t
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-300 hover:border-primary"
                }`}
              >
                {t === "intra" ? "Intra-State" : "Inter-State"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Base Amount</p>
            <p className="text-lg font-bold text-gray-900">{formatCurrency(result.base)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Total GST</p>
            <p className="text-lg font-bold text-primary">{formatCurrency(result.gst)}</p>
          </div>
          {supplyType === "intra" ? (
            <>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">CGST ({rate / 2}%)</p>
                <p className="text-lg font-bold text-gray-900">{formatCurrency(result.cgst)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">SGST ({rate / 2}%)</p>
                <p className="text-lg font-bold text-gray-900">{formatCurrency(result.sgst)}</p>
              </div>
            </>
          ) : (
            <div className="col-span-2">
              <p className="text-xs text-gray-500 uppercase tracking-wide">IGST ({rate}%)</p>
              <p className="text-lg font-bold text-gray-900">{formatCurrency(result.igst)}</p>
            </div>
          )}
        </div>
        <div className="pt-4 border-t border-blue-200">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Total Amount</p>
          <p className="text-2xl font-bold text-primary">{formatCurrency(result.total)}</p>
        </div>
      </div>

      <CopyShareButtons text={shareText} />
    </div>
  );
}
