// packages/utils/src/cvValidation.ts
import { z } from "zod";

export const CVSchema = z.object({
  personal: z.object({
    full_name: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
  }),
  work_experience: z.array(
    z.object({
      company: z.string(),
      role: z.string(),
      start: z.string(),
      end: z.string().optional(),
      description: z.string().optional(),
    })
  ),
});
