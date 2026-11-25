"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

/** Email button: copies the address on click, and still works as a mailto link. */
export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy(e: React.MouseEvent) {
    try {
      await navigator.clipboard.writeText(profile.email);
      e.preventDefault();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: fall through to the mailto link */
    }
  }

  return (
    <a
      href={`mailto:${profile.email}`}
      onClick={copy}
      className="inline-flex max-w-full items-center gap-3 rounded-2xl border-2 border-plum bg-white px-4 py-4 font-display text-[15px] font-bold text-plum shadow-[5px_5px_0_#2a2235] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 sm:px-5 sm:text-xl"
    >
      <span aria-hidden>✉️</span>
      <span className="break-all">{copied ? "Copied to clipboard!" : profile.email}</span>
    </a>
  );
}
