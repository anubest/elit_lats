"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { homeStats, industryExperts } from "@/lib/content";

export function StatsSection() {
  return (
    <section className="relative py-20">
      <Container>
        <div className="grid gap-6 rounded-[2rem] border border-ink/8 bg-white p-8 shadow-sm sm:grid-cols-2 sm:p-12 lg:grid-cols-4">
          {homeStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-ink/8 sm:border-l sm:pl-6 first:sm:border-l-0 first:sm:pl-0"
            >
              <p className="font-heading text-3xl font-bold text-ink sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-8 rounded-[2rem] bg-ink/[0.03] px-8 py-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Industry Experts
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {industryExperts.map((expert) => (
              <div key={expert.name}>
                <p className="text-sm font-semibold text-ink">{expert.name}</p>
                <p className="text-xs text-muted">{expert.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
