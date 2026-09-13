"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { socials } from "@/lib/dictionary";
import { Reveal } from "@/components/reveal";
import { CharReveal } from "@/components/char-reveal";

const EMAIL = "designbyblaise@gmail.com";

const icons = {
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="-271 283.9 256 235.1"
      fill="currentColor"
    >
      <rect x="-264.4" y="359.3" width="49.9" height="159.7" />
      <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7C-210.8,295.8-222.1,283.9-240.5,283.9z" />
      <path d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z" />
    </svg>
  ),
  dribbble: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15" fill="currentColor">
      <path d="M4.04357 0.842239C1.97417 1.91881 0.469797 3.9319 0.0922976 6.31967H0.5269C3.33245 6.25492 5.53147 6.0116 7.32636 5.46191C6.54621 4.07884 5.59515 2.72168 4.45344 1.34257L4.4518 1.34058L4.04357 0.842239Z" />
      <path d="M0.00206259 7.31976C0.000649479 7.37967 -6.10352e-05 7.43975 -6.10352e-05 7.5C-6.10352e-05 9.51677 0.79607 11.3477 2.09118 12.6956L2.25242 12.3719C2.26128 12.3541 2.27119 12.3369 2.2821 12.3203C3.93914 9.7984 5.81649 8.2981 7.91356 7.62493C8.05622 7.57913 8.19959 7.53726 8.34366 7.49922C8.17654 7.11593 7.99765 6.73623 7.80662 6.35917C5.84191 6.99159 3.47954 7.25207 0.544143 7.31953L0.532654 7.3198L0.00206259 7.31976Z" />
      <path d="M2.8608 13.3934C4.13727 14.3996 5.74852 15 7.49994 15C8.39274 15 9.24911 14.844 10.0433 14.5577V13.8371C9.79881 11.9025 9.37009 10.1272 8.72521 8.43394C8.55497 8.47577 8.3863 8.52343 8.2192 8.57707C6.39653 9.16217 4.69386 10.4797 3.13412 12.8447L2.8608 13.3934Z" />
      <path d="M11.0433 14.1118C12.9679 13.0782 14.3891 11.2288 14.8445 9.02623L14.2799 8.77093C12.6537 8.29307 11.1386 8.09673 9.72668 8.25607C10.3652 9.97658 10.7938 11.7824 11.0394 13.7436C11.042 13.7642 11.0433 13.7849 11.0433 13.8057V14.1118Z" />
      <path d="M14.9841 7.99184C14.9946 7.82925 14.9999 7.66525 14.9999 7.5C14.9999 5.62777 14.3138 3.91572 13.1794 2.60156L12.8823 2.93071C11.7128 4.3544 10.3764 5.34065 8.75193 6.01308C8.96402 6.43702 9.16161 6.8645 9.34517 7.2967C11.0173 7.05773 12.7745 7.2826 14.5964 7.82166C14.6183 7.82814 14.6397 7.83611 14.6605 7.84553L14.9841 7.99184Z" />
      <path d="M12.4759 1.88844C11.1519 0.71352 9.40921 0 7.49994 0C6.62221 0 5.77968 0.150798 4.99685 0.427899L5.22456 0.705876C6.4442 2.17922 7.45704 3.63454 8.2832 5.1242C9.82571 4.50096 11.0486 3.59004 12.1166 2.28743C12.1216 2.28132 12.1268 2.27533 12.1321 2.26947L12.4759 1.88844Z" />
    </svg>
  ),
  behance: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512" fill="currentColor">
      <path d="M206.729,238.87c0,0,48.358-3.589,48.358-60.296c0-56.711-39.563-84.387-89.678-84.387H73.161h-2.704H0.5v316.909h69.957h2.704h92.248c0,0,100.671,3.18,100.671-93.537C266.08,317.559,270.469,238.87,206.729,238.87z M153.539,150.513h11.87c0,0,22.416,0,22.416,32.973c0,32.968-13.183,37.749-28.136,37.749H73.161v-70.722H153.539z M160.749,354.77H73.161V270.08h92.248c0,0,33.41-0.438,33.41,43.523C198.819,350.67,173.865,354.49,160.749,354.77z M400.342,174.817c-121.873,0-121.765,121.765-121.765,121.765s-8.362,121.141,121.765,121.141c0,0,108.438,6.195,108.438-84.271h-55.767c0,0,1.86,34.068-50.81,34.068c0,0-55.777,3.738-55.777-55.135h164.213C510.639,312.385,528.609,174.817,400.342,174.817z M345.813,270.08c0,0,6.809-48.845,55.768-48.845c48.949,0,48.336,48.845,48.336,48.845H345.813z M462.908,151.881H332.159v-39.025h130.749V151.881z" />
    </svg>
  ),
};

export function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; fail silently.
    }
  };

  return (
    <footer id="contact" className="mt-20 scroll-mt-20">
      <Reveal className="mx-auto max-w-6xl px-6 py-28">
        <p className="text-lg font-medium text-black">{t.footer.ctaLabel}</p>
        <div className="group relative mt-4 inline-block">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="block cursor-pointer text-left text-4xl font-bold text-foreground transition-colors hover:text-[#6200B3] sm:text-6xl"
          >
            <CharReveal text="designbyblaise" className="block sm:inline" />
            <CharReveal text="@gmail.com" className="block sm:inline" />
          </button>
          <span className="pointer-events-none absolute -top-12 right-0 overflow-hidden bg-black px-4 py-2 opacity-0 transition-opacity group-hover:opacity-100">
            <span
              key={copied ? "copied" : "default"}
              className={`animate-fade-in flex items-center gap-2 text-sm font-medium whitespace-nowrap ${
                copied ? "text-green-400" : "text-white"
              }`}
            >
              {copied && (
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
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
              {copied ? t.footer.copiedEmail : t.footer.copyEmail}
            </span>
          </span>
        </div>
      </Reveal>
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} Blaise Rajaofetra. {t.footer.rights}
        </p>
        <div className="flex gap-3">
          {socials.map((social) => (
            <div key={social.label} className="group relative">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-opacity hover:opacity-80"
              >
                {icons[social.icon]}
              </a>
              <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {lang === "fr" ? `Visiter mon ${social.label}` : `Visit my ${social.label}`}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </footer>
  );
}
