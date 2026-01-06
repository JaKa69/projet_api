import express from "express";
import * as controller from "../controllers/price.controller.js";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/component/:componentId", controller.getByComponent);
router.post("/", auth, isAdmin, controller.create);
router.put("/:id", auth, isAdmin, controller.update);
router.delete("/:id", auth, isAdmin, controller.remove);

export default router;
