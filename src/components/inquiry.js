import { site } from '../config/site.js';
import { content } from '../config/content.js';
import { categories, products } from '../data/products.js';
import { esc, formatPrice, findProduct } from '../lib/dom.js';
import { todayISO, parseISODate, formatDateTR } from '../lib/hours.js';

/** Mesaj metni. İsteğe bağlı alanlar (ürün, adet, tarih) boşsa mesaja eklenmez. */
export function buildWhatsAppMessage({ name, productId, quantity, date, message }) {
  const m = content.inquiry.message;
  const lines = [site.whatsapp.greeting, '', `${m.name}: ${name.trim()}`];

  const product = productId ? findProduct(productId) : null;
  if (product) lines.push(`${m.product}: ${product.name} (${m.price}: ${formatPrice(product.price)} / ${product.unit})`);
  if (quantity) lines.push(`${m.quantity}: ${quantity}`);
  if (date) lines.push(`${m.date}: ${formatDateTR(date)}`);
  lines.push(`${m.message}: ${message.replace(/\r\n/g, '\n').trim()}`, '', m.closing);
  return lines.join('\n');
}

export function buildWhatsAppUrl(text) {
  const phone = String(site.whatsapp.phone).replace(/\D/g, '');
  return `${site.whatsapp.baseUrl}${phone}?text=${encodeURIComponent(text)}`;
}

export function renderInquiry() {
  const c = content.inquiry;
  const { messageMax, quantityMax } = site.inquiry;

  const productOptions = categories
    .map((cat) => {
      const opts = products
        .filter((p) => p.category === cat.id)
        .map((p) => `<option value="${esc(p.id)}">${esc(p.name)}</option>`)
        .join('');
      return opts ? `<optgroup label="${esc(cat.label)}">${opts}</optgroup>` : '';
    })
    .join('');

  const field = (name, label, control, hint = '') => `
    <div class="field" data-field="${name}">
      <label class="field__label" for="f-${name}">${esc(label)}</label>
      ${control}
      ${hint ? `<p class="field__hint" id="hint-${name}">${esc(hint)}</p>` : ''}
      <p class="field__error" id="err-${name}" hidden></p>
    </div>`;

  return `
  <section class="section inquiry" id="talep" aria-labelledby="talep-title">
    <div class="wrap inquiry__grid">
      <div class="inquiry__intro">
        <h2 id="talep-title" data-reveal>${esc(c.title)}</h2>
        <p>${esc(c.intro)}</p>
      </div>

      <form class="form" data-form novalidate>
        <p class="form__summary" data-summary role="alert" hidden>${esc(c.errors.summary)}</p>

        ${field('name', c.labels.name, `<input class="control" id="f-name" name="name" type="text" required autocomplete="name" aria-describedby="err-name">`)}

        <div class="form__row">
          ${field(
            'product',
            c.labels.product,
            `<select class="control" id="f-product" name="product" aria-describedby="err-product">
              <option value="">${esc(c.placeholders.product)}</option>${productOptions}
            </select>`,
          )}
          ${field(
            'quantity',
            c.labels.quantity,
            `<input class="control" id="f-quantity" name="quantity" type="number" inputmode="numeric" min="1" max="${quantityMax}" step="1" aria-describedby="err-quantity">`,
          )}
        </div>

        ${field(
          'date',
          c.labels.date,
          `<input class="control" id="f-date" name="date" type="date" min="${todayISO()}" aria-describedby="hint-date err-date">`,
          c.hints.date,
        )}

        ${field(
          'message',
          c.labels.message,
          `<textarea class="control control--area" id="f-message" name="message" rows="5" required maxlength="${messageMax}"
            placeholder="${esc(c.placeholders.message)}" aria-describedby="hint-message err-message"></textarea>`,
          c.hints.message,
        )}

        <button class="btn btn--primary btn--block" type="submit">${esc(c.submit)}</button>

        <div class="form__result" data-result role="status" hidden>
          <p class="form__result-title">${esc(c.result.title)}</p>
          <p>${esc(c.result.text)}</p>
          <p><a class="link" data-retry href="#" target="_blank" rel="noopener noreferrer">${esc(c.result.retry)}</a></p>
          <details class="form__preview">
            <summary>${esc(c.result.preview)}</summary>
            <pre data-preview></pre>
          </details>
        </div>
      </form>
    </div>
  </section>`;
}

export function initInquiry() {
  const c = content.inquiry;
  const { messageMin, messageMax, quantityMax } = site.inquiry;
  const form = document.querySelector('[data-form]');
  if (!form) return;

  const el = (name) => form.elements[name];
  const summary = form.querySelector('[data-summary]');
  const result = form.querySelector('[data-result]');
  const touched = new Set();
  let submitted = false;

  const setError = (name, message) => {
    const control = el(name);
    const box = form.querySelector(`#err-${name}`);
    control.setAttribute('aria-invalid', message ? 'true' : 'false');
    form.querySelector(`[data-field="${name}"]`).classList.toggle('has-error', Boolean(message));
    box.textContent = message;
    box.hidden = !message;
  };

  const validators = {
    name: () => (el('name').value.trim() ? '' : c.errors.name),
    product: () => '',
    quantity: () => {
      const raw = el('quantity').value;
      if (raw === '') return '';
      const q = Number(raw);
      return Number.isInteger(q) && q >= 1 && q <= quantityMax ? '' : c.errors.quantity(quantityMax);
    },
    date: () => {
      const value = el('date').value;
      if (!value) return '';
      if (!parseISODate(value)) return c.errors.dateInvalid;
      return value < todayISO() ? c.errors.datePast : '';
    },
    message: () => {
      const len = el('message').value.trim().length;
      if (!len) return c.errors.messageEmpty;
      if (len < messageMin) return c.errors.messageShort(messageMin);
      if (len > messageMax) return c.errors.messageLong(messageMax);
      return '';
    },
  };

  const validate = (name) => {
    const message = validators[name]();
    setError(name, message);
    return message === '';
  };

  form.addEventListener('input', (e) => {
    const name = e.target.name;
    if (!name) return;
    result.hidden = true;
    if (touched.has(name) || submitted) validate(name);
  });
  form.addEventListener('change', (e) => {
    const name = e.target.name;
    if (name && validators[name]) {
      touched.add(name);
      validate(name);
    }
  });
  form.addEventListener('focusout', (e) => {
    const name = e.target.name;
    if (name && validators[name] && (touched.has(name) || el(name).value)) {
      touched.add(name);
      validate(name);
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitted = true;
    result.hidden = true;

    const order = ['name', 'product', 'quantity', 'date', 'message'];
    const invalid = order.filter((name) => !validate(name));
    summary.hidden = invalid.length === 0;
    if (invalid.length) {
      el(invalid[0]).focus();
      return;
    }

    const text = buildWhatsAppMessage({
      name: el('name').value,
      productId: el('product').value,
      quantity: el('quantity').value,
      date: el('date').value,
      message: el('message').value,
    });
    const url = buildWhatsAppUrl(text);

    form.querySelector('[data-retry]').href = url;
    form.querySelector('[data-preview]').textContent = text;
    result.hidden = false;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

/** Ürün penceresindeki "bilgi iste" düğmesi, formdaki ürün seçimini doldurur. */
export function preselectProduct(id) {
  const select = document.getElementById('f-product');
  if (!select || ![...select.options].some((o) => o.value === id)) return;
  select.value = id;
  select.dispatchEvent(new Event('change', { bubbles: true }));
}
