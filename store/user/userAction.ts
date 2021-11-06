import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../axiosconfig";

interface PassUpdate {
  key: string;
  password: string;
}

export const updatePassword = createAsyncThunk(
  "user/update/password",
  async ({ key, password }: PassUpdate) => {
    const data = {
      key: key,
      password: password,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
      if (password !== "" && key !== "") {
        console.log(password)
        console.log(key)
      const response = await axiosInstance.post(
        `/user/update/password`,
        data,
        header
      );
      return response.data;
    }
  }
);
