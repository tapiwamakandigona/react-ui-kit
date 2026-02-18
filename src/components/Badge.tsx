import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
}

export function Badge({ children, variant = 'default', size = 'md' }: BadgeProps) {
  const colors = {
    default: { bg: 'rgba(99,102,241,0.15)', color: '#818cf8' },
    success: { bg: 'rgba(34,197,94,0.15)', color: '#22c55e' },
    warning: { bg: 'rgba(234,179,8,0.15)', color: '#eab308' },
    danger: { bg: 'rgba(239,68,68,0.15)', color: '#ef4444' },
  };
  const c = colors[variant];

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: size === 'sm' ? '1px 8px' : '3px 12px',
      borderRadius: '100px', fontSize: size === 'sm' ? '11px' : '12px',
      fontWeight: 500, background: c.bg, color: c.color,
    }}>
      {children}
    </span>
  );
}
