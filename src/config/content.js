/** Sayfa metinleri (Türkçe). Bileşenlere dokunmadan buradan düzenleyin. */
export const content = {
  nav: {
    products: 'Ürünler',
    story: 'Hikâyemiz',
    process: 'Üretim',
    contact: 'İletişim',
    cta: 'Sipariş Talebi',
  },

  hero: {
    titleLines: ['Her gün sıfırdan,', 'her sabah taze.'],
    lead: "FIRIN NO. 8'de hamurlar bir gün önceden hazırlanır, sabah erkenden fırına verilir. Ekmek, kruvasan, pasta ve kurabiyeler pişer pişmez tezgâha çıkar.",
    primaryCta: 'Ürünleri Keşfet',
    secondaryCta: 'Sipariş Talebi',
    caption: 'Tereyağlı kruvasan',
  },

  featured: {
    title: 'Bu haftanın seçkisi',
    intro: 'Fırından bu hafta öne çıkan beş ürün.',
    allCta: 'Tüm ürünleri gör',
  },

  catalog: {
    title: 'Ürünler',
    intro: 'Kategoriye göre süzün, bir ürüne dokunup ayrıntılarını görün.',
    all: 'Tümü',
    filterLabel: 'Ürün kategorileri',
    count: (n) => `${n} ürün`,
    emptyTitle: 'Bu kategoride şu an ürün yok.',
    emptyText: 'Başka bir kategoriye göz atabilirsiniz.',
    emptyAction: 'Tüm ürünleri göster',
    note: 'Fiyatlar ve ürün bilgileri demo amaçlıdır.',
    open: 'Ayrıntıları gör',
  },

  process: {
    title: 'Üretim',
    intro: 'Bir günün akışı: hamurdan tezgâha.',
    steps: [
      { time: 'Akşam', title: 'Malzeme tartılır', text: 'Ertesi günün üretimi için un, tereyağı ve diğer malzemeler tartılır, hamurlar yoğrulur.' },
      { time: 'Gece', title: 'Hamur dinlenir', text: 'Hamurlar serin ortamda uzun süre mayalanır. Bu aşama acele edilmeyen, zamana bırakılan bir iştir.' },
      { time: 'Sabaha karşı', title: 'Şekil verilir, pişer', text: 'Hamurlar şekillendirilir ve fırına verilir. Pişme süreleri ürün ürün takip edilir.' },
      { time: 'Gün boyu', title: 'Tezgâha çıkar', text: 'Ürünler hazır oldukça tezgâha dizilir. Üretim günlük planlanır; tükenen bir ürün aynı gün yeniden hazırlanmayabilir.' },
    ],
    note: 'Süreç anlatımı demo içeriktir.',
  },

  story: {
    title: 'Hamurun sabrına saygı',
    lead: 'FIRIN NO. 8, küçük bir tezgâhta, az ürünle ve yavaş bir tempoyla çalışan kurgusal bir mahalle fırınıdır.',
    paragraphs: [
      'Ekmeklerde reçeteyi sade tutarız: un, su, tuz, maya ve zaman. Tatlılarda ise mevsime uygun meyve ve kuruyemişleri kullanırız.',
      'Amacımız çok değil, iyi yapmak. Bu yüzden menü kısa, tezgâh küçük, her sabah aynı özenle başlar.',
    ],
    motto: 'Az ürün, tam dikkat.',
    demo: 'Bu metin demo içeriktir; gerçek bir işletmeyi tanımlamaz.',
  },

  seasonal: {
    title: 'Mevsimin seçkisi',
    season: 'Sonbahar – Kış',
    intro: 'Mevsim değiştikçe tezgâhımız da değişir. Bu ürünler stok ve tarihe göre rafta olmayabilir.',
    cta: 'Ayrıntıları gör',
  },

  visit: {
    title: 'Bizi ziyaret edin',
    intro: 'Hafta içi sabah erken açıyoruz. İlk çıkan ekmekler için erken gelmenizi öneririz.',
    phone: 'Telefon',
    address: 'Adres',
    hours: 'Çalışma saatleri',
    closed: 'Kapalı',
    directions: 'Yol Tarifi Al',
    mapLabel: "Google Haritalar'da aç",
    mapNote: 'Harita çizimi örnektir. Gerçek adres eklendiğinde bağlantı güncellenir.',
    demoNotice: 'Demo adres ve telefon: gerçek bir işletmeyi göstermez.',
  },

  inquiry: {
    title: 'Ürün hakkında soru sorun',
    intro: 'Formu doldurun, WhatsApp mesajınız hazırlansın. Bu bir sipariş değildir; fırın uygunluk ve fiyat için size dönüş yapar.',
    submit: 'WhatsApp ile Gönder',
    labels: {
      name: 'Adınız',
      product: 'İlgilendiğiniz ürün (isteğe bağlı)',
      quantity: 'Adet (isteğe bağlı)',
      date: 'İstediğiniz tarih (isteğe bağlı)',
      message: 'Mesajınız',
    },
    placeholders: {
      product: 'Ürün seçmeden de yazabilirsiniz',
      message: 'Sorunuzu veya isteğinizi yazın. Örneğin: Hafta sonu için 10 kişilik bir tart mümkün mü?',
    },
    hints: {
      message: 'En az 5, en fazla 600 karakter.',
      date: 'Tarih yalnızca tercihtir; uygunluk fırın tarafından bildirilir.',
    },
    result: {
      title: 'Mesajınız hazırlandı',
      text: 'WhatsApp yeni sekmede açıldı. Talebin iletilmesi için mesajı orada göndermeniz gerekir. Bu bir sipariş onayı değildir; fırın yanıt verene kadar hiçbir ürün ayrılmış sayılmaz.',
      retry: 'WhatsApp açılmadıysa buraya tıklayın',
      preview: 'Gönderilecek mesajı göster',
    },
    errors: {
      name: 'Lütfen adınızı yazın.',
      messageEmpty: 'Lütfen mesajınızı yazın.',
      messageShort: (n) => `Mesaj en az ${n} karakter olmalı.`,
      messageLong: (n) => `Mesaj en fazla ${n} karakter olabilir.`,
      quantity: (n) => `Adet 1 ile ${n} arasında olmalı.`,
      datePast: 'Geçmiş bir tarih seçilemez.',
      dateInvalid: 'Lütfen geçerli bir tarih girin.',
      summary: 'Formda eksik veya hatalı alanlar var. Lütfen işaretli alanları düzeltin.',
    },
    message: {
      name: 'Ad',
      product: 'Ürün',
      price: 'Demo fiyat',
      quantity: 'Adet',
      date: 'İstenen tarih',
      message: 'Mesaj',
      closing: 'Bu bir sipariş değil, bilgi talebidir. Uygunluk ve fiyat için dönüş yaparsanız teşekkür ederim.',
    },
  },

  product: {
    close: 'Ürün penceresini kapat',
    category: 'Kategori',
    ingredients: 'İçindekiler',
    allergens: 'Alerjen bilgisi',
    demoPrice: 'Demo fiyat',
    ask: 'Bu ürün hakkında bilgi iste',
  },

  footer: {
    blurb: 'Her gün sıfırdan hazırlanan ekmek ve pastalar için kurgusal bir butik fırın şablonu.',
    legal: 'Bu site bir demo şablondur. Marka, adres, telefon, ürünler ve fiyatlar kurgusaldır.',
    social: 'Sosyal medya',
    socialNote: 'Hesaplar yer tutucudur.',
  },
};
