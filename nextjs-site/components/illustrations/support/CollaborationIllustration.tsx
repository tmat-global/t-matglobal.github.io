import { ILLO } from "@/components/illustrations/palette";
import { Limb, Cap, Shoe, Head } from "@/components/illustrations/parts";

export default function CollaborationIllustration() {
  return (
    <svg viewBox="0 0 440 340" className="h-full w-full" role="img" aria-label="Two colleagues collaborating at laptops">
      {/* desk */}
      <rect x="40" y="230" width="360" height="14" rx="4" fill={ILLO.charcoalLight} opacity="0.5" />

      {/* seated colleague, left */}
      <g>
        <path
          d="M 96 150 Q 86 150 89 172 L 98 224 L 152 224 L 158 172 Q 161 148 150 145 Q 122 136 96 150 Z"
          fill={ILLO.charcoalLight}
          stroke={ILLO.black}
          strokeWidth={5}
          strokeLinejoin="round"
        />
        <rect x="112" y="118" width="22" height="24" rx="7" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth={3.5} />
        <Limb points={[[98, 154], [78, 186], [96, 216]]} color={ILLO.offWhite} outlineWidth={19} innerWidth={13} />
        <Cap cx={96} cy={218} r={9} color={ILLO.offWhite} />
        <Limb points={[[150, 152], [172, 184], [154, 214]]} color={ILLO.offWhite} outlineWidth={19} innerWidth={13} />
        <Cap cx={154} cy={216} r={9} color={ILLO.offWhite} />
        <Head cx={124} cy={90} r={34} hair="bun" hairColor={ILLO.charcoal} look="right" expression="smile" />

        {/* laptop */}
        <g transform="translate(78, 200)">
          <rect x="0" y="18" width="92" height="6" rx="3" fill={ILLO.charcoal} />
          <rect x="8" y="-30" width="76" height="48" rx="4" fill={ILLO.charcoal} />
          <rect x="14" y="-24" width="64" height="36" rx="2" fill={ILLO.charcoalLight} />
          <rect x="20" y="-16" width="30" height="5" rx="2.5" fill={ILLO.yellow} />
          <rect x="20" y="-6" width="44" height="5" rx="2.5" fill={ILLO.offWhite} opacity="0.7" />
        </g>
      </g>

      {/* standing colleague, right, gesturing at the screen */}
      <g>
        <Limb points={[[300, 178], [296, 212], [288, 244]]} color={ILLO.charcoal} outlineWidth={20} innerWidth={14} />
        <Shoe cx={288} cy={247} />
        <Limb points={[[326, 178], [332, 212], [340, 244]]} color={ILLO.charcoalLight} outlineWidth={20} innerWidth={14} />
        <Shoe cx={340} cy={247} flip />

        <path
          d="M 284 108 Q 274 108 277 130 L 286 178 Q 288 200 300 206 L 328 206 Q 340 200 342 178 L 350 128 Q 353 106 343 103 Q 314 94 284 108 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth={5}
          strokeLinejoin="round"
        />
        <rect x="304" y="82" width="22" height="24" rx="7" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth={3.5} />

        <Limb points={[[288, 112], [268, 140], [280, 168]]} color={ILLO.offWhite} outlineWidth={19} innerWidth={13} />
        <Cap cx={280} cy={170} r={9} color={ILLO.offWhite} />

        <Limb points={[[340, 108], [366, 128], [386, 148]]} color={ILLO.offWhite} outlineWidth={19} innerWidth={13} />
        <Cap cx={388} cy={150} r={9} color={ILLO.offWhite} />

        <Head cx={314} cy={56} r={34} hair="short" hairColor={ILLO.charcoal} look="left" expression="grin" />
      </g>
    </svg>
  );
}
