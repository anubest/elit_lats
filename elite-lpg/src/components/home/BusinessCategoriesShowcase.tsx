"use client";

import Image from "next/image";
import { Hammer, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";

export function BusinessCategoriesShowcase() {
  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/business-activities#major-projects"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-ink p-10 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(255,255,255,0.1)]"
            >
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src="/images/hero/steel-structure.jpg"
                  alt="Үндсэн хэрэгжүүлсэн томоохон төслүүд"
                  fill
                  className="object-cover opacity-25 transition-opacity duration-500 group-hover:opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
              </div>

              <div className="relative">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-[0_0_20px_rgba(244,122,32,0.3)] ring-1 ring-white/20">
                  <Hammer className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h2 className="mt-8 font-heading text-2xl font-semibold text-white">
                  ҮЙЛ АЖИЛЛАГААНЫ ЧИГЛЭЛ
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                  ХИЙН ХАНГАМЖИЙН ЦОГЦ ШИЙДЭЛ
                </p>
              </div>

              <div className="relative mt-10 flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
                <span className="text-sm font-semibold text-white">
                  Дэлгэрэнгүй үзэх
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
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
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border-2 border-brand/40 bg-ink p-10 shadow-[0_30px_80px_-30px_rgba(244,122,32,0.5)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src="/images/hero/boiler-room-completed.jpg"
                  alt="Татварын 1%-ийн хөнгөлөлтөөр хэрэгжсэн төслийн хийн зуухны систем"
                  fill
                  className="object-cover opacity-25 transition-opacity duration-500 group-hover:opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
              </div>

              <div className="relative">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-[0_0_20px_rgba(244,122,32,0.3)] ring-1 ring-white/20">
                  <Sparkles className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h2 className="mt-8 font-heading text-2xl font-semibold text-white">
                  Татварын 1%-ийн хөнгөлөлтөөр хэрэгжүүлсэн төсөл
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                  ААНОАТ-ын тухай хуулийн 22.9 дэх заалтын хүрээнд, нийгмийн
                  хариуцлагын хөрөнгө оруулалтаар хэрэгжүүлсэн, 117 дугаар
                  сургуулийн хийн халаалтын систем рүү шилжсэн онцлох төсөл.
                </p>
              </div>

              <div className="relative mt-10 flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
                <span className="text-sm font-semibold text-white">
                  Дэлгэрэнгүй танилцах
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
