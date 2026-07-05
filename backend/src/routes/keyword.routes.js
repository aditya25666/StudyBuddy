import { Router } from "express";

import keywordController from "../controllers/keyword.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// Generate Keywords
router.post(
  "/:id",
  authMiddleware,
  keywordController.generateKeywords
);

// Get Existing Keywords
router.get(
  "/:id",
  authMiddleware,
  keywordController.getKeywords
);

export default router;