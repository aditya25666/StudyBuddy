import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

import { useAuth } from "../../context/AuthContext";

import Button from "../ui/Button";
import Input from "../ui/Input";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await login(formData);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error Message */}

      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Email */}

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Email Address
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="pl-12"
            required
          />
        </div>
      </div>

      {/* Password */}

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="pl-12 pr-12"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Remember & Forgot */}

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-slate-400">
          <input
            type="checkbox"
            className="rounded border-slate-700 bg-slate-900"
          />

          Remember Me
        </label>

        <Link
          to="/forgot-password"
          className="text-sm text-cyan-400 hover:text-cyan-300"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Login Button */}

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full"
      >
        {loading ? "Logging In..." : "Login to StudyBuddy"}
      </Button>

      {/* Register */}

      <p className="text-center text-sm text-slate-400">
        Don't have an account?

        <Link
          to="/register"
          className="ml-2 font-medium text-cyan-400 hover:text-cyan-300"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;