import Image from "next/image";
import { profile, profileChips } from "../data/profile";

const socialLinks = [
  { label: "GitHub", href: profile.links.github, external: true },
  { label: "LinkedIn", href: profile.links.linkedin, external: true },
  { label: "Email", href: profile.links.email, external: false },
  { label: "Resume", href: profile.links.resume, external: false },
];

export default function Profile() {
  return (
    <section
      id="profile"
      aria-labelledby="profile-title"
      className="scroll-mt-24 border-b border-border py-10 sm:py-14"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        01 <span aria-hidden="true">—</span> Profile
      </p>

      <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
        <Image
          src="/john-mata.jpeg"
          alt="Portrait of John Jayferson Mata"
          width={112}
          height={112}
          priority
          className="size-24 rounded-lg border border-border object-cover sm:size-28"
        />
        <div>
          <h1
            id="profile-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {profile.name}
          </h1>
          <p className="mt-2 font-mono text-xs text-muted sm:text-sm">
            {profile.role} <span aria-hidden="true">·</span> {profile.location}
          </p>
          <nav aria-label="Profile links" className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {link.label} <span aria-hidden="true">↗</span>
                {link.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base">
        {profile.bio.join(" ")}
      </p>

      <nav aria-label="Portfolio highlights" className="mt-6 flex flex-wrap gap-2">
        {profileChips.map((chip) => (
          <a
            key={chip.label}
            href={chip.href}
            className="inline-flex min-h-8 items-center rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {chip.label}
            {chip.href === profile.links.behindTheBuild ? (
              <span aria-hidden="true" className="ml-1">↗</span>
            ) : null}
          </a>
        ))}
      </nav>
    </section>
  );
}
