import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-zinc-700 dark:text-zinc-200">
        Want to work together or discuss a project? Email me and I’ll respond.
      </p>

      <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">Email</p>
        <a
          href={`mailto:${site.email}`}
          className="text-lg font-semibold underline underline-offset-4"
        >
          {site.email}
        </a>
      </div>
    </div>
  );
}
