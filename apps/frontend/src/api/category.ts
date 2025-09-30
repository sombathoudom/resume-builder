import axiosInstance from "../lib/axios";
import { ROUTE_API } from "../lib/route-api";

export const useCreateCategory = async (data: ICategory.CreateCategory) => {
  return await axiosInstance.post(ROUTE_API.category.create, data);
};

// export const useGetCategories = () => {
