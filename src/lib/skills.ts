export type Skills = Record<string, string[]>;

export const skills: Skills = {
  Frontend: [
    "React 19",
    "Next.js",
    "React Native (Expo)",
    "TypeScript",
    "Tailwind CSS 4",
    "Shadcn UI / Radix UI",
    "TanStack Router",
    "HTML5",
    "CSS3",
    "Responsive UI",
    "Accessibility (a11y)",
    "Reanimated & Haptics",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Authentication (JWT, Clerk, Better-Auth, Next-Auth)",
    "Authorization (RBAC)",
    "Drizzle ORM",
    "Prisma",
    "Socket.io",
    "Cron Jobs / Scheduled Tasks",
  ],
  Databases: ["MongoDB", "PostgreSQL (Neon)", "SQLite", "Mongoose"],
  "DevOps & Deployment": [
    "Docker",
    "Git & GitHub",
    "CI/CD Basics",
    "Version Control",
  ],
  "Testing & Quality": [
    "Unit Testing (Basics)",
    "API Testing (Postman)",
    "Code Quality (ESLint)",
    "Debugging & Performance Optimization",
  ],
  Other: [
    "SEO Basics",
    "Real-time Applications",
    "File/Media Handling (Multer, Wavesurfer.js)",
    "Agile Workflow",
    "Problem-Solving & Analytical Thinking",
  ],
};
