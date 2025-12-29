import { Schema, model, Document } from "mongoose";

export interface IStaffingRequest extends Document {
  schoolLocation: string;
  address: string;
  dayNeeded: Date;
  timeNeeded: string;
  timeMeridiem: "AM" | "PM";
  className: string;
  subContactName: string;
  subContactPhone: string;
  notes?: string | null;
  gradeLevel?: string | null;
  duration?: string | null;
  consent: { accepted: boolean; acceptedAt: Date };
  sourcePage?: string | null;
  status: "new" | "in_progress" | "closed";
  createdAt: Date;
  updatedAt: Date;
}

const StaffingRequestSchema = new Schema<IStaffingRequest>(
  {
    schoolLocation: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    dayNeeded: { type: Date, required: true },
    timeNeeded: { type: String, required: true },
    timeMeridiem: { type: String, required: true, enum: ["AM", "PM"] },
    className: { type: String, required: true, trim: true },
    subContactName: { type: String, required: true, trim: true },
    subContactPhone: { type: String, required: true, trim: true },

    notes: { type: String, default: null },
    gradeLevel: { type: String, default: null },
    duration: { type: String, default: null },

    consent: {
      accepted: { type: Boolean, required: true },
      acceptedAt: { type: Date, required: true }
    },

    sourcePage: { type: String, default: null },
    status: { type: String, default: "new", enum: ["new", "in_progress", "closed"] }
  },
  { timestamps: true }
);

export const StaffingRequest = model<IStaffingRequest>("StaffingRequest", StaffingRequestSchema);
