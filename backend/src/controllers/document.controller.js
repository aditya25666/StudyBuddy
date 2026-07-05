import documentService from "../services/document.service.js";
import ApiResponse from "../utils/ApiResponse.js";

class DocumentController {
  // Upload Document
  async upload(req, res, next) {
    try {
      const document = await documentService.uploadDocument(
        req.file,
        req.user._id
      );

      return res.status(201).json(
        new ApiResponse(
          201,
          "Document uploaded successfully",
          document
        )
      );
    } catch (error) {
      next(error);
    }
  }

  // Get All Documents (with Search)
  async getDocuments(req, res, next) {
    try {
      const search = req.query.search || "";

      const documents = await documentService.getUserDocuments(
        req.user._id,
        search
      );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Documents fetched successfully",
          documents
        )
      );
    } catch (error) {
      next(error);
    }
  }

  // Get Single Document
  async getDocument(req, res, next) {
    try {
      const document = await documentService.getDocumentById(
        req.params.id,
        req.user._id
      );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Document fetched successfully",
          document
        )
      );
    } catch (error) {
      next(error);
    }
  }

  // Download Document
  async downloadDocument(req, res, next) {
    try {
      const document = await documentService.getDocumentById(
        req.params.id,
        req.user._id
      );

      return res.download(
        document.filePath,
        document.originalName
      );
    } catch (error) {
      next(error);
    }
  }

  // Delete Document
  async deleteDocument(req, res, next) {
    try {
      await documentService.deleteDocument(
        req.params.id,
        req.user._id
      );

      return res.status(200).json(
        new ApiResponse(
          200,
          "Document deleted successfully"
        )
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new DocumentController();