<Card
  className="cursor-pointer bg-transparent shadow-none"
  onClick={() => setShowAnswer((prev) => !prev)}
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