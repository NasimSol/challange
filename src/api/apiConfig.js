import axios from "axios";
export const api = axios.create({
  baseURL: "https://interview-api.azkivam.com/api/v1",
});
