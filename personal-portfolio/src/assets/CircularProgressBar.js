import React from 'react';

const CircularProgressBar = ({ percentage, skill }) => {
  const radius = 52; // Rayon du cercle doublé
  const circumference = 2 * Math.PI * radius; 
  const offset = circumference - (percentage / 100) * circumference; 

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <svg width="240" height="240"> {/* Taille du SVG doublée */}
        <defs>
          <linearGradient id="gradient-violet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7A288A" />  
            <stop offset="50%" stopColor="#C51077" /> 
            <stop offset="100%" stopColor="#FF69B4" /> 
          </linearGradient>
        </defs>

        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth="10"
          r={radius}
          cx="120"  /* Coordonnée X du centre doublée */
          cy="120"  /* Coordonnée Y du centre doublée */
        /> 
        <circle
          stroke="url(#gradient-violet)"
          fill="transparent"
          strokeWidth="10"
          r={radius}
          cx="120"  /* Coordonnée X du centre doublée */
          cy="120"  /* Coordonnée Y du centre doublée */
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 120 120)" /* Rotation ajustée en fonction du nouveau centre */
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="30px" // Vous pouvez ajuster la taille de la police si besoin
          fill="#FFFFFF" 
        >
          {percentage}%
        </text>
      </svg>
      <h5>{skill}</h5>
    </div>
  );
};

export default CircularProgressBar;