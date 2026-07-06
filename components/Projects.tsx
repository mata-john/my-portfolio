const projects = [
  {
    title: "STI Global City Paging System with SMS Notification",
    category: "Academic Capstone Project",
    description:
      "Developed a web-based paging system that enables faculty members to communicate efficiently with students through SMS notifications. The project includes authentication, OTP-based password recovery, student dashboards, and paging guidelines designed for STI College Global City.",
    responsibilities: [
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Team Collaboration",
    ],
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "XAMPP"],
    githubUrl: "https://github.com/mata-john",
    liveDemoUrl: "https://globalcitypaging.com",
  },
  {
    title: "Human Capital Management (HCM)",
    category: "Internship Contribution",
    description:
      "Contributed to the development of an enterprise Human Capital Management platform during my internship. Collaborated with developers and business analysts to implement features, review business requirements, and support frontend and backend development activities.",
    responsibilities: [
      "Full-Stack Development",
      "Business Analysis Support",
      "Feature Implementation",
      "Team Collaboration",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Git", "GitHub"],
    githubUrl: "https://github.com/mata-john",
    liveDemoUrl: null,
  },
  {
    title: "TASS OneOps",
    category: "Internship Contribution",
    description:
      "Participated in the development of an internal operations platform by implementing application features, collaborating with teammates, and utilizing AI-assisted workflows throughout the software development lifecycle.",
    responsibilities: [
      "Full-Stack Development",
      "AI-assisted Development Workflow",
      "Bug Fixing",
      "Feature Development",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
    githubUrl: "https://github.com/mata-john",
    liveDemoUrl: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="max-w-3xl">
        <h2
          id="projects-title"
          className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
        >
          Projects
        </h2>
        <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          These projects represent both academic work and professional
          internship contributions, with a focus on practical software,
          collaboration, and real-world development workflows.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-6"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              {project.category}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-600">
              {project.description}
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-zinc-950">
                Responsibilities
              </h4>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-zinc-600">
                {project.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-zinc-950">
                Technologies
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li key={technology}>
                    <span className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                      {technology}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:pt-8">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                GitHub
              </a>
              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
                >
                  Live Demo
                </a>
              ) : (
                <span className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-500">
                  Private Project
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
