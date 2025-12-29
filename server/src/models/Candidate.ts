import { Schema, model, Document } from "mongoose";

export interface ICandidate extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const CandidateSchema = new Schema<ICandidate>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    phone: { type: String, trim: true, default: null }
  },
  { timestamps: true }
);

CandidateSchema.index({ email: 1 }, { unique: true });

export const Candidate = model<ICandidate>("Candidate", CandidateSchema);
