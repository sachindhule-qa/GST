import CalculatorPage from "@/components/CalculatorPage";
import { createCalculatorMetadata } from "@/lib/create-calculator-metadata";

export const metadata = createCalculatorMetadata("reverse-gst-calculator");

export default function Page() {
  return <CalculatorPage slug="reverse-gst-calculator" />;
}
