import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from "mathjs";

const storedHistory = localStorage.getItem("history");
const parsedHistory = storedHistory ? JSON.parse(storedHistory) : [];


const initialState = {
  history: parsedHistory,
  lastOperation: "",
  operation: "",
  result: 0,
};

export const calcSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addText: (state, action) => {
      if (action.payload.type === "operation" && state.result !== 0) {
        state.operation = `${state.result}`;
      }
      state.result = 0;
      state.operation += action.payload.name;
    },
    toCalculate: (state) => {
      try {
        state.result = evaluate(state.operation);

        const newElem = {
          operation: state.operation,
          result: state.result,
        };
        state.history = [...state.history, newElem];

        if (state.history.length > 5) {
          state.history.shift();
        }
        state.lastOperation = state.operation;
        state.operation = "";
        localStorage.setItem("history", JSON.stringify(state.history));
      } catch (error) {
        console.error("Error occurred during calculation:", error);
      }
    },
    resetCalculate: (state) => {
      state.operation = "";
      state.lastOperation = "";
      state.result = 0;
    },
    clearHistory: (state) => {
      state.history = [];
      localStorage.setItem("history", JSON.stringify([]));
    },
  },
});

export const {
  addText,
  toCalculate,
  resetCalculate,
  clearHistory,
} = calcSlice.actions;

export default calcSlice.reducer;
