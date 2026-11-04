import { content } from '../config/content.js';
import { products } from '../data/products.js';
import { esc, formatPrice, productImage } from '../lib/dom.js';
import { media } from '../lib/media.js';

export function renderSeasonal() {
  const c = content.seasonal;
  const items = products.filter((p) => p.category === 'sezonluk');

  const cards = items
    .map(
      (p) => `<li class="season" data-reveal>
        <button class="season__btn" type="button" data-product="${esc(p.id)}" aria-haspopup="dialog">
          <span class="season__media">${media(productImage(p))}</span>
          <span class="season__name">${esc(p.name)}</span>
          <span class="season__desc">${esc(p.description)}</span>
          <span class="season__price">${formatPrice(p.price)}<span class="season__unit"> / ${esc(p.unit)}</span></span>
          <span class="sr-only">${esc(c.cta)}</span>
        </button>
      </li>`,
    )
    .join('');

  return `
  <section class="section seasonal" id="sezonluk" aria-labelledby="sezonluk-title">
    <div class="wrap">
      <div class="seasonal__head">
        <p class="seasonal__season">${esc(c.season)}</p>
        <h2 id="sezonluk-title" data-reveal>${esc(c.title)}</h2>
        <p class="seasonal__intro">${esc(c.intro)}</p>
      </div>
      ${items.length ? `<ul class="seasons">${cards}</ul>` : ''}
    </div>
  </section>`;
}
