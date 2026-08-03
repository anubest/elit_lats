"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-ink/8 bg-white p-14 text-center shadow-sm"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="font-heading text-xl font-semibold text-ink">
          Хүсэлт амжилттай илгээгдлээ
        </h3>
        <p className="max-w-xs text-sm text-muted">
          Манай инженерүүд удахгүй тантай холбогдох болно.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-ink/8 bg-white p-8 shadow-sm sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted">
            Нэр
          </label>
          <input
            required
            type="text"
            placeholder="Таны нэр"
            className="rounded-xl border border-ink/10 bg-surface-warm px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted">
            Утасны дугаар
          </label>
          <input
            required
            type="tel"
            placeholder="99XX XXXX"
            className="rounded-xl border border-ink/10 bg-surface-warm px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted">
            И-мэйл
          </label>
          <input
            required
            type="email"
            placeholder="name@company.mn"
            className="rounded-xl border border-ink/10 bg-surface-warm px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
          />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted">
            Мессеж
          </label>
          <textarea
            required
            rows={5}
            placeholder="Таны хүсэлт, асуултыг бичнэ үү"
            className="rounded-xl border border-ink/10 bg-surface-warm px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
          />
        </div>
      </div>
      <div className="mt-6">
        <Button type="submit" showArrow={false} className="w-full justify-center sm:w-auto">
          <span className="flex items-center gap-2">
            Илгээх <Send className="h-4 w-4" />
          </span>
        </Button>
      </div>
    </form>
  );
}
