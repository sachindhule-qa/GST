import CalculatorPage from "@/components/CalculatorPage";
import { createCalculatorMetadata } from "@/lib/create-calculator-metadata";

export const metadata = createCalculatorMetadata("income-tax-calculator-2024-25");

export default function Page() {
  return <CalculatorPage slug="income-tax-calculator-2024-25" />;
}
