import { education } from "../data/profile";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" number="03" title="Education">
      <article className="flex gap-4 sm:gap-5">
        <div
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface font-mono text-[10px] font-semibold text-accent"
        >
          {education.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="font-semibold text-foreground">{education.degree}</h3>
            <time className="shrink-0 font-mono text-[11px] text-muted">
              {education.period}
            </time>
          </div>
          <p className="mt-1 text-sm text-muted">{education.institution}</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            <span className="font-medium text-foreground">Relevant coursework:</span>{" "}
            {education.coursework}
          </p>
        </div>
      </article>
    </Section>
  );
}
