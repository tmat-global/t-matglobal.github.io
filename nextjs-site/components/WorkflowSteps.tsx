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
    <section className="bg-brand-grey py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          className="mb-16"
          segments={[
            { text: "HOW DOES OUR", color: "black" },
            { text: "WORK FLOW GO", color: "green" },
          ]}
        />

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-4">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-1 flex-col items-center text-center"
            >
              {index > 0 ? (
                <>
                  <span
                    aria-hidden
                    className="absolute -top-10 left-1/2 h-10 w-0.5 -translate-x-1/2 bg-brand-green/30 lg:hidden"
                  />
                  <span
                    aria-hidden
                    className="absolute right-1/2 top-8 hidden h-0.5 w-full bg-brand-green/30 lg:block"
                  />
                </>
              ) : null}

              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-green">
                <step.Icon className="h-7 w-7 text-brand-black" strokeWidth={2} />
              </div>

              <p className="mt-4 font-heading text-sm font-bold uppercase tracking-wide text-brand-accent">
                {step.number}. {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
