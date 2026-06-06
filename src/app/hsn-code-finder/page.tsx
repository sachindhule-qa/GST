import CalculatorPage from "@/components/CalculatorPage";
import { createCalculatorMetadata } from "@/lib/create-calculator-metadata";

export const metadata = createCalculatorMetadata("hsn-code-finder");

export default function Page() {
  return <CalculatorPage slug="hsn-code-finder" />;
}
