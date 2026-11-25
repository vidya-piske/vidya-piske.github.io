"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { stickers } from "@/lib/data";

const bg: Record<string, string> = {
  sun: "bg-sun-strong",
  lilac: "bg-lilac-strong",
  mint: "bg-mint-strong",
  peach: "bg-peach-strong",
  sky: "bg-sky-strong",
  white: "bg-white",
};

type Pos = { x: number; y: number; r: number };

/** Lay stickers out in a loose, slightly rotated grid that fits the board. */
function scatter(width: number, height: number, count: number): Pos[] {
  const cols = width < 500 ? 2 : width < 800 ? 3 : 5;
  const rows = Math.ceil(count / cols);
  const cellW = width / cols;
  const cellH = height / rows;
  return Array.from({ length: count }, (_, i) => {
    const c = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: c * cellW + 12 + Math.random() * Math.max(0, cellW - 170),
      y: row * cellH + 10 + Math.random() * Math.max(0, cellH - 62),
      r: Math.round(Math.random() * 14 - 7),
    };
  });
}

/** A dotted board of skill stickers visitors can drag around (mouse or touch). */
export function StickerBoard() {
  const board = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<Pos[]>([]);
  const [top, setTop] = useState<number | null>(null);
  const drag = useRef<{ i: number; dx: number; dy: number } | null>(null);

  const shuffle = useCallback(() => {
    const el = board.current;
    if (el) setPos(scatter(el.clientWidth, el.clientHeight, stickers.length));
  }, []);

  useEffect(() => {
    shuffle();
    window.addEventListener("resize", shuffle);
    return () => window.removeEventListener("resize", shuffle);
  }, [shuffle]);

  function onDown(e: React.PointerEvent<HTMLButtonElement>, i: number) {
    const el = board.current;
    if (!el) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    const box = el.getBoundingClientRect();
    drag.current = { i, dx: e.clientX - box.left - pos[i].x, dy: e.clientY - box.top - pos[i].y };
    setTop(i);
  }

  function onMove(e: React.PointerEvent<HTMLButtonElement>) {
    const d = drag.current;
    const el = board.current;
    if (!d || !el) return;
    const box = el.getBoundingClientRect();
    const w = e.currentTarget.offsetWidth;
    const h = e.currentTarget.offsetHeight;
    const x = Math.max(0, Math.min(box.width - w, e.clientX - box.left - d.dx));
    const y = Math.max(0, Math.min(box.height - h, e.clientY - box.top - d.dy));
    setPos((p) => p.map((q, j) => (j === d.i ? { ...q, x, y } : q)));
  }

  function onUp() {
    drag.current = null;
  }

  return (
    <div className="relative">
      <div
        ref={board}
        className="board-dots pop-lg relative h-[380px] overflow-hidden rounded-[28px] sm:h-[300px]"
        aria-label="Skill stickers you can drag around"
      >
        {pos.length > 0 &&
          stickers.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onPointerDown={(e) => onDown(e, i)}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerCancel={onUp}
              className={`absolute cursor-grab touch-none select-none whitespace-nowrap rounded-full border-2 border-plum px-5 py-2.5 font-display text-base font-bold text-plum shadow-[3px_3px_0_#2a2235] transition-[box-shadow,scale] active:cursor-grabbing active:scale-110 active:shadow-[7px_7px_0_#2a2235] sm:text-lg ${bg[s.color]}`}
              style={{
                left: pos[i].x,
                top: pos[i].y,
                rotate: `${pos[i].r}deg`,
                zIndex: top === i ? 10 : 1,
              }}
            >
              {s.label}
            </button>
          ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 text-sm text-muted">
        <span>↑ Go on, drag the stickers around</span>
        <button onClick={shuffle} className="pop rounded-full bg-paper px-4 py-1.5 font-display font-semibold text-ink transition-transform hover:-translate-y-0.5">
          Shuffle 🔀
        </button>
      </div>
    </div>
  );
}
