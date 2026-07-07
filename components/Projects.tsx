const projects = [
  {
    title: "Human Capital Management (HCM)",
    category: "Internship Contribution",
    summary:
      "Contributed to the development of an enterprise Human Capital Management (HCM) system during my internship, collaborating with developers and stakeholders to deliver HR modules and workflow improvements.",
    role: "Junior Business Analyst & Junior Full-Stack Developer (Intern)",
    contributions: [
      "Contributed as both a Junior Business Analyst and Junior Full-Stack Developer throughout the project lifecycle.",
      "Developed frontend interfaces for HR modules.",
      "Connected frontend components with backend APIs and database operations.",
      "Assisted in the migration from PostgreSQL to Microsoft SQL Server (MSSQL).",
      "Fixed workflow issues and supported debugging during feature integration.",
      "Collaborated with developers, testers, and stakeholders using Git and modern development workflows.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Microsoft SQL Server (MSSQL)",
      "Git",
      "GitHub",
    ],
    impact:
      "Supported delivery of HR modules and workflow improvements for an enterprise platform.",
    githubUrl: null,
    liveDemoUrl: null,
    caseStudyUrl: null,
  },
  {
    title: "TASS OneOps",
    category: "Internship Contribution",
    summary:
      "Contributed to the frontend development of an enterprise operations management platform during my internship.",
    role: "Frontend Developer (Intern)",
    contributions: [
      "Developed responsive frontend interfaces for assigned modules.",
      "Built reusable UI components.",
      "Integrated frontend features with backend APIs.",
      "Fixed UI bugs and improved user experience.",
      "Collaborated with backend developers and testers using Git workflows.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
    impact:
      "Improved the consistency and usability of assigned operations workflows through responsive frontend delivery.",
    githubUrl: null,
    liveDemoUrl: null,
    caseStudyUrl: null,
  },
  {
    title: "STI Global City Paging System with SMS Notification",
    category: "Academic Capstone Project",
    summary:
      "A web-based paging system that enables efficient communication between faculty and students through SMS notifications.",
    role: "Full-Stack Developer (Capstone Team)",
    contributions: [
      "Developed the Professor Portal.",
      "Developed the Program Head Portal.",
      "Built assigned frontend pages using PHP, HTML, CSS, and JavaScript.",
      "Integrated application features with MySQL using XAMPP.",
      "Collaborated with a four-member capstone team throughout development, testing, and deployment.",
    ],
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "XAMPP"],
    impact:
      "Delivered a working communication system for faculty and students with SMS-based notifications.",
    githubUrl: null,
    liveDemoUrl: null,
    caseStudyUrl: null,
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
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Selected work
        </p>
        <h2
          id="projects-title"
          className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
        >
          Projects
        </h2>
        <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          These projects reflect both academic and professional delivery work,
          organized to make the problem, my role, and the outcome easier to
          understand at a glance.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-6 sm:p-8"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              {project.category}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-700">
              {project.summary}
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-zinc-950">Role</h4>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {project.role}
                </p>
              </div>

              <div>
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

              <div>
                <h4 className="text-sm font-semibold text-zinc-950">
                  Key Contributions
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
                  {project.contributions.map((contribution) => (
                    <li key={contribution} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.impact ? (
                <div>
                  <h4 className="text-sm font-semibold text-zinc-950">
                    Business Impact
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {project.impact}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-zinc-100 pt-6 lg:mt-auto">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  GitHub
                </a>
              ) : null}
              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Live Demo
                </a>
              ) : null}
              {project.caseStudyUrl ? (
                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Case Study
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
