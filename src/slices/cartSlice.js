import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setToken(state, action) {
      state.totalItems = action.payload;
    },
  },
});

export const { setToken } = cartSlice.actions;

export default cartSlice.reducer;