interface IconProps {
  size?: number;
  color?: string;
}

export function IconLeaf({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20C11 20 4 16 4 9C4 9 9 7 14 10C19 13 20 19 20 19C20 19 15 21 11 20Z" />
      <path d="M11 20L7 14" />
    </svg>
  );
}

export function IconTwoHearts({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="7" r="2.5" />
      <path d="M3 19c0-3 2-5 5-5" />
      <circle cx="16" cy="7" r="2.5" />
      <path d="M21 19c0-3-2-5-5-5" />
      <path d="M8 14c1 0 2.5.5 4 2 1.5-1.5 3-2 4-2" />
    </svg>
  );
}

export function IconCompass({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
    </svg>
  );
}
