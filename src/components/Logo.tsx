import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, className = '' }) => {
  return (
    <div className={`logo ${className}`} style={{ width: size, height: size }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="oceanGradient" cx="50%" cy="30%" r="80%">
            <stop offset="0%" style={{stopColor:"#4da6d9", stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:"#1e6091", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#0a2f4a", stopOpacity:1}} />
          </radialGradient>
          <linearGradient id="submarineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#ffd700", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#ffb000", stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="treasureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#ff6b6b", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#ee5a24", stopOpacity:1}} />
          </linearGradient>
        </defs>
        
        {/* Ocean background */}
        <circle cx="60" cy="60" r="56" fill="url(#oceanGradient)"/>
        
        {/* Ocean depth layers */}
        <ellipse cx="60" cy="70" rx="50" ry="12" fill="#1e6091" opacity="0.3"/>
        <ellipse cx="60" cy="80" rx="45" ry="8" fill="#0a2f4a" opacity="0.4"/>
        
        {/* Submarine (main explorer) */}
        <ellipse cx="45" cy="50" rx="18" ry="8" fill="url(#submarineGradient)"/>
        <rect x="27" y="47" width="8" height="6" rx="3" fill="url(#submarineGradient)"/>
        <circle cx="52" cy="50" r="4" fill="#fff" opacity="0.9"/>
        <circle cx="52" cy="50" r="2" fill="#4da6d9"/>
        {/* Periscope */}
        <rect x="61" y="42" width="2" height="8" fill="url(#submarineGradient)"/>
        <rect x="60" y="42" width="4" height="2" rx="1" fill="url(#submarineGradient)"/>
        
        {/* Treasure chest (destination) */}
        <rect x="80" y="75" width="16" height="12" rx="2" fill="#8b4513"/>
        <rect x="82" y="77" width="12" height="8" rx="1" fill="url(#treasureGradient)"/>
        <circle cx="88" cy="81" r="1.5" fill="#ffd700"/>
        
        {/* Sonar/exploration beams */}
        <path d="M63 50 Q75 45 85 55" stroke="#4da6d9" strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="3,2"/>
        <path d="M63 50 Q75 55 85 45" stroke="#4da6d9" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="3,2"/>
        
        {/* Bubbles */}
        <circle cx="35" cy="35" r="3" fill="#87ceeb" opacity="0.7"/>
        <circle cx="42" cy="25" r="2" fill="#87ceeb" opacity="0.8"/>
        <circle cx="38" cy="30" r="1.5" fill="#87ceeb" opacity="0.6"/>
        <circle cx="85" cy="30" r="2.5" fill="#87ceeb" opacity="0.7"/>
        <circle cx="90" cy="25" r="1.5" fill="#87ceeb" opacity="0.8"/>
        
        {/* Sea floor elements */}
        <ellipse cx="25" cy="95" rx="8" ry="3" fill="#8b7355"/>
        <ellipse cx="75" cy="90" rx="12" ry="4" fill="#8b7355"/>
        <ellipse cx="95" cy="95" rx="6" ry="2" fill="#8b7355"/>
        
        {/* Anchor (navigation point) */}
        <path d="M25 65 L25 75 M20 70 L30 70 M22 73 Q20 75 22 77 M28 73 Q30 75 28 77" stroke="#696969" strokeWidth="2" strokeLinecap="round"/>
        
        {/* Compass rose (in corner) */}
        <g transform="translate(90,25)">
          <circle cx="0" cy="0" r="8" fill="#fff" opacity="0.9" stroke="#1e6091" strokeWidth="1"/>
          <path d="M0,-6 L2,0 L0,6 L-2,0 Z" fill="#ff6b6b"/>
          <path d="M-6,0 L0,2 L6,0 L0,-2 Z" fill="#4da6d9"/>
        </g>
      </svg>
    </div>
  );
};

export default Logo;