const express = require("express");
const controller = require("../controllers/price.controller.js");
const authMiddleware= require("../middlewares/auth.middleware.js");

const router = express.Router();

router.get("/component/:componentId", controller.getByComponent);
router.post("/", authMiddleware.auth, authMiddleware.isAdmin, controller.create);
router.put("/:id", authMiddleware.auth, authMiddleware.isAdmin, controller.update);
router.delete("/:id", authMiddleware.auth, authMiddleware.isAdmin, controller.remove);

module.exports = router;
