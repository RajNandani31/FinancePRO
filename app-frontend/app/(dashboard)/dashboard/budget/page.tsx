"use client";

import { useOnboardingStore } from "@/app/stores/onboardingStore";
import { calculateBudget } from "@/lib/budget";
import BudgetPie from "@/components/charts/BudgetPie";

export default function BudgetPage() {
  const { income, fixedExpenses, variableExpenses } =
    useOnboardingStore();

  const budget = calculateBudget(
    income,
    fixedExpenses,
    variableExpenses
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Budget Breakdown</h1>

      <div className="bg-white p-6 rounded shadow flex gap-10">
        <BudgetPie {...budget} />

        <div className="space-y-2">
          <p>Needs: ₹{budget.needs}</p>
          <p>Wants: ₹{budget.wants}</p>
          <p>Savings: ₹{budget.savings}</p>
          <p className="font-semibold">
            Savings Rate: {budget.savingsRate.toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
}
