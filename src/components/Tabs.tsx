import React, { useState } from "react";

export interface Tab {
  id: string;
  label: string;
  icon?: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: "default" | "pills" | "underline";
}

export function Tabs({ tabs, defaultTab, onChange, variant = "default" }: TabsProps) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id || "");

  const handleChange = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  const activeTab = tabs.find(t => t.id === active);

  const baseTabStyle: React.CSSProperties = {
    padding: "10px 20px",
    border: "none",
    background: "transparent",
    color: "#71717a",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "inherit",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  const activeStyle: Record<string, React.CSSProperties> = {
    default: { color: "#6366f1", borderBottom: "2px solid #6366f1" },
    pills: { background: "#6366f1", color: "white", borderRadius: "8px" },
    underline: { color: "#e4e4e7", borderBottom: "2px solid #e4e4e7" },
  };

  const containerStyle: Record<string, React.CSSProperties> = {
    default: { display: "flex", borderBottom: "1px solid #2a2a3a", gap: "4px" },
    pills: { display: "flex", gap: "4px", background: "#14141e", padding: "4px", borderRadius: "12px" },
    underline: { display: "flex", gap: "4px" },
  };

  return (
    <div>
      <div style={containerStyle[variant]} role="tablist">
        {tabs.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={tab.id === active}
            disabled={tab.disabled}
            onClick={() => !tab.disabled && handleChange(tab.id)}
            style={{
              ...baseTabStyle,
              ...(tab.id === active ? activeStyle[variant] : {}),
              opacity: tab.disabled ? 0.4 : 1,
              cursor: tab.disabled ? "not-allowed" : "pointer",
            }}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" style={{ padding: "16px 0" }}>
        {activeTab?.content}
      </div>
    </div>
  );
}
