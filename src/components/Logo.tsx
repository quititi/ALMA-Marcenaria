import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  scale?: number;
}

export default function Logo({ className = '', light = false, scale = 1 }: LogoProps) {
  // Main brand gold-bronze color
  const goldColor = '#a3743f'; // Match the elegant warm bronze of the logo
  
  return (
    <div className={`flex items-center select-none ${className}`} style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 320"
        className="w-auto h-16 sm:h-20 transition-all duration-300"
        style={{ height: `${76 * scale}px` }}
      >
        {/* Outer Black Bounding Box (Only if on light bg or specifically requested, otherwise clean background) */}
        <rect width="400" height="320" fill="#000000" rx="4" />

        {/* Outer Gold Border Frame */}
        <rect
          x="35"
          y="35"
          width="330"
          height="250"
          fill="none"
          stroke={goldColor}
          strokeWidth="15"
        />

        {/* Separator Gold Line (Divides the ALMA box and MARCENARIA bar) */}
        <line
          x1="35"
          y1="210"
          x2="365"
          y2="210"
          stroke={goldColor}
          strokeWidth="15"
        />

        {/* Inner Black Box for ALMA letters */}
        <rect
          x="42.5"
          y="42.5"
          width="315"
          height="160"
          fill="#000000"
        />

        {/* Vector representation of "ALMA" in customized Gothic/Architectural font */}
        <g fill={goldColor}>
          {/* Letter 'A' (Left) */}
          <path d="M 65 178 L 78 178 L 84 155 Q 102 150 108 178 L 121 178 L 94 65 L 92 65 Z M 87 142 L 93 118 L 99 142 Z" />
          <path d="M 63 178 C 65 160 84 75 93 65 C 102 75 121 160 123 178 Z" fill="none" stroke={goldColor} strokeWidth="3" />

          {/* Letter 'L' */}
          <path d="M 145 68 L 160 68 L 160 162 L 205 162 L 205 178 L 145 178 Z" />

          {/* Letter 'M' (with double high apex and extended center drop point matching logo icon) */}
          <path d="M 220 178 L 235 178 L 235 90 L 255 174 L 265 174 L 285 90 L 285 178 L 300 178 L 300 68 L 280 68 L 260 148 L 240 68 L 220 68 Z" />

          {/* Letter 'A' (Right) */}
          <path d="M 314 178 L 327 178 L 333 155 Q 351 150 357 178 L 370 178 L 343 65 L 341 65 Z M 336 142 L 342 118 L 348 142 Z" />
          <path d="M 312 178 C 314 160 333 75 342 65 C 351 75 370 160 372 178 Z" fill="none" stroke={goldColor} strokeWidth="3" />
        </g>

        {/* Lower Section for MARCENARIA text */}
        {/* Solid Gold Bar Background */}
        <rect
          x="42.5"
          y="217.5"
          width="315"
          height="60"
          fill={goldColor}
        />

        {/* MARCENARIA Text in Black styled exactly like font */}
        <text
          x="200"
          y="256"
          fill="#000000"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="36"
          fontWeight="bold"
          letterSpacing="4"
          textAnchor="middle"
        >
          MARCENARIA
        </text>

        {/* Direct thin underline below MARCENARIA */}
        <line
          x1="60"
          y1="266"
          x2="340"
          y2="266"
          stroke="#000000"
          strokeWidth="3.5"
        />
      </svg>
    </div>
  );
}
