import { useEffect, useMemo, useState } from "react";
import "@/App.css";
import { sections } from "@/content/sections";
import Sidebar from "@/components/Sidebar";
import SectionRenderer from "@/components/SectionRenderer";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

function App() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const activeIndex = useMemo(
    () => sections.findIndex((s) => s.id === activeId),
    [activeId]
  );
  const activeSection = sections[activeIndex];

  useEffect(() => {
    const el = document.getElementById("section-scroll");
    if (el) el.scrollTo({ top: 0, behavior: "smooth" });
    setProgress(((activeIndex + 1) / sections.length) * 100);
  }, [activeIndex]);

  const goPrev = () => {
    if (activeIndex > 0) setActiveId(sections[activeIndex - 1].id);
  };
  const goNext = () => {
    if (activeIndex < sections.length - 1)
      setActiveId(sections[activeIndex + 1].id);
  };

  return (
    <div className="ega-shell" data-testid="ega-app-shell">
      {/* Background ornaments */}
      <div className="ega-bg-grain" aria-hidden="true" />
      <div className="ega-bg-glow" aria-hidden="true" />

      {/* Top bar (mobile) */}
      <header className="ega-topbar">
        <button
          data-testid="mobile-menu-toggle"
          className="ega-icon-btn lg:hidden"
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Menüyü aç/kapat"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="ega-brand-mini">
          <span className="ega-brand-mark">EGA</span>
          <span className="ega-brand-name">Ek Gelir Akademi</span>
        </div>
        <div className="ega-progress-mini" aria-hidden="true">
          <div
            className="ega-progress-mini-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <div className="ega-layout">
        <Sidebar
          sections={sections}
          activeId={activeId}
          onSelect={(id) => {
            setActiveId(id);
            setMobileOpen(false);
          }}
          mobileOpen={mobileOpen}
        />

        <main className="ega-main">
          <div className="ega-progress-bar">
            <div
              className="ega-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div id="section-scroll" className="ega-scroll">
            <SectionRenderer section={activeSection} index={activeIndex} />

            <nav className="ega-pager" aria-label="Bölüm gezintisi">
              <button
                data-testid="pager-prev"
                className="ega-pager-btn"
                onClick={goPrev}
                disabled={activeIndex === 0}
              >
                <ChevronLeft size={16} />
                <span>
                  {activeIndex > 0
                    ? sections[activeIndex - 1].shortTitle
                    : "Başlangıç"}
                </span>
              </button>
              <div className="ega-pager-count">
                {String(activeIndex + 1).padStart(2, "0")}{" "}
                <span className="opacity-50">/</span>{" "}
                {String(sections.length).padStart(2, "0")}
              </div>
              <button
                data-testid="pager-next"
                className="ega-pager-btn ega-pager-next"
                onClick={goNext}
                disabled={activeIndex === sections.length - 1}
              >
                <span>
                  {activeIndex < sections.length - 1
                    ? sections[activeIndex + 1].shortTitle
                    : "Son bölüm"}
                </span>
                <ChevronRight size={16} />
              </button>
            </nav>

            <footer className="ega-footer">
              <div className="ega-foot-rule" />
              <p>
                <span className="ega-foot-mark">Ek Gelir Akademi</span>
                <span className="ega-foot-sep">·</span>
                Pasif Gelir Yaratma Premium Sunum Serisi
              </p>
              <p className="ega-foot-sub">
                Bu sunum, bilgilendirme amaçlıdır; finansal tavsiye niteliği
                taşımaz.
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
