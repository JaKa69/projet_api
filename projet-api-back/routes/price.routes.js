const express = require("express");
const controller = require("../controllers/price.controller.js");

const router = express.Router();

router.get("/component/:componentId", controller.getByComponent);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
