import axios from "axios";
import axiosInstance from "../lib/axios";
export const TEMPLATE_API = {
  // Get all templates (admin view)
  getAllTemplates: async (): Promise<Template.Root[]> => {
    try {
      const response: Template.Root[] = await axiosInstance.get("/templates");
      console.log(response);
      return response;
    } catch (error) {
      throw new Error("Failed to fetch templates");
    }
  },

  // Get active templates (public view)
  getActiveTemplates: async (): Promise<Template.Root[]> => {
    try {
      const response: Template.Root[] = await axiosInstance.get("/templates");
      return response.filter((template: Template.Root) => template.is_active);
    } catch (error) {
      throw new Error("Failed to fetch active templates");
    }
  },

  // Get template by ID
  getTemplateById: async (id: string): Promise<Template.Root> => {
    try {
      const response: Template.Root = await axiosInstance.get(
        `/templates/${id}`
      );
      console.log(response);
      return response;
    } catch (error) {
      throw new Error("Failed to fetch template");
    }
  },

  // Create new template
  createTemplate: async (
    templateData: Omit<Template.CreateTemplate, "id">
  ): Promise<Template.Root> => {
    try {
      const response: Template.Root = await axiosInstance.post(
        "/templates",
        templateData
      );
      return response;
    } catch (error) {
      throw new Error("Failed to create template");
    }
  },

  // Update template
  updateTemplate: async (
    id: string,
    templateData: Partial<Omit<Template.UpdateTemplate, "id">>
  ): Promise<Template.Root> => {
    try {
      const response: Template.Root = await axiosInstance.put(
        `/templates/${id}`,
        templateData
      );
      return response;
    } catch (error) {
      throw new Error("Failed to update template");
    }
  },

  // Delete template
  deleteTemplate: async (id: string): Promise<void> => {
    try {
      await axiosInstance.delete(`/templates/${id}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Failed to delete template"
        );
      }
      throw new Error("Failed to delete template");
    }
  },
};
