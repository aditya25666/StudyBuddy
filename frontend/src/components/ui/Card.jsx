import clsx from "clsx";

const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;