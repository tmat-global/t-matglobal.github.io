"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Calendar, Menu, X, Phone } from "lucide-react";

type HeaderProps = {
  locale?: "en" | "zh-CN";
};

export default function Header({ locale = "en" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname() || "/";

  const isChinese = locale === "zh-CN";
  const prefix = isChinese ? "/zh-cn" : "";

  const navLinks = [
    { href: "/", label: isChinese ? "首页" : "Home" },
    { href: "/services", label: isChinese ? "服务" : "Services" },
    { href: "/our-work", label: isChinese ? "项目案例" : "Our Work" },
    { href: "/vaultrak", label: "VaultRak" },
    { href: "/blog", label: isChinese ? "博客" : "Blog" },
    { href: "/about", label: isChinese ? "关于我们" : "About Us" },
    { href: "/contact", label: isChinese ? "联系我们" : "Contact Us" },
  ];

  const localizedHref = (href: string) =>
    `${prefix}${href === "/" ? "/" : href}`;

  const currentPath = isChinese
    ? (pathname === "/zh-cn" || pathname === "/zh-cn/" ? "/" : pathname.slice(6))
    : pathname;
  const languageHref = isChinese
    ? currentPath
    : currentPath === "/" ? "/zh-cn/" : currentPath.startsWith("/blog/") ? "/zh-cn/blog/" : `/zh-cn${currentPath}`;
  const languageLabel = isChinese ? "English" : "中文";

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={localizedHref("/")} className="flex items-center gap-2">
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={localizedHref(link.href)}
              className="flex items-center gap-1.5 font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:text-brand-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919356307015"
            className="inline-flex items-center gap-2 rounded-full border border-brand-accent px-4 py-2 font-heading text-sm font-semibold text-brand-accent transition-colors hover:bg-brand-accent hover:text-white"
          >
            <Phone size={16} />
            {isChinese ? "致电我们" : "Call Us"}
          </a>

          <Link
            href={localizedHref("/schedule-demo")}
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-4 py-2 font-heading text-sm font-semibold text-white transition-colors hover:opacity-90"
          >
            <Calendar size={16} />
            {isChinese ? "预约演示" : "Schedule a Demo"}
          </Link>

          <Link
            href={languageHref}
            hrefLang={isChinese ? "en" : "zh-CN"}
            className="rounded-full border border-gray-300 px-3 py-2 text-sm font-semibold text-brand-black transition-colors hover:border-brand-accent hover:text-brand-accent"
          >
            {languageLabel}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href={languageHref}
            hrefLang={isChinese ? "en" : "zh-CN"}
            className="text-sm font-semibold text-brand-accent"
          >
            {languageLabel}
          </Link>

          <a
            href="tel:+919356307015"
            aria-label={isChinese ? "致电我们" : "Call us"}
            className="text-brand-black"
          >
            <Phone size={21} />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-brand-black"
          >
            {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={localizedHref(link.href)}
                onClick={() => setIsMenuOpen(false)}
                className="font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:text-brand-accent"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={localizedHref("/schedule-demo")}
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-4 py-3 font-heading text-sm font-semibold text-white"
            >
              <Calendar size={16} />
              {isChinese ? "预约演示" : "Schedule a Demo"}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
