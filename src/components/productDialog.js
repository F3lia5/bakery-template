import { content } from '../config/content.js';
import { allergenNote } from '../data/products.js';
import { esc, formatPrice, findProduct, productImage, categoryLabel } from '../lib/dom.js';
import { media, watchMedia } from '../lib/media.js';
import { preselectProduct } from './inquiry.js';

const HASH_PATTERN = /^#urun\/([\w-]+)$/;

const CLOSE_ICON = `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
  <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
</svg>`;

function detailMarkup(product) {
  const c = content.product;
  const hasInfo = product.ingredients || product.allergens?.length;

  return `
    <div class="pdialog__media">${media(productImage(product))}</div>
    <div class="pdialog__body">
      <p class="pdialog__cat">${esc(categoryLabel(product.category))}</p>
      <h2 class="pdialog__title" id="pdialog-title">${esc(product.name)}</h2>
      <p class="pdialog__price">
        <span class="sr-only">${esc(c.demoPrice)}: </span>${formatPrice(product.price)}<span class="pdialog__unit"> / ${esc(product.unit)}</span>
        <span class="pdialog__demo">${esc(c.demoPrice)}</span>
      </p>
      <p class="pdialog__desc">${esc(product.description)}</p>

      <dl class="pdialog__info">
        ${
          product.ingredients
            ? `<div><dt>${esc(c.ingredients)}</dt><dd>${esc(product.ingredients)}</dd></div>`
            : ''
        }
        ${
          product.allergens?.length
            ? `<div><dt>${esc(c.allergens)}</dt><dd><ul class="allergens">${product.allergens
                .map((a) => `<li>${esc(a)}</li>`)
                .join('')}</ul></dd></div>`
            : ''
        }
      </dl>
      ${hasInfo ? `<p class="note">${esc(allergenNote)}</p>` : ''}

      <button class="btn btn--primary pdialog__ask" type="button" data-ask="${esc(product.id)}">${esc(c.ask)}</button>
    </div>`;
}

/**
 * Ürün penceresi, yerel <dialog> üzerine kuruludur: odak tuzağı, Escape ile kapanma ve
 * arka planın etkisizleşmesi tarayıcıdan gelir. "#urun/<kod>" adresi doğrudan bir ürünü açar.
 */
export function createProductDialog() {
  const dialog = document.createElement('dialog');
  dialog.className = 'pdialog';
  dialog.setAttribute('aria-labelledby', 'pdialog-title');
  dialog.innerHTML = `
    <div class="pdialog__sheet">
      <button class="pdialog__close" type="button" aria-label="${esc(content.product.close)}">${CLOSE_ICON}</button>
      <div class="pdialog__content" data-content></div>
    </div>`;

  const holder = dialog.querySelector('[data-content]');
  let opener = null;
  let currentId = null;

  function open(id, trigger) {
    const product = findProduct(id);
    if (!product) return;
    opener = trigger || document.activeElement;
    currentId = id;
    holder.innerHTML = detailMarkup(product);
    watchMedia(holder);
    dialog.querySelector('.pdialog__sheet').scrollTop = 0;
    if (!dialog.open) {
      dialog.showModal();
      document.documentElement.classList.add('is-locked');
    }
    history.replaceState(null, '', `#urun/${id}`);
  }

  function close() {
    if (dialog.open) dialog.close();
  }

  dialog.querySelector('.pdialog__close').addEventListener('click', close);

  // Dimli alana (dialog öğesinin kendisi) basıp bırakmak pencereyi kapatır.
  let pressStartedOnBackdrop = false;
  dialog.addEventListener('pointerdown', (e) => {
    pressStartedOnBackdrop = e.target === dialog;
  });
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog && pressStartedOnBackdrop) close();
    const ask = e.target.closest('[data-ask]');
    if (ask) {
      const id = ask.dataset.ask;
      close();
      preselectProduct(id);
      location.hash = 'talep';
    }
  });

  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('is-locked');
    if (HASH_PATTERN.test(location.hash)) {
      history.replaceState(null, '', location.pathname + location.search);
    }
    if (opener && document.activeElement === document.body && document.contains(opener)) {
      opener.focus();
    }
    opener = null;
    currentId = null;
  });

  function openFromHash() {
    const match = HASH_PATTERN.exec(location.hash);
    if (match && match[1] !== currentId) open(match[1]);
  }

  return { element: dialog, open, close, openFromHash };
}
