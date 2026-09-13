"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedNumber({
  value,
  step = 1,
  className = "",
}: {
  value: string;
  step?: number;
  className?: string;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(target);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setDisplay(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const duration = 600;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // Stepped counters (step > 1) use linear timing so each step gets an
          // equal slice of the animation — an eased curve bunches the final
          // step into its slow tail, making it look stuck just before the end.
          const eased = step > 1 ? progress : 1 - Math.pow(1 - progress, 3);
          const value = progress >= 1 ? target : Math.floor((target * eased) / step) * step;
          setDisplay(value);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, step]);

  return (
    <p ref={ref} className={className}>
      {display}
      {suffix}
    </p>
  );
}
