import { create } from "zustand";

interface FinanceState {
  income: number;
  expenses: number;
  savings: number;
  setFinance: (data: Partial<FinanceState>) => void;
}

export const useFinanceStore = create<FinanceState>((set) => ({
  income: 0,
  expenses: 0,
  savings: 0,
  setFinance: (data) => set(data),
}));
