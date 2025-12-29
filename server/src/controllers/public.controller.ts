import { Request, Response, NextFunction } from "express";
import { SiteSettings } from "../models/SiteSettings";

export async function getPublicSettings(_req: Request, res: Response, next: NextFunction) {
  try {
    // singleton - just return the newest
    const settings = await SiteSettings.findOne({}).sort({ updatedAt: -1 }).lean();

    // If none exists, return a safe default
    if (!settings) {
      return res.json({
        brand: { name: "FirstHand Education" },
        contact: {},
        ctas: { requestSub: {}, contact: {} }
      });
    }

    res.json(settings);
  } catch (e) {
    next(e);
  }
}
