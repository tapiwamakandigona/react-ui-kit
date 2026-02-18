import React from 'react';

export interface SpinnerProps {
  size?: number;
  color?: string;
}

export function Spinner({ size = 24, color = '#6366f1' }: SpinnerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ animation: 'rui-spin 1s linear infinite' }}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="3" opacity="0.2" />
      <path d="M12 2a10 10 0 019.95 9" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <style>{`@keyframes rui-spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  );
}
