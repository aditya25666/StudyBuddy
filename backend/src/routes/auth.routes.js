import { Router } from "express";

import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// Public Routes
router.post("/register", authController.register);

router.post("/login", authController.login);

// Protected Routes
router.post("/logout", authMiddleware, authController.logout);

router.get("/me", authMiddleware, authController.getCurrentUser);

export default router;