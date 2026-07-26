import Image from "next/image";
import Link from "next/link";
import { Clock, Eye, ShieldCheck } from "lucide-react";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

const STAT_CHIPS = [
  { label: "24/7 Monitoring", Icon: Clock },
  { label: "Vulnerability Visibility", Icon: Eye },
  { label: "Compliance Posture", Icon: ShieldCheck },
];

export default function VaultRakSection() {
  return (
    <section className="bg-brand-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn className="text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-white">MEET </span>
            <span className="text-brand-green-light">VAULTRAK</span>
          </h2>
          <p className="mt-3 font-heading text-sm font-semibold uppercase tracking-widest text-white/60">
            Our Managed DevSecOps Platform
          </p>
        </ScrollFadeIn>

        <div className="mt-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <ScrollFadeIn>
            <p className="font-body text-lg leading-relaxed text-white/80">
              VaultRak is where T-Mat Global&apos;s DevSecOps engineering becomes
              a product: continuous visibility into your pipeline security,
              vulnerability posture, and compliance status, backed by our
              24/7 managed operations team.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {STAT_CHIPS.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wide text-white/90"
                >
                  <Icon className="h-4 w-4 text-brand-green-light" />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://vaultrak.t-matglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded bg-brand-green px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark sm:inline-block"
              >
                Launch VaultRak
              </a>
              <Link
                href="/vaultrak"
                className="block rounded border-2 border-white px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-brand-black sm:inline-block"
              >
                Explore VaultRak
              </Link>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delayMs={120} className="relative">
            <div className="absolute -inset-10 rounded-full bg-brand-green/30 blur-3xl" />
            <div className="relative -rotate-2 overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10 transition-transform duration-500 hover:rotate-0">
              <div className="flex items-center gap-2 bg-[#0B0D10] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <div className="ml-3 h-5 flex-1 rounded bg-white/10" />
              </div>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/vaultrak.png"
                  alt="VaultRak dashboard showing vulnerability counts, pipeline security status, compliance score, and recent findings"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
