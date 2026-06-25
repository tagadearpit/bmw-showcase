export default function CarVisual({ color = '#1a66ff', variant = 'sedan', className = '' }) {
  const safeId = color.replace(/[^a-zA-Z0-9]/g, '')
  const isSuv = variant?.toLowerCase?.().includes('suv')
  const isRoadster = variant?.toLowerCase?.().includes('roadster')

  return (
    <div className={`relative mx-auto aspect-[2.55/1] w-full max-w-3xl ${className}`} aria-hidden="true">
      <div className="absolute inset-x-[8%] bottom-[7%] h-[7%] rounded-full bg-black/80 blur-xl" />
      <svg viewBox="0 0 900 350" className="absolute inset-0 h-full w-full overflow-visible drop-shadow-[0_40px_70px_rgba(0,0,0,0.7)]">
        <defs>
          <linearGradient id={`body-${safeId}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.95" />
            <stop offset="18%" stopColor={color} stopOpacity="0.95" />
            <stop offset="55%" stopColor="#111827" stopOpacity="1" />
            <stop offset="100%" stopColor="#020617" stopOpacity="1" />
          </linearGradient>
          <linearGradient id={`glass-${safeId}`} x1="0" x2="1">
            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id={`wheel-${safeId}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="35%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
        </defs>

        <path
          d={
            isSuv
              ? 'M95 229 C145 178 181 139 274 128 L545 126 C641 128 735 167 795 224 C827 229 851 246 858 270 L847 293 L719 298 C702 255 675 233 635 233 C592 233 565 256 548 298 L341 298 C326 256 297 233 254 233 C211 233 183 256 166 298 L70 291 C55 258 65 240 95 229 Z'
              : isRoadster
                ? 'M86 235 C169 171 242 151 358 157 L506 162 C617 169 719 196 801 236 C834 242 854 255 863 278 L850 298 L716 300 C701 258 674 237 633 237 C592 237 564 260 549 300 L339 300 C324 259 296 237 254 237 C213 237 185 259 168 300 L69 294 C55 267 60 247 86 235 Z'
                : 'M74 235 C156 181 233 149 357 142 L525 143 C646 151 743 190 813 236 C844 242 862 256 867 277 L852 298 L718 301 C704 260 675 238 634 238 C592 238 565 260 549 301 L340 301 C325 260 296 238 255 238 C213 238 185 260 169 301 L67 294 C52 269 55 249 74 235 Z'
          }
          fill={`url(#body-${safeId})`}
        />
        <path
          d={
            isSuv
              ? 'M270 141 L374 78 L548 80 C604 93 650 122 683 157 L567 158 L536 105 L389 104 L332 158 L237 159 C243 153 255 146 270 141 Z'
              : isRoadster
                ? 'M329 162 C384 116 442 100 523 110 C565 117 606 136 644 163 L329 162 Z'
                : 'M276 157 C323 105 380 80 466 78 C559 77 623 107 687 160 L563 159 L521 100 L411 101 L351 160 L276 157 Z'
          }
          fill={`url(#glass-${safeId})`}
          opacity="0.9"
        />
        <path d="M137 236 C289 217 589 214 805 236" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="6" strokeLinecap="round" />
        <path d="M205 199 C327 177 588 182 731 206" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="255" cy="294" r="57" fill="#020617" />
        <circle cx="255" cy="294" r="38" fill={`url(#wheel-${safeId})`} />
        <circle cx="255" cy="294" r="13" fill="#0f172a" />
        <circle cx="634" cy="294" r="57" fill="#020617" />
        <circle cx="634" cy="294" r="38" fill={`url(#wheel-${safeId})`} />
        <circle cx="634" cy="294" r="13" fill="#0f172a" />
        <path d="M783 229 L845 243" stroke="#dbeafe" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
        <path d="M88 242 L147 235" stroke="#60a5fa" strokeWidth="7" strokeLinecap="round" opacity="0.8" />
      </svg>
    </div>
  )
}
