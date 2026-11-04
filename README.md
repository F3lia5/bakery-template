# FIRIN NO. 8 — Pastane / Fırın Web Sitesi Şablonu

Butik fırın, pastane ve artisan ekmek işletmeleri için Türkçe, Vite + saf JavaScript şablonu.
**Tüm marka, ürün, fiyat, adres ve telefon bilgileri kurgusal demo içeriktir.** Sepet, ödeme, stok ya da sunucu yoktur.

## Çalıştırma

```bash
npm install
npm run dev       # geliştirme
npm run build     # dist/ klasörüne üretim derlemesi
npm run preview   # derlemeyi yerelde dene
```

## Özelleştirme dosyaları

| Ne değişecek | Dosya |
| --- | --- |
| Renkler, yazı tipleri, boşluklar | `src/styles/tokens.css` |
| Marka adı, SEO, WhatsApp numarası, telefon, adres, harita bağlantısı, çalışma saatleri, sosyal medya | `src/config/site.js` |
| Tüm Türkçe metinler | `src/config/content.js` |
| Ürünler, kategoriler, seçki sırası, alerjenler | `src/data/products.js` |
| Tüm görseller (fotoğraf adresi + yedek çizim + alt metin) | `src/config/images.js` |
| Çizimler (fotoğraf yokken görünen illüstrasyonlar) | `src/lib/art.js` |

### Gerçek fotoğraf eklemek
Dosyayı `public/images/` içine koyun, `src/config/images.js` içinde ilgili kaydın `src` alanına `'/images/dosya.jpg'` yazın. Fotoğraf yüklenemezse çizim otomatik olarak kalır. Ürünlerde 4:5 dikey, ortamlarda yatay kadraj önerilir.

### WhatsApp
`site.js` içindeki `whatsapp.phone` değerini kendi numaranızla (ülke koduyla, yalnızca rakam) değiştirin. Form yalnızca hazır bir WhatsApp mesajı açar; sipariş alındığını ya da onaylandığını söylemez.

## Yapı

```
index.html  vite.config.js  public/favicon.svg
src/main.js
src/config/   site.js content.js images.js
src/data/     products.js
src/components/  header hero featured catalog productDialog process story seasonal visit inquiry footer
src/lib/      art media dom hours reveal
src/styles/   tokens base components sections catalog dialog form
```

## Erişilebilirlik ve davranış
Anlamsal HTML, atlama bağlantısı, görünür odak, klavye ile kullanım, yerel `<dialog>` (Escape, arka plan tıklaması, odak geri dönüşü), `aria-pressed` filtreler, `prefers-reduced-motion` desteği. `#urun/kruvasan` gibi adresler ürünü doğrudan açar.

## Sınırlamalar
- Gerçek fotoğraf yok; görseller illüstrasyondur.
- Harita bir bağlantıdır, gömülü harita değildir.
- Fiyatlar, adres ve telefon demodur.
