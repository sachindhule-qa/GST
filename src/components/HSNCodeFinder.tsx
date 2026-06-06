"use client";

import { useMemo, useState } from "react";
import { searchHSNCodes } from "@/lib/calculators";
import CopyShareButtons from "./CopyShareButtons";

export default function HSNCodeFinder() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchHSNCodes(query), [query]);

  const shareText = useMemo(() => {
    if (results.length === 0) return "No HSN codes found";
    return results
      .slice(0, 5)
      .map((r) => `${r.code} - ${r.description} (GST ${r.gstRate}%)`)
      .join("\n");
  }, [results]);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="mb-6">
        <label htmlFor="hsn-search" className="block text-sm font-medium text-gray-700 mb-2">
          Search HSN / SAC Code or Product Description
        </label>
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            id="hsn-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[48px]"
            placeholder="e.g. 8517, smartphone, restaurant"
          />
        </div>
      </div>

      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">HSN/SAC Code</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Description</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700">GST Rate</th>
              </tr>
            </thead>
            <tbody>
              {results.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-4 py-8 text-center text-gray-500">
                    No matching HSN codes found
                  </td>
                </tr>
              ) : (
                results.map((item) => (
                  <tr key={item.code} className="border-t border-gray-100 hover:bg-blue-50">
                    <td className="px-4 py-3 font-mono font-semibold text-primary">{item.code}</td>
                    <td className="px-4 py-3 text-gray-700">{item.description}</td>
                    <td className="px-4 py-3 text-right font-medium">{item.gstRate}%</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {results.length > 0 && <CopyShareButtons text={shareText} />}
    </div>
  );
}
