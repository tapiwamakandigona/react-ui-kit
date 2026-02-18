import React, { useState, useRef, useEffect } from "react";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

export function Tooltip({ content, children, position = "top", delay = 200 }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const show = () => {
    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const offsets = {
          top: { top: rect.top - 8, left: rect.left + rect.width / 2 },
          bottom: { top: rect.bottom + 8, left: rect.left + rect.width / 2 },
          left: { top: rect.top + rect.height / 2, left: rect.left - 8 },
          right: { top: rect.top + rect.height / 2, left: rect.right + 8 },
        };
        setCoords(offsets[position]);
      }
      setVisible(true);
    }, delay);
  };

  const hide = () => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const transforms = {
    top: "translateX(-50%) translateY(-100%)",
    bottom: "translateX(-50%)",
    left: "translateX(-100%) translateY(-50%)",
    right: "translateY(-50%)",
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        style={{ display: "inline-block" }}
      >
        {children}
      </div>
      {visible && (
        <div
          role="tooltip"
          style={{
            position: "fixed",
            top: coords.top,
            left: coords.left,
            transform: transforms[position],
            background: "#1a1a26",
            color: "#e4e4e7",
            padding: "6px 12px",
            borderRadius: "8px",
            fontSize: "13px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            zIndex: 9999,
            pointerEvents: "none",
            animation: "tooltipIn 0.15s ease",
            whiteSpace: "nowrap",
          }}
        >
          <style>{"@keyframes tooltipIn { from { opacity: 0; transform: " + transforms[position] + " scale(0.95); } }"}</style>
          {content}
        </div>
      )}
    </>
  );
}
