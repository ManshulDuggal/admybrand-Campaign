import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../axiosconfig";

// search
export const searchAdspace = createAsyncThunk(
  "search/get",
  async ({
    category,
    fieldname,
    value,
  }: {
    category: string | string[];
    fieldname: string;
    value: string | string[];
  }) => {
    let limit = 10;
    let page = 1;
    let categoryname = String(category).toLowerCase();
    categoryname = categoryname.replace(/\s+/g, "");
    try {
      if (category !== "" && fieldname !== "" && value !== "") {
        const response = await axiosInstance.get(
          `/${categoryname}/get/${fieldname}/${value}/${page}/${limit}`
        );
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);
// search  maps coordinates
export const searchMapListing = createAsyncThunk(
  "search/get/maps",
  async ({
    category,
    fieldname,
    value,
  }: {
    category: string | string[];
    fieldname: string;
    value: string | string[];
  }) => {
    let categoryname = String(category).toLowerCase();
    categoryname = categoryname.replace(/\s+/g, "");
    try {
      if (category !== "" && fieldname !== "" && value !== "") {
        const response = await axiosInstance.get(
          `/${categoryname}/get/maps/${fieldname}/${value}`
        );
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

// search
export const searchSingleItem = createAsyncThunk(
  "search/get/id",
  async ({ category, id }: { category: string | string[]; id: string }) => {
    let categoryname = String(category).toLowerCase();
    categoryname = categoryname.replace(/\s+/g, "");
    try {
      if (category !== "" && id !== "") {
        const response = await axiosInstance.get(`/${categoryname}/get/${id}`);
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);
