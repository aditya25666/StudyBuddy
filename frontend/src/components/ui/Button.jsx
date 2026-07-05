import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg shadow-cyan-500/20",

    secondary:
      "border border-slate-700 bg-transparent text-white hover:border-cyan-400 hover:text-cyan-400",

    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",

    danger:
      "bg-red-500 text-white hover:bg-red-600",

    ghost:
      "text-slate-300 hover:bg-slate-800",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3",
    lg: "px-7 py-4 text-lg",
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;