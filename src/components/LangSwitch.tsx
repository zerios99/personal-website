"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export default function LangSwitch({ lang }: { lang: Locale }) {
  const pathname = usePathname(); // e.g. /en/projects
  const other = lang === "en" ? "ar" : "en";

  const parts = pathname.split("/");
  // parts[0] = "", parts[1] = current lang
  parts[1] = other;
  const nextPath = parts.join("/") || `/${other}`;

  return (
    <Link
      href={nextPath}
      className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900"
      aria-label="Switch language"
    >
      {other === "ar" ? "العربية" : "English"}
    </Link>
  );
}
