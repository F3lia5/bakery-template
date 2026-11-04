import { site } from '../config/site.js';
import { content } from '../config/content.js';
import { esc } from '../lib/dom.js';

const DESKTOP_QUERY = '(min-width: 56rem)';

/** Logo: bordo bir mühür ve içinde numara. Kendi logonuzu eklemek için bu svg'yi değiştirin. */
export const brandMark = () => `<svg class="brand__mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
  <circle cx="20" cy="20" r="19" fill="currentColor"/>
  <circle cx="20" cy="20" r="16" fill="none" stroke="var(--paper)" stroke-width="0.9"/>
  <text x="20" y="27.4" text-anchor="middle" font-family="var(--font-display)" font-size="22" font-weight="600" fill="var(--paper)">${esc(site.brand.mark)}</text>
</svg>`;

export function renderHeader() {
  const { nav } = content;
  const links = `
    <li><a href="#urunler">${esc(nav.products)}</a></li>
    <li><a href="#hikaye">${esc(nav.story)}</a></li>
    <li><a href="#uretim">${esc(nav.process)}</a></li>
    <li><a href="#iletisim">${esc(nav.contact)}</a></li>`;

  return `
  <header class="site-header">
    <div class="wrap site-header__bar">
      <a class="brand" href="#top" aria-label="${esc(site.brand.name)}, sayfanın başı">
        ${brandMark()}
        <span class="brand__name">${esc(site.brand.name)}</span>
      </a>

      <nav class="nav" aria-label="Ana gezinme">
        <ul class="nav__list">${links}</ul>
      </nav>

      <div class="site-header__actions">
        <a class="btn btn--primary btn--sm" href="#talep">${esc(nav.cta)}</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Gezinme menüsünü aç">
          <span class="nav-toggle__bars" aria-hidden="true"></span>
        </button>
      </div>
    </div>

    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobil gezinme" hidden>
      <ul class="wrap mobile-nav__list">${links}
        <li><a class="mobile-nav__cta" href="#talep">${esc(nav.cta)}</a></li>
      </ul>
    </nav>
  </header>`;
}

export function initHeader() {
  const toggle = document.querySelector('.nav-toggle');
  const panel = document.getElementById('mobile-nav');

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Gezinme menüsünü kapat' : 'Gezinme menüsünü aç');
    panel.hidden = !open;
  };

  toggle.addEventListener('click', () => setOpen(panel.hidden));
  panel.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (e) => {
    if (!panel.hidden && !e.target.closest('.site-header')) setOpen(false);
  });
  window.matchMedia(DESKTOP_QUERY).addEventListener('change', (m) => {
    if (m.matches) setOpen(false);
  });
}
