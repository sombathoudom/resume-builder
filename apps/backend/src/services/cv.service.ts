import prisma from "../config/db";

export class CVService {
  // Get user's CVs
  static async getUserCVs(userId: string) {
    return await prisma.cV.findMany({
      where: { userId },
      include: {
        template: {
          select: {
            id: true,
            name: true,
            component_name: true,
            preview_url: true,
          },
        },
      },
      orderBy: { updatedAt: "desc" },
    });
  }

  // Get CV by ID
  static async getCVById(id: string, userId?: string) {
    const whereClause: any = { id };
    if (userId) {
      whereClause.userId = userId;
    }

    return await prisma.cV.findUnique({
      where: whereClause,
      include: {
        template: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  // Create new CV
  static async createCV(data: {
    userId: string;
    templateId: string;
    title?: string;
    data_json: any;
  }) {
    return await prisma.cV.create({
      data: {
        userId: data.userId,
        templateId: data.templateId,
        title: data.title || "My CV",
        data_json: data.data_json,
      },
      include: {
        template: {
          select: {
            id: true,
            name: true,
            component_name: true,
          },
        },
      },
    });
  }

  // Update CV
  static async updateCV(
    id: string,
    userId: string,
    data: {
      title?: string;
      data_json?: any;
      status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
      pdf_url?: string;
    }
  ) {
    return await prisma.cV.update({
      where: {
        id,
        userId, // Ensure user can only update their own CVs
      },
      data,
      include: {
        template: {
          select: {
            id: true,
            name: true,
            component_name: true,
          },
        },
      },
    });
  }

  // Delete CV
  static async deleteCV(id: string, userId: string) {
    return await prisma.cV.delete({
      where: {
        id,
        userId, // Ensure user can only delete their own CVs
      },
    });
  }

  // Duplicate CV
  static async duplicateCV(id: string, userId: string) {
    const originalCV = await this.getCVById(id, userId);
    if (!originalCV) {
      throw new Error("CV not found");
    }

    return await this.createCV({
      userId,
      templateId: originalCV.templateId,
      title: `${originalCV.title} (Copy)`,
      data_json: originalCV.data_json,
    });
  }
}
