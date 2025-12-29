import { Schema, model, Document } from "mongoose";

export interface IContactMessage extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  schoolOrOrganization: string;
  positionOrTitle: string;
  inquiryType: string;
  message: string;
  consent: { accepted: boolean; acceptedAt: Date };
  sourcePage?: string | null;
  status: "new" | "closed";
  createdAt: Date;
  updatedAt: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, default: null },

    schoolOrOrganization: { type: String, required: true, trim: true },
    positionOrTitle: { type: String, required: true, trim: true },
    inquiryType: { type: String, required: true, trim: true },
    message: { type: String, required: true },

    consent: {
      accepted: { type: Boolean, required: true },
      acceptedAt: { type: Date, required: true }
    },

    sourcePage: { type: String, default: null },
    status: { type: String, default: "new", enum: ["new", "closed"] }
  },
  { timestamps: true }
);

export const ContactMessage = model<IContactMessage>("ContactMessage", ContactMessageSchema);
