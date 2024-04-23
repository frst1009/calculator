import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "./slice"

export const store = configureStore({
  reducer: {
    calc:calcReducer
  },
});