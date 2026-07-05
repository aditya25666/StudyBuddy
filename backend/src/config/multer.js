import multer from "multer";
import path from "path";
import fs from "fs";

// Create upload folder if it doesn't exist
const uploadPath = "uploads/documents";

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(
      null,
      uniqueName + path.extname(file.originalname)
    );
  },
});

// Allowed File Types
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "application/pdf",

    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

    "application/msword",

    "application/vnd.openxmlformats-officedocument.presentationml.presentation",

    "application/vnd.ms-powerpoint",

    "text/plain",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only PDF, DOC, DOCX, PPT, PPTX and TXT files are allowed."
      ),
      false
    );
  }
};

// Multer Upload
const upload = multer({
  storage,
  fileFilter,

  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB
  },
});

export default upload;