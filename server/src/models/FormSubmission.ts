import { Schema, model, Document } from "mongoose";

export interface IFormSubmission extends Document {
  type: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  message?: string | null;
  payload: Record<string, unknown>;
  sourcePage?: string | null;
  status: "new" | "closed";
  createdAt: Date;
  updatedAt: Date;
}

const FormSubmissionSchema = new Schema<IFormSubmission>(
  {
    type: { type: String, required: true, trim: true },
    name: { type: String, trim: true, default: null },
    email: { type: String, trim: true, lowercase: true, default: null },
    phone: { type: String, trim: true, default: null },
    message: { type: String, default: null },
    payload: { type: Object, default: {} },
    sourcePage: { type: String, default: null },
    status: { type: String, default: "new", enum: ["new", "closed"] }
  },
  { timestamps: true }
);

export const FormSubmission = model<IFormSubmission>("FormSubmission", FormSubmissionSchema);
