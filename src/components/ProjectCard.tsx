import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-5 shadow-sm dark:border-zinc-800">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-900"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="list-disc space-y-1 pl-5 pt-3 text-sm text-zinc-700 dark:text-zinc-200">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-4">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4 hover:opacity-80"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
