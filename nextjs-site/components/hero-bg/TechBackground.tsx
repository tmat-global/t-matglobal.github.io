import { ILLO } from "@/components/illustrations/palette";

export type BgVariant = "pipeline" | "dashboard" | "chart" | "vault" | "team" | "network";

function GlowLayer() {
  return (
    <>
      <circle cx="1220" cy="200" r="260" fill={ILLO.yellow} opacity="0.16" filter="url(#tb-blur)" className="illo-pulse-glow" />
      <circle cx="220" cy="720" r="200" fill={ILLO.yellow} opacity="0.08" filter="url(#tb-blur)" />
    </>
  );
}

function RackBars({ x }: { x: number }) {
  const bars = Array.from({ length: 6 });
  return (
    <g opacity="0.5">
      {bars.map((_, i) => (
        <g key={i} transform={`translate(${x}, ${100 + i * 46})`}>
          <rect width="120" height="34" rx="3" fill={ILLO.charcoal} opacity="0.5" stroke={ILLO.charcoalLight} strokeWidth="1" />
          {Array.from({ length: 4 }).map((_, j) => (
            <circle
              key={j}
              cx={16 + j * 14}
              cy={17}
              r="2.4"
              fill={j === i % 4 ? ILLO.yellow : ILLO.charcoalLight}
              opacity={j === i % 4 ? 0.9 : 0.5}
            />
          ))}
        </g>
      ))}
    </g>
  );
}

function PipelineArt() {
  const stages = [180, 380, 580, 780, 980, 1180];
  return (
    <g transform="translate(0, 620)">
      <line x1="140" y1="0" x2="1220" y2="0" stroke={ILLO.charcoalLight} strokeWidth="2" opacity="0.4" />
      {stages.map((x, i) => (
        <g key={x}>
          {i < stages.length - 1 ? (
            <line x1={x + 22} y1="0" x2={stages[i + 1] - 22} y2="0" stroke={ILLO.yellowDark} strokeWidth="2" opacity="0.55" strokeDasharray="6 6" />
          ) : null}
          <circle cx={x} cy="0" r="22" fill={ILLO.black} stroke={i % 2 === 0 ? ILLO.yellow : ILLO.charcoalLight} strokeWidth="3" opacity="0.85" />
          <circle cx={x} cy="0" r="6" fill={i % 2 === 0 ? ILLO.yellow : ILLO.charcoalLight} opacity="0.9" />
        </g>
      ))}
    </g>
  );
}

function DashboardArt() {
  const monitors = [
    { x: 900, y: 120, w: 260, h: 170 },
    { x: 1180, y: 320, w: 200, h: 130 },
    { x: 760, y: 340, w: 180, h: 120 },
  ];
  return (
    <g opacity="0.7">
      {monitors.map((m, i) => (
        <g key={i} transform={`translate(${m.x}, ${m.y})`}>
          <rect width={m.w} height={m.h} rx="8" fill="none" stroke={ILLO.charcoalLight} strokeWidth="2" />
          <rect x="10" y="10" width={m.w - 20} height="10" rx="2" fill={ILLO.charcoalLight} opacity="0.6" />
          {[0.3, 0.55, 0.4, 0.7].map((v, j) => (
            <rect
              key={j}
              x={16 + j * ((m.w - 32) / 4)}
              y={m.h - 16 - v * (m.h - 40)}
              width={(m.w - 32) / 4 - 8}
              height={v * (m.h - 40)}
              fill={j === 2 ? ILLO.yellow : ILLO.charcoalLight}
              opacity={j === 2 ? 0.85 : 0.5}
            />
          ))}
        </g>
      ))}
    </g>
  );
}

function ChartArt() {
  const points = [
    [780, 520],
    [880, 460],
    [960, 480],
    [1060, 380],
    [1160, 400],
    [1260, 280],
    [1340, 220],
  ];
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  return (
    <g opacity="0.8">
      <line x1="760" y1="560" x2="1360" y2="560" stroke={ILLO.charcoalLight} strokeWidth="2" opacity="0.4" />
      <line x1="760" y1="200" x2="760" y2="560" stroke={ILLO.charcoalLight} strokeWidth="2" opacity="0.4" />
      <path d={d} fill="none" stroke={ILLO.yellow} strokeWidth="3" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === points.length - 1 ? 7 : 4} fill={ILLO.yellow} opacity="0.9" />
      ))}
    </g>
  );
}

function VaultArt() {
  return (
    <g transform="translate(1150, 380)" opacity="0.75">
      <circle r="220" fill="none" stroke={ILLO.charcoalLight} strokeWidth="2" opacity="0.4" />
      <circle r="170" fill="none" stroke={ILLO.charcoalLight} strokeWidth="2" opacity="0.4" />
      <circle r="60" fill="none" stroke={ILLO.yellow} strokeWidth="4" opacity="0.6" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = Math.cos(angle) * 175;
        const y1 = Math.sin(angle) * 175;
        const x2 = Math.cos(angle) * 215;
        const y2 = Math.sin(angle) * 215;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ILLO.yellowDark} strokeWidth="3" opacity="0.5" strokeLinecap="round" />;
      })}
    </g>
  );
}

function TeamArt() {
  const desks = [
    { x: 820, h: 90 },
    { x: 940, h: 130 },
    { x: 1060, h: 100 },
    { x: 1180, h: 150 },
    { x: 1300, h: 110 },
  ];
  return (
    <g opacity="0.65">
      {desks.map((d, i) => (
        <g key={i} transform={`translate(${d.x}, ${640 - d.h})`}>
          <rect width="90" height={d.h} rx="4" fill="none" stroke={ILLO.charcoalLight} strokeWidth="2" />
          <circle cx="45" cy="20" r="6" fill={i % 2 === 0 ? ILLO.yellow : ILLO.charcoalLight} opacity="0.8" />
        </g>
      ))}
      <line x1="800" y1="640" x2="1400" y2="640" stroke={ILLO.charcoalLight} strokeWidth="2" opacity="0.4" />
    </g>
  );
}

function NetworkArt() {
  const nodes = [
    [860, 200], [1020, 160], [1180, 240], [1320, 180],
    [900, 340], [1100, 380], [1300, 340], [1220, 480], [980, 480],
  ];
  const edges = [[0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6], [1, 5], [5, 8], [8, 7], [6, 7]];
  return (
    <g opacity="0.7">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={ILLO.charcoalLight} strokeWidth="1.5" opacity="0.5"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 7 : 4.5} fill={i % 3 === 0 ? ILLO.yellow : ILLO.charcoalLight} opacity="0.85" />
      ))}
    </g>
  );
}

const RACK_SIDE: Record<BgVariant, "left" | "right" | "none"> = {
  pipeline: "left",
  dashboard: "left",
  chart: "left",
  vault: "left",
  team: "right",
  network: "left",
};

export default function TechBackground({ variant }: { variant: BgVariant }) {
  const rackSide = RACK_SIDE[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-black" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 25% 15%, #1a1a1a 0%, #0A0A0A 55%, #000000 100%)",
        }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="tb-blur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="60" />
          </filter>
          <pattern id="tb-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke={ILLO.white} strokeWidth="1" opacity="0.035" />
          </pattern>
        </defs>

        <rect width="1600" height="900" fill="url(#tb-grid)" />
        <GlowLayer />

        {rackSide === "left" ? <RackBars x={60} /> : null}
        {rackSide === "right" ? <RackBars x={1420} /> : null}

        {variant === "pipeline" ? <PipelineArt /> : null}
        {variant === "dashboard" ? <DashboardArt /> : null}
        {variant === "chart" ? <ChartArt /> : null}
        {variant === "vault" ? <VaultArt /> : null}
        {variant === "team" ? <TeamArt /> : null}
        {variant === "network" ? <NetworkArt /> : null}
      </svg>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 3px)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
    </div>
  );
}
