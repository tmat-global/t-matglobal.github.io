import { ILLO } from "@/components/illustrations/palette";

export default function AuditIllustration() {
  return (
    <svg
      viewBox="0 0 460 360"
      className="h-full w-full"
      role="img"
      aria-label="A professional reviewing a checklist document with a magnifying glass"
    >
      <ellipse cx="230" cy="345" rx="80" ry="8" fill={ILLO.charcoalLight} opacity="0.15" />

      {/* ---- large document behind the figure ---- */}
      <g transform="translate(250, 40)">
        <rect width="150" height="200" rx="8" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="5" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(18, ${30 + i * 40})`}>
            <rect width="18" height="18" rx="4" fill="none" stroke={ILLO.charcoalLight} strokeWidth="2.5" />
            {i < 3 ? (
              <path d="M 3 9 L 8 14 L 15 4" stroke={ILLO.yellow} strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            ) : null}
            <rect x="28" y="4" width="92" height="9" rx="4.5" fill={ILLO.charcoalLight} opacity="0.5" />
          </g>
        ))}
      </g>

      {/* ================= FIGURE ================= */}

      {/* legs */}
      <path
        d="M 180 234 L 236 234 L 230 338 L 208 338 L 204 270 L 200 338 L 178 338 Z"
        fill={ILLO.charcoalLight}
        stroke={ILLO.black}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M 174 338 L 204 338 L 204 350 Q 204 356 196 356 L 170 356 Q 166 356 168 350 Z" fill={ILLO.black} />
      <path d="M 204 338 L 234 338 L 238 350 Q 240 356 232 356 L 208 356 Q 204 356 204 350 Z" fill={ILLO.black} />

      {/* torso / blazer */}
      <path
        d="M 166 140 Q 158 138 160 160 L 170 226 Q 172 240 186 242 L 230 242 Q 244 240 246 226 L 256 160 Q 258 136 248 134 Q 208 118 166 140 Z"
        fill={ILLO.charcoal}
        stroke={ILLO.black}
        strokeWidth="5.5"
        strokeLinejoin="round"
      />
      <path d="M 196 140 L 208 154 L 220 140 L 216 226 L 200 226 Z" fill={ILLO.offWhite} />
      <path d="M 204 158 L 212 158 L 216 174 L 208 222 L 200 174 Z" fill={ILLO.yellow} stroke={ILLO.black} strokeWidth="1.5" />
      <path d="M 196 140 L 208 154 L 204 174 L 178 150 Z" fill={ILLO.charcoal} stroke={ILLO.black} strokeWidth="4" strokeLinejoin="round" />
      <path d="M 220 140 L 208 154 L 212 174 L 238 150 Z" fill={ILLO.charcoal} stroke={ILLO.black} strokeWidth="4" strokeLinejoin="round" />
      <path d="M 196 110 L 220 110 L 218 140 L 198 140 Z" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="3.5" />

      {/* left arm, holding the clipboard against the body */}
      <path
        d="M 168 148 Q 148 168 144 194 Q 142 212 150 228 L 166 224 Q 160 208 162 194 Q 164 174 180 156 Z"
        fill={ILLO.offWhite}
        stroke={ILLO.black}
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <circle cx="152" cy="230" r="12" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="4" />

      {/* clipboard */}
      <g transform="translate(112, 186)">
        <rect x="0" y="0" width="62" height="80" rx="5" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="4.5" />
        <rect x="19" y="-7" width="24" height="13" rx="3" fill={ILLO.charcoalLight} stroke={ILLO.black} strokeWidth="3" />
        <rect x="10" y="18" width="10" height="10" rx="2" fill="none" stroke={ILLO.charcoalLight} strokeWidth="2.4" />
        <path d="M 12 23 L 15 26 L 20 20" stroke={ILLO.yellow} strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="26" y="20" width="26" height="6" rx="3" fill={ILLO.charcoalLight} opacity="0.5" />
        <rect x="10" y="36" width="10" height="10" rx="2" fill="none" stroke={ILLO.charcoalLight} strokeWidth="2.4" />
        <path d="M 12 41 L 15 44 L 20 34" stroke={ILLO.yellow} strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="26" y="38" width="26" height="6" rx="3" fill={ILLO.charcoalLight} opacity="0.5" />
        <rect x="10" y="54" width="10" height="10" rx="2" fill="none" stroke={ILLO.charcoalLight} strokeWidth="2.4" />
        <rect x="26" y="56" width="26" height="6" rx="3" fill={ILLO.charcoalLight} opacity="0.5" />
      </g>

      {/* right arm, holding the magnifying glass over the clipboard */}
      <path
        d="M 246 150 Q 232 158 222 172 Q 214 184 212 198 L 226 204 Q 230 190 236 180 Q 244 168 256 160 Z"
        fill={ILLO.charcoalLight}
        stroke={ILLO.black}
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <circle cx="220" cy="204" r="11" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="4" />

      {/* magnifying glass */}
      <g transform="translate(150, 218) rotate(-18)">
        <circle cx="0" cy="0" r="22" fill={ILLO.offWhite} opacity="0.35" stroke={ILLO.black} strokeWidth="5" />
        <line x1="16" y1="16" x2="34" y2="34" stroke={ILLO.black} strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* head */}
      <circle cx="206" cy="98" r="36" fill={ILLO.offWhite} stroke={ILLO.black} strokeWidth="5" />

      {/* hair — short crop, opposite part from security-network */}
      <path
        d="M 242 90
           Q 246 54 206 50
           Q 166 54 170 90
           Q 170 78 186 74
           Q 178 66 192 62
           Q 206 58 220 66
           Q 236 72 240 82
           Z"
        fill={ILLO.charcoal}
        stroke={ILLO.black}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M 242 88 Q 244 102 238 114" fill="none" stroke={ILLO.black} strokeWidth="4" strokeLinecap="round" />
      <path d="M 170 88 Q 168 102 174 114" fill="none" stroke={ILLO.black} strokeWidth="4" strokeLinecap="round" />

      {/* face */}
      <path d="M 187 90 L 197 88" stroke={ILLO.black} strokeWidth="3" strokeLinecap="round" />
      <path d="M 215 88 L 225 90" stroke={ILLO.black} strokeWidth="3" strokeLinecap="round" />
      <circle cx="192" cy="98" r="3.2" fill={ILLO.black} />
      <circle cx="220" cy="98" r="3.2" fill={ILLO.black} />
      <path d="M 194 114 Q 206 122 218 114" stroke={ILLO.black} strokeWidth="3.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
