import { z } from "zod";

export const listJobsQuerySchema = z.object({
  keyword: z.string().optional(),
  locationId: z.string().optional(),
  page: z.coerce.number().int().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(50).optional()
});

export const applySchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  coverLetter: z.string().optional(),
  source: z.string().optional()
});

export const referSchema = z.object({
  referrer: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional()
  }),
  referred: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional()
  }),
  message: z.string().optional()
});
