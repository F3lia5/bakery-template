import '@fontsource-variable/fraunces/opsz.css';
import '@fontsource-variable/fraunces/opsz-italic.css';
import '@fontsource-variable/instrument-sans/wght.css';

import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/sections.css';
import './styles/catalog.css';
import './styles/dialog.css';
import './styles/form.css';

import { renderHeader, initHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderFeatured } from './components/featured.js';
import { renderCatalog, initCatalog } from './components/catalog.js';
import { renderProcess } from './components/process.js';
import { renderStory } from './components/story.js';
import { renderSeasonal } from './components/seasonal.js';
import { renderVisit } from './components/visit.js';
import { renderInquiry, initInquiry } from './components/inquiry.js';
import { renderFooter } from './components/footer.js';
import { createProductDialog } from './components/productDialog.js';
import { watchMedia } from './lib/media.js';
import { refreshStatus } from './lib/hours.js';
import { initReveal } from './lib/reveal.js';

document.getElementById('app').innerHTML = `
  ${renderHeader()}
  <main id="icerik" tabindex="-1">
    ${renderHero()}
    ${renderFeatured()}
    ${renderCatalog()}
    ${renderProcess()}
    ${renderStory()}
    ${renderSeasonal()}
    ${renderVisit()}
    ${renderInquiry()}
  </main>
  ${renderFooter()}
`;

const dialog = createProductDialog();
document.body.append(dialog.element);

initHeader();
initCatalog();
initInquiry();
watchMedia(document);
refreshStatus();
window.setInterval(refreshStatus, 60_000);
initReveal();

// [data-product] taşıyan her düğme (seçki, liste, sezonluk) ürün penceresini açar.
document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-product]');
  if (!trigger) return;
  event.preventDefault();
  dialog.open(trigger.dataset.product, trigger);
});

window.addEventListener('hashchange', dialog.openFromHash);
dialog.openFromHash();
