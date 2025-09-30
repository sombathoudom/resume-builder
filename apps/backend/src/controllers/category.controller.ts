import { Request, Response } from "express";
import { createCategoryService } from "../services/category.service";

export const createCategory = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const category = await createCategoryService(name, description);
  res.status(201).json(category);
};
