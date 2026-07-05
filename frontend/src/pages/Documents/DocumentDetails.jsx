import { useEffect, useState } from "react";
import {
  ArrowLeft,
  FileText,
  MessageSquare,
  BookOpen,
  HelpCircle,
  Brain,
  Tags,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

import documentService from "../../services/documentService";
import summaryService from "../../services/summaryService";
import flashcardService from "../../services/flashcardService";
import questionService from "../../services/questionService";
import keywordService from "../../services/keywordService";

// Components
import OverviewTab from "./components/OverviewTab";
import SummaryTab from "./components/SummaryTab";
import FlashcardsTab from "./components/FlashcardsTab";
import QuestionsTab from "./components/QuestionsTab";
import KeywordsTab from "./components/KeywordsTab";
import ChatTab from "./components/ChatTab";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    icon: FileText,
  },
  {
    id: "summary",
    label: "Summary",
    icon: BookOpen,
  },
  {
    id: "flashcards",
    label: "Flashcards",
    icon: Brain,
  },
  {
    id: "questions",
    label: "Exam Prep",
    icon: HelpCircle,
  },
  {
    id: "keywords",
    label: "Keywords",
    icon: Tags,
  },
  {
    id: "chat",
    label: "AI Chat",
    icon: MessageSquare,
  },
];

const DocumentDetails = () => {
  const navigate = useNavigate();
  
const { id } = useParams();

const [activeTab, setActiveTab] = useState("overview");

const [document, setDocument] = useState(null);
const [loading, setLoading] = useState(true);

/* ================= SUMMARY ================= */

const [summary, setSummary] = useState("");

const [summaryLoading, setSummaryLoading] =
  useState(false);

const [summaryGenerating, setSummaryGenerating] =
  useState(false);

/* ================= FLASHCARDS ================= */

const [flashcards, setFlashcards] = useState([]);

const [flashcardLoading, setFlashcardLoading] =
  useState(false);

const [flashcardGenerating, setFlashcardGenerating] =
  useState(false);

const [currentCard, setCurrentCard] =
  useState(0);

const [showAnswer, setShowAnswer] =
  useState(false);

/* ================= QUESTIONS ================= */

const [questions, setQuestions] =
  useState({});

const [questionLoading, setQuestionLoading] =
  useState(false);

const [questionGenerating, setQuestionGenerating] =
  useState(false);

/* ================= KEYWORDS ================= */

const [keywords, setKeywords] =
  useState([]);

const [keywordLoading, setKeywordLoading] =
  useState(false);

const [keywordGenerating, setKeywordGenerating] =
  useState(false);

useEffect(() => {
  fetchDocument();
  fetchSummary();
  fetchFlashcards();
  fetchQuestions();
  fetchKeywords();
}, [id]);



  const fetchDocument = async () => {
    try {
      setLoading(true);

      const response = await documentService.getDocument(id);

      setDocument(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSummary = async () => {
  try {
    setSummaryLoading(true);

    const response =
      await summaryService.getSummary(id);

    setSummary(response.data || "");
  } catch (error) {
    console.error(error);
  } finally {
    setSummaryLoading(false);
  }
};

const generateSummary = async () => {
  try {
    setSummaryGenerating(true);

    const response =
      await summaryService.generateSummary(id);

    setSummary(response.data);

    await fetchDocument();
  } catch (error) {
    console.error(error);

    alert("Failed to generate summary.");
  } finally {
    setSummaryGenerating(false);
  }
};

const fetchFlashcards = async () => {
  try {
    setFlashcardLoading(true);

    const response =
      await flashcardService.getFlashcards(id);

    setFlashcards(response.data || []);
  } catch (error) {
    console.error(error);
  } finally {
    setFlashcardLoading(false);
  }
};

const generateFlashcards = async () => {
  try {
    setFlashcardGenerating(true);

    const response =
      await flashcardService.generateFlashcards(id);

    setFlashcards(response.data);

    setCurrentCard(0);

    setShowAnswer(false);

    await fetchDocument();
  } catch (error) {
    console.error(error);

    alert("Failed to generate flashcards.");
  } finally {
    setFlashcardGenerating(false);
  }
};

const fetchQuestions = async () => {
  try {
    setQuestionLoading(true);

    const response =
      await questionService.getQuestions(id);

    setQuestions(response.data || []);
  } catch (error) {
    console.error(error);
  } finally {
    setQuestionLoading(false);
  }
};

const generateQuestions = async () => {
  try {
    setQuestionGenerating(true);

    const response =
      await questionService.generateQuestions(id);

    setQuestions(response.data);

    setCurrentQuestion(0);

    setShowCorrectAnswer(false);

    await fetchDocument();
  } catch (error) {
    console.error(error);

    alert("Failed to generate questions.");
  } finally {
    setQuestionGenerating(false);
  }
};

const fetchKeywords = async () => {
  try {
    setKeywordLoading(true);

    const response =
      await keywordService.getKeywords(id);

    setKeywords(response.data || []);
  } catch (error) {
    console.error(error);
  } finally {
    setKeywordLoading(false);
  }
};

const generateKeywords = async () => {
  try {
    setKeywordGenerating(true);

    const response =
      await keywordService.generateKeywords(id);

    setKeywords(response.data);

    await fetchDocument();
  } catch (error) {
    console.error(error);

    alert("Failed to generate keywords.");
  } finally {
    setKeywordGenerating(false);
  }
};

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-slate-400 text-lg">
          Loading document...
        </p>
      </div>
    );
  }

  if (!document) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-red-400 text-lg">
          Document not found.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-wrap items-center justify-between gap-4">

        <div>

          <Button
            variant="secondary"
            onClick={() => navigate("/documents")}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>

          <h1 className="mt-6 text-4xl font-bold">
            {document.originalName}
          </h1>

          <div className="mt-4 flex flex-wrap gap-4">

            <Badge>
              {document.status}
            </Badge>

            <Badge>
              {(document.fileSize / 1024 / 1024).toFixed(2)} MB
            </Badge>

            <Badge>
              {new Date(document.createdAt).toLocaleDateString()}
            </Badge>

          </div>

        </div>

      </div>

      {/* Tabs */}

      <Card className="p-3">

        <div className="flex flex-wrap gap-3">

          {tabs.map((tab) => {

            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 transition-all ${
                  activeTab === tab.id
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );

          })}

        </div>

      </Card>

      {/* Content */}

     <Card className="min-h-[500px] p-8">

  {activeTab === "overview" && (
    <OverviewTab
      document={document}
    />
  )}

  {activeTab === "summary" && (
    <SummaryTab
      summary={summary}
      summaryLoading={summaryLoading}
      summaryGenerating={summaryGenerating}
      generateSummary={generateSummary}
    />
  )}

  {activeTab === "flashcards" && (
    <FlashcardsTab
      flashcards={flashcards}
      flashcardLoading={flashcardLoading}
      flashcardGenerating={flashcardGenerating}
      generateFlashcards={generateFlashcards}
      currentCard={currentCard}
      setCurrentCard={setCurrentCard}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
    />
  )}

  {activeTab === "questions" && (
    <QuestionsTab
      questions={questions}
      questionLoading={questionLoading}
      questionGenerating={questionGenerating}
      generateQuestions={generateQuestions}
    />
  )}

  {activeTab === "keywords" && (
    <KeywordsTab
  keywords={keywords}
  keywordLoading={keywordLoading}
  keywordGenerating={keywordGenerating}
  generateKeywords={generateKeywords}
/>
  )}


  {activeTab === "chat" && (
    
   <ChatTab documentId={id}
    />
  )}

</Card>

    </div>
  );
};

export default DocumentDetails;