import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../axiosconfig";

interface Update {
  id: string;
  name: string;
  value: string | boolean | [];
}

interface Language {
  name: string;
}

// get all languages
export const getlanguages = createAsyncThunk("languages/getall", async () => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axiosInstance.get("/language/get", header);
    return response.data;
  } catch (error) {
    throw error;
  }
});

// get single language
export const getLanguage = createAsyncThunk(
  "language/get",
  async ({ id, token }: { id: string; token: string }) => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.get(`/language/get/${id}`, header);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// update language
export const updateLanguage = createAsyncThunk(
  "language/updateOne",
  async ({ update, token }: { update: Update; token: string }) => {
    try {
      const data = {
        id: update.id,
        fieldname: update.name,
        value: update.value,
      };

      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.patch(
        `/language/update`,
        data,
        header
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// delete language
export const deleteLanguage = createAsyncThunk(
  "language/delete",
  async ({ id, token }: { id: string; token: string }) => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.delete(
        `/language/delete/${id}`,
        header
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// create language
export const createLanguage = createAsyncThunk(
  "language/create",
  async ({ language, token }: { language: Language; token: string }) => {
    try {
      const data = {
        language: {
          name: language.name,
        },
      };
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.post(
        `/language/create`,
        data,
        header
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
