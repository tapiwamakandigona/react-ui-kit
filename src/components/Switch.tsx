import React from "react";

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: string;
}

export function Switch({
  checked,
  onChange,
  label,
  disabled = false,
  size = "md",
  color = "#6366f1",
}: SwitchProps) {
  const sizes = {
    sm: { width: 36, height: 20, thumb: 16, translate: 16 },
    md: { width: 44, height: 24, thumb: 20, translate: 20 },
    lg: { width: 56, height: 30, thumb: 26, translate: 26 },
  };
  const s = sizes[size];

  return (
    <label style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
    }}>
      <div
        onClick={() => !disabled && onChange(!checked)}
        role="switch"
        aria-checked={checked}
        style={{
          width: s.width,
          height: s.height,
          borderRadius: s.height,
          background: checked ? color : "#2a2a3a",
          position: "relative",
          transition: "background 0.2s",
          flexShrink: 0,
        }}
      >
        <div style={{
          width: s.thumb,
          height: s.thumb,
          borderRadius: "50%",
          background: "white",
          position: "absolute",
          top: (s.height - s.thumb) / 2,
          left: checked ? s.translate : 2,
          transition: "left 0.2s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
        }} />
      </div>
      {label && <span style={{ fontSize: size === "sm" ? "13px" : "14px", color: "#e4e4e7" }}>{label}</span>}
    </label>
  );
}
