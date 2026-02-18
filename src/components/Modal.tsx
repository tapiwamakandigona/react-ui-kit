import React, { useEffect } from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: number;
}

export function Modal({ open, onClose, title, children, width = 480 }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
      document.addEventListener('keydown', handleEsc);
      return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', handleEsc); };
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }} onClick={onClose} />
      <div style={{
        position: 'relative', background: '#1a1a26', borderRadius: '16px', padding: '24px',
        width: `min(${width}px, calc(100vw - 40px))`, maxHeight: 'calc(100vh - 80px)', overflow: 'auto',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', animation: 'modalIn 0.2s ease',
      }}>
        <style>{`@keyframes modalIn { from { opacity: 0; transform: scale(0.95); } }`}</style>
        {title && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{title}</h3>
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#71717a', fontSize: '20px', cursor: 'pointer' }}>&times;</button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
