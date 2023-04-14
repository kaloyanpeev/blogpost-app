import { createSlice } from "@reduxjs/toolkit";
import { CurrentUserInterface } from "../../types/UserTypes";

const initialState = {
  user: {},
};

const currentUserSlice = createSlice({
  name: "currentUserSlice",
  initialState,
  reducers: {
    logInUser(state, action) {
      state.user = action.payload;
    },
    logOutUser(state) {
      state.user = {};
    },
  },
});

export const { logInUser, logOutUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
