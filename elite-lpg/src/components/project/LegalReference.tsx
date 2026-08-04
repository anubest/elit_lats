"use client";

import { motion } from "framer-motion";
import { FileText, Download, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { taxBenefitProgram as t } from "@/lib/content";

export function LegalReference() {
  return (
    <section className="relative bg-surface-warm py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Хууль эрх зүйн үндэслэл"
          title="Татварын 1%-ийн хөнгөлөлтийн"
          highlight="хөтөлбөрийн тухай"
          description="Төслийн санхүүжилтийн үндэслэл болсон ААНОАТ-ын тухай хуулийн 22.9 дэх заалттай холбоотой лавлагаа мэдээлэл."
        />

        {/* Reference infographic + legal timeline */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-72 overflow-hidden rounded-3xl border border-ink/8 bg-ink shadow-sm sm:h-96 lg:h-full"
          >
            <iframe
              src={`https://www.youtube.com/embed/${t.explainerVideoId}`}
              title={t.legalDocs[0].title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>

          <div className="flex flex-col gap-4">
            {t.legalTimeline.map((item, i) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex-1 rounded-2xl border border-ink/8 bg-white p-5 shadow-sm"
              >
                <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                  {item.date}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {item.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specific official order document */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-ink/15 bg-white/70 p-6 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">
                {t.legalOrderDoc.title}
              </p>
              <p className="mt-1 text-xs text-muted">
                Тушаалын дугаар: {t.legalOrderDoc.number} · {t.legalOrderDoc.date}
              </p>
            </div>
          </div>
          <a
            href={t.legalOrderDoc.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-brand"
          >
            <Download className="h-4 w-4" />
            PDF татах
          </a>
        </div>

        {/* Pioneer / first-mover callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex items-start gap-5 rounded-[1.75rem] border border-brand/30 bg-ink p-7 sm:p-8"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand/20 text-brand-2">
            <Award className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-2">
              Анхдагч туршлага
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {t.pioneerNote}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
