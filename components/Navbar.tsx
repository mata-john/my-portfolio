import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#projects", label: "Projects" },
  { href: "/#tech-stack", label: "Tech Stack" },
  { href: "/behind-the-build", label: "Behind the Build" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <Link
          href="/#profile"
          className="shrink-0 font-mono text-xs font-medium text-foreground transition-colors hover:text-accent"
        >
          JM<span className="text-accent">.</span>
        </Link>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto text-xs text-muted sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-9 shrink-0 items-center rounded-md px-2 transition-colors hover:text-accent sm:px-2.5"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
