import Document from "../models/Document.js";
import ApiError from "../utils/ApiError.js";
import geminiService from "./gemini.service.js";

class FlashcardService {
  // Generate AI Flashcards
  async generateFlashcards(documentId, userId) {
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

    // Return cached flashcards
    if (
      document.flashcards &&
      document.flashcards.length > 0
    ) {
      return document.flashcards;
    }

    // Generate flashcards using Gemini
    const flashcards =
      await geminiService.generateFlashcards(
        document.extractedText
      );

    // Save in MongoDB
    document.flashcards = flashcards;

    await document.save();

    return flashcards;
  }

  // Get Existing Flashcards
  async getFlashcards(documentId, userId) {
    const document = await Document.findOne({
      _id: documentId,
      uploadedBy: userId,
    });

    if (!document) {
      throw new ApiError(404, "Document not found");
    }

    return document.flashcards;
  }
}

export default new FlashcardService();