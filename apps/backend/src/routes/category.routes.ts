import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  createCategory,
  getCategories,
} from "../controllers/category.controller";
const router = Router();

// router.use(authMiddleware);
router.get("/", getCategories);
router.post("/create", createCategory);

export default router;
