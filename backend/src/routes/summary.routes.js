import { Router } from "express";

import summaryController from "../controllers/summary.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// Generate Summary
router.post(
  "/:id",
  authMiddleware,
  summaryController.generateSummary
);

// Get Existing Summary
router.get(
  "/:id",
  authMiddleware,
  summaryController.getSummary
);

export default router;