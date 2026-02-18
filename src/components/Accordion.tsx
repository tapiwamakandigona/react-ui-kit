import React, { useState } from "react";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
}

export function Accordion({ items, allowMultiple = false, defaultOpen = [] }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(defaultOpen));

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #2a2a3a" }}>
      {items.map((item, i) => {
        const isOpen = openIds.has(item.id);
        return (
          <div key={item.id}>
            {i > 0 && <div style={{ height: "1px", background: "#2a2a3a" }} />}
            <button
              onClick={() => toggle(item.id)}
              style={{
                width: "100%",
                padding: "14px 20px",
                border: "none",
                background: isOpen ? "rgba(99,102,241,0.08)" : "transparent",
                color: "#e4e4e7",
                fontSize: "15px",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "inherit",
                textAlign: "left",
                transition: "background 0.2s",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {item.icon && <span>{item.icon}</span>}
                {item.title}
              </span>
              <span style={{
                transition: "transform 0.2s",
                transform: isOpen ? "rotate(180deg)" : "none",
                fontSize: "12px",
              }}>
                \u25BC
              </span>
            </button>
            <div style={{
              maxHeight: isOpen ? "500px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}>
              <div style={{ padding: "16px 20px", color: "#a0a0b0", fontSize: "14px", lineHeight: "1.6" }}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
