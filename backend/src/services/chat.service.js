import Chat from "../models/Chat.js";
import Document from "../models/Document.js";
import ApiError from "../utils/ApiError.js";
import ai from "../config/gemini.js";

class ChatService {
  // Get existing chat or create new one
  async getOrCreateChat(documentId, userId) {
    let chat = await Chat.findOne({
      documentId,
      userId,
    });

    if (!chat) {
      chat = await Chat.create({
        documentId,
        userId,
        messages: [],
      });
    }

    return chat;
  }

  // Build prompt for Gemini
  buildPrompt(documentText, messages, question) {
  const history = messages
    .slice(-10)
    .map(
      (msg) =>
        `${msg.role === "user" ? "Student" : "Tutor"}: ${msg.content}`
    )
    .join("\n");

  return `
You are StudyBuddy AI Tutor.

IMPORTANT:

StudyBuddy has already generated:

- Summary
- Flashcards
- Theory Questions
- Viva Questions
- MCQs
- Keywords

DO NOT regenerate these unless the student explicitly asks.

Your role is to answer additional doubts about the uploaded document.

Use simple English.

Give examples whenever useful.

If the answer cannot be found in the uploaded document, clearly say:

"I couldn't find this information in your uploaded document."

Return ONLY valid JSON.

Example:

{
  "answer":"JWT is ...",

  "suggestions":[
    "Explain with an example",
    "Difference between JWT and Sessions",
    "Advantages of JWT",
    "Interview questions on JWT"
  ]
}

-----------------------------------

DOCUMENT

${documentText}

-----------------------------------

PREVIOUS CONVERSATION

${history}

-----------------------------------

STUDENT QUESTION

${question}
`;
}

parseJson(text) {
  try {
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (error) {
    console.error(error);

    return {
      answer: text,
      suggestions: [],
    };
  }
}

  // Ask Gemini
  async askGemini(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  console.log("Gemini Response:", response);

  return this.parseJson(response.text);
}

  // Save messages
  async saveMessages(chat, question, answer) {
    chat.messages.push({
      role: "user",
      content: question,
    });

    chat.messages.push({
      role: "assistant",
      content: answer,
    });

    await chat.save();
  }

  // Main method
  async sendMessage(documentId, userId, question) {
    const document = await Document.findOne({
      _id: documentId,
      uploadedBy: userId,
    });

    if (!document) {
      throw new ApiError(404, "Document not found.");
    }

    if (!document.extractedText) {
      throw new ApiError(
        400,
        "Document text not available."
      );
    }

    const chat =
      await this.getOrCreateChat(
        documentId,
        userId
      );

    const prompt =
      this.buildPrompt(
        document.extractedText,
        chat.messages,
        question
      );

   const aiResponse =
  await this.askGemini(prompt);

await this.saveMessages(
  chat,
  question,
  aiResponse.answer
);

return {
  answer: aiResponse.answer,
  suggestions: aiResponse.suggestions,
  messages: chat.messages,
};
  }

  // Get chat history
  async getMessages(documentId, userId) {
    const chat = await Chat.findOne({
      documentId,
      userId,
    });

    if (!chat) {
      return [];
    }

    return chat.messages;
  }

  // Clear chat
  async clearChat(documentId, userId) {
    await Chat.findOneAndDelete({
      documentId,
      userId,
    });

    return true;
  }
}

export default new ChatService();