"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/language-context";
import type { Lang } from "@/lib/dictionary";
import { FlagFR, FlagGB } from "./flag-icons";

const options: { value: Lang; label: string; Flag: typeof FlagFR }[] = [
  { value: "fr", label: "Français", Flag: FlagFR },
  { value: "en", label: "English", Flag: FlagGB },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = options.find((option) => option.value === lang) ?? options[0];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-foreground transition-opacity hover:opacity-70"
      >
        <current.Flag />
        {lang.toUpperCase()}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-10 mt-2 w-32 border border-border bg-surface py-1 text-sm shadow-sm"
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={lang === option.value}
                onClick={() => {
                  setLang(option.value);
                  setOpen(false);
                }}
                className={`flex w-full cursor-pointer items-center gap-2 px-3 py-1.5 text-left transition-colors hover:bg-background ${
                  lang === option.value ? "font-medium text-foreground" : "text-muted"
                }`}
              >
                <option.Flag />
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
