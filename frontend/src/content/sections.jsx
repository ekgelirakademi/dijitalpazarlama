import React from "react";

const G = (t) => <em>{t}</em>; // gold accent helper

export const sections = [
  {
    id: "intro",
    shortTitle: "Açılış",
    toc: [
      "Pasif Gelir Zihniyeti ve Temel İlkeler",
      "Pasif Gelir Modellerine Genel Bakış",
      "Dijital Ürünlerle Pasif Gelir",
      "Bağlı Kuruluş Pazarlaması",
      "Yatırım Araçları ile Pasif Gelir",
      "Gayrimenkulden Düzenli Nakit Akışı",
      "Lisanslama ve Telif Hakları",
      "Yapay Zekâ Destekli Pasif Gelir (2026)",
      "Otomasyon ve Sistem Kurulumu",
      "Pasif Gelir Akışlarını Ölçeklendirme",
      "Risk Yönetimi ve Sürdürülebilirlik",
      "Uzun Vadeli Pasif Gelir Stratejisi",
    ],
  },

  /* 1 */
  {
    id: "zihniyet",
    shortTitle: "Zihniyet ve Temel İlkeler",
    titleNode: <>Pasif Gelir <em>Zihniyeti</em> ve Temel İlkeler</>,
    lead:
      "Pasif gelir, sihirli bir değnek değildir; disiplin, sabır ve doğru ilkelerle inşa edilen bir finansal özgürlük mimarisidir. Önce zihniyeti kurun; modeller doğal olarak yerine oturacaktır.",
    blocks: [
      { type: "heading", text: "Pasif Gelir Nedir? Aktif Gelirden Farkı" },
      {
        type: "p",
        text:
          "Pasif gelir, maddi katılımın sınırlı olduğu ya da hiç olmadığı faaliyetlerden doğan kazançtır. Aktif gelirde ise zamanı doğrudan parayla takas edersiniz. Aradaki ayrım sadece felsefi değil tekniktir: ABD Vergi Dairesi (IRS), bir faaliyete yılda 500 saatten fazla katılımı maddi katılım sayar ve bu eşiğin altındaki kazançları pasif olarak sınıflandırır.",
      },
      {
        type: "callout",
        title: "Çekirdek İlke",
        text:
          "Pasif gelir, çalışmasanız da akan bir nakit akışı yaratarak zamanınızı satmaktan kurtarır. Hedef birikim yapmak değil, sürekli nakit akışı üreten varlıklar inşa etmektir.",
      },
      { type: "heading", text: "Zihniyet Dönüşümü: Paranız Sizin İçin Çalışsın" },
      {
        type: "p",
        text:
          "Robert Kiyosaki'nin Nakit Akışı Çeyreği modeli bu dönüşümü resmeder: Çalışan (E) ve serbest meslek (S) tarafından, işletme sahibi (B) ve yatırımcı (I) tarafına geçmek. Tony Robbins ise becerikliliğin (resourcefulness), kaynaklardan daha kıymetli olduğunu söyler. Kendinizi sistem kuran biri olarak konumlandırın.",
      },
      { type: "heading", text: "Pasif Gelir Spektrumu" },
      {
        type: "table",
        headers: ["Özellik", "Tam Pasif", "Yarı Pasif / Ölçeklenebilir"],
        rows: [
          [
            "Tanım",
            "İlk kurulum sonrası neredeyse hiç müdahale gerektirmez",
            "Belirli düzeyde sürekli bakım veya pazarlama ister",
          ],
          [
            "Örnek",
            "Kitap telifleri, tahvil faizleri, temettü hisseleri (DRIP)",
            "Kiralık mülk yönetimi, bağlı kuruluş, çevrimiçi kurs",
          ],
          ["Çaba", "Minimum sürekli çaba", "Müşteri desteği, içerik tazeleme"],
          [
            "Zihin İpucu",
            "Gerçek anlamda \"uyurken kazanç\"",
            "Pasif değil, ölçeklenebilir gelir olarak düşünün",
          ],
        ],
      },
      { type: "heading", text: "Pasif Gelir Zihniyetini Hayata Geçirmek" },
      {
        type: "steps",
        items: [
          {
            title: "Finansal durumunuzu değerlendirin",
            body:
              "Varlık, borç ve nakit akışınızı gözden geçirerek hangi pasif gelir stratejisinin size uygun olduğunu belirleyin.",
          },
          {
            title: "Gerçekçi hedefler koyun",
            body:
              "Ek gelir mi, emeklilik birikimi mi, tam bağımsızlık mı? Kısa ve uzun vadeli kilometre taşlarına bölün.",
          },
          {
            title: "Başlangıç kaynaklarınızı belirleyin",
            body:
              "Zaman, para ve enerji ayırmanız gerekecek. Sessiz ortaklık gibi modeller daha az yönetim gerektirebilir.",
          },
          {
            title: "Araştırın ve kendinizi eğitin",
            body:
              "Başarılı örnekleri inceleyin, rehberler okuyun, uzmanlarla konuşun ve başarısızlık hikâyelerini ihmal etmeyin.",
          },
          {
            title: "Stratejinizi seçin ve çeşitlendirin",
            body:
              "Tek bir kaynağa bağlanmayın; yatırım, gayrimenkul, dijital ürün gibi farklı modelleri karşılaştırın.",
          },
          {
            title: "Sistemler ve otomasyon kurun",
            body:
              "E-posta otomasyonu, mülk yönetim yazılımı, otomatik yeniden yatırım planları (DRIP) gibi araçları devreye alın.",
          },
          {
            title: "Uzun vadeli düşünün",
            body:
              "Pasif gelir bir gecede oluşmaz; sabır ve sürekli öğrenme, en güçlü iki yapı taşıdır.",
          },
        ],
      },
      { type: "heading", text: "Rakamlarla Pasif Gelir" },
      {
        type: "stats",
        items: [
          { value: "%20", label: "Gelişmiş pazarlarda pasif gelir elde eden hanelerin oranı" },
          { value: "4.200 $", label: "ABD'de medyan yıllık pasif gelir" },
          { value: "%36", label: "Y kuşağında pasif gelire sahip olanların tahmini oranı" },
        ],
      },
      { type: "heading", text: "Vergisel Farkındalık" },
      {
        type: "p",
        text:
          "Kiyosaki'nin çerçevesinde üç gelir türü vardır: normal kazanılmış gelir (en yüksek vergi), portföy geliri (sermaye kazançları ve temettüler) ve pasif gelir (kira, telif, limited ortaklık kârı). Pasif gelir genellikle bordro vergilerine tabi değildir; bu, servet inşasında ciddi bir avantaj sağlar.",
      },
      {
        type: "takeaways",
        items: [
          "Pasif gelir, zamanı doğrudan parayla takas etmez; ölçeklenebilir varlıklar bu bağı koparır.",
          "Zihniyet dönüşümü, çalışan/serbest meslek sahibi konumundan işletme sahibi ve yatırımcı konumuna geçişi gerektirir.",
          "Pasif gelir bir spektrumdur; tam pasif ve yarı pasif akışları birlikte planlayın.",
          "Başlangıçta yoğun emek kaçınılmazdır; 'kolay para' yanılgısı en büyük tuzaktır.",
          "Çeşitlendirme ve sürekli öğrenme, sürdürülebilir pasif gelirin olmazsa olmazıdır.",
        ],
      },
    ],
  },

  /* 2 */
  {
    id: "modeller",
    shortTitle: "Modellere Genel Bakış",
    titleNode: <>Pasif Gelir <em>Modellerine</em> Genel Bakış</>,
    lead:
      "Dijital ürünlerden gayrimenkule, bağlı kuruluştan lisanslamaya altı temel model. Hedef bir katalog sunmak değil; size uyan modeli seçmek için bir çerçeve kazandırmak.",
    blocks: [
      { type: "heading", text: "Modellerin Ortak DNA'sı" },
      {
        type: "p",
        text:
          "Tüm modeller önce yoğun bir kurulum aşaması, ardından azalan müdahale ile gelen gelir akışı sunar. Hiçbiri 'sıfır emek' vaat etmez. Asıl soru şudur: kurulumdan sonra ne kadar sürekli bakım yapabilirim?",
      },
      {
        type: "cards",
        items: [
          {
            title: "Dijital Ürünler",
            body:
              "E-kitap, kurs, şablon, yazılım. Yüksek kâr marjı ve sınırsız ölçek; kurulum zaman ister, rekabet yoğundur.",
          },
          {
            title: "Bağlı Kuruluş Pazarlaması",
            body:
              "Başkasının ürününü tanıtıp komisyon kazanırsınız. Düşük başlangıç, ancak trafiğe ve güvene bağımlı.",
          },
          {
            title: "Yatırım Araçları",
            body:
              "Temettü hissesi, ETF, tahvil, kripto stake. En pasif modeldir; sermaye ve risk toleransı ister.",
          },
          {
            title: "Gayrimenkul",
            body:
              "Konut/ofis/depo kirası veya kitle fonlaması. Somut varlık, enflasyon koruması; yüksek sermaye.",
          },
          {
            title: "Lisanslama ve Telif",
            body:
              "Müzik, fotoğraf, patent, marka. Bir kez üret, yıllarca telif al; rekabet ve fikri mülkiyet koruması zor.",
          },
          {
            title: "Yapay Zekâ Destekli Akışlar",
            body:
              "Otomatik içerik, AI ajanları, dijital aboneliği. 2026'nın en hızlı büyüyen modeli; doğru niş ve sistem şart.",
          },
        ],
      },
      { type: "heading", text: "Size Uygun Modeli Seçmek" },
      {
        type: "steps",
        items: [
          {
            title: "İlgi alanınızı ve sürdürülebilir bir sektör seçin",
            body:
              "Uzun vadede ilginizi koruyacak ve trendlerden hızla etkilenmeyecek bir alanda derinleşin.",
          },
          {
            title: "Dijital mi, fiziksel mi?",
            body:
              "Dijital ürünler düşük sermaye, fiziksel ortam daha somut getiri sunar. Kendi mizacınızı tanıyın.",
          },
          {
            title: "Sektörden kişilerle görüşün",
            body:
              "Başarı kadar başarısızlık hikâyelerini de dinleyin; gerçekçi beklentiler oluşturun.",
          },
          {
            title: "Haftalık, aylık ve yıllık taslak plan yapın",
            body:
              "Kurulum aşamasının zaman çizelgesini çıkarın. İlk 3 ay, 6 ay ve 12 ay hedeflerinizi netleştirin.",
          },
          {
            title: "Risk toleransınızı ve bakım kapasitenizi ölçün",
            body:
              "Ne kadar sermaye kaybedebilirsiniz? Kurulumdan sonra haftada kaç saat ayırabilirsiniz?",
          },
        ],
      },
      {
        type: "vaka",
        title: "Ahmet'in Yol Ayrımı",
        baglam:
          "30 yaşında, tam zamanlı çalışan. Aylık 5.000 TL birikimi, yazma ve basit video düzenleme becerisi var. Haftada 10 saatini pasif gelir kurulumuna ayırabiliyor.",
        analiz:
          "Sınırlı sermaye, yatırım araçları ve gayrimenkulü eler. Yazma becerisi e-kitabı, video becerisi ise mini kursu mümkün kılar. Bağlı kuruluş daha yavaş başlar ve trafiğe bağımlıdır.",
        sonuc:
          "Ahmet, sağlıklı yaşam üzerine bir e-kitap yazıp e-posta otomasyonu kurar. 3 ayda ürün, 6. aydan itibaren düzenli pasif satış akışı.",
      },
      {
        type: "takeaways",
        items: [
          "Her model aktif bir kurulumla başlar; pasiflik derecesi sonradan farklılaşır.",
          "Dijital ürünler yüksek kâr marjı, yatırım araçları en yüksek pasiflik sunar.",
          "Bağlı kuruluş düşük maliyetli ama trafiğe bağımlı; gayrimenkul somut ama sermaye gerektirir.",
          "Doğru model; zamanınız, sermayeniz, ilgi alanınız ve risk toleransınızla örtüşen modeldir.",
        ],
      },
    ],
  },

  /* 3 */
  {
    id: "dijital",
    shortTitle: "Dijital Ürünler",
    titleNode: <>Dijital Ürünlerle <em>Pasif Gelir</em></>,
    lead:
      "Bir kez üret, sonsuz sat. E-öğrenme pazarının 2030'a kadar 840 milyar dolara, dijital ticaretin 2034'te 26 trilyon doları aşacağı bir çağdayız.",
    blocks: [
      { type: "heading", text: "Dijital Ürünü Pasif Gelire Dönüştüren Mekanik" },
      {
        type: "p",
        text:
          "Cevap basit: bir kez oluştur, tekrar tekrar sat. Ürünü ürettikten sonra 10 ya da 10.000 kopya satın, ek üretim maliyetiniz sıfırdır. Envanter yok, kargo yok, depo yok. Sipariş gözetimsiz şekilde anında teslim edilir.",
      },
      {
        type: "callout",
        title: "Kritik Ayrım",
        text:
          "Aktif gelirde çalışma süreniz azaldıkça geliriniz düşer. Dijital ürünlerde kurulum sonrası gelir, sizin aktif çalışma sürenizden bağımsızlaşır.",
      },
      {
        type: "table",
        headers: ["Özellik", "Dijital Ürün", "Fiziksel Ürün"],
        rows: [
          ["Envanter", "Yok; sınırsız kopya", "Depolama ve stok takibi zorunlu"],
          ["Kargo", "Anında dijital teslim", "Lojistik ve sevkiyat"],
          ["Kâr Marjı", "Yüksek", "Düşük-orta"],
          ["Ölçek", "Sınırsız", "Her ek ürün için maliyet"],
          ["Küresel Erişim", "Anında", "Gümrük ve bölgesel sınırlamalar"],
          ["Başlangıç Sermayesi", "Düşük; çoğunlukla zaman", "Yüksek"],
        ],
      },
      { type: "heading", text: "Dijital Ürün Oluşturmanın 5 Adımı" },
      {
        type: "steps",
        items: [
          { title: "Hedef kitleyi tanımla", body: "Somut bir problemi çözün; talep ve gereklilik buradan doğar." },
          { title: "Fikir beyin fırtınası", body: "Ücretsiz alternatiflere karşı değerinizi açıkça ortaya koyun." },
          { title: "Ürünü planla", body: "Ürün Merdiveni (Produkttreppe): ücretsiz, ana ürün, upsell, downsell." },
          { title: "Ürünü oluştur", body: "Yazılı, video, ses; interaktif quizlerle değeri artırın." },
          { title: "Satış ve pazarlama", body: "Eşsiz satış önerinizi (USP) net biçimde ifade edin." },
        ],
      },
      { type: "heading", text: "Nerede Satmalı?" },
      {
        type: "cards",
        items: [
          {
            title: "Kendi Mağazanız",
            body: "Shopify, ThriveCart, Gumroad. Tam kontrol ve yüksek marj; trafiği siz üretirsiniz.",
          },
          {
            title: "Niş Pazaryerleri",
            body: "Teachers Pay Teachers gibi. Hazır kitle avantajı; %50'ye varan komisyon.",
          },
          {
            title: "Sosyal Medya Mağazaları",
            body: "Instagram, TikTok Shop. Hızlı erişim; algoritma bağımlılığı yüksek.",
          },
        ],
      },
      {
        type: "proscons",
        pros: [
          "Düşük genel maliyetler: stok, kargo ve depolama yok",
          "Yüksek kâr marjları ve tekrar eden satış",
          "Otomasyonla 7/24 satış ve teslim",
          "Sınırsız ölçeklenebilirlik",
          "Anında küresel erişim",
        ],
        cons: [
          "Korsanlık riski ve dijital güvenlik ihtiyacı",
          "Kalabalık pazar ve fiyat baskısı",
          "Video/ses üretim ekipman maliyeti",
          "İçerik güncel kalmazsa satışlar düşer",
        ],
      },
      {
        type: "takeaways",
        items: [
          "Dijital ürün 'bir kez oluştur, sürekli sat' ilkesiyle zaman-para bağını koparır.",
          "Pasif gelir kolay değildir; asıl pasiflik, kurulum sonrası gelirin çalışma süresinden bağımsızlaşmasıdır.",
          "Platform stratejik bir karardır: kendi mağaza yüksek marj, pazaryeri hazır kitle sunar.",
          "Otomasyon (ödeme, teslimat, e-posta hunisi) dijital ürünü gerçek anlamda pasif yapan katmandır.",
        ],
      },
    ],
  },

  /* 4 */
  {
    id: "affiliate",
    shortTitle: "Bağlı Kuruluş Pazarlaması",
    titleNode: <>Bağlı <em>Kuruluş</em> Pazarlaması</>,
    lead:
      "Dijital ağızdan ağıza tavsiyenin ücretlendirilmiş hâli. Kendi ürününüz, stoğunuz, müşteri desteğiniz yok; sadece güvendiğiniz ürünleri özel takip linkleriyle paylaşırsınız.",
    blocks: [
      { type: "heading", text: "Sistem Nasıl Çalışır?" },
      {
        type: "p",
        text:
          "Sistem dört aktör etrafında döner: satış ortağı, satıcı, bağlı kuruluş ağı (Awin, CJ, ShareASale) ve müşteri. Tıklama sonrası tarayıcıya çerez yerleşir; çerez süresi içinde (24 saat–90 gün) yapılan satın alımlarda komisyon size aittir.",
      },
      { type: "heading", text: "Niş Seçimi: Gelirinizin Temel Taşı" },
      {
        type: "p",
        text:
          "Spesifiklik, otorite ve güven doğurur. 'Spor ayakkabıları' değil, 'yeni başlayanlar için yürüyüş ayakkabısı testleri'. Tekrarlayan komisyon potansiyeli (yazılım abonelikleri, kurs platformları), yüksek dönüşüm ve güvenilir takip-ödeme sistemi olan partnerler seçin.",
      },
      {
        type: "table",
        headers: ["Özellik", "Web Sitesi / Blog", "Sosyal Medya"],
        rows: [
          ["İçerik Sahipliği", "Tamamen size ait", "Platforma ait"],
          ["Algoritma Bağımlılığı", "Düşük", "Yüksek"],
          ["Pasiflik", "Evergreen içerik yıllarca çalışır", "Sürekli üretim gerekir"],
          ["Kitle Hızı", "Yavaş ama kalıcı", "Hızlı ama geçici"],
        ],
      },
      { type: "heading", text: "Güven Seviyeleri (Pat Flynn)" },
      {
        type: "cards",
        items: [
          {
            title: "İlişiksiz",
            body: "Ürünle bağı yok; en düşük dönüşüm. Yalnızca link yerleştirme.",
          },
          {
            title: "İlişkili",
            body: "Aynı nişte ama ürünü bizzat kullanmamış. Orta dönüşüm.",
          },
          {
            title: "Dahil Olan",
            body: "Test edip kullandığı ürünü önerir. En yüksek dönüşüm ve itibar.",
          },
        ],
      },
      { type: "heading", text: "Başlama Adımları" },
      {
        type: "steps",
        items: [
          { title: "Niş belirleme", body: "Spesifik ve tutkunuza yakın bir alt alan seçin." },
          { title: "Platform seçimi", body: "Blog uzun ömür, sosyal medya hız sunar; ideal olarak hibrit kullanın." },
          { title: "Partner programı seçimi", body: "2-3 uyumlu programla başlayın; komisyon, çerez süresi ve uyumu test edin." },
          { title: "Sorun çözen içerik", body: "Karşılaştırmalar, rehberler, kişisel deneyimler; salt reklam değil." },
          { title: "Link yerleştirme ve takip", body: "Dönüşüm verilerine göre stratejiyi optimize edin." },
          { title: "Sabır", body: "İlk 3-6 ay 'gözyaşı vadisi'dir; ardından hokey sopası etkisi devreye girer." },
        ],
      },
      {
        type: "stats",
        items: [
          { value: "12-13 Mlr $", label: "Bağlı kuruluş pazarının küresel büyüklüğü" },
          { value: "%50'ye kadar", label: "Dijital ürünlerde komisyon oranı" },
          { value: "24-90 gün", label: "Tipik çerez (atfetme) süresi" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Spesifik niş, güveni ve dönüşümü maksimize eder.",
          "Blog uzun vadeli pasiflik, sosyal medya hızlı kitle sunar; ikisini sinerjiyle kullanın.",
          "Güven katmanı arttıkça komisyon geliri katlanır.",
          "Sabır şarttır: ilk aylar emek, sonraki yıllar bileşik kazançtır.",
        ],
      },
    ],
  },

  /* 5 */
  {
    id: "yatirim",
    shortTitle: "Yatırım Araçları",
    titleNode: <>Yatırım Araçları ile <em>Pasif Gelir</em></>,
    lead:
      "Paranızın sizin için çalıştığı, en yüksek pasiflik düzeyine sahip model. Sermaye, sabır ve bileşik getiri üçgeniyle uzun vadede servet inşa eder.",
    blocks: [
      { type: "heading", text: "Başlıca Araçlar" },
      {
        type: "cards",
        items: [
          { title: "Temettü Hisseleri", body: "Düzenli kâr payı dağıtan şirketlerden hisse alarak nakit akışı kurun." },
          { title: "ETF'ler", body: "Çeşitlendirilmiş portföye düşük maliyetle erişim; özellikle endeks ve temettü ETF'leri." },
          { title: "Tahvil ve Bono", body: "Sabit gelir araçları; portföyün istikrar çıpası." },
          { title: "REIT'ler", body: "Gayrimenkul yatırım ortaklıkları; mülk yönetmeden kira ve değer artışı geliri." },
          { title: "P2P Borçlanma", body: "Eşler arası kredi platformları; yüksek getiri, yüksek temerrüt riski." },
          { title: "Kripto Stake/Validatör", body: "Blokzincir ödülleri; volatilite ve regülasyon riskini hesaplayın." },
        ],
      },
      { type: "heading", text: "Bileşik Getirinin Sessiz Gücü" },
      {
        type: "p",
        text:
          "Erken başlamak, daha çok yatırım yapmaktan değerlidir. 30 yıl boyunca ayda 250 $ yatıran biri, 20 yıl boyunca ayda 400 $ yatırandan daha az ana para koysa bile bileşik etki sayesinde daha yüksek bir bakiyeye ulaşır.",
      },
      {
        type: "callout",
        title: "72 Kuralı",
        text:
          "Yıllık enflasyon veya getiri oranını 72'ye bölün; sonuç yaşam maliyetinizin ya da paranızın kaç yılda ikiye katlanacağıdır.",
      },
      {
        type: "stats",
        items: [
          { value: "%7", label: "Uzun vadeli ortalama hisse senedi getirisi (USD bazlı)" },
          { value: "%2-4", label: "Tipik temettü verimi aralığı" },
          { value: "DRIP", label: "Otomatik yeniden yatırım planları bileşik etkiyi en yüksek seviyeye taşır" },
        ],
      },
      {
        type: "proscons",
        pros: [
          "En yüksek pasiflik düzeyi",
          "Bileşik etkiyle ölçeklenen büyüme",
          "Çeşitlendirme kolaylığı",
          "Diğer modellerden gelen kâr buraya yeniden yatırılabilir",
        ],
        cons: [
          "Yüksek başlangıç sermayesi gerekebilir",
          "Piyasa volatilitesi ve sermaye kaybı riski",
          "Vergi planlaması ihmal edilirse net getiri düşer",
          "Duygusal kararlar uzun vadeli getiriyi sabote eder",
        ],
      },
      {
        type: "takeaways",
        items: [
          "Yatırım araçları en pasif modeldir; sermaye koyduktan sonra müdahale minimumdur.",
          "Bileşik getiri uzun vadenin sessiz mucizesidir; erken başlamak en kıymetli üstünlüktür.",
          "Çeşitlendirme tek bir aracın çöküşünü tüm portföye yayılmaktan korur.",
          "Duygusal disiplin, teknik beceriden daha çok kazandırır.",
        ],
      },
    ],
  },

  /* 6 */
  {
    id: "gayrimenkul",
    shortTitle: "Gayrimenkul",
    titleNode: <>Gayrimenkulden <em>Düzenli Nakit Akışı</em></>,
    lead:
      "Somut varlığa dayanan klasik pasif gelir modeli. Doğrudan mülk sahipliği veya kitle fonlamasıyla farklı kapı aralıkları sunar.",
    blocks: [
      { type: "heading", text: "Üç Farklı Yaklaşım" },
      {
        type: "cards",
        items: [
          { title: "Uzun Süreli Kira", body: "Konut, ofis, depo. İstikrarlı aylık nakit akışı; mülk yönetimi ve yasal yükler." },
          { title: "Kısa Süreli Kira", body: "Airbnb modeli. Yüksek getiri potansiyeli, talep dalgalanması ve operasyon yükü." },
          { title: "Kitle Fonlaması & REIT", body: "Düşük tutarlarla mülk yönetmeden kira ve değer artışı geliri." },
        ],
      },
      { type: "heading", text: "Avantajlar ve Riskler" },
      {
        type: "proscons",
        pros: [
          "Somut varlık, enflasyona doğal koruma",
          "Düzenli nakit akışı + değer artışı",
          "Kredi kaldıracı ile sermaye verimliliği",
          "Birçok milyonerin servet kaynağı",
        ],
        cons: [
          "Yüksek başlangıç sermayesi ve işlem maliyetleri",
          "Bakım, tadilat ve kiracı yönetim yükü",
          "Boşluk dönemleri ve ödememe riski",
          "Düşük likidite; aniden nakde çevirmek zor",
        ],
      },
      { type: "heading", text: "Otomasyon ve Profesyonel Yönetim" },
      {
        type: "p",
        text:
          "Mülk yönetim yazılımları, dijital sözleşme platformları ve profesyonel mülk yöneticileri pasiflik düzeyini yukarı çeker. Ölçeklenme hedefi olan yatırımcılar için profesyonel yönetim, gece yarısı tesisat çağrılarından kurtarıp portföyü 20+ mülke kadar büyütmeye olanak verir.",
      },
      {
        type: "callout",
        title: "Pasiflik Notu",
        text:
          "Doğrudan mülk sahipliği orta seviye pasiftir; gerçek pasiflik için profesyonel yönetim veya REIT/kitle fonlaması tercih edilmelidir.",
      },
      {
        type: "takeaways",
        items: [
          "Gayrimenkul somut varlık avantajı ve enflasyon koruması sunar.",
          "Doğrudan sahiplik yüksek getiri; ancak bakım ve yasal yük gerektirir.",
          "REIT ve kitle fonlaması, düşük sermayeyle gerçek pasifliği mümkün kılar.",
          "Profesyonel yönetim, portföy ölçeklendirmenin anahtarıdır.",
        ],
      },
    ],
  },

  /* 7 */
  {
    id: "lisans",
    shortTitle: "Lisanslama ve Telif",
    titleNode: <>Lisanslama ve <em>Telif Hakları</em></>,
    lead:
      "Yaratıcılığınızı sınırsız sayıda satılabilen bir varlığa dönüştürün. Müzik, fotoğraf, yazılım, patent, marka — bir kez üretilen değer yıllarca telif üretebilir.",
    blocks: [
      { type: "heading", text: "Telif Kazandıran Varlık Türleri" },
      {
        type: "cards",
        items: [
          { title: "Müzik & Ses", body: "Spotify telifleri, sync lisansları, stock müzik platformları (Epidemic Sound, Artlist)." },
          { title: "Fotoğraf & Video", body: "Shutterstock, Adobe Stock, Pond5; teaching portföyleri için Skillshare telifleri." },
          { title: "Yazılım & Eklenti", body: "WordPress eklentileri, Shopify uygulamaları, API üzerinden lisanslama." },
          { title: "Patent & Marka", body: "Lisans anlaşmalarıyla üreticilere kullanım hakkı; pasif royalty geliri." },
          { title: "Yazılı İçerik & Kurs", body: "Kitap telifleri, kurs lisansları, MOOC platformlarına içerik üretimi." },
          { title: "Karakter & IP", body: "Karakter lisansları, oyun/animasyon stüdyolarıyla işbirliği." },
        ],
      },
      { type: "heading", text: "Telif Sisteminin İşleyişi" },
      {
        type: "p",
        text:
          "Bir esere lisans verirken kullanım hakkı, coğrafi alan, süre ve münhasırlık koşulları belirlersiniz. Her kullanım veya satış başına telif (royalty) yüzdesi kazanırsınız. Marka tescili, patent ve eser tescili olmadan bu modeli sürdürmek hukuken kırılgandır.",
      },
      {
        type: "proscons",
        pros: [
          "Bir kez üretilen içerik yıllarca gelir getirir",
          "Yüksek ölçeklenebilirlik",
          "Çoklu platforma aynı eserle erişim",
          "Marka/IP değeri zaman içinde artabilir",
        ],
        cons: [
          "Stok platformlarında yoğun rekabet",
          "Fikri mülkiyet ihlali ve korsanlık riski",
          "Yasal süreçler ve tescil maliyeti",
          "Kalite çıtası sürekli yükselir",
        ],
      },
      {
        type: "takeaways",
        items: [
          "Yaratıcı bir varlık, doğru lisans yapısıyla ömür boyu telif üretebilir.",
          "Hukuki koruma (tescil, sözleşme) modelin sürdürülebilirliğinin temelidir.",
          "Tek esere değil; bir IP portföyüne odaklanmak ölçeği büyütür.",
        ],
      },
    ],
  },

  /* 8 */
  {
    id: "ai",
    shortTitle: "Yapay Zekâ Destekli Akışlar",
    titleNode: <>Yapay Zekâ Destekli <em>Pasif Gelir</em></>,
    lead:
      "2026'nın en hızlı büyüyen alanı. Doğru kullanıldığında yapay zekâ, içerik üretiminden satış hunisine kadar tüm pasif gelir akışlarınızı turbo'lar.",
    blocks: [
      { type: "heading", text: "Yapay Zekâ ile Açılan Yeni Kapılar" },
      {
        type: "cards",
        items: [
          { title: "AI Destekli İçerik Markaları", body: "Tematik niş siteler, YouTube otomasyonu, e-posta bültenleri; LLM + insan editör hibridi." },
          { title: "Promp/Şablon Pazarı", body: "Hazır prompt setleri, GPTs ve AI ajan şablonlarının lisanslı satışı." },
          { title: "AI Aboneliği (Micro SaaS)", body: "Tek bir niş problemi çözen GPT-tabanlı dar kapsamlı abonelik ürünleri." },
          { title: "Otomatik Pazarlama Ajanı", body: "Sosyal medya, reklam ve e-posta optimizasyonu yapan AI ajan akışları." },
          { title: "Veri Ürünleri & Dashboard", body: "AI ile zenginleştirilmiş özet raporlar; abonelik tabanlı satış." },
          { title: "Stok Görsel & Ses (Generatif)", body: "Telif uyumlu üretken görsel ve ses kütüphaneleri; lisanslı satış." },
        ],
      },
      { type: "heading", text: "Sürdürülebilir AI Pasif Geliri İçin İlkeler" },
      {
        type: "steps",
        items: [
          { title: "Dar bir niş seçin", body: "AI ile genel içerik üretmek değer üretmez; spesifik bir kitlenin çözülmemiş problemini hedefleyin." },
          { title: "İnsan dokunuşunu koruyun", body: "Salt AI çıktısı algoritmalar ve okuyucular tarafından hızla cezalandırılır; orijinal bakış açısı ekleyin." },
          { title: "Otomasyon zinciri kurun", body: "n8n, Zapier, Make ile içerik üretimi → düzenleme → yayın → e-posta hunisi zincirini birbirine bağlayın." },
          { title: "Veri ve geri bildirimle iyileştirin", body: "Hangi prompt, hangi format, hangi kanal kazandırıyor — sürekli A/B test edin." },
          { title: "Telif ve etik sınırları gözetin", body: "Kullandığınız eğitim verilerini ve görsel kaynaklarını lisanslı tutun; markanızın itibarını koruyun." },
        ],
      },
      {
        type: "callout",
        title: "2026 Gerçeği",
        text:
          "Yapay zekâ destekli işletmeler, geleneksel operasyonlara göre yaklaşık 3,4 kat daha hızlı ölçek ekonomisi üretiyor. Ancak 'AI = sıfır emek' yanılgısı, en hızlı düşüşe yol açan inanç hâlinde.",
      },
      {
        type: "takeaways",
        items: [
          "AI bir gelir modeli değil, mevcut modelleri çarpan etkisiyle büyüten bir katmandır.",
          "Niş + insan editör + otomasyon zinciri, sürdürülebilir AI pasif gelirinin üç ayağıdır.",
          "Telif ve etik riskleri başlangıçta yönetin; sonrasında telafisi pahalıdır.",
        ],
      },
    ],
  },

  /* 9 */
  {
    id: "otomasyon",
    shortTitle: "Otomasyon ve Sistemler",
    titleNode: <>Otomasyon ve <em>Sistem Kurulumu</em></>,
    lead:
      "Pasif geliri 'pasif' yapan unsur otomasyondur. Tekrarlayan görevleri yazılıma devrettiğinizde, gelir akışı sizden bağımsızlaşır.",
    blocks: [
      { type: "heading", text: "Otomasyonun Stratejik Konumu" },
      {
        type: "p",
        text:
          "Otomasyon katmanı; ürün ile müşteri arasındaki ödeme, faturalandırma, destek, içerik yayını ve lojistik gibi tüm tekrarlayan süreçleri yönetir. Geleneksel işletmelerde büyüme çalışan eklemekken, otomasyon bunu yazılım katmanına devreder.",
      },
      { type: "heading", text: "Adım Adım Otomasyon Kurulumu" },
      {
        type: "steps",
        items: [
          { title: "Tekrarlayan görevleri belirleyin", body: "E-posta yanıtlama, sosyal medya, fatura kesme, sipariş takibi gibi süreçleri listeleyin." },
          { title: "Doğru araçları seçin", body: "E-posta için Mailchimp/ActiveCampaign, sosyal medya için Buffer, AI ajanı için n8n/Make, ödeme için Stripe." },
          { title: "Test edin ve optimize edin", body: "Küçük ölçekte devreye alın, A/B testleriyle iyileştirin; otomasyon statik değildir." },
        ],
      },
      { type: "heading", text: "Temel Araçlar ve İşlevler" },
      {
        type: "table",
        headers: ["İşlev", "Önerilen Araçlar", "Öne Çıkan Özellik"],
        rows: [
          ["E-posta Pazarlama", "Mailchimp, ActiveCampaign, ConvertKit", "Sekanslar, segmentasyon, A/B testi"],
          ["Sosyal Medya", "Buffer, Hootsuite, Later", "Önceden zamanlama, çoklu platform"],
          ["Müşteri Destek", "ManyChat, Intercom, AI ajanları", "7/24 yanıt, kural + AI destekli"],
          ["Ödeme & Checkout", "Stripe, PayPal, Iyzico", "Anında tahsilat, dijital ürün teslimatı"],
          ["Kurs Teslimi", "Teachable, Kajabi, Gumroad", "Otomatik kayıt, erişim ve hatırlatma"],
          ["Akış Otomasyonu", "n8n, Make, Zapier", "Servisler arası akıllı zincirleme"],
        ],
      },
      {
        type: "callout",
        title: "Sınır",
        text:
          "Otomasyon 'kur ve unut' değildir; 'kur ve asgari müdahaleyle yönet'tir. Düzenli izleme, içerik tazeleme ve hata bildirim sistemleri olmadan sistemler sessizce çürür.",
      },
      {
        type: "takeaways",
        items: [
          "Otomasyon, tekrarlayan görevleri yazılıma devrederek gerçek pasifliği sağlar.",
          "3 adımlık kurulum: tekrarı tespit et, doğru aracı seç, test edip optimize et.",
          "İzleme ve bakım olmadan otomasyon zamanla bozulur; minimum müdahale stratejisi şart.",
        ],
      },
    ],
  },

  /* 10 */
  {
    id: "olcek",
    shortTitle: "Ölçeklendirme",
    titleNode: <>Pasif Gelir Akışlarını <em>Ölçeklendirme</em></>,
    lead:
      "Sistemi kurdunuz, otomatikleştirdiniz. Şimdi soru şu: 2x, 5x, 10x büyütmeyi nasıl başaracaksınız? Cevap, sermaye değil sistem mimarisidir.",
    blocks: [
      { type: "heading", text: "Yeniden Yatırım: Bileşik Büyümenin Motoru" },
      {
        type: "p",
        text:
          "Ölçeklendirmenin en temel mekaniği, kazancı harcamak yerine yeni gelir üreten varlıklara yönlendirmektir. Kira gelirleriyle yeni mülk almak, temettüyle yeni hisse, dijital ürün kârıyla yeni ürün üretmek — her döngüde varlık tabanınız ve geliriniz büyür.",
      },
      {
        type: "vaka",
        title: "Paige Brunton'un SLO Stratejisi",
        baglam:
          "Saatlik gelirin tavanına ulaşan bir web tasarım girişimcisi. Daha fazla saat çalışmadan büyümek için pasif akış eklemek zorunda.",
        analiz:
          "35 dolarlık düşük fiyatlı bir dijital rehber oluşturdu (Self-Liquidating Offer). Bu ürün doğrudan 3.500 $ getirdi; ama asıl değeri, e-posta listesine nitelikli alıcılar eklemesiydi.",
        sonuc:
          "Yüksek biletli kursların satışı tetiklendi; toplamda 15.000 $ ek gelir. Düşük biletli giriş ürünü, yüksek biletli teklifin yolunu açan ölçeklenme merdivenine dönüştü.",
      },
      { type: "heading", text: "Ölçeklendirme Stratejileri" },
      {
        type: "table",
        headers: ["Strateji", "Nasıl Çalışır", "Örnek"],
        rows: [
          ["Yeniden Yatırım", "Kazancı yeni varlıklara yönlendirip bileşik büyüme", "Temettüyle yeni hisse, kirayla yeni mülk"],
          ["Ürün Yelpazesi", "Mevcut kitleye tamamlayıcı ürünler", "E-kitap → kurs → mentorluk paketi"],
          ["Kitle Büyütme", "Zamansız SEO ve e-posta listesi", "Evergreen blog yazıları + bülten"],
          ["Platform Sinerjisi", "Tek içeriği çok kanala dönüştürmek", "Podcast → blog → kısa video"],
          ["Otomasyon & AI", "Tekrarlayan süreçleri yazılıma devretmek", "AI içerik + Zapier yayın zinciri"],
          ["Yinelenen Gelir", "Abonelik/üyelik modelleri", "Aylık üyelik kütüphanesi"],
          ["Sistemleştirme", "İşletmeyi sahibinden bağımsız hâle getirmek", "Profesyonel mülk yönetimi, franchise"],
        ],
      },
      { type: "heading", text: "Ölçeklendirme Planınız: 5 Adım" },
      {
        type: "steps",
        items: [
          { title: "Mevcut akışları analiz edin", body: "Her akışın aylık geliri, büyüme oranı, zaman maliyeti ve ölçek potansiyelini ölçün." },
          { title: "Yeniden yatırım hedefi belirleyin", body: "Hangi akıştan ne kadar yüzde büyümeye ayrılacak — net karar verin." },
          { title: "Tamamlayıcı ürün ekleyin", body: "Düşük biletli giriş (SLO) ve abonelik modeli ile yelpazeyi katmanlandırın." },
          { title: "Kitle ve trafik stratejisi", body: "SEO uyumlu evergreen içerik + e-posta listesi: algoritmadan bağımsız sahipli varlık." },
          { title: "Sistemleştirme ve otomasyon", body: "Süreçleri belgeleyin, gerekirse ekip kurun veya profesyonel hizmet alın." },
        ],
      },
      {
        type: "stats",
        items: [
          { value: "3,4x", label: "AI destekli işletmelerin ölçek ekonomisi avantajı" },
          { value: "%73", label: "Stratejik dış kaynak kullanımıyla gelir büyüme artışı" },
          { value: "20+ kira", label: "Profesyonel mülk yönetimiyle ulaşılabilen portföy" },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Yeniden yatırım, ölçeklendirmenin bileşik motorudur.",
          "Düşük biletli giriş ürünleri (SLO) yüksek biletli tekliflerin yolunu açar.",
          "Evergreen içerik ve e-posta listesi, algoritmalardan bağımsız sahipli varlıklardır.",
          "Çeşitlendirme + sistemleştirme, gerçek ölçeklenmeyi mümkün kılar.",
        ],
      },
    ],
  },

  /* 11 */
  {
    id: "risk",
    shortTitle: "Risk ve Sürdürülebilirlik",
    titleNode: <>Risk Yönetimi ve <em>Sürdürülebilirlik</em></>,
    lead:
      "Çoğu girişimci getirinin peşinde koşarken sistemin kırılganlığını ihmal eder. Oysa uzun vadede kazanan, hızla değil 'hayatta kalarak' kazanır.",
    blocks: [
      { type: "heading", text: "İki Temel Kavram" },
      {
        type: "p",
        text:
          "Risk yönetimi, gelir akışlarınızı tehdit eden finansal, operasyonel ve yasal riskleri tanımlama-ölçme-minimize etme sürecidir. Sürdürülebilirlik ise akışların on yıllar boyunca, değişen piyasa koşullarında ve regülasyon dalgalarında gelir üretmeye devam etme kapasitesidir.",
      },
      { type: "heading", text: "Çeşitlendirme: Risk Yönetiminin Temel Taşı" },
      {
        type: "p",
        text:
          "Tek bir akışa bağımlılık, en pahalı stratejidir. Her bir akışın payını %20-25 ile sınırlamak ve çekirdek-uydu (core-satellite) bir yapı kurmak portföy düşüşlerini %30-50 azaltır.",
      },
      {
        type: "callout",
        title: "Core-Satellite Yaklaşım",
        text:
          "Portföyün %60-70'i istikrarlı çekirdek (temettü ETF, REIT, blue-chip), %30-40'ı dinamik uydu (dijital ürün, bağlı kuruluş, yüksek getirili nakit) olarak yapılandırılır.",
      },
      { type: "heading", text: "Nakit Tamponu: Emniyet Kemeri" },
      {
        type: "p",
        text:
          "Beklenmedik olaylar (hastalık, kriz, platform değişikliği) için 6-12 aylık yaşam giderlerini karşılayacak likit bir fon zorunludur. Bu fon, varlıklarınızı zararına satmak zorunda kalmamanızı sağlar.",
      },
      { type: "heading", text: "Stres Testi ve İzleme Takvimi" },
      {
        type: "steps",
        items: [
          { title: "Aylık kontroller", body: "Her akışın performansı, nakit tampon seviyesi, olağandışı sapmalar." },
          { title: "Üç aylık yeniden dengeleme", body: "Hedef ağırlıklardan %5'ten fazla sapan kalemleri rebalance edin; stres senaryoları uygulayın." },
          { title: "6-12 aylık değerlendirme", body: "Acil durum fonu yeterliliği, yeni akış ekleme veya mevcudu ölçeklendirme kararı." },
        ],
      },
      { type: "heading", text: "Yasal Koruma ve Sigorta Kalkanı" },
      {
        type: "p",
        text:
          "Net sözleşmeler, kira kaybı sigortası, mesleki sorumluluk sigortası, marka/patent tescilleri — krizde en güçlü kalkanınızdır. Dijital ürün ve yazılım gelirlerinde lisans şartlarını ve fikri mülkiyet hükümlerini ihmal etmeyin.",
      },
      {
        type: "takeaways",
        items: [
          "Risk yönetimi kısa-orta vadeli tehditleri, sürdürülebilirlik uzun vadeli yapısal dayanıklılığı sağlar.",
          "Çeşitlendirme ile her akış %20-25 ile sınırlanarak risk dağıtılır.",
          "6-12 aylık nakit tamponu olmayan sistem, ilk kriz dalgasında zarara satmaya mahkûmdur.",
          "Otomasyon, duygusal hatalara karşı kalkandır; ancak izleme olmadan çürür.",
          "Yasal sözleşmeler ve sigorta, sessiz ama en güçlü yatırımlardır.",
        ],
      },
    ],
  },

  /* 12 */
  {
    id: "uzunvade",
    shortTitle: "Uzun Vadeli Strateji",
    titleNode: <>Uzun Vadeli <em>Pasif Gelir Stratejisi</em></>,
    lead:
      "Tüm akışları portföy olarak yönetmek, emeklilik planlamasıyla bütünleştirmek ve miras bırakılabilir sistemler kurmak — ömür boyu finansal özgürlüğün son halkası.",
    blocks: [
      { type: "heading", text: "Portföy Yaklaşımı" },
      {
        type: "p",
        text:
          "Tüm pasif gelir kaynaklarınızı tek bir portföy çatısı altında toplayın ve çeşitlendirme yoluyla riski dağıtın. Gayrimenkul, hisse senedi, tahvil, dijital ürünler ve telif hakları gibi farklı varlık sınıflarını bir arada tutmak, bir alandaki düşüşü diğerleriyle dengeler.",
      },
      { type: "heading", text: "İki Temel Metrik" },
      {
        type: "cards",
        items: [
          {
            title: "Gelir İstikrarı",
            body:
              "Bir kaynağın zaman içinde ne kadar güvenilir ve düzenli ödeme sağladığı. Emeklilikte düzenli nakit akışı hayati önem taşır.",
          },
          {
            title: "Riske Göre Ayarlanmış Getiri",
            body:
              "Üstlendiğiniz risk seviyesine kıyasla elde ettiğiniz getirinin tatmin ediciliği. Yüksek getiri her zaman daha iyi değildir.",
          },
        ],
      },
      {
        type: "table",
        headers: ["Kaynak", "Gelir İstikrarı", "Riske Göre Getiri"],
        rows: [
          ["Temettü Hisseleri", "Orta", "Orta-Yüksek"],
          ["Tahviller", "Yüksek", "Düşük-Orta"],
          ["Kısa Süreli Kiralama", "Düşük", "Yüksek"],
          ["Dijital Ürün Telifleri", "Orta", "Yüksek"],
          ["REIT", "Yüksek", "Orta"],
        ],
      },
      { type: "heading", text: "Vergi Verimliliği ve Likidite" },
      {
        type: "p",
        text:
          "Net getiri, vergi sonrası getiridir. Bireysel emeklilik (BES), Roth IRA, vergi avantajlı tasarruf hesapları gibi araçların stratejik kullanımı uzun vadede ciddi fark yaratır. Likidite ise kriz anında zararına satmamanızı sağlar; portföyün bir kısmı her zaman likit olmalıdır.",
      },
      { type: "heading", text: "Emekliliğe Entegrasyon: Erken Başlamanın Gücü" },
      {
        type: "callout",
        title: "Andy & Bob Örneği",
        text:
          "Andy 30 yıl boyunca aylık 250 $ yatırdı (toplam 90.000 $). Bob 20 yıl boyunca aylık 400 $ yatırdı (toplam 96.000 $). Her ikisi de aynı %4 yıllık getiriyi elde etti. Andy'nin son bakiyesi belirgin biçimde daha yüksek. Erken başlamak, çok yatırmaktan değerlidir.",
      },
      { type: "heading", text: "Miras Bırakılabilir Sistemler" },
      {
        type: "p",
        text:
          "Pasif gelir sisteminizin yalnızca sizin yaşamınızı değil, sonraki nesilleri de beslemesi için dijital cüzdanlar, erişim anahtarları, lisans sözleşmeleri ve telif hakları belgelenmeli; vasiyetname veya trust yapılarıyla yasal çerçeveye oturtulmalıdır.",
      },
      { type: "heading", text: "6 Adımlı Yol Haritası" },
      {
        type: "steps",
        items: [
          { title: "Mevcut finansal durumu gözden geçirin", body: "Emeklilikteki yaşam tarzının maliyetini, enflasyon beklentisini ve mevcut birikimleri değerlendirin." },
          { title: "Akışları çeşitlendirin", body: "En az 2-3 farklı türde akış kurun: temettü, kira, dijital ürün, AI destekli akış." },
          { title: "Vergi etkilerini değerlendirin", body: "Vergi avantajlı hesapları stratejik kullanın; net getiri planlamanın temelidir." },
          { title: "Likit nakit tamponu bulundurun", body: "Düşük likiditeli varlıkların yanında hızlı erişilebilir nakit benzeri araçlar tutun." },
          { title: "Miras planlamasını yapın", body: "Tüm varlıklar belgelensin; erişim anahtarları, dijital cüzdanlar, vasiyetname/trust yapıları kurulsun." },
          { title: "Stratejiyi düzenli olarak gözden geçirin", body: "Piyasa koşulları, regülasyonlar ve kişisel öncelikler değiştikçe dağılımı güncelleyin." },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Akışlarınızı tek bir portföy olarak yönetmek riski dağıtır ve istikrarı artırır.",
          "Gelir istikrarı ve riske göre getiri, akışları değerlendirmek için iki temel metriktir.",
          "Vergi verimliliği ve likidite, net getiriyi ve esnekliği aynı anda korur.",
          "Erken başlamak, sonradan büyük tutarlar yatırmaktan değerlidir.",
          "Miras planlaması, pasif gelir sisteminin nesiller boyu sürdürülebilirliğinin teminatıdır.",
        ],
      },
    ],
  },
];
