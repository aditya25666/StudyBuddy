import keywordService from "../services/keyword.service.js";
import ApiResponse from "../utils/ApiResponse.js";

class KeywordController {
  // Generate Keywords
  async generateKeywords(req, res, next) {
    try {
      const keywords =
        await keywordService.generateKeywords(
          req.params.id,
          req.user._id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Keywords generated successfully",
          keywords
        )
      );
    } catch (error) {
      next(error);
    }
  }

  // Get Existing Keywords
  async getKeywords(req, res, next) {
    try {
      const keywords =
        await keywordService.getKeywords(
          req.params.id,
          req.user._id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Keywords fetched successfully",
          keywords
        )
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new KeywordController();