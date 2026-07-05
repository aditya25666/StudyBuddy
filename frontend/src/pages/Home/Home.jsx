import {
  ArrowRight,
  Sparkles,
  FileText,
  Upload,
  BrainCircuit,
  BookOpenCheck,
  GraduationCap,
  MessageSquare,
 FileSearch,
  Brain,
  BookOpen,
  Search,
  ShieldCheck,
  Zap,
  Database,
  BrainCog,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";


import Container from "../../components/common/Container";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card";
import { useNavigate } from "react-router-dom";

const howItWorks = [
  {
    icon: Upload,
    title: "Upload Documents",
    description:
      "Upload PDFs, DOCX, PPTs, TXT files or your lecture notes in seconds.",
  },
  {
    icon: BrainCircuit,
    title: "AI Understands",
    description:
      "Our AI analyzes your documents using Retrieval-Augmented Generation (RAG).",
  },
  {
    icon: BookOpenCheck,
    title: "Generate Study Material",
    description:
      "Instantly generate summaries, flashcards, MCQs and important questions.",
  },
  {
    icon: GraduationCap,
    title: "Prepare for Exams",
    description:
      "Practice smarter with AI-generated answers and personalized revision.",
  },
];

const features = [
  {
    icon: FileText,
    title: "Upload Documents",
    description:
      "Upload PDFs, DOCX, PPT, TXT and lecture notes with support for multiple document formats.",
  },
  {
    icon: MessageSquare,
    title: "AI Chat",
    description:
      "Chat naturally with your uploaded documents and receive contextual AI-powered answers.",
  },
  {
    icon: FileSearch,
    title: "Smart Summaries",
    description:
      "Generate concise chapter-wise summaries that help you revise faster before exams.",
  },
  {
    icon: Brain,
    title: "Question Generator",
    description:
      "Automatically create theory questions, application questions, viva questions and MCQs.",
  },
  {
    icon: BookOpen,
    title: "Flashcards",
    description:
      "Generate AI-powered flashcards for quick revision and long-term retention.",
  },
  {
    icon: Search,
    title: "Semantic Search",
    description:
      "Find concepts based on meaning instead of exact keywords using Retrieval-Augmented Generation (RAG).",
  },
];

const whyStudyBuddy = [
  {
    icon: BrainCog,
    title: "RAG Powered Intelligence",
    description:
      "Answers are generated from your uploaded documents using Retrieval-Augmented Generation, reducing hallucinations and improving accuracy.",
  },
  {
    icon: BookOpen,
    title: "Exam Focused Learning",
    description:
      "Generate chapter summaries, theory questions, MCQs, viva questions and flashcards for efficient exam preparation.",
  },
  {
    icon: ShieldCheck,
    title: "Private Document Workspace",
    description:
      "Your uploaded documents remain isolated to your workspace, ensuring secure and personalized learning.",
  },
  {
    icon: Zap,
    title: "Fast Semantic Retrieval",
    description:
      "Retrieve relevant concepts instantly through AI-powered semantic search instead of relying only on keywords.",
  },
];

const Home = () => {

    const navigate = useNavigate();
  return (
    <div className="overflow-hidden bg-slate-950 text-white">
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden pt-28 pb-24">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}

            <div>
              <Badge className="mb-6">
                <Sparkles size={16} className="mr-2" />
                AI Powered Learning
              </Badge>

              <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
                Study
                <span className="text-cyan-400"> Smarter</span>
                <br />
                Score
                <span className="text-cyan-400"> Better.</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                Upload PDFs, lecture notes, textbooks and research papers.
                Chat with your study material, generate summaries,
                flashcards, MCQs and important exam questions using AI.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg">
                  Start Studying
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-10">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    PDF
                  </h3>

                  <p className="text-slate-400">
                    Multi-format Support
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    AI
                  </h3>

                  <p className="text-slate-400">
                    Powered Assistant
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-cyan-400">
                    24×7
                  </h3>

                  <p className="text-slate-400">
                    Always Available
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}

            <Card className="p-8">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/20 p-3">
                  <FileText className="text-cyan-400" />
                </div>

                <div>
                  <h2 className="font-semibold">
                    OperatingSystem.pdf
                  </h2>

                  <p className="text-sm text-slate-400">
                    Uploaded Successfully
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between rounded-xl bg-slate-800 p-4">
                  <span>Summary</span>
                  <span className="text-green-400">✓ Ready</span>
                </div>

                <div className="flex justify-between rounded-xl bg-slate-800 p-4">
                  <span>Flashcards</span>
                  <span className="text-green-400">✓ Ready</span>
                </div>

                <div className="flex justify-between rounded-xl bg-slate-800 p-4">
                  <span>Theory Questions</span>
                  <span className="text-green-400">✓ Ready</span>
                </div>

                <div className="flex justify-between rounded-xl bg-slate-800 p-4">
                  <span>MCQs</span>
                  <span className="text-green-400">✓ Ready</span>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">
                  Ask AI
                </p>

                <p className="mt-2 font-medium">
                  Explain Deadlock in simple words.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section
        id="how-it-works"
        className="py-28"
      >
        <Container>
          <div className="text-center">
            <Badge>
              How It Works
            </Badge>

            <h2 className="mt-6 text-5xl font-bold">
              Learn Smarter in
              <span className="text-cyan-400">
                {" "}4 Simple Steps
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              StudyBuddy simplifies learning with AI-powered document
              analysis, smart summaries, flashcards and personalized
              question generation.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;

              return (
                <Card
                  key={index}
                  className="group p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                    <Icon size={32} />
                  </div>

                  <span className="mt-6 block text-sm font-semibold text-cyan-400">
                    Step {index + 1}
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
            {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="py-28"
      >
        <Container>
          <div className="text-center">
            <Badge>Features</Badge>

            <h2 className="mt-6 text-5xl font-bold">
              Everything You Need to
              <span className="text-cyan-400">
                {" "}Study Smarter
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              StudyBuddy combines AI, Retrieval-Augmented Generation (RAG),
              and intelligent document analysis into one platform to help
              students learn faster, revise efficiently, and prepare
              confidently for exams.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  className="group p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500/20">
                    <Icon size={32} />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {feature.description}
                  </p>

                  <button className="mt-8 flex items-center text-cyan-400 transition group-hover:translate-x-1">
                    Learn More

                    <ArrowRight
                      size={18}
                      className="ml-2"
                    />
                  </button>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ================= WHY STUDYBUDDY ================= */}

<section className="py-28">
  <Container>

    <div className="text-center">

      <Badge>
        Why StudyBuddy?
      </Badge>

      <h2 className="mt-6 text-5xl font-bold">
        Built for
        <span className="text-cyan-400">
          {" "}Modern Learning
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        More than a document reader. StudyBuddy combines AI,
        Retrieval-Augmented Generation (RAG) and intelligent
        document understanding to make studying easier,
        faster and more effective.
      </p>

    </div>

    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {whyStudyBuddy.map((item) => {

        const Icon = item.icon;

        return (

          <Card
            key={item.title}
            className="group p-10 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

              <Icon size={34} />

            </div>

            <h3 className="mt-8 text-3xl font-bold">

              {item.title}

            </h3>

            <p className="mt-5 leading-8 text-slate-400">

              {item.description}

            </p>

          </Card>

        );

      })}

    </div>

  </Container>
</section>

{/* ================= CTA ================= */}

<section className="py-32">
  <Container>
    <Card className="relative overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-12 lg:p-20">

      {/* Background Glow */}

      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 text-center">

        <Badge>
          Start Learning Today
        </Badge>

        <h2 className="mt-8 text-5xl font-extrabold leading-tight">

          Ready to Transform
          <br />

          <span className="text-cyan-400">
            Your Learning Experience?
          </span>

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

          Upload your study material, chat with AI,
          generate summaries, flashcards and important
          questions—all in one intelligent platform.

        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
<Button
    onClick={() => navigate("/register")}
>

Get Started

</Button>
          <Button
            variant="secondary"
            size="lg"
          >
            Learn More
          </Button>

        </div>

      </div>

    </Card>
  </Container>
</section>

      
    </div>
  );
};

export default Home;