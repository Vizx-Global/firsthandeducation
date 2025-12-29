import { Schema, model, Document } from "mongoose";

export interface ISiteSettings extends Document {
  brand: { name: string };
  contact: {
    phoneMain?: string | null;
    phoneEmergency?: string | null;
    emailInfo?: string | null;
    emailSupport?: string | null;
    address?: string | null;
  };
  ctas: {
    requestSub: {
      responseTimeText?: string | null;
      emergencyText?: string | null;
      qualificationsText?: string | null;
    };
    contact: {
      responseTimeText?: string | null;
      emergencyTimeText?: string | null;
    };
  };
  createdAt: Date;
  updatedAt: Date;
}

const SiteSettingsSchema = new Schema<ISiteSettings>(
  {
    brand: {
      name: { type: String, default: "FirstHand Education" }
    },
    contact: {
      phoneMain: { type: String, default: null },
      phoneEmergency: { type: String, default: null },
      emailInfo: { type: String, default: null },
      emailSupport: { type: String, default: null },
      address: { type: String, default: null }
    },
    ctas: {
      requestSub: {
        responseTimeText: { type: String, default: null },
        emergencyText: { type: String, default: null },
        qualificationsText: { type: String, default: null }
      },
      contact: {
        responseTimeText: { type: String, default: null },
        emergencyTimeText: { type: String, default: null }
      }
    }
  },
  { timestamps: true }
);

export const SiteSettings = model<ISiteSettings>("SiteSettings", SiteSettingsSchema);
