export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  metrics?: string[]; // impact bullets (professional)
  featured?: boolean;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Inventory Dashboard",
    description:
      "Role-based admin dashboard for orders, stock, and reporting with fast search and analytics.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    highlights: ["RBAC auth", "Search + filters", "Optimized queries"],
    metrics: ["Reduced report time by 60%", "1s average search response"],
    featured: true,
    links: [
      { label: "Live", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/your-username/repo" },
    ],
  },
  {
    title: "E-commerce SEO Content Tool",
    description:
      "Internal tool to generate SEO-friendly product content with templates and quality checks.",
    tech: ["Next.js", "Node.js", "OpenAI", "Tailwind"],
    highlights: ["Reusable templates", "Preview + copy workflow", "Fast UX"],
    metrics: ["Cut content creation time by 70%"],
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com/your-username/repo2" },
    ],
  },
];
