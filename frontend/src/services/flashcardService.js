import api from "./api";

const flashcardService = {
  // Generate Flashcards
  generateFlashcards: async (documentId) => {
    const response = await api.post(
      `/flashcards/${documentId}`
    );

    return response.data;
  },

  // Get Existing Flashcards
  getFlashcards: async (documentId) => {
    const response = await api.get(
      `/flashcards/${documentId}`
    );

    return response.data;
  },
};

export default flashcardService;