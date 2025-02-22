const Logo = () => (
    <svg 
      viewBox="0 0 100 100" 
      className="w-10 h-10 transition-opacity hover:opacity-80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.85"/>
        </linearGradient>
      </defs>
      
      {/* Thicker outer circle */}
      <circle cx="50" cy="50" r="48" stroke="url(#circleGradient)" strokeWidth="3" fill="none"/>
      
      {/* Thicker inner circle */}
      <circle cx="50" cy="50" r="44" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
      
      {/* Thicker decorative elements */}
      <path
        d="M30 50 A20 20 0 0 1 50 30"
        stroke="white"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
      />
      <path
        d="M70 50 A20 20 0 0 0 50 70"
        stroke="white"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
      />
      
      {/* Bolder text using Sofia Pro (or your chosen font) */}
      <text 
        x="50" 
        y="62" 
        textAnchor="middle" 
        fill="white" 
        style={{
          fontFamily: "'Sofia Pro', 'Helvetica Neue', Arial, sans-serif",
          fontSize: "42px",
          fontWeight: 500,  // Increased weight
          letterSpacing: "-1px"
        }}
      >
        EG
      </text>
      
      {/* Thicker accent dots */}
      <circle cx="30" cy="30" r="1.5" fill="white" opacity="0.5"/>
      <circle cx="70" cy="70" r="1.5" fill="white" opacity="0.5"/>
    </svg>
  );
  
  export default Logo;