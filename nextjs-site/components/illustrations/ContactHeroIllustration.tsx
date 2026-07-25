import { ILLO } from "./palette";
import { Limb, Cap, Shoe, Head, GlowBlob, BlurDefs, FloatingBadge } from "./parts";

export default function ContactHeroIllustration() {
  return (
    <svg
      viewBox="0 0 500 520"
      className="h-full w-full"
      role="img"
      aria-label="An engineer wearing a headset, waving hello on a video call"
    >
      <BlurDefs />
      <GlowBlob cx={250} cy={210} r={160} opacity={0.28} />

      {/* floating chat bubble, "typing" dots */}
      <g className="illo-float">
        <rect x={330} y={96} width={110} height={70} rx={16} fill={ILLO.white} stroke={ILLO.black} strokeWidth={5} />
        <path d="M 352 166 L 348 184 L 372 166 Z" fill={ILLO.white} stroke={ILLO.black} strokeWidth={5} strokeLinejoin="round" />
        <circle cx={362} cy={131} r={6} fill={ILLO.yellowDark} />
        <circle cx={385} cy={131} r={6} fill={ILLO.black} opacity={0.75} />
        <circle cx={408} cy={131} r={6} fill={ILLO.yellowDark} />
      </g>

      {/* floating signal / connection glyph */}
      <FloatingBadge cx={78} cy={340} className="illo-float-delay">
        <g stroke={ILLO.black} strokeWidth={3.5} fill="none" strokeLinecap="round">
          <path d="M -11 8 A 16 16 0 0 1 11 8" opacity={0.9} />
          <path d="M -6 8 A 9 9 0 0 1 6 8" opacity={0.9} />
        </g>
        <circle cx={0} cy={8} r={2.5} fill={ILLO.black} />
      </FloatingBadge>

      {/* floating heart / connection glyph */}
      <FloatingBadge cx={66} cy={150} r={22} className="illo-float-delay-2">
        <path
          d="M 0 8 C -10 0 -12 -10 -4 -10 C -1 -10 0 -7 0 -6 C 0 -7 1 -10 4 -10 C 12 -10 10 0 0 8 Z"
          fill={ILLO.yellowDark}
        />
      </FloatingBadge>

      {/* character */}
      <g>
        <Limb points={[[228, 300], [224, 362], [214, 420]]} color={ILLO.charcoal} />
        <Shoe cx={214} cy={423} />

        <Limb points={[[266, 300], [274, 362], [286, 420]]} color={ILLO.charcoalLight} />
        <Shoe cx={286} cy={423} flip />

        <path
          d="M 202 170
             Q 190 170 194 196
             L 205 262
             Q 207 292 221 300
             L 265 300
             Q 279 292 281 260
             L 291 192
             Q 294 166 282 163
             Q 240 151 202 170 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth={6}
          strokeLinejoin="round"
        />
        <circle cx={243} cy={208} r={16} fill={ILLO.yellow} stroke={ILLO.black} strokeWidth={4} />
        <path d="M 236 208 L 241 214 L 251 200" stroke={ILLO.black} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />

        <rect x={230} y={132} width={26} height={28} rx={8} fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth={4} />

        {/* left arm, relaxed at hip */}
        <Limb points={[[204, 174], [180, 218], [198, 260]]} color={ILLO.offWhite} />
        <Cap cx={198} cy={262} r={11} color={ILLO.offWhite} />

        {/* right arm, raised high in a wave */}
        <Limb points={[[286, 168], [316, 122], [300, 66]]} color={ILLO.offWhite} />
        <Cap cx={297} cy={62} r={11} color={ILLO.offWhite} />
        {/* wave motion lines */}
        <g stroke={ILLO.black} strokeWidth={3.5} fill="none" strokeLinecap="round" opacity={0.55} className="illo-float-sm">
          <path d="M 322 48 Q 332 58 322 70" />
          <path d="M 336 40 Q 350 58 336 80" />
        </g>

        <Head cx={243} cy={100} r={44} hair="short" look="right" expression="grin" />

        {/* headset arc + mic, worn over the head */}
        <path
          d="M 203 96 A 44 44 0 0 1 287 100"
          stroke={ILLO.charcoalLight}
          strokeWidth={6}
          fill="none"
          strokeLinecap="round"
        />
        <circle cx={201} cy={104} r={9} fill={ILLO.yellow} stroke={ILLO.charcoalLight} strokeWidth={4} />
        <circle cx={287} cy={106} r={9} fill={ILLO.yellow} stroke={ILLO.charcoalLight} strokeWidth={4} />
        <path
          d="M 201 112 Q 196 138 218 146"
          stroke={ILLO.charcoalLight}
          strokeWidth={4.5}
          fill="none"
          strokeLinecap="round"
        />
        <circle cx={220} cy={147} r={5.5} fill={ILLO.charcoalLight} />
      </g>
    </svg>
  );
}
