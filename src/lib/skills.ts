export type Skills = Record<string, string[]>;

export const skills: Skills = {
  Frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Responsive UI",
    "Accessibility (a11y)",
  ],
  Backend: [
    "Node.js",
    "Express",
    "REST APIs",
    "Authentication (JWT)",
    "Authorization (RBAC)",
  ],
  Databases: ["MongoDB", "PostgreSQL", "Prisma", "Mongoose"],
  "DevOps & Deployment": [
    "Linux",
    "Git & GitHub",
    "Vercel",
    "Docker (Basics)",
    "CI/CD (Basics)",
  ],
  "Testing & Quality": [
    "Unit Testing (Basics)",
    "API Testing (Postman)",
    "Code Quality (ESLint)",
  ],
  Other: ["SEO Basics", "Performance Optimization", "Debugging"],
};
