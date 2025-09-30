import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: apiUrl.category.root,
});
