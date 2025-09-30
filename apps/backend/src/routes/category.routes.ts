import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createCategory } from "../controllers/category.controller";
const router = Router();

// router.use(authMiddleware);
router.post("/create", createCategory);

export default router;
