import express from "express";
import * as controller from "../controllers/component.controller.js";
import { auth, isAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", auth, isAdmin, controller.create);
router.put("/:id", auth, isAdmin, controller.update);
router.delete("/:id", auth, isAdmin, controller.remove);

export default router;
