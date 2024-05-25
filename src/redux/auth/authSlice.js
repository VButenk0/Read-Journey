import { createSlice } from "@reduxjs/toolkit";
import {
  currentThunk,
  refreshThunk,
  signinThunk,
  signoutThunk,
  signupThunk,
} from "./operations";

const thunks = [
  signupThunk,
  signinThunk,
  currentThunk,
  refreshThunk,
  signoutThunk,
];

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
      .addMatcher(
        (action) => thunks.some((thunk) => thunk.fulfilled.match(action)),
        (state, { payload }) => {
          if (
            signupThunk.fulfilled.match(payload) ||
            signinThunk.fulfilled.match(payload) ||
            currentThunk.fulfilled.match(payload)
          ) {
            state.user.email = payload.email;
            state.user.name = payload.name;
            state.token = payload.token;
            state.refreshToken = payload.refreshToken;
            state.isLogged = true;
          } else if (refreshThunk.fulfilled.match(payload)) {
            state.token = payload.token;
            state.refreshToken = payload.refreshToken;
          } else if (signoutThunk.fulfilled.match(payload)) {
            state.user.email = "";
            state.user.name = "";
            state.token = "";
            state.refreshToken = "";
            state.isLogged = false;
          }
          state.isLoading = false;
          state.isError = null;
        }
      )
      .addMatcher(
        (action) => thunks.some((thunk) => thunk.rejected.match(action)),
        (state, { payload }) => {
          state.isLoading = false;
          state.isError = payload;
          if (
            signupThunk.rejected.match(payload) ||
            signinThunk.rejected.match(payload) ||
            currentThunk.rejected.match(payload)
          ) {
            state.isLogged = false;
          }
        }
      )
      .addMatcher(
        (action) => thunks.some((thunk) => thunk.pending.match(action)),
        (state) => {
          state.isLoading = true;
          state.isError = null;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
