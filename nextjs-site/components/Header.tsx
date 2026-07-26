"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Calendar } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/vaultrak", label: "VaultRak", isProduct: true },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const PHONE_NUMBER = "+917028278808";
const PHONE_DISPLAY = "+91 7028278808";

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
            src="/logo.png"
            alt="T-Mat Global logo"
            width={40}
            height={40}
            priority
          />
          <span className="hidden font-heading text-xl font-bold uppercase tracking-wide text-brand-black sm:inline">
            T-Mat <span className="text-brand-accent">Global</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:text-brand-accent"
            >
              {link.isProduct ? (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green-light" />
              ) : null}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-block rounded bg-brand-green px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark"
          >
            Call Us: {PHONE_DISPLAY}
          </a>
          <Link
            href="/schedule-demo"
            className="inline-block rounded bg-brand-green px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark"
          >
            Schedule a Demo
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label="Call T-Mat Global"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-brand-black transition-colors hover:bg-brand-green-dark"
          >
            <PhoneIcon />
          </a>

          <Link
            href="/schedule-demo"
            aria-label="Schedule a demo"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-brand-black transition-colors hover:bg-brand-green-dark"
          >
            <Calendar className="h-5 w-5" />
          </Link>

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
        <nav className="flex flex-col items-center gap-1 border-t border-brand-grey bg-white px-4 py-4 text-center lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-center gap-1.5 font-heading py-2 text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:text-brand-accent"
            >
              {link.isProduct ? (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green-light" />
              ) : null}
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
