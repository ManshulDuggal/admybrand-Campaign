import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./reducers/categories";
import countrySlice from "./reducers/country";
import languageSlice from "./reducers/language";
import citySlice from "./reducers/location";
import searchSlice from "./reducers/search";
import userSlice from "./user/userReducer";

const rootReducer = combineReducers({
  categories: categoriesSlice,
  country: countrySlice,
  language: languageSlice,
  location: citySlice,
  search: searchSlice,
  user: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
