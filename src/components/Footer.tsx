import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-zinc-600 dark:text-zinc-300">
        <div className="flex flex-wrap gap-4">
          <a
            className="underline underline-offset-4"
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="underline underline-offset-4"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="underline underline-offset-4"
            href={`mailto:${site.email}`}
          >
            Email
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
