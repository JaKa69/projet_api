const express = require("express");
const controller = require("../controllers/component.controller.js");
const { auth, admin } = require("../middleware/auth.middleware");

const router = express.Router();
/**
 * @swagger
 * /components:
 *   get:
 *     summary: Liste des composants
 *     tags: [Components]
 */
router.get("/", controller.getAll);
/**
 * @swagger
 * /components/{id}:
 *   get:
 *     summary: Détail composant
 *     tags: [Components]
 */
router.get("/:id", controller.getById);
/**
 * @swagger
 * /components:
 *   post:
 *     summary: Ajouter composant
 *     tags: [Components]
 */
router.post("/", auth, admin, controller.create);
router.put("/:id", auth, admin, controller.update);
router.delete("/:id", auth, admin, controller.remove);

module.exports = router;