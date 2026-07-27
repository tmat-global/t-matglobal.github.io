import { ILLO } from "@/components/illustrations/palette";
import { Limb, Cap, Shoe, Head } from "@/components/illustrations/parts";

export default function AuditIllustration() {
  return (
    <svg viewBox="0 0 400 340" className="h-full w-full" role="img" aria-label="A professional reviewing a checklist document">
      <rect x="50" y="290" width="300" height="4" rx="2" fill={ILLO.charcoalLight} opacity="0.4" />

      {/* large document behind the character */}
      <g transform="translate(190, 40)">
        <rect width="150" height="200" rx="8" fill="none" stroke={ILLO.charcoalLight} strokeWidth="3" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(18, ${34 + i * 34})`}>
            <rect width="16" height="16" rx="4" fill="none" stroke={ILLO.charcoalLight} strokeWidth="2.5" />
            {i < 3 ? (
              <path d="M 3 8 L 7 12 L 13 4" stroke={ILLO.yellow} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            ) : null}
            <rect x="26" y="4" width="90" height="8" rx="4" fill={ILLO.charcoalLight} opacity="0.5" />
          </g>
        ))}
      </g>

      {/* character */}
      <g>
        <Limb points={[[136, 190], [132, 232], [124, 274]]} color={ILLO.charcoal} outlineWidth={21} innerWidth={15} />
        <Shoe cx={124} cy={277} />
        <Limb points={[[170, 190], [176, 232], [184, 274]]} color={ILLO.charcoalLight} outlineWidth={21} innerWidth={15} />
        <Shoe cx={184} cy={277} flip />

        <path
          d="M 128 118 Q 116 118 120 144 L 130 200 Q 132 226 146 234 L 176 234 Q 190 226 192 198 L 202 146 Q 205 116 193 112 Q 160 100 128 118 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth={5.5}
          strokeLinejoin="round"
        />
        <rect x="148" y="88" width="24" height="27" rx="8" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth={4} />

        <Limb points={[[132, 124], [108, 158], [124, 196]]} color={ILLO.offWhite} outlineWidth={21} innerWidth={14} />
        <Cap cx={124} cy={198} r={10} color={ILLO.offWhite} />

        <Limb points={[[194, 122], [214, 156], [198, 194]]} color={ILLO.offWhite} outlineWidth={21} innerWidth={14} />
        <Cap cx={198} cy={196} r={10} color={ILLO.offWhite} />

        {/* clipboard held in front */}
        <g transform="translate(146, 186)">
          <rect x="0" y="0" width="60" height="76" rx="5" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth={4} />
          <rect x="18" y="-6" width="24" height="12" rx="3" fill={ILLO.charcoalLight} stroke={ILLO.black} strokeWidth="3" />
          <rect x="10" y="16" width="40" height="5" rx="2.5" fill={ILLO.charcoal} opacity="0.6" />
          <rect x="10" y="28" width="30" height="5" rx="2.5" fill={ILLO.charcoal} opacity="0.4" />
          <path d="M 12 44 L 20 52 L 40 32" stroke={ILLO.yellow} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <Head cx={160} cy={60} r={38} hair="short" hairColor={ILLO.charcoal} look="left" expression="focused" />
      </g>
    </svg>
  );
}
