import type { Locale } from "@/lib/i18n";
import { skills } from "@/lib/skills";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
            ? "هذه الأدوات والتقنيات التي أعمل بها بثقة في مشاريع Full-Stack."
            : "My current toolbox and what I’m comfortable building with as a full-stack developer."}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <Card key={group} className="rounded-2xl p-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold">{group}</h2>
              <Badge variant="secondary">{items.length}</Badge>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((s) => (
                <Badge key={s} variant="secondary">
                  {s}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
