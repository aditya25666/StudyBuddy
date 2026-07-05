import { Router } from "express";

import flashcardController from "../controllers/flashcard.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// Generate Flashcards
router.post(
  "/:id",
  authMiddleware,
  flashcardController.generateFlashcards
);

// Get Existing Flashcards
router.get(
  "/:id",
  authMiddleware,
  flashcardController.getFlashcards
);

export default router;