"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { shots } from "@/data/shots";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function ShotContent({
  index,
  className = "",
  onAnimationEnd,
}: {
  index: number;
  className?: string;
  onAnimationEnd?: () => void;
}) {
  const shot = shots[index];
  return (
    <div
      className={`absolute inset-0 ${className}`}
      onAnimationEnd={onAnimationEnd}
      style={
        shot.image
          ? undefined
          : { background: `linear-gradient(135deg, ${shot.gradient[0]}, ${shot.gradient[1]})` }
      }
    >
      {shot.image && (
        <Image
          src={shot.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 1152px, 90vw"
          className="object-contain"
        />
      )}
    </div>
  );
}

function SwipeLayer({
  index,
  animationClass,
  onAnimationEnd,
}: {
  index: number;
  animationClass: string;
  onAnimationEnd?: () => void;
}) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-10 flex items-center justify-center px-16 py-6 sm:px-24 ${animationClass}`}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="relative aspect-[4/3] max-h-[85vh] w-full max-w-7xl">
        <ShotContent index={index} />
      </div>
    </div>
  );
}

export function ShotsCarousel({ className = "" }: { className?: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [outgoing, setOutgoing] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  const navigateTo = (nextIndex: number, dir: 1 | -1) => {
    if (selected === null) return;
    if (!prefersReducedMotion()) setOutgoing(selected);
    setDirection(dir);
    setSelected(nextIndex);
  };

  const goToPrevious = () => {
    if (selected === null) return;
    navigateTo((selected - 1 + shots.length) % shots.length, -1);
  };

  const goToNext = () => {
    if (selected === null) return;
    navigateTo((selected + 1) % shots.length, 1);
  };

  const goToIndex = (index: number) => {
    if (selected === null) return;
    navigateTo(index, index >= selected ? 1 : -1);
  };

  const plugins = useMemo(() => {
    if (typeof window === "undefined") return [];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return [];
    return [
      AutoScroll({ speed: 1, startDelay: 0, stopOnInteraction: false, stopOnMouseEnter: false }),
    ];
  }, []);

  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true, align: "start" }, plugins);

  useEffect(() => {
    if (selected === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") goToNext();
      if (event.key === "ArrowLeft") goToPrevious();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className={`overflow-hidden ${className}`} ref={emblaRef}>
        <div className="flex">
          {shots.map((shot, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(i)}
              aria-label={`Open shot ${i + 1}`}
              className="relative aspect-[4/3] h-72 shrink-0 cursor-pointer overflow-hidden sm:h-80"
              style={
                shot.image
                  ? undefined
                  : { background: `linear-gradient(135deg, ${shot.gradient[0]}, ${shot.gradient[1]})` }
              }
            >
              {shot.image && (
                <Image
                  src={shot.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 427px, 384px"
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {selected !== null &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-16 py-6 sm:px-24"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-6 right-6 z-10 cursor-pointer text-white transition-opacity hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToPrevious();
              }}
              aria-label="Previous shot"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full p-4 text-white transition-colors hover:bg-white/10 sm:left-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div
              onClick={(event) => event.stopPropagation()}
              className="relative aspect-[4/3] max-h-[85vh] w-full max-w-7xl"
            >
              {outgoing === null && <ShotContent index={selected} />}
            </div>

            <div
              onClick={(event) => event.stopPropagation()}
              className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-10"
            >
              {shots.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToIndex(i)}
                  aria-label={`Go to shot ${i + 1}`}
                  aria-current={i === selected}
                  className="cursor-pointer p-1.5"
                >
                  <span
                    className={`block h-2 w-2 rounded-full transition-colors ${
                      i === selected ? "bg-white" : "bg-white/30"
                    }`}
                  />
                </button>
              ))}
            </div>

            {outgoing !== null && (
              <>
                <SwipeLayer
                  index={outgoing}
                  animationClass={direction === 1 ? "animate-swipe-out-left" : "animate-swipe-out-right"}
                  onAnimationEnd={() => setOutgoing(null)}
                />
                <SwipeLayer
                  index={selected}
                  animationClass={direction === 1 ? "animate-swipe-in-right" : "animate-swipe-in-left"}
                />
              </>
            )}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToNext();
              }}
              aria-label="Next shot"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full p-4 text-white transition-colors hover:bg-white/10 sm:right-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}
