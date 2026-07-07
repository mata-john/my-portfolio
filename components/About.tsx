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
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-lg border border-zinc-200 bg-white p-6 sm:p-8">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
            Who I Am
          </h3>
          <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            I&apos;m Johnjayferson Mata, an aspiring Junior Full-Stack Developer
            with internship experience in both Business Analysis and Full-Stack
            Development. I enjoy building software that solves real-world
            problems while looking beyond the initial requirements to create
            better user experiences.
          </p>
        </article>

        <article className="rounded-lg border border-zinc-200 bg-white p-6 sm:p-8">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
            My Development Philosophy
          </h3>
          <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            My Full-Stack Development internship taught me the importance of
            collaboration, ownership, and continuous learning. Working as part of
            a development team showed me how effective communication, modern
            development practices, and responsible AI-assisted workflows can
            improve productivity while maintaining software quality.
          </p>
        </article>

        <article className="rounded-lg border border-zinc-200 bg-white p-6 sm:p-8 lg:col-span-2">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
            Career Goal
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            I am currently seeking a Junior Full-Stack Developer opportunity
            where I can continue growing my technical skills, contribute to
            meaningful software projects, and build solutions that create value
            for both users and businesses.
          </p>
        </article>
      </div>
    </section>
  );
}
