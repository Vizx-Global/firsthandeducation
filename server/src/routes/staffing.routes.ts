import { Router } from "express";
import { createStaffingRequest, getStaffingRequestById } from "../controllers/staffing.controller";

const router = Router();

router.post("/", createStaffingRequest);
router.get("/:id", getStaffingRequestById);

export default router;
