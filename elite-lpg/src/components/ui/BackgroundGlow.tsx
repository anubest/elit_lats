import { cn } from "@/lib/utils";

export function BackgroundGlow({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {variant === "light" ? (
        <>
          <div className="absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-brand/20 blur-[110px]" />
          <div className="absolute top-1/3 -left-40 h-[26rem] w-[26rem] rounded-full bg-brand-2/10 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:64px_64px]" />
        </>
      ) : (
        <>
          <div className="absolute -top-32 left-1/4 h-[34rem] w-[34rem] rounded-full bg-brand/25 blur-[130px] animate-float-slow" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute top-1/2 left-0 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-2/10 blur-[90px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px]" />
        </>
      )}
    </div>
  );
}
