import { site } from '../config/site.js';
import { categories, products } from '../data/products.js';
import { images } from '../config/images.js';

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** HTML şablonuna konacak metni güvenli hale getirir. */
export const esc = (value = '') => String(value).replace(/[&<>"']/g, (c) => ESCAPES[c]);

const priceFormatter = new Intl.NumberFormat(site.locale, {
  style: 'currency',
  currency: site.currency,
  maximumFractionDigits: 0,
});

export const formatPrice = (amount) => priceFormatter.format(amount);

export const categoryLabel = (id) => categories.find((c) => c.id === id)?.label || '';
export const findProduct = (id) => products.find((p) => p.id === id);

/** Ürünün görsel kaydı (images.js). Kayıt yoksa kategoriye uygun genel bir çizim kullanılır. */
export function productImage(product) {
  return (
    images.products[product.id] || {
      src: '',
      art: 'boule',
      tone: 'cream',
      alt: `${product.name} için örnek çizim`,
    }
  );
}
