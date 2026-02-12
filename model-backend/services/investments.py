def suggest_investments(savings, risk):
    if savings <= 0:
        return {"message": "No surplus available for investments."}

    if risk == "low":
        return {
            "liquid_funds": 0.5 * savings,
            "debt_funds": 0.4 * savings,
            "index_funds": 0.1 * savings
        }

    if risk == "high":
        return {
            "index_funds": 0.7 * savings,
            "debt_funds": 0.2 * savings,
            "liquid_funds": 0.1 * savings
        }

    # medium risk
    return {
        "index_funds": 0.5 * savings,
        "debt_funds": 0.3 * savings,
        "liquid_funds": 0.2 * savings
    }
