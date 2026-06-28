import React from "react";

export const Heading = ({ children }) => (
  <h3 className="ega-h3">
    <span className="ega-h3-bar" />
    {children}
  </h3>
);

export const Paragraph = ({ children }) => <p className="ega-p">{children}</p>;

export const Callout = ({ title, children }) => (
  <div className="ega-callout">
    {title && <div className="ega-callout-title">{title}</div>}
    <div className="ega-callout-body">{children}</div>
  </div>
);

export const Stats = ({ items }) => (
  <div className="ega-stats">
    {items.map((it, i) => (
      <div className="ega-stat" key={i}>
        <div className="ega-stat-value">{it.value}</div>
        <div className="ega-stat-label">{it.label}</div>
      </div>
    ))}
  </div>
);

export const Cards = ({ items }) => (
  <div className="ega-cards">
    {items.map((c, i) => (
      <div className="ega-card" key={i}>
        <div className="ega-card-head">
          <span className="ega-card-num">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="ega-card-title">{c.title}</span>
        </div>
        <div className="ega-card-body">{c.body}</div>
      </div>
    ))}
  </div>
);

export const Steps = ({ items }) => (
  <div className="ega-steps">
    {items.map((s, i) => (
      <div className="ega-step" key={i}>
        <div className="ega-step-num">{String(i + 1).padStart(2, "0")}</div>
        <div>
          <div className="ega-step-title">{s.title}</div>
          <div className="ega-step-body">{s.body}</div>
        </div>
      </div>
    ))}
  </div>
);

export const Table = ({ headers, rows }) => {
  const cols = headers.length;
  const grid = { gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` };
  return (
    <div className="ega-table">
      <div className="ega-table-row ega-table-head" style={grid}>
        {headers.map((h, i) => (
          <div key={i}>{h}</div>
        ))}
      </div>
      {rows.map((row, ri) => (
        <div className="ega-table-row" style={grid} key={ri}>
          {row.map((cell, ci) => (
            <div key={ci}>{cell}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const ProsCons = ({ pros, cons }) => (
  <div className="ega-prosncons">
    <div className="ega-pc">
      <div className="ega-pc-title">Avantajlar</div>
      <ul>
        {pros.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
    <div className="ega-pc con">
      <div className="ega-pc-title">Riskler</div>
      <ul>
        {cons.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  </div>
);

export const Vaka = ({ title, baglam, analiz, sonuc }) => (
  <div className="ega-vaka">
    <div className="ega-vaka-label">Örnek Vaka</div>
    <div className="ega-vaka-title">{title}</div>
    <div className="ega-vaka-grid">
      <div className="ega-vaka-col">
        <h5>Bağlam</h5>
        <p>{baglam}</p>
      </div>
      <div className="ega-vaka-col">
        <h5>Analiz</h5>
        <p>{analiz}</p>
      </div>
      <div className="ega-vaka-col">
        <h5>Sonuç</h5>
        <p>{sonuc}</p>
      </div>
    </div>
  </div>
);

export const Takeaways = ({ items }) => (
  <div className="ega-takeaways">
    <h4>
      <span className="ega-h3-bar" />
      Temel Çıkarımlar
    </h4>
    <ol>
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ol>
  </div>
);

export const Divider = () => <div className="ega-divider" />;
