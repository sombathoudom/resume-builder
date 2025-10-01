import { Button } from "@/components/ui/button";
import React from "react";
import { Plus } from "lucide-react";
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
import { CATEGORY_API } from "@/api/category";
import { useQuery } from "@tanstack/react-query";
import DeleteConfirmation from "@/components/delete-confirmation";
import { useDeleteConfirmation } from "@/hooks/use-delete-confirmation";

export default function Category() {
  const { data: categories, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: () => CATEGORY_API.getCategories(),
  });

  const {
    isOpen,
    setIsOpen,
    isLoading,
    handleDeleteClick,
    handleConfirmDelete,
  } = useDeleteConfirmation({
    deleteFn: CATEGORY_API.deleteCategory,
    onSuccess: () => refetch(),
    successMessage: "Category deleted successfully",
    errorMessage: "Category deletion failed",
  });

  return (
    <div className="flex flex-col gap-4 space-y-4">
      <DeleteConfirmation
        isOpen={isOpen}
        setOpen={setIsOpen}
        onConfirm={handleConfirmDelete}
        title="Delete Category"
        description="Are you sure you want to delete this category? This action cannot be undone."
        confirmText="Delete"
        isLoading={isLoading}
      />
      <Button asChild className="w-fit">
        <Link to={ROUTE_PATH.adminDashboard.categoryAdd}>
          <Plus /> Add New Category
        </Link>
      </Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories?.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" className="w-fit" asChild>
                    <Link
                      to={`${ROUTE_PATH.adminDashboard.categoryEdit.replace(
                        ":id",
                        category.id
                      )}`}
                    >
                      Edit
                    </Link>
                  </Button>
                  <Button
                    variant="destructive"
                    className="w-fit"
                    onClick={() => handleDeleteClick(category.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
