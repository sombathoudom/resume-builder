import prisma from "../config/db";

export const createCategoryService = async (
  name: string,
  description: string
) => {
  return prisma.category.create({
    data: { name, description },
  });
};

export const getCategoriesService = async () => {
  return prisma.category.findMany();
};

export const getCategoryByIdService = async (id: string) => {
  return prisma.category.findUnique({
    where: { id },
  });
};

export const updateCategoryService = async (
  id: string,
  name: string,
  description: string
) => {
  return prisma.category.update({
    where: { id },
    data: { name, description },
  });
};

export const deleteCategoryService = async (id: string) => {
  return prisma.category.delete({
    where: { id },
  });
};
