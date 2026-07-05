import api from "./api";

const documentService = {
  // Upload Document
  uploadDocument: async (file) => {
    const formData = new FormData();

    formData.append("document", file);

    const response = await api.post(
      "/documents/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  // Get All Documents (Supports Search)
  getDocuments: async (search = "") => {
    const response = await api.get("/documents", {
      params: {
        search,
      },
    });

    return response.data;
  },

  // Get Single Document
  getDocument: async (id) => {
    const response = await api.get(`/documents/${id}`);
    return response.data;
  },

  // Delete Document
  deleteDocument: async (id) => {
    const response = await api.delete(`/documents/${id}`);
    return response.data;
  },

  // Download Document
  downloadDocument: async (id) => {
    window.location.href = `http://localhost:5000/api/documents/download/${id}`;
  },
};

export default documentService;