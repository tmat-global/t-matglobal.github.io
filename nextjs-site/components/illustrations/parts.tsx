import { ILLO } from "./palette";

type Point = [number, number];

function smoothPath(points: Point[]): string {
  if (points.length === 2) {
    return `M ${points[0][0]} ${points[0][1]} L ${points[1][0]} ${points[1][1]}`;
  }
  const [p0, p1, p2] = points;
  return `M ${p0[0]} ${p0[1]} Q ${p1[0]} ${p1[1]} ${p2[0]} ${p2[1]}`;
}

/** A limb (arm or leg) drawn as a bold-outlined, rounded-cap stroked path
 * through 2-3 joint coordinates (shoulder/hip -> elbow/knee -> hand/foot). */
export function Limb({
  points,
  color,
  outline = ILLO.black,
  outlineWidth = 23,
  innerWidth = 16,
}: {
  points: Point[];
  color: string;
  outline?: string;
  outlineWidth?: number;
  innerWidth?: number;
}) {
  const d = smoothPath(points);
  return (
    <>
      <path
        d={d}
        stroke={outline}
        strokeWidth={outlineWidth}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={d}
        stroke={color}
        strokeWidth={innerWidth}
        strokeLinecap="round"
        fill="none"
      />
    </>
  );
}

/** A rounded mitt/hand or foot cap at the end of a limb. */
export function Cap({
  cx,
  cy,
  r = 10,
  color,
  outline = ILLO.black,
}: {
  cx: number;
  cy: number;
  r?: number;
  color: string;
  outline?: string;
}) {
  return <circle cx={cx} cy={cy} r={r} fill={color} stroke={outline} strokeWidth={4} />;
}

/** A simple rounded shoe. */
export function Shoe({
  cx,
  cy,
  flip = false,
  color = ILLO.black,
  outline = ILLO.black,
}: {
  cx: number;
  cy: number;
  flip?: boolean;
  color?: string;
  outline?: string;
}) {
  const dir = flip ? -1 : 1;
  return (
    <path
      d={`M ${cx - 14} ${cy - 8}
          L ${cx - 14} ${cy + 6}
          Q ${cx - 14} ${cy + 14} ${cx - 4} ${cy + 14}
          L ${cx + 20 * dir} ${cy + 14}
          Q ${cx + 26 * dir} ${cy + 14} ${cx + 22 * dir} ${cy + 4}
          Q ${cx + 8 * dir} ${cy - 2} ${cx + 4} ${cy - 8}
          Z`}
      fill={color}
      stroke={outline}
      strokeWidth={4}
      strokeLinejoin="round"
    />
  );
}

type HairStyle = "short" | "bun" | "swoop" | "waves" | "none";

/** A friendly, minimal head: circle + hair silhouette + two dot eyes + mouth. */
export function Head({
  cx,
  cy,
  r = 42,
  hair = "short",
  skin = ILLO.offWhite,
  hairColor = ILLO.charcoalLight,
  look = "center",
  expression = "smile",
  outline = ILLO.black,
  features = ILLO.black,
}: {
  cx: number;
  cy: number;
  r?: number;
  hair?: HairStyle;
  skin?: string;
  hairColor?: string;
  look?: "center" | "left" | "right" | "up";
  expression?: "smile" | "focused" | "grin" | "open";
  outline?: string;
  features?: string;
}) {
  const eyeDx = look === "right" ? 7 : look === "left" ? -7 : 0;
  const eyeDy = look === "up" ? -5 : 0;
  const ex = 13;

  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={skin} stroke={outline} strokeWidth={5} />

      {hair === "short" ? (
        <path
          d={`M ${cx - r * 0.98} ${cy - r * 0.15}
              A ${r} ${r} 0 0 1 ${cx + r * 0.98} ${cy - r * 0.15}
              Q ${cx + r * 0.7} ${cy - r * 1.15} ${cx} ${cy - r * 1.05}
              Q ${cx - r * 0.7} ${cy - r * 1.15} ${cx - r * 0.98} ${cy - r * 0.15}
              Z`}
          fill={hairColor}
          stroke={outline}
          strokeWidth={4}
          strokeLinejoin="round"
        />
      ) : null}

      {hair === "swoop" ? (
        <path
          d={`M ${cx - r * 0.95} ${cy - r * 0.1}
              A ${r} ${r} 0 0 1 ${cx + r * 0.95} ${cy - r * 0.25}
              Q ${cx + r * 0.5} ${cy - r * 1.25} ${cx - r * 0.3} ${cy - r * 1.0}
              Q ${cx - r * 0.85} ${cy - r * 0.85} ${cx - r * 0.95} ${cy - r * 0.1}
              Z`}
          fill={hairColor}
          stroke={outline}
          strokeWidth={4}
          strokeLinejoin="round"
        />
      ) : null}

      {hair === "bun" ? (
        <>
          <path
            d={`M ${cx - r * 0.95} ${cy - r * 0.05}
                A ${r} ${r} 0 0 1 ${cx + r * 0.95} ${cy - r * 0.05}
                Q ${cx + r * 0.75} ${cy - r * 1.05} ${cx} ${cy - r * 0.95}
                Q ${cx - r * 0.75} ${cy - r * 1.05} ${cx - r * 0.95} ${cy - r * 0.05}
                Z`}
            fill={hairColor}
            stroke={outline}
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <circle
            cx={cx}
            cy={cy - r * 1.15}
            r={r * 0.32}
            fill={hairColor}
            stroke={outline}
            strokeWidth={4}
          />
        </>
      ) : null}

      {hair === "waves" ? (
        <path
          d={`M ${cx - r * 1.02} ${cy + r * 0.1}
              Q ${cx - r * 1.1} ${cy - r * 0.6} ${cx - r * 0.5} ${cy - r * 1.0}
              Q ${cx} ${cy - r * 1.25} ${cx + r * 0.5} ${cy - r * 1.0}
              Q ${cx + r * 1.1} ${cy - r * 0.6} ${cx + r * 1.02} ${cy + r * 0.1}
              Q ${cx + r * 0.85} ${cy - r * 0.05} ${cx + r * 0.6} ${cy - r * 0.15}
              Q ${cx + r * 0.3} ${cy - r * 0.3} ${cx} ${cy - r * 0.32}
              Q ${cx - r * 0.3} ${cy - r * 0.3} ${cx - r * 0.6} ${cy - r * 0.15}
              Q ${cx - r * 0.85} ${cy - r * 0.05} ${cx - r * 1.02} ${cy + r * 0.1}
              Z`}
          fill={hairColor}
          stroke={outline}
          strokeWidth={4}
          strokeLinejoin="round"
        />
      ) : null}

      <circle cx={cx - ex + eyeDx} cy={cy - 2 + eyeDy} r={4.5} fill={features} />
      <circle cx={cx + ex + eyeDx} cy={cy - 2 + eyeDy} r={4.5} fill={features} />

      {expression === "smile" ? (
        <path
          d={`M ${cx - 12 + eyeDx} ${cy + 14} Q ${cx + eyeDx} ${cy + 21} ${cx + 12 + eyeDx} ${cy + 14}`}
          stroke={features}
          strokeWidth={3.5}
          fill="none"
          strokeLinecap="round"
        />
      ) : null}

      {expression === "grin" ? (
        <path
          d={`M ${cx - 14 + eyeDx} ${cy + 12} Q ${cx + eyeDx} ${cy + 24} ${cx + 14 + eyeDx} ${cy + 12} Z`}
          fill={features}
        />
      ) : null}

      {expression === "focused" ? (
        <line
          x1={cx - 9 + eyeDx}
          y1={cy + 16}
          x2={cx + 9 + eyeDx}
          y2={cy + 16}
          stroke={features}
          strokeWidth={3.5}
          strokeLinecap="round"
        />
      ) : null}

      {expression === "open" ? (
        <ellipse cx={cx + eyeDx} cy={cy + 16} rx={7} ry={9} fill={features} />
      ) : null}
    </g>
  );
}

/** A soft blurred glow circle, for shields/badges/vault doors. */
export function GlowBlob({
  cx,
  cy,
  r,
  color = ILLO.yellow,
  opacity = 0.5,
  className = "illo-pulse-glow",
}: {
  cx: number;
  cy: number;
  r: number;
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={color}
      opacity={opacity}
      filter="url(#illo-blur)"
      className={className}
    />
  );
}

/** Standard blur filter def, include once per SVG via <BlurDefs />. */
export function BlurDefs() {
  return (
    <defs>
      <filter id="illo-blur" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="18" />
      </filter>
    </defs>
  );
}

/** A small floating icon badge (lock / cloud / gear / etc). */
export function FloatingBadge({
  cx,
  cy,
  r = 26,
  bg = ILLO.white,
  className = "illo-float-sm",
  children,
}: {
  cx: number;
  cy: number;
  r?: number;
  bg?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <g className={className} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
      <circle cx={cx} cy={cy} r={r} fill={bg} stroke={ILLO.black} strokeWidth={4} />
      <g transform={`translate(${cx}, ${cy})`}>{children}</g>
    </g>
  );
}

export function LockGlyph() {
  return (
    <g>
      <rect x={-9} y={-2} width={18} height={14} rx={3} fill={ILLO.black} />
      <path
        d="M -6 -2 L -6 -8 A 6 6 0 0 1 6 -8 L 6 -2"
        stroke={ILLO.black}
        strokeWidth={3.5}
        fill="none"
      />
    </g>
  );
}

export function CloudGlyph() {
  return (
    <path
      d="M -12 4 A 7 7 0 0 1 -10 -9 A 9 9 0 0 1 8 -11 A 7 7 0 0 1 12 4 Z"
      fill={ILLO.black}
    />
  );
}

export function GearGlyph() {
  return (
    <g fill={ILLO.black}>
      <circle cx={0} cy={0} r={5.5} fill="none" stroke={ILLO.black} strokeWidth={3.5} />
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x1 = Math.cos(angle) * 8;
        const y1 = Math.sin(angle) * 8;
        const x2 = Math.cos(angle) * 12;
        const y2 = Math.sin(angle) * 12;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={ILLO.black}
            strokeWidth={3.5}
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
}

export function CheckGlyph({ color = ILLO.black }: { color?: string }) {
  return (
    <path
      d="M -8 0 L -2 7 L 9 -8"
      stroke={color}
      strokeWidth={5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

/** Large shield-with-checkmark motif used across several scenes. */
export function Shield({
  cx,
  cy,
  scale = 1,
  fill = ILLO.yellow,
  checkColor = ILLO.black,
  className = "",
}: {
  cx: number;
  cy: number;
  scale?: number;
  fill?: string;
  checkColor?: string;
  className?: string;
}) {
  return (
    <g transform={`translate(${cx}, ${cy}) scale(${scale})`} className={className}>
      <path
        d="M 0 -60 L 52 -40 L 52 10 Q 52 55 0 78 Q -52 55 -52 10 L -52 -40 Z"
        fill={fill}
        stroke={ILLO.black}
        strokeWidth={7}
        strokeLinejoin="round"
      />
      <path
        d="M -22 2 L -6 20 L 26 -18"
        stroke={checkColor}
        strokeWidth={11}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}
