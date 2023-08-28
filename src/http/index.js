import axios from "axios";

export const API_URL = "http://127.0.0.1:8000/";

export const $api = axios.create({
  withCredentials: false,
  mode: "no-cors",
  baseURL: API_URL,
});
