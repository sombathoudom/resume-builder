import prisma from "../config/db";

export const createCategoryService = async (
  name: string,
  description: string
) => {
  return prisma.category.create({
    data: { name, description },
  });
};
