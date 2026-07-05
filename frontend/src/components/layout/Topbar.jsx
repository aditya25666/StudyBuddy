import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

const Topbar = ({
  search = "",
  setSearch = () => {},
}) => {
  const { user } = useAuth();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-6 backdrop-blur-xl">

      {/* Greeting */}

      <div>
        <h2 className="text-2xl font-bold text-white">
          {greeting},{" "}
          {user?.fullName?.split(" ")[0] || "Student"} 👋
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Ready to continue learning?
        </p>
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="hidden items-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 transition focus-within:border-cyan-500 md:flex">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-3 w-64 bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
          />

        </div>

        {/* Notification */}

        <button className="rounded-xl border border-slate-700 bg-slate-900 p-3 transition hover:border-cyan-500 hover:bg-slate-800">

          <Bell
            size={20}
            className="text-white"
          />

        </button>

        {/* Profile */}

        <button className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 transition hover:border-cyan-500 hover:bg-slate-800">

          <UserCircle
            size={32}
            className="text-cyan-400"
          />

          <div className="hidden text-left lg:block">

            <h4 className="font-semibold text-white">
              {user?.fullName || "Student"}
            </h4>

            <p className="text-xs text-slate-400">
              {user?.email || ""}
            </p>

          </div>

        </button>

      </div>

    </header>
  );
};

export default Topbar;