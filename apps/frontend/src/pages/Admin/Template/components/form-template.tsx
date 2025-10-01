import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
// Types are now imported from template.d.ts

interface FormTemplateProps {
  template?: Template.Root;
  onSubmit: (
    data:
      | Omit<Template.CreateTemplate, "id">
      | Partial<Omit<Template.UpdateTemplate, "id">>
  ) => void;
  isLoading?: boolean;
  mode: "create" | "edit";
}

export default function FormTemplate({
  template,
  onSubmit,
  isLoading = false,
  mode,
}: FormTemplateProps) {
  const [formData, setFormData] = React.useState({
    name: template?.name || "",
    description: template?.description || "",
    preview_url: template?.preview_url || "",
    file_path: template?.file_path || "",
    component_name: template?.component_name || "",
    is_active: template?.is_active ?? true,
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Template name is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.component_name.trim()) {
      newErrors.component_name = "Component name is required";
    } else if (!/^[A-Z][a-zA-Z0-9]*$/.test(formData.component_name)) {
      newErrors.component_name =
        "Component name must start with uppercase letter and contain only letters and numbers";
    }

    if (mode === "create" && !formData.file_path.trim()) {
      newErrors.file_path = "File path is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const submitData = {
      name: formData.name.trim(),
      description: formData.description.trim(),
      preview_url: formData.preview_url.trim(),
      file_path: formData.file_path.trim(),
      component_name: formData.component_name.trim(),
      ...(mode === "edit" && { is_active: formData.is_active }),
    };

    onSubmit(submitData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>
          {mode === "create" ? "Create New Template" : "Edit Template"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Template Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Professional CV Template V1"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="A clean, professional CV template with modern design..."
              rows={3}
              className={`w-full px-3 py-2 border rounded-md resize-none ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="component_name">Component Name *</Label>
            <Input
              id="component_name"
              value={formData.component_name}
              onChange={(e) =>
                handleInputChange("component_name", e.target.value)
              }
              placeholder="CvTempV1"
              className={errors.component_name ? "border-red-500" : ""}
            />
            {errors.component_name && (
              <p className="text-sm text-red-500">{errors.component_name}</p>
            )}
            <p className="text-xs text-gray-500">
              Must match the React component name (e.g., CvTempV1, CvTempV2)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="file_path">
              File Path {mode === "create" && "*"}
            </Label>
            <Input
              id="file_path"
              value={formData.file_path}
              onChange={(e) => handleInputChange("file_path", e.target.value)}
              placeholder="/templates/cv-temp-v1.tsx"
              className={errors.file_path ? "border-red-500" : ""}
            />
            {errors.file_path && (
              <p className="text-sm text-red-500">{errors.file_path}</p>
            )}
            <p className="text-xs text-gray-500">
              Path to the template component file
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preview_url">Preview URL</Label>
            <Input
              id="preview_url"
              value={formData.preview_url}
              onChange={(e) => handleInputChange("preview_url", e.target.value)}
              placeholder="/images/cv-templates/template-v1-preview.png"
            />
            <p className="text-xs text-gray-500">
              URL to the template preview image
            </p>
          </div>

          {mode === "edit" && (
            <div className="flex items-center space-x-2">
              <Switch
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) =>
                  handleInputChange("is_active", checked)
                }
              />
              <Label htmlFor="is_active">Active Template</Label>
              <p className="text-xs text-gray-500">
                Only active templates are available to users
              </p>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading
                ? "Saving..."
                : mode === "create"
                  ? "Create Template"
                  : "Update Template"}
            </Button>
            <Button type="button" variant="outline" asChild>
              <a href="/admin/templates">Cancel</a>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
