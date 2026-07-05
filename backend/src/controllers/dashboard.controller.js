import Document from "../models/Document.js";
import ApiResponse from "../utils/ApiResponse.js";

class DashboardController {
  async getDashboard(req, res, next) {
    try {
      const userId = req.user._id;

      const totalDocuments = await Document.countDocuments({
        uploadedBy: userId,
      });

      const processingDocuments = await Document.countDocuments({
        uploadedBy: userId,
        status: "processing",
      });

      const readyDocuments = await Document.countDocuments({
        uploadedBy: userId,
        status: "ready",
      });

      const recentDocuments = await Document.find({
        uploadedBy: userId,
      })
        .sort({ createdAt: -1 })
        .limit(5);

      return res.status(200).json(
        new ApiResponse(200, "Dashboard fetched successfully", {
          totalDocuments,
          processingDocuments,
          readyDocuments,
          recentDocuments,
        })
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new DashboardController();