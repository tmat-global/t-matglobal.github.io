import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white/70">
            Contact
          </h3>
          <p className="mt-4 font-body text-lg font-semibold">
            +1 (555) 010-0100
          </p>
          <p className="mt-1 font-body text-white/90">hello@t-matglobal.com</p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white/70">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white/70">
            Regions Served
          </h3>
          <ul className="mt-4 space-y-2 font-body text-white/90">
            <li>United States</li>
            <li>United Arab Emirates</li>
            <li>United Kingdom</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white/70">
            24/7 Enterprise Support
          </h3>
          <p className="mt-4 font-body text-white/90">
            Fortune 500 delivery standards, always on.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded bg-brand-black px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-black"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 font-body text-sm text-white/70 sm:px-6 lg:px-8">
          &copy; {year} T-Mat Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
