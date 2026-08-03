"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { BackgroundGlow } from "@/components/ui/BackgroundGlow";
import type { Project } from "@/lib/content";

export function ProjectStats({ project: p }: { project: Project }) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-24">
      <BackgroundGlow variant="dark" />
      <Container className="relative">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {p.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-4xl font-bold text-brand sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
              </p>
              <p className="mt-3 text-sm text-white/55">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
