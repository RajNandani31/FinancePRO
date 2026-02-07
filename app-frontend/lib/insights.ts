export function generateInsights(
  income: number,
  fixed: number,
  variable: number
) {
  const insights: string[] = [];
  const savings = income - fixed - variable;

  if (savings < income * 0.2) {
    insights.push(
      "Your savings rate is below 20%. Consider reducing variable expenses."
    );
  }

  if (variable > fixed) {
    insights.push(
      "You are spending more on wants than needs. Watch discretionary expenses."
    );
  }

  if (savings <= 0) {
    insights.push(
      "You are spending more than your income. Budget adjustment needed."
    );
  }

  return insights;
}
