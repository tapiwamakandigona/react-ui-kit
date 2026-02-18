import React from "react";

export interface ProgressProps {
  value: number; // 0-100
  max?: number;
  size?: "sm" | "md" | "lg";
  color?: string;
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
  striped?: boolean;
}

export function Progress({
  value,
  max = 100,
  size = "md",
  color = "#6366f1",
  showLabel = false,
  label,
  animated = false,
  striped = false,
}: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const heights = { sm: 4, md: 8, lg: 16 };
  const height = heights[size];

  const stripeStyle = striped ? {
    backgroundImage: `repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255,255,255,0.1) 10px,
      rgba(255,255,255,0.1) 20px
    )`,
    backgroundSize: "28px 28px",
  } : {};

  const animStyle = animated ? {
    animation: "progressStripe 1s linear infinite",
  } : {};

  return (
    <div>
      {(showLabel || label) && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "13px" }}>
          <span style={{ color: "#a0a0b0" }}>{label || ""}</span>
          {showLabel && <span style={{ color: "#e4e4e7", fontWeight: 600 }}>{Math.round(percentage)}%</span>}
        </div>
      )}
      <div style={{
        width: "100%",
        height,
        background: "#2a2a3a",
        borderRadius: height,
        overflow: "hidden",
      }}>
        <div style={{
          width: `${percentage}%`,
          height: "100%",
          background: color,
          borderRadius: height,
          transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          ...stripeStyle,
          ...animStyle,
        }} />
      </div>
      <style>{"@keyframes progressStripe { from { background-position: 28px 0; } to { background-position: 0 0; } }"}</style>
    </div>
  );
}
