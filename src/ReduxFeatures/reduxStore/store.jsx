import { configureStore } from "@reduxjs/toolkit";
import LoginSliceReducer from "../allSlice/LoginSlice";
export const store = configureStore({
  reducer: {
    LoginSlice: LoginSliceReducer,
  },
});
