import api from "./api";

const chatService = {
  // Send Message
  sendMessage: async (documentId, message) => {
    const response = await api.post(
      `/chat/${documentId}`,
      {
        message,
      }
    );

    return response.data;
  },

  // Get Chat History
  getMessages: async (documentId) => {
    const response = await api.get(
      `/chat/${documentId}`
    );

    return response.data;
  },

  // Clear Chat
  clearChat: async (documentId) => {
    const response = await api.delete(
      `/chat/${documentId}`
    );

    return response.data;
  },
};

export default chatService;