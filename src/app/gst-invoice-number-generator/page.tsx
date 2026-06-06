import CalculatorPage from "@/components/CalculatorPage";
import { createCalculatorMetadata } from "@/lib/create-calculator-metadata";

export const metadata = createCalculatorMetadata("gst-invoice-number-generator");

export default function Page() {
  return <CalculatorPage slug="gst-invoice-number-generator" />;
}
