import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { listJobsQuerySchema, applySchema, referSchema } from "../validators/jobs.validators";
import { JobPost } from "../models/JobPost";
import { JobLocation } from "../models/JobLocation";
import { Candidate } from "../models/Candidate";
import { JobApplication } from "../models/JobApplication";
import { File } from "../models/File";
import { ApplicationFile } from "../models/ApplicationFile";
import { Referral } from "../models/Referral";

function httpError(status: number, message: string, details?: unknown) {
  const err: any = new Error(message);
  err.status = status;
  err.details = details;
  return err;
}

export async function listLocations(_req: Request, res: Response, next: NextFunction) {
  try {
    const locations = await JobLocation.find({ isActive: true }).sort({ name: 1 }).lean();
    res.json(locations);
  } catch (e) {
    next(e);
  }
}

export async function listJobs(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = listJobsQuerySchema.safeParse(req.query);
    if (!parsed.success) throw httpError(400, "Invalid query params", parsed.error.flatten());

    const { keyword, locationId, page = 1, limit = 10 } = parsed.data;

    const filter: any = { status: "published" };
    if (locationId) filter.locationIds = new Types.ObjectId(locationId);

    const skip = (page - 1) * limit;

    if (keyword) {
      const q = { ...filter, $text: { $search: keyword } };
      const [items, total] = await Promise.all([
        JobPost.find(q, { score: { $meta: "textScore" } })
          .sort({ score: { $meta: "textScore" }, postedAt: -1, createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .lean(),
        JobPost.countDocuments(q)
      ]);

      return res.json({ page, limit, total, items });
    }

    const [items, total] = await Promise.all([
      JobPost.find(filter).sort({ postedAt: -1, createdAt: -1 }).skip(skip).limit(limit).lean(),
      JobPost.countDocuments(filter)
    ]);

    res.json({ page, limit, total, items });
  } catch (e) {
    next(e);
  }
}

export async function getJobBySlug(req: Request, res: Response, next: NextFunction) {
  try {
    const job = await JobPost.findOne({ slug: req.params.slug, status: "published" })
      .populate("locationIds")
      .lean();

    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(job);
  } catch (e) {
    next(e);
  }
}

export async function applyToJob(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = applySchema.safeParse(req.body);
    if (!parsed.success) throw httpError(400, "Invalid apply payload", parsed.error.flatten());

    const { jobId } = req.params;
    if (!Types.ObjectId.isValid(jobId)) throw httpError(400, "Invalid jobId");

    const job = await JobPost.findById(jobId).populate("locationIds").lean();
    if (!job || job.status !== "published") return res.status(404).json({ error: "Job not found" });

    const resumeFile = (req as any).file as Express.Multer.File | undefined;

    const email = parsed.data.email.toLowerCase().trim();

    // Upsert candidate
    let candidate = await Candidate.findOne({ email });
    if (!candidate) {
      candidate = await Candidate.create({
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        email,
        phone: parsed.data.phone || null
      });
    } else {
      await Candidate.updateOne(
        { _id: candidate._id },
        {
          $set: {
            firstName: parsed.data.firstName,
            lastName: parsed.data.lastName,
            phone: parsed.data.phone || candidate.phone || null
          }
        }
      );
    }

    const locationSnapshot = Array.isArray(job.locationIds)
      ? (job.locationIds as any[]).map((l) => l?.name).filter(Boolean)
      : [];

    // Create application
    let appDoc;
    try {
      appDoc = await JobApplication.create({
        jobPostId: job._id,
        candidateId: candidate._id,
        source: parsed.data.source || "website",
        coverLetter: parsed.data.coverLetter || null,
        jobTitleSnapshot: job.title,
        locationSnapshot
      });
    } catch (e: any) {
      if (e?.code === 11000) {
        return res.status(409).json({ error: "You have already applied to this job with this email." });
      }
      throw e;
    }

    // Optional resume
    if (resumeFile) {
      const fileDoc = await File.create({
        storageProvider: "local",
        storageKey: resumeFile.path,
        originalFilename: resumeFile.originalname,
        mimeType: resumeFile.mimetype,
        sizeBytes: resumeFile.size
      });

      await ApplicationFile.create({
        applicationId: appDoc._id,
        fileId: fileDoc._id,
        fileType: "resume"
      });
    }

    res.status(201).json({ message: "Application submitted", applicationId: appDoc._id });
  } catch (e) {
    next(e);
  }
}

export async function referCandidate(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = referSchema.safeParse(req.body);
    if (!parsed.success) throw httpError(400, "Invalid referral payload", parsed.error.flatten());

    const { jobId } = req.params;
    if (!Types.ObjectId.isValid(jobId)) throw httpError(400, "Invalid jobId");

    const job = await JobPost.findById(jobId).lean();
    if (!job || job.status !== "published") return res.status(404).json({ error: "Job not found" });

    const referral = await Referral.create({
      jobPostId: job._id,
      referrer: parsed.data.referrer,
      referred: parsed.data.referred,
      message: parsed.data.message || null
    });

    res.status(201).json({ message: "Referral submitted", referralId: referral._id });
  } catch (e) {
    next(e);
  }
}
