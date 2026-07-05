import { BookOpen } from "lucide-react";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

const SummaryTab = ({
  summary,
  summaryLoading,
  summaryGenerating,
  generateSummary,
}) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            AI Summary
          </h2>

          <p className="mt-2 text-slate-400">
            Generate an AI-powered summary of this
            document.
          </p>

        </div>

        {!summary && (
          <Button
            onClick={generateSummary}
            disabled={summaryGenerating}
          >
            {summaryGenerating
              ? "Generating..."
              : "Generate Summary"}
          </Button>
        )}

      </div>

      {summaryLoading ? (

        <Card className="p-10 text-center">

          <p className="text-slate-400">
            Loading summary...
          </p>

        </Card>

      ) : summary ? (

        <Card className="p-8">

          <div className="whitespace-pre-wrap leading-8 text-slate-300">
            {summary}
          </div>

        </Card>

      ) : (

        <Card className="p-12 text-center">

          <BookOpen
            size={60}
            className="mx-auto text-cyan-400"
          />

          <h3 className="mt-6 text-2xl font-bold">
            No Summary Yet
          </h3>

          <p className="mt-4 text-slate-400">
            Click the button above to generate an
            AI summary.
          </p>

        </Card>

      )}
    </div>
  );
};

export default SummaryTab;