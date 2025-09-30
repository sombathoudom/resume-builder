import { Request, Response } from "express";
import {
  createCategoryService,
  getCategoriesService,
} from "../services/category.service";

export const createCategory = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const category = await createCategoryService(name, description);
  res.status(201).json(category);
};

export const getCategories = async (req: Request, res: Response) => {
  const categories = await getCategoriesService();
  res.status(200).json(categories);
};
