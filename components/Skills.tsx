const skillCategories = [
  {
    category: "Frontend",
    skills: [
      {
        name: "HTML5",
        description: "Structuring semantic web pages.",
      },
      {
        name: "CSS3",
        description: "Styling responsive user interfaces.",
      },
      {
        name: "Tailwind CSS",
        description: "Building modern responsive layouts quickly.",
      },
      {
        name: "JavaScript",
        description: "Developing interactive web applications.",
      },
      {
        name: "TypeScript",
        description: "Writing maintainable and type-safe code.",
      },
      {
        name: "React",
        description: "Building reusable component-based interfaces.",
      },
      {
        name: "Next.js",
        description: "Developing modern React applications with the App Router.",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        description: "Developing server-side applications.",
      },
      {
        name: "Express.js",
        description: "Building RESTful APIs.",
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "MongoDB",
        description: "Working with NoSQL document databases.",
      },
      {
        name: "MySQL",
        description: "Designing and querying relational databases.",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Git",
        description: "Version control and collaboration.",
      },
      {
        name: "GitHub",
        description: "Repository management and team collaboration.",
      },
      {
        name: "VS Code",
        description: "Primary development environment.",
      },
      {
        name: "Vercel",
        description: "Deployment and hosting.",
      },
    ],
  },
  {
    category: "AI-Assisted Development",
    skills: [
      {
        name: "ChatGPT",
        description: "Architecture planning, learning, and technical guidance.",
      },
      {
        name: "Claude",
        description: "Pull request reviews and code quality feedback.",
      },
      {
        name: "GitHub Copilot / Codex",
        description: "Implementation assistance and productivity.",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="max-w-3xl">
        <h2
          id="skills-title"
          className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
        >
          Skills
        </h2>
        <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          These are the technologies I use to build modern, responsive, and
          maintainable web applications.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {skillCategories.map((category) => (
          <section
            key={category.category}
            aria-labelledby={`${category.category.toLowerCase().replaceAll(" ", "-")}-skills`}
          >
            <h3
              id={`${category.category.toLowerCase().replaceAll(" ", "-")}-skills`}
              className="text-xl font-semibold tracking-tight text-zinc-950"
            >
              {category.category}
            </h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="rounded-lg border border-zinc-200 bg-white p-5"
                >
                  <h4 className="text-base font-semibold text-zinc-950">
                    {skill.name}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {skill.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
