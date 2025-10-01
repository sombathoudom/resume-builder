import { Router } from "express";
import { TemplateController } from "../controllers/template.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

// Public routes
router.get("/", TemplateController.getActiveTemplates);
router.get("/:id", TemplateController.getTemplateById);

// Admin routes (protected)
router.post("/", TemplateController.createTemplate);
router.put("/:id", TemplateController.updateTemplate);
router.delete("/:id", TemplateController.deleteTemplate);

export default router;
