const express = require("express");
const controller = require("../controllers/category.controller.js");
const { auth, admin } = require("../middleware/auth.middleware");

const router = express.Router();
/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Liste des catégories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Liste des catégories
 */
router.get("/", controller.getAll);
/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Créer une catégorie
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 */
router.post("/", auth, admin, controller.create);
/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Modifier catégorie
 *     tags: [Categories]
 */
router.put("/:id", auth, admin, controller.update);
/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Supprimer catégorie
 *     tags: [Categories]
 */
router.delete("/:id", auth, admin, controller.remove);

module.exports = router;