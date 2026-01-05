import Link from "next/link";
import { getDict } from "@/lib/dict";
import type { Locale } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = getDict(lang);
  const featured = projects.filter((p) => p.featured);

  const isAr = lang === "ar";

  const proof = [
    {
      title: isAr ? "أداء عالي" : "High performance",
      desc: isAr
        ? "تحسين سرعة التحميل وCore Web Vitals."
        : "Optimized loading & Core Web Vitals.",
    },
    {
      title: isAr ? "سيو عملي" : "Practical SEO",
      desc: isAr
        ? "هيكلة صفحات ومحتوى يدعم الترتيب."
        : "Structure + content for ranking.",
    },
    {
      title: isAr ? "كود نظيف" : "Clean code",
      desc: isAr
        ? "معمارية واضحة وقابلة للتوسع."
        : "Scalable architecture and clarity.",
    },
  ];

  const services = [
    {
      title: isAr ? "موقع شخصي/شركة" : "Portfolio / Business site",
      desc: isAr
        ? "تصميم احترافي، صفحات سريعة، وسيو قوي."
        : "Professional design, fast pages, strong SEO.",
    },
    {
      title: isAr ? "لوحات تحكم" : "Dashboards & Admin",
      desc: isAr
        ? "CRUD + صلاحيات + تقارير وتجربة ممتازة."
        : "CRUD, auth, reports, great UX.",
    },
    {
      title: isAr ? "متاجر ومحتوى SEO" : "E-commerce + SEO",
      desc: isAr
        ? "تحسين صفحات المنتجات وتجربة الشراء."
        : "Optimize product pages and conversion.",
    },
  ];

  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950 sm:p-12">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-zinc-200/60 blur-3xl dark:bg-zinc-800/40" />
        <div className="absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-zinc-200/60 blur-3xl dark:bg-zinc-800/40" />

        <div className="relative space-y-5">
          <Badge className="w-fit" variant="secondary">
            {t.hero.badge}
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {t.hero.headline}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            {t.hero.sub}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild>
              <Link href={`/${lang}/projects`}>{t.hero.ctaProjects}</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href={`/${lang}/contact`}>{t.hero.ctaContact}</Link>
            </Button>

            <Button variant="ghost" asChild>
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>

            {/* لو عندك ملف CV ضع الرابط هنا */}
            <Button variant="ghost" asChild>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                {t.hero.ctaResume ?? (isAr ? "السيرة الذاتية" : "Resume")}
              </a>
            </Button>
          </div>

          <div className="pt-6 text-sm text-zinc-600 dark:text-zinc-300">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              {isAr ? "التقنيات الأساسية:" : "Core stack:"}
            </span>{" "}
            Next.js • React • TypeScript • Tailwind • REST APIs • PostgreSQL
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">
            {t.sections?.proofTitle ?? (isAr ? "قيمة واضحة" : "Clear value")}
          </h2>
          <p className="pt-1 text-zinc-600 dark:text-zinc-300">
            {t.sections?.proofSub ??
              (isAr
                ? "نقاط قوة ثابتة في كل مشروع."
                : "Strengths I bring to every project.")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {proof.map((x) => (
            <Card key={x.title} className="rounded-2xl p-6">
              <p className="text-lg font-semibold">{x.title}</p>
              <p className="pt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {x.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* FEATURED PROJECTS */}
      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">
              {t.sections?.featuredTitle ??
                (isAr ? "مشاريع مختارة" : "Featured Projects")}
            </h2>
            <p className="pt-1 text-zinc-600 dark:text-zinc-300">
              {t.sections?.featuredSub ??
                (isAr
                  ? "أمثلة تُظهر الجودة والتأثير."
                  : "Examples showing quality and impact.")}
            </p>
          </div>

          <Button variant="outline" asChild className="hidden sm:inline-flex">
            <Link href={`/${lang}/projects`}>
              {isAr ? "كل المشاريع" : "All projects"}
            </Link>
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((p) => (
            <Card key={p.title} className="rounded-2xl p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <Badge variant="secondary">
                    {isAr ? "مميز" : "Featured"}
                  </Badge>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tech.slice(0, 8).map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>

                {p.metrics?.length ? (
                  <ul className="list-disc space-y-1 pl-5 pt-3 text-sm text-zinc-700 dark:text-zinc-200">
                    {p.metrics.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="flex flex-wrap gap-3 pt-4">
                  {p.links.map((l) => (
                    <Button
                      key={l.href}
                      variant="link"
                      asChild
                      className="px-0"
                    >
                      <a href={l.href} target="_blank" rel="noreferrer">
                        {l.label} →
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* SERVICES */}
      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-bold">
            {t.sections?.servicesTitle ?? (isAr ? "الخدمات" : "Services")}
          </h2>
          <p className="pt-1 text-zinc-600 dark:text-zinc-300">
            {t.sections?.servicesSub ??
              (isAr
                ? "أشياء عملية أقدر أنفذها."
                : "Practical things I can build.")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="rounded-2xl p-6">
              <p className="text-lg font-semibold">{s.title}</p>
              <p className="pt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {s.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/30 sm:p-10">
        <h2 className="text-2xl font-bold">
          {t.sections?.ctaTitle ?? (isAr ? "جاهز نبدأ؟" : "Ready to start?")}
        </h2>
        <p className="pt-2 text-zinc-600 dark:text-zinc-300">
          {t.sections?.ctaSub ??
            (isAr
              ? "أرسل التفاصيل وسأرد بخطة واضحة."
              : "Send details and I’ll reply with a clear plan.")}
        </p>
        <div className="pt-5">
          <Button asChild>
            <Link href={`/${lang}/contact`}>
              {isAr ? "تواصل الآن" : "Contact now"}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
