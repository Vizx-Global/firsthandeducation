import { Schema, model, Document, Types } from "mongoose";

export type ApplicationStatus =
  | "new"
  | "reviewing"
  | "interview"
  | "offer"
  | "hired"
  | "rejected"
  | "withdrawn";

export interface IJobApplication extends Document {
  jobPostId: Types.ObjectId;
  candidateId: Types.ObjectId;
  status: ApplicationStatus;
  source: string;
  coverLetter?: string | null;
  jobTitleSnapshot: string;
  locationSnapshot: string[];
  createdAt: Date;
  updatedAt: Date;
}

const JobApplicationSchema = new Schema<IJobApplication>(
  {
    jobPostId: { type: Schema.Types.ObjectId, ref: "JobPost", required: true },
    candidateId: { type: Schema.Types.ObjectId, ref: "Candidate", required: true },
    status: {
      type: String,
      default: "new",
      enum: ["new", "reviewing", "interview", "offer", "hired", "rejected", "withdrawn"]
    },
    source: { type: String, default: "website" },
    coverLetter: { type: String, default: null },

    jobTitleSnapshot: { type: String, required: true },
    locationSnapshot: [{ type: String }]
  },
  { timestamps: true }
);

JobApplicationSchema.index({ jobPostId: 1, candidateId: 1 }, { unique: true });

export const JobApplication = model<IJobApplication>("JobApplication", JobApplicationSchema);
