import { useRef, useState } from "react";
import {
  UploadCloud,
  FileText,
  X,
  CheckCircle2,
} from "lucide-react";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { useNavigate } from "react-router-dom";
import documentService from "../../services/documentService";

const allowedTypes = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
];

const UploadDocument = () => {
      const navigate = useNavigate();

  const inputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const [dragActive, setDragActive] = useState(false);

  const [uploading, setUploading] = useState(false);

  const handleFile = (file) => {
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      alert("Unsupported File Type");
      return;
    }

    if (file.size > 25 * 1024 * 1024) {
      alert("Maximum file size is 25MB");
      return;
    }

    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    setDragActive(false);

    const file = e.dataTransfer.files[0];

    handleFile(file);
  };
const handleUpload = async () => {
  if (!selectedFile) return;

  try {
    setUploading(true);

    await documentService.uploadDocument(selectedFile);

    alert("Document uploaded successfully!");

    setSelectedFile(null);

    navigate("/documents");

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      "Upload failed"
    );

  } finally {

    setUploading(false);

  }
};

  return (
    <div className="mx-auto max-w-5xl">

      <h1 className="text-4xl font-bold text-white">
        Upload Study Material
      </h1>

      <p className="mt-3 text-slate-400">
        Upload your notes, books and study material
        to generate AI summaries, questions and flashcards.
      </p>

      <Card className="mt-10 p-10">

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`rounded-2xl border-2 border-dashed p-16 text-center transition ${
            dragActive
              ? "border-cyan-400 bg-cyan-500/10"
              : "border-slate-700"
          }`}
        >

          <UploadCloud
            size={70}
            className="mx-auto text-cyan-400"
          />

          <h2 className="mt-6 text-3xl font-bold">
            Drag & Drop Files
          </h2>

          <p className="mt-4 text-slate-400">
            Upload PDFs, DOCX, TXT or PPTX files
          </p>

          <Button
            className="mt-8"
            onClick={() => inputRef.current.click()}
          >
            Choose File
          </Button>

          <input
            hidden
            ref={inputRef}
            type="file"
            accept=".pdf,.docx,.txt,.pptx"
            onChange={(e) =>
              handleFile(e.target.files[0])
            }
          />
                  {/* Supported Formats */}

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          <Badge>PDF</Badge>

          <Badge>DOCX</Badge>

          <Badge>TXT</Badge>

          <Badge>PPTX</Badge>

        </div>

        <p className="mt-4 text-sm text-slate-500">
          Maximum File Size: 25 MB
        </p>

      </div>

      {/* Selected File */}

      {selectedFile && (

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-cyan-500/10 p-4">

                <FileText
                  size={34}
                  className="text-cyan-400"
                />

              </div>

              <div>

                <h3 className="text-xl font-semibold text-white">

                  {selectedFile.name}

                </h3>

                <p className="mt-2 text-slate-400">

                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB

                </p>

                <p className="mt-1 text-sm text-slate-500">

                  {selectedFile.type}

                </p>

              </div>

            </div>

            <button
              onClick={() => setSelectedFile(null)}
              className="rounded-xl bg-red-500/10 p-3 text-red-400 transition hover:bg-red-500 hover:text-white"
            >

              <X size={22} />

            </button>

          </div>

        </div>

      )}

      {/* Upload Button */}

      <div className="mt-10 flex justify-end">

        <Button
          size="lg"
          disabled={!selectedFile || uploading}
          onClick={handleUpload}
        >

          {uploading ? "Uploading..." : "Upload Document"}

        </Button>

      </div>

      {/* Uploading */}

      {uploading && (

        <div className="mt-8">

          <div className="mb-3 flex items-center justify-between">

            <span className="text-slate-300">

              Uploading...

            </span>

            <span className="text-cyan-400">

              Please Wait

            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">

            <div className="h-full w-3/4 animate-pulse rounded-full bg-cyan-400" />

          </div>

        </div>

      )}

      {/* Success */}

      {!uploading && selectedFile && (

        <div className="mt-8 flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-5">

          <CheckCircle2
            size={24}
            className="text-green-400"
          />

          <p className="text-green-400">

            File is ready for upload.

          </p>

        </div>

      )}

    </Card>

  </div>
);

};

export default UploadDocument;