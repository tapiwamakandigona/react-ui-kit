import React, { useState, useRef, useEffect } from "react";

export interface DropdownOption {
  value: string;
  label: string;
  icon?: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function Dropdown({ options, value, onChange, placeholder = "Select...", disabled }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find(o => o.value === value);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block", minWidth: "160px" }}>
      <button
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
        style={{
          width: "100%",
          padding: "10px 14px",
          border: "1px solid #2a2a3a",
          borderRadius: "10px",
          background: "#14141e",
          color: selected ? "#e4e4e7" : "#71717a",
          fontSize: "14px",
          cursor: disabled ? "not-allowed" : "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "inherit",
        }}
      >
        <span>{selected ? (selected.icon ? selected.icon + " " : "") + selected.label : placeholder}</span>
        <span style={{ fontSize: "10px" }}>{open ? "\u25B2" : "\u25BC"}</span>
      </button>
      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 4px)",
          left: 0,
          right: 0,
          background: "#1a1a26",
          border: "1px solid #2a2a3a",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          zIndex: 100,
          animation: "dropIn 0.15s ease",
        }}>
          <style>{"@keyframes dropIn { from { opacity: 0; transform: translateY(-4px); } }"}</style>
          {options.map(opt => (
            <button
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "none",
                background: opt.value === value ? "rgba(99,102,241,0.15)" : "transparent",
                color: opt.value === value ? "#6366f1" : "#e4e4e7",
                fontSize: "14px",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "inherit",
                display: "flex",
                gap: "8px",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(99,102,241,0.1)")}
              onMouseLeave={e => (e.currentTarget.style.background = opt.value === value ? "rgba(99,102,241,0.15)" : "transparent")}
            >
              {opt.icon && <span>{opt.icon}</span>}
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
