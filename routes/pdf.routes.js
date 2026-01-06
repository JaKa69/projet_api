const express = require("express");
const pdfController = require("../controllers/pdf.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");

const router = express.Router();

router.get("/configurations/:id/pdf", authMiddleware.auth, pdfController.exportPdf);

module.exports = router;
