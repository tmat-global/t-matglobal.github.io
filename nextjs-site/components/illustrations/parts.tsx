import { ILLO } from "./palette";

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
