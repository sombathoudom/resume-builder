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

export default function Category() {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => CATEGORY_API.getCategories(),
  });
  console.log(categories);
  return (
    <div className="flex flex-col gap-4 space-y-4">
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
                  <Button variant="destructive" className="w-fit">
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
