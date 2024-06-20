import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../configAxios/configAxios";
import { transformId } from "../../helpers/helpers";
import { toast } from "react-toastify";

export const recommendBooksThunk = createAsyncThunk(
  "books/recommend",
  async (credentials, thunkApi) => {
    try {
      const { title, author, page, limit } = credentials;
      const params = new URLSearchParams();

      if (title) params.append("title", title);
      if (author) params.append("author", author);
      if (!title && !author && page) params.append("page", page);
      if (limit) params.append("limit", limit);

      const { data } = await api.get(`/books/recommend?${params.toString()}`);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addBookThunk = createAsyncThunk(
  "books/addBook",
  async (credentials, thunkApi) => {
    try {
      const bookExists = thunkApi
        .getState()
        .booksSlice.library.some((book) => book.title === credentials.title);

      if (bookExists) {
        toast.error("This book already exists in your library");
        return thunkApi.rejectWithValue(
          "This book already exists in your library"
        );
      }
      const { data } = await api.post("/books/add", credentials);
      return transformId(data);
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addRcmndBookThunk = createAsyncThunk(
  "books/addBookById",
  async ({ id, title }, thunkApi) => {
    const bookExists = thunkApi
      .getState()
      .booksSlice.library.some((book) => book.title === title);

    if (bookExists) {
      toast.error("This book already exists in your library");
      return thunkApi.rejectWithValue(
        "This book already exists in your library"
      );
    }
    try {
      const { data } = await api.post(`/books/add/${id}`);
      return transformId(data);
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteBookThunk = createAsyncThunk(
  "bools/deleteBook",
  async (id, thunkApi) => {
    try {
      const { data } = await api.delete(`/books/remove/${id}`);
      return transformId(data);
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getUserBooksThunk = createAsyncThunk(
  "books/getOwned",
  async (status, thunkApi) => {
    try {
      const params = new URLSearchParams();
      if (status) params.append("status", status);
      const { data } = await api.get(`/books/own?${params.toString()}`);
      return transformId(data);
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const startReadingThunk = createAsyncThunk(
  "books/startReading",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post("/books/reading/start", credentials);
      return transformId(data);
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const finishReadingThunk = createAsyncThunk(
  "books/finishReading",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post("/books/reading/finish", credentials);
      return transformId(data);
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteReadingThunk = createAsyncThunk(
  "books/deleteReading",
  async ({ bookId, readingId }, thunkApi) => {
    try {
      const { data } = await api.delete(
        `/books/reading?bookId=${bookId}&readingId=${readingId}`
      );
      return transformId(data);
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getBookInfoThunk = createAsyncThunk(
  "books/getBookInfo",
  async (id, thunkApi) => {
    try {
      const { data } = await api.post(`/books/${id}`);
      return transformId(data);
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
