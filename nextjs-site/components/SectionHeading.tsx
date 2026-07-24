type Segment = {
  text: string;
  color?: "black" | "green" | "white";
};

interface SectionHeadingProps {
  segments: Segment[];
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

const colorClass: Record<NonNullable<Segment["color"]>, string> = {
  black: "text-brand-black",
  green: "text-brand-green",
  white: "text-white",
};

export default function SectionHeading({
  segments,
  align = "left",
  as = "h2",
  className = "",
}: SectionHeadingProps) {
  const Tag = as;

  return (
    <Tag
      className={`font-heading font-bold uppercase leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {segments.map((segment, index) => (
        <span key={index} className={colorClass[segment.color ?? "black"]}>
          {segment.text}
          {index < segments.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
