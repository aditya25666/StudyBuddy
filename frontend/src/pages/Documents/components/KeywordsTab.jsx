import { Tags } from "lucide-react";

import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

const KeywordsTab = ({
  keywords,
  keywordLoading,
  keywordGenerating,
  generateKeywords,
}) => {
  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            AI Keywords
          </h2>

          <p className="mt-2 text-slate-400">
            Important concepts extracted from your
            document.
          </p>

        </div>

        {keywords.length === 0 && (
          <Button
            onClick={generateKeywords}
            disabled={keywordGenerating}
          >
            {keywordGenerating
              ? "Generating..."
              : "Generate Keywords"}
          </Button>
        )}

      </div>

      {keywordLoading ? (

        <Card className="p-12 text-center">

          <p className="text-slate-400">
            Loading Keywords...
          </p>

        </Card>

      ) : keywords.length > 0 ? (

        <Card className="p-8">

          <div className="flex flex-wrap gap-4">

            {keywords.map((keyword, index) => (

              <span
                key={index}
                className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-5 py-3 text-cyan-300"
              >
                {keyword}
              </span>

            ))}

          </div>

        </Card>

      ) : (

        <Card className="p-12 text-center">

          <Tags
            size={60}
            className="mx-auto text-cyan-400"
          />

          <h2 className="mt-6 text-2xl font-bold">
            No Keywords Yet
          </h2>

          <p className="mt-4 text-slate-400">
            Generate important keywords from your
            document.
          </p>

        </Card>

      )}

    </div>
  );
};

export default KeywordsTab;