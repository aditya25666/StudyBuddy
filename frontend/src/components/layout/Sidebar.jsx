import {
  LayoutDashboard,
  FileText,
  Settings,
  LogOut,
  BookOpen,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import studybudyylogo from "../../assets/logos/studybudyy-logo.png";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Documents",
    icon: FileText,
    path: "/documents",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-slate-800 bg-slate-900 lg:flex lg:flex-col">

      {/* Logo */}

      <div className="flex items-center gap-3 border-b border-slate-800 px-8 py-7">

       
                     <div className="flex h-20 w-20 items-center justify-center rounded-2xl  shadow-lg">
           <img
               src={studybudyylogo}
               alt="StudyBuddy Logo"
               className="h-full w-full object-contain"
           />
       </div>
       

        <div>

          <h1 className="text-2xl font-bold text-white">
            StudyBuddy
          </h1>

          <p className="text-sm text-slate-400">
            AI Learning Assistant
          </p>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 px-4 py-8">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >

              <Icon size={22} />

              <span className="font-medium">

                {item.title}

              </span>

            </NavLink>

          );
        })}

      </nav>

      {/* Bottom */}

      <div className="border-t border-slate-800 p-5">

        <button className="flex w-full items-center gap-4 rounded-xl px-5 py-4 text-slate-400 transition hover:bg-red-500 hover:text-white">

          <LogOut size={22} />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;