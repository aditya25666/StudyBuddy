import {
  Upload,
  FileText,
  MessageSquare,
  Brain,
  HelpCircle,
  Clock3,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboardService from "../../services/dashboardService";

const quickActions = [
  {
    title: "Generate Summary",
    icon: FileText,
    description: "Create AI-powered summaries from documents.",
  },
  {
    title: "AI Chat",
    icon: MessageSquare,
    description: "Ask questions about your uploaded files.",
  },
  {
    title: "Generate Questions",
    icon: HelpCircle,
    description: "Generate theory, viva and MCQs.",
  },
  {
    title: "Flashcards",
    icon: Brain,
    description: "Revise faster with AI flashcards.",
  },
];

const Dashboard = () => {

      const navigate = useNavigate();

const [dashboard, setDashboard] = useState({
  totalDocuments: 0,
  processingDocuments: 0,
  readyDocuments: 0,
  recentDocuments: [],
});

const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchDashboard();
}, []);

const fetchDashboard = async () => {
  try {
    const response = await dashboardService.getDashboard();

    setDashboard(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="space-y-8">

      {/* Welcome */}

      <section>

        <Badge>
          <Sparkles size={16} className="mr-2" />
          AI Powered Learning
        </Badge>

        <h1 className="mt-5 text-4xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-slate-400">
          Upload your study material and let AI help you prepare for
          exams faster.
        </p>

      </section>

      {/* Top Cards */}

      <section className="grid gap-6 lg:grid-cols-2">

        {/* Upload */}

       <Card className="p-8">

  <h2 className="text-2xl font-bold">
    Dashboard Statistics
  </h2>

  <div className="mt-8 space-y-6">

    <div>

      <div className="mb-2 flex justify-between">

        <span>Total Documents</span>

        <span>{dashboard.totalDocuments}</span>

      </div>

      <div className="h-2 rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-cyan-400"
          style={{
            width: `${Math.min(
              dashboard.totalDocuments * 10,
              100
            )}%`,
          }}
        />

      </div>

    </div>

    <div>

      <div className="mb-2 flex justify-between">

        <span>Ready Documents</span>

        <span>{dashboard.readyDocuments}</span>

      </div>

      <div className="h-2 rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-green-400"
          style={{
            width: `${Math.min(
              dashboard.readyDocuments * 10,
              100
            )}%`,
          }}
        />

      </div>

    </div>

    <div>

      <div className="mb-2 flex justify-between">

        <span>Processing</span>

        <span>{dashboard.processingDocuments}</span>

      </div>

      <div className="h-2 rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-yellow-400"
          style={{
            width: `${Math.min(
              dashboard.processingDocuments * 10,
              100
            )}%`,
          }}
        />

      </div>

    </div>

  </div>

</Card>

      </section>

      {/* Quick Actions */}

      <section>

        <h2 className="mb-6 text-3xl font-bold">
          Quick Actions
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {quickActions.map((item) => {

            const Icon = item.icon;

            return (
<Card
    key={item.title}
    className="group cursor-pointer p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
    onClick={() => navigate("/documents")}
>

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">

                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />

                </div>

                <h3 className="mt-5 text-xl font-semibold">

                  {item.title}

                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">

                  {item.description}

                </p>

              </Card>

            );

          })}

        </div>

      </section>

      {/* Recent Documents */}

      {loading ? (

  <Card className="p-8 text-center">

    Loading Documents...

  </Card>

) : dashboard.recentDocuments.length === 0 ? (

  <Card className="p-8 text-center">

    <FileText
      size={52}
      className="mx-auto text-cyan-400"
    />

    <h3 className="mt-5 text-2xl font-semibold">

      No Documents Yet

    </h3>

    <p className="mt-3 text-slate-400">

      Upload your first document.

    </p>

  </Card>

) : (

  <div className="space-y-4">

    {dashboard.recentDocuments.map((doc) => (

      <Card
        key={doc._id}
        className="flex items-center justify-between p-6"
      >

        <div>

          <h3 className="font-semibold">

            {doc.originalName}

          </h3>

          <p className="mt-2 text-sm text-slate-400">

            {(doc.fileSize / 1024 / 1024).toFixed(2)} MB

          </p>

        </div>

        <Badge>

          {doc.status}

        </Badge>

      </Card>

    ))}

  </div>

)}

      {/* Recent Activity */}

      <section>

        <h2 className="mb-6 text-3xl font-bold">

          Recent Activity

        </h2>

        <Card className="flex items-center gap-4 p-6">

          <Clock3 className="text-cyan-400" />

          <p className="text-slate-400">

            No recent activity available.

          </p>

        </Card>

      </section>

    </div>
  );
};

export default Dashboard;