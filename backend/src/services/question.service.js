import Document from "../models/Document.js";
import ApiError from "../utils/ApiError.js";
import geminiService from "./gemini.service.js";

class QuestionService {
  // Generate AI Questions
  async generateQuestions(documentId, userId) {
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

    // Return cached questions
    if (
      document.questions &&
      document.questions.length > 0
    ) {
      return document.questions;
    }

    // Generate questions using Gemini
    const questions =
      await geminiService.generateQuestions(
        document.extractedText
      );

    // Save in MongoDB
    document.questions = questions;

    await document.save();

    return questions;
  }

  // Get Existing Questions
  async getQuestions(documentId, userId) {
    const document = await Document.findOne({
      _id: documentId,
      uploadedBy: userId,
    });

    if (!document) {
      throw new ApiError(404, "Document not found");
    }

    return document.questions;
  }
}

export default new QuestionService();