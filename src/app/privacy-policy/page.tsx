import { createMetadata } from "@/lib/seo";
import { LAST_UPDATED, SITE_NAME } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for GSTCalc.in. Learn how we handle your data when using our free GST and tax calculators. No personal data is collected or stored.",
  keywords: "privacy policy, GSTCalc privacy",
  slug: "privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: {LAST_UPDATED}</p>
      <div className="prose prose-gray text-gray-600 space-y-4">
        <p>
          {SITE_NAME} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This policy explains how we handle information when you use our website.
        </p>
        <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
        <p>
          Our calculators run entirely in your browser. We do not collect, store, or transmit the amounts or data you enter into our calculators. If Google Analytics is enabled, anonymous usage statistics may be collected.
        </p>
        <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
        <p>
          We may use cookies for analytics purposes if Google Analytics is configured. You can disable cookies in your browser settings.
        </p>
        <h2 className="text-xl font-semibold text-gray-900">Third-Party Services</h2>
        <p>
          We may use third-party services such as Google Analytics and Vercel hosting. These services have their own privacy policies.
        </p>
        <h2 className="text-xl font-semibold text-gray-900">Disclaimer</h2>
        <p>
          All calculators are provided for informational purposes only. We are not responsible for any decisions made based on calculator results. Consult a qualified professional for tax advice.
        </p>
        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p>
          For privacy-related questions, contact us through the contact section on our homepage.
        </p>
      </div>
    </div>
  );
}
