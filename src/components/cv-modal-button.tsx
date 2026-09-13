"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/context/language-context";

type Status = "idle" | "sending" | "success" | "error";

export function CvModalButton({ label }: { label: string }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeAndReset = () => {
    setOpen(false);
    setEmail("");
    setStatus("idle");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send-cv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group mt-8 inline-flex w-fit cursor-pointer items-center gap-2 bg-[#6200B3] px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
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
          className="h-6 w-0 opacity-0 transition-all duration-200 group-hover:w-6 group-hover:opacity-100"
        >
          <path d="M12 17V3" />
          <path d="m6 11 6 6 6-6" />
          <path d="M19 21H5" />
        </svg>
        {label}
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            onClick={closeAndReset}
            className="animate-modal-overlay fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-6"
          >
            <div
              onClick={(event) => event.stopPropagation()}
              className="animate-modal-panel relative w-full max-w-md bg-background p-8"
            >
              <button
                type="button"
                onClick={closeAndReset}
                aria-label="Close"
                className="absolute top-4 right-4 cursor-pointer text-foreground transition-opacity hover:opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
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

              {status === "success" ? (
                <div className="flex flex-col items-center py-4 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="animate-success-circle"
                  >
                    <circle cx="12" cy="12" r="11" fill="#16a34a" />
                    <path
                      d="M7 12.5 10.5 16 17 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-success-check"
                    />
                  </svg>
                  <h3 className="mt-5 text-3xl font-semibold text-foreground">
                    {t.cvModal.successTitle}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{t.cvModal.successSubtitle}</p>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-semibold text-foreground">{t.cvModal.heading}</h3>
                  <p className="mt-2 text-sm text-muted">{t.cvModal.description}</p>
                </>
              )}

              {status !== "success" && (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                  <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                    {t.cvModal.emailLabel}
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder={t.cvModal.emailPlaceholder}
                      className="border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground outline-none focus:border-foreground"
                    />
                  </label>
                  {status === "error" && <p className="text-sm text-red-600">{t.cvModal.error}</p>}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 cursor-pointer bg-[#6200B3] px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? t.cvModal.sending : t.cvModal.submitCta}
                  </button>
                </form>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
