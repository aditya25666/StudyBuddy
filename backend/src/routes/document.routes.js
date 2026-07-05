import { Router } from "express";

import documentController from "../controllers/document.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import uploadDocument from "../middlewares/upload.middleware.js";

const router = Router();

// Upload Document
router.post(
  "/upload",
  authMiddleware,
  uploadDocument,
  documentController.upload
);

// Get All Documents
router.get(
  "/",
  authMiddleware,
  documentController.getDocuments
);

// Download Document
router.get(
  "/download/:id",
  authMiddleware,
  documentController.downloadDocument
);

// Get Single Document
router.get(
  "/:id",
  authMiddleware,
  documentController.getDocument
);

// Delete Document
router.delete(
  "/:id",
  authMiddleware,
  documentController.deleteDocument
);

export default router;