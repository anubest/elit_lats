"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  mn: "Монгол",
  en: "English",
  zh: "中文",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <select
      value={locale}
      onChange={(e) => router.replace(pathname, { locale: e.target.value })}
      aria-label="Language"
      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[13px] font-medium text-white/70 outline-none transition-colors hover:text-white"
    >
      {routing.locales.map((l) => (
        <option key={l} value={l} className="text-ink">
          {labels[l]}
        </option>
      ))}
    </select>
  );
}
