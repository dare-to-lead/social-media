import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
};

const login = createAsyncThunk("user/login", async (data) => {
  const { data } = axios.get("");
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.status = "idle";
      });
  },
});

const {} = userSlice;
