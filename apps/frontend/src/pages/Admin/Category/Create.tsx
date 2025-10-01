import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CATEGORY_API } from "@/api/category";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import FormCategory from "./components/form-category";

export default function CreateCategoryPage() {
  const { id } = useParams();
  return <FormCategory id={id as string} />;
}
