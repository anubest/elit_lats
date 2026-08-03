"use client";

import { motion } from "framer-motion";
import { Landmark, HandCoins, HardHat, Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/lib/content";

export function ProjectOverview({ project: p }: { project: Project }) {
  const meta = [
    { icon: Landmark, label: "Захиалагч", value: p.client },
    { icon: HandCoins, label: "Хөрөнгө оруулагч", value: p.investor },
    { icon: HardHat, label: "Ерөнхий гүйцэтгэгч", value: p.generalContractor },
    { icon: Scale, label: "Хууль эрх зүйн үндэслэл", value: p.legalBasis },
  ];

  return (
    <section className="relative py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Төслийн тойм"
          title="Төслийн"
          highlight="ерөнхий тойм"
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5">
            {p.overview.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-base leading-relaxed text-muted"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="grid gap-4 content-start">
            {meta.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-5 shadow-sm"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-ink">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
