import { ILLO } from "@/components/illustrations/palette";

/**
 * Borderless, solid-silhouette business illustration (unDraw/Storyset style):
 * every shape is a filled color region with no stroke — edges are defined by
 * the shape boundary itself, and dimension comes from a second, darker shade
 * of the same hue rather than an outline.
 */
export default function SecurityNetworkIllustration() {
  return (
    <svg
      viewBox="0 0 460 360"
      className="h-full w-full"
      role="img"
      aria-label="A security professional standing beside a shield and connected network diagram"
    >
      <ellipse cx="300" cy="345" rx="70" ry="8" fill={ILLO.charcoal} opacity="0.08" />

      {/* ---- network diagram (thin connector lines are fine as strokes — they represent wires, not silhouette edges) ---- */}
      <g opacity="0.9">
        <line x1="130" y1="80" x2="70" y2="60" stroke={ILLO.charcoalLight} strokeWidth="2" />
        <line x1="130" y1="80" x2="185" y2="55" stroke={ILLO.charcoalLight} strokeWidth="2" />
        <line x1="130" y1="80" x2="150" y2="130" stroke={ILLO.charcoalLight} strokeWidth="2" />
        <line x1="150" y1="130" x2="90" y2="145" stroke={ILLO.charcoalLight} strokeWidth="2" />
        <line x1="150" y1="130" x2="190" y2="150" stroke={ILLO.charcoalLight} strokeWidth="2" />
        <circle cx="130" cy="80" r="9" fill={ILLO.yellow} />
        <circle cx="70" cy="60" r="6" fill={ILLO.charcoalLight} />
        <circle cx="185" cy="55" r="6" fill={ILLO.charcoalLight} />
        <circle cx="150" cy="130" r="7" fill={ILLO.charcoal} />
        <circle cx="90" cy="145" r="5" fill={ILLO.charcoalLight} />
        <circle cx="190" cy="150" r="5" fill={ILLO.charcoalLight} />
      </g>

      {/* ---- shield, borderless — shadow half gives it dimension instead of an outline ---- */}
      <g transform="translate(130, 235)">
        <path d="M 0 -95 L 62 -70 L 62 -10 Q 62 55 0 88 Q -62 55 -62 -10 L -62 -70 Z" fill={ILLO.yellow} />
        <path d="M 0 -95 L 62 -70 L 62 -10 Q 62 55 0 88 Z" fill={ILLO.yellowDark} opacity="0.35" />
        <rect x="-22" y="-14" width="44" height="34" rx="6" fill={ILLO.black} />
        <path
          d="M -13 -14 L -13 -28 A 13 13 0 0 1 13 -28 L 13 -14 L 5 -14 L 5 -26 A 5 5 0 0 0 -5 -26 L -5 -14 Z"
          fill={ILLO.black}
        />
        <circle cx="0" cy="4" r="4.5" fill={ILLO.yellow} />
      </g>

      {/* ================= FIGURE — solid silhouettes, no strokes ================= */}

      {/* back (relaxed) arm — darker shadow tone */}
      <path
        d="M 338 148 Q 354 168 353 188 Q 352 208 344 228 L 330 226 Q 336 206 337 188 Q 338 168 324 150 Z"
        fill={ILLO.black}
      />
      <circle cx="341" cy="230" r="12.5" fill={ILLO.skinShadow} />

      {/* legs / trousers — two-tone for depth */}
      <path d="M 296 232 L 328 232 L 322 338 L 300 338 L 296 268 Z" fill={ILLO.black} />
      <path d="M 272 232 L 296 232 L 292 338 L 270 338 Z" fill={ILLO.charcoal} />
      <path d="M 266 338 L 296 338 L 296 350 Q 296 356 288 356 L 262 356 Q 258 356 260 350 Z" fill={ILLO.black} />
      <path d="M 296 338 L 326 338 L 330 350 Q 332 356 324 356 L 300 356 Q 296 356 296 350 Z" fill={ILLO.black} />

      {/* torso / blazer — lit half + shadow half, no outline */}
      <path
        d="M 258 138 Q 250 136 252 158 L 262 224 Q 264 238 278 240 L 300 240 L 302 134 Q 278 128 258 138 Z"
        fill={ILLO.charcoal}
      />
      <path
        d="M 302 134 L 300 240 L 322 240 Q 336 238 338 224 L 348 158 Q 350 134 340 132 Q 320 124 302 134 Z"
        fill={ILLO.black}
      />

      {/* shirt + tapered tie */}
      <path d="M 288 138 L 300 152 L 312 138 L 308 224 L 292 224 Z" fill={ILLO.white} />
      <path d="M 294 156 L 306 156 L 302 220 L 298 220 Z" fill={ILLO.yellow} />

      {/* lapel fold shading — tonal, not outlined */}
      <path d="M 288 138 L 300 152 L 296 172 L 270 148 Z" fill={ILLO.charcoal} opacity="0.9" />
      <path d="M 312 138 L 300 152 L 304 172 L 330 148 Z" fill={ILLO.black} opacity="0.9" />

      {/* neck */}
      <path d="M 288 108 L 312 108 L 310 138 L 290 138 Z" fill={ILLO.skin} />

      {/* front (raised, gesturing) arm — lit tone, with a shirt cuff peeking out */}
      <path
        d="M 264 142 Q 236 138 210 130 Q 190 124 178 116 L 186 104 Q 200 112 218 118 Q 244 126 268 128 Z"
        fill={ILLO.charcoalLight}
      />
      <path d="M 182 108 L 192 116 L 188 122 L 178 114 Z" fill={ILLO.white} />
      <circle cx="180" cy="110" r="12" fill={ILLO.skin} />

      {/* head + subtle jaw shading for dimension, no outline */}
      <circle cx="300" cy="76" r="36" fill={ILLO.skin} />
      <path d="M 300 100 Q 316 98 320 82 Q 322 70 314 62 L 314 90 Q 310 98 300 100 Z" fill={ILLO.skinShadow} opacity="0.55" />

      {/* hair — full side-parted volume mass, a lighter sheen patch for depth, no stroke, no facial features */}
      <path
        d="M 258 78
           Q 252 26 300 20
           Q 350 24 344 76
           Q 342 54 328 44
           Q 336 34 316 30
           Q 296 26 280 40
           Q 264 52 260 70
           Q 258 74 258 78
           Z"
        fill={ILLO.charcoal}
      />
      <path
        d="M 268 42 Q 286 26 310 26 Q 300 32 292 42 Q 282 50 272 56 Q 266 50 268 42 Z"
        fill={ILLO.charcoalLight}
        opacity="0.7"
      />
    </svg>
  );
}
