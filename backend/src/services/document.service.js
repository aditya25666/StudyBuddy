import Document from "../models/Document.js";
import ApiError from "../utils/ApiError.js";
import textExtractionService from "./textExtraction.service.js";
import fs from "fs";

class DocumentService {
  // Upload Document
  async uploadDocument(file, userId) {
    if (!file) {
      throw new ApiError(400, "No document uploaded");
    }

    // Create document
    const document = await Document.create({
      title: file.originalname.replace(/\.[^/.]+$/, ""),
      originalName: file.originalname,
      fileName: file.filename,
      filePath: file.path,
      fileType: file.mimetype,
      fileSize: file.size,
      uploadedBy: userId,
      status: "processing",
      aiStatus: "processing",
    });

    try {
      // Extract text
      const extractedText =
        await textExtractionService.extractText(
          file.path,
          file.mimetype
        );

      // Save extracted text
      document.extractedText = extractedText;

      // Ready for AI generation
      document.status = "ready";
      document.aiStatus = "pending";

      await document.save();
    } catch (error) {
      console.error("Text Extraction Error:", error);

      document.status = "failed";
      document.aiStatus = "failed";
      document.aiError = error.message;

      await document.save();
    }

    return document;
  }

  // Get All Documents (with Search)
  async getUserDocuments(userId, search = "") {
    return await Document.find({
      uploadedBy: userId,
      originalName: {
        $regex: search,
        $options: "i",
      },
    }).sort({
      createdAt: -1,
    });
  }

  // Get Single Document
  async getDocumentById(documentId, userId) {
    const document = await Document.findOne({
      _id: documentId,
      uploadedBy: userId,
    });

    if (!document) {
      throw new ApiError(404, "Document not found");
    }

    return document;
  }

  // Delete Document
  async deleteDocument(documentId, userId) {
    const document = await Document.findOne({
      _id: documentId,
      uploadedBy: userId,
    });

    if (!document) {
      throw new ApiError(404, "Document not found");
    }

    if (fs.existsSync(document.filePath)) {
      fs.unlinkSync(document.filePath);
    }

    await Document.findByIdAndDelete(documentId);

    return true;
  }
}

export default new DocumentService();