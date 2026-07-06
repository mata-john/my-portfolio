export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12"
      >
        <a
          href="#hero"
          className="text-base font-semibold tracking-tight text-zinc-950"
        >
          John Jayferson Mata
        </a>
        <div className="flex flex-col gap-3 text-sm font-medium text-zinc-600 sm:flex-row sm:items-center sm:gap-6">
          <a href="#about" className="transition-colors hover:text-zinc-950">
            About
          </a>
          <a href="#skills" className="transition-colors hover:text-zinc-950">
            Skills
          </a>
          <a href="#projects" className="transition-colors hover:text-zinc-950">
            Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-zinc-950">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
