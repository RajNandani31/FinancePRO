export function calculateBudget(
  income: number,
  fixed: number,
  variable: number
) {
  const totalExpenses = fixed + variable;
  const savings = Math.max(income - totalExpenses, 0);

  return {
    needs: fixed,
    wants: variable,
    savings,
    savingsRate: income > 0 ? (savings / income) * 100 : 0,
  };
}
