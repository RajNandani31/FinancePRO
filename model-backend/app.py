from flask import Flask, request, jsonify
from flask_cors import CORS

from services.budget import calculate_budget
from services.insights import generate_insights
from services.investments import suggest_investments

app = Flask(__name__)
CORS(app)

@app.route("/api/analyze", methods=["POST"])
def analyze_finances():
    data = request.json

    income = data["income"]
    fixed = data["fixedExpenses"]
    variable = data["variableExpenses"]
    risk = data["risk"]

    budget = calculate_budget(income, fixed, variable)
    insights = generate_insights(income, fixed, variable)
    investments = suggest_investments(budget["savings"], risk)

    return jsonify({
        "budget": budget,
        "insights": insights,
        "investments": investments
    })


if __name__ == "__main__":
    app.run(debug=True)
