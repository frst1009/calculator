import { createSlice } from "@reduxjs/toolkit";
import { evaluate, log } from "mathjs";

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
      // if (action.payload.type === "operation" && state.result !== 0) {
      //   state.operation = `${state.result}`;
      // }
  
      // if(state.operation.slice(0, -1)){

      // }
      state.result = 0;
      const { type, name } = action.payload;
      
      if (type === "operation") {
        // Check if the last character in the operation is an operator
        const lastChar = state.operation.slice(-1);
        console.log(state.operation.slice(-1));
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === ".") {
          // If the last character is an operator, replace it with the new operator
          state.operation = state.operation.slice(0, -1) + name;
          
        } else {
          // If the last character is not an operator, append the new operator
          state.operation += name;
        }
      } else if (type === "number") {
      state.operation += name;
      }

    
    },
    calculate: (state) => {
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
  },
});

export const {
  addText,
  calculate,
  resetCalculate,
} = calcSlice.actions;

export default calcSlice.reducer;
