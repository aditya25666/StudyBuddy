import api from "./api";

const questionService = {
  // Generate Questions
  generateQuestions: async (documentId) => {
    const response = await api.post(
      `/questions/${documentId}`
    );

    return response.data;
  },

  // Get Existing Questions
  getQuestions: async (documentId) => {
    const response = await api.get(
      `/questions/${documentId}`
    );

    return response.data;
  },
};

export default questionService;