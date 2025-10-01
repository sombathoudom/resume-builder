import React from "react";
import { useNavigate } from "react-router-dom";
import { TEMPLATE_API } from "@/api/template";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import FormTemplate from "./components/form-template";

export default function CreateTemplate() {
  const navigate = useNavigate();

  const createTemplateMutation = useMutation({
    mutationFn: (data: Omit<Template.CreateTemplate, "id">) =>
      TEMPLATE_API.createTemplate(data),
    onSuccess: () => {
      toast.success("Template created successfully");
      navigate("/admin/templates");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to create template");
    },
  });

  const handleSubmit = (data: Omit<Template.CreateTemplate, "id">) => {
    createTemplateMutation.mutate(data);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create New Template</h1>
        <p className="text-gray-600 mt-2">
          Create a new CV template that users can select from.
        </p>
      </div>

      <FormTemplate
        onSubmit={handleSubmit}
        isLoading={createTemplateMutation.isPending}
        mode="create"
      />
    </div>
  );
}
