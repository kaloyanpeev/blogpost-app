import { createSlice } from "@reduxjs/toolkit";
import { CurrentUserInterface } from "../../types/UserTypes";

const initialState: CurrentUserInterface = {
  name: "Kaloyan",
  email: "kaloyanppeev@gmail.com",
};

const currentUserSlice = createSlice({
  name: "currentUserSlice",
  initialState,
  reducers: {},
});

export const {} = currentUserSlice.actions;

export default currentUserSlice.reducer;
