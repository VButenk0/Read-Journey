import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { api, clearToken, setToken } from "../../configAxios/configAxios";

export const signupThunk = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post("/users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);
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
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const currentThunk = createAsyncThunk(
  "auth/current",
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().authSlice.token;

    if (!savedToken) {
      return thunkApi.rejectWithValue("Token doesn't exist");
    }

    setToken(savedToken);

    try {
      const { data } = await api.get("users/current");
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        clearToken();
        return thunkApi.rejectWithValue("Unauthorized - Please log in again.");
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().authSlice.refreshToken;

    if (!savedToken) {
      return thunkApi.rejectWithValue("Refresh token doesn't exist");
    }

    setToken(savedToken);

    try {
      const { data } = await api.get("users/current/refresh");
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        clearToken();
        return thunkApi.rejectWithValue("Unauthorized - Please log in again.");
      }
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
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
