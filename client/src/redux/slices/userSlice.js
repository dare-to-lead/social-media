import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  status: "idle",
  token: null,
};

export const login = createAsyncThunk("user/login", async (userdata) => {
  // console.log(userdata);
  const { data } = await axios.post(
    "http://localhost:8080/api/auth/login",
    userdata
  );
  // console.log(data)
  return data;
});

export const editUser = createAsyncThunk("user/editUser", async (userData) => {
  console.log(userData);
  const { data } = await axios.put(
    `http://localhost:8080/api/user/${userData.id}`,
    userData
  );
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload.user;
        localStorage.removeItem("userData");
        localStorage.setItem("userData", JSON.stringify(action.payload.user));
        state.token = action.payload.token;
        localStorage.setItem("token", JSON.stringify(action.payload.token));
      })
      .addCase(login.rejected, (state) => {
        state.status = "idle";
      })
      .addCase(editUser.fulfilled, (state) => {
        console.log("User is edited");
      });
  },
});

export default userSlice.reducer;
