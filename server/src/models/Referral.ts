import { Schema, model, Document, Types } from "mongoose";

export type ReferralStatus = "new" | "contacted" | "converted" | "closed";

export interface IReferral extends Document {
  jobPostId: Types.ObjectId;
  referrer: { name: string; email: string; phone?: string | null };
  referred: { name: string; email: string; phone?: string | null };
  message?: string | null;
  status: ReferralStatus;
  convertedApplicationId?: Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}

const ReferralSchema = new Schema<IReferral>(
  {
    jobPostId: { type: Schema.Types.ObjectId, ref: "JobPost", required: true },
    referrer: {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true, lowercase: true },
      phone: { type: String, trim: true, default: null }
    },
    referred: {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true, lowercase: true },
      phone: { type: String, trim: true, default: null }
    },
    message: { type: String, default: null },
    status: { type: String, default: "new", enum: ["new", "contacted", "converted", "closed"] },
    convertedApplicationId: { type: Schema.Types.ObjectId, ref: "JobApplication", default: null }
  },
  { timestamps: true }
);

ReferralSchema.index({ jobPostId: 1, createdAt: -1 });

export const Referral = model<IReferral>("Referral", ReferralSchema);
