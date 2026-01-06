const express = require("express");
const controller = require("../controllers/configuration.controller.js");
const authMiddleware = require("../middlewares/auth.middleware.js");

const router = express.Router();

router.get("/", authMiddleware.auth, controller.getMyConfigurations);
router.get("/:id", authMiddleware.auth, controller.getById);
router.post("/", authMiddleware.auth, controller.create);

router.post("/:id/components", authMiddleware.auth, controller.addComponent);
router.delete("/:id/components/:componentId", authMiddleware.auth, controller.removeComponent);

router.delete("/:id", authMiddleware.auth, controller.remove);

module.exports = router;
