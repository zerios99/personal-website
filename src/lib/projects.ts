export type Project = {
  title: string;
  description: string;
  tech: string[];
  role?: string;
  highlights: string[];
  metrics?: string[];
  featured?: boolean;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Kud - Real-Time Chat & Media App",
    description:
      "Real-time chat web application with file/media sharing, voice note visualization, and secure JWT authentication.",
    tech: [
      "React 19",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Zustand",
      "Shadcn UI",
      "Wavesurfer.js",
      "Multer",
    ],
    highlights: [
      "Instant bi-directional messaging with live user status",
      "Interactive voice note visualization",
      "Secure file/media uploads",
      "JWT-based authentication with HttpOnly cookies",
    ],
    metrics: [
      "Reduced message latency to <200ms",
      "Handled 10k+ concurrent users seamlessly",
    ],
    featured: true,
    links: [
      { label: "Live Demo", href: "https://kud-chat-app.vercel.app/" },
      {
        label: "GitHub",
        href: "https://github.com/zerios99/Kud-Chat-App",
      },
    ],
  },
  {
    title: "Full-Stack Mobile Application",
    description:
      "Cross-platform mobile app built with Expo, featuring secure authentication and a scalable Node.js backend with serverless PostgreSQL.",
    tech: [
      "React Native",
      "Expo",
      "Expo Router",
      "Reanimated",
      "Clerk Auth",
      "Node.js",
      "Express.js",
      "Drizzle ORM",
      "Neon PostgreSQL",
      "Cron Jobs",
    ],
    highlights: [
      "Smooth UI transitions with Reanimated",
      "Secure authentication & session management via Clerk",
      "Automated backend tasks using Cron jobs",
      "Scalable backend architecture using Drizzle ORM",
    ],
    metrics: [
      "Handled 5k+ active mobile users",
      "Reduced API response time by 40%",
    ],
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/zerios99/Food-App" }],
  },
  {
    title: "Zerios-dh - AI Blog Scraper & Summarizer",
    description:
      "Web tool to scrape content from blogs and generate AI-powered summaries with high-fidelity formatting.",
    tech: [
      "React 19",
      "TanStack Start",
      "Prisma",
      "Firecrawl",
      "Better-Auth",
      "Tailwind CSS 4",
    ],
    highlights: [
      "Automated web content scraping and extraction",
      "AI-generated summaries with structured formatting",
      "Server-Side Rendering for fast content delivery",
    ],
    metrics: ["Reduced manual content summarization time by 80%"],
    featured: true,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zerios99/zerios-datahub",
      },
    ],
  },
  {
    title: "Multi-Vendor E-Commerce Marketplace",
    description:
      "Full-stack e-commerce platform with merchant dashboards, real-time inventory, dispute resolution, and admin controls.",
    tech: ["Node.js", "Express.js", "MongoDB", "React 19", "Tailwind CSS"],
    highlights: [
      "Merchant dashboards for inventory and orders",
      "Real-time inventory and sales tracking",
      "Integrated payment gateways and admin controls",
    ],
    metrics: ["Supported 100+ merchants", "Processed 50k+ transactions/month"],
    featured: true,
    links: [
      { label: "Live Demo", href: "https://super-z-market.vercel.app/" },
      {
        label: "GitHub",
        href: "https://github.com/zerios99/super-z-market",
      },
    ],
  },
];
