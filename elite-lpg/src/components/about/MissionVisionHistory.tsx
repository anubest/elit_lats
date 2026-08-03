"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { missionVision } from "@/lib/content";

const tabs = [
  {
    key: "mission",
    label: "Зорилго",
    title: "Агаарын бохирдлыг бууруулахад хувь нэмэр оруулах",
    body: missionVision.goal,
  },
  {
    key: "vision",
    label: "Алсын хараа",
    title: "Хийн түлшний шилжилтийг манлайлан хэрэгжүүлэгч компани",
    body: missionVision.vision,
  },
  {
    key: "history",
    label: "Танилцуулга",
    title: "2017 оноос хойш хийн түлшний салбарт",
    body: missionVision.intro,
  },
];

export function MissionVisionHistory() {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active)!;

  return (
    <section className="relative py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Бидний зарчим"
              title="Эрхэм зорилго,"
              highlight="алсын хараа"
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={cn(
                    "rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                    active === tab.key
                      ? "border-brand bg-brand text-white"
                      : "border-ink/10 bg-white text-ink/70 hover:border-brand/40 hover:text-ink"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="mt-8 rounded-3xl border border-ink/8 bg-white p-8 shadow-sm"
              >
                <h3 className="font-heading text-xl font-semibold text-ink">
                  {current.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {current.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/images/hero/demolition.jpg"
              alt="Элит Эл Пи Жи ХХК-ийн инженерийн баг талбай дээр ажиллаж буй нь"
              width={640}
              height={720}
              className="h-[420px] w-full object-cover sm:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
