// // apps/backend/src/services/cv.service.ts
// import prisma from "../config/db";

// export const createCV = async (userId: string, data: any) => {
//   // TODO: add quota check, template validation, PDF generation
//   return prisma.cV.create({
//     data: {
//       userId,
//       templateId: data.templateId,
//       data,
//     },
//   });
// };

// export const getUserCVs = async (userId: string) => {
//   return prisma.cV.findMany({
//     where: { userId },
//   });
// };
let userId =        '1'; 