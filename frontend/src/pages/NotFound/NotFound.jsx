import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">

      <Card className="w-full max-w-2xl p-12 text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10">

          <AlertTriangle
            size={50}
            className="text-red-400"
          />

        </div>

        <h1 className="mt-8 text-7xl font-extrabold text-cyan-400">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-lg leading-7 text-slate-400">
          The page you are looking for doesn't exist or may
          have been moved. Please check the URL or return to
          the homepage.
        </p>

        <Link to="/" className="mt-10 inline-block">

          <Button size="lg">

            <Home className="mr-2 h-5 w-5" />

            Back to Home

          </Button>

        </Link>

      </Card>

    </div>
  );
};

export default NotFound;