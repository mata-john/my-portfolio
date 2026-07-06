const experiences = [
  {
    company: "Microgenesis Business Systems",
    roles: ["Full-Stack Developer Intern", "Business Analyst Intern"],
    employmentType: "Internship",
    description:
      "Worked as part of an agile development team contributing to enterprise software solutions. Collaborated with developers, business analysts, and stakeholders while utilizing AI-assisted development workflows to improve productivity and software quality.",
    responsibilities: [
      "Assisted in Full-Stack Development",
      "Participated in Business Analysis activities",
      "Implemented assigned application features",
      "Reviewed Business Requirements Documents (BRDs)",
      "Collaborated with developers using Git and GitHub",
      "Participated in daily stand-up meetings",
      "Used AI tools responsibly for planning, implementation, and code reviews",
      "Worked on enterprise systems including Human Capital Management (HCM) and TASS OneOps",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Git",
      "GitHub",
      "ChatGPT",
      "Claude",
      "GitHub Copilot / Codex",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="max-w-3xl">
        <h2
          id="experience-title"
          className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
        >
          Experience
        </h2>
        <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          My professional experience includes full-stack development and
          business analysis internship work, contributing to enterprise software
          projects through collaboration, feature implementation, and responsible
          AI-assisted development workflows.
        </p>
      </div>

      <div className="mt-12 border-l border-zinc-200 pl-6 sm:pl-8">
        <div className="space-y-8">
          {experiences.map((experience) => (
            <article key={experience.company} className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-[31px] top-8 h-3 w-3 rounded-full border-2 border-white bg-zinc-950 sm:-left-[39px]"
              />
              <div className="rounded-lg border border-zinc-200 bg-white p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                      {experience.company}
                    </h3>
                    <div className="mt-3 space-y-1">
                      {experience.roles.map((role) => (
                        <p key={role} className="text-sm font-medium text-zinc-700">
                          {role}
                        </p>
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                    {experience.employmentType}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-zinc-600">
                  {experience.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-zinc-950">
                    Responsibilities
                  </h4>
                  <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-zinc-600">
                    {experience.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-zinc-950">
                    Technologies
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <li key={technology}>
                        <span className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                          {technology}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
