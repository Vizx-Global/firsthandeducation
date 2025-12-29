import { Request, Response, NextFunction } from "express";
import { submitFormSchema } from "../validators/forms.validators";
import { FormSubmission } from "../models/FormSubmission";

function httpError(status: number, message: string, details?: unknown) {
  const err: any = new Error(message);
  err.status = status;
  err.details = details;
  return err;
}

export async function submitForm(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = submitFormSchema.safeParse(req.body);
    if (!parsed.success) throw httpError(400, "Invalid form payload", parsed.error.flatten());

    const doc = await FormSubmission.create({
      type: parsed.data.type,
      name: parsed.data.name || null,
      email: parsed.data.email ? parsed.data.email.toLowerCase() : null,
      phone: parsed.data.phone || null,
      message: parsed.data.message || null,
      payload: parsed.data.payload || {},
      sourcePage: parsed.data.sourcePage || null
    });

    res.status(201).json({ message: "Submitted", submissionId: doc._id });
  } catch (e) {
    next(e);
  }
}
