const express = require("express");
const controller = require("../controllers/merchant.controller.js");
const authMiddleware= require("../middlewares/auth.middleware.js");

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", authMiddleware.auth, authMiddleware.isAdmin, controller.create);
router.put("/:id", authMiddleware.auth, authMiddleware.isAdmin, controller.update);
router.delete("/:id", authMiddleware.auth, authMiddleware.isAdmin, controller.remove);

module.exports = router;
