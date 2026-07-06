const educationItems = [
  {
    institution: "STI College Global City",
    degree: "Bachelor of Science in Information Technology",
    status: "Graduate",
    highlights: [
      "Completed academic projects focused on software development.",
      "Built a capstone project integrating PHP, MySQL, and SMS notifications.",
      "Strengthened teamwork, software engineering practices, and problem-solving skills.",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="max-w-3xl">
        <h2
          id="education-title"
          className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
        >
          Education
        </h2>
        <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          My academic background strengthened my foundation in information
          technology, software development, and practical problem-solving through
          team-based projects.
        </p>
      </div>

      <div className="mt-12 grid gap-6">
        {educationItems.map((education) => (
          <article
            key={education.institution}
            className="rounded-lg border border-zinc-200 bg-white p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                  {education.institution}
                </h3>
                <p className="mt-3 text-sm font-medium text-zinc-700">
                  {education.degree}
                </p>
              </div>
              <span className="inline-flex w-fit rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                {education.status}
              </span>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-zinc-950">
                Highlights
              </h4>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-zinc-600">
                {education.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
