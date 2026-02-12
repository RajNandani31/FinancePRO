def generate_insights(income, fixed, variable):
    insights = []
    savings = income - fixed - variable

    if savings < income * 0.2:
        insights.append("Savings rate below 20%. Consider cutting variable expenses.")

    if variable > fixed:
        insights.append("Wants spending exceeds needs. Watch discretionary expenses.")

    if savings <= 0:
        insights.append("You are overspending. Budget correction needed.")

    return insights
