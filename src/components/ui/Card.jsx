import { cn } from "./cn";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 w-full max-w-sm mx-auto transition-all duration-200",
        // Light mode
        "bg-white text-zinc-900 border border-zinc-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)]",
        // Dark mode
        "dark:bg-zinc-900/60 dark:text-white dark:border-white/20 dark:shadow-[0_10px_30px_rgba(255,255,255,0.04)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
