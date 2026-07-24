"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const PHONE_NUMBER = "+15550100100";
const PHONE_DISPLAY = "+1 (555) 010-0100";

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="T-Mat Global logo"
            width={40}
            height={40}
            priority
          />
          <span className="hidden font-heading text-xl font-bold uppercase tracking-wide text-brand-black sm:inline">
            T-Mat <span className="text-brand-green">Global</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${PHONE_NUMBER}`}
          className="hidden rounded bg-brand-green px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-green-dark lg:inline-block"
        >
          Call Us: {PHONE_DISPLAY}
        </a>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label="Call T-Mat Global"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white transition-colors hover:bg-brand-green-dark"
          >
            <PhoneIcon />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-brand-black/10"
          >
            <span className="h-0.5 w-5 bg-brand-black" />
            <span className="h-0.5 w-5 bg-brand-black" />
            <span className="h-0.5 w-5 bg-brand-black" />
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav className="flex flex-col gap-1 border-t border-brand-grey bg-white px-4 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-heading py-2 text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:text-brand-green"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
