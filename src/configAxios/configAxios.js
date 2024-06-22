import axios from "axios";

export const api = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

export const setToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

export const clearToken = () => {
  delete api.defaults.headers.common.Authorization;
};
