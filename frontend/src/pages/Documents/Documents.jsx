import { useEffect, useState } from "react";
import {
  Search,
  FileText,
  Calendar,
  Clock,
  Eye,
  Trash2,
  Download,
  Plus,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Badge from "../../components/ui/Badge";

import documentService from "../../services/documentService";

const Documents = () => {
  const navigate = useNavigate();

  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchDocuments(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const fetchDocuments = async (searchText = "") => {
    try {
      setLoading(true);

      const response = await documentService.getDocuments(searchText);

      setDocuments(response.data);
    } catch (error) {
      console.error("Failed to fetch documents:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (!confirmDelete) return;

    try {
      await documentService.deleteDocument(id);

      fetchDocuments(search);
    } catch (error) {
      console.error(error);
      alert("Failed to delete document.");
    }
  };

  const handleDownload = (id) => {
    documentService.downloadDocument(id);
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Documents
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your uploaded study material.
          </p>
        </div>

        <Button onClick={() => navigate("/documents/upload")}>
          <Plus className="mr-2 h-5 w-5" />
          Upload Document
        </Button>
      </div>

      {/* Search */}

      <Card className="p-5">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />

          <Input
            type="text"
            placeholder="Search documents..."
            className="pl-12"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </Card>

      {/* Loading */}

      {loading && (
        <Card className="p-12 text-center">
          <p className="text-slate-400">
            Loading documents...
          </p>
        </Card>
      )}

      {/* Empty State */}

      {!loading && documents.length === 0 && (
        <Card className="p-12 text-center">
          <FileText
            size={60}
            className="mx-auto text-slate-500"
          />

          <h2 className="mt-6 text-2xl font-semibold">
            No Documents Found
          </h2>

          <p className="mt-3 text-slate-400">
            Upload your first study document.
          </p>

          <Button
            className="mt-8"
            onClick={() => navigate("/documents/upload")}
          >
            Upload Document
          </Button>
        </Card>
      )}

      {/* Document List */}

      {!loading && (
        <div className="grid gap-6">
          {documents.map((doc) => (
            <Card
              key={doc._id}
              className="p-6 transition-all duration-300 hover:border-cyan-400"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-5">
                  <div className="rounded-xl bg-cyan-500/10 p-4">
                    <FileText
                      size={32}
                      className="text-cyan-400"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">
                      {doc.originalName}
                    </h2>

                    <div className="mt-2 flex flex-wrap gap-5 text-sm text-slate-400">
                      <span>
                        {(doc.fileSize / 1024 / 1024).toFixed(2)} MB
                      </span>

                      <span className="flex items-center gap-2">
                        <Calendar size={15} />
                        {new Date(doc.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Badge>
                    <Clock size={14} className="mr-2" />
                    {doc.status}
                  </Badge>

                  <button
                    onClick={() =>
                      navigate(`/documents/${doc._id}`)
                    }
                    className="rounded-xl bg-slate-800 p-3 transition hover:bg-cyan-500"
                  >
                    <Eye size={20} />
                  </button>

                  <button
                    onClick={() => handleDownload(doc._id)}
                    className="rounded-xl bg-slate-800 p-3 transition hover:bg-green-500"
                  >
                    <Download size={20} />
                  </button>

                  <button
                    onClick={() => handleDelete(doc._id)}
                    className="rounded-xl bg-slate-800 p-3 transition hover:bg-red-500"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Documents;