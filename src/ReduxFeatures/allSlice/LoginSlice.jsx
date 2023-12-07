import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginState: localStorage.getItem("UserToken")
    ? JSON.parse(localStorage.getItem("UserToken"))
    : null,
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.loginState = action.payload;
    },
  },
});

export const { loginUser } = LoginSlice.actions;
export default LoginSlice.reducer;
