import { z } from "zod";

export const submitFormSchema = z.object({
  type: z.string().min(1),
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  message: z.string().optional(),
  payload: z.record(z.string(), z.unknown()).optional(),
  sourcePage: z.string().optional()
});
