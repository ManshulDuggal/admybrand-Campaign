import { createSlice } from "@reduxjs/toolkit";
import { getlanguages } from "../actions/language";

const initialState = {
  language: [],
};

export const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getlanguages.fulfilled.type]: (state, { payload }) => {
      return {
        ...state,
        language: payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = languageSlice.actions;

export default languageSlice.reducer;
