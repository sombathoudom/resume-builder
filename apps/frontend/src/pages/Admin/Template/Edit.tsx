import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TEMPLATE_API } from "@/api/template";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import FormTemplate from "./components/form-template";

export default function EditTemplate() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: template,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["template", id],
    queryFn: () => TEMPLATE_API.getTemplateById(id!),
    enabled: !!id,
  });

  const updateTemplateMutation = useMutation({
    mutationFn: (data: Partial<Omit<Template.UpdateTemplate, "id">>) =>
      TEMPLATE_API.updateTemplate(id!, data),
    onSuccess: () => {
      toast.success("Template updated successfully");
      navigate("/admin/templates");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to update template");
    },
  });

  const handleSubmit = (data: Partial<Omit<Template.UpdateTemplate, "id">>) => {
    updateTemplateMutation.mutate(data);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading template...</div>
        </div>
      </div>
    );
  }

  if (error || !template) {
    return (
      <div className="container mx-auto py-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Template Not Found
          </h1>
          <p className="text-gray-600 mt-2">
            The template you're looking for doesn't exist or has been deleted.
          </p>
          <button
            onClick={() => navigate("/admin/templates")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Templates
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Template</h1>
        <p className="text-gray-600 mt-2">
          Update the template information and settings.
        </p>
      </div>

      <FormTemplate
        template={template}
        onSubmit={handleSubmit}
        isLoading={updateTemplateMutation.isPending}
        mode="edit"
      />
    </div>
  );
}
