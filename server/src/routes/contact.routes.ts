import { Router } from "express";
import { createContactMessage, getContactMessageById } from "../controllers/contact.controller";

const router = Router();

router.post("/", createContactMessage);
router.get("/:id", getContactMessageById);

export default router;
