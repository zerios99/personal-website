export type Project = {
  title: string;
  description: string;
  tech: string[];
  role?: string;
  highlights: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Inventory Dashboard",
    description:
      "A role-based dashboard for managing stock, orders, and reports with real-time charts.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    role: "Full-stack",
    highlights: [
      "RBAC authentication and protected routes",
      "Search + filters + export reports",
      "Optimized database queries",
    ],
    links: [
      { label: "Live Demo", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/your-username/repo" },
    ],
  },
  {
    title: "E-commerce SEO Content Tool",
    description:
      "Internal tool that generates SEO-friendly product content with structured templates.",
    tech: ["Next.js", "Node.js", "OpenAI", "Tailwind"],
    role: "Frontend + API",
    highlights: [
      "Reusable prompt templates",
      "Preview + copy workflow",
      "Fast UX",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/your-username/repo2" },
    ],
  },
];
