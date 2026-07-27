import { ILLO } from "@/components/illustrations/palette";
import { Limb, Cap, Shoe, Head, Shield } from "@/components/illustrations/parts";

export default function SecurityNetworkIllustration() {
  const nodes: [number, number][] = [
    [300, 90], [352, 130], [312, 190], [246, 176], [258, 108],
  ];
  const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 2]];

  return (
    <svg viewBox="0 0 420 340" className="h-full w-full" role="img" aria-label="A security engineer standing beside a shield and network diagram">
      <rect x="50" y="290" width="300" height="4" rx="2" fill={ILLO.charcoalLight} opacity="0.4" />

      {/* network diagram, upper right */}
      <g opacity="0.85">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
            stroke={ILLO.charcoalLight} strokeWidth="2"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 0 ? 9 : 6} fill={i === 0 ? ILLO.yellow : ILLO.charcoalLight} stroke={ILLO.black} strokeWidth="2.5" />
        ))}
      </g>

      {/* small shield badge near the diagram */}
      <Shield cx={330} cy={215} scale={0.34} fill={ILLO.yellow} />

      {/* character */}
      <g>
        <Limb points={[[150, 190], [146, 232], [138, 274]]} color={ILLO.charcoal} outlineWidth={21} innerWidth={15} />
        <Shoe cx={138} cy={277} />
        <Limb points={[[184, 190], [190, 232], [198, 274]]} color={ILLO.charcoalLight} outlineWidth={21} innerWidth={15} />
        <Shoe cx={198} cy={277} flip />

        <path
          d="M 142 118 Q 130 118 134 144 L 144 200 Q 146 226 160 234 L 190 234 Q 204 226 206 198 L 216 146 Q 219 116 207 112 Q 174 100 142 118 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth={5.5}
          strokeLinejoin="round"
        />
        <circle cx={176} cy={168} r={13} fill={ILLO.yellow} stroke={ILLO.black} strokeWidth="3.5" />
        <path d="M 170 168 L 175 173 L 184 161" stroke={ILLO.black} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="162" y="88" width="24" height="27" rx="8" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth={4} />

        <Limb points={[[146, 124], [122, 168], [140, 208]]} color={ILLO.offWhite} outlineWidth={21} innerWidth={14} />
        <Cap cx={140} cy={210} r={10} color={ILLO.offWhite} />

        {/* right arm raised, presenting the diagram */}
        <Limb points={[[208, 122], [238, 108], [262, 92]]} color={ILLO.offWhite} outlineWidth={21} innerWidth={14} />
        <Cap cx={264} cy={90} r={10} color={ILLO.offWhite} />

        <Head cx={174} cy={60} r={38} hair="waves" hairColor={ILLO.charcoal} look="right" expression="smile" />
      </g>
    </svg>
  );
}
