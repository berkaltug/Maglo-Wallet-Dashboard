import { createSlice } from "@reduxjs/toolkit";
import type {
  CapitalInterval,
  Card,
  SummaryData,
  Transaction,
  Transfer,
} from "../services/financialTypes";

export interface FinanceState {
  summary: SummaryData | null;
  recentTransactions: Array<Transaction>;
  scheduledTransfers: Array<Transfer>;
  workingCapitals: Array<CapitalInterval>;
  cards: Card[];
}
const initialState:FinanceState = {
  summary: null,
  recentTransactions: [],
  scheduledTransfers:   [],
  workingCapitals: [],
  cards: [],
};

const financeSlice = createSlice({
  name: "financeSlice",
  initialState,
  reducers: {
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
    setRecentTransactions: (state, action) => {
      state.recentTransactions = action.payload;
    },
    setScheduledTransfers: (state, action) => {
      state.scheduledTransfers = action.payload;
    },
    setWorkingCapital: (state, action) => {
      state.workingCapitals = action.payload;
    },
    setCards: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export const {
  setSummary,
  setRecentTransactions,
  setScheduledTransfers,
  setWorkingCapital,
  setCards,
} = financeSlice.actions;

export default financeSlice.reducer;
