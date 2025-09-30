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
export default function Category() {
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
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
