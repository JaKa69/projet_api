const express = require("express");
const pdfController = require("../controllers/pdf.controller.js");
const { auth } = require("../middleware/auth.middleware");

const router = express.Router();
/**
 * @swagger
 * /configurations/{id}/pdf:
 *   get:
 *     summary: Télécharger configuration PDF
 *     tags: [PDF]
 *     security:
 *       - bearerAuth: []
 */
router.get("/configurations/:id/pdf", auth, pdfController.exportPdf);

module.exports = router;