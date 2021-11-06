import { createSlice } from "@reduxjs/toolkit";
import { searchCity } from "../actions/location";

const initialState = {
  location: [],
  loading: false,
  rejected: false,
};

export const citySlice = createSlice({
  name: "city",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [searchCity.fulfilled.type]: (state, { payload }) => {
      return {
        ...state,
        location: payload,
        loading: false,
        rejected: false,
      };
    },
    [searchCity.pending.type]: (state, action) => {
      return {
        ...state,
        loading: true,
        rejected: false,
      };
    },
    [searchCity.rejected.type]: (state, action) => {
      return {
        ...state,
        rejected: true,
        loading: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = citySlice.actions;

export default citySlice.reducer;
