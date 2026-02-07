"use client";

import { useOnboardingStore } from "@/app/stores/onboardingStore";
import { calculateBudget } from "@/lib/budget";
import SavingsLine from "@/components/charts/SavingsLine";

export default function InvestmentsPage() {
  const { income, fixedExpenses, variableExpenses } =
    useOnboardingStore();

  const { savings } = calculateBudget(
    income,
    fixedExpenses,
    variableExpenses
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Savings Projection</h1>

      <div className="bg-white p-6 rounded shadow">
        <SavingsLine monthlySavings={savings} />
      </div>
    </div>
  );
}
