export function FlagFR({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 3 2"
      preserveAspectRatio="none"
      className={`h-4 w-4 shrink-0 rounded-[2px] ${className}`}
      aria-hidden
    >
      <rect width="1" height="2" x="0" fill="#002395" />
      <rect width="1" height="2" x="1" fill="#FFFFFF" />
      <rect width="1" height="2" x="2" fill="#ED2939" />
    </svg>
  );
}

export function FlagGB({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 30"
      preserveAspectRatio="none"
      className={`h-4 w-4 shrink-0 rounded-[2px] ${className}`}
      aria-hidden
    >
      <clipPath id="gb-s">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="gb-t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#gb-s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clipPath="url(#gb-t)"
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
