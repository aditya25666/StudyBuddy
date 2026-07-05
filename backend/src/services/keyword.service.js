import Document from "../models/Document.js";
import ApiError from "../utils/ApiError.js";
import geminiService from "./gemini.service.js";

class KeywordService {
  // Generate Keywords
  async generateKeywords(documentId, userId) {
    const document = await Document.findOne({
      _id: documentId,
      uploadedBy: userId,
    });

    if (!document) {
      throw new ApiError(404, "Document not found");
    }

    if (!document.extractedText) {
      throw new ApiError(
        400,
        "Document text has not been extracted."
      );
    }

    // Return cached keywords if they already exist
    if (
      document.keywords &&
      document.keywords.length > 0
    ) {
      return document.keywords;
    }

    // Generate keywords using Gemini
    const keywords =
      await geminiService.generateKeywords(
        document.extractedText
      );

    // Save in MongoDB
    document.keywords = keywords;

    await document.save();

    return keywords;
  }

  // Get Existing Keywords
  async getKeywords(documentId, userId) {
    const document = await Document.findOne({
      _id: documentId,
      uploadedBy: userId,
    });

    if (!document) {
      throw new ApiError(404, "Document not found");
    }

    return document.keywords;
  }
}

export default new KeywordService();