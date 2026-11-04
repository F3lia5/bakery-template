import { site } from '../config/site.js';
import { content } from '../config/content.js';
import { categories } from '../data/products.js';
import { esc } from '../lib/dom.js';
import { brandMark } from './header.js';

export function renderFooter() {
  const { nav, footer } = content;
  const { location: loc, contact } = site;

  const hours = site.hours
    .map(
      (h) =>
        `<li><span>${esc(h.label)}</span><span>${h.open && h.close ? `${esc(h.open)} – ${esc(h.close)}` : esc(content.visit.closed)}</span></li>`,
    )
    .join('');

  const social = site.social
    .map((s) =>
      s.url
        ? `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)}<span class="sr-only"> (yeni sekmede açılır)</span></a> <span class="footer__handle">${esc(s.handle)}</span></li>`
        : `<li>${esc(s.name)} <span class="footer__handle">${esc(s.handle)}</span></li>`,
    )
    .join('');

  const categoryLinks = categories
    .map((c) => `<li><a href="#urunler" data-filter="${esc(c.id)}">${esc(c.label)}</a></li>`)
    .join('');

  return `
  <footer class="footer">
    <div class="wrap">
      <div class="footer__grid">
        <div class="footer__brand">
          <p class="footer__name">${brandMark()}<span>${esc(site.brand.name)}</span></p>
          <p>${esc(footer.blurb)}</p>
        </div>

        <nav aria-label="Alt gezinme">
          <h2 class="footer__title">Sayfa</h2>
          <ul class="footer__list">
            <li><a href="#urunler">${esc(nav.products)}</a></li>
            <li><a href="#hikaye">${esc(nav.story)}</a></li>
            <li><a href="#uretim">${esc(nav.process)}</a></li>
            <li><a href="#talep">${esc(nav.cta)}</a></li>
            <li><a href="#iletisim">${esc(nav.contact)}</a></li>
          </ul>
        </nav>

        <nav aria-label="Ürün kategorileri">
          <h2 class="footer__title">Kategoriler</h2>
          <ul class="footer__list">${categoryLinks}</ul>
        </nav>

        <div>
          <h2 class="footer__title">İletişim</h2>
          <address class="footer__address">${loc.addressLines.map(esc).join('<br>')}</address>
          ${loc.isDemo ? '<p class="footer__demo">Demo adres</p>' : ''}
          <ul class="footer__list footer__contact">
            <li><a href="${esc(contact.phoneHref)}">${esc(contact.phoneDisplay)}</a></li>
            ${contact.email ? `<li><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></li>` : ''}
          </ul>
          <ul class="footer__list footer__hours">${hours}</ul>
        </div>

        <div>
          <h2 class="footer__title">${esc(footer.social)}</h2>
          <ul class="footer__list">${social}</ul>
          <p class="footer__demo">${esc(footer.socialNote)}</p>
        </div>
      </div>

      <p class="footer__legal">
        <span>© ${new Date().getFullYear()} ${esc(site.brand.name)}.</span>
        <span>${esc(footer.legal)}</span>
      </p>
    </div>
  </footer>`;
}
