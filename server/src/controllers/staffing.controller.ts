import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { staffingRequestSchema } from "../validators/staffing.validators";
import { StaffingRequest } from "../models/StaffingRequest";

function httpError(status: number, message: string, details?: unknown) {
  const err: any = new Error(message);
  err.status = status;
  err.details = details;
  return err;
}

export async function createStaffingRequest(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = staffingRequestSchema.safeParse(req.body);
    if (!parsed.success) throw httpError(400, "Invalid staffing request payload", parsed.error.flatten());

    if (!parsed.data.consentAccepted) throw httpError(400, "Consent is required");

    const dayNeeded = new Date(parsed.data.dayNeeded);
    if (Number.isNaN(dayNeeded.getTime())) throw httpError(400, "Invalid dayNeeded date");

    const doc = await StaffingRequest.create({
      schoolLocation: parsed.data.schoolLocation,
      address: parsed.data.address,
      dayNeeded,
      timeNeeded: parsed.data.timeNeeded,
      timeMeridiem: parsed.data.timeMeridiem,
      className: parsed.data.className,
      subContactName: parsed.data.subContactName,
      subContactPhone: parsed.data.subContactPhone,

      notes: parsed.data.notes || null,
      gradeLevel: parsed.data.gradeLevel || null,
      duration: parsed.data.duration || null,

      consent: { accepted: true, acceptedAt: new Date() },
      sourcePage: parsed.data.sourcePage || null
    });

    res.status(201).json({ message: "Staffing request submitted", staffingRequestId: doc._id });
  } catch (e) {
    next(e);
  }
}

export async function getStaffingRequestById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    if (!Types.ObjectId.isValid(id)) throw httpError(400, "Invalid id");

    const doc = await StaffingRequest.findById(id).lean();
    if (!doc) return res.status(404).json({ error: "Not found" });

    res.json(doc);
  } catch (e) {
    next(e);
  }
}
