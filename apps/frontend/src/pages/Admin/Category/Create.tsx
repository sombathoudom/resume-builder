import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
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
