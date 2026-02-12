def calculate_budget(income, fixed, variable):
    total_expenses = fixed + variable
    savings = max(income - total_expenses, 0)

    return {
        "needs": fixed,
        "wants": variable,
        "savings": savings,
        "savings_rate": round((savings / income) * 100, 2) if income else 0
    }
