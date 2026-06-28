# Ek Gelir Akademi — Premium Pasif Gelir Sunum Sayfası

## Original Problem Statement
> "pasif gelir yöntemlerini anlatan bu belgedeki bilgileri editle gerekli eklemeleri ve çıkarmaları yap, Ek Gelir Akademi markası altında premium bir sunum haline getir renk şablonu siyah-altın renkleri ağırlıklı olsun. profesyonel ve sunuma hazır bir web sayfası olarak hazırla."

## User Choices (2026-01)
- Sayfa tipi: **Çok bölümlü interaktif sunum** (sol sidebar menüden gezilen)
- İçerik kapsamı: **En güncel şekilde editle** (eskimiş kısımlar çıkarıldı, 2026 odaklı yenilendi)
- Etkileşim: **Sadece statik premium sunum**
- CTA: **Yönlendirme yok** (e-posta toplama / akademiye katıl yok)
- Dil: **Tamamen Türkçe**

## Tech Stack
- React 19 + CRA (craco) — backend kullanılmadı, tamamen statik sunum sayfası
- Tailwind + custom CSS (siyah-altın premium tema)
- Tipografi: Fraunces (serif) + Manrope + JetBrains Mono

## Architecture
- `src/App.js` — shell + sidebar/main layout + pager
- `src/components/Sidebar.jsx` — bölüm navigasyonu
- `src/components/SectionRenderer.jsx` — hero ve bölüm render kontrol
- `src/components/blocks.jsx` — Heading/Paragraph/Callout/Stats/Cards/Steps/Table/ProsCons/Vaka/Takeaways
- `src/content/sections.jsx` — 12 bölümlük tam içerik + intro/TOC

## What's Implemented (2026-01-XX)
- 13 ekran (Açılış + 12 bölüm): Zihniyet, Modeller, Dijital Ürünler, Bağlı Kuruluş, Yatırım, Gayrimenkul, Lisanslama/Telif, **Yapay Zekâ Destekli Akışlar (2026 ekleme)**, Otomasyon, Ölçeklendirme, Risk/Sürdürülebilirlik, Uzun Vade
- Siyah-altın premium tema (CSS değişkenleri, grain + radial glow background)
- Sidebar navigasyon, üst progress bar, alt pager (önceki/sonraki + sayaç)
- Mobil responsive: topbar + drawer sidebar
- Yumuşak section-in animasyonu, hover micro-interaction'lar
- Tam Türkçe içerik, finansal/hukuki "tavsiye değildir" notu footer'da

## Future / Backlog
- P1: Klavye okları ile bölüm gezintisi (← →)
- P2: PDF export / yazdırılabilir görünüm
- P2: Bölüm içi anchor başlıklarına bağlantı
- P2: Dark/Light tercih anahtarı (şu an sadece dark)

## Next Action Items
- Kullanıcı geri bildirimine göre içerik genişletme/ince ayar
- İsterse bölüm görselleri veya ikon seti eklenebilir
