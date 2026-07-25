import { ILLO } from "./palette";
import { Limb, Cap, Shoe, Head, GlowBlob, BlurDefs } from "./parts";

export default function OurWorkHeroIllustration() {
  const points = [
    [292, 268],
    [322, 240],
    [350, 252],
    [382, 200],
    [412, 214],
    [440, 150],
  ];
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");

  return (
    <svg viewBox="0 0 500 500" className="h-full w-full" role="img" aria-label="An engineer presenting a dashboard chart board with a strongly positive upward metric">
      <BlurDefs />
      <GlowBlob cx={370} cy={200} r={150} opacity={0.28} />

      {/* chart board */}
      <g className="illo-float">
        <rect x={258} y={78} width={210} height={250} rx={14} fill={ILLO.white} stroke={ILLO.black} strokeWidth={6} />
        <rect x={278} y={100} width={110} height={14} rx={7} fill={ILLO.charcoal} opacity={0.85} />

        <g>
          <path d={linePath} stroke={ILLO.black} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={0.15} transform="translate(0,4)" />
          <path d={linePath} stroke={ILLO.yellowDark} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {points.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === points.length - 1 ? 8 : 5.5} fill={ILLO.yellow} stroke={ILLO.black} strokeWidth={3.5} />
          ))}
        </g>

        <rect x={278} y={288} width={190} height={2} fill={ILLO.charcoal} opacity={0.2} />
        <text x={278} y={318} fontFamily="Arial, Helvetica, sans-serif" fontWeight={800} fontSize={34} fill={ILLO.black}>
          +64%
        </text>
        <g transform="translate(430, 300)">
          <path d="M 0 12 L 0 -10 M -8 -2 L 0 -10 L 8 -2" stroke={ILLO.yellowDark} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      {/* character, presenting/pointing */}
      <g>
        <Limb points={[[150, 300], [148, 365], [130, 425]]} color={ILLO.charcoalLight} />
        <Shoe cx={130} cy={428} />

        <Limb points={[[178, 300], [188, 362], [200, 424]]} color={ILLO.charcoal} />
        <Shoe cx={200} cy={427} flip />

        <path
          d="M 128 168
             Q 116 168 120 194
             L 130 262
             Q 132 292 146 300
             L 182 300
             Q 196 292 198 260
             L 208 192
             Q 211 165 199 162
             Q 163 150 128 168 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth={6}
          strokeLinejoin="round"
        />
        <circle cx={164} cy={210} r={16} fill={ILLO.yellow} stroke={ILLO.black} strokeWidth={4} />
        <path d="M 157 210 L 163 216 L 173 202" stroke={ILLO.black} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />

        <rect x={152} y={132} width={24} height={26} rx={8} fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth={4} />

        {/* left arm relaxed at hip */}
        <Limb points={[[132, 172], [110, 216], [126, 258]]} color={ILLO.offWhite} />
        <Cap cx={126} cy={260} r={11} color={ILLO.offWhite} />

        {/* right arm, extended pointing at the board */}
        <Limb points={[[202, 168], [248, 176], [286, 190]]} color={ILLO.offWhite} />
        <Cap cx={288} cy={190} r={11} color={ILLO.offWhite} />

        <Head cx={164} cy={98} r={42} hair="waves" look="right" expression="smile" />
      </g>
    </svg>
  );
}
