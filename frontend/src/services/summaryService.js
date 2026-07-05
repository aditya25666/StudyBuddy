import api from "./api";

const summaryService = {
  // Generate AI Summary
  generateSummary: async (documentId) => {
    const response = await api.post(
      `/summary/${documentId}`
    );

    return response.data;
  },

  // Get Existing Summary
  getSummary: async (documentId) => {
    const response = await api.get(
      `/summary/${documentId}`
    );

    return response.data;
  },
};

export default summaryService;