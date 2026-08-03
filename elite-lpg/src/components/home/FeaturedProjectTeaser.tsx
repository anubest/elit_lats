"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, CalendarCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { featuredProject as p } from "@/lib/content";

export function FeaturedProjectTeaser() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-24 right-0 h-[30rem] w-[30rem] rounded-full bg-brand/15 blur-[140px]" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[320px] overflow-hidden rounded-[2rem] sm:h-[420px]"
          >
            <Image src={p.heroImage} alt={p.title} fill className="object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            <div className="absolute inset-x-0 bottom-0 flex gap-6 bg-gradient-to-t from-ink/90 to-transparent p-6 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-brand" />
                Чингэлтэй дүүрэг
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarCheck className="h-3.5 w-3.5 text-brand" />
                Ашиглалтад орсон
              </span>
            </div>
          </motion.div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-2">
              Онцлох төсөл
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              117-р сургуулийн хийн халаалтын{" "}
              <span className="text-brand">шинэчлэлийн төсөл</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {p.overview[0].slice(0, 200)}…
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {p.goal.slice(0, 4).map((g, i) => (
                <motion.li
                  key={g}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-2 text-xs leading-relaxed text-white/70"
                >
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                  {g}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:grid-cols-4">
              {p.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-xl font-bold text-brand">
                    {s.value}
                    {s.suffix}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-tight text-white/45">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href={`/projects/${p.slug}`}>Бүтэн төслийг үзэх</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
