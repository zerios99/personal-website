import type { Locale } from "@/lib/i18n";
import { skills } from "@/lib/skills";

export default async function KnowledgePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          {isAr ? "المهارات التقنية" : "Tech Knowledge"}
        </h1>
        <p className="pt-2 text-zinc-600 dark:text-zinc-300">
          {isAr
            ? "هذه الأدوات والتقنيات التي أستخدمها في تطوير تطبيقات Full-Stack."
            : "My current toolbox and what I’m comfortable building with as a full-stack developer."}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-semibold">{group}</h2>
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-900">
                {items.length}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-900"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
