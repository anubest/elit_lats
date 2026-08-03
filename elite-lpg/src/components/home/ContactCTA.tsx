"use client";

import { motion } from "framer-motion";
import { HardHat, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/content";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="tech-card-dark relative flex flex-col items-center gap-10 p-10 sm:flex-row sm:justify-between sm:p-16 lg:p-20"
        >
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-white/5 text-white ring-1 ring-white/10">
              <HardHat className="h-10 w-10 text-white" strokeWidth={1.5} />
            </span>
            <div>
              <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Таны төслийг хамтдаа <span className="text-white/40">хэрэгжүүлье</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
                Хийн хангамж, LPG систем, барилгын халаалтын шийдэл хэрэгтэй
                бол манай мэргэшсэн инженерүүдтэй холбогдоорой.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <Button href="/contact" className="h-12 px-6">
              Холбоо барих
            </Button>
            <Button href={`tel:${company.phone.split(",")[0].trim()}`} variant="outline-light" showArrow={false} className="h-12 px-6">
              <PhoneCall className="mr-2 h-4 w-4 text-white/70" />
              {company.phone.split(",")[0].trim()}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
