import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-background/95"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6 md:py-4">
        <a href="#home" className="shrink-0 text-sm font-bold tracking-tight text-foreground md:text-base">
          Nayan Dave <span className="text-foreground/70">| Data Analyst</span>
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-xs font-semibold text-foreground/80 sm:gap-x-5 sm:text-sm md:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="whitespace-nowrap transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
