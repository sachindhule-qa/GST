import CalculatorPage from "@/components/CalculatorPage";
import { createCalculatorMetadata } from "@/lib/create-calculator-metadata";

export const metadata = createCalculatorMetadata("professional-tax-calculator");

export default function Page() {
  return <CalculatorPage slug="professional-tax-calculator" />;
}
