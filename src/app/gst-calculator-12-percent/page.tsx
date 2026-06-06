import CalculatorPage from "@/components/CalculatorPage";
import { createCalculatorMetadata } from "@/lib/create-calculator-metadata";

export const metadata = createCalculatorMetadata("gst-calculator-12-percent");

export default function Page() {
  return <CalculatorPage slug="gst-calculator-12-percent" />;
}
