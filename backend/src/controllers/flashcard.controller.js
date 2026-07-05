import flashcardService from "../services/flashcard.service.js";
import ApiResponse from "../utils/ApiResponse.js";

class FlashcardController {
  // Generate Flashcards
  async generateFlashcards(req, res, next) {
    try {
      const flashcards =
        await flashcardService.generateFlashcards(
          req.params.id,
          req.user._id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Flashcards generated successfully",
          flashcards
        )
      );
    } catch (error) {
      next(error);
    }
  }

  // Get Existing Flashcards
  async getFlashcards(req, res, next) {
    try {
      const flashcards =
        await flashcardService.getFlashcards(
          req.params.id,
          req.user._id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Flashcards fetched successfully",
          flashcards
        )
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new FlashcardController();