import { ILLO } from "@/components/illustrations/palette";

/**
 * Standalone unDraw-style business illustration — not built from the old
 * joint/stick-limb character kit. Every shape is a hand-authored filled
 * silhouette (tapered sleeves, trouser legs, lapelled blazer) rather than a
 * uniform-width stroked line, which is what made the previous system read
 * as a children's-cartoon stick figure instead of a professional vector.
 */
export default function SecurityNetworkIllustration() {
  return (
    <svg
      viewBox="0 0 460 360"
      className="h-full w-full"
      role="img"
      aria-label="A security professional standing beside a shield and connected network diagram"
    >
      {/* ground shadow */}
      <ellipse cx="300" cy="345" rx="70" ry="8" fill={ILLO.charcoalLight} opacity="0.15" />

      {/* ---- network diagram ---- */}
      <g opacity="0.9">
        <line x1="130" y1="80" x2="70" y2="60" stroke={ILLO.charcoalLight} strokeWidth="2" />
        <line x1="130" y1="80" x2="185" y2="55" stroke={ILLO.charcoalLight} strokeWidth="2" />
        <line x1="130" y1="80" x2="150" y2="130" stroke={ILLO.charcoalLight} strokeWidth="2" />
        <line x1="150" y1="130" x2="90" y2="145" stroke={ILLO.charcoalLight} strokeWidth="2" />
        <line x1="150" y1="130" x2="190" y2="150" stroke={ILLO.charcoalLight} strokeWidth="2" />
        <circle cx="130" cy="80" r="9" fill={ILLO.yellow} stroke={ILLO.black} strokeWidth="2.5" />
        <circle cx="70" cy="60" r="6" fill={ILLO.charcoalLight} />
        <circle cx="185" cy="55" r="6" fill={ILLO.charcoalLight} />
        <circle cx="150" cy="130" r="7" fill={ILLO.charcoal} stroke={ILLO.black} strokeWidth="2" />
        <circle cx="90" cy="145" r="5" fill={ILLO.charcoalLight} />
        <circle cx="190" cy="150" r="5" fill={ILLO.charcoalLight} />
      </g>

      {/* ---- shield ---- */}
      <g transform="translate(130, 235)">
        <path
          d="M 0 -95 L 62 -70 L 62 -10 Q 62 55 0 88 Q -62 55 -62 -10 L -62 -70 Z"
          fill={ILLO.yellow}
          stroke={ILLO.black}
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <rect x="-22" y="-14" width="44" height="34" rx="6" fill={ILLO.black} />
        <path
          d="M -13 -14 L -13 -28 A 13 13 0 0 1 13 -28 L 13 -14"
          fill="none"
          stroke={ILLO.black}
          strokeWidth="7"
        />
        <circle cx="0" cy="4" r="4.5" fill={ILLO.yellow} />
      </g>

      {/* ================= FIGURE ================= */}

      {/* back (relaxed) arm, drawn first so the sleeve tucks behind the torso */}
      <path
        d="M 338 148 Q 354 168 353 188 Q 352 208 344 228 L 330 226 Q 336 206 337 188 Q 338 168 324 150 Z"
        fill={ILLO.charcoal}
        stroke={ILLO.black}
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <circle cx="341" cy="230" r="12.5" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="4" />

      {/* legs / trousers */}
      <path
        d="M 272 232 L 328 232 L 322 338 L 300 338 L 296 268 L 292 338 L 270 338 Z"
        fill={ILLO.charcoalLight}
        stroke={ILLO.black}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      {/* shoes */}
      <path d="M 266 338 L 296 338 L 296 350 Q 296 356 288 356 L 262 356 Q 258 356 260 350 Z" fill={ILLO.black} />
      <path d="M 296 338 L 326 338 L 330 350 Q 332 356 324 356 L 300 356 Q 296 356 296 350 Z" fill={ILLO.black} />

      {/* torso / blazer */}
      <path
        d="M 258 138 Q 250 136 252 158 L 262 224 Q 264 238 278 240 L 322 240 Q 336 238 338 224 L 348 158 Q 350 134 340 132 Q 300 116 258 138 Z"
        fill={ILLO.charcoal}
        stroke={ILLO.black}
        strokeWidth="5.5"
        strokeLinejoin="round"
      />

      {/* shirt + tie sliver */}
      <path d="M 288 138 L 300 152 L 312 138 L 308 224 L 292 224 Z" fill={ILLO.offWhite} />
      <path d="M 296 156 L 304 156 L 308 172 L 300 220 L 292 172 Z" fill={ILLO.yellow} stroke={ILLO.black} strokeWidth="1.5" />

      {/* lapels */}
      <path d="M 288 138 L 300 152 L 296 172 L 270 148 Z" fill={ILLO.charcoal} stroke={ILLO.black} strokeWidth="4" strokeLinejoin="round" />
      <path d="M 312 138 L 300 152 L 304 172 L 330 148 Z" fill={ILLO.charcoal} stroke={ILLO.black} strokeWidth="4" strokeLinejoin="round" />

      {/* neck */}
      <path d="M 288 108 L 312 108 L 310 138 L 290 138 Z" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="3.5" />

      {/* front (raised, gesturing) arm */}
      <path
        d="M 264 142 Q 236 138 210 130 Q 190 124 178 116 L 186 104 Q 200 112 218 118 Q 244 126 268 128 Z"
        fill={ILLO.charcoalLight}
        stroke={ILLO.black}
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <circle cx="180" cy="110" r="12" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="4" />
      {/* pointing finger accent */}
      <path d="M 168 104 L 180 110 L 172 118" fill="none" stroke={ILLO.black} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* head */}
      <circle cx="300" cy="76" r="36" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="5" />

      {/* hair — short, side-parted, business cut */}
      <path
        d="M 264 68
           Q 260 32 300 28
           Q 340 32 336 68
           Q 336 56 320 52
           Q 328 44 314 40
           Q 300 36 284 42
           Q 270 48 266 60
           Z"
        fill={ILLO.charcoal}
        stroke={ILLO.black}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M 264 66 Q 262 80 268 92" fill="none" stroke={ILLO.black} strokeWidth="4" strokeLinecap="round" />
      <path d="M 336 66 Q 338 80 332 92" fill="none" stroke={ILLO.black} strokeWidth="4" strokeLinecap="round" />

      {/* face */}
      <path d="M 281 68 L 291 66" stroke={ILLO.black} strokeWidth="3" strokeLinecap="round" />
      <path d="M 309 66 L 319 68" stroke={ILLO.black} strokeWidth="3" strokeLinecap="round" />
      <circle cx="286" cy="76" r="3.2" fill={ILLO.black} />
      <circle cx="314" cy="76" r="3.2" fill={ILLO.black} />
      <path d="M 288 92 Q 300 100 312 92" stroke={ILLO.black} strokeWidth="3.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
