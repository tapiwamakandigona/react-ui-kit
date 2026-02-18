import React from 'react';

export interface AvatarProps {
  name?: string;
  src?: string;
  size?: number;
  color?: string;
}

export function Avatar({ name, src, size = 40, color = '#6366f1' }: AvatarProps) {
  const initials = name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : '?';
  
  if (src) {
    return <img src={src} alt={name || ''} style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover' }} />;
  }

  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.4, fontWeight: 700, color: '#fff',
    }}>
      {initials}
    </div>
  );
}
