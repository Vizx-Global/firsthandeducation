import { Schema, model, Document } from "mongoose";

export interface IFile extends Document {
  storageProvider: string;
  storageKey: string;
  url?: string | null;
  originalFilename: string;
  mimeType: string;
  sizeBytes: number;
  createdAt: Date;
}

const FileSchema = new Schema<IFile>(
  {
    storageProvider: { type: String, default: "local" },
    storageKey: { type: String, required: true },
    url: { type: String, default: null },
    originalFilename: { type: String, required: true },
    mimeType: { type: String, required: true },
    sizeBytes: { type: Number, required: true }
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const File = model<IFile>("File", FileSchema);
