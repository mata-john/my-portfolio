export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="border-b border-zinc-200 bg-[linear-gradient(180deg,#fafafa_0%,#ffffff_72%)]"
    >
      <div className="mx-auto flex min-h-[80vh] w-full max-w-6xl items-center px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
        <div className="max-w-[48rem]">
          <p className="mb-4 text-sm font-semibold uppercase text-zinc-500">
            John Jayferson Mata
          </p>
          <h1
            id="hero-title"
            className="text-4xl font-semibold leading-[1.08] text-zinc-950 sm:text-5xl sm:leading-[1.05] lg:text-6xl"
          >
            Frontend Engineer building thoughtful, production-ready web
            experiences.
          </h1>
          <p className="mt-6 max-w-[40rem] text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            I design and build clean, responsive interfaces with a focus on
            performance, maintainability, and user experience. I like turning
            complex ideas into simple, polished products.
          </p>
          <nav
            aria-label="Hero actions"
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Contact Me
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
