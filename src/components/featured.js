import { content } from '../config/content.js';
import { featuredIds } from '../data/products.js';
import { esc, formatPrice, findProduct, productImage, categoryLabel } from '../lib/dom.js';
import { media } from '../lib/media.js';

/** Seçki öğesi: ürün penceresini açan düğme. İlk öğe büyük, diğerleri farklı oranlarda gösterilir. */
function tile(product, index) {
  const sizes = ['lead', 'tall', 'wide', 'square', 'tall'];
  return `<li class="pick pick--${sizes[index] || 'square'}" data-reveal>
    <button class="pick__btn" type="button" data-product="${esc(product.id)}" aria-haspopup="dialog">
      <span class="pick__media">${media(productImage(product))}</span>
      <span class="pick__body">
        <span class="pick__cat">${esc(categoryLabel(product.category))}</span>
        <span class="pick__name">${esc(product.name)}</span>
        <span class="pick__price">${formatPrice(product.price)}<span class="pick__unit"> / ${esc(product.unit)}</span></span>
      </span>
    </button>
  </li>`;
}

export function renderFeatured() {
  const c = content.featured;
  const products = featuredIds.map(findProduct).filter(Boolean);

  return `
  <section class="section featured" id="secki" aria-labelledby="secki-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="secki-title" data-reveal>${esc(c.title)}</h2>
        <p data-reveal>${esc(c.intro)}</p>
      </div>
      <ul class="picks">${products.map(tile).join('')}</ul>
      <p class="featured__all"><a class="link" href="#urunler">${esc(c.allCta)}</a></p>
    </div>
  </section>`;
}
