import React, { useState, useCallback, createContext, useContext } from 'react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
}

interface ToastItem extends ToastProps {
  id: string;
}

const ToastContext = createContext<{ toast: (props: ToastProps) => void }>({ toast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function Toast({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((props: ToastProps) => {
    const id = crypto.randomUUID();
    setToasts(prev => [...prev, { ...props, id }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, props.duration || 3000);
  }, []);

  const colors = { success: '#22c55e', error: '#ef4444', info: '#6366f1' };

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 2000, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {toasts.map(t => (
          <div key={t.id} style={{
            padding: '12px 20px', borderRadius: '10px', background: '#1a1a26',
            borderLeft: `4px solid ${colors[t.type || 'info']}`,
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)', color: '#e4e4e7', fontSize: '14px',
            animation: 'toastIn 0.3s ease', minWidth: '240px',
          }}>
            <style>{`@keyframes toastIn { from { opacity: 0; transform: translateX(100%); } }`}</style>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
