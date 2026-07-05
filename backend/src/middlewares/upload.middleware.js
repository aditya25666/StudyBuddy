import upload from "../config/multer.js";

const uploadDocument = upload.single("document");

export default uploadDocument;