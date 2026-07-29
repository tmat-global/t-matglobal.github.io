"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "tmat-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function handleChoice(choice: "accepted" | "rejected") {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div id="cookie-banner" className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-black/10 bg-white px-4 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center font-body text-sm text-brand-black/80 sm:text-left">
          We use essential cookies only. No analytics or marketing trackers.{" "}
          <a href="/privacy-policy" className="underline hover:text-brand-accent">
            Privacy Policy
          </a>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => handleChoice("rejected")}
            className="rounded border border-brand-black/20 px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-brand-black transition-colors hover:bg-brand-black/5"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded bg-brand-green px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-brand-black transition-colors hover:bg-brand-green-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
