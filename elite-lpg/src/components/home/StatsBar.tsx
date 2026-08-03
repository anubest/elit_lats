"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, Users, ShieldCheck } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { homeStats } from "@/lib/content";

const icons = [Building2, Briefcase, Users, ShieldCheck];

export function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="grid grid-cols-2 overflow-hidden rounded-2xl bg-ink border border-white/10 sm:grid-cols-4 shadow-2xl"
    >
      {homeStats.map((stat, i) => {
        const Icon = icons[i % icons.length];
        const isLast = i === homeStats.length - 1;
        return (
          <div
            key={stat.label}
            className={`group flex flex-col gap-3 px-6 py-7 transition-colors duration-200 hover:bg-white/5 sm:items-start ${
              !isLast ? "border-b border-white/10 sm:border-b-0 sm:border-r" : ""
            }`}
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 transition-colors duration-200 group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </span>

            <div>
              <p className="font-heading text-3xl font-semibold leading-none text-white tabular-nums sm:text-4xl mt-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-medium text-white/50">
                {stat.label}
              </p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
