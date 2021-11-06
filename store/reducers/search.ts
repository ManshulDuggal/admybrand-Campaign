import { createSlice } from "@reduxjs/toolkit";
import {
  searchAdspace,
  searchMapListing,
  searchSingleItem,
} from "../actions/search";

const initialState = {
  data: [],
  mapdata: [],
  singleItem: {},
  itemLoading: false,
  loading: false,
  rejected: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [searchSingleItem.fulfilled.type]: (state, { payload }) => {
      return {
        ...state,
        itemLoading: false,
        singleItem: payload,
      };
    },
    [searchSingleItem.pending.type]: (state, { payload }) => {
      return {
        ...state,
        itemLoading: true,
      };
    },
    [searchMapListing.fulfilled.type]: (state, { payload }) => {
      return {
        ...state,
        mapdata: payload,
      };
    },
    [searchAdspace.fulfilled.type]: (state, { payload }) => {
      return {
        ...state,
        data: payload,
        loading: false,
        rejected: false,
      };
    },
    [searchAdspace.pending.type]: (state, action) => {
      return {
        ...state,
        loading: true,
        rejected: false,
      };
    },
    [searchAdspace.rejected.type]: (state, action) => {
      return {
        ...state,
        data: [],
        rejected: true,
        loading: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = searchSlice.actions;

export default searchSlice.reducer;
