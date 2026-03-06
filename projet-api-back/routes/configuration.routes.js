const express = require("express");
const controller = require("../controllers/configuration.controller.js");
const { auth } = require("../middleware/auth.middleware");

const router = express.Router();
/**
 * @swagger
 * /configurations:
 *   get:
 *     summary: Configurations utilisateur
 *     tags: [Configurations]
 *     security:
 *       - bearerAuth: []
 */
router.get("/", auth, controller.getMyConfigurations);
/**
 * @swagger
 * /configurations/{id}:
 *   get:
 *     summary: Détail configuration
 *     tags: [Configurations]
 */
router.get("/:id", auth, controller.getById);
/**
 * @swagger
 * /configurations:
 *   post:
 *     summary: Créer configuration
 *     tags: [Configurations]
 */
router.post("/", auth, controller.create);

router.post("/:id/components", auth, controller.addComponent);
router.delete("/:id/components/:componentId", auth, controller.removeComponent);

router.delete("/:id", auth, controller.remove);

module.exports = router;