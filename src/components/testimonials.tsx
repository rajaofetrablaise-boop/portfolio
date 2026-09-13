"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const testimonial = testimonials[index];
  const photo = testimonials[0];

  const goToPrevious = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };
  const goToNext = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };
  const goToIndex = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.4,
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setTimeout(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [index, inView]);

  return (
    <section ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 bg-black sm:h-[480px] sm:grid-cols-[35%_1fr]">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:h-full sm:aspect-auto">
            {photo.image ? (
              <Image
                src={photo.image}
                alt=""
                fill
                sizes="(min-width: 640px) 35vw, 90vw"
                className="object-cover"
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${photo.gradient[0]}, ${photo.gradient[1]})`,
                }}
              />
            )}
          </div>

          <div className="flex min-h-[320px] flex-col overflow-hidden px-6 py-16 sm:h-full sm:px-16 sm:py-16">
            <div className="flex flex-1 flex-col justify-center">
              <div
                key={index}
                className={direction === 1 ? "animate-testimonial-in-right" : "animate-testimonial-in-left"}
              >
                <blockquote className="max-w-xl text-xl leading-relaxed font-medium text-white sm:text-2xl">
                  “
                  {testimonial.quote[lang].split("\n").map((line, i, lines) => (
                    <span key={i}>
                      {line}
                      {i < lines.length - 1 && <br />}
                    </span>
                  ))}
                  ”
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  {testimonial.role[lang] && (
                    <p className="mt-1 text-sm text-white/60">{testimonial.role[lang]}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-8">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous testimonial"
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next testimonial"
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
              </div>
              <div className="flex items-center gap-0.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === index}
                    className="cursor-pointer p-1.5"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all ${
                        i === index ? "w-6 bg-white" : "w-2 bg-white/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
