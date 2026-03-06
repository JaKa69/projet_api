const express = require("express");
const controller = require("../controllers/merchant.controller.js");
const { auth, admin } = require("../middleware/auth.middleware");

const router = express.Router();
/**
 * @swagger
 * /merchants:
 *   get:
 *     summary: Liste des marchands
 *     tags: [Merchants]
 */
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
/**
 * @swagger
 * /merchants:
 *   post:
 *     summary: Ajouter marchand
 *     tags: [Merchants]
 */
router.post("/", auth, admin, controller.create);
router.put("/:id", auth, admin, controller.update);
router.delete("/:id", auth, admin, controller.remove);

module.exports = router;