const express = require("express");
const pdfController = require("../controllers/pdf.controller.js");

const router = express.Router();

router.get("/configurations/:id/pdf", pdfController.exportPdf);

module.exports = router;
