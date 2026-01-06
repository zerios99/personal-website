export type Project = {
  title: string;
  description: string;
  tech: string[];
  role?: string;
  highlights: string[];
  metrics?: string[]; // impact bullets (professional)
  featured?: boolean;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "kud-chatApp",
    description:
      "Chat web application with role-based access control, real-time messaging, and advanced search functionality.",
    tech: ["React.js", "TypeScript", "MongoDB", "Tailwind"],
    highlights: ["RBAC auth", "Search + filters", "Optimized queries"],
    metrics: ["Reduced report time by 60%", "1s average search response"],
    featured: true,
    links: [
      { label: "Live", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/your-username/repo" },
    ],
  },
  {
    title: "z-markit E-commerce",
    description:
      "Internal tool to generate SEO-friendly product content with templates and quality checks.",
    tech: ["Next.js", "Node.js", "Tailwind"],
    highlights: ["Reusable templates", "Preview + copy workflow", "Fast UX"],
    metrics: ["Cut content creation time by 70%"],
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com/your-username/repo2" },
    ],
  },
];
