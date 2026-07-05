import {
  Files,
  FileText,
  Brain,
  Clock,
} from "lucide-react";

import Card from "../../../components/ui/Card";

const OverviewTab = ({ document }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">
          Document Overview
        </h2>

        <p className="mt-4 leading-8 text-slate-400">
          This workspace contains all AI-generated
          content related to this document.
          Generate summaries, important questions,
          flashcards, keywords and chat with your
          study material.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <Card className="p-6">

          <Files
            className="text-cyan-400"
            size={34}
          />

          <h3 className="mt-5 text-lg font-bold">
            {document.fileType
              .split("/")
              .pop()
              .toUpperCase()}
          </h3>

          <p className="text-slate-400">
            File Type
          </p>

        </Card>

        <Card className="p-6">

          <FileText
            className="text-cyan-400"
            size={34}
          />

          <h3 className="mt-5 text-lg font-bold">
            {(document.fileSize / 1024 / 1024).toFixed(
              2
            )}{" "}
            MB
          </h3>

          <p className="text-slate-400">
            File Size
          </p>

        </Card>

        <Card className="p-6">

          <Brain
            className="text-cyan-400"
            size={34}
          />

          <h3 className="mt-5 text-lg font-bold">
            {document.status}
          </h3>

          <p className="text-slate-400">
            Status
          </p>

        </Card>

        <Card className="p-6">

          <Clock
            className="text-cyan-400"
            size={34}
          />

          <h3 className="mt-5 text-lg font-bold">
            {new Date(
              document.createdAt
            ).toLocaleDateString()}
          </h3>

          <p className="text-slate-400">
            Uploaded On
          </p>

        </Card>

      </div>
    </div>
  );
};

export default OverviewTab;