import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, style, ...props }, ref) => {
    const inputStyle: React.CSSProperties = {
      width: '100%',
      padding: '10px 14px',
      border: `1px solid ${error ? '#ef4444' : '#2a2a3a'}`,
      borderRadius: '10px',
      background: '#14141e',
      color: '#e4e4e7',
      fontSize: '14px',
      outline: 'none',
      fontFamily: 'inherit',
      transition: 'border-color 0.2s',
      ...style,
    };

    return (
      <div style={{ marginBottom: '16px' }}>
        {label && <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 500, color: '#a0a0b0' }}>{label}</label>}
        <input ref={ref} style={inputStyle} {...props} />
        {error && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{error}</p>}
        {hint && !error && <p style={{ color: '#71717a', fontSize: '12px', marginTop: '4px' }}>{hint}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
