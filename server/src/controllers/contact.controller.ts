import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { contactMessageSchema } from "../validators/contact.validators";
import { ContactMessage } from "../models/ContactMessage";

function httpError(status: number, message: string, details?: unknown) {
  const err: any = new Error(message);
  err.status = status;
  err.details = details;
  return err;
}

export async function createContactMessage(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = contactMessageSchema.safeParse(req.body);
    if (!parsed.success) throw httpError(400, "Invalid contact payload", parsed.error.flatten());

    if (!parsed.data.consentAccepted) throw httpError(400, "Consent is required");

    const doc = await ContactMessage.create({
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      email: parsed.data.email.toLowerCase(),
      phone: parsed.data.phone || null,

      schoolOrOrganization: parsed.data.schoolOrOrganization,
      positionOrTitle: parsed.data.positionOrTitle,
      inquiryType: parsed.data.inquiryType,
      message: parsed.data.message,

      consent: { accepted: true, acceptedAt: new Date() },
      sourcePage: parsed.data.sourcePage || null
    });

    res.status(201).json({ message: "Message sent", contactMessageId: doc._id });
  } catch (e) {
    next(e);
  }
}

export async function getContactMessageById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    if (!Types.ObjectId.isValid(id)) throw httpError(400, "Invalid id");

    const doc = await ContactMessage.findById(id).lean();
    if (!doc) return res.status(404).json({ error: "Not found" });

    res.json(doc);
  } catch (e) {
    next(e);
  }
}
