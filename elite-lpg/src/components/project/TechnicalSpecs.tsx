"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/lib/content";

export function TechnicalSpecs({ project: p }: { project: Project }) {
  return (
    <section className="relative py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Техникийн үзүүлэлт"
          title="Техникийн"
          highlight="үзүүлэлтүүд"
          description="Төслийн хүрээнд суурилуулсан систем, тоног төхөөрөмжийн үндсэн үзүүлэлтүүд."
        />

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-ink/8 bg-white shadow-sm">
          {p.technicalSpecs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col gap-1 border-b border-ink/6 px-6 py-5 last:border-0 sm:flex-row sm:items-center sm:justify-between sm:px-8"
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-muted">
                {spec.label}
              </span>
              <span className="font-heading text-base font-semibold text-ink">
                {spec.value}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
