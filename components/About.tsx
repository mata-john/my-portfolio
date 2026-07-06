const technologyGroups = [
  {
    category: "Frontend",
    technologies: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    technologies: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    technologies: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    category: "AI-Assisted Development",
    technologies: ["ChatGPT", "Claude", "GitHub Copilot / Codex"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="max-w-3xl">
        <h2
          id="about-title"
          className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
        >
          About Me
        </h2>
        <div className="mt-6 space-y-5 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          <p>
            I&apos;m Johnjayferson Mata, an aspiring Junior Full-Stack Developer
            with internship experience in both Business Analysis and Full-Stack
            Development. I enjoy building software that solves real-world
            problems while looking beyond the initial requirements to create
            better user experiences.
          </p>
          <p>
            My Full-Stack Development internship taught me the importance of
            collaboration, ownership, and continuous learning. Working as part of
            a development team showed me how effective communication, modern
            development practices, and responsible AI-assisted workflows can
            improve productivity while maintaining software quality.
          </p>
          <p>
            I am currently seeking a Junior Full-Stack Developer opportunity
            where I can continue growing my technical skills, contribute to
            meaningful software projects, and build solutions that create value
            for both users and businesses.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-4xl">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
          Core Technologies
        </h3>
        <div className="mt-6 space-y-6">
          {technologyGroups.map((group) => (
            <div key={group.category}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                {group.category}
              </p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {group.technologies.map((technology) => (
                  <li key={technology}>
                    <span className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700">
                      {technology}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
