import { BookOpen, BrainCircuit, Sparkles } from "lucide-react";
import studybudyylogo from "../../assets/logos/studybudyy-logo.png";
const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Section */}

        <div className="relative hidden overflow-hidden border-r border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 lg:flex">

          {/* Glow */}

          <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="relative z-10 flex flex-col justify-center px-16">

            <div className="flex items-center gap-4">

              <div className="flex h-30 w-30 items-center justify-center rounded-2xl  shadow-lg">
    <img
        src={studybudyylogo}
        alt="StudyBuddy Logo"
        className="h-full w-full object-contain"
    />
</div>

              <div className ="text-left">

                <h1 className="text-4xl font-bold">
                  StudyBuddy
                </h1>

                <p className="text-slate-400">
                  AI Learning Assistant
                </p>

              </div>

            </div>

            <h2 className="mt-16 text-5xl font-bold leading-tight">

              Learn Faster.
              <br />
              Study Smarter.
              <br />

              <span className="text-cyan-400">
                Score Better.
              </span>

            </h2>

            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-400">

              Upload documents, generate summaries,
              create flashcards, ask AI questions and
              prepare for exams with one intelligent platform.

            </p>

            <div className="mt-16 space-y-8">

              <div className="flex items-center gap-4">

                <Sparkles className="text-cyan-400" />

                <span>AI Generated Summaries</span>

              </div>

              <div className="flex items-center gap-4">

                <BrainCircuit className="text-cyan-400" />

                <span>Context Aware AI Chat</span>

              </div>

              <div className="flex items-center gap-4">

                <BookOpen className="text-cyan-400" />

                <span>Flashcards & Exam Questions</span>

              </div>

            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex items-center justify-center p-8">

          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-10 backdrop-blur-xl">

            <h2 className="text-4xl font-bold">

              {title}

            </h2>

            <p className="mt-3 text-slate-400">

              {subtitle}

            </p>

            <div className="mt-10">

              {children}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthLayout;