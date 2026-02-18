import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  children,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 600,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.5 : 1,
    transition: 'all 0.2s',
    fontFamily: 'inherit',
    width: fullWidth ? '100%' : 'auto',
    ...(size === 'sm' ? { padding: '6px 14px', fontSize: '13px' } :
        size === 'lg' ? { padding: '14px 28px', fontSize: '16px' } :
        { padding: '10px 20px', fontSize: '14px' }),
    ...(variant === 'primary' ? { background: '#6366f1', color: '#fff' } :
        variant === 'secondary' ? { background: '#1e1e2e', color: '#e4e4e7', border: '1px solid #2a2a3a' } :
        variant === 'ghost' ? { background: 'transparent', color: '#a0a0b0' } :
        { background: '#ef4444', color: '#fff' }),
    ...style,
  };

  return (
    <button style={baseStyle} disabled={disabled || loading} {...props}>
      {loading && <Spinner size={size === 'sm' ? 14 : 18} />}
      {children}
    </button>
  );
}

function Spinner({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  );
}
