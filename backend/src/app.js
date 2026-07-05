import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import errorHandler from "./middlewares/error.middleware.js";

import authRoutes from "./routes/auth.routes.js";
import documentRoutes from "./routes/document.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import summaryRoutes from "./routes/summary.routes.js";
import flashcardRoutes from "./routes/flashcard.routes.js";
import questionRoutes from "./routes/question.routes.js";
import keywordRoutes from "./routes/keyword.routes.js";
import chatRoutes from "./routes/chat.routes.js";

const app = express();

// Middlewares
app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 StudyBuddy Backend Running",
  });
});

// API Routes
app.use("/api/auth", authRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/documents", documentRoutes);

app.use("/api/summary", summaryRoutes);

app.use("/api/flashcards", flashcardRoutes);

app.use("/api/questions", questionRoutes);

app.use("/api/keywords", keywordRoutes);

app.use("/api/chat", chatRoutes);

// Error Handler
app.use(errorHandler);

export default app;