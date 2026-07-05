import clsx from "clsx";

const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={clsx(
        "w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400",
        className
      )}
      {...props}
    />
  );
};

export default Input;