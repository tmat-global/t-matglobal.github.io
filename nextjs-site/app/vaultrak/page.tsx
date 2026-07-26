import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";
import TechBackground from "@/components/hero-bg/TechBackground";
import {
  Workflow,
  ShieldAlert,
  Gauge,
  Activity,
  ListChecks,
  Clock,
  Plug,
  Radar,
  ClipboardList,
} from "lucide-react";

const TITLE = "VaultRak | Managed DevSecOps Platform by T-Mat Global";
const DESCRIPTION =
  "VaultRak gives you continuous pipeline security visibility, severity-based vulnerability management, and real-time compliance score tracking, backed by T-Mat Global's 24/7 managed DevSecOps team.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const FEATURES = [
  {
    Icon: Workflow,
    title: "Pipeline Security Visibility",
    description:
      "See every stage of your CI/CD pipeline — source, build, test, scan, and deploy — with security status surfaced at each step, not buried in build logs.",
  },
  {
    Icon: ShieldAlert,
    title: "Vulnerability Management by Severity",
    description:
      "Findings are triaged by real exploitability and business impact, so your team fixes what matters instead of chasing every low-severity alert.",
  },
  {
    Icon: Gauge,
    title: "Compliance Score Tracking",
    description:
      "A live compliance score against frameworks like SOC 2 and ISO 27001, built from evidence VaultRak collects automatically from your existing tools.",
  },
  {
    Icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "Continuous monitoring of your pipelines, infrastructure, and security posture — updated as your environment changes, not on a weekly scan cycle.",
  },
  {
    Icon: ListChecks,
    title: "Findings & Remediation Workflow",
    description:
      "Every finding is tracked from discovery to resolution, with clear ownership, status, and an audit trail your team can hand straight to an auditor.",
  },
  {
    Icon: Clock,
    title: "24/7 Managed Ops Behind It",
    description:
      "VaultRak isn't just software — it's backed by T-Mat Global's managed DevSecOps team watching your environment around the clock.",
  },
];

const STEPS = [
  {
    number: 1,
    Icon: Plug,
    title: "Connect Your Pipeline",
    description:
      "Link your CI/CD tooling, cloud accounts, and repositories in minutes using read-scoped, least-privilege access.",
  },
  {
    number: 2,
    Icon: Radar,
    title: "VaultRak Monitors Continuously",
    description:
      "Automated scanning, posture tracking, and compliance evidence collection run around the clock — no manual triggers required.",
  },
  {
    number: 3,
    Icon: ClipboardList,
    title: "Get Prioritized Findings",
    description:
      "Every finding is scored, tracked, and routed to the right owner, with clear remediation guidance and status visibility.",
  },
];

export default function VaultRakPage() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-brand-black">
        <TechBackground variant="vault" />

        <ScrollFadeIn className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-green-light">
            Managed DevSecOps Platform
          </p>
          <h1 className="mt-4 font-heading text-5xl font-bold uppercase leading-none tracking-tight text-white sm:text-6xl md:text-7xl">
            Vault<span className="text-brand-green-light">Rak</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/80">
            Continuous pipeline security visibility, vulnerability
            management, and compliance score tracking — backed by T-Mat
            Global&apos;s 24/7 managed DevSecOps team.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://vaultrak.t-matglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded bg-brand-green px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-brand-black transition-colors hover:bg-brand-green-dark sm:inline-block"
            >
              Launch VaultRak
            </a>
            <Link
              href="/schedule-demo"
              className="block rounded border-2 border-white px-8 py-4 text-center font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-brand-black sm:inline-block"
            >
              Schedule a Demo
            </Link>
          </div>
        </ScrollFadeIn>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight text-brand-black sm:text-4xl">
              Everything Your Team Needs In{" "}
              <span className="text-brand-accent">One Platform</span>
            </h2>
          </ScrollFadeIn>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ Icon, title, description }, i) => (
              <ScrollFadeIn
                key={title}
                delayMs={(i % 3) * 100}
                className="rounded-lg border border-black/5 bg-brand-grey p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green">
                  <Icon className="h-6 w-6 text-brand-black" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-tight text-brand-black">
                  {title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-black/70">
                  {description}
                </p>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight text-brand-black sm:text-4xl">
              How It <span className="text-brand-accent">Works</span>
            </h2>
          </ScrollFadeIn>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {STEPS.map(({ number, Icon, title, description }, i) => (
              <ScrollFadeIn key={number} delayMs={i * 100} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green">
                  <Icon className="h-7 w-7 text-brand-black" />
                </div>
                <p className="mt-4 font-heading text-sm font-bold uppercase tracking-widest text-brand-accent">
                  Step {number}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-brand-black">
                  {title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-black/70">
                  {description}
                </p>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20">
        <ScrollFadeIn className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            See <span className="text-brand-green-light">VaultRak</span> In
            Action
          </h2>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10">
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
      </section>

      <section className="bg-brand-green py-16">
        <ScrollFadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-brand-black sm:text-3xl">
            See VaultRak On Your Pipeline
          </h2>
          <Link
            href="/schedule-demo"
            className="mt-8 block w-full rounded bg-brand-black px-10 py-5 text-center font-heading text-lg font-bold uppercase tracking-wider text-white transition-colors hover:bg-black sm:inline-block sm:w-auto sm:text-xl"
          >
            Schedule a Demo
          </Link>
        </ScrollFadeIn>
      </section>
    </>
  );
}
