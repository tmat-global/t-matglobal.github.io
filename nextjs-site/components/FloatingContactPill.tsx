export default function FloatingContactPill() {
  return (
    <a
      href="tel:+15550100100"
      aria-label="Contact T-Mat Global"
      className="fixed left-0 top-1/2 z-30 flex -translate-y-1/2 items-center gap-2 rounded-r-full bg-white py-3 pl-4 pr-5 text-blue-600 shadow-lg transition-transform hover:translate-x-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
      </svg>
      <span className="font-heading text-sm font-semibold uppercase tracking-wide">
        Contact Us
      </span>
    </a>
  );
}
