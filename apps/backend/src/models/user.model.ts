// apps/backend/src/models/user.model.ts
import prisma from "../config/db";

export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    include: { cvs: true, subscriptions: true },
  });
};

// export const createUser = async (data: { name: string; email: string; password: string }) => {
//   return prisma.user.create({
//     data,
//   });
// };
