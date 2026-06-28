import React from "react";

export default function Sidebar({ sections, activeId, onSelect, mobileOpen }) {
  return (
    <aside
      data-testid="ega-sidebar"
      className={`ega-sidebar ${mobileOpen ? "open" : ""}`}
    >
      <div className="ega-brand">
        <div className="ega-brand-eyebrow">Premium Sunum</div>
        <h1 className="ega-brand-title">
          Ek Gelir <em>Akademi</em>
        </h1>
        <p className="ega-brand-sub">
          Pasif gelir yaratma sanatına dair 12 bölümlük interaktif çalışma.
        </p>
      </div>

      <nav className="ega-nav" aria-label="Bölümler">
        <div className="ega-nav-label">Bölümler</div>
        {sections.map((s, i) => (
          <button
            key={s.id}
            data-testid={`sidebar-item-${s.id}`}
            className={`ega-nav-item ${activeId === s.id ? "active" : ""}`}
            onClick={() => onSelect(s.id)}
          >
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <span className="label">{s.shortTitle}</span>
          </button>
        ))}
      </nav>

      <div className="ega-sidebar-foot">
        <span>Edisyon · 2026</span>
        <span className="dot" />
      </div>
    </aside>
  );
}
