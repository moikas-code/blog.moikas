export default function Logo() {
  return (
    <span className="flex items-center gap-2 select-none">
      {/* Pixelated game controller icon (SVG) */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Controller body: black with gold outline */}
        <rect x="4" y="10" width="24" height="12" rx="4" fill="#18181b" stroke="#ffd700" strokeWidth="2" />
        {/* D-pad: purple */}
        <rect x="8" y="14" width="4" height="4" rx="1" fill="#a78bfa" />
        {/* Buttons: green and gold */}
        <rect x="20" y="14" width="4" height="4" rx="1" fill="#22c55e" />
        {/* Center button: gold */}
        <circle cx="16" cy="16" r="2" fill="#ffd700" />
        {/* Start/select: purple and green */}
        <rect x="13" y="12" width="2" height="2" rx="0.5" fill="#a78bfa" />
        <rect x="17" y="12" width="2" height="2" rx="0.5" fill="#22c55e" />
      </svg>
      {/* Stylized blog name */}
      <span className="font-extrabold text-2xl md:text-3xl tracking-tight font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-green-400 to-yellow-400 drop-shadow-md">
        moikas
      </span>
      <span className="hidden md:inline text-xs font-bold text-base-content/60 ml-1 tracking-widest uppercase">
        blog
      </span>
    </span>
  );
} 