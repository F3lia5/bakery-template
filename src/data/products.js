/**
 * Ürün verisi. Kategorileri, ürünleri, açıklamaları ve fiyatları buradan düzenleyin.
 * Tüm fiyatlar DEMO (örnek) tutarlardır ve TL cinsindendir.
 *
 * Ürün alanları:
 *   id          benzersiz kod (bağlantılarda kullanılır: #urun/<id>)
 *   name        ürün adı
 *   category    kategori kodu (aşağıdaki categories listesinden)
 *   description kısa açıklama
 *   price       demo fiyat (sayı)
 *   unit        fiyatın birimi (adet, dilim, somun ...)
 *   ingredients (isteğe bağlı) içindekiler
 *   allergens   (isteğe bağlı) alerjen listesi. Yalnızca açıkça verildiğinde gösterilir.
 *
 * Ürün görselleri bu dosyada değil, src/config/images.js içinde ürün koduyla eşleştirilir.
 *
 * ÖNEMLİ: İçindekiler ve alerjen bilgileri demo amaçlıdır. Gerçek bir müşteri için
 * bu bilgilerin işletme tarafından doğrulanması gerekir.
 */

export const categories = [
  { id: 'ekmek', label: 'Ekmek' },
  { id: 'viennoiserie', label: 'Viennoiserie' },
  { id: 'pasta', label: 'Pasta ve Kek' },
  { id: 'kurabiye', label: 'Kurabiye' },
  { id: 'sezonluk', label: 'Sezonluk' },
];

/** "Bu haftanın seçkisi" bölümünde gösterilen ürünler. İlki büyük gösterilir. */
export const featuredIds = ['kruvasan', 'koy-ekmegi', 'san-sebastian', 'cikolatali-kurabiye', 'limonlu-tart'];

export const products = [
  // Ekmek
  {
    id: 'koy-ekmegi',
    name: 'Köy Ekmeği',
    category: 'ekmek',
    description: 'Kalın, çıtır kabuklu ve yumuşak iç yapılı, uzun mayalanmış ekmek.',
    price: 95,
    unit: 'somun',
    ingredients: 'Buğday unu, su, tuz, doğal maya.',
    allergens: ['Gluten'],
  },
  {
    id: 'cavdarli-ekmek',
    name: 'Çavdarlı Ekmek',
    category: 'ekmek',
    description: 'Çavdar unuyla yoğrulan, koyu kabuklu ve doyurucu somun.',
    price: 110,
    unit: 'somun',
    ingredients: 'Çavdar unu, buğday unu, su, tuz, maya, karakimyon.',
    allergens: ['Gluten'],
  },
  {
    id: 'baget',
    name: 'Baget',
    category: 'ekmek',
    description: 'İnce ve çıtır, gün içinde tazelenen klasik uzun ekmek.',
    price: 45,
    unit: 'adet',
    ingredients: 'Buğday unu, su, tuz, maya.',
    allergens: ['Gluten'],
  },

  // Viennoiserie
  {
    id: 'kruvasan',
    name: 'Tereyağlı Kruvasan',
    category: 'viennoiserie',
    description: 'Kat kat açılan, tereyağı kokulu ve çıtır dış yüzlü kruvasan.',
    price: 85,
    unit: 'adet',
    ingredients: 'Buğday unu, tereyağı, süt, yumurta, şeker, maya, tuz.',
    allergens: ['Gluten', 'Süt', 'Yumurta'],
  },
  {
    id: 'pain-au-chocolat',
    name: 'Pain au Chocolat',
    category: 'viennoiserie',
    description: 'İçinde bitter çikolata şeritleri olan tereyağlı hamur.',
    price: 95,
    unit: 'adet',
    ingredients: 'Buğday unu, tereyağı, bitter çikolata, süt, yumurta, şeker, maya, tuz.',
    allergens: ['Gluten', 'Süt', 'Yumurta', 'Soya'],
  },
  {
    id: 'kanelli-rulo',
    name: 'Kanelli Rulo',
    category: 'viennoiserie',
    description: 'Tarçınlı şeker dolgusu ve hafif glazürle servis edilen yumuşak rulo.',
    price: 90,
    unit: 'adet',
    allergens: ['Gluten', 'Süt', 'Yumurta'],
  },

  // Pasta ve Kek
  {
    id: 'san-sebastian',
    name: 'San Sebastian Cheesecake',
    category: 'pasta',
    description: 'Üstü karamelize, içi kremamsı, hafif tuzlu dilim.',
    price: 195,
    unit: 'dilim',
    ingredients: 'Krem peynir, krema, yumurta, şeker, az miktarda un, tuz.',
    allergens: ['Süt', 'Yumurta', 'Gluten'],
  },
  {
    id: 'havuclu-kek',
    name: 'Havuçlu Cevizli Kek',
    category: 'pasta',
    description: 'Baharatlı, nemli kek ve üzerinde labneli krema.',
    price: 140,
    unit: 'dilim',
    allergens: ['Gluten', 'Süt', 'Yumurta', 'Kuruyemiş (ceviz)'],
  },
  {
    id: 'limonlu-tart',
    name: 'Limonlu Tart',
    category: 'pasta',
    description: 'Ekşi limon kreması ve gevrek tereyağlı hamur.',
    price: 160,
    unit: 'dilim',
    ingredients: 'Buğday unu, tereyağı, limon, yumurta, şeker.',
    allergens: ['Gluten', 'Süt', 'Yumurta'],
  },

  // Kurabiye
  {
    id: 'cikolatali-kurabiye',
    name: 'Çikolatalı Kurabiye',
    category: 'kurabiye',
    description: 'Büyük parça bitter çikolatalı, kenarları çıtır, içi yumuşak.',
    price: 55,
    unit: 'adet',
    ingredients: 'Buğday unu, tereyağı, bitter çikolata, şeker, yumurta.',
    allergens: ['Gluten', 'Süt', 'Yumurta', 'Soya'],
  },
  {
    id: 'tuzlu-karamelli-kurabiye',
    name: 'Tuzlu Karamelli Kurabiye',
    category: 'kurabiye',
    description: 'Karamel sosu ve deniz tuzu pulları ile tatlı-tuzlu denge.',
    price: 60,
    unit: 'adet',
    allergens: ['Gluten', 'Süt', 'Yumurta'],
  },

  // Sezonluk (Sonbahar – Kış)
  {
    id: 'kestaneli-tart',
    name: 'Kestaneli Tart',
    category: 'sezonluk',
    description: 'Kestane kreması ve gevrek hamurla hazırlanan sonbahar tartı.',
    price: 175,
    unit: 'dilim',
    allergens: ['Gluten', 'Süt', 'Yumurta', 'Kuruyemiş'],
  },
  {
    id: 'elmali-galette',
    name: 'Elmalı Galette',
    category: 'sezonluk',
    description: 'Dilimlenmiş elma ve tarçınla katlanan, rustik görünümlü tatlı.',
    price: 150,
    unit: 'dilim',
    allergens: ['Gluten', 'Süt'],
  },
  {
    id: 'portakalli-kek',
    name: 'Portakallı Kakaolu Kek',
    category: 'sezonluk',
    description: 'Portakal kabuğu ve kakaoyla hazırlanan, dilimlenerek sunulan kek.',
    price: 145,
    unit: 'dilim',
    allergens: ['Gluten', 'Süt', 'Yumurta'],
  },
];

export const allergenNote =
  'İçindekiler ve alerjen bilgileri demo amaçlıdır. Gerçek ürünler için lütfen fırına danışın.';
