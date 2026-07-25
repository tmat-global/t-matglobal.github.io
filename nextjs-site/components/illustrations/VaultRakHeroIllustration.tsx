import { ILLO } from "./palette";
import { Limb, Cap, Shoe, Head, GlowBlob, BlurDefs, Shield } from "./parts";

export default function VaultRakHeroIllustration() {
  return (
    <svg
      viewBox="0 0 500 540"
      className="h-full w-full"
      role="img"
      aria-label="A sentinel character standing guard in front of a glowing vault door"
    >
      <BlurDefs />

      {/* glowing vault door, behind the sentinel */}
      <g className="illo-float">
        <GlowBlob cx={250} cy={210} r={190} color={ILLO.yellow} opacity={0.35} />
        <circle cx={250} cy={210} r={158} fill="none" stroke={ILLO.charcoalLight} strokeWidth={6} opacity={0.5} />
        <circle cx={250} cy={210} r={128} fill="none" stroke={ILLO.charcoalLight} strokeWidth={4} opacity={0.4} />
        <Shield cx={250} cy={210} scale={1.55} fill={ILLO.yellow} checkColor={ILLO.black} />
        {/* vault-wheel spokes radiating from the shield, for a "vault door" read */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x1 = 250 + Math.cos(angle) * 132;
          const y1 = 210 + Math.sin(angle) * 132;
          const x2 = 250 + Math.cos(angle) * 156;
          const y2 = 210 + Math.sin(angle) * 156;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={ILLO.yellowDark}
              strokeWidth={5}
              strokeLinecap="round"
              opacity={0.6}
            />
          );
        })}
      </g>

      {/* sentinel character, standing guard */}
      <g>
        {/* legs, guard stance */}
        <Limb points={[[218, 372], [212, 430], [206, 480]]} color={ILLO.charcoalLight} outline={ILLO.offWhite} />
        <Shoe cx={206} cy={483} color={ILLO.black} outline={ILLO.offWhite} />

        <Limb points={[[282, 372], [288, 430], [294, 480]]} color={ILLO.charcoal} outline={ILLO.offWhite} />
        <Shoe cx={294} cy={483} flip color={ILLO.black} outline={ILLO.offWhite} />

        {/* torso, tall sentinel coat */}
        <path
          d="M 202 232
             Q 190 232 194 260
             L 205 350
             Q 208 384 222 393
             L 278 393
             Q 292 384 295 348
             L 306 258
             Q 310 230 298 226
             Q 250 212 202 232 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.offWhite}
          strokeWidth={6}
          strokeLinejoin="round"
        />
        {/* coat centre seam */}
        <line x1={250} y1={240} x2={250} y2={388} stroke={ILLO.charcoalLight} strokeWidth={3} opacity={0.7} />

        {/* chest badge, echoes the vault shield */}
        <circle cx={250} cy={278} r={22} fill={ILLO.yellow} stroke={ILLO.offWhite} strokeWidth={4} className="illo-pulse-glow" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
        <path d="M 240 278 L 247 286 L 262 266" stroke={ILLO.black} strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* neck */}
        <rect x={234} y={196} width={26} height={28} rx={8} fill={ILLO.offWhite} stroke={ILLO.offWhite} strokeWidth={4} />

        {/* left arm, down to belt */}
        <Limb points={[[206, 236], [186, 288], [222, 330]]} color={ILLO.offWhite} outline={ILLO.offWhite} innerWidth={15} />
        <Cap cx={224} cy={332} r={11} color={ILLO.offWhite} outline={ILLO.offWhite} />

        {/* right arm, down to belt, hands clasped in front like a standing guard */}
        <Limb points={[[296, 236], [316, 288], [280, 330]]} color={ILLO.offWhite} outline={ILLO.offWhite} innerWidth={15} />
        <Cap cx={278} cy={332} r={11} color={ILLO.offWhite} outline={ILLO.offWhite} />

        {/* belt buckle where hands meet */}
        <rect x={238} y={324} width={24} height={16} rx={4} fill={ILLO.yellow} stroke={ILLO.offWhite} strokeWidth={3} />

        <Head
          cx={250}
          cy={162}
          r={46}
          hair="short"
          hairColor={ILLO.charcoal}
          look="center"
          expression="focused"
          outline={ILLO.offWhite}
        />
      </g>
    </svg>
  );
}
