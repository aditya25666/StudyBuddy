import fs from "fs/promises";
import mammoth from "mammoth";

import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

class TextExtractionService {
  async extractText(filePath, fileType) {
    switch (fileType) {
      case "application/pdf":
        return await this.extractPdf(filePath);

      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return await this.extractDocx(filePath);

      case "text/plain":
        return await this.extractTxt(filePath);

      default:
        throw new Error(`Unsupported file type: ${fileType}`);
    }
  }

  // ---------------- PDF ----------------

  async extractPdf(filePath) {
    const data = await fs.readFile(filePath);

    const pdf = await pdfjsLib.getDocument({
      data: new Uint8Array(data),
    }).promise;

    let text = "";

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);

      const content = await page.getTextContent();

      const pageText = content.items
        .map((item) => item.str)
        .join(" ");

      text += pageText + "\n\n";
    }

    return text.trim();
  }

  // ---------------- DOCX ----------------

  async extractDocx(filePath) {
    const result = await mammoth.extractRawText({
      path: filePath,
    });

    return result.value.trim();
  }

  // ---------------- TXT ----------------

  async extractTxt(filePath) {
    const text = await fs.readFile(filePath, "utf8");

    return text.trim();
  }
}

export default new TextExtractionService();