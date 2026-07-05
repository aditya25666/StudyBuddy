import { Router } from "express";

import chatController from "../controllers/chat.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// Send Message
router.post(
  "/:id",
  authMiddleware,
  chatController.sendMessage
);

// Get Chat History
router.get(
  "/:id",
  authMiddleware,
  chatController.getMessages
);

// Clear Chat
router.delete(
  "/:id",
  authMiddleware,
  chatController.clearChat
);

export default router;