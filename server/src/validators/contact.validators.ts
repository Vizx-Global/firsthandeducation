import { z } from "zod";

export const contactMessageSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),

  schoolOrOrganization: z.string().min(1),
  positionOrTitle: z.string().min(1),
  inquiryType: z.string().min(1),
  message: z.string().min(1),

  consentAccepted: z.boolean(),
  sourcePage: z.string().optional()
});
