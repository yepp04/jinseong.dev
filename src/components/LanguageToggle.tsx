"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { routing } from "@/i18n/routing";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "ko" ? "en" : "ko";
    document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-all disabled:opacity-50"
      aria-label="Toggle language"
    >
      {locale === "ko" ? "EN" : "KO"}
    </button>
  );
}
