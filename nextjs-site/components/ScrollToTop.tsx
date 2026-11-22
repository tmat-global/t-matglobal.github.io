"use client";

import { useEffect, useState } from "react";

type ScrollToTopProps = {
  locale?: "en" | "zh-CN";
};

export default function ScrollToTop({ locale = "en" }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isChinese = locale === "zh-CN";

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={isChinese ? "返回顶部" : "Scroll to top"}
      className="fixed bottom-24 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-brand-black text-white shadow-lg transition-transform hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
