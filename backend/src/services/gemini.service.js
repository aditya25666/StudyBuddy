import ai from "../config/gemini.js";

class GeminiService {
  // Remove markdown code blocks and parse JSON safely
  parseJson(text) {
    try {
      const cleaned = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      return JSON.parse(cleaned);
    } catch (error) {
      console.error("JSON Parse Error:", error);
      throw new Error("Invalid JSON returned by Gemini.");
    }
  }

  // Generate Summary
  async generateSummary(text) {
    try {
      const prompt = `
You are an AI study assistant.

Generate a concise, easy-to-understand summary of the following study material.

Requirements:
- Use simple English.
- Keep important concepts.
- Use headings and bullet points where appropriate.
- Maximum 500 words.

Study Material:

${text}
`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return response.text;
    } catch (error) {
      console.error("Gemini Summary Error:", error);
      throw error;
    }
  }

  // Generate Keywords
  async generateKeywords(text) {
    try {
      const prompt = `
Extract the 20 most important keywords from the following study material.

Return ONLY a JSON array.

Example:
[
  "Operating System",
  "Kernel",
  "Thread"
]

Study Material:

${text}
`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return this.parseJson(response.text);
    } catch (error) {
      console.error("Gemini Keywords Error:", error);
      throw error;
    }
  }

  // Generate Flashcards
  async generateFlashcards(text) {
    try {
      const prompt = `
Generate exactly 10 flashcards from the following study material.

Return ONLY valid JSON.

Example:

[
  {
    "question":"What is a process?",
    "answer":"A process is a program in execution."
  }
]

Study Material:

${text}
`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return this.parseJson(response.text);
    } catch (error) {
      console.error("Gemini Flashcard Error:", error);
      throw error;
    }
  }


  // Generate Questions
// Generate Questions
async generateQuestions(text) {
  try {
    const prompt = `
You are an expert engineering professor.

Generate study questions from the following study material.

Return ONLY valid JSON.

Format:

{
  "theory":[
    {
      "question":"...",
      "answer":"..."
    }
  ],

  "viva":[
    {
      "question":"...",
      "answer":"..."
    }
  ],

  "mcqs":[
    {
      "question":"...",
      "options":[
        "...",
        "...",
        "...",
        "..."
      ],
      "answer":"..."
    }
  ]
}

Requirements:

- Generate 10 Theory Questions with detailed answers.
- Generate 10 Viva Questions with concise answers.
- Generate 10 MCQs with exactly 4 options.
- Use simple English.
- Cover the most important concepts.
- Return ONLY JSON.

Study Material:

${text}
`;

    const response =
      await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

    return this.parseJson(response.text);

  } catch (error) {
    console.error(error);
    throw error;
  }
}
  // Generate Quiz
  async generateQuiz(text) {
    try {
      const prompt = `
Generate exactly 10 multiple-choice questions.

Return ONLY valid JSON.

Example:

[
  {
    "question":"Which scheduling algorithm is preemptive?",
    "options":[
      "FCFS",
      "Round Robin",
      "SJF",
      "FIFO"
    ],
    "answer":"Round Robin"
  }
]

Study Material:

${text}
`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return this.parseJson(response.text);
    } catch (error) {
      console.error("Gemini Quiz Error:", error);
      throw error;
    }
  }
}

export default new GeminiService();