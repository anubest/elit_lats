"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ClipboardList,
  Wrench,
  Gauge,
  Sparkles,
  Leaf,
  ShieldCheck,
  Trophy,
  Rocket,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const iconMap = {
  goal: ClipboardList,
  scope: Wrench,
  engineering: Gauge,
  benefits: Sparkles,
  environmental: Leaf,
  safety: ShieldCheck,
  result: Trophy,
  future: Rocket,
} as const;

export type DetailIconKey = keyof typeof iconMap;

export function DetailListSection({
  eyebrow,
  title,
  highlight,
  description,
  items,
  icon,
  dark = false,
  columns = 1,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  items: string[];
  icon?: DetailIconKey;
  dark?: boolean;
  columns?: 1 | 2;
}) {
  const Icon = icon ? iconMap[icon] : undefined;
  return (
    <section
      className={cn(
        "relative py-20 lg:py-24",
        dark && "bg-ink text-white"
      )}
    >
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          description={description}
          dark={dark}
        />

        <div
          className={cn(
            "mt-10 grid gap-4",
            columns === 2 && "sm:grid-cols-2"
          )}
        >
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={cn(
                "flex items-start gap-4 rounded-2xl border p-5",
                dark
                  ? "border-white/10 bg-white/5"
                  : "border-ink/8 bg-white shadow-sm"
              )}
            >
              <span
                className={cn(
                  "grid h-9 w-9 shrink-0 place-items-center rounded-xl",
                  dark ? "bg-brand/20 text-brand-2" : "bg-brand/10 text-brand"
                )}
              >
                {Icon ? <Icon className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
              </span>
              <p
                className={cn(
                  "text-sm leading-relaxed",
                  dark ? "text-white/70" : "text-ink/75"
                )}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
