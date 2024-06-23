import { createSlice } from "@reduxjs/toolkit";
import {
  currentThunk,
  refreshThunk,
  signinThunk,
  signoutThunk,
  signupThunk,
} from "./operations";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { email: "", name: "" },
    token: "",
    refreshToken: "",
    isLogged: false,
    isLoading: false,
    isError: null,
    isAuthChecked: false,
  },
  reducers: {
    changeAuthChecked: (state, { payload }) => {
      state.isAuthChecked = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLogged = true;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(signinThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLogged = true;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(currentThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLogged = true;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(signoutThunk.fulfilled, (state) => {
        state.user.email = "";
        state.user.name = "";
        state.token = "";
        state.refreshToken = "";
        state.isLogged = false;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(signupThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signinThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLogged = false;
        state.isError = payload;
      })
      .addCase(signinThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLogged = false;
        state.isError = payload;
      })
      .addCase(signoutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(currentThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLogged = false;
        state.isError = payload;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const { changeAuthChecked } = authSlice.actions;
export const authReducer = authSlice.reducer;
