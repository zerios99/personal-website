import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LangSwitch from "./LangSwitch";
import { getDict } from "@/lib/dict";
import type { Locale } from "@/lib/i18n";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
  >
    {label}
  </Link>
);

export default function Navbar({ lang }: { lang: Locale }) {
  const t = getDict(lang);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href={`/${lang}`} className="font-semibold tracking-tight">
          Portfolio
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink href={`/${lang}/projects`} label={t.nav.projects} />
          <NavLink href={`/${lang}/knowledge`} label={t.nav.knowledge} />
          <NavLink href={`/${lang}/contact`} label={t.nav.contact} />
          <LangSwitch lang={lang} />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
