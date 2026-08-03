"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Timeline({
  items,
  dark = false,
}: {
  items: { phase: string; desc: string; year?: string }[];
  dark?: boolean;
}) {
  return (
    <div className="relative">
      <div
        className={cn(
          "absolute left-0 right-0 top-[26px] hidden h-px lg:block",
          dark ? "bg-white/10" : "bg-ink/10"
        )}
      />
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.phase}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="flex items-center gap-3 lg:block">
              <span
                className={cn(
                  "relative z-10 grid h-[52px] w-[52px] shrink-0 place-items-center rounded-2xl font-heading text-base font-bold",
                  dark
                    ? "bg-brand text-white shadow-[0_0_0_6px_rgba(16,20,26,1)]"
                    : "bg-brand text-white shadow-[0_0_0_6px_#f7f6f3]"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.year && (
                <span
                  className={cn(
                    "text-xs font-semibold uppercase tracking-wider lg:mt-4 lg:block",
                    dark ? "text-brand-2" : "text-brand-dark"
                  )}
                >
                  {item.year}
                </span>
              )}
            </div>
            <h4
              className={cn(
                "mt-4 font-heading text-base font-semibold",
                dark ? "text-white" : "text-ink"
              )}
            >
              {item.phase}
            </h4>
            <p
              className={cn(
                "mt-2 text-sm leading-relaxed",
                dark ? "text-white/55" : "text-muted"
              )}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
