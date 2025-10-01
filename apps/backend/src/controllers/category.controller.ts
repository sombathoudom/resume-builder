import { Request, Response } from "express";
import {
  createCategoryService,
  getCategoriesService,
  getCategoryByIdService,
  updateCategoryService,
  deleteCategoryService,
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

export const getCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await getCategoryByIdService(id);
  res.status(200).json(category);
};

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const category = await updateCategoryService(id, name, description);
  res.status(200).json(category);
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await deleteCategoryService(id);
  res.status(200).json(category);
};
