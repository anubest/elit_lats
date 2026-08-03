"use client";

import { motion } from "framer-motion";
import {
  Users,
  BadgeCheck,
  Factory,
  ShieldAlert,
  Leaf,
  LifeBuoy,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/content";

const icons = [Users, BadgeCheck, Factory, ShieldAlert, Leaf, LifeBuoy];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40" />
      
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Яагаад биднийг сонгох вэ"
          title="Инженерингийн итгэлтэй"
          highlight="түнш"
          description="Аюулгүй ажиллагаа, чанар, найдвартай гүйцэтгэлийг эрхэмлэдэг баг."
          align="center"
          dark
          className="mx-auto"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="tech-card-dark hover-lift group relative flex flex-col justify-between p-8"
              >
                {/* Number indicator */}
                <div className="absolute right-6 top-6 text-3xl font-heading font-bold text-white/5 transition-colors duration-300 group-hover:text-white/10">
                  0{i + 1}
                </div>

                <div>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-white group-hover:text-ink">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>

                  <h3 className="mt-8 font-heading text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
