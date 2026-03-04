const express = require("express");
const controller = require("../controllers/configuration.controller.js");

const router = express.Router();

router.get("/", controller.getMyConfigurations);
router.get("/:id", controller.getById);
router.post("/", controller.create);

router.post("/:id/components", controller.addComponent);
router.delete("/:id/components/:componentId", controller.removeComponent);

router.delete("/:id", controller.remove);

module.exports = router;
