import prisma from "../config/db";
import { Request, Response } from "express";
export class TemplateService {
  // Get all active templates
  static async getActiveTemplates(req: Request) {
    return await prisma.template.findMany({
      skip: Number(req.query?.skip || 0),
      take: Number(req.query?.take || 10),
      where: { is_active: true },
      orderBy: { createdAt: "desc" },
    });
  }

  // Get template by ID
  static async getTemplateById(id: string) {
    return await prisma.template.findUnique({
      where: { id },
    });
  }

  // Create new template (Admin only)
  static async createTemplate(data: {
    name: string;
    description: string;
    preview_url: string;
    file_path: string;
    component_name: string;
  }) {
    return await prisma.template
      .create({
        data,
      })
      .catch((error) => {
        throw new Error("Failed to create template");
      });
  }

  // Update template (Admin only)
  static async updateTemplate(
    id: string,
    data: {
      name?: string;
      description?: string;
      preview_url?: string;
      file_path?: string;
      component_name?: string;
      is_active?: boolean;
    }
  ) {
    return await prisma.template.update({
      where: { id },
      data,
    });
  }

  // Delete template (Admin only)
  static async deleteTemplate(id: string) {
    return await prisma.template.delete({
      where: { id },
    });
  }
}
