import { ILLO } from "@/components/illustrations/palette";

export default function ConsultingIllustration() {
  return (
    <svg
      viewBox="0 0 460 360"
      className="h-full w-full"
      role="img"
      aria-label="A consultant presenting an ascending chart on a whiteboard"
    >
      <ellipse cx="230" cy="345" rx="90" ry="8" fill={ILLO.charcoalLight} opacity="0.15" />

      {/* ---- whiteboard / chart stand ---- */}
      <g>
        <rect x="60" y="228" width="6" height="110" fill={ILLO.charcoalLight} />
        <rect x="240" y="228" width="6" height="110" fill={ILLO.charcoalLight} />
        <rect x="50" y="50" width="206" height="150" rx="8" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="5" />
        <rect x="66" y="66" width="90" height="9" rx="4.5" fill={ILLO.charcoalLight} opacity="0.5" />

        {/* ascending bars */}
        {[
          { x: 70, h: 34 },
          { x: 100, h: 54 },
          { x: 130, h: 44 },
          { x: 160, h: 74 },
          { x: 190, h: 92 },
        ].map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={182 - b.h}
            width="20"
            height={b.h}
            rx="3"
            fill={i === 4 ? ILLO.yellow : ILLO.charcoalLight}
            opacity={i === 4 ? 1 : 0.55}
          />
        ))}
        <path d="M 70 150 L 100 130 L 130 140 L 160 108 L 190 88" fill="none" stroke={ILLO.black} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 178 92 L 190 88 L 186 100" fill="none" stroke={ILLO.black} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* ================= FIGURE ================= */}

      {/* back (relaxed) arm holding a marker */}
      <path
        d="M 292 150 Q 276 172 276 194 Q 276 212 284 230 L 298 226 Q 292 208 292 192 Q 292 172 306 154 Z"
        fill={ILLO.charcoal}
        stroke={ILLO.black}
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <circle cx="286" cy="230" r="12" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="4" />
      <rect x="278" y="238" width="8" height="26" rx="3" fill={ILLO.yellow} stroke={ILLO.black} strokeWidth="2" transform="rotate(-18 282 251)" />

      {/* legs / trousers */}
      <path
        d="M 300 232 L 356 232 L 350 338 L 328 338 L 324 268 L 320 338 L 298 338 Z"
        fill={ILLO.charcoalLight}
        stroke={ILLO.black}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M 294 338 L 324 338 L 324 350 Q 324 356 316 356 L 290 356 Q 286 356 288 350 Z" fill={ILLO.black} />
      <path d="M 324 338 L 354 338 L 358 350 Q 360 356 352 356 L 328 356 Q 324 356 324 350 Z" fill={ILLO.black} />

      {/* torso / blazer */}
      <path
        d="M 286 138 Q 278 136 280 158 L 290 224 Q 292 238 306 240 L 350 240 Q 364 238 366 224 L 376 158 Q 378 134 368 132 Q 328 116 286 138 Z"
        fill={ILLO.charcoal}
        stroke={ILLO.black}
        strokeWidth="5.5"
        strokeLinejoin="round"
      />

      {/* shirt + tie sliver */}
      <path d="M 316 138 L 328 152 L 340 138 L 336 224 L 320 224 Z" fill={ILLO.offWhite} />
      <path d="M 324 156 L 332 156 L 336 172 L 328 220 L 320 172 Z" fill={ILLO.yellow} stroke={ILLO.black} strokeWidth="1.5" />

      {/* lapels */}
      <path d="M 316 138 L 328 152 L 324 172 L 298 148 Z" fill={ILLO.charcoal} stroke={ILLO.black} strokeWidth="4" strokeLinejoin="round" />
      <path d="M 340 138 L 328 152 L 332 172 L 358 148 Z" fill={ILLO.charcoal} stroke={ILLO.black} strokeWidth="4" strokeLinejoin="round" />

      {/* neck */}
      <path d="M 316 108 L 340 108 L 338 138 L 318 138 Z" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="3.5" />

      {/* front (raised, pointing) arm toward the chart */}
      <path
        d="M 292 142 Q 262 136 234 122 Q 212 112 198 100 L 208 88 Q 222 98 242 110 Q 268 122 296 128 Z"
        fill={ILLO.charcoalLight}
        stroke={ILLO.black}
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <circle cx="200" cy="94" r="12" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="4" />
      <path d="M 188 86 L 200 94 L 194 104" fill="none" stroke={ILLO.black} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* head */}
      <circle cx="328" cy="76" r="36" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="5" />

      {/* hair — swept quiff */}
      <path
        d="M 292 70
           Q 286 30 328 26
           Q 372 30 366 70
           Q 364 50 344 44
           Q 356 32 336 30
           Q 314 28 300 46
           Q 292 54 292 66
           Z"
        fill={ILLO.charcoal}
        stroke={ILLO.black}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M 292 66 Q 290 80 296 92" fill="none" stroke={ILLO.black} strokeWidth="4" strokeLinecap="round" />
      <path d="M 364 66 Q 366 80 360 92" fill="none" stroke={ILLO.black} strokeWidth="4" strokeLinecap="round" />

      {/* face */}
      <path d="M 309 68 L 319 66" stroke={ILLO.black} strokeWidth="3" strokeLinecap="round" />
      <path d="M 337 66 L 347 68" stroke={ILLO.black} strokeWidth="3" strokeLinecap="round" />
      <circle cx="314" cy="76" r="3.2" fill={ILLO.black} />
      <circle cx="342" cy="76" r="3.2" fill={ILLO.black} />
      <path d="M 316 92 Q 328 100 340 92" stroke={ILLO.black} strokeWidth="3.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
