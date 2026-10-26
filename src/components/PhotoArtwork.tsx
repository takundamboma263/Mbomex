import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { PhotoWork } from '../data/portfolioData';

interface PhotoArtworkProps {
  work: PhotoWork;
  className?: string;
  showOverlay?: boolean;
}

export const PhotoArtwork: React.FC<PhotoArtworkProps> = ({
  work,
  className = '',
  showOverlay = true,
}) => {
  // If the user uploaded a custom image
  if (work.customImageData) {
    return (
      <div className={`relative overflow-hidden bg-neutral-900 group ${className}`}>
        <img
          src={work.customImageData}
          alt={work.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {showOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono-data">
              {work.series} · {work.year}
            </span>
            <h4 className="text-lg font-medium tracking-tight mt-1">{work.title}</h4>
            <p className="text-xs text-neutral-300 mt-1">{work.location}</p>
          </div>
        )}
      </div>
    );
  }

  // Render stylized, high-aesthetic curated vector photographic compositions
  return (
    <div className={`relative overflow-hidden bg-[#0d0d10] group select-none ${className}`}>
      {renderArtworkComposition(work)}

      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/90 via-[#09090b]/30 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono-data mb-1">
            <span>{work.series}</span>
            <span aria-hidden="true">·</span>
            <span>{work.year}</span>
            <span aria-hidden="true">·</span>
            <span>{work.location}</span>
          </div>
          <h4 className="text-lg font-medium tracking-tight font-display text-white">{work.title}</h4>
          <div className="flex items-center gap-2 mt-2 text-[11px] font-mono-data text-neutral-400">
            <Camera className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span className="truncate">{work.camera} · {work.settings.focalLength} · {work.settings.aperture}</span>
          </div>
        </div>
      )}
    </div>
  );
};

function renderArtworkComposition(work: PhotoWork) {
  const type = work.svgArtType || 'monochrome_portrait';

  switch (type) {
    case 'golden_hour_street':
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" aria-label={work.title}>
          <defs>
            <linearGradient id="gh-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2c1810" />
              <stop offset="40%" stopColor="#4a2512" />
              <stop offset="75%" stopColor="#c2632b" />
              <stop offset="100%" stopColor="#e5984d" />
            </linearGradient>
            <linearGradient id="gh-sunbeam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffe4b5" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#ff9944" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
            <filter id="film-grain-1">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0" />
              <feComposite in2="SourceGraphic" in="gl" operator="over" />
            </filter>
          </defs>
          <rect width="800" height="600" fill="url(#gh-sky)" />
          {/* Angled sunbeam through market canopy */}
          <polygon points="150,-20 320,-20 850,650 620,650" fill="url(#gh-sunbeam)" />
          {/* Background architectural market sheds */}
          <path d="M 0,380 L 120,340 L 260,390 L 400,320 L 580,360 L 800,330 L 800,600 L 0,600 Z" fill="#180e0a" />
          {/* Midground corrugated stalls */}
          <path d="M 40,430 L 190,410 L 320,440 L 520,400 L 750,450 L 800,430 L 800,600 L 40,600 Z" fill="#120906" />
          {/* Standing figure silhouette waiting at intersection */}
          <g fill="#080403">
            <ellipse cx="440" cy="380" rx="14" ry="16" />
            <path d="M 425,396 Q 440,394 455,396 L 464,480 L 416,480 Z" />
            <rect x="424" y="480" width="12" height="70" />
            <rect x="444" y="480" width="12" height="68" />
            {/* Textile bundle on shoulder */}
            <ellipse cx="452" cy="410" rx="18" ry="14" fill="#1c0e08" transform="rotate(-15 452 410)" />
          </g>
          {/* Ambient dust specks caught in light */}
          <circle cx="380" cy="240" r="1.5" fill="#ffe2b0" opacity="0.7" />
          <circle cx="410" cy="290" r="2" fill="#ffe2b0" opacity="0.8" />
          <circle cx="490" cy="220" r="1.2" fill="#ffe2b0" opacity="0.6" />
          <circle cx="340" cy="330" r="1.8" fill="#ffe2b0" opacity="0.65" />
          <circle cx="460" cy="310" r="2.2" fill="#ffe2b0" opacity="0.75" />
          {/* Foreground pavement texture */}
          <rect x="0" y="550" width="800" height="50" fill="#090504" />
        </svg>
      );

    case 'monochrome_portrait':
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" aria-label={work.title}>
          <defs>
            <linearGradient id="mono-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="50%" stopColor="#0f0f0f" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
            <radialGradient id="key-light" cx="30%" cy="35%" r="50%">
              <stop offset="0%" stopColor="#dedede" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#7a7a7a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="600" fill="url(#mono-bg)" />
          {/* Atmospheric background studio light pool */}
          <ellipse cx="280" cy="280" rx="260" ry="260" fill="url(#key-light)" opacity="0.35" />
          {/* Dramatic profile silhouette with subtle rim light */}
          <g transform="translate(180, 40)">
            {/* Shoulder and torso form */}
            <path d="M 120,490 C 130,400 170,350 220,330 C 260,340 320,390 380,490 Z" fill="#0d0d0d" />
            {/* Neck */}
            <path d="M 210,270 L 265,270 L 275,340 L 205,340 Z" fill="#1f1f1f" />
            {/* Head and elegant profile */}
            <path d="M 220,110 C 265,100 310,130 320,180 C 325,215 315,245 285,270 C 240,290 200,280 185,250 C 170,215 180,140 220,110 Z" fill="#141414" />
            {/* Sculpted rim lighting on jawline and brow */}
            <path d="M 205,150 C 200,165 198,185 204,200 C 200,210 195,218 202,228 C 210,240 206,252 218,262 C 228,270 234,272 245,274" fill="none" stroke="#e0e0e0" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
            {/* Ear detail */}
            <path d="M 265,200 C 275,195 280,210 275,225 C 270,235 264,230 263,220" fill="none" stroke="#777" strokeWidth="2.5" />
            {/* Sculpting clay vessel silhouette held at chest */}
            <ellipse cx="210" cy="420" rx="60" ry="40" fill="#282828" />
            <path d="M 160,420 Q 210,480 260,420 Z" fill="#1c1c1c" />
          </g>
          {/* Subtle noise / silver halide grain feel */}
          <line x1="0" y1="580" x2="800" y2="580" stroke="#222" strokeWidth="1" />
        </svg>
      );

    case 'brutalist_facade':
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" aria-label={work.title}>
          <defs>
            <linearGradient id="sky-cool" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1c2430" />
              <stop offset="60%" stopColor="#303c4c" />
              <stop offset="100%" stopColor="#68788e" />
            </linearGradient>
            <linearGradient id="concrete-light" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8a94a2" />
              <stop offset="50%" stopColor="#5d6775" />
              <stop offset="100%" stopColor="#313943" />
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="url(#sky-cool)" />
          {/* Monolithic brutalist concrete tower pillars */}
          <g>
            {/* Left tower angled */}
            <polygon points="40,0 220,0 260,600 0,600" fill="#252c35" />
            <polygon points="120,0 180,0 210,600 150,600" fill="#3c4652" opacity="0.6" />
            {/* Center tower with dramatic perspective */}
            <polygon points="320,0 520,0 590,600 240,600" fill="url(#concrete-light)" />
            {/* Vertical brutalist bush-hammered fluting fins */}
            {[350, 380, 410, 440, 470, 500].map((x, i) => (
              <line
                key={i}
                x1={x}
                y1="0"
                x2={x + 35}
                y2="600"
                stroke="#1e2329"
                strokeWidth="5"
                opacity="0.85"
              />
            ))}
            {/* Deep recessed window balconies */}
            {[80, 160, 240, 320, 400, 480].map((y, i) => (
              <rect
                key={i}
                x={360 + i * 4}
                y={y}
                width="110"
                height="32"
                fill="#0f1317"
                opacity="0.9"
              />
            ))}
            {/* Right overhang bridge */}
            <polygon points="560,180 800,120 800,280 570,360" fill="#1d2228" />
            {/* Tiny solitary pedestrian crossing skybridge for architectural scale */}
            <circle cx="680" cy="205" r="3" fill="#e2e8f0" />
            <line x1="680" y1="208" x2="680" y2="225" stroke="#e2e8f0" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'london_shadows':
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" aria-label={work.title}>
          <defs>
            <linearGradient id="thames-dusk" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0b1320" />
              <stop offset="45%" stopColor="#15243b" />
              <stop offset="70%" stopColor="#253852" />
              <stop offset="100%" stopColor="#433732" />
            </linearGradient>
            <linearGradient id="water-glow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e2f47" />
              <stop offset="100%" stopColor="#080c14" />
            </linearGradient>
          </defs>
          <rect width="800" height="380" fill="url(#thames-dusk)" />
          <rect y="380" width="800" height="220" fill="url(#water-glow)" />
          {/* Distant skyline across river */}
          <path d="M 0,380 L 80,360 L 140,375 L 210,340 L 260,370 L 340,310 L 420,380 L 520,350 L 610,320 L 720,370 L 800,355 L 800,380 Z" fill="#080e18" />
          {/* River reflections */}
          <ellipse cx="340" cy="420" rx="30" ry="3" fill="#e2a14e" opacity="0.3" />
          <ellipse cx="610" cy="430" rx="25" ry="2" fill="#d97736" opacity="0.25" />
          {/* Foreground stone balustrade and silhouette */}
          <rect x="0" y="470" width="800" height="130" fill="#04060a" />
          <line x1="0" y1="470" x2="800" y2="470" stroke="#334155" strokeWidth="4" />
          {/* Street lamp warm halo */}
          <circle cx="680" cy="280" r="8" fill="#ffe7a3" />
          <circle cx="680" cy="280" r="45" fill="#e69d45" opacity="0.15" />
          <line x1="680" y1="288" x2="680" y2="470" stroke="#111827" strokeWidth="6" />
          {/* Solitary commuter in trenchcoat leaning on rail */}
          <g fill="#020305" transform="translate(240, 360)">
            <ellipse cx="40" cy="18" rx="10" ry="12" />
            <path d="M 26,30 L 54,30 L 65,110 L 15,110 Z" />
          </g>
        </svg>
      );

    case 'artisan_hands':
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" aria-label={work.title}>
          <defs>
            <linearGradient id="loom-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1814" />
              <stop offset="100%" stopColor="#0b0806" />
            </linearGradient>
            <linearGradient id="warm-wood" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6e462c" />
              <stop offset="100%" stopColor="#311c10" />
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="url(#loom-bg)" />
          {/* Tension warp strings */}
          {Array.from({ length: 42 }).map((_, i) => (
            <line
              key={i}
              x1={40 + i * 18}
              y1="0"
              x2={40 + i * 18}
              y2="600"
              stroke={i % 4 === 0 ? '#b8864d' : '#453526'}
              strokeWidth={i % 4 === 0 ? '2' : '1'}
              opacity="0.8"
            />
          ))}
          {/* Woven sisal textile block growing at bottom */}
          <path d="M 40,410 C 200,430 500,390 780,420 L 780,600 L 40,600 Z" fill="url(#warm-wood)" opacity="0.9" />
          {/* Weathered hands in frame threading the shuttle */}
          <g fill="#9c633f" stroke="#2b170c" strokeWidth="2">
            {/* Left hand gripping loom beam */}
            <ellipse cx="260" cy="380" rx="35" ry="24" transform="rotate(-20 260 380)" />
            {/* Fingers guiding thread */}
            <rect x="270" y="360" width="40" height="14" rx="7" transform="rotate(-15 270 360)" />
            <rect x="275" y="380" width="44" height="14" rx="7" transform="rotate(-10 275 380)" />
            <rect x="270" y="400" width="38" height="13" rx="6" transform="rotate(-5 270 400)" />
          </g>
          <g fill="#a86e49" stroke="#2b170c" strokeWidth="2">
            {/* Right hand with needle/shuttle */}
            <ellipse cx="520" cy="360" rx="38" ry="25" transform="rotate(25 520 360)" />
            <rect x="470" y="350" width="42" height="14" rx="7" transform="rotate(20 470 350)" />
            <rect x="465" y="372" width="45" height="14" rx="7" transform="rotate(15 465 372)" />
            {/* Slender wood shuttle */}
            <polygon points="410,340 580,390 575,402 405,352" fill="#d49b5c" />
          </g>
        </svg>
      );

    case 'high_desert_minimal':
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" aria-label={work.title}>
          <defs>
            <linearGradient id="desert-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dce8f2" />
              <stop offset="60%" stopColor="#f5ebe1" />
              <stop offset="100%" stopColor="#edd8c4" />
            </linearGradient>
            <linearGradient id="desert-ground" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a37654" />
              <stop offset="100%" stopColor="#472b18" />
            </linearGradient>
          </defs>
          <rect width="800" height="420" fill="url(#desert-sky)" />
          <rect y="420" width="800" height="180" fill="url(#desert-ground)" />
          {/* Subtle low distant kopje mountain ridge */}
          <path d="M 0,420 Q 180,395 340,415 T 620,400 T 800,418 L 800,420 Z" fill="#b08b6e" opacity="0.6" />
          {/* Windmill framework on horizon */}
          <g stroke="#261c14" strokeWidth="2" fill="none" transform="translate(520, 260)">
            <line x1="20" y1="0" x2="0" y2="160" />
            <line x1="20" y1="0" x2="40" y2="160" />
            <line x1="5" y1="50" x2="35" y2="50" />
            <line x1="2" y1="100" x2="38" y2="100" />
            {/* Windmill blades circle */}
            <circle cx="20" cy="0" r="28" strokeWidth="1.5" />
            <line x1="20" y1="-28" x2="20" y2="28" />
            <line x1="-8" y1="0" x2="48" y2="0" />
            {/* Vane rudder tail */}
            <polygon points="20,0 60,-8 55,8" fill="#523928" />
          </g>
          {/* Lone thorn tree silhouette */}
          <g fill="#211812" transform="translate(180, 360)">
            <path d="M 30,60 C 28,35 15,20 0,0 C 25,12 50,8 70,0 C 55,20 42,35 40,60 Z" />
            {/* Flat umbrella acacia canopy */}
            <ellipse cx="25" cy="-2" rx="48" ry="12" />
            <ellipse cx="60" cy="-6" rx="35" ry="9" />
          </g>
        </svg>
      );

    case 'serengeti_light':
    case 'dusk_market':
    default:
      return (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" aria-label={work.title}>
          <defs>
            <linearGradient id="dusk-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e1832" />
              <stop offset="50%" stopColor="#432644" />
              <stop offset="85%" stopColor="#8d4a46" />
              <stop offset="100%" stopColor="#db8154" />
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="url(#dusk-sky)" />
          {/* Sunset glow sphere */}
          <circle cx="560" cy="460" r="110" fill="#ffd185" opacity="0.6" filter="blur(8px)" />
          {/* Rolling escarpment ridges */}
          <path d="M 0,440 Q 220,380 440,430 T 800,410 L 800,600 L 0,600 Z" fill="#2d1720" />
          <path d="M 0,480 Q 300,460 550,510 T 800,470 L 800,600 L 0,600 Z" fill="#170c12" />
          {/* Lone figure watching horizon */}
          <circle cx="280" cy="425" r="7" fill="#080406" />
          <path d="M 270,432 L 290,432 L 294,480 L 266,480 Z" fill="#080406" />
        </svg>
      );
  }
}
