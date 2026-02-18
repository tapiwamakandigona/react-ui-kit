import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  padding?: number;
  hover?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function Card({ children, padding = 20, hover = false, onClick, style }: CardProps) {
  return (
    <div onClick={onClick} style={{
      background: '#1a1a26', borderRadius: '12px', padding,
      border: '1px solid #2a2a3a', transition: 'all 0.2s',
      cursor: onClick ? 'pointer' : 'default',
      ...(hover ? { ':hover': { borderColor: '#6366f1' } } : {}),
      ...style,
    }}>
      {children}
    </div>
  );
}
