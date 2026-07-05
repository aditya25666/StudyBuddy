import { Link } from "react-router-dom";
import Button from "../ui/Button";
import logo from "../../assets/logos/studybudyy-logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="StudyBuddy"
            className="h-25 w-25 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold text-white">
              Study
              <span className="text-cyan-400">Buddy</span>
            </h1>

            <p className="text-xs text-slate-400">
              AI Study Companion
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">

          <a
            href="#features"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            How It Works
          </a>

          <a
            href="#about"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            About
          </a>

        </nav>

        {/* Right Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <Link to="/login">
           <Button
    variant="secondary"
    onClick={() => navigate("/login")}
>

Login

</Button>
          </Link>

          <Link to="/register">
            <Button>
              Get Started
            </Button>
          </Link>

        </div>

      </div>
    </header>
  );
};

export default Navbar;