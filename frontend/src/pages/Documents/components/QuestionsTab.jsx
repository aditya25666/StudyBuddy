import { useState } from "react";
import { HelpCircle } from "lucide-react";

import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

const QuestionsTab = ({
  questions,
  questionLoading,
  questionGenerating,
  generateQuestions,
}) => {
  const [tab, setTab] = useState("theory");

  const [theoryIndex, setTheoryIndex] = useState(0);
  const [vivaIndex, setVivaIndex] = useState(0);
  const [mcqIndex, setMcqIndex] = useState(0);

  const [showAnswer, setShowAnswer] = useState(false);

  const hasQuestions =
    questions &&
    (
      questions.theory?.length ||
      questions.viva?.length ||
      questions.mcqs?.length
    );

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            AI Exam Preparation
          </h2>

          <p className="mt-2 text-slate-400">
            Theory Questions, Viva Questions and
            MCQs generated from your document.
          </p>

        </div>

        {!hasQuestions && (
          <Button
            onClick={generateQuestions}
            disabled={questionGenerating}
          >
            {questionGenerating
              ? "Generating..."
              : "Generate Questions"}
          </Button>
        )}

      </div>

      {/* Loading */}

      {questionLoading && (
        <Card className="p-12 text-center">

          <p className="text-slate-400">
            Loading Questions...
          </p>

        </Card>
      )}

      {/* Empty */}

      {!questionLoading && !hasQuestions && (

        <Card className="p-12 text-center">

          <HelpCircle
            size={60}
            className="mx-auto text-cyan-400"
          />

          <h2 className="mt-6 text-2xl font-bold">
            No Questions Yet
          </h2>

          <p className="mt-4 text-slate-400">
           AI Generated Exam Questions.
          </p>

        </Card>

      )}

      {/* Content */}

      {hasQuestions && (

        <>

          {/* Tabs */}

          <div className="flex gap-3">

            <Button
              variant={
                tab === "theory"
                  ? "primary"
                  : "secondary"
              }
              onClick={() => setTab("theory")}
            >
              Theory
            </Button>

            <Button
              variant={
                tab === "viva"
                  ? "primary"
                  : "secondary"
              }
              onClick={() => setTab("viva")}
            >
              Viva
            </Button>

            <Button
              variant={
                tab === "mcqs"
                  ? "primary"
                  : "secondary"
              }
              onClick={() => setTab("mcqs")}
            >
              MCQs
            </Button>

          </div>

          {/* THEORY */}

          {tab === "theory" && (

            <Card className="p-8">

              <h2 className="text-2xl font-semibold">

                {
                  questions.theory[
                    theoryIndex
                  ].question
                }

              </h2>

              <p className="mt-8 whitespace-pre-wrap leading-8 text-slate-300">

                {
                  questions.theory[
                    theoryIndex
                  ].answer
                }

              </p>

              <div className="mt-10 flex items-center justify-between">

                <Button
                  variant="secondary"
                  disabled={theoryIndex === 0}
                  onClick={() =>
                    setTheoryIndex(
                      theoryIndex - 1
                    )
                  }
                >
                  Previous
                </Button>

                <span>

                  {theoryIndex + 1} /
                  {questions.theory.length}

                </span>

                <Button
                  disabled={
                    theoryIndex ===
                    questions.theory.length - 1
                  }
                  onClick={() =>
                    setTheoryIndex(
                      theoryIndex + 1
                    )
                  }
                >
                  Next
                </Button>

              </div>

            </Card>

          )}

          {/* VIVA */}

          {tab === "viva" && (

            <Card className="p-8">

              <h2 className="text-2xl font-semibold">

                {
                  questions.viva[
                    vivaIndex
                  ].question
                }

              </h2>

              <p className="mt-8 whitespace-pre-wrap leading-8 text-slate-300">

                {
                  questions.viva[
                    vivaIndex
                  ].answer
                }

              </p>

              <div className="mt-10 flex items-center justify-between">

                <Button
                  variant="secondary"
                  disabled={vivaIndex === 0}
                  onClick={() =>
                    setVivaIndex(
                      vivaIndex - 1
                    )
                  }
                >
                  Previous
                </Button>

                <span>

                  {vivaIndex + 1} /
                  {questions.viva.length}

                </span>

                <Button
                  disabled={
                    vivaIndex ===
                    questions.viva.length - 1
                  }
                  onClick={() =>
                    setVivaIndex(
                      vivaIndex + 1
                    )
                  }
                >
                  Next
                </Button>

              </div>

            </Card>

          )}

          {/* MCQs */}

          {tab === "mcqs" && (

            <Card className="p-8">

              <h2 className="text-2xl font-semibold">

                {
                  questions.mcqs[
                    mcqIndex
                  ].question
                }

              </h2>

              <div className="mt-8 space-y-4">

                {questions.mcqs[
                  mcqIndex
                ].options.map(
                  (option, index) => (

                    <div
                      key={index}
                      className="rounded-xl border border-slate-700 p-4"
                    >
                      {option}
                    </div>

                  )
                )}

              </div>

              {!showAnswer ? (

                <Button
                  className="mt-8"
                  onClick={() =>
                    setShowAnswer(true)
                  }
                >
                  Show Answer
                </Button>

              ) : (

                <Card className="mt-8 border-green-500 p-5">

                  <span className="font-semibold text-green-400">
                    Correct Answer
                  </span>

                  <p className="mt-2">

                    {
                      questions.mcqs[
                        mcqIndex
                      ].answer
                    }

                  </p>

                </Card>

              )}

              <div className="mt-10 flex items-center justify-between">

                <Button
                  variant="secondary"
                  disabled={mcqIndex === 0}
                  onClick={() => {
                    setMcqIndex(mcqIndex - 1);
                    setShowAnswer(false);
                  }}
                >
                  Previous
                </Button>

                <span>

                  {mcqIndex + 1} /
                  {questions.mcqs.length}

                </span>

                <Button
                  disabled={
                    mcqIndex ===
                    questions.mcqs.length - 1
                  }
                  onClick={() => {
                    setMcqIndex(mcqIndex + 1);
                    setShowAnswer(false);
                  }}
                >
                  Next
                </Button>

              </div>

            </Card>

          )}

        </>

      )}

    </div>
  );
};

export default QuestionsTab;