import { Router } from "express";

import questionController from "../controllers/question.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// Generate Questions
router.post(
  "/:id",
  authMiddleware,
  questionController.generateQuestions
);

// Get Existing Questions
router.get(
  "/:id",
  authMiddleware,
  questionController.getQuestions
);

export default router;