import { Brain } from "lucide-react";

import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

const FlashcardsTab = ({
  flashcards,
  flashcardLoading,
  flashcardGenerating,
  generateFlashcards,
  currentCard,
  setCurrentCard,
  showAnswer,
  setShowAnswer,
}) => {
  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            AI Flashcards
          </h2>

          <p className="mt-2 text-slate-400">
            Learn faster with AI-generated
            flashcards.
          </p>

        </div>

        {flashcards.length === 0 && (
          <Button
            onClick={generateFlashcards}
            disabled={flashcardGenerating}
          >
            {flashcardGenerating
              ? "Generating..."
              : "Generate Flashcards"}
          </Button>
        )}

      </div>

      {flashcardLoading ? (

        <Card className="p-12 text-center">

          <p className="text-slate-400">
            Loading Flashcards...
          </p>

        </Card>

      ) : flashcards.length > 0 ? (

        <>
          <Card
            className="cursor-pointer bg-transparent shadow-none"
            onClick={() =>
              setShowAnswer((prev) => !prev)
            }
          >
            <div
              className="relative h-80 w-full transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform: showAnswer
                  ? "rotateY(180deg)"
                  : "rotateY(0deg)",
              }}
            >
              {/* Front */}

              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 p-10 text-center backdrop-blur-xl"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="text-sm uppercase tracking-widest text-cyan-400">
                  Question
                </p>

                <h2 className="mt-8 text-2xl font-semibold leading-10">
                  {flashcards[currentCard].question}
                </h2>

                <p className="mt-10 text-sm text-slate-500">
                  Click to reveal answer
                </p>
              </div>

              {/* Back */}

              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-cyan-500/40 bg-cyan-500/10 p-10 text-center backdrop-blur-xl"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="text-sm uppercase tracking-widest text-green-400">
                  Answer
                </p>

                <h2 className="mt-8 text-2xl font-semibold leading-10">
                  {flashcards[currentCard].answer}
                </h2>

                <p className="mt-10 text-sm text-slate-400">
                  Click to view question
                </p>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-between">

            <Button
              variant="secondary"
              disabled={currentCard === 0}
              onClick={() => {
                setCurrentCard(currentCard - 1);
                setShowAnswer(false);
              }}
            >
              Previous
            </Button>

            <span className="text-slate-400">
              {currentCard + 1} / {flashcards.length}
            </span>

            <Button
              disabled={
                currentCard ===
                flashcards.length - 1
              }
              onClick={() => {
                setCurrentCard(currentCard + 1);
                setShowAnswer(false);
              }}
            >
              Next
            </Button>

          </div>

        </>

      ) : (

        <Card className="p-12 text-center">

          <Brain
            size={60}
            className="mx-auto text-cyan-400"
          />

          <h3 className="mt-6 text-2xl font-bold">
            No Flashcards Yet
          </h3>

          <p className="mt-4 text-slate-400">
            Generate AI flashcards from this
            document.
          </p>

        </Card>

      )}

    </div>
  );
};

export default FlashcardsTab;