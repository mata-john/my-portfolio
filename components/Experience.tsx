import { experience } from "../data/profile";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" number="02" title="Experience">
      <article className="flex gap-4 sm:gap-5">
        <div
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface font-mono text-xs font-semibold text-accent"
        >
          {experience.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="font-semibold text-foreground">
              {experience.roles.join(" · ")}
            </h3>
            <time className="shrink-0 font-mono text-[11px] text-muted">
              {experience.period}
            </time>
          </div>
          <p className="mt-1 text-sm text-muted">{experience.company}</p>
          <p className="mt-4 text-sm leading-6 text-muted">{experience.summary}</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
            {experience.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-[0.65rem] size-1 shrink-0 rounded-full bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <ul aria-label="Experience technologies" className="mt-4 flex flex-wrap gap-2">
            {experience.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  );
}
