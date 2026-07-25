import Link from "next/link";

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/tmatglobal/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/vaultrak", label: "VaultRak" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const SITEMAP_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/careers", label: "Careers" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-green text-brand-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-black/70">
            Contact No.
          </h3>
          <p className="mt-4 font-body text-lg font-semibold">
            +91 7028278808
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-black/70">
            Email
          </h3>
          <p className="mt-4 font-body text-brand-black/80">
            info@t-matglobal.com
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-black/70">
            Address
          </h3>
          <p className="mt-4 font-body text-brand-black/80">Pune, India</p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-black/70">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-brand-black/80 transition-colors hover:text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-black/70">
            Sitemap
          </h3>
          <ul className="mt-4 space-y-2">
            {SITEMAP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-brand-black/80 transition-colors hover:text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-black/70">
            For Any Business Inquiry
          </h3>
          <Link
            href="/contact"
            className="mt-4 block w-full rounded bg-brand-grey px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-white sm:inline-block sm:w-auto"
          >
            Apply Now
          </Link>
        </div>
      </div>

      <div className="border-t border-brand-black/10 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 sm:px-6 lg:px-8">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/40 text-brand-black transition-colors hover:bg-white hover:text-brand-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-brand-black/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center font-heading text-sm font-bold uppercase tracking-wider text-brand-black sm:px-6 lg:px-8">
          Created By : T-Mat Global Technologies
        </p>
      </div>
    </footer>
  );
}
