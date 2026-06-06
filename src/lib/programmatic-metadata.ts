import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { parseProgrammaticSlug } from "@/lib/parse-programmatic-slug";
import { formatCurrency } from "@/lib/calculators";

export function generateProgrammaticMetadata(slug: string): Metadata {
  const parsed = parseProgrammaticSlug(slug);
  if (!parsed) return { title: "Not Found" };

  const suffix = " - Free Online GST Calculator India 2024-25";

  if (parsed.type === "product" && parsed.product) {
    const product = parsed.product;
    const title = `GST on ${product.name} India ${product.rate}% — HSN ${product.hsn}`;
    const description = `Calculate ${product.rate}% GST on ${product.name} in India. HSN code ${product.hsn}. Free GST calculator with CGST, SGST breakdown. ${product.description.slice(0, 80)}.`;
    return {
      title: title + suffix,
      description: description.slice(0, 160),
      keywords: `GST on ${product.name}, ${product.name} GST rate, HSN ${product.hsn}, ${product.rate}% GST ${product.name}`,
      alternates: { canonical: `${SITE_URL}/${slug}` },
      openGraph: { title, description: description.slice(0, 160), url: `${SITE_URL}/${slug}` },
    };
  }

  if (parsed.type === "rate" && parsed.rate) {
    const rate = parsed.rate;
    const title = `GST Calculator ${rate.label} India — CGST ${rate.value / 2}% + SGST ${rate.value / 2}%`;
    const description = `Free ${rate.label} GST calculator India. Calculate CGST ${rate.value / 2}% and SGST ${rate.value / 2}% instantly. Exclusive & inclusive ${rate.label} GST calculation online.`;
    return {
      title: title + suffix,
      description: description.slice(0, 160),
      keywords: `GST calculator ${rate.label}, ${rate.label} GST India, CGST SGST ${rate.label}`,
      alternates: { canonical: `${SITE_URL}/${slug}` },
      openGraph: { title, description: description.slice(0, 160), url: `${SITE_URL}/${slug}` },
    };
  }

  if (parsed.type === "amount-rate" && parsed.amount && parsed.rate) {
    const { amount, rate } = parsed;
    const gst = (amount.value * rate.value) / 100;
    const title = `GST on ${amount.label} at ${rate.label} — ${formatCurrency(gst)} Tax`;
    const description = `GST on ${amount.label} at ${rate.label} = ${formatCurrency(gst)}. Total ${formatCurrency(amount.value + gst)}. Free calculator with CGST/SGST split.`;
    return {
      title: title + suffix,
      description: description.slice(0, 160),
      keywords: `GST on ${amount.label} at ${rate.label}, ${amount.label} GST ${rate.value} percent`,
      alternates: { canonical: `${SITE_URL}/${slug}` },
      openGraph: { title, description: description.slice(0, 160), url: `${SITE_URL}/${slug}` },
    };
  }

  if (parsed.type === "state" && parsed.state) {
    const state = parsed.state;
    const title = `GST Calculator ${state.name} — State Code ${state.code}`;
    const description = `Free GST calculator for ${state.name} (${state.code}). Calculate CGST, SGST for intra-state and IGST for inter-state supplies in ${state.name}.`;
    return {
      title: title + suffix,
      description: description.slice(0, 160),
      keywords: `GST calculator ${state.name}, GST ${state.code}, ${state.name} CGST SGST calculator`,
      alternates: { canonical: `${SITE_URL}/${slug}` },
      openGraph: { title, description: description.slice(0, 160), url: `${SITE_URL}/${slug}` },
    };
  }

  if (parsed.type === "business" && parsed.business) {
    const business = parsed.business;
    const title = `GST for ${business.name} India — ${business.defaultRate}% Rate Calculator`;
    const description = `GST guide and calculator for ${business.name.toLowerCase()}s in India. ${business.description}. Calculate ${business.defaultRate}% GST on invoices.`;
    return {
      title: title + suffix,
      description: description.slice(0, 160),
      keywords: `GST for ${business.name}, ${business.name} GST rate, GST registration ${business.name}`,
      alternates: { canonical: `${SITE_URL}/${slug}` },
      openGraph: { title, description: description.slice(0, 160), url: `${SITE_URL}/${slug}` },
    };
  }

  return { title: "Not Found" };
}
