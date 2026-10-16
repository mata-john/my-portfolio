import Link from "next/link";
import { projects } from "../data/profile";
import Section from "./Section";

const orderedProjects = [...projects.filter((project) => project.featured), ...projects.filter((project) => !project.featured)];

export default function Projects() {
  return (
    <Section
      id="projects"
      number="04"
      title="Projects"
      action={
        <Link
          href="/behind-the-build"
          className="font-mono text-[10px] uppercase tracking-wide text-muted transition-colors hover:text-accent"
        >
          Behind the Build <span aria-hidden="true">↗</span>
        </Link>
      }
    >
      <div className="space-y-3">
        {orderedProjects.map((project) => (
          <article
            key={project.title}
            className={`group rounded-lg border bg-surface p-4 transition duration-200 hover:-translate-y-0.5 hover:border-accent/60 sm:p-5 ${
              project.featured
                ? "border-accent/50 shadow-[inset_2px_0_0_var(--accent)]"
                : "border-border"
            }`}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              {project.featured ? (
                <span className="rounded border border-accent/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-accent">
                  Featured
                </span>
              ) : null}
              <span className="font-mono text-[10px] text-muted">
                {project.category}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
            <p className="mt-2 font-mono text-[11px] text-accent">{project.proof}</p>
            <ul
              aria-label={`${project.title} technologies`}
              className="mt-3 flex flex-wrap gap-1.5"
            >
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted"
                >
                  {technology}
                </li>
              ))}
            </ul>

            <details className="mt-4 border-t border-border pt-3 text-sm">
              <summary className="w-fit cursor-pointer font-mono text-[11px] text-muted marker:text-accent hover:text-accent focus-visible:rounded-sm">
                Details
              </summary>
              <div className="mt-3 grid gap-3 text-sm leading-6 text-muted sm:grid-cols-2">
                <p>
                  <span className="font-medium text-foreground">Problem:</span>{" "}
                  {project.problem}
                </p>
                <p>
                  <span className="font-medium text-foreground">My role:</span>{" "}
                  {project.contribution}
                </p>
              </div>
            </details>

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-9 items-center rounded-md text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:rounded-sm"
              >
                Live Demo <span aria-hidden="true" className="ml-1">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </article>
        ))}
      </div>

      <Link
        href="/behind-the-build"
        className="mt-5 flex items-center justify-between rounded-lg border border-border px-4 py-4 transition-colors hover:border-accent/60 hover:bg-surface"
      >
        <span>
          <span className="block text-sm font-medium text-foreground">Behind the Build</span>
          <span className="mt-1 block text-xs text-muted">
            Notes on architecture, workflow, and the decisions behind this portfolio.
          </span>
        </span>
        <span aria-hidden="true" className="ml-4 shrink-0 text-accent">↗</span>
      </Link>
    </Section>
  );
}
