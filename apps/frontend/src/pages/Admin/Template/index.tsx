import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "@/lib/route-path";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TEMPLATE_API } from "@/api/template";
import { useMutation, useQuery } from "@tanstack/react-query";
import DeleteConfirmation from "@/components/delete-confirmation";
import { useDeleteConfirmation } from "@/hooks/use-delete-confirmation";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

export default function TemplateManagement() {
  const {
    data: templates,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["templates"],
    queryFn: () => TEMPLATE_API.getAllTemplates(),
  });

  const {
    isOpen,
    setIsOpen,
    isLoading: isDeleting,
    handleDeleteClick,
    handleConfirmDelete,
  } = useDeleteConfirmation({
    deleteFn: TEMPLATE_API.deleteTemplate,
    onSuccess: () => {
      refetch();
    },
    successMessage: "Template deleted successfully",
    errorMessage: "Template deletion failed",
  });

  const toggleStatusMutation = useMutation({
    mutationFn: ({ id, is_active }: { id: string; is_active: boolean }) =>
      TEMPLATE_API.updateTemplate(id, { is_active }),
    onSuccess: () => {
      refetch();
      toast.success("Template status updated successfully");
    },
    onError: () => {
      toast.error("Failed to update template status");
    },
  });

  const handleToggleStatus = (template: Template.Root) => {
    toggleStatusMutation.mutate({
      id: template.id,
      is_active: !template.is_active,
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Loading templates...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 space-y-4">
      <DeleteConfirmation
        isOpen={isOpen}
        setOpen={setIsOpen}
        onConfirm={handleConfirmDelete}
        title="Delete Template"
        description="Are you sure you want to delete this template? This action cannot be undone and will affect all CVs using this template."
        confirmText="Delete"
        isLoading={isDeleting}
      />

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">CV Template Management</h1>
        <Button asChild className="w-fit">
          <Link to={ROUTE_PATH.adminDashboard.templateAdd}>
            <Plus className="w-4 h-4 mr-2" />
            Add New Template
          </Link>
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Component</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {templates?.map((template) => (
              <TableRow key={template.id}>
                <TableCell className="font-medium">{template.name}</TableCell>
                <TableCell>
                  <code className="px-2 py-1 bg-gray-100 rounded text-sm">
                    {template.component_name}
                  </code>
                </TableCell>
                <TableCell className="max-w-xs truncate">
                  {template.description}
                </TableCell>
                <TableCell>
                  <Badge variant={template.is_active ? "default" : "secondary"}>
                    {template.is_active ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  {new Date(template.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggleStatus(template)}
                      disabled={toggleStatusMutation.isPending}
                    >
                      {template.is_active ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        to={`${ROUTE_PATH.adminDashboard.templateEdit.replace(
                          ":id",
                          template.id
                        )}`}
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteClick(template.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {templates?.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No templates found. Create your first template to get started.
        </div>
      )}
    </div>
  );
}
