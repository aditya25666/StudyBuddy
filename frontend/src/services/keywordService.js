import api from "./api";

const keywordService = {
  // Generate Keywords
  generateKeywords: async (documentId) => {
    const response = await api.post(
      `/keywords/${documentId}`
    );

    return response.data;
  },

  // Get Existing Keywords
  getKeywords: async (documentId) => {
    const response = await api.get(
      `/keywords/${documentId}`
    );

    return response.data;
  },
};

export default keywordService;