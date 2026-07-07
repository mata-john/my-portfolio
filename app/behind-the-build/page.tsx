const documentationCards = [
  {
    icon: "📘",
    title: "Project Overview",
    description:
      "Understand the project's purpose, engineering goals, technology stack, folder structure, and how to run the application locally.",
    href: "https://github.com/mata-john/my-portfolio/blob/main/docs/01-project-overview.md",
    cta: "Read Documentation",
  },
  {
    icon: "🏗",
    title: "Architecture",
    description:
      "Explore the application's component architecture, technical decisions, engineering principles, and scalability considerations.",
    href: "https://github.com/mata-john/my-portfolio/blob/main/docs/02-architecture.md",
    cta: "Read Documentation",
  },
  {
    icon: "🤖",
    title: "AI Collaboration",
    description:
      "Learn how ChatGPT, Codex, and Claude were integrated into a responsible engineering workflow while maintaining human ownership of architecture, testing, debugging, and deployment.",
    href: "https://github.com/mata-john/my-portfolio/blob/main/docs/03-ai-collaboration.md",
    cta: "Read Documentation",
  },
];

const sectionCards = [
  {
    title: "Project Overview",
    description:
      "This portfolio is a production-ready web application that showcases not only my projects, but also my approach to software engineering.",
    href: "#project-overview",
    id: "project-overview",
    intro:
      "This portfolio is a production-ready web application that showcases not only my projects, but also my approach to software engineering. It reflects how I plan, build, review, test, and continuously improve software using modern development practices.",
    sections: [
      {
        label: "Purpose",
        content:
          "Build a maintainable and production-ready portfolio that demonstrates both technical implementation and engineering decision-making.",
      },
      {
        label: "Audience",
        content:
          "Recruiters, engineering managers, and fellow developers interested in evaluating my frontend and full-stack development skills.",
      },
      {
        label: "Engineering Goals",
        content: [
          "Build a fast, accessible, and responsive application using Next.js and TypeScript.",
          "Apply reusable component architecture and consistent design principles.",
          "Demonstrate a professional development workflow including planning, code review, testing, deployment, and documentation.",
          "Showcase real internship and academic projects through structured case studies.",
        ],
      },
    ],
  },
  {
    title: "Architecture",
    description:
      "The site is structured to stay simple, modular, and readable while reflecting modern Next.js practices.",
    href: "#architecture",
    id: "architecture",
    bullets: [
      "Next.js App Router for route-based organization.",
      "Component-based architecture to keep the UI modular and reusable.",
      "TypeScript for clearer contracts and safer iteration.",
      "Tailwind CSS for consistent styling with minimal overhead.",
      "Folder organization centered around reusable components, route-based pages, and public assets.",
    ],
  },
  {
    title: "Development Workflow",
    description:
      "The project followed a deliberate process from planning to deployment so quality stayed consistent.",
    href: "#development-workflow",
    id: "development-workflow",
    process: [
      "Planning",
      "Implementation",
      "Code Review",
      "Testing",
      "Git",
      "Deployment",
    ],
  },
  {
    title: "AI Collaboration",
    description:
      "AI supported the workflow, but the final technical responsibility remained with me.",
    href: "#ai-collaboration",
    id: "ai-collaboration",
    workflow: [
      "ChatGPT → Architecture support",
      "Codex → Implementation support",
      "Claude → Code review support",
      "Developer → Testing and final decisions",
      "GitHub → Version control",
      "Vercel → Deployment",
    ],
  },
  {
    title: "Accessibility",
    description:
      "Accessibility was treated as part of the baseline experience, not a secondary concern.",
    href: "#accessibility",
    id: "accessibility",
    bullets: [
      "Semantic HTML for clear structure and better assistive technology support.",
      "Keyboard navigation for all interactive elements.",
      "Responsive layouts that adapt cleanly across screen sizes.",
      "Visible focus states for better keyboard usability.",
    ],
  },
  {
    title: "Deployment",
    description:
      "The site is deployed through a streamlined GitHub and Vercel workflow, with production verification built into the process.",
    href: "#deployment",
    id: "deployment",
    bullets: [
      "GitHub for version control and collaboration.",
      "Vercel for production hosting.",
      "Production build verification before release.",
      "Future improvements include deeper case-study storytelling and stronger project detail.",
    ],
  },
];

export default function BehindTheBuildPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Behind the Build
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Behind the Build
          </h1>
          <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Explore the engineering decisions, architecture, development workflow,
            AI collaboration, and deployment approach behind this portfolio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sectionCards.map((section) => (
            <article
              key={section.title}
              className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                {section.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-6 text-zinc-600">
                {section.description}
              </p>
              <a
                href={section.href}
                className="mt-8 inline-flex items-center text-sm font-semibold text-zinc-950 transition-colors hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Read More <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 space-y-6">
          {sectionCards.map((section) => (
            <section
              key={`${section.title}-detail`}
              id={section.id}
              className="scroll-mt-24 rounded-lg border border-zinc-200 bg-white p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                {section.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
                {section.description}
              </p>

              {section.intro ? (
                <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
                  {section.intro}
                </p>
              ) : null}

              {section.sections ? (
                <div className="mt-8 space-y-5">
                  {section.sections.map((item) => (
                    <div key={item.label}>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        {item.label}
                      </h3>
                      {Array.isArray(item.content) ? (
                        <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-600">
                          {item.content.map((entry) => (
                            <li key={entry} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                              <span>{entry}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-3 text-sm leading-7 text-zinc-600">
                          {item.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : null}

              {section.bullets ? (
                <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.process ? (
                <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-6">
                  {section.process.map((step) => (
                    <div
                      key={step}
                      className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm font-medium text-zinc-700"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              ) : null}

              {section.workflow ? (
                <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-6">
                  {section.workflow.map((step) => (
                    <div
                      key={step}
                      className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm font-medium text-zinc-700"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-16 rounded-lg border border-zinc-200 bg-white p-6 sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Technical Documentation
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              Technical Documentation
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
              Explore the engineering documentation that accompanies this portfolio. These documents explain the project's architecture, development workflow, and responsible AI-assisted engineering practices.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {documentationCards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-lg border border-zinc-200 bg-zinc-50 p-6 sm:p-8"
              >
                <div className="text-2xl" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-950">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-zinc-950 transition-colors hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  {card.cta} <span aria-hidden="true" className="ml-2">→</span>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
              Source Code
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
              Explore the complete repository including commit history, project structure, documentation, and implementation details.
            </p>
            <a
              href="https://github.com/mata-john/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-sm font-semibold text-zinc-950 transition-colors hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              View GitHub Repository <span aria-hidden="true" className="ml-2">→</span>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
