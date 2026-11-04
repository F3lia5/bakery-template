import { content } from '../config/content.js';
import { esc } from '../lib/dom.js';

export function renderProcess() {
  const c = content.process;
  const steps = c.steps
    .map(
      (s, i) => `<li class="step" data-reveal>
        <p class="step__time">${esc(s.time)}</p>
        <div class="step__body">
          <h3 class="step__title"><span class="sr-only">${i + 1}. adım: </span>${esc(s.title)}</h3>
          <p class="step__text">${esc(s.text)}</p>
        </div>
      </li>`,
    )
    .join('');

  return `
  <section class="section process" id="uretim" aria-labelledby="uretim-title">
    <div class="wrap process__grid">
      <div class="process__head">
        <h2 id="uretim-title" data-reveal>${esc(c.title)}</h2>
        <p>${esc(c.intro)}</p>
        <p class="note">${esc(c.note)}</p>
      </div>
      <ol class="steps">${steps}</ol>
    </div>
  </section>`;
}
