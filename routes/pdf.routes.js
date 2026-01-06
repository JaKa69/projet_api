import express from "express";
import { exportPdf } from "../controllers/pdf.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/configurations/:id/pdf", auth, exportPdf);

export default router;
