import { site } from '../config/site.js';
import { content } from '../config/content.js';
import { images } from '../config/images.js';
import { esc } from '../lib/dom.js';
import { media } from '../lib/media.js';
import { renderStatus } from '../lib/hours.js';

export function renderHero() {
  const c = content.hero;
  const [line1, line2] = c.titleLines;
  const city = site.location.addressLines[site.location.addressLines.length - 1];

  return `
  <section class="hero" aria-labelledby="hero-title">
    <div class="wrap hero__grid">
      <div class="hero__copy">
        <h1 class="hero__title" id="hero-title">
          <span class="hero__line">${esc(line1)}</span>
          <span class="hero__line hero__line--italic">${esc(line2)}</span>
        </h1>
        <p class="hero__lead">${esc(c.lead)}</p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="#urunler">${esc(c.primaryCta)}</a>
          <a class="btn btn--ghost" href="#talep">${esc(c.secondaryCta)}</a>
        </div>
        <div class="hero__facts">
          ${renderStatus()}
          <p class="hero__place">${esc(city)} <span>(demo adres)</span></p>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__main">${media(images.hero, { eager: true })}</div>
        <figure class="hero__inset">
          ${media(images.heroSmall)}
          <figcaption>${esc(c.caption)}</figcaption>
        </figure>
      </div>
    </div>
  </section>`;
}
