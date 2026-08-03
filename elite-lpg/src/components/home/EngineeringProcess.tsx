"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Wrench, HardHat, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BackgroundGlow } from "@/components/ui/BackgroundGlow";

const steps = [
  { icon: Search, title: "Судалгаа", desc: "Одоо байгаа систем, шаардлагыг үнэлнэ." },
  { icon: PenTool, title: "Зураг төсөл", desc: "Инженерийн тооцоо, шийдлийг боловсруулна." },
  { icon: Wrench, title: "Бэлтгэл", desc: "Тоног төхөөрөмж, зөвшөөрлийг бэлтгэнэ." },
  { icon: HardHat, title: "Угсралт", desc: "Мэргэшсэн багаараа гүйцэтгэнэ." },
  { icon: CheckCircle2, title: "Хүлээлгэн өгөх", desc: "Турших, комисс, ашиглалтад оруулна." },
];

export function EngineeringProcess() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-28">
      <BackgroundGlow variant="dark" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-2">
            Ажлын үе шат
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            Судалгаанаас хүлээлгэн өгөх хүртэл{" "}
            <span className="text-brand">саадгүй үйл явц</span>
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-5">
          <div className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-white/15 sm:block" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-[0_0_0_8px_rgba(16,20,26,1)]">
                <step.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-sm font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/50">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
