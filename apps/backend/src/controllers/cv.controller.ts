// // apps/backend/src/controllers/cv.controller.ts
// import { Request, Response } from "express";
// import * as cvService from "../services/cv.service";

// export const createCV = async (req: Request, res: Response) => {
//   try {
//     const cv = await cvService.createCV(req.user.id, req.body);
//     res.status(201).json(cv);
//   } catch (err: any) {
//     res.status(400).json({ error: err.message });
//   }
// };

// export const getUserCVs = async (req: Request, res: Response) => {
//   try {
//     const cvs = await cvService.getUserCVs(req.user.id);
//     res.json(cvs);
//   } catch (err: any) {
//     res.status(400).json({ error: err.message });
//   }
// };
