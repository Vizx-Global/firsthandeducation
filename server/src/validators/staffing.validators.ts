import { z } from "zod";

export const staffingRequestSchema = z.object({
  schoolLocation: z.string().min(1),
  address: z.string().min(1),
  dayNeeded: z.string().min(1), // ISO date string
  timeNeeded: z.string().min(1), // "HH:MM"
  timeMeridiem: z.enum(["AM", "PM"]),
  className: z.string().min(1),
  subContactName: z.string().min(1),
  subContactPhone: z.string().min(1),

  notes: z.string().optional(),
  gradeLevel: z.string().optional(),
  duration: z.string().optional(),

  consentAccepted: z.boolean(),
  sourcePage: z.string().optional()
});
