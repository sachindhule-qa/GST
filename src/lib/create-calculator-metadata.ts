import { Metadata } from "next";
import { getCalculatorPageData } from "./calculator-pages";
import { createMetadata } from "./seo";

export function createCalculatorMetadata(slug: string): Metadata {
  const data = getCalculatorPageData(slug);
  if (!data) {
    return { title: "Calculator Not Found" };
  }
  return createMetadata({
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    slug,
  });
}
