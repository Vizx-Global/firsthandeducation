import { Schema, model, Document } from "mongoose";

export interface IJobLocation extends Document {
  name: string;
  city?: string;
  state?: string;
  country?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const JobLocationSchema = new Schema<IJobLocation>(
  {
    name: { type: String, required: true, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    country: { type: String, trim: true, default: "United States" },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

JobLocationSchema.index({ name: 1 });

export const JobLocation = model<IJobLocation>("JobLocation", JobLocationSchema);
