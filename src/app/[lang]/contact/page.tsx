import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const isAr = lang === "ar";

  const subject = encodeURIComponent(
    isAr ? "فرصة عمل Full-Stack" : "Full-Stack Opportunity"
  );

  const body = encodeURIComponent(
    isAr
      ? `مرحبًا الزين،\n\nأود التحدث معك بخصوص فرصة/مشروع.\n\nتفاصيل مختصرة:\n- الشركة/العميل:\n- نوع العمل:\n- التقنيات المطلوبة:\n- المدة:\n\nشكرًا.`
      : `Hi Alzain,\n\nI'd like to discuss a role/project with you.\n\nQuick details:\n- Company/Client:\n- Type of work:\n- Required stack:\n- Timeline:\n\nThanks.`
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{isAr ? "تواصل" : "Contact"}</h1>
        <p className="pt-2 text-zinc-600 dark:text-zinc-300">
          {isAr
            ? "لو عندك فرصة عمل أو مشروع، أرسل رسالة وسأرد عليك بسرعة."
            : "If you have an opportunity or a project, send a message and I’ll reply quickly."}
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <div className="space-y-2">
          <p className="text-sm text-zinc-500">
            {isAr ? "البريد الإلكتروني" : "Email"}
          </p>
          <a
            className="text-lg font-semibold underline underline-offset-4"
            href={`mailto:${site.email}?subject=${subject}&body=${body}`}
          >
            {site.email}
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-4">
          <a
            className="underline underline-offset-4"
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {site.linkedin ? (
            <a
              className="underline underline-offset-4"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
