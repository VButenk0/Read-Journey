import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "../../configAxios/configAxios";

export const signupThunk = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post("/users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signinThunk = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post("users/signin", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const currentThunk = createAsyncThunk(
  "auth/current",
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().authSlice.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue("Token doesn't exist");
    }
    try {
      const { data } = await api.get("users/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().authSlice.refreshToken;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue("Token doesn't exist");
    }
    try {
      const { data } = await api.get("users/current/refresh");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signoutThunk = createAsyncThunk(
  "auth/signout",
  async (_, thunkApi) => {
    try {
      await api.post("users/signout");
      clearToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
