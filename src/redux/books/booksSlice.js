import { createSlice } from "@reduxjs/toolkit";
import {
  getBookInfoThunk,
  addBookThunk,
  addRcmndBookThunk,
  deleteBookThunk,
  getUserBooksThunk,
  recommendBooksThunk,
  startReadingThunk,
  finishReadingThunk,
  deleteReadingThunk,
} from "./operations";

const thunks = [
  recommendBooksThunk,
  addBookThunk,
  addRcmndBookThunk,
  deleteBookThunk,
  getUserBooksThunk,
  startReadingThunk,
  finishReadingThunk,
  deleteReadingThunk,
  getBookInfoThunk,
];

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    totalPages: 0,
    page: 0,
    perPage: 0,
    library: [],
    selectedItem: {},
    bookStat: {},
    isLoading: false,
    isError: null,
  },
  reducers: {
    changeSelectedItem: (state, { payload }) => {
      state.selectedItem = payload;
    },
    incrementRcmndPage: (state) => {
      state.page += 1;
    },
    decrementRcmndPage: (state) => {
      state.page -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => thunks.some((thunk) => thunk.fulfilled.match(action)),
        (state, { payload }) => {
          if (recommendBooksThunk.fulfilled.match(payload)) {
            state.books = payload.results;
            state.totalPages = payload.totalPages;
            state.page = payload.page;
            state.perPage = payload.perPage;
          } else if (getUserBooksThunk.fulfilled.match(payload)) {
            state.library = payload;
          } else if (getBookInfoThunk.fulfilled.match(payload)) {
            state.bookStat = payload;
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

export const { changeSelectedItem, incrementRcmndPage, decrementRcmndPage } =
  booksSlice.actions;
export const booksReducer = booksSlice.reducer;
