import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
};

export default function Section({
  id,
  number,
  title,
  children,
  action,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-b border-border py-10 sm:py-12"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            {number} <span aria-hidden="true">—</span> {title}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
          >
            {title}
          </h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
