"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    // The current theme lives on <html> (set before paint by the script in layout.tsx)
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage blocked: theme still changes for this visit */
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b-2 border-line" : "border-b-2 border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="font-display text-2xl font-extrabold tracking-tight">
          {profile.firstName.toLowerCase()}
          <span className="text-coral">.</span>
        </a>

        <div className="hidden items-center gap-7 font-display text-[15px] font-semibold md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="relative after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:rounded after:bg-coral after:transition-all hover:after:w-full">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="pop grid h-10 w-10 place-items-center rounded-xl bg-paper text-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="dark:hidden">🌙</span>
            <span className="hidden dark:inline">☀️</span>
          </button>
          <a
            href={profile.resume}
            download
            className="pop hidden rounded-xl bg-ink px-4 py-2 font-display text-sm font-bold text-paper transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Resume ↓
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={open}
            className="pop grid h-10 w-10 place-items-center rounded-xl bg-paper md:hidden"
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mb-4 rounded-2xl bg-paper p-2 pop md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 font-display text-lg font-semibold hover:bg-sun hover:text-plum"
            >
              {l.label}
            </a>
          ))}
          <a href={profile.resume} download className="mt-1 block rounded-xl bg-ink px-4 py-3 text-center font-display font-bold text-paper">
            Download resume ↓
          </a>
        </div>
      )}
    </header>
  );
}
