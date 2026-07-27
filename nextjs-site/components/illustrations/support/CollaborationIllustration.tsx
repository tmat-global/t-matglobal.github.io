import { ILLO } from "@/components/illustrations/palette";

export default function CollaborationIllustration() {
  return (
    <svg
      viewBox="0 0 460 360"
      className="h-full w-full"
      role="img"
      aria-label="Two colleagues reviewing data together at a shared screen"
    >
      <ellipse cx="230" cy="345" rx="130" ry="8" fill={ILLO.charcoalLight} opacity="0.15" />

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

      {/* ================= SEATED FIGURE (left) ================= */}
      <g>
        {/* resting arm on desk */}
        <path
          d="M 108 200 Q 96 218 100 240 L 118 244 Q 116 224 124 208 Z"
          fill={ILLO.offWhite}
          stroke={ILLO.black}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <circle cx="102" cy="244" r="10" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="3.5" />

        {/* torso / blazer (seated, cropped by desk) */}
        <path
          d="M 96 160 Q 88 158 90 180 L 98 254 L 158 254 L 166 180 Q 168 156 158 154 Q 128 142 96 160 Z"
          fill={ILLO.charcoalLight}
          stroke={ILLO.black}
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M 118 158 L 128 170 L 138 158 L 134 236 L 122 236 Z" fill={ILLO.offWhite} />

        {/* other arm, reaching toward the screen */}
        <path
          d="M 158 164 Q 182 168 204 176 L 200 190 Q 180 184 160 178 Z"
          fill={ILLO.charcoalLight}
          stroke={ILLO.black}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <circle cx="206" cy="182" r="9" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="3.2" />

        <path d="M 116 130 L 138 130 L 136 158 L 118 158 Z" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="3.2" />

        {/* head */}
        <circle cx="126" cy="98" r="32" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="4.5" />

        {/* hair — low bun */}
        <path
          d="M 96 92 Q 92 60 126 58 Q 160 60 156 92 Q 156 76 140 70 Q 148 62 132 60 Q 116 58 104 70 Q 96 78 96 88 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth="3.6"
          strokeLinejoin="round"
        />
        <circle cx="126" cy="52" r="11" fill={ILLO.charcoal} stroke={ILLO.black} strokeWidth="3.6" />

        <path d="M 113 96 L 121 94" stroke={ILLO.black} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M 131 94 L 139 96" stroke={ILLO.black} strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="117" cy="102" r="2.8" fill={ILLO.black} />
        <circle cx="135" cy="102" r="2.8" fill={ILLO.black} />
        <path d="M 118 114 Q 126 120 134 114" stroke={ILLO.black} strokeWidth="2.8" fill="none" strokeLinecap="round" />
      </g>

      {/* ================= STANDING FIGURE (right, leaning in, pointing) ================= */}
      <g>
        {/* legs */}
        <path
          d="M 330 248 L 378 248 L 374 338 L 356 338 L 352 280 L 348 338 L 328 338 Z"
          fill={ILLO.charcoalLight}
          stroke={ILLO.black}
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M 324 338 L 350 338 L 350 350 Q 350 356 342 356 L 320 356 Q 316 356 318 350 Z" fill={ILLO.black} />
        <path d="M 350 338 L 376 338 L 380 350 Q 382 356 374 356 L 354 356 Q 350 356 350 350 Z" fill={ILLO.black} />

        {/* back arm relaxed */}
        <path
          d="M 372 168 Q 388 186 388 204 Q 388 218 382 232 L 368 228 Q 372 212 372 200 Q 372 184 360 170 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth="4.5"
          strokeLinejoin="round"
        />
        <circle cx="380" cy="234" r="11" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="3.6" />

        {/* torso / blazer, leaning slightly left toward the screen */}
        <path
          d="M 322 158 Q 314 158 318 178 L 328 246 Q 330 258 344 260 L 372 260 Q 386 258 386 244 L 392 178 Q 394 156 384 154 Q 350 138 322 158 Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth="5.5"
          strokeLinejoin="round"
        />
        <path d="M 346 158 L 356 170 L 366 158 L 362 244 L 350 244 Z" fill={ILLO.offWhite} />
        <path d="M 354 174 L 360 174 L 364 188 L 356 240 L 350 188 Z" fill={ILLO.yellow} stroke={ILLO.black} strokeWidth="1.4" />

        <path d="M 346 158 L 356 170 L 352 186 L 330 166 Z" fill={ILLO.charcoal} stroke={ILLO.black} strokeWidth="3.6" strokeLinejoin="round" />
        <path d="M 366 158 L 356 170 L 360 186 L 382 166 Z" fill={ILLO.charcoal} stroke={ILLO.black} strokeWidth="3.6" strokeLinejoin="round" />

        <path d="M 346 132 L 366 132 L 364 158 L 348 158 Z" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="3.2" />

        {/* front arm, extended, pointing at the monitor */}
        <path
          d="M 322 166 Q 292 172 264 182 Q 246 190 236 200 L 244 212 Q 258 200 278 192 Q 302 182 328 176 Z"
          fill={ILLO.charcoalLight}
          stroke={ILLO.black}
          strokeWidth="4.5"
          strokeLinejoin="round"
        />
        <circle cx="238" cy="206" r="11" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="3.6" />
        <path d="M 226 200 L 238 206 L 232 216" fill="none" stroke={ILLO.black} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />

        {/* head */}
        <circle cx="356" cy="102" r="32" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="4.5" />

        {/* hair — short, textured */}
        <path
          d="M 326 96
             Q 322 64 356 60
             Q 392 64 388 96
             Q 388 82 372 78
             Q 380 70 366 68
             Q 352 66 340 80
             Q 326 88 326 94
             Z"
          fill={ILLO.charcoal}
          stroke={ILLO.black}
          strokeWidth="3.6"
          strokeLinejoin="round"
        />
        <path d="M 326 92 Q 324 104 330 114" fill="none" stroke={ILLO.black} strokeWidth="3.6" strokeLinecap="round" />
        <path d="M 388 92 Q 390 104 384 114" fill="none" stroke={ILLO.black} strokeWidth="3.6" strokeLinecap="round" />

        <path d="M 341 94 L 349 92" stroke={ILLO.black} strokeWidth="2.8" strokeLinecap="round" />
        <path d="M 365 92 L 373 94" stroke={ILLO.black} strokeWidth="2.8" strokeLinecap="round" />
        <circle cx="345" cy="102" r="3" fill={ILLO.black} />
        <circle cx="369" cy="102" r="3" fill={ILLO.black} />
        <path d="M 347 118 Q 357 124 367 118" stroke={ILLO.black} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
