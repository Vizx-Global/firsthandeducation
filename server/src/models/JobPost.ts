import { Schema, model, Document, Types } from "mongoose";

export type JobStatus = "draft" | "published" | "closed" | "archived";

export interface IJobPost extends Document {
  title: string;
  slug: string;
  summary?: string;
  description: string;
  employmentType: string;
  status: JobStatus;
  locationIds: Types.ObjectId[];
  postedAt?: Date | null;
  closingAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const JobPostSchema = new Schema<IJobPost>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, unique: true },
    summary: { type: String, trim: true, default: null },
    description: { type: String, required: true },
    employmentType: { type: String, required: true, trim: true },
    status: { type: String, default: "draft", enum: ["draft", "published", "closed", "archived"] },
    locationIds: [{ type: Schema.Types.ObjectId, ref: "JobLocation" }],
    postedAt: { type: Date, default: null },
    closingAt: { type: Date, default: null }
  },
  { timestamps: true }
);

JobPostSchema.index({ title: "text", summary: "text", description: "text" });
JobPostSchema.index({ status: 1, postedAt: -1 });
JobPostSchema.index({ status: 1, locationIds: 1 });

export const JobPost = model<IJobPost>("JobPost", JobPostSchema);
