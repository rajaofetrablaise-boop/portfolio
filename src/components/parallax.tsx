"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Parallax({
  children,
  strength = 40,
  zoom = 0,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  zoom?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
      setOffset(progress * strength);
      if (zoom > 0) {
        setScale(1 + Math.max(0, Math.min(1, progress)) * zoom);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength, zoom]);

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${offset}px) scale(${scale})` }}>
      {children}
    </div>
  );
}
