import CalculatorGrid from "@/components/CalculatorGrid";
import FAQSection from "@/components/FAQSection";
import GSTWidget from "@/components/GSTWidget";
import JsonLd from "@/components/JsonLd";
import { LAST_UPDATED, SITE_NAME, SITE_URL } from "@/lib/constants";
import { createFAQJsonLd, createMetadata, createWebAppJsonLd } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Free GST, EMI, SIP & Tax Calculators India 2025 — 100+ Calculators",
  description:
    "100+ free online calculators for India — GST, income tax, EMI, SIP, FD, PPF, NPS, salary, retirement and more. No signup, instant results for businesses and individuals.",
  keywords:
    "GST calculator India, EMI calculator, SIP calculator, income tax calculator, FD calculator, PPF calculator, free calculators India 2025",
  slug: "",
});

const HOME_FAQS = [
  {
    question: "What is GST and how is it calculated?",
    answer:
      "GST (Goods and Services Tax) is an indirect tax on supply of goods and services in India. GST Amount = (Original Price × GST Rate) / 100 for exclusive pricing. For inclusive pricing, GST = Price - (Price × 100) / (100 + Rate).",
  },
  {
    question: "What is the difference between CGST, SGST and IGST?",
    answer:
      "CGST and SGST apply to intra-state transactions (within the same state), each being half of the total GST. IGST applies to inter-state transactions and is the full GST amount collected by the central government.",
  },
  {
    question: "What are the GST rates in India for 2024-25?",
    answer:
      "India has four main GST slabs: 5% (essential goods), 12% (processed foods, medicines), 18% (most services and goods), and 28% (luxury items). Some items are exempt at 0% or taxed at special rates.",
  },
  {
    question: "How to calculate GST inclusive amount?",
    answer:
      "To find GST from an inclusive price: Base Amount = Inclusive Price × 100 / (100 + GST Rate). GST Amount = Inclusive Price - Base Amount. Use our Reverse GST Calculator for instant results.",
  },
  {
    question: "Is GSTCalc.in free to use?",
    answer:
      "Yes, all calculators on GSTCalc.in are completely free with no registration required. All calculations happen instantly in your browser with no data stored on servers.",
  },
  {
    question: "Which GST calculator is most used in India?",
    answer:
      "The 18% GST calculator is the most commonly used as 18% is the standard rate for most services, electronics, and manufactured goods in India.",
  },
  {
    question: "How to calculate TDS on professional fees?",
    answer:
      "TDS under Section 194J on professional fees is 10% when payment exceeds ₹30,000. TDS Amount = Payment × 10 / 100. Net payable = Payment - TDS.",
  },
  {
    question: "What is the new income tax regime for 2024-25?",
    answer:
      "The new tax regime for FY 2024-25 has slabs: 0% up to ₹3 lakh, 5% (₹3-6L), 10% (₹6-9L), 15% (₹9-12L), 20% (₹12-15L), and 30% above ₹15 lakh, plus 4% cess.",
  },
  {
    question: "Do I need to register for GST?",
    answer:
      "Businesses with annual turnover exceeding ₹40 lakh (₹20 lakh for special states) must register for GST. Service providers must register if turnover exceeds ₹20 lakh.",
  },
  {
    question: "Are these calculators accurate for tax filing?",
    answer:
      "Our calculators use official formulas and current rates for reference purposes. For tax filing and compliance, always verify with a qualified Chartered Accountant.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          createWebAppJsonLd(
            `${SITE_NAME} - GST Calculator India`,
            "Free online GST, TDS, and income tax calculators for India",
            SITE_URL
          ),
          createFAQJsonLd(HOME_FAQS),
        ]}
      />

      <section className="bg-gradient-to-b from-blue-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
              GST Calculator India 2024-25
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Free, fast, and accurate tax calculators for GST, TDS, income tax, and more. Trusted by businesses across India.
            </p>
            <p className="text-sm text-gray-400 mt-3">Last updated: {LAST_UPDATED}</p>
          </div>
          <GSTWidget />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
          100+ Free Calculators
        </h2>
        <p className="text-gray-600 text-center mb-4">
          GST, income tax, EMI, SIP, FD, PPF, salary, retirement and more
        </p>
        <div className="text-center mb-8">
          <a
            href="/calculators"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse All 100+ Calculators →
          </a>
        </div>
        <CalculatorGrid />
        <div className="text-center mt-8">
          <a href="/calculators" className="text-sm text-blue-600 font-medium hover:underline">
            + View EMI, SIP, FD, PPF, Retirement & 85 more calculators →
          </a>
        </div>
      </section>

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            How to Calculate GST in India
          </h2>
          <article className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Goods and Services Tax (GST) is India&apos;s unified indirect tax system that replaced multiple central and state taxes. Understanding how to calculate GST is essential for businesses, freelancers, and consumers alike.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-8">Exclusive GST Calculation</h3>
            <p>
              When the price is quoted without GST (exclusive), multiply the base amount by the GST rate and divide by 100. For example, on ₹10,000 at 18% GST: GST = ₹1,800, making the total ₹11,800. For intra-state sales, this splits into CGST (9%) and SGST (9%) of ₹900 each.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-8">Inclusive GST Calculation</h3>
            <p>
              When the price already includes GST (inclusive), use the reverse formula: Base = Inclusive × 100 / (100 + Rate). For ₹11,800 inclusive at 18%: Base = ₹10,000 and GST = ₹1,800.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-8">CGST, SGST vs IGST</h3>
            <p>
              For transactions within the same state, GST is split equally between CGST (Central) and SGST (State). For inter-state transactions, the entire GST is collected as IGST (Integrated GST) by the central government, which then distributes the state portion.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-8">GST Rates in India</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>0%</strong> — Essential items like fresh milk, vegetables, bread</li>
              <li><strong>5%</strong> — Packaged food, tea, coffee, restaurant services</li>
              <li><strong>12%</strong> — Processed foods, medicines, hotel accommodation</li>
              <li><strong>18%</strong> — Most services, electronics, capital goods</li>
              <li><strong>28%</strong> — Luxury cars, aerated drinks, tobacco</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <FAQSection faqs={HOME_FAQS} title="Frequently Asked Questions About GST" />
      </section>
    </>
  );
}
