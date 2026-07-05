const Spinner = ({ className = "" }) => {
  return (
    <div
      className={`h-6 w-6 animate-spin rounded-full border-4 border-slate-600 border-t-cyan-400 ${className}`}
    />
  );
};

export default Spinner;