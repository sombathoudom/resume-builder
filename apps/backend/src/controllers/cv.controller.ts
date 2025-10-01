// import { Request, Response } from "express";
// import { CVService } from "../services/cv.service";

// export class CVController {
//   // Get user's CVs
//   static async getUserCVs(req: Request, res: Response) {
//     try {
//       const userId = req.user?.id;
//       if (!userId) {
//         return res.status(401).json({
//           success: false,
//           message: "User not authenticated",
//         });
//       }

//       const cvs = await CVService.getUserCVs(userId);
//       res.json({
//         success: true,
//         data: cvs,
//       });
//     } catch (error) {
//       console.error("Error fetching user CVs:", error);
//       res.status(500).json({
//         success: false,
//         message: "Failed to fetch CVs",
//       });
//     }
//   }

//   // Get CV by ID
//   static async getCVById(req: Request, res: Response) {
//     try {
//       const { id } = req.params;
//       const userId = req.user?.id;

//       const cv = await CVService.getCVById(id, userId);

//       if (!cv) {
//         return res.status(404).json({
//           success: false,
//           message: "CV not found",
//         });
//       }

//       res.json({
//         success: true,
//         data: cv,
//       });
//     } catch (error) {
//       console.error("Error fetching CV:", error);
//       res.status(500).json({
//         success: false,
//         message: "Failed to fetch CV",
//       });
//     }
//   }

//   // Create new CV
//   static async createCV(req: Request, res: Response) {
//     try {
//       const userId = req.user?.id;
//       if (!userId) {
//         return res.status(401).json({
//           success: false,
//           message: "User not authenticated",
//         });
//       }

//       const { templateId, title, data_json } = req.body;

//       if (!templateId || !data_json) {
//         return res.status(400).json({
//           success: false,
//           message: "Template ID and data_json are required",
//         });
//       }

//       const cv = await CVService.createCV({
//         userId,
//         templateId,
//         title,
//         data_json,
//       });

//       res.status(201).json({
//         success: true,
//         data: cv,
//         message: "CV created successfully",
//       });
//     } catch (error) {
//       console.error("Error creating CV:", error);
//       res.status(500).json({
//         success: false,
//         message: "Failed to create CV",
//       });
//     }
//   }

//   // Update CV
//   static async updateCV(req: Request, res: Response) {
//     try {
//       const { id } = req.params;
//       const userId = req.user?.id;

//       if (!userId) {
//         return res.status(401).json({
//           success: false,
//           message: "User not authenticated",
//         });
//       }

//       const updateData = req.body;
//       const cv = await CVService.updateCV(id, userId, updateData);

//       res.json({
//         success: true,
//         data: cv,
//         message: "CV updated successfully",
//       });
//     } catch (error) {
//       console.error("Error updating CV:", error);
//       res.status(500).json({
//         success: false,
//         message: "Failed to update CV",
//       });
//     }
//   }

//   // Delete CV
//   static async deleteCV(req: Request, res: Response) {
//     try {
//       const { id } = req.params;
//       const userId = req.user?.id;

//       if (!userId) {
//         return res.status(401).json({
//           success: false,
//           message: "User not authenticated",
//         });
//       }

//       await CVService.deleteCV(id, userId);

//       res.json({
//         success: true,
//         message: "CV deleted successfully",
//       });
//     } catch (error) {
//       console.error("Error deleting CV:", error);
//       res.status(500).json({
//         success: false,
//         message: "Failed to delete CV",
//       });
//     }
//   }

//   // Duplicate CV
//   static async duplicateCV(req: Request, res: Response) {
//     try {
//       const { id } = req.params;
//       const userId = req.user?.id;

//       if (!userId) {
//         return res.status(401).json({
//           success: false,
//           message: "User not authenticated",
//         });
//       }

//       const cv = await CVService.duplicateCV(id, userId);

//       res.status(201).json({
//         success: true,
//         data: cv,
//         message: "CV duplicated successfully",
//       });
//     } catch (error) {
//       console.error("Error duplicating CV:", error);
//       res.status(500).json({
//         success: false,
//         message: "Failed to duplicate CV",
//       });
//     }
//   }
// }
