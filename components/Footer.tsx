export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-10 sm:px-10 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 text-center text-sm leading-6 text-zinc-600">
        <div>
          <p className="font-medium text-zinc-950">
            © 2026 Johnjayferson Mata
          </p>
          <p className="mt-1">Designed &amp; Developed by Johnjayferson Mata</p>
        </div>

        <div>
          <p>Built with Next.js, TypeScript and Tailwind CSS</p>
          <p className="mt-1">Deployed on Vercel</p>
        </div>

        <nav aria-label="Footer links">
          <ul className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <li>
              <a
                href="https://github.com/mata-john"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-950 hover:text-zinc-700"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/johnjayferson"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-950 hover:text-zinc-700"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
