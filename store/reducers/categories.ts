import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../actions/categories";

const initialState = {
  categories: [],
  mainCategories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getCategories.fulfilled.type]: (state, { payload }) => {
      const main =
        payload.length > 0
          ? payload.filter(
              (cat: any) => cat.parent_id == "000000000000000000000000"
            )
          : [];
      return {
        ...state,
        categories: payload,
        mainCategories: main,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
