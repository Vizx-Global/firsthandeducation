import { Schema, model, Document, Types } from "mongoose";

export type FileType = "resume" | "certificate" | "other";

export interface IApplicationFile extends Document {
  applicationId: Types.ObjectId;
  fileId: Types.ObjectId;
  fileType: FileType;
  createdAt: Date;
}

const ApplicationFileSchema = new Schema<IApplicationFile>(
  {
    applicationId: { type: Schema.Types.ObjectId, ref: "JobApplication", required: true },
    fileId: { type: Schema.Types.ObjectId, ref: "File", required: true },
    fileType: { type: String, default: "resume", enum: ["resume", "certificate", "other"] }
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

ApplicationFileSchema.index({ applicationId: 1, fileType: 1 });

export const ApplicationFile = model<IApplicationFile>("ApplicationFile", ApplicationFileSchema);
