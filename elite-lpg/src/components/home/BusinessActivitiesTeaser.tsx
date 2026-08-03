"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hammer, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function BusinessActivitiesTeaser() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Үйл ажиллагаа
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Бидний хэрэгжүүлж буй
              <br />
              <span className="text-muted">ажлын чиглэл</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/business-activities"
              className="tech-card hover-lift group relative flex h-[400px] flex-col justify-between overflow-hidden p-10"
            >
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src="/images/hero/steel-structure.jpg"
                  alt="Үндсэн хэрэгжүүлсэн томоохон төслүүд"
                  fill
                  className="object-cover opacity-5 grayscale mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-10"
                />
              </div>

              <div className="relative z-10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-white ring-1 ring-border-dark transition-colors duration-300 group-hover:bg-brand group-hover:ring-brand">
                  <Hammer className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-8 font-heading text-2xl font-semibold text-ink">
                  Үндсэн хэрэгжүүлсэн ажил
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  ШТС, үйлдвэр, сургууль, хийн хангамжийн угсралтын 15 гаруй
                  томоохон гэрээт ажил.
                </p>
              </div>
              
              <div className="relative z-10 flex items-center text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                Дэлгэрэнгүй үзэх
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/projects#tax-projects"
              className="tech-card-dark hover-lift group relative flex h-[400px] flex-col justify-between overflow-hidden p-10"
            >
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src="/images/hero/boiler-room-completed.jpg"
                  alt="Татварын 1%-ийн хөнгөлөлтөөр хэрэгжсэн төслийн хийн зуухны систем"
                  fill
                  className="object-cover opacity-20 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
              </div>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                  Featured
                </span>
                <span className="mt-6 grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-brand group-hover:ring-brand">
                  <Sparkles className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-8 font-heading text-2xl font-semibold text-white">
                  Татварын 1%-ийн хөнгөлөлтийн төсөл
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
                  117 дугаар сургуулийн хийн халаалтын системд шилжүүлсэн
                  онцлох төсөл.
                </p>
              </div>

              <div className="relative z-10 flex items-center text-sm font-semibold text-white transition-colors group-hover:text-brand-2">
                Дэлгэрэнгүй танилцах
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
