"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/lib/content";
import { featuredProject } from "@/lib/content";

export function MediaCoverage({ project: p = featuredProject }: { project?: Project }) {
  return (
    <section className="relative py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Media Coverage"
          title="Хэвлэл мэдээллийн"
          highlight="сурвалжлага"
          description="Төслийн үр дүн, нийгмийн ач холбогдлыг хэвлэл мэдээллийн хэрэгслүүд онцолсон."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {p.news.map((item, i) => (
            <motion.a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-ink/8 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <p className="font-heading text-2xl font-bold tracking-tight text-ink">
                {item.logoText}
              </p>
              <p className="mt-2 text-xs text-muted">
                {p.shortLabel} хийн халаалтын төслийн нийтлэл
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-dark">
                Дэлгэрэнгүй унших
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
