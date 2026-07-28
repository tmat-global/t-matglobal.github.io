import { ILLO } from "@/components/illustrations/palette";

/**
 * Borderless, solid-silhouette business illustration — same technique as
 * SecurityNetworkIllustration: flat filled shapes only, dimension from a
 * second darker shade rather than an outline, no facial features.
 */
export default function CollaborationIllustration() {
  return (
    <svg
      viewBox="0 0 460 360"
      className="h-full w-full"
      role="img"
      aria-label="Two colleagues reviewing data together at a shared screen"
    >
      <ellipse cx="230" cy="345" rx="130" ry="8" fill={ILLO.charcoal} opacity="0.08" />

      {/* ---- desk ---- */}
      <rect x="40" y="252" width="380" height="16" rx="4" fill={ILLO.charcoalLight} opacity="0.6" />
      <rect x="40" y="268" width="380" height="70" fill={ILLO.charcoal} opacity="0.12" />

      {/* ---- monitor ---- */}
      <g transform="translate(150, 118)">
        <rect x="0" y="0" width="150" height="104" rx="6" fill={ILLO.black} />
        <rect x="8" y="8" width="134" height="80" rx="3" fill={ILLO.offWhite} />
        <rect x="18" y="20" width="60" height="8" rx="4" fill={ILLO.charcoalLight} opacity="0.6" />
        {[16, 30, 22, 42, 34].map((h, i) => (
          <rect key={i} x={18 + i * 24} y={78 - h} width="16" height={h} rx="2" fill={i === 3 ? ILLO.yellow : ILLO.charcoalLight} opacity={i === 3 ? 1 : 0.55} />
        ))}
        <rect x="66" y="104" width="18" height="10" fill={ILLO.charcoalLight} />
        <rect x="50" y="114" width="50" height="6" rx="3" fill={ILLO.charcoalLight} />
      </g>

      {/* ================= SEATED FIGURE (left) — solid silhouettes, no strokes ================= */}
      <g>
        {/* resting arm on desk */}
        <path d="M 108 200 Q 96 218 100 240 L 118 244 Q 116 224 124 208 Z" fill={ILLO.charcoalLight} />
        <circle cx="102" cy="244" r="10" fill={ILLO.skin} />

        {/* torso / blazer (seated, cropped by desk) — lit half + shadow half */}
        <path d="M 96 160 Q 88 158 90 180 L 98 254 L 128 254 L 130 154 Q 112 148 96 160 Z" fill={ILLO.charcoalLight} />
        <path d="M 130 154 L 128 254 L 158 254 L 166 180 Q 168 156 158 154 Q 144 148 130 154 Z" fill={ILLO.charcoal} />
        <path d="M 118 158 L 128 170 L 138 158 L 134 236 L 122 236 Z" fill={ILLO.white} />

        {/* other arm, reaching toward the screen */}
        <path d="M 158 164 Q 182 168 204 176 L 200 190 Q 180 184 160 178 Z" fill={ILLO.charcoal} />
        <circle cx="206" cy="182" r="9" fill={ILLO.skinShadow} />

        <path d="M 116 130 L 138 130 L 136 158 L 118 158 Z" fill={ILLO.skin} />

        {/* head + jaw shading */}
        <circle cx="126" cy="98" r="32" fill={ILLO.skin} />
        <path d="M 126 122 Q 142 120 146 104 Q 148 92 140 84 L 140 112 Q 136 120 126 122 Z" fill={ILLO.skinShadow} opacity="0.5" />

        {/* hair — low bun, full volume, no stroke, no facial features */}
        <path
          d="M 92 92
             Q 88 54 126 52
             Q 164 54 160 92
             Q 158 68 138 60
             Q 150 50 128 48
             Q 106 46 96 66
             Q 90 78 92 92
             Z"
          fill={ILLO.charcoal}
        />
        <circle cx="126" cy="46" r="11" fill={ILLO.charcoal} />
        <path d="M 104 62 Q 118 50 136 52 Q 126 58 118 66 Q 110 72 102 76 Q 98 70 104 62 Z" fill={ILLO.charcoalLight} opacity="0.7" />
      </g>

      {/* ================= STANDING FIGURE (right, leaning in, pointing) — no strokes ================= */}
      <g>
        {/* legs — two-tone */}
        <path d="M 352 248 L 378 248 L 374 338 L 356 338 L 352 280 Z" fill={ILLO.black} />
        <path d="M 328 248 L 352 248 L 348 338 L 328 338 Z" fill={ILLO.charcoalLight} />
        <path d="M 324 338 L 350 338 L 350 350 Q 350 356 342 356 L 320 356 Q 316 356 318 350 Z" fill={ILLO.black} />
        <path d="M 350 338 L 376 338 L 380 350 Q 382 356 374 356 L 354 356 Q 350 356 350 350 Z" fill={ILLO.black} />

        {/* back arm relaxed — shadow tone */}
        <path d="M 372 168 Q 388 186 388 204 Q 388 218 382 232 L 368 228 Q 372 212 372 200 Q 372 184 360 170 Z" fill={ILLO.black} />
        <circle cx="380" cy="234" r="11" fill={ILLO.skinShadow} />

        {/* torso / blazer, leaning slightly toward the screen — lit half + shadow half */}
        <path d="M 322 158 Q 314 158 318 178 L 328 246 Q 330 258 344 260 L 358 260 L 360 154 Q 340 146 322 158 Z" fill={ILLO.charcoal} />
        <path d="M 360 154 L 358 260 L 372 260 Q 386 258 386 244 L 392 178 Q 394 156 384 154 Q 372 148 360 154 Z" fill={ILLO.black} />
        <path d="M 346 158 L 356 170 L 366 158 L 362 244 L 350 244 Z" fill={ILLO.white} />
        <path d="M 352 174 L 362 174 L 358 240 L 354 240 Z" fill={ILLO.yellow} />

        <path d="M 346 158 L 356 170 L 352 186 L 330 166 Z" fill={ILLO.charcoal} opacity="0.9" />
        <path d="M 366 158 L 356 170 L 360 186 L 382 166 Z" fill={ILLO.black} opacity="0.9" />

        <path d="M 346 132 L 366 132 L 364 158 L 348 158 Z" fill={ILLO.skin} />

        {/* front arm, extended, pointing at the monitor — lit tone with a shirt cuff */}
        <path d="M 322 166 Q 292 172 264 182 Q 246 190 236 200 L 244 212 Q 258 200 278 192 Q 302 182 328 176 Z" fill={ILLO.charcoalLight} />
        <path d="M 240 204 L 250 212 L 246 218 L 236 210 Z" fill={ILLO.white} />
        <circle cx="238" cy="206" r="11" fill={ILLO.skin} />

        {/* head + jaw shading */}
        <circle cx="356" cy="102" r="32" fill={ILLO.skin} />
        <path d="M 356 126 Q 372 124 376 108 Q 378 96 370 88 L 370 116 Q 366 124 356 126 Z" fill={ILLO.skinShadow} opacity="0.5" />

        {/* hair — short, textured, full volume, no stroke, no facial features */}
        <path
          d="M 318 96
             Q 314 58 356 56
             Q 398 58 394 96
             Q 392 70 372 62
             Q 382 52 360 48
             Q 338 44 324 62
             Q 314 76 318 96
             Z"
          fill={ILLO.charcoal}
        />
        <path d="M 330 66 Q 346 50 368 50 Q 358 56 350 66 Q 342 74 332 78 Q 326 72 330 66 Z" fill={ILLO.charcoalLight} opacity="0.7" />
      </g>
    </svg>
  );
}
