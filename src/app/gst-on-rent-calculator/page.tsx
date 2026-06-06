import CalculatorPage from "@/components/CalculatorPage";
import { createCalculatorMetadata } from "@/lib/create-calculator-metadata";

export const metadata = createCalculatorMetadata("gst-on-rent-calculator");

export default function Page() {
  return <CalculatorPage slug="gst-on-rent-calculator" />;
}
