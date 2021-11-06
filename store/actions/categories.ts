import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../axiosconfig";

interface Update {
  id: string;
  name: string;
  value: string | boolean | [];
}

interface Category {
  name: string;
  logo_url: string;
  parent_id?: string;
}

// get all categories
export const getCategories = createAsyncThunk("categories/getall", async () => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axiosInstance.get("/category/get", header);
    return response.data;
  } catch (error) {
    throw error;
  }
});

// get single category
export const getCategory = createAsyncThunk(
  "category/get",
  async (id: string, thunkAPI) => {
    try {
      let token: any = thunkAPI.getState();
      token = token.user?.user.session_cookie;
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.get(`/category/get/${id}`, header);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// update category
export const updateCategory = createAsyncThunk(
  "category/updateOne",
  async (update: Update, thunkAPI) => {
    try {
      let token: any = thunkAPI.getState();
      token = token.user?.user.session_cookie;

      const data = {
        id: update.id,
        name: update.name,
        value: update.value,
      };

      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.patch(
        `/category/update`,
        data,
        header
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// delete category
export const deleteCategory = createAsyncThunk(
  "category/delete",
  async (id: string, thunkAPI) => {
    try {
      let token: any = thunkAPI.getState();
      token = token.user?.user.session_cookie;
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.delete(
        `/category/delete/${id}`,
        header
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// create category
export const createCategory = createAsyncThunk(
  "category/create",
  async (category: Category, thunkAPI) => {
    try {
      let token: any = thunkAPI.getState();
      token = token.user?.user.session_cookie;
      const data = {
        category: {
          name: category.name,
          logo_url: category.logo_url,
          parent_id: category.parent_id,
        },
        parentId: category.parent_id,
      };
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.post(
        `/category/create`,
        data,
        header
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
