import questionService from "../services/question.service.js";
import ApiResponse from "../utils/ApiResponse.js";

class QuestionController {
  // Generate Questions
  async generateQuestions(req, res, next) {
    try {
      const questions =
        await questionService.generateQuestions(
          req.params.id,
          req.user._id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Questions generated successfully",
          questions
        )
      );
    } catch (error) {
      next(error);
    }
  }

  // Get Existing Questions
  async getQuestions(req, res, next) {
    try {
      const questions =
        await questionService.getQuestions(
          req.params.id,
          req.user._id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Questions fetched successfully",
          questions
        )
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new QuestionController();