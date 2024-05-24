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
  },

  reducers: {},
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
      .addCase(signupThunk.rejected, (state, { payload }) => {
        state.isLogged = false;
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(signinThunk.rejected, (state, { payload }) => {
        state.isLogged = false;
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(currentThunk.rejected, (state, { payload }) => {
        state.isLogged = false;
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addCase(signoutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.isLoading = false;
          state.isError = payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.isError = null;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
