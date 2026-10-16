import Image from "next/image";

export default function GitHubContributions() {
  return (
    <div className="mt-8 border-t border-border pt-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground">
            GitHub activity
          </h3>
          <p className="mt-1 text-xs text-muted">
            Public contributions over the past year
          </p>
        </div>
        <a
          href="https://github.com/mata-john"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-xs text-muted underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
        >
          View profile <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <div
        aria-label="GitHub contribution graph; scroll horizontally to see the full year"
        className="mt-4 overflow-x-auto rounded-md border border-border bg-surface px-3 py-4"
        role="region"
        tabIndex={0}
      >
        <Image
          src="https://ghchart.rshah.org/18181b/mata-john"
          alt="GitHub contribution graph for mata-john over the past year"
          width={663}
          height={104}
          loading="lazy"
          unoptimized
          className="h-[104px] min-w-[663px]"
        />
      </div>
    </div>
  );
}
