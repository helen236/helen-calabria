interface IconProps {
  size?: number;
  color?: string;
}

// "Just for you" — single person
export function IconLeaf({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7.5" r="3" />
      <path d="M6 21v-1a6 6 0 0 1 12 0v1" />
    </svg>
  );
}

// "Both of you" — two people
export function IconTwoHearts({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="7" r="2.5" />
      <path d="M2 20v-1a5.5 5.5 0 0 1 9-4.24" />
      <circle cx="16" cy="7" r="2.5" />
      <path d="M22 20v-1a5.5 5.5 0 0 0-9-4.24" />
    </svg>
  );
}

// "Ongoing support" — recurring cycle
export function IconCompass({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 6.36 2.64" />
      <polyline points="21 3 21 8 16 8" />
    </svg>
  );
}
