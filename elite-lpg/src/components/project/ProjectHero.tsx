"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Building2, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import type { Project } from "@/lib/content";

export function ProjectHero({ project: p }: { project: Project }) {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pb-16 pt-40">
      <div className="absolute inset-0">
        <Image
          src={p.heroImage}
          alt={p.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
      </div>
      <div className="pointer-events-none absolute -top-10 left-0 h-[30rem] w-[30rem] rounded-full bg-brand/25 blur-[130px]" />

      <Container className="relative">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 flex items-center gap-1.5 text-xs font-medium text-white/45"
        >
          <Link href="/" className="hover:text-white">
            Нүүр
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/projects" className="hover:text-white">
            Төслүүд
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-2">{p.shortLabel}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-2 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {p.subtitle}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl font-heading text-3xl font-semibold leading-[1.15] text-white sm:text-4xl lg:text-5xl"
        >
          {p.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-8 border-t border-white/10 pt-6 text-sm text-white/60"
        >
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand" />
            {p.location}
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-brand" />
            Ерөнхий гүйцэтгэгч: {p.generalContractor}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
