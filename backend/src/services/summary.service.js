import Document from "../models/Document.js";
import ApiError from "../utils/ApiError.js";
import geminiService from "./gemini.service.js";

class SummaryService {
  // Generate AI Summary
  async generateSummary(documentId, userId) {
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

    // Return cached summary if it already exists
    if (
      document.summary &&
      document.summary.trim().length > 0
    ) {
      return document.summary;
    }

    // Generate summary using Gemini
    const summary = await geminiService.generateSummary(
      document.extractedText
    );

    // Save summary in MongoDB
    document.summary = summary;

    await document.save();

    return summary;
  }

  // Get Existing Summary
  async getSummary(documentId, userId) {
    const document = await Document.findOne({
      _id: documentId,
      uploadedBy: userId,
    });

    if (!document) {
      throw new ApiError(404, "Document not found");
    }

    return document.summary;
  }
}

export default new SummaryService();