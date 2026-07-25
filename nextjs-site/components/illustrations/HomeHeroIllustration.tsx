import { ILLO } from "./palette";
import {
  Limb,
  Cap,
  Shoe,
  Head,
  GlowBlob,
  BlurDefs,
  FloatingBadge,
  LockGlyph,
  CloudGlyph,
  GearGlyph,
  Shield,
} from "./parts";

export default function HomeHeroIllustration() {
  return (
    <svg viewBox="0 0 500 520" className="h-full w-full" role="img" aria-label="An engineer standing confidently beside a large shield, presenting a secured delivery pipeline">
      <BlurDefs />

      {/* shield + glow, upper right */}
      <g className="illo-float">
        <GlowBlob cx={372} cy={148} r={92} opacity={0.45} />
        <Shield cx={372} cy={150} scale={1.05} />
      </g>

      {/* floating icon badges */}
      <FloatingBadge cx={56} cy={78} className="illo-float-sm">
        <LockGlyph />
      </FloatingBadge>
      <FloatingBadge cx={438} cy={276} className="illo-float-delay">
        <CloudGlyph />
      </FloatingBadge>
      <FloatingBadge cx={68} cy={330} className="illo-float-delay-2">
        <GearGlyph />
      </FloatingBadge>

      {/* laptop, lower left */}
      <g transform="translate(30, 380)">
        <path
          d="M 10 68 L 4 84 Q 2 90 8 90 L 168 90 Q 174 90 172 84 L 166 68 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth={5}
          strokeLinejoin="round"
        />
        <rect x={18} y={0} width={140} height={70} rx={8} fill={ILLO.black} />
        <rect x={26} y={8} width={124} height={54} rx={4} fill={ILLO.charcoal} />
        <rect x={36} y={18} width={60} height={7} rx={3.5} fill={ILLO.yellow} />
        <rect x={36} y={31} width={90} height={7} rx={3.5} fill={ILLO.white} opacity={0.85} />
        <rect x={36} y={44} width={40} height={7} rx={3.5} fill={ILLO.yellow} />
      </g>

      {/* character */}
      <g>
        {/* back leg */}
        <Limb points={[[208, 295], [222, 358], [238, 415]]} color={ILLO.charcoal} />
        <Shoe cx={238} cy={418} />

        {/* front leg */}
        <Limb points={[[172, 295], [168, 365], [162, 422]]} color={ILLO.charcoalLight} />
        <Shoe cx={162} cy={425} />

        {/* torso */}
        <path
          d="M 156 165
             Q 146 165 149 190
             L 159 258
             Q 161 288 173 297
             L 207 297
             Q 219 288 221 256
             L 231 188
             Q 234 163 224 160
             Q 190 149 156 165 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth={6}
          strokeLinejoin="round"
        />
        {/* chest badge */}
        <circle cx={190} cy={205} r={17} fill={ILLO.yellow} stroke={ILLO.black} strokeWidth={4} />
        <path d="M 183 205 L 188 211 L 198 198" stroke={ILLO.black} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* neck */}
        <rect x={178} y={128} width={24} height={26} rx={8} fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth={4} />

        {/* left arm, relaxed at side */}
        <Limb points={[[156, 168], [131, 214], [148, 258]]} color={ILLO.offWhite} />
        <Cap cx={148} cy={260} r={11} color={ILLO.offWhite} />

        {/* right arm, raised presenting toward the shield */}
        <Limb points={[[226, 162], [273, 126], [313, 90]]} color={ILLO.offWhite} />
        <Cap cx={314} cy={87} r={11} color={ILLO.offWhite} />

        {/* head */}
        <Head cx={190} cy={95} r={42} hair="short" look="right" expression="grin" />
      </g>
    </svg>
  );
}
