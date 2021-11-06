import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../axiosconfig";

interface Update {
  id: string;
  name: string;
  value: string | boolean | [];
}

interface City {
  name: string;
  code: string;
  rank?: string;
}

// get all city
export const getCities = createAsyncThunk("city/getall", async () => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axiosInstance.get("/city/get", header);
    return response.data;
  } catch (error) {
    throw error;
  }
});

// get single city
export const getCity = createAsyncThunk("city/get", async (id: string) => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axiosInstance.get(`/city/get/${id}`, header);
    return response.data;
  } catch (error) {
    throw error;
  }
});
// search  city
export const searchCity = createAsyncThunk(
  "city/get/search",
  async (city: string) => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (city !== "") {
        const response = await axiosInstance.get(
          `/city/get/search/${city}`,
          header
        );
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);
// update city
export const updateCity = createAsyncThunk(
  "city/updateOne",
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
      const response = await axiosInstance.patch(`/city/update`, data, header);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// delete city
export const deleteCity = createAsyncThunk(
  "city/delete",
  async ({ id, token }: { id: string; token: string }) => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.delete(`/city/delete/${id}`, header);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// create city
export const createCity = createAsyncThunk(
  "city/create",
  async ({ city, token }: { city: City; token: string }) => {
    try {
      const data = {
        name: city.name,
        code: city.code,
        rank: city.rank,
      };
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.post(`/city/create`, data, header);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
