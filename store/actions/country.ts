import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../axiosconfig";

interface Update {
  country: string;
  name: string;
  value: string | boolean | [];
}

interface Country {
  name: string;
  applive: boolean;
  image?: string;
  default_langauge: string;
}

// get all country
export const getcountries = createAsyncThunk("country/getall", async () => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axiosInstance.get("/country/get", header);
    return response.data;
  } catch (error) {
    throw error;
  }
});

// get single country
export const getcountry = createAsyncThunk(
  "country/get",
  async ({ country, token }: { country: string; token: string }) => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.get(
        `/country/get/${country}`,
        header
      );
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// update country
export const updatecountry = createAsyncThunk(
  "country/updateOne",
  async ({ update, token }: { update: Update; token: string }) => {
    try {
      const data = {
        field_name: update.name,
        value: update.value,
      };

      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.patch(
        `/country/update/${update.country}`,
        data,
        header
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// delete country
export const deletecountry = createAsyncThunk(
  "country/delete",
  async ({ id, token }: { id: string; token: string }) => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.delete(
        `/country/delete/${id}`,
        header
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// create country
export const createcountry = createAsyncThunk(
  "country/create",
  async ({ country, token }: { country: Country; token: string }) => {
    try {
      const data = {
        name: country.name,
        applive: country.applive,
        image: country.image,
        default_langauge: country.default_langauge,
      };
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.post(
        `/country/create`,
        data,
        header
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
