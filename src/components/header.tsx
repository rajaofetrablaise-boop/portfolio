"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 10);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || mobileOpen ? "bg-background" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl 2xl:max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground">
          <Image
            src="/logo.jpg"
            alt="Blaise Rajaofetra"
            width={28}
            height={28}
            className="rounded-full object-cover"
          />
          Blaise Rajaofetra
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm text-foreground sm:flex">
            <a href="#work" className="transition-opacity hover:opacity-70">
              {t.nav.work}
            </a>
            <a href="#about" className="transition-opacity hover:opacity-70">
              {t.nav.about}
            </a>
            <a href="#contact" className="transition-opacity hover:opacity-70">
              {t.nav.contact}
            </a>
          </nav>

          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            className="cursor-pointer text-foreground sm:hidden"
          >
            {mobileOpen ? (
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
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
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
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-20 bottom-0 flex flex-col border-t border-border bg-background px-6 py-8 sm:hidden">
          <nav className="flex flex-col gap-6 text-xl font-medium text-foreground">
            <a href="#work" onClick={() => setMobileOpen(false)}>
              {t.nav.work}
            </a>
            <a href="#about" onClick={() => setMobileOpen(false)}>
              {t.nav.about}
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              {t.nav.contact}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
