// Small, crisp inline SVG flags — used instead of emoji so they render
// identically across every OS/browser (no emoji-font dependency).

export function UkFlag({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 60 42"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flag-icon"
    >
      <rect width="60" height="42" fill="#012169" />
      <path d="M0 0 60 42 M60 0 0 42" stroke="#FFF" strokeWidth="8" />
      <path d="M0 0 60 42 M60 0 0 42" stroke="#C8102E" strokeWidth="3" />
      <path d="M30 0 30 42 M0 21 60 21" stroke="#FFF" strokeWidth="14" />
      <path d="M30 0 30 42 M0 21 60 21" stroke="#C8102E" strokeWidth="8" />
    </svg>
  )
}

export function SpainFlag({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 60 42"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flag-icon"
    >
      <rect width="60" height="42" fill="#AA151B" />
      <rect y="10.5" width="60" height="21" fill="#F1BF00" />
      <rect x="14" y="16" width="12" height="10" fill="#AA151B" opacity="0.85" />
    </svg>
  )
}
