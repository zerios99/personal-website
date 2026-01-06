import type { Locale } from "@/lib/i18n";
import { projects } from "@/lib/projects";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{isAr ? "المشاريع" : "Projects"}</h1>
        <p className="pt-2 text-zinc-600 dark:text-zinc-300">
          {isAr
            ? "مجموعة مشاريع تُظهر خبرتي كمطوّر Full-Stack من الواجهة إلى قاعدة البيانات والنشر."
            : "A selection of projects that demonstrate my full-stack skills from UI to APIs, databases, and deployment."}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              {p.role ? (
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-900">
                  {p.role}
                </span>
              ) : null}
            </div>

            <p className="pt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-900"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-4">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium underline underline-offset-4 hover:opacity-80"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
