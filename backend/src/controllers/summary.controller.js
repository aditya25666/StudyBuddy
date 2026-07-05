import summaryService from "../services/summary.service.js";
import ApiResponse from "../utils/ApiResponse.js";

class SummaryController {
  // Generate Summary
  async generateSummary(req, res, next) {
    try {
      const summary = await summaryService.generateSummary(
        req.params.id,
        req.user._id
      );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Summary generated successfully",
          summary
        )
      );
    } catch (error) {
      next(error);
    }
  }

  // Get Summary
  async getSummary(req, res, next) {
    try {
      const summary = await summaryService.getSummary(
        req.params.id,
        req.user._id
      );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Summary fetched successfully",
          summary
        )
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new SummaryController();