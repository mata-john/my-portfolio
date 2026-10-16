import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p>© 2026 {profile.name}</p>
      <nav aria-label="Footer links" className="flex flex-wrap gap-x-5 gap-y-2">
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
          GitHub
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
          LinkedIn
        </a>
        <a href={profile.links.email} className="hover:text-accent">
          Email
        </a>
        <a href={profile.links.resume} download className="hover:text-accent">
          Resume
        </a>
      </nav>
    </footer>
  );
}
