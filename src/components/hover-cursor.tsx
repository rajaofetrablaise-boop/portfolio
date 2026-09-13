"use client";

import { useState, type ReactNode } from "react";

export function HoverCursor({
  children,
  label,
  className = "",
}: {
  children: ReactNode;
  label: string;
  className?: string;
}) {
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className={`relative cursor-none ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }}
    >
      {children}
      <div
        className={`pointer-events-none absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 bg-black px-6 py-3 text-xs font-semibold tracking-wide whitespace-nowrap text-white transition-opacity duration-150 ${
          hovering ? "opacity-100" : "opacity-0"
        }`}
        style={{ left: pos.x, top: pos.y }}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 5H19V11" />
          <path d="M19 5L5 19" />
        </svg>
      </div>
    </div>
  );
}
