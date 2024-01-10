import { cn } from "@/lib/utils";
import Link from "next/link";

export function PrimaryButton({
  label,
  href,
  size,
  className,
}: {
  label: string;
  href: string;
  size: "sm" | "lg";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(className, "relative w-fit h-full group", {
        "py-3": size === "lg",
        "py-2 ": size === "sm",
      })}
    >
      <div className="relative z-20">
        <span
          className={cn(
            "rounded-full bg-yellow-400 group-hover:text-yellow-700 text-yellow-800 uppercase font-bold tracking-wide group-hover:bg-yellow-300 border-b-2 border-l-2 border-yellow-200 transition duration-200",
            { "px-4 py-3": size === "lg", "px-3 py-2 text-sm": size === "sm" }
          )}
        >
          {label}
        </span>
      </div>
      <div className="absolute z-10 bg-yellow-700 w-full h-full -translate-x-1 translate-y-1.5 group-hover:rotate-3 rounded-full inset-0 transition duration-200 group-hover:scale-200 border-b border-l border-yellow-200" />
    </Link>
  );
}

export function LinkButton({
  label,
  href,
  theme = "light",
  className,
}: {
  label: string;
  href: string;
  theme?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        className,
        "transition-all font-bold tracking-wide group inline-block text-sm lg:text-base",
        {
          "text-yellow-600 hover:text-yellow-500": theme === "dark",
          "text-yellow-400 hover:text-yellow-200": theme === "light",
        }
      )}
    >
      {label}
      <div className="h-1 origin-left scale-x-0 bg-yellow-500 mt-1 transition-all group-hover:scale-x-100" />
    </Link>
  );
}
