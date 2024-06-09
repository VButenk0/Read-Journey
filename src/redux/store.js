import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { booksReducer } from "./books/booksSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { modalsReducer } from "./modals/modalsSlice";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token", "refreshToken", "user"],
};

const booksPersistConfig = {
  key: "books",
  storage,
  whitelist: ["books", "library"],
};

const modalsPersistConfig = {
  key: "modals",
  storage,
  whitelist: [],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const persistedBooksReducer = persistReducer(booksPersistConfig, booksReducer);

const persistedModalsReducer = persistReducer(
  modalsPersistConfig,
  modalsReducer
);

export const store = configureStore({
  reducer: {
    authSlice: persistedAuthReducer,
    booksSlice: persistedBooksReducer,
    modalsSlice: persistedModalsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
