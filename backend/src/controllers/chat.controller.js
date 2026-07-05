import chatService from "../services/chat.service.js";
import ApiResponse from "../utils/ApiResponse.js";

class ChatController {
  // Send Message
  async sendMessage(req, res, next) {
    try {
      const { message } = req.body;

      const response = await chatService.sendMessage(
        req.params.id,
        req.user._id,
        message
      );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Message sent successfully.",
          response
        )
      );
    } catch (error) {
      next(error);
    }
  }

  // Get Chat History
  async getMessages(req, res, next) {
    try {
      const messages =
        await chatService.getMessages(
          req.params.id,
          req.user._id
        );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Chat history fetched successfully.",
          messages
        )
      );
    } catch (error) {
      next(error);
    }
  }

  // Clear Chat
  async clearChat(req, res, next) {
    try {
      await chatService.clearChat(
        req.params.id,
        req.user._id
      );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Chat cleared successfully."
        )
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new ChatController();