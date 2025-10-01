import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller";
const router = Router();

// router.use(authMiddleware);
router.get("/", getCategories);
router.post("/create", createCategory);
router.get("/:id", getCategoryById);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
export default router;
