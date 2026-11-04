/**
 * İşletme kimliği, iletişim, adres, çalışma saatleri, sosyal medya ve WhatsApp ayarları.
 * Başka bir müşteri için şablonu uyarlarken ilk bu dosyayı düzenleyin.
 * (Ürünler: src/data/products.js, metinler: src/config/content.js,
 *  görseller: src/config/images.js, renkler ve yazı tipi: src/styles/tokens.css)
 *
 * DEMO: Aşağıdaki tüm işletme, iletişim ve adres bilgileri örnektir, gerçek bir işletmeye ait değildir.
 */
export const site = {
  brand: {
    name: 'FIRIN NO. 8',
    // Logo, header.js içindeki BRAND_MARK svg'sidir; kendi logonuz için dosyayı public/ içine koyup değiştirin.
    mark: '8',
  },

  locale: 'tr-TR',
  currency: 'TRY',
  timezone: 'Europe/Istanbul',

  seo: {
    title: 'FIRIN NO. 8 | Butik fırın, pastane ve el yapımı ekmek',
    description:
      'FIRIN NO. 8: her gün sıfırdan hazırlanan ekmek, kruvasan, pasta ve kurabiyeler. Demo şablon. Ürünlere göz atın, WhatsApp ile bilgi isteyin.',
    // Mutlak adres, tercihen 1200x630. Gerçek müşteri fotoğrafı eklenince değiştirin. Boşsa etiket eklenmez.
    ogImage: '',
  },

  /**
   * WhatsApp bilgi talebi.
   * phone: ülke koduyla, yalnızca rakamlar (başında + veya 0 olmadan). Örnek: 905551234567
   * DEMO numara geçersizdir; gerçek müşterinin numarasıyla değiştirin.
   */
  whatsapp: {
    phone: '905550000000',
    greeting: 'Merhaba, FIRIN NO. 8 için ürün hakkında bilgi almak istiyorum.',
    baseUrl: 'https://wa.me/',
  },

  contact: {
    phoneDisplay: '+90 555 000 00 00',
    phoneHref: 'tel:+905550000000',
    email: '',
  },

  /** DEMO adres. Gerçek müşteri bilgisiyle değiştirin. */
  location: {
    isDemo: true,
    addressLines: ['Örnek Mahallesi, Örnek Sokak No: 8', 'Merkez, İstanbul'],
    // Müşterinin Google Maps paylaşım bağlantısı ile değiştirin.
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=%C4%B0stanbul',
  },

  /**
   * Çalışma saatleri. days: 0 = Pazar, 1 = Pazartesi ... 6 = Cumartesi.
   * Kapalı günler için open/close boş bırakılır ('').
   */
  hours: [
    { label: 'Salı – Cuma', days: [2, 3, 4, 5], open: '07:00', close: '19:00' },
    { label: 'Cumartesi – Pazar', days: [6, 0], open: '08:00', close: '18:00' },
    { label: 'Pazartesi', days: [1], open: '', close: '' },
  ],

  /**
   * Sosyal medya yer tutucuları. Gerçek hesap yoksa url'yi boş bırakın; bağlantı gösterilmez.
   * Buradaki adresler yalnızca platformların ana sayfasıdır, gerçek bir hesaba işaret etmez.
   */
  social: [
    { name: 'Instagram', url: 'https://www.instagram.com/', handle: 'Hesap adı eklenecek' },
    { name: 'Facebook', url: 'https://www.facebook.com/', handle: 'Sayfa adı eklenecek' },
  ],

  inquiry: {
    quantityMax: 99,
    messageMin: 5,
    messageMax: 600,
  },
};
