import type { ReactNode } from "react";
import { isLocale, dir, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locales } from "@/lib/i18n";

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) return notFound();

  return (
    <div dir={dir(lang as Locale)}>
      <Navbar lang={lang as Locale} />
      <main className="mx-auto w-full max-w-5xl px-4 py-10">{children}</main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
