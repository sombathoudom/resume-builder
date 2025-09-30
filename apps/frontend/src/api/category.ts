import { AxiosResponse } from "axios";
import axiosInstance from "../lib/axios";
import { ROUTE_API } from "../lib/route-api";

export const CATEGORY_API = {
  createCategory: async (data: ICategory.CreateCategory) => {
    const response: ICategory.Root = await axiosInstance.post(
      ROUTE_API.category.create,
      data
    );
    return response;
  },
  getCategories: async () => {
    const response: ICategory.Root[] = await axiosInstance.get(
      ROUTE_API.category.root
    );
    return response;
  },
};

// export const useGetCategories = () => {
