const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/isLoggedIn', authController.isLoggedInAndAdmin);

module.exports = router;
