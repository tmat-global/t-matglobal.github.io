import { ILLO } from "./palette";
import { Limb, Cap, Head, GlowBlob, BlurDefs } from "./parts";

function Monitor({
  cx,
  cy,
  w,
  h,
  hero = false,
}: {
  cx: number;
  cy: number;
  w: number;
  h: number;
  hero?: boolean;
}) {
  const barValues = hero ? [22, 34, 18, 42, 28] : [14, 22, 10];
  const barW = (w - 24) / barValues.length - 6;
  const maxBar = Math.max(...barValues);
  return (
    <g transform={`translate(${cx - w / 2}, ${cy - h / 2})`}>
      <rect x={0} y={0} width={w} height={h} rx={8} fill={ILLO.black} />
      <rect x={6} y={6} width={w - 12} height={h - 12} rx={4} fill={ILLO.charcoal} />
      {barValues.map((v, i) => {
        const bh = (v / maxBar) * (h - 28);
        const bx = 14 + i * (barW + 6);
        return (
          <rect
            key={i}
            x={bx}
            y={h - 14 - bh}
            width={barW}
            height={bh}
            rx={2}
            fill={i === barValues.length - 2 ? ILLO.yellow : ILLO.white}
            opacity={i === barValues.length - 2 ? 1 : 0.75}
          />
        );
      })}
      <rect x={w / 2 - 12} y={h} width={24} height={10} fill={ILLO.black} />
      <rect x={w / 2 - 26} y={h + 10} width={52} height={6} rx={3} fill={ILLO.black} />
    </g>
  );
}

export default function ServicesHeroIllustration() {
  return (
    <svg viewBox="0 0 500 480" className="h-full w-full" role="img" aria-label="An engineer sitting at a control desk in front of three monitors showing security dashboards">
      <BlurDefs />
      <GlowBlob cx={250} cy={190} r={150} opacity={0.28} className="illo-pulse-glow" />

      <g className="illo-float-sm">
        <Monitor cx={128} cy={210} w={110} h={78} />
      </g>
      <g className="illo-float-delay">
        <Monitor cx={372} cy={214} w={110} h={78} />
      </g>
      <g className="illo-float-delay-2">
        <Monitor cx={250} cy={172} w={150} h={104} hero />
      </g>

      {/* desk */}
      <rect x={50} y={340} width={400} height={18} rx={6} fill={ILLO.black} />
      <rect x={60} y={358} width={380} height={80} rx={6} fill={ILLO.charcoal} stroke={ILLO.black} strokeWidth={5} />
      <rect x={190} y={330} width={120} height={16} rx={4} fill={ILLO.charcoalLight} stroke={ILLO.black} strokeWidth={4} />

      {/* character, seated behind desk */}
      <g>
        <path
          d="M 214 232
             Q 204 232 207 256
             L 214 320
             L 286 320
             L 293 256
             Q 296 230 286 228
             Q 250 218 214 232 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth={6}
          strokeLinejoin="round"
        />
        <circle cx={250} cy={262} r={15} fill={ILLO.yellow} stroke={ILLO.black} strokeWidth={4} />
        <path d="M 244 262 L 249 268 L 258 255" stroke={ILLO.black} strokeWidth={3.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />

        <rect x={238} y={196} width={24} height={26} rx={8} fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth={4} />

        <Limb points={[[218, 236], [190, 280], [210, 332]]} color={ILLO.offWhite} />
        <Cap cx={212} cy={334} r={11} color={ILLO.offWhite} />

        <Limb points={[[282, 234], [312, 278], [292, 332]]} color={ILLO.offWhite} />
        <Cap cx={290} cy={334} r={11} color={ILLO.offWhite} />

        <Head cx={250} cy={160} r={44} hair="swoop" look="center" expression="focused" />
      </g>
    </svg>
  );
}
