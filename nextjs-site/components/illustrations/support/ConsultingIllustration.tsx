import { ILLO } from "@/components/illustrations/palette";

/**
 * Borderless, solid-silhouette business illustration — same technique as
 * SecurityNetworkIllustration: flat filled shapes only, dimension from a
 * second darker shade rather than an outline, no facial features.
 */
export default function ConsultingIllustration() {
  return (
    <svg
      viewBox="0 0 460 360"
      className="h-full w-full"
      role="img"
      aria-label="A consultant presenting an ascending chart on a whiteboard"
    >
      <ellipse cx="230" cy="345" rx="90" ry="8" fill={ILLO.charcoal} opacity="0.08" />

      {/* ---- whiteboard / chart stand ---- */}
      <g>
        <rect x="60" y="228" width="6" height="110" fill={ILLO.charcoalLight} />
        <rect x="240" y="228" width="6" height="110" fill={ILLO.charcoalLight} />
        <rect x="50" y="50" width="206" height="150" rx="8" fill={ILLO.offWhite} />
        <rect x="66" y="66" width="90" height="9" rx="4.5" fill={ILLO.charcoalLight} opacity="0.5" />

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
        {/* trend line is a literal drawn line, not a silhouette edge — fine as a stroke */}
        <path d="M 70 150 L 100 130 L 130 140 L 160 108 L 190 88" fill="none" stroke={ILLO.charcoal} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 178 92 L 190 88 L 186 100" fill="none" stroke={ILLO.charcoal} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* ================= FIGURE — solid silhouettes, no strokes ================= */}

      {/* back (relaxed) arm — shadow tone */}
      <path
        d="M 292 150 Q 276 172 276 194 Q 276 212 284 230 L 298 226 Q 292 208 292 192 Q 292 172 306 154 Z"
        fill={ILLO.black}
      />
      <circle cx="286" cy="230" r="12" fill={ILLO.skinShadow} />
      <rect x="278" y="238" width="8" height="26" rx="3" fill={ILLO.yellow} transform="rotate(-18 282 251)" />

      {/* legs / trousers — two-tone */}
      <path d="M 328 232 L 356 232 L 350 338 L 328 338 L 324 268 Z" fill={ILLO.black} />
      <path d="M 300 232 L 328 232 L 324 338 L 298 338 Z" fill={ILLO.charcoalLight} />
      <path d="M 294 338 L 324 338 L 324 350 Q 324 356 316 356 L 290 356 Q 286 356 288 350 Z" fill={ILLO.black} />
      <path d="M 324 338 L 354 338 L 358 350 Q 360 356 352 356 L 328 356 Q 324 356 324 350 Z" fill={ILLO.black} />

      {/* torso / blazer — lit half + shadow half */}
      <path
        d="M 286 138 Q 278 136 280 158 L 290 224 Q 292 238 306 240 L 328 240 L 330 134 Q 306 128 286 138 Z"
        fill={ILLO.charcoal}
      />
      <path
        d="M 330 134 L 328 240 L 350 240 Q 364 238 366 224 L 376 158 Q 378 134 368 132 Q 348 124 330 134 Z"
        fill={ILLO.black}
      />

      {/* shirt + tapered tie */}
      <path d="M 316 138 L 328 152 L 340 138 L 336 224 L 320 224 Z" fill={ILLO.white} />
      <path d="M 322 156 L 334 156 L 330 220 L 326 220 Z" fill={ILLO.yellow} />

      {/* lapel fold shading */}
      <path d="M 316 138 L 328 152 L 324 172 L 298 148 Z" fill={ILLO.charcoal} opacity="0.9" />
      <path d="M 340 138 L 328 152 L 332 172 L 358 148 Z" fill={ILLO.black} opacity="0.9" />

      {/* neck */}
      <path d="M 316 108 L 340 108 L 338 138 L 318 138 Z" fill={ILLO.skin} />

      {/* front (raised, pointing) arm — lit tone, with a shirt cuff */}
      <path
        d="M 292 142 Q 262 136 234 122 Q 212 112 198 100 L 208 88 Q 222 98 242 110 Q 268 122 296 128 Z"
        fill={ILLO.charcoalLight}
      />
      <path d="M 202 92 L 212 100 L 208 106 L 198 98 Z" fill={ILLO.white} />
      <circle cx="200" cy="94" r="12" fill={ILLO.skin} />

      {/* head + jaw shading */}
      <circle cx="328" cy="76" r="36" fill={ILLO.skin} />
      <path d="M 328 100 Q 344 98 348 82 Q 350 70 342 62 L 342 90 Q 338 98 328 100 Z" fill={ILLO.skinShadow} opacity="0.55" />

      {/* hair — swept quiff, full volume, no stroke, no facial features */}
      <path
        d="M 286 74
           Q 280 28 328 24
           Q 378 28 372 76
           Q 370 52 350 44
           Q 360 34 338 30
           Q 314 26 298 44
           Q 288 56 286 74
           Z"
        fill={ILLO.charcoal}
      />
      <path
        d="M 296 44 Q 316 26 342 28 Q 330 34 322 44 Q 312 52 300 58 Q 294 52 296 44 Z"
        fill={ILLO.charcoalLight}
        opacity="0.7"
      />
    </svg>
  );
}
