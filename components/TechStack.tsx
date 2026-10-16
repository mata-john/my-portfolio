import { techStack } from "../data/profile";
import Section from "./Section";

export default function TechStack() {
  return (
    <Section id="tech-stack" number="05" title="Tech Stack">
      <div className="space-y-5">
        {techStack.map((group) => (
          <div
            key={group.category}
            className="grid gap-2 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4"
          >
            <h3 className="pt-1 font-mono text-[11px] text-muted">
              {group.category}
            </h3>
            <ul
              aria-label={group.category}
              className="flex flex-wrap gap-1.5"
            >
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-surface px-2.5 py-1.5 font-mono text-[10px] text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
