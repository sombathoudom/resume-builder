import axios from "axios";
import { apiClient, ApiResponse } from "@/lib/api-client";

export const CV_API = {
  // Get user's CVs
  getUserCVs: async (): Promise<any[]> => {
    try {
      const response = await apiClient.get<ApiResponse<any[]>>("/cv");
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Failed to fetch CVs");
      }
      throw new Error("Failed to fetch CVs");
    }
  },

  // Get CV by ID
  getCVById: async (id: string): Promise<any> => {
    try {
      const response = await apiClient.get<ApiResponse<any>>(`/cv/${id}`);
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Failed to fetch CV");
      }
      throw new Error("Failed to fetch CV");
    }
  },

  // Create new CV
  createCV: async (cvData: {
    templateId: string;
    title?: string;
    data_json: any;
  }): Promise<any> => {
    try {
      const response = await apiClient.post<ApiResponse<any>>("/cv", cvData);
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Failed to create CV");
      }
      throw new Error("Failed to create CV");
    }
  },

  // Update CV
  updateCV: async (
    id: string,
    cvData: {
      title?: string;
      data_json?: any;
      status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
      pdf_url?: string;
    }
  ): Promise<any> => {
    try {
      const response = await apiClient.put<ApiResponse<any>>(
        `/cv/${id}`,
        cvData
      );
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Failed to update CV");
      }
      throw new Error("Failed to update CV");
    }
  },

  // Delete CV
  deleteCV: async (id: string): Promise<void> => {
    try {
      await apiClient.delete(`/cv/${id}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Failed to delete CV");
      }
      throw new Error("Failed to delete CV");
    }
  },

  // Duplicate CV
  duplicateCV: async (id: string): Promise<any> => {
    try {
      const response = await apiClient.post<ApiResponse<any>>(
        `/cv/${id}/duplicate`
      );
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || "Failed to duplicate CV"
        );
      }
      throw new Error("Failed to duplicate CV");
    }
  },
};
