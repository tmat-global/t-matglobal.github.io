import { ILLO } from "@/components/illustrations/palette";

/**
 * Borderless, solid-silhouette business illustration — same technique as
 * SecurityNetworkIllustration: flat filled shapes only, dimension from a
 * second darker shade rather than an outline, no facial features.
 */
export default function AuditIllustration() {
  return (
    <svg
      viewBox="0 0 460 360"
      className="h-full w-full"
      role="img"
      aria-label="A professional reviewing a checklist document with a magnifying glass"
    >
      <ellipse cx="230" cy="345" rx="80" ry="8" fill={ILLO.charcoal} opacity="0.08" />

      {/* ---- large document behind the figure ---- */}
      <g transform="translate(250, 40)">
        <rect width="150" height="200" rx="8" fill={ILLO.offWhite} />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(18, ${30 + i * 40})`}>
            <rect width="18" height="18" rx="4" fill={i < 3 ? ILLO.yellow : ILLO.charcoalLight} opacity={i < 3 ? 1 : 0.4} />
            {i < 3 ? (
              <path d="M 3 9 L 8 14 L 15 4" stroke={ILLO.black} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            ) : null}
            <rect x="28" y="4" width="92" height="9" rx="4.5" fill={ILLO.charcoalLight} opacity="0.5" />
          </g>
        ))}
      </g>

      {/* ================= FIGURE — solid silhouettes, no strokes ================= */}

      {/* legs — two-tone */}
      <path d="M 208 234 L 236 234 L 230 338 L 208 338 L 204 270 Z" fill={ILLO.black} />
      <path d="M 180 234 L 208 234 L 204 338 L 178 338 Z" fill={ILLO.charcoalLight} />
      <path d="M 174 338 L 204 338 L 204 350 Q 204 356 196 356 L 170 356 Q 166 356 168 350 Z" fill={ILLO.black} />
      <path d="M 204 338 L 234 338 L 238 350 Q 240 356 232 356 L 208 356 Q 204 356 204 350 Z" fill={ILLO.black} />

      {/* torso / blazer — lit half + shadow half */}
      <path
        d="M 166 140 Q 158 138 160 160 L 170 226 Q 172 240 186 242 L 208 242 L 210 134 Q 186 128 166 140 Z"
        fill={ILLO.charcoal}
      />
      <path
        d="M 210 134 L 208 242 L 230 242 Q 244 240 246 226 L 256 160 Q 258 136 248 134 Q 228 124 210 134 Z"
        fill={ILLO.black}
      />

      {/* shirt + tie */}
      <path d="M 196 140 L 208 154 L 220 140 L 216 226 L 200 226 Z" fill={ILLO.white} />
      <path d="M 202 158 L 214 158 L 210 222 L 206 222 Z" fill={ILLO.yellow} />
      <path d="M 196 140 L 208 154 L 204 174 L 178 150 Z" fill={ILLO.charcoal} opacity="0.9" />
      <path d="M 220 140 L 208 154 L 212 174 L 238 150 Z" fill={ILLO.black} opacity="0.9" />
      <path d="M 196 110 L 220 110 L 218 140 L 198 140 Z" fill={ILLO.skin} />

      {/* left arm, holding the clipboard against the body */}
      <path
        d="M 168 148 Q 148 168 144 194 Q 142 212 150 228 L 166 224 Q 160 208 162 194 Q 164 174 180 156 Z"
        fill={ILLO.charcoalLight}
      />
      <circle cx="152" cy="230" r="12" fill={ILLO.skin} />

      {/* clipboard */}
      <g transform="translate(112, 186)">
        <rect x="0" y="0" width="62" height="80" rx="5" fill={ILLO.offWhite} />
        <rect x="19" y="-7" width="24" height="13" rx="3" fill={ILLO.charcoalLight} />
        <rect x="10" y="18" width="10" height="10" rx="2" fill={ILLO.yellow} />
        <path d="M 12 23 L 15 26 L 20 20" stroke={ILLO.black} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="26" y="20" width="26" height="6" rx="3" fill={ILLO.charcoalLight} opacity="0.5" />
        <rect x="10" y="36" width="10" height="10" rx="2" fill={ILLO.yellow} />
        <path d="M 12 41 L 15 44 L 20 34" stroke={ILLO.black} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="26" y="38" width="26" height="6" rx="3" fill={ILLO.charcoalLight} opacity="0.5" />
        <rect x="10" y="54" width="10" height="10" rx="2" fill={ILLO.charcoalLight} opacity="0.4" />
        <rect x="26" y="56" width="26" height="6" rx="3" fill={ILLO.charcoalLight} opacity="0.5" />
      </g>

      {/* right arm, holding the magnifying glass over the clipboard */}
      <path
        d="M 246 150 Q 232 158 222 172 Q 214 184 212 198 L 226 204 Q 230 190 236 180 Q 244 168 256 160 Z"
        fill={ILLO.black}
      />
      <circle cx="220" cy="204" r="11" fill={ILLO.skinShadow} />

      {/* magnifying glass — lens as a translucent filled disc, handle as a filled bar, no stroked ring */}
      <g transform="translate(150, 218) rotate(-18)">
        <circle cx="0" cy="0" r="22" fill={ILLO.offWhite} opacity="0.4" />
        <rect x="18" y="-5" width="24" height="10" rx="5" fill={ILLO.charcoal} transform="rotate(45 18 0)" />
      </g>

      {/* head + jaw shading */}
      <circle cx="206" cy="98" r="36" fill={ILLO.skin} />
      <path d="M 206 122 Q 190 120 186 104 Q 184 92 192 84 L 192 112 Q 196 120 206 122 Z" fill={ILLO.skinShadow} opacity="0.55" />

      {/* hair — short crop, opposite part from security-network, full volume, no stroke */}
      <path
        d="M 246 86
           Q 250 30 206 26
           Q 162 30 166 86
           Q 168 60 188 50
           Q 178 40 200 34
           Q 216 30 232 42
           Q 250 54 246 86
           Z"
        fill={ILLO.charcoal}
      />
      <path
        d="M 176 52 Q 196 32 220 32 Q 208 40 200 50 Q 190 58 180 62 Q 174 58 176 52 Z"
        fill={ILLO.charcoalLight}
        opacity="0.7"
      />
    </svg>
  );
}
