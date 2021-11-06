import { createSlice } from "@reduxjs/toolkit";
import { getcountries } from "../actions/country";

const initialState = {
  country: [],
};

export const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getcountries.fulfilled.type]: (state, { payload }) => {
      return {
        ...state,
        country: payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = countrySlice.actions;

export default countrySlice.reducer;
