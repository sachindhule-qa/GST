"use client";

import Link from "next/link";
import { useState } from "react";
import { CALCULATORS, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#2563EB" />
              <text x="16" y="21" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Inter, sans-serif">₹</text>
            </svg>
            {SITE_NAME}
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors"
                aria-expanded={dropdownOpen}
              >
                Calculators
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 rounded-xl shadow-lg py-2 max-h-96 overflow-y-auto">
                  {CALCULATORS.map((calc) => (
                    <Link
                      key={calc.slug}
                      href={`/${calc.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                    >
                      {calc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/gst-calculator" className="text-gray-700 hover:text-primary font-medium transition-colors">
              GST Rates
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-gray-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100" aria-label="Mobile navigation">
            <Link href="/" className="block py-3 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <p className="py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Calculators</p>
            {CALCULATORS.map((calc) => (
              <Link
                key={calc.slug}
                href={`/${calc.slug}`}
                className="block py-2.5 pl-3 text-gray-600 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {calc.name}
              </Link>
            ))}
            <Link href="/gst-calculator" className="block py-3 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
              GST Rates
            </Link>
            <Link href="/#contact" className="block py-3 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
