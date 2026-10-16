export type Project = {
  title: string;
  category: string;
  summary: string;
  problem: string;
  contribution: string;
  technologies: string[];
  proof: string;
  liveDemoUrl?: string;
  featured?: boolean;
};

export const profile = {
  name: "John Jayferson Mata",
  role: "Full-Stack Developer",
  location: "Taguig, Philippines",
  email: "johnjayferson2@gmail.com",
  bio: [
    "I build modern web applications and integrate systems to improve business workflows.",
    "From enterprise software to tools for my community, I focus on useful products, clear requirements, and dependable implementation.",
  ],
  links: {
    github: "https://github.com/mata-john",
    linkedin: "https://www.linkedin.com/in/johnjayferson",
    email: "mailto:johnjayferson2@gmail.com",
    resume: "/resume.pdf",
    behindTheBuild: "/behind-the-build",
  },
} as const;

export const profileChips = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "10+ Technologies", href: "#tech-stack" },
  { label: "Behind the Build", href: profile.links.behindTheBuild },
];

export const experience = {
  company: "Microgenesis Business Systems",
  initials: "M",
  roles: ["Full-Stack Developer Intern", "Business Analyst Intern"],
  period: "05/2026 — 07/2026",
  summary:
    "Developed and enhanced web-based system features by translating business and stakeholder requirements into functional interfaces and workflows.",
  bullets: [
    "Applied Git-based development, testing, and troubleshooting practices.",
    "Prepared technical documentation to support system development and handover.",
    "Documented requirements, discussions, decisions, and action items.",
  ],
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "SQL",
    "Git",
    "GitHub",
  ],
} as const;

export const education = {
  institution: "STI College Global City",
  initials: "STI",
  degree: "Bachelor of Science in Information Technology",
  period: "2022–2026",
  coursework:
    "Software development, web technologies, database management, systems analysis, and software engineering.",
} as const;

export const projects: Project[] = [
  {
    title: "STI Global City Paging System with SMS Notification",
    category: "Capstone",
    summary:
      "Web paging for faculty and students with role-based portals and two-way SMS.",
    problem:
      "Faculty needed a faster, more reliable way to share announcements and class updates with students.",
    contribution:
      "As part of a four-member team, I developed the Professor and Program Head portals, authentication, OTP password recovery, and administrative workflows.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Semaphore API"],
    proof: "Live system",
    liveDemoUrl: "https://globalcitypaging.com",
    featured: true,
  },
  {
    title: "Bingo Evangelism",
    category: "Community Project",
    summary:
      "A mobile-first multiplayer bingo app for respectful community outreach.",
    problem:
      "Small groups needed a simple way to organize an activity and follow progress together.",
    contribution:
      "Designed and built the app with room-based multiplayer sessions, individual bingo cards, live activity, and optional completion emails.",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Cloud Firestore",
      "Vercel Functions",
      "Resend",
    ],
    proof: "Real-time sessions for up to 30 participants",
    liveDemoUrl: "https://bingoevangelism.vercel.app",
  },
  {
    title: "Visual Monitoring System",
    category: "Full-Stack Development",
    summary:
      "Modernizes SharePoint order monitoring with data from SAP and other MCP sources.",
    problem:
      "Order information from SAP and other MCP sources needed a consolidated view for business users.",
    contribution:
      "Contributed to requirements and architecture documentation, data integration, and implementation of user-facing workflows.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "SAP Integration",
      "Cloudflare Workers",
    ],
    proof: "Supports a workflow used by 50+ people",
    liveDemoUrl: "https://vimos-web.johnjayferson2.workers.dev/",
  },
  {
    title: "Human Capital Management",
    category: "Internship Project",
    summary:
      "Frontend improvements to an enterprise Human Capital Management system before handover.",
    problem:
      "The system had UI inconsistencies and functional requirements to address before handover to the full-time development team.",
    contribution:
      "Refined frontend components and documented meeting discussions, requirements, decisions, and action items.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SQL", "Git"],
    proof: "Frontend improvements and handover documentation",
  },
  {
    title: "TASS OneOps",
    category: "Internship Project",
    summary:
      "Responsive frontend features for an internal operations platform.",
    problem:
      "New platform modules needed responsive, maintainable interfaces.",
    contribution:
      "Built reusable UI components, connected frontend features to backend APIs, and resolved interface issues in a Git-based workflow.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git", "GitHub"],
    proof: "Frontend Developer Intern project",
  },
];

export const techStack = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "SQL", "PHP", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB", "Microsoft SQL Server"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "npm", "Vercel", "XAMPP"],
  },
  {
    category: "AI-Assisted",
    skills: ["ChatGPT", "Claude", "Codex", "GitHub Copilot", "Google AI Studio"],
  },
] as const;
