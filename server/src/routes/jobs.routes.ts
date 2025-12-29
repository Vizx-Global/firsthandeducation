import { Router } from "express";
import { upload } from "../utils/upload";
import {
  listJobs,
  listLocations,
  getJobBySlug,
  applyToJob,
  referCandidate
} from "../controllers/jobs.controller";

const router = Router();

router.get("/", listJobs);
router.get("/locations", listLocations);
router.get("/:slug", getJobBySlug);

// multipart/form-data field name: "resume"
router.post("/:jobId/apply", upload.single("resume"), applyToJob);
router.post("/:jobId/refer", referCandidate);

export default router;
