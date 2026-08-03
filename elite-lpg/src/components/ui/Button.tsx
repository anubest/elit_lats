import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-[0_10px_30px_-10px_rgba(244,122,32,0.55)]",
  secondary: "bg-ink text-white hover:bg-ink-2",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  "outline-light":
    "border border-white/25 text-white bg-white/5 hover:bg-white/15 backdrop-blur",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
  onClick,
  type = "button",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5",
    variants[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
