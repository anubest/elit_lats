"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/content";

export function ProjectGallery({ project: p }: { project: Project }) {
  const categories = ["Бүгд", ...Array.from(new Set(p.gallery.map((g) => g.category)))];
  const [filter, setFilter] = useState("Бүгд");
  const items =
    filter === "Бүгд" ? p.gallery : p.gallery.filter((g) => g.category === filter);

  return (
    <section className="relative py-20 lg:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Ажлын явцын цомог"
            title="Project Gallery —"
            highlight="ажлын явц"
            description="Судалгаанаас эхлээд ашиглалтад хүлээлгэн өгөх хүртэлх бодит зургууд."
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
                  filter === cat
                    ? "border-brand bg-brand text-white"
                    : "border-ink/10 bg-white text-ink/60 hover:border-brand/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-3xl border border-ink/8 bg-white shadow-sm"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    {item.category}
                  </span>
                </div>
                <p className="p-5 text-sm leading-relaxed text-muted">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
