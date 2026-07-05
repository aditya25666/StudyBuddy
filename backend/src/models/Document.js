import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    originalName: {
      type: String,
      required: true,
    },

    fileName: {
      type: String,
      required: true,
    },

    filePath: {
      type: String,
      required: true,
    },

    fileType: {
      type: String,
      required: true,
    },

    fileSize: {
      type: Number,
      required: true,
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Upload Status
    status: {
      type: String,
      enum: ["uploaded", "processing", "ready", "failed"],
      default: "uploaded",
    },

    // Extracted Text
    extractedText: {
      type: String,
      default: "",
    },

    // AI Summary
    summary: {
      type: String,
      default: "",
    },

    // Keywords
    keywords: {
      type: [String],
      default: [],
    },

    // Flashcards
    flashcards: [
      {
        question: String,
        answer: String,
      },
    ],

    // Quiz Questions
    questions: {
  theory: [
    {
      question: String,
      answer: String,
    },
  ],

  viva: [
    {
      question: String,
      answer: String,
    },
  ],

  mcqs: [
    {
      question: String,
      options: [String],
      answer: String,
    },
  ],
},

    // AI Processing Status
    aiStatus: {
      type: String,
      enum: ["pending", "processing", "completed", "failed"],
      default: "pending",
    },

    aiError: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Document", documentSchema);