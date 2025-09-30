import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { CATEGORY_API } from "@/api/category";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

export default function CreateCategoryPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const createCategoryMutation = useMutation({
    mutationFn: async (data: z.infer<typeof schema>) => {
      return await CATEGORY_API.createCategory(data);
    },
    onSuccess: () => {
      console.log("Category created successfully");
    },
    onError: () => {
      console.log("Category creation failed");
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    createCategoryMutation.mutate(data);
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
          Create
        </Button>
        <Button variant="outline" className="w-fit">
          Cancel
        </Button>
      </div>
    </form>
  );
}
