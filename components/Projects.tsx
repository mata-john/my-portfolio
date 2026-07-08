const projects = [
  {
    title: "Human Capital Management",
    category: "Internship",
    businessProblem:
      "The Human Capital Management platform supports enterprise HR operations. As the platform evolved, the team required frontend development and business analysis support to deliver new features and maintain existing workflows.",
    myContribution:
      "As a Junior Business Analyst and Junior Full-Stack Developer, I contributed to frontend feature development, supported backend integration, participated in business analysis activities, assisted during database migration, and collaborated with developers while resolving integration issues.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Microsoft SQL Server",
      "Git",
      "GitHub",
    ],
    engineeringImpact:
      "This experience strengthened my understanding of how engineering, business analysis, testing, and collaboration work together throughout the software development lifecycle.",
    githubUrl: null,
    liveDemoUrl: null,
    caseStudyUrl: null,
  },
  {
    title: "TASS OneOps",
    category: "Internship",
    businessProblem:
      "TASS OneOps is an internal operations platform that required responsive, maintainable frontend interfaces as new modules were developed.",
    myContribution:
      "As a Frontend Developer (Intern), I developed responsive user interfaces, built reusable frontend components, connected frontend features with backend APIs, resolved UI issues, and collaborated through Git-based workflows.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
    engineeringImpact:
      "Working on OneOps provided hands-on experience contributing to a collaborative engineering team while developing production-oriented frontend features.",
    githubUrl: null,
    liveDemoUrl: null,
    caseStudyUrl: null,
  },
  {
    title: "STI Global City Paging System with SMS Notification",
    category: "Capstone",
    businessProblem:
      "STI College Global City needed a faster and more reliable way for faculty to communicate important announcements and class updates to students. Traditional communication channels were often delayed or inconsistent.",
    myContribution:
      "As part of a four-member capstone team, I contributed to building the web application by developing the Professor Portal, Program Head Portal, authentication, OTP-based password recovery, and administrative workflows.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "XAMPP"],
    engineeringImpact:
      "The application is deployed and available at https://globalcitypaging.com. Visitors can explore the live system directly through the Live Demo to see how the platform works.",
    githubUrl: null,
    liveDemoUrl: "https://globalcitypaging.com",
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
          Each project is framed around the problem, my role, the work delivered,
          and the value created for users and teams.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
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

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-zinc-950">
                  Business Problem
                </h4>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {project.businessProblem}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-zinc-950">
                  My Contribution
                </h4>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {project.myContribution}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-zinc-950">
                  Technologies Used
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
                  Engineering Impact
                </h4>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {project.engineeringImpact}
                </p>
              </div>
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
