export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}

export function dir(lang: Locale) {
  return lang === "ar" ? "rtl" : "ltr";
}
