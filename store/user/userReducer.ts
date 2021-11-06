import { createSlice } from "@reduxjs/toolkit";
import { updatePassword } from "./userAction";

const initialState = {
  password_loading: false,
  updated: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [updatePassword.pending.type]: (state, { payload }) => {
      return {
        ...state,
        password_loading: true,
      };
    },
    [updatePassword.fulfilled.type]: (state, { payload }) => {
      return {
        ...state,
        password_loading: false,
        updated: payload.success,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
