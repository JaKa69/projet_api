const express = require("express");
const controller = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/all", controller.findAll);

module.exports = router;
