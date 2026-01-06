import express from "express";
import * as controller from "../controllers/configuration.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", auth, controller.getMyConfigurations);
router.get("/:id", auth, controller.getById);
router.post("/", auth, controller.create);

router.post("/:id/components", auth, controller.addComponent);
router.delete("/:id/components/:componentId", auth, controller.removeComponent);

router.delete("/:id", auth, controller.remove);

export default router;
