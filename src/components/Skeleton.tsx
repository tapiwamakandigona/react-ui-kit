import React from "react";

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  variant?: "text" | "circular" | "rectangular";
  count?: number;
  gap?: number;
}

export function Skeleton({
  width = "100%",
  height,
  borderRadius,
  variant = "text",
  count = 1,
  gap = 8,
}: SkeletonProps) {
  const defaults = {
    text: { height: 16, borderRadius: 4 },
    circular: { height: 40, borderRadius: "50%" },
    rectangular: { height: 120, borderRadius: 8 },
  };

  const finalHeight = height || defaults[variant].height;
  const finalRadius = borderRadius || defaults[variant].borderRadius;
  const finalWidth = variant === "circular" ? finalHeight : width;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            width: typeof finalWidth === "number" ? `${finalWidth}px` : finalWidth,
            height: typeof finalHeight === "number" ? `${finalHeight}px` : finalHeight,
            borderRadius: typeof finalRadius === "number" ? `${finalRadius}px` : finalRadius,
            background: "linear-gradient(90deg, #1a1a26 25%, #2a2a3a 50%, #1a1a26 75%)",
            backgroundSize: "200% 100%",
            animation: "skeletonShimmer 1.5s ease-in-out infinite",
          }}
        />
      ))}
      <style>{"@keyframes skeletonShimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }"}</style>
    </div>
  );
}
