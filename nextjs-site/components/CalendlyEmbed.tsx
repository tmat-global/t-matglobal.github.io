import { CALENDLY_URL } from "@/lib/constants";

export default function CalendlyEmbed({
  height = 700,
}: {
  height?: number;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-brand-black/10 shadow-lg">
      <iframe
        src={CALENDLY_URL}
        title="Schedule a demo with T-Mat Global"
        className="w-full"
        style={{ height }}
        frameBorder="0"
      />
    </div>
  );
}
