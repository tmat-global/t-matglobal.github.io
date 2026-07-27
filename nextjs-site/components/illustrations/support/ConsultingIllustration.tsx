import { ILLO } from "@/components/illustrations/palette";
import { Limb, Cap, Shoe, Head } from "@/components/illustrations/parts";

export default function ConsultingIllustration() {
  return (
    <svg viewBox="0 0 400 340" className="h-full w-full" role="img" aria-label="A consultant standing confidently with a briefcase">
      {/* floor line */}
      <rect x="60" y="290" width="280" height="4" rx="2" fill={ILLO.charcoalLight} opacity="0.4" />

      {/* floating summary card, upper right */}
      <g transform="translate(232, 40)">
        <rect width="130" height="86" rx="8" fill="none" stroke={ILLO.charcoalLight} strokeWidth="3" />
        <rect x="12" y="14" width="60" height="8" rx="4" fill={ILLO.charcoal} opacity="0.5" />
        <rect x="12" y="30" width="90" height="6" rx="3" fill={ILLO.charcoalLight} opacity="0.6" />
        <rect x="12" y="42" width="70" height="6" rx="3" fill={ILLO.charcoalLight} opacity="0.4" />
        <rect x="12" y="60" width="40" height="14" rx="3" fill={ILLO.yellow} />
      </g>

      {/* character */}
      <g>
        <Limb points={[[176, 190], [172, 232], [164, 274]]} color={ILLO.charcoal} outlineWidth={21} innerWidth={15} />
        <Shoe cx={164} cy={277} />
        <Limb points={[[210, 190], [216, 232], [224, 274]]} color={ILLO.charcoalLight} outlineWidth={21} innerWidth={15} />
        <Shoe cx={224} cy={277} flip />

        <path
          d="M 168 118 Q 156 118 160 144 L 170 200 Q 172 226 186 234 L 216 234 Q 230 226 232 198 L 242 146 Q 245 116 233 112 Q 200 100 168 118 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth={5.5}
          strokeLinejoin="round"
        />
        <rect x="188" y="88" width="24" height="27" rx="8" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth={4} />

        {/* left arm relaxed at side, right hand holding briefcase */}
        <Limb points={[[172, 124], [148, 168], [166, 208]]} color={ILLO.offWhite} outlineWidth={21} innerWidth={14} />
        <Cap cx={166} cy={210} r={10} color={ILLO.offWhite} />

        <Limb points={[[234, 122], [252, 160], [236, 200]]} color={ILLO.offWhite} outlineWidth={21} innerWidth={14} />
        <Cap cx={236} cy={202} r={10} color={ILLO.offWhite} />

        {/* briefcase */}
        <g transform="translate(210, 198)">
          <rect x="0" y="6" width="56" height="38" rx="5" fill={ILLO.charcoal} stroke={ILLO.black} strokeWidth={4} />
          <rect x="20" y="-2" width="16" height="14" rx="3" fill="none" stroke={ILLO.black} strokeWidth={4} />
          <rect x="0" y="22" width="56" height="6" fill={ILLO.yellow} />
        </g>

        <Head cx={200} cy={60} r={38} hair="swoop" hairColor={ILLO.charcoal} look="right" expression="focused" />
      </g>
    </svg>
  );
}
