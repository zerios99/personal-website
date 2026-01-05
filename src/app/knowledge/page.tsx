import { skills } from "@/lib/skills";

export default function KnowledgePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tech Knowledge</h1>
      <p className="text-zinc-700 dark:text-zinc-200">
        My current toolbox and what I’m comfortable building with.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
          >
            <h2 className="font-semibold">{group}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
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
