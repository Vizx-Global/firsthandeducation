import { Router } from "express";
import { getPublicSettings } from "../controllers/public.controller";

const router = Router();

router.get("/settings", getPublicSettings);

export default router;
