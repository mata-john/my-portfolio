export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="mx-auto flex min-h-[80vh] w-full max-w-6xl items-center px-6 py-16 sm:px-10 lg:px-12"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          John Jayferson Mata
        </p>
        <h1
          id="hero-title"
          className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl"
        >
          Frontend Engineer building thoughtful, production-ready web experiences.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          I design and build clean, responsive interfaces with a focus on
          performance, maintainability, and user experience. I like turning
          complex ideas into simple, polished products.
        </p>
        <nav
          aria-label="Hero actions"
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </section>
  );
}
