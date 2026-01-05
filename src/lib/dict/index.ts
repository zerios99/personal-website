import type { Locale } from "@/lib/i18n";
import { en } from "@/lib/dict/en";
import { ar } from "@/lib/dict/ar";

export function getDict(lang: Locale) {
  return lang === "ar" ? ar : en;
}
