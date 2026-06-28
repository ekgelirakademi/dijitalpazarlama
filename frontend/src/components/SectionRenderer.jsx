import React from "react";
import {
  Heading,
  Paragraph,
  Callout,
  Stats,
  Cards,
  Steps,
  Table,
  ProsCons,
  Vaka,
  Takeaways,
  Divider,
} from "@/components/blocks";

const BLOCK_MAP = {
  heading: Heading,
  p: Paragraph,
  callout: Callout,
  stats: Stats,
  cards: Cards,
  steps: Steps,
  table: Table,
  proscons: ProsCons,
  vaka: Vaka,
  takeaways: Takeaways,
  divider: Divider,
};

function renderBlock(block, i) {
  if (block.type === "heading")
    return <Heading key={i}>{block.text}</Heading>;
  if (block.type === "p") return <Paragraph key={i}>{block.text}</Paragraph>;
  if (block.type === "callout")
    return (
      <Callout key={i} title={block.title}>
        {block.text}
      </Callout>
    );
  if (block.type === "stats") return <Stats key={i} items={block.items} />;
  if (block.type === "cards") return <Cards key={i} items={block.items} />;
  if (block.type === "steps") return <Steps key={i} items={block.items} />;
  if (block.type === "table")
    return <Table key={i} headers={block.headers} rows={block.rows} />;
  if (block.type === "proscons")
    return <ProsCons key={i} pros={block.pros} cons={block.cons} />;
  if (block.type === "vaka")
    return (
      <Vaka
        key={i}
        title={block.title}
        baglam={block.baglam}
        analiz={block.analiz}
        sonuc={block.sonuc}
      />
    );
  if (block.type === "takeaways")
    return <Takeaways key={i} items={block.items} />;
  if (block.type === "divider") return <Divider key={i} />;
  return null;
}

export default function SectionRenderer({ section, index }) {
  if (section.id === "intro") {
    return (
      <section
        className="ega-hero"
        data-testid={`section-${section.id}`}
      >
        <div className="ega-hero-mark">Ek Gelir Akademi · Premium Edisyon</div>
        <h1 className="ega-hero-title">
          Pasif Gelir <em>Yaratma Sanatı</em>
        </h1>
        <p className="ega-hero-sub">
          Uyurken para kazanma vaadi bir mit değil; ancak bir gecede oluşan bir
          mucize de değil. Doğru zihniyet, sağlam sistemler ve ölçeklenebilir
          varlıklarla inşa edilen, ömür boyu sürdürülebilir bir finansal
          özgürlük yolculuğudur. Bu sunum, sizi 12 bölümde tam donanımlı bir
          pasif gelir mimarına dönüştürmek için tasarlandı.
        </p>
        <div className="ega-hero-meta">
          <span>
            <strong>12</strong> Bölüm
          </span>
          <span>
            <strong>Premium</strong> Sunum Edisyonu
          </span>
          <span>
            <strong>2026</strong> Türkiye Sürümü
          </span>
        </div>
        <div className="ega-hero-rule" />
        <Heading>İçindekiler</Heading>
        <div className="ega-toc">
          {(section.toc || []).map((t, i) => (
            <div className="ega-toc-item" key={i}>
              <span className="ega-toc-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="ega-toc-label">{t}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="ega-section" data-testid={`section-${section.id}`}>
      <div className="ega-section-eyebrow">
        Bölüm {String(index).padStart(2, "0")} · Ek Gelir Akademi
      </div>
      <h2 className="ega-section-title">{section.titleNode}</h2>
      {section.lead && <p className="ega-section-lead">{section.lead}</p>}
      {section.blocks.map((b, i) => renderBlock(b, i))}
    </section>
  );
}
