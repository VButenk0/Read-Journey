import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../configAxios/configAxios";

export const recommendBooksThunk = createAsyncThunk(
  "books/recommend",
  async (credentials, thunkApi) => {
    try {
      const { title, author, page, limit } = credentials;
      const params = new URLSearchParams();

      if (title) params.append("title", title);
      if (author) params.append("author", author);
      if (page) params.append("page", page);
      if (limit) params.append("limit", limit);

      const { data } = await api.get(`/books/recommend?${params.toString()}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addBookThunk = createAsyncThunk(
  "books/addBook",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post("/books/add", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addRcmndBookThunk = createAsyncThunk(
  "books/addBookById",
  async (id, thunkApi) => {
    try {
      const { data } = await api.post(`/books/add/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteBookThunk = createAsyncThunk(
  "bools/deleteBook",
  async (id, thunkApi) => {
    try {
      const { data } = await api.delete(`/books/remove/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getUserBooksThunk = createAsyncThunk(
  "books/getOwned",
  async (status, thunkApi) => {
    try {
      const { data } = await api.get("/books/own", status);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const startReadingThunk = createAsyncThunk(
  "books/startReading",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post("/books/reading/start", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const finishReadingThunk = createAsyncThunk(
  "books/finishReading",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post("/books/reading/finish", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteReadingThunk = createAsyncThunk(
  "books/deleteReading",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.delete("/books/reading", credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getBookInfoThunk = createAsyncThunk(
  "books/getBookInfo",
  async (id, thunkApi) => {
    try {
      const { data } = await api.post(`/books/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
