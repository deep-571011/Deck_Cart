import express from "express";
import { contactFormHandler } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", contactFormHandler);

export default router;
