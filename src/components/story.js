import { content } from '../config/content.js';
import { images } from '../config/images.js';
import { esc } from '../lib/dom.js';
import { media } from '../lib/media.js';

export function renderStory() {
  const c = content.story;
  return `
  <section class="section story" id="hikaye" aria-labelledby="hikaye-title">
    <div class="wrap story__grid">
      <div class="story__visual">
        <div class="story__main">${media(images.story)}</div>
        <div class="story__inset">${media(images.storySmall)}</div>
      </div>
      <div class="story__copy">
        <h2 id="hikaye-title" data-reveal>${esc(c.title)}</h2>
        <p class="story__lead">${esc(c.lead)}</p>
        ${c.paragraphs.map((p) => `<p class="story__text">${esc(p)}</p>`).join('')}
        <p class="story__motto">${esc(c.motto)}</p>
        <p class="note">${esc(c.demo)}</p>
      </div>
    </div>
  </section>`;
}
