// apps/backend/src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from "express";

// Dummy auth middleware
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.headers["x-user-id"];
  if (!userId) return res.status(401).json({ error: "Unauthorized" });

  // attach user info to request
  (req as any).user = { id: userId };
  next();
};
