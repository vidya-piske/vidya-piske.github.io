import type { ReactNode } from "react";
import type { Pastel } from "@/lib/data";

export const pastelBg: Record<Pastel, string> = {
  peach: "bg-peach",
  lilac: "bg-lilac",
  mint: "bg-mint",
  sun: "bg-sun",
  sky: "bg-sky",
};

export const pastelStrong: Record<Pastel, string> = {
  peach: "bg-peach-strong",
  lilac: "bg-lilac-strong",
  mint: "bg-mint-strong",
  sun: "bg-sun-strong",
  sky: "bg-sky-strong",
};

export function SectionHeading({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div className="mb-10 sm:mb-14">
      <span className="inline-block -rotate-2 rounded-xl border-2 border-line bg-paper px-3 py-1 font-display text-sm font-semibold shadow-[3px_3px_0_var(--line)]">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1] tracking-[-0.035em] sm:text-6xl">
        {children}
      </h2>
    </div>
  );
}

/** Highlighter-pen underline behind a word */
export function Mark({ children, color = "bg-sun-strong" }: { children: ReactNode; color?: string }) {
  return (
    <span className="relative isolate whitespace-nowrap">
      <span className={`absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.32em] -rotate-1 rounded-md ${color}`} />
      {children}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border-[1.5px] border-plum/70 bg-white/60 px-3 py-1 text-[13px] font-semibold text-plum">
      {children}
    </span>
  );
}
