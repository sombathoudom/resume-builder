// apps/backend/src/app.ts
import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
// import authRoutes from "./routes/auth.routes";
// import cvRoutes from "./routes/cv.routes";
// import templateRoutes from "./routes/template.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());
app.use(morgan("dev"));

// Rate Limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/", apiLimiter);

// Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/cv", cvRoutes);
// app.use("/api/templates", templateRoutes);

// Error handler
app.use(errorHandler);

export default app;
