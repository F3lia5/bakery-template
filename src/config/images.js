/**
 * Sitedeki tüm görsellerin tek merkezi.
 *
 * Her kayıt:
 *   src:  Görselin adresi. Yerel dosya için '/images/dosya.jpg' (dosyayı public/images/ içine koyun)
 *         ya da tam bir https adresi. BOŞ bırakılırsa 'art' ile belirtilen çizim kullanılır.
 *   art:  Fotoğraf yoksa ya da yüklenemezse gösterilen çizim (src/lib/art.js içindeki anahtarlar).
 *   tone: Çizimin zemin tonu: cream | oat | blush | sage | burgundy
 *   alt:  Ekran okuyucular için Türkçe açıklama.
 *   w, h: Yer ayırmak için tahmini genişlik/yükseklik (yalnızca src doluysa kullanılır).
 *
 * Bu şablon hazırlanırken ağ erişimi olmadığından hiçbir uzak fotoğraf doğrulanamadı.
 * Bu yüzden şu an tüm görseller çizimdir; yerleşim, fotoğraf eklendiğinde de bozulmaz.
 * Gerçek müşteri için öneri: ürün fotoğrafları 4:5 dikey, ortamlar yatay kadrajda çekilsin.
 */

export const images = {
  hero: {
    src: '',
    art: 'hero',
    tone: 'cream',
    alt: 'Keten örtülü ahşap tezgâhta duran köy ekmeği, baget ve kruvasan',
    w: 1200,
    h: 1500,
  },
  heroSmall: {
    src: '',
    art: 'croissant',
    tone: 'blush',
    alt: 'Tabakta duran altın renkli tereyağlı kruvasan',
    w: 800,
    h: 800,
  },
  story: {
    src: '',
    art: 'shelf',
    tone: 'oat',
    alt: 'Ahşap rafta dizilmiş ekmekler ve bagetler',
    w: 1200,
    h: 1500,
  },
  storySmall: {
    src: '',
    art: 'boule',
    tone: 'blush',
    alt: 'Üzerinde kesikler bulunan, una bulanmış yuvarlak ekmek',
    w: 800,
    h: 800,
  },
  map: {
    src: '',
    art: 'map',
    tone: 'cream',
    alt: 'Fırının konumunu gösteren örnek harita çizimi',
    w: 1000,
    h: 700,
  },

  /** Ürün görselleri, ürün kodu (products.js içindeki id) ile eşleşir. */
  products: {
    'koy-ekmegi': { src: '', art: 'boule', tone: 'oat', alt: 'Üzerinde çapraz kesikler olan, una bulanmış köy ekmeği' },
    'cavdarli-ekmek': { src: '', art: 'rye', tone: 'cream', alt: 'Koyu kabuklu, çavdar tohumlu oval ekmek' },
    baget: { src: '', art: 'baguette', tone: 'blush', alt: 'Üzerinde eğik kesikler bulunan üç baget' },
    kruvasan: { src: '', art: 'croissant', tone: 'blush', alt: 'Kat kat açılmış altın renkli kruvasan' },
    'pain-au-chocolat': { src: '', art: 'chocolat', tone: 'oat', alt: 'İçinde çikolata şeritleri görünen dikdörtgen hamur işi' },
    'kanelli-rulo': { src: '', art: 'roll', tone: 'cream', alt: 'Spiral desenli, tarçınlı yumuşak rulo' },
    'san-sebastian': { src: '', art: 'cheesecake', tone: 'oat', alt: 'Üstü koyu karamelize olmuş, kremamsı cheesecake dilimi' },
    'havuclu-kek': { src: '', art: 'carrot', tone: 'blush', alt: 'Katlı havuçlu kek dilimi ve üzerinde krema' },
    'limonlu-tart': { src: '', art: 'tart', tone: 'cream', alt: 'Dalgalı kenarlı, sarı limon kremalı tart' },
    'cikolatali-kurabiye': { src: '', art: 'cookie', tone: 'oat', alt: 'Büyük çikolata parçalı kurabiye' },
    'tuzlu-karamelli-kurabiye': { src: '', art: 'cookieSalt', tone: 'cream', alt: 'Üzerinde karamel ve tuz pulları olan kurabiye' },
    'kestaneli-tart': { src: '', art: 'chestnut', tone: 'burgundy', alt: 'Üzerinde kestane kreması telleri olan kahverengi tart' },
    'elmali-galette': { src: '', art: 'galette', tone: 'burgundy', alt: 'Ortasında elma dilimleri dizili rustik galette' },
    'portakalli-kek': { src: '', art: 'loafcake', tone: 'burgundy', alt: 'Üzerinde portakal dilimleri bulunan çikolatalı kek' },
  },
};
