import { create } from "zustand";

interface OnboardingState {
  income: number;
  fixedExpenses: number;
  variableExpenses: number;
  goal: string;
  risk: "low" | "medium" | "high";

  setData: (data: Partial<OnboardingState>) => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  income: 0,
  fixedExpenses: 0,
  variableExpenses: 0,
  goal: "",
  risk: "medium",

  setData: (data) => set(data),
}));
