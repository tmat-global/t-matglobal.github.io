import {
  Search,
  Handshake,
  PenTool,
  Code2,
  ClipboardCheck,
  FlaskConical,
  RefreshCw,
  Truck,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollFadeIn from "@/components/illustrations/ScrollFadeIn";

const STEPS = [
  { number: 1, label: "Assess", Icon: Search },
  { number: 2, label: "Plan", Icon: Handshake },
  { number: 3, label: "Design", Icon: PenTool },
  { number: 4, label: "Implement", Icon: Code2 },
  { number: 5, label: "Test", Icon: ClipboardCheck },
  { number: 6, label: "Analyze", Icon: FlaskConical },
  { number: 7, label: "Harden", Icon: RefreshCw },
  { number: 8, label: "Operate", Icon: Truck },
];

export default function WorkflowSteps() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          <SectionHeading
            align="center"
            className="mb-20"
            segments={[
              { text: "HOW DOES OUR", color: "black" },
              { text: "WORK FLOW GO", color: "green" },
            ]}
          />
        </ScrollFadeIn>

        <div className="relative flex flex-col gap-6 lg:min-h-[280px] lg:flex-row lg:items-center lg:justify-between lg:gap-3">
          <div className="pipeline-flow absolute left-0 right-0 top-1/2 hidden h-1 -translate-y-1/2 rounded-full lg:block" />

          {STEPS.map((step, index) => {
            const offsetUp = index % 2 === 0;
            return (
              <ScrollFadeIn
                key={step.number}
                delayMs={index * 90}
                className={`relative flex flex-1 flex-col items-center ${
                  offsetUp ? "lg:-translate-y-12" : "lg:translate-y-12"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute left-1/2 hidden w-0.5 -translate-x-1/2 bg-brand-black/15 lg:block ${
                    offsetUp ? "top-full h-12" : "bottom-full h-12"
                  }`}
                />
                <span
                  aria-hidden
                  className={`absolute left-1/2 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brand-green bg-brand-black lg:block ${
                    offsetUp ? "top-full mt-11" : "bottom-full mb-11"
                  }`}
                />

                <div className="relative z-10 flex w-full max-w-[150px] flex-col items-center rounded-xl border border-brand-black/10 bg-white px-4 py-5 text-center shadow-sm">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-green">
                    <step.Icon className="h-6 w-6 text-brand-black" strokeWidth={2} />
                  </div>
                  <p className="mt-3 font-heading text-xs font-bold uppercase tracking-wide text-brand-accent">
                    Stage {step.number}
                  </p>
                  <p className="mt-1 font-heading text-sm font-bold uppercase tracking-wide text-brand-black">
                    {step.label}
                  </p>
                </div>

                {index < STEPS.length - 1 ? (
                  <span
                    aria-hidden
                    className="mt-3 h-8 w-0.5 bg-brand-black/15 lg:hidden"
                  />
                ) : null}
              </ScrollFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
