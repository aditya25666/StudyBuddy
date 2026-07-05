import app from "./app.js";
import connectDB from "./config/db.js";
import { env } from "./config/env.js";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(env.PORT, () => {
      console.log(`
==========================================
🚀 StudyBuddy Backend Started
🌐 Server : http://localhost:${env.PORT}
📦 Environment : ${env.NODE_ENV}
==========================================
      `);
    });
  } catch (error) {
    console.error("❌ Failed to start server");
    console.error(error);
  }
};

startServer();