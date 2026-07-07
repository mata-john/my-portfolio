import Image from "next/image";

const navItems = [
  { href: "#about", label: "About", isActive: false },
  { href: "#skills", label: "Skills", isActive: false },
  { href: "#projects", label: "Projects", isActive: false },
  { href: "#contact", label: "Contact", isActive: false },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/85 shadow-[0_1px_0_rgba(24,24,27,0.04)] backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12"
      >
        <a
          href="#hero"
          className="inline-flex min-h-10 items-center gap-2 text-base font-semibold text-zinc-950 transition-colors hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
        >
          <Image
            src="/john-mata.jpeg"
            alt=""
            width={36}
            height={36}
            sizes="(min-width: 640px) 36px, 32px"
            className="size-8 rounded-full border border-zinc-200 object-cover sm:size-9"
            priority
          />
          Johnjayferson Mata
        </a>
        <div className="flex flex-wrap gap-2 text-sm font-medium text-zinc-600 sm:items-center sm:gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={item.isActive ? "location" : undefined}
              className="inline-flex min-h-10 items-center rounded-full px-3 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 aria-[current=location]:bg-zinc-100 aria-[current=location]:text-zinc-950"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
