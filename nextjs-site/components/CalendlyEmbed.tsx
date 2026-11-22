import { CALENDLY_URL } from "@/lib/constants";

export default function CalendlyEmbed({
  height = 700,
  locale = "en",
}: {
  height?: number;
  locale?: "en" | "zh-CN";
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-brand-black/10 shadow-lg">
      <iframe
        src={CALENDLY_URL}
        title={
          locale === "zh-CN"
            ? "预约 T-Mat Global 产品演示"
            : "Schedule a demo with T-Mat Global"
        }
        className="w-full"
        style={{ height }}
        frameBorder="0"
      />
    </div>
  );
}
