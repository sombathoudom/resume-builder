import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CATEGORY_API } from "@/api/category";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ROUTE_PATH } from "@/lib/route-path";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

interface FormCategoryProps {
  id?: string;
}

export default function FormCategory({ id }: FormCategoryProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const { data: category } = useQuery({
    queryKey: ["category", id],
    queryFn: () => CATEGORY_API.getCategoryById(id as string),
  });
  useEffect(() => {
    if (category) {
      setValue("name", category.name);
      setValue("description", category.description);
    }
  }, [category]);

  const createCategoryMutation = useMutation({
    mutationFn: async (data: z.infer<typeof schema>) => {
      return await CATEGORY_API.createCategory(data);
    },
    onSuccess: () => {
      toast.success("Category created successfully");
      navigate(ROUTE_PATH.adminDashboard.categories);
    },
    onError: () => {
      console.log("Category creation failed");
    },
  });

  const updateCategoryMutation = useMutation({
    mutationFn: async (data: z.infer<typeof schema>) => {
      return await CATEGORY_API.updateCategory(id as string, data);
    },
    onSuccess: () => {
      toast.success("Category updated successfully");
      navigate(ROUTE_PATH.adminDashboard.categories);
    },
    onError: () => {
      console.log("Category update failed");
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    if (id) {
      updateCategoryMutation.mutate(data);
    } else {
      createCategoryMutation.mutate(data);
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Name"
        {...register("name")}
        aria-invalid={errors.name ? "true" : "false"}
      />

      <Input
        placeholder="Description"
        {...register("description")}
        aria-invalid={errors.description ? "true" : "false"}
      />
      <div className="flex gap-2">
        <Button className="w-fit" type="submit">
          {id ? "Update" : "Create"}
        </Button>
        <Button variant="outline" className="w-fit" asChild>
          <Link to={ROUTE_PATH.adminDashboard.categories}>Cancel</Link>
        </Button>
      </div>
    </form>
  );
}
