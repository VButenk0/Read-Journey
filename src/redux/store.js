import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { booksReducer } from "./books/booksSlice";

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    booksSlice: booksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});
