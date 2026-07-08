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
            I&apos;m Johnjayferson Mata, a Full-Stack Developer with internship experience in Business Analysis and Software Development. I enjoy building practical software for real-world problems, and I try to look past surface-level requirements to deliver experiences that genuinely help the people using them.
          </p>
        </article>

        <article className="rounded-lg border border-zinc-200 bg-white p-6 sm:p-8">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
            My Development Philosophy
          </h3>
          <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            At Microgenesis, I worked alongside developers and business analysts to build and improve Human Capital Management solutions. Contributing across frontend development, backend integration, and business analysis gave me a clearer understanding of how requirements move from discussion to tested, deployed software within a collaborative team.
          </p>
        </article>

        <article className="rounded-lg border border-zinc-200 bg-white p-6 sm:p-8 lg:col-span-2">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
            Career Goal
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            I&apos;m looking for a Junior Full-Stack Developer role where I can continue learning from experienced engineers, contribute to meaningful products, and grow into a more independent software engineer over time.
          </p>
        </article>
      </div>
    </section>
  );
}
