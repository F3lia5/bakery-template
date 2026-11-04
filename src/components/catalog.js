import { content } from '../config/content.js';
import { categories, products } from '../data/products.js';
import { esc, formatPrice, productImage, categoryLabel } from '../lib/dom.js';
import { media, watchMedia } from '../lib/media.js';

const ALL = 'tumu';

const countIn = (id) => (id === ALL ? products.length : products.filter((p) => p.category === id).length);

function card(product) {
  return `<li class="item" data-category="${esc(product.category)}">
    <button class="item__btn" type="button" data-product="${esc(product.id)}" aria-haspopup="dialog">
      <span class="item__media">${media(productImage(product))}</span>
      <span class="item__head">
        <span class="item__name">${esc(product.name)}</span>
        <span class="item__price">${formatPrice(product.price)}</span>
      </span>
      <span class="item__desc">${esc(product.description)}</span>
      <span class="sr-only">${esc(content.catalog.open)}</span>
    </button>
  </li>`;
}

export function renderCatalog() {
  const c = content.catalog;
  const filters = [{ id: ALL, label: c.all }, ...categories]
    .map(
      (cat, i) => `<button class="filter" type="button" data-filter="${esc(cat.id)}" aria-pressed="${i === 0}">
        <span class="filter__label">${esc(cat.label)}</span>
        <span class="filter__count" aria-hidden="true">${countIn(cat.id)}</span>
        <span class="sr-only">, ${countIn(cat.id)} ürün</span>
      </button>`,
    )
    .join('');

  return `
  <section class="section catalog" id="urunler" aria-labelledby="urunler-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="urunler-title" data-reveal>${esc(c.title)}</h2>
        <p data-reveal>${esc(c.intro)}</p>
      </div>

      <div class="filters" role="group" aria-label="${esc(c.filterLabel)}">${filters}</div>
      <p class="catalog__status" data-catalog-status role="status" aria-live="polite">${esc(c.count(products.length))}</p>

      <ul class="items" data-items>${products.map(card).join('')}</ul>

      <div class="catalog__empty" data-empty hidden>
        <p class="catalog__empty-title">${esc(c.emptyTitle)}</p>
        <p>${esc(c.emptyText)}</p>
        <button class="btn btn--ghost btn--sm" type="button" data-filter="${ALL}">${esc(c.emptyAction)}</button>
      </div>

      <p class="note catalog__note">${esc(c.note)}</p>
    </div>
  </section>`;
}

/** Kategori filtresi. Aynı [data-filter] özniteliğini taşıyan her bağlantı (altbilgi, hero...) çalışır. */
export function initCatalog() {
  const c = content.catalog;
  const root = document.getElementById('urunler');
  const list = root.querySelector('[data-items]');
  const status = root.querySelector('[data-catalog-status]');
  const empty = root.querySelector('[data-empty]');
  const buttons = [...root.querySelectorAll('.filters [data-filter]')];

  function apply(id) {
    const valid = id === ALL || categories.some((cat) => cat.id === id);
    const active = valid ? id : ALL;
    let shown = 0;

    list.querySelectorAll('.item').forEach((item) => {
      const match = active === ALL || item.dataset.category === active;
      item.hidden = !match;
      if (match) shown += 1;
    });
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === active)));

    const label = active === ALL ? c.all : categoryLabel(active);
    status.textContent = shown ? `${label}: ${c.count(shown)}` : `${label}: ${c.emptyTitle}`;
    empty.hidden = shown > 0;
    list.hidden = shown === 0;
    watchMedia(list);
    return active;
  }

  // Sayfadaki tüm kategori bağlantıları (data-filter) filtreyi değiştirir ve listeye götürür.
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-filter]');
    if (!trigger) return;
    apply(trigger.dataset.filter);
    if (!trigger.closest('.filters')) {
      event.preventDefault();
      document.getElementById('urunler').scrollIntoView();
    }
  });

  // #urunler/<kategori> adresiyle doğrudan filtre açılabilir.
  const fromHash = () => {
    const m = /^#urunler\/([\w-]+)$/.exec(location.hash);
    if (m) {
      apply(m[1]);
      document.getElementById('urunler').scrollIntoView();
    }
  };
  window.addEventListener('hashchange', fromHash);
  apply(ALL);
  fromHash();
}
