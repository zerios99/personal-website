import type { Locale } from "@/lib/i18n";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{isAr ? "نبذة عني" : "About"}</h1>
        <p className="pt-2 text-zinc-600 dark:text-zinc-300">
          {isAr
            ? "أنا الزين ياسر، مطوّر Full-Stack أركز على بناء تطبيقات ويب سريعة، قابلة للتوسع، ومحسّنة للأداء والسيو."
            : "I’m Alzain Yasir, a Full-Stack Developer focused on building fast, scalable, SEO-friendly web applications."}
        </p>
      </div>

      <Card className="rounded-2xl p-6">
        <h2 className="text-lg font-semibold">
          {isAr ? "ما أتميز به" : "What I do best"}
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
          <li>
            {isAr
              ? "بناء واجهات حديثة بـ Next.js/React وتجربة استخدام ممتازة."
              : "Modern UI with Next.js/React and great UX."}
          </li>
          <li>
            {isAr
              ? "تطوير REST APIs + Auth (JWT/OAuth) وربط قواعد البيانات."
              : "REST APIs + auth (JWT/OAuth) and database integration."}
          </li>
          <li>
            {isAr
              ? "تحسين الأداء، السيو، وتجهيز النشر على Vercel/Servers."
              : "Performance, SEO, and deployment readiness."}
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "PostgreSQL",
            "Tailwind",
          ].map((x) => (
            <Badge key={x} variant="secondary">
              {x}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
}
