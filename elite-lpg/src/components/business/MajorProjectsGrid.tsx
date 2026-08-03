"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { majorProjects } from "@/lib/content";

export function MajorProjectsGrid({ limit }: { limit?: number }) {
  const items = limit ? majorProjects.slice(0, limit) : majorProjects;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((p, i) => (
        <motion.div
          key={`${p.year}-${p.title}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
          className="group overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_25px_50px_-20px_rgba(244,122,32,0.35)]"
        >
          <div
            className={cn(
              "relative h-44 w-full overflow-hidden",
              p.imageType === "logo" ? "bg-surface-warm" : "bg-ink/5"
            )}
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              className={cn(
                "transition-transform duration-700 group-hover:scale-110",
                p.imageType === "logo" ? "object-contain p-8" : "object-cover"
              )}
              sizes="(max-width: 640px) 100vw, 25vw"
            />
            {p.imageType === "photo" && (
              <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
            )}
            <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-[11px] font-bold text-white shadow">
              {p.year}
            </span>
            <span className="absolute right-3 top-3 rounded-full bg-brand/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              {p.category}
            </span>
          </div>

          <div className="p-5">
            <h3 className="font-heading text-sm font-semibold leading-snug text-ink">
              {p.title}
            </h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
              <MapPin className="h-3 w-3 shrink-0 text-brand" />
              {p.client}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-ink/60 line-clamp-3">
              {p.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
