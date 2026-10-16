import { profile } from "../data/profile";
import GitHubContributions from "./GitHubContributions";
import Section from "./Section";

const contactLinks = [
  { label: "Email", href: profile.links.email },
  { label: "GitHub", href: profile.links.github, external: true },
  { label: "LinkedIn", href: profile.links.linkedin, external: true },
  { label: "Download Resume", href: profile.links.resume, download: true },
];

export default function Contact() {
  return (
    <Section id="contact" number="06" title="Contact">
      <p className="max-w-xl text-sm leading-6 text-muted">
        I&apos;m open to junior full-stack developer opportunities and happy to connect with teams building useful software.
      </p>
      <p className="mt-2 font-mono text-xs text-muted">{profile.location}</p>

      <nav aria-label="Contact links" className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            download={link.download ? "John-Mata-CV.pdf" : undefined}
            className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {link.label} <span aria-hidden="true">{link.download ? "↓" : "↗"}</span>
            {link.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
          </a>
        ))}
      </nav>

      <GitHubContributions />
    </Section>
  );
}
