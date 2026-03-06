const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Inscription utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Utilisateur créé
 */
router.post('/register', authController.register);
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connexion utilisateur
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Retourne un JWT
 */
router.post('/login', authController.login);
/**
 * @swagger
 * /auth/isLoggedIn:
 *   get:
 *     summary: Vérifie si utilisateur est admin
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: utilisateur connecté
 */
router.get('/isLoggedIn', authController.isLoggedInAndAdmin);

module.exports = router;
