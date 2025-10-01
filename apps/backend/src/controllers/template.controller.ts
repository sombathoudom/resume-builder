import { Request, Response } from "express";
import { TemplateService } from "../services/template.service";

export class TemplateController {
  // Get all active templates
  static async getActiveTemplates(req: Request, res: Response) {
    try {
      const templates = await TemplateService.getActiveTemplates(req);
      return res.status(200).json(templates);
    } catch (error) {
      console.error("Error fetching templates:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch templates",
      });
    }
  }

  // Get template by ID
  static async getTemplateById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const template = await TemplateService.getTemplateById(id);

      if (!template) {
        return res.status(404).json({
          success: false,
          message: "Template not found",
        });
      }

      return res.status(200).json(template);
    } catch (error) {
      console.error("Error fetching template:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch template",
      });
    }
  }

  // Create new template (Admin only)
  static async createTemplate(req: Request, res: Response) {
    try {
      const { name, description, preview_url, file_path, component_name } =
        req.body;

      if (!name || !description || !component_name) {
        return res.status(400).json({
          success: false,
          message: "Name, description, and component_name are required",
        });
      }

      const template = await TemplateService.createTemplate({
        name,
        description,
        preview_url: preview_url || "",
        file_path: file_path || "",
        component_name,
      });

      res.status(201).json({
        success: true,
        data: template,
        message: "Template created successfully",
      });
    } catch (error) {
      console.error("Error creating template:", error);
      res.status(500).json({
        success: false,
        message: "Failed to create template",
      });
    }
  }

  // Update template (Admin only)
  static async updateTemplate(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const template = await TemplateService.updateTemplate(id, updateData);

      res.json({
        success: true,
        data: template,
        message: "Template updated successfully",
      });
    } catch (error) {
      console.error("Error updating template:", error);
      res.status(500).json({
        success: false,
        message: "Failed to update template",
      });
    }
  }

  // Delete template (Admin only)
  static async deleteTemplate(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await TemplateService.deleteTemplate(id);

      res.json({
        success: true,
        message: "Template deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting template:", error);
      res.status(500).json({
        success: false,
        message: "Failed to delete template",
      });
    }
  }
}
