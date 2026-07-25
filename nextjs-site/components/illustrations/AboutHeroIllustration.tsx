import { ILLO } from "./palette";
import { Limb, Cap, Shoe, Head, GlowBlob, BlurDefs, Shield } from "./parts";

export default function AboutHeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 520"
      className="h-full w-full"
      role="img"
      aria-label="Three teammates standing together, one holding a laptop and one holding a shield icon"
    >
      <BlurDefs />
      <GlowBlob cx={280} cy={230} r={170} opacity={0.22} />

      {/* back-left teammate, hand raised in a confident greeting */}
      <g className="illo-float-delay" transform="translate(38, 26) scale(0.86)">
        <Limb points={[[150, 300], [148, 358], [140, 412]]} color={ILLO.charcoalLight} />
        <Shoe cx={140} cy={415} />
        <Limb points={[[178, 300], [186, 358], [196, 412]]} color={ILLO.charcoal} />
        <Shoe cx={196} cy={415} flip />

        <path
          d="M 128 172
             Q 116 172 120 196
             L 130 258
             Q 132 286 146 294
             L 182 294
             Q 196 286 198 256
             L 208 194
             Q 211 169 199 166
             Q 163 155 128 172 Z"
          fill={ILLO.charcoalLight}
          stroke={ILLO.black}
          strokeWidth={6}
          strokeLinejoin="round"
        />
        <rect x={152} y={138} width={24} height={26} rx={8} fill={ILLO.charcoalLight} stroke={ILLO.black} strokeWidth={4} />

        {/* right arm relaxed */}
        <Limb points={[[198, 176], [216, 216], [204, 256]]} color={ILLO.charcoalLight} />
        <Cap cx={202} cy={258} r={10} color={ILLO.charcoalLight} />

        {/* left arm raised, waving */}
        <Limb points={[[132, 176], [96, 148], [72, 104]]} color={ILLO.charcoalLight} />
        <Cap cx={68} cy={98} r={10} color={ILLO.charcoalLight} />

        <Head cx={164} cy={104} r={40} hair="bun" skin={ILLO.charcoalLight} hairColor={ILLO.yellowDark} look="left" expression="smile" />
      </g>

      {/* back-right teammate, holding a small shield up high */}
      <g className="illo-float-delay-2" transform="translate(6, 30) scale(0.86)">
        <Limb points={[[398, 300], [404, 358], [396, 412]]} color={ILLO.charcoal} />
        <Shoe cx={396} cy={415} />
        <Limb points={[[426, 300], [432, 358], [442, 412]]} color={ILLO.charcoalLight} />
        <Shoe cx={442} cy={415} flip />

        <path
          d="M 376 172
             Q 364 172 368 196
             L 378 258
             Q 380 286 394 294
             L 430 294
             Q 444 286 446 256
             L 456 194
             Q 459 169 447 166
             Q 411 155 376 172 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth={6}
          strokeLinejoin="round"
        />
        <rect x={400} y={138} width={24} height={26} rx={8} fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth={4} />

        {/* left arm relaxed at side */}
        <Limb points={[[380, 176], [360, 216], [372, 256]]} color={ILLO.offWhite} />
        <Cap cx={372} cy={258} r={10} color={ILLO.offWhite} />

        {/* right arm raised high, holding the shield */}
        <Limb points={[[444, 176], [468, 132], [452, 84]]} color={ILLO.offWhite} />
        <Cap cx={450} cy={80} r={10} color={ILLO.offWhite} />
        <g className="illo-float-sm">
          <Shield cx={450} cy={48} scale={0.4} />
        </g>

        <Head cx={412} cy={104} r={40} hair="waves" look="right" expression="grin" />
      </g>

      {/* front-centre teammate, holding an open laptop */}
      <g className="illo-float">
        <Limb points={[[254, 328], [250, 392], [242, 452]]} color={ILLO.charcoal} />
        <Shoe cx={242} cy={455} />
        <Limb points={[[290, 328], [298, 392], [310, 452]]} color={ILLO.charcoalLight} />
        <Shoe cx={310} cy={455} flip />

        <path
          d="M 228 178
             Q 214 178 218 206
             L 230 280
             Q 232 312 248 322
             L 292 322
             Q 308 312 310 278
             L 322 204
             Q 325 176 311 172
             Q 270 158 228 178 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth={6}
          strokeLinejoin="round"
        />
        <circle cx={270} cy={228} r={16} fill={ILLO.yellow} stroke={ILLO.black} strokeWidth={4} />
        <path d="M 263 228 L 268 234 L 278 220" stroke={ILLO.black} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />

        <rect x={256} y={140} width={26} height={28} rx={8} fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth={4} />

        {/* both arms bent forward, holding the laptop base */}
        <Limb points={[[236, 184], [206, 236], [232, 288]]} color={ILLO.offWhite} />
        <Limb points={[[314, 184], [344, 236], [318, 288]]} color={ILLO.offWhite} />

        {/* laptop, held open at chest height */}
        <g>
          <path
            d="M 216 292 L 208 312 Q 206 320 214 320 L 336 320 Q 344 320 342 312 L 334 292 Z"
            fill={ILLO.charcoalLight}
            stroke={ILLO.black}
            strokeWidth={5}
            strokeLinejoin="round"
          />
          <rect x={222} y={210} width={116} height={82} rx={8} fill={ILLO.black} />
          <rect x={230} y={218} width={100} height={64} rx={4} fill={ILLO.charcoal} />
          <rect x={240} y={228} width={50} height={7} rx={3.5} fill={ILLO.yellow} />
          <rect x={240} y={241} width={76} height={7} rx={3.5} fill={ILLO.white} opacity={0.85} />
          <rect x={240} y={254} width={36} height={7} rx={3.5} fill={ILLO.yellow} />
          <rect x={240} y={267} width={60} height={7} rx={3.5} fill={ILLO.white} opacity={0.6} />
        </g>

        <Head cx={270} cy={104} r={46} hair="short" look="center" expression="grin" />
      </g>
    </svg>
  );
}
