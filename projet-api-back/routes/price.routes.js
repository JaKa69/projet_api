const express = require("express");
const controller = require("../controllers/price.controller.js");
const { auth, admin } = require("../middleware/auth.middleware");

const router = express.Router();
/**
 * @swagger
 * /prices/component/{componentId}:
 *   get:
 *     summary: Prix d'un composant
 *     tags: [Prices]
 */
router.get("/component/:componentId", controller.getByComponent);
/**
 * @swagger
 * /prices:
 *   post:
 *     summary: Ajouter un prix
 *     tags: [Prices]
 */
router.post("/", auth, admin, controller.create);
router.put("/:id", auth, admin, controller.update);
router.delete("/:id", auth, admin, controller.remove);

module.exports = router;