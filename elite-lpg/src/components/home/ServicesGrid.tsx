"use client";

import { motion } from "framer-motion";
import { Flame, Building2, Factory, Wrench, Ruler, ClipboardCheck, Lightbulb, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const services = [
  {
    icon: Flame,
    title: "Хийн хангамжийн угсралт",
    desc: "LPG систем, шугам хоолойн угсралт, холболтын иж бүрэн ажил.",
  },
  {
    icon: Building2,
    title: "Барилга, байгууламжийн халаалт",
    desc: "Орон сууц, оффис, худалдааны төв, үйлдвэрийн барилга байгууламжийн халаалтыг хийн зуухаар шийдэх.",
  },
  {
    icon: Factory,
    title: "Үйлдвэрийн хийн хангамж",
    desc: "Үйлдвэрийн дулаан хангамж, уурын зуухны технологийн угсралт.",
  },
  {
    icon: Wrench,
    title: "Засвар, техникийн үйлчилгээ",
    desc: "Тогтмол засвар, техникийн үзлэг, аюулгүй ажиллагааны хяналт.",
  },
  {
    icon: Ruler,
    title: "Зураг төсөл боловсруулах",
    desc: "Инженерийн тооцоо, зураг төсөл, зохиогчийн хяналтын ажил.",
  },
  {
    icon: ClipboardCheck,
    title: "Төслийн менежмент",
    desc: "Судалгаанаас ашиглалт хүртэлх бүрэн хяналт, зохион байгуулалт.",
  },
  {
    icon: Lightbulb,
    title: "Зөвлөн туслах үйлчилгээ",
    desc: "Хийн хангамж, халаалтын систем сонгох, төлөвлөхөд мэргэжлийн зөвлөгөө өгөх.",
  },
  {
    icon: ShieldCheck,
    title: "Аюулгүй ажиллагааны зааварчилгаа, сургалт, сертификат олгох",
    desc: "Ажилтнуудад зориулсан аюулгүй ажиллагааны зааварчилгаа, сургалт явуулж, гэрчилгээ олгох.",
  },
];

export function ServicesGrid() {
  return (
    <section className="relative py-24 sm:py-32 bg-surface-warm">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          {/* Left: Heading */}
          <div className="lg:sticky lg:top-32">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-widest text-brand"
            >
              Бидний үйлчилгээ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 font-heading text-3xl font-semibold leading-tight text-ink sm:text-4xl"
            >
              Таны хэрэгцээнд тохирсон
              <br />
              <span className="text-muted">хийн хангамжийн шийдэл</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-sm leading-relaxed text-muted max-w-sm"
            >
              Судалгаанаас эхлээд ашиглалтад хүлээлгэн өгөх хүртэлх бүрэн
              инженерингийн үйлчилгээг нэг цэгээс үзүүлдэг.
            </motion.p>
          </div>

          {/* Right: Service cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="tech-card hover-lift group relative p-6 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-surface-warm text-ink ring-1 ring-border transition-colors duration-300 group-hover:bg-ink group-hover:text-white group-hover:ring-ink">
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-ink" />
                </div>

                <h3 className="mt-6 font-heading text-sm font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
