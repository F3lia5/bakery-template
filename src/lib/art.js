/**
 * Fotoğraf olmadığında ya da yüklenemediğinde gösterilen fırın illüstrasyonları.
 * Hepsi satır içi SVG'dir; ağ gerektirmez, filtre/gradyan kullanmaz ve yerleşimi korur.
 * Rastgele görünen ayrıntılar sabit bir tohumla üretilir, yani her derlemede aynıdır.
 * Kâğıt dokusu SVG'de değil, CSS'te (.media__art::after) tek bir döşemeyle verilir.
 *
 * Her ürün, 800x800 alanın ortasındaki yaklaşık 560x560'lık bölgeye çizilir; böylece
 * dikey (4:5) ya da yatay (4:3) kırpmalarda da kesilmez.
 */

const TONES = {
  cream: '#f2e8d5',
  oat: '#e4d2b2',
  blush: '#ead3c8',
  sage: '#d3d6bd',
  burgundy: '#7a2433',
};

const C = {
  crust: '#b9782f',
  crustDark: '#8a5522',
  crustLight: '#d79b4e',
  crumb: '#efd9a8',
  flour: '#fff8ea',
  choc: '#3f2216',
  cream: '#f6ead0',
  ink: '#2b1810',
};

const rng = (seed) => {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
};
const n = (v) => Math.round(v * 10) / 10;
const rad = (deg) => (deg * Math.PI) / 180;

/** Yumuşak, düzensiz yuvarlak form (hamur, kurabiye kenarı...). */
function blob(R, jitter, count, seed) {
  const r = rng(seed);
  const pts = [];
  for (let i = 0; i < count; i += 1) {
    const a = (i / count) * Math.PI * 2;
    const rr = R + (r() - 0.5) * 2 * jitter;
    pts.push([Math.cos(a) * rr, Math.sin(a) * rr]);
  }
  const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const start = mid(pts[count - 1], pts[0]);
  let d = `M${n(start[0])} ${n(start[1])}`;
  for (let i = 0; i < count; i += 1) {
    const m = mid(pts[i], pts[(i + 1) % count]);
    d += ` Q${n(pts[i][0])} ${n(pts[i][1])} ${n(m[0])} ${n(m[1])}`;
  }
  return `${d}Z`;
}

/** Zemine yumuşak gölge: üst üste binen saydam elipsler. */
const shadow = (rx, ry, dy = 0) =>
  [1.0, 0.86, 0.72]
    .map((k, i) => `<ellipse cx="0" cy="${dy + i * 4}" rx="${n(rx * k)}" ry="${n(ry * k)}" fill="${C.ink}" fill-opacity=".09"/>`)
    .join('');

const dots = (count, seed, spread, rMin, rMax, fill, opacity, ratio = 1) => {
  const r = rng(seed);
  let out = '';
  for (let i = 0; i < count; i += 1) {
    const a = r() * Math.PI * 2;
    const d = Math.sqrt(r()) * spread;
    out += `<circle cx="${n(Math.cos(a) * d)}" cy="${n(Math.sin(a) * d * ratio)}" r="${n(rMin + r() * (rMax - rMin))}" fill="${fill}" fill-opacity="${n(opacity * (0.5 + r() * 0.5))}"/>`;
  }
  return out;
};

/* ------------------------------------------------------------------ ürünler */

function boule() {
  const cuts = [-72, 72]
    .map((k) => `<path d="M${k} -168 Q${k + 16} 0 ${k} 168" fill="none" stroke="${C.crumb}" stroke-width="20" stroke-linecap="round"/>
      <path d="M${k + 7} -158 Q${k + 22} 0 ${k + 7} 158" fill="none" stroke="#fff3d6" stroke-opacity=".7" stroke-width="4" stroke-linecap="round"/>`)
    .join('');
  const cuts2 = [-72, 72]
    .map((k) => `<path d="M-168 ${k} Q0 ${k - 16} 168 ${k}" fill="none" stroke="${C.crumb}" stroke-width="20" stroke-linecap="round"/>
      <path d="M-158 ${k + 7} Q0 ${k - 9} 158 ${k + 7}" fill="none" stroke="#fff3d6" stroke-opacity=".7" stroke-width="4" stroke-linecap="round"/>`)
    .join('');
  return `${shadow(250, 40, 200)}
    <ellipse rx="252" ry="234" fill="${C.crustDark}"/>
    <ellipse rx="240" ry="222" fill="${C.crust}"/>
    <ellipse cx="-6" cy="-12" rx="212" ry="190" fill="${C.crustLight}" fill-opacity=".55"/>
    ${cuts}${cuts2}
    ${dots(90, 4, 215, 1, 2.8, C.flour, 0.8, 0.9)}`;
}

function rye() {
  const r = rng(12);
  let seeds = '';
  for (let i = 0; i < 70; i += 1) {
    const x = (r() - 0.5) * 520;
    const y = (r() - 0.5) * 240;
    if ((x * x) / 270 ** 2 + (y * y) / 128 ** 2 > 1) continue;
    seeds += `<ellipse cx="${n(x)}" cy="${n(y)}" rx="${n(4 + r() * 3)}" ry="${n(1.6 + r())}" transform="rotate(${n(r() * 180)} ${n(x)} ${n(y)})" fill="#2d1a0d" fill-opacity=".7"/>`;
  }
  const cuts = [-190, -95, 0, 95, 190]
    .map((x) => `<path d="M${x - 26} -70 Q${x} -10 ${x + 26} 70" fill="none" stroke="#caa26b" stroke-width="16" stroke-linecap="round"/>`)
    .join('');
  return `<g transform="rotate(-14)">
    ${shadow(290, 38, 160)}
    <rect x="-300" y="-150" width="600" height="300" rx="150" fill="#5e3818"/>
    <rect x="-288" y="-138" width="576" height="276" rx="138" fill="#7a4a22"/>
    <rect x="-262" y="-126" width="524" height="210" rx="105" fill="#93602c" fill-opacity=".6"/>
    ${cuts}${seeds}
    ${dots(80, 8, 250, 1, 2.4, C.flour, 0.7, 0.45)}
  </g>`;
}

function baguette() {
  const one = (y, rot, seed) => {
    const slashes = [-210, -105, 0, 105, 210]
      .map((x) => `<ellipse cx="${x}" cy="-2" rx="46" ry="10" transform="rotate(-24 ${x} -2)" fill="${C.crumb}"/>
        <ellipse cx="${x - 4}" cy="-6" rx="36" ry="3" transform="rotate(-24 ${x} -2)" fill="#fff3d6" fill-opacity=".7"/>`)
      .join('');
    return `<g transform="translate(0 ${y}) rotate(${rot})">
      <rect x="-300" y="-42" width="600" height="84" rx="42" fill="${C.crustDark}"/>
      <rect x="-294" y="-37" width="588" height="74" rx="37" fill="${C.crust}"/>
      <rect x="-270" y="-34" width="540" height="30" rx="15" fill="${C.crustLight}" fill-opacity=".6"/>
      ${slashes}
      <g transform="scale(1 .16)">${dots(26, seed, 270, 3, 6, C.flour, 0.7)}</g>
    </g>`;
  };
  return `${shadow(300, 36, 170)}${one(-120, -9, 3)}${one(0, -5, 4)}${one(120, -1, 5)}`;
}

function croissant() {
  // Hilal biçimli kruvasan: ortada en büyük, uçlara doğru küçülen ve aşağı kıvrılan parçalar.
  let segs = '';
  const order = [-3, 3, -2, 2, -1, 1, 0];
  order.forEach((t) => {
    const a = Math.abs(t);
    const x = t * 86;
    const y = t * t * 15 - 40;
    const ry = 128 - a * 24;
    const rx = 70 - a * 5;
    const rot = t * 21;
    segs += `<g transform="translate(${x} ${n(y)}) rotate(${rot})">
      <ellipse rx="${rx}" ry="${ry}" fill="#8f531c"/>
      <ellipse rx="${rx - 6}" ry="${ry - 6}" fill="#c88434"/>
      <ellipse cx="-5" cy="-${n(ry * 0.2)}" rx="${n((rx - 6) * 0.7)}" ry="${n((ry - 6) * 0.66)}" fill="#e2ad5c" fill-opacity=".9"/>
      ${[-0.55, -0.15, 0.25, 0.62]
        .map((k) => `<path d="M${-rx + 12} ${n(ry * k)} Q0 ${n(ry * k - 20)} ${rx - 12} ${n(ry * k)}" fill="none" stroke="#9a5a1f" stroke-opacity=".6" stroke-width="3.4" stroke-linecap="round"/>`)
        .join('')}
      <ellipse cx="${-rx * 0.3}" cy="${-ry * 0.55}" rx="${n(rx * 0.3)}" ry="6" fill="#fff0c8" fill-opacity=".6"/>
    </g>`;
  });
  return `${shadow(300, 56, 150)}<g transform="translate(0 -30)">${segs}</g>`;
}

function chocolat() {
  const lines = [-80, -48, -16, 16, 48, 80]
    .map((y) => `<path d="M-150 ${y} Q0 ${y - 12} 150 ${y}" fill="none" stroke="#a8692a" stroke-opacity=".6" stroke-width="4" stroke-linecap="round"/>`)
    .join('');
  return `<g transform="rotate(-12)">
    ${shadow(250, 40, 130)}
    <rect x="-250" y="-120" width="500" height="240" rx="96" fill="#8f561f"/>
    <rect x="-240" y="-110" width="480" height="220" rx="88" fill="#c58333"/>
    <rect x="-210" y="-98" width="420" height="120" rx="60" fill="#e0aa5a" fill-opacity=".7"/>
    ${lines}
    <rect x="-262" y="-52" width="34" height="104" rx="17" fill="${C.choc}"/>
    <rect x="228" y="-52" width="34" height="104" rx="17" fill="${C.choc}"/>
    <rect x="-258" y="-48" width="10" height="60" rx="5" fill="#6b3b22" fill-opacity=".8"/>
    <rect x="236" y="-48" width="10" height="60" rx="5" fill="#6b3b22" fill-opacity=".8"/>
    ${dots(40, 15, 200, 1, 2.4, C.flour, 0.7, 0.5)}
  </g>`;
}

function roll() {
  let spiral = '';
  let spiral2 = '';
  const pts = [];
  const pts2 = [];
  for (let t = 0; t <= Math.PI * 7.2; t += 0.12) {
    const rr = 10 + t * 8.6;
    pts.push(`${n(Math.cos(t) * rr)},${n(Math.sin(t) * rr)}`);
    pts2.push(`${n(Math.cos(t + 0.35) * (rr + 9))},${n(Math.sin(t + 0.35) * (rr + 9))}`);
  }
  spiral = `<polyline points="${pts.join(' ')}" fill="none" stroke="#8a4b26" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>`;
  spiral2 = `<polyline points="${pts2.join(' ')}" fill="none" stroke="#e8c37e" stroke-opacity=".7" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`;
  return `${shadow(250, 40, 205)}
    <circle r="244" fill="#b57a38"/>
    <circle r="232" fill="#dcab62"/>
    ${spiral2}${spiral}
    <path d="M60 -170 Q120 -120 90 -60 Q150 -70 175 -120 Q150 -190 60 -170Z" fill="#fff8ea" fill-opacity=".6"/>
    ${dots(50, 22, 215, 1, 2.2, C.flour, 0.7)}`;
}

function cookieBase(seedBlob) {
  return `${shadow(245, 40, 205)}
    <path d="${blob(238, 11, 34, seedBlob)}" fill="#9a6226"/>
    <path d="${blob(224, 10, 34, seedBlob + 1)}" fill="#c58a44"/>
    <path d="${blob(196, 12, 30, seedBlob + 2)}" fill="#d9a35b" fill-opacity=".7"/>`;
}

function cookie() {
  const r = rng(31);
  let chips = '';
  const spots = [[-110, -90], [20, -140], [120, -60], [-150, 20], [-30, -20], [90, 60], [-90, 120], [30, 140], [150, 110], [-170, -50], [60, -20], [-10, 80]];
  spots.forEach(([x, y]) => {
    const s = 20 + r() * 24;
    const a = r() * 360;
    chips += `<g transform="translate(${x} ${y}) rotate(${n(a)})">
      <polygon points="${-s},${-s * 0.5} ${-s * 0.1},${-s * 0.9} ${s},${-s * 0.4} ${s * 0.8},${s * 0.7} ${-s * 0.4},${s * 0.8}" fill="${C.choc}"/>
      <polygon points="${-s * 0.6},${-s * 0.3} ${-s * 0.05},${-s * 0.6} ${s * 0.5},${-s * 0.25}" fill="#6b3b22" fill-opacity=".9"/>
    </g>`;
  });
  const cracks = [[-120, -140, -60, -100], [100, 90, 160, 40], [-180, 80, -120, 110], [40, 20, 80, -20]]
    .map(([a, b, c, d]) => `<path d="M${a} ${b} L${c} ${d}" stroke="#ecc486" stroke-width="4" stroke-linecap="round"/>`)
    .join('');
  return `${cookieBase(40)}${cracks}${chips}`;
}

function cookieSalt() {
  const r = rng(52);
  let flakes = '';
  for (let i = 0; i < 26; i += 1) {
    const a = r() * Math.PI * 2;
    const d = Math.sqrt(r()) * 180;
    const w = 7 + r() * 9;
    flakes += `<rect x="${n(Math.cos(a) * d)}" y="${n(Math.sin(a) * d)}" width="${n(w)}" height="${n(w * 0.7)}" rx="1.5" transform="rotate(${n(r() * 180)} ${n(Math.cos(a) * d)} ${n(Math.sin(a) * d)})" fill="#fffaf0"/>`;
  }
  const swirls = [-90, -20, 55, 120]
    .map((y, i) => `<path d="M-170 ${y} C-90 ${y - 50 + i * 8} -20 ${y + 50} 60 ${y - 10} S150 ${y + 40} 178 ${y - 18}" fill="none" stroke="#a8561b" stroke-opacity=".85" stroke-width="14" stroke-linecap="round"/>
      <path d="M-165 ${y - 4} C-90 ${y - 54 + i * 8} -20 ${y + 46} 60 ${y - 14}" fill="none" stroke="#e29a52" stroke-opacity=".7" stroke-width="4" stroke-linecap="round"/>`)
    .join('');
  return `${cookieBase(60)}${swirls}${flakes}`;
}

function cheesecake() {
  const r = rng(71);
  let pores = '';
  for (let i = 0; i < 40; i += 1) {
    pores += `<circle cx="${n(-150 + r() * 300)}" cy="${n(-30 + r() * 190)}" r="${n(1.5 + r() * 3)}" fill="#c9a46a" fill-opacity=".55"/>`;
  }
  return `<ellipse cx="0" cy="190" rx="318" ry="52" fill="${C.ink}" fill-opacity=".08"/>
    <ellipse cx="0" cy="176" rx="300" ry="48" fill="#fbf6ec"/>
    <ellipse cx="0" cy="170" rx="262" ry="34" fill="#efe5d1"/>
    <path d="M-176 170 L-146 -120 Q0 -150 146 -120 L176 170 Q0 196 -176 170Z" fill="#f1dfb5"/>
    <path d="M60 -128 L146 -120 L176 170 Q110 184 56 186Z" fill="#dcc28c" fill-opacity=".55"/>
    ${pores}
    <path d="M-150 -118 Q0 -158 150 -118 L158 -52 Q130 -30 100 -52 Q70 -28 40 -48 Q0 -22 -40 -50 Q-80 -26 -110 -52 Q-140 -30 -160 -50Z" fill="#5b3017"/>
    <path d="M-120 -110 Q0 -140 118 -112" fill="none" stroke="#8b5329" stroke-width="10" stroke-linecap="round" stroke-opacity=".8"/>
    <path d="M-176 170 L-146 -120" stroke="#8b5329" stroke-width="10" stroke-linecap="round" stroke-opacity=".55"/>`;
}

function carrot() {
  const r = rng(81);
  let flecks = '';
  for (let i = 0; i < 46; i += 1) {
    flecks += `<ellipse cx="${n(-170 + r() * 340)}" cy="${n(-20 + r() * 190)}" rx="${n(3 + r() * 4)}" ry="${n(1.6 + r() * 1.2)}" transform="rotate(${n(r() * 180)} 0 0)" fill="#e5902f" fill-opacity=".8"/>`;
  }
  let nuts = '';
  [[-120, -118], [-40, -128], [40, -120], [120, -114], [-80, -96], [80, -98]].forEach(([x, y]) => {
    nuts += `<polygon points="${x - 18},${y} ${x - 4},${y - 14} ${x + 16},${y - 6} ${x + 12},${y + 10} ${x - 8},${y + 12}" fill="#9a6a3a"/>`;
  });
  return `<ellipse cx="0" cy="196" rx="310" ry="48" fill="${C.ink}" fill-opacity=".08"/>
    <ellipse cx="0" cy="182" rx="292" ry="44" fill="#fbf6ec"/>
    <rect x="-190" y="-80" width="380" height="262" rx="20" fill="#c4823f"/>
    <rect x="-190" y="-10" width="380" height="36" fill="#f6ecd5"/>
    <rect x="-190" y="84" width="380" height="36" fill="#f6ecd5"/>
    <rect x="-190" y="-80" width="380" height="262" rx="20" fill="none" stroke="#9b6129" stroke-width="4"/>
    ${flecks}
    <path d="M-206 -86 Q-206 -158 -120 -146 Q-60 -176 0 -150 Q70 -178 120 -146 Q206 -158 206 -86 Q206 -62 190 -60 L-190 -60 Q-206 -62 -206 -86Z" fill="#fbf2dc"/>
    <path d="M-150 -118 Q-90 -136 -30 -118 M10 -122 Q70 -140 130 -118" fill="none" stroke="#e6d5ad" stroke-width="6" stroke-linecap="round"/>
    ${nuts}`;
}

function tart(filling = '#f2cb45', hilite = '#fff2a8') {
  let flutes = '';
  for (let i = 0; i < 32; i += 1) {
    const a = (i / 32) * Math.PI * 2;
    flutes += `<circle cx="${n(Math.cos(a) * 232)}" cy="${n(Math.sin(a) * 232)}" r="26" fill="#d7a360" stroke="#b57c3a" stroke-width="3"/>`;
  }
  return `${shadow(262, 42, 215)}${flutes}
    <circle r="226" fill="#d7a360"/>
    <circle r="206" fill="#c98f4a"/>
    <circle r="192" fill="${filling}"/>
    <path d="M-120 -90 A150 150 0 0 1 20 -150" fill="none" stroke="${hilite}" stroke-width="12" stroke-linecap="round" stroke-opacity=".75"/>
    ${dots(28, 91, 150, 1.5, 3.4, '#fff8d6', 0.9)}`;
}

function chestnut() {
  const r = rng(95);
  let strands = '';
  for (let i = 0; i < 44; i += 1) {
    const a = r() * Math.PI * 2;
    const d = r() * 150;
    const x = Math.cos(a) * d;
    const y = Math.sin(a) * d;
    const len = 50 + r() * 70;
    const b = r() * Math.PI * 2;
    strands += `<path d="M${n(x)} ${n(y)} q${n(Math.cos(b) * len * 0.5)} ${n(Math.sin(b) * len * 0.5 - 20)} ${n(Math.cos(b) * len)} ${n(Math.sin(b) * len)}" fill="none" stroke="${i % 3 ? '#a8703f' : '#5b361f'}" stroke-width="7" stroke-linecap="round" stroke-opacity=".9"/>`;
  }
  return `${tart('#7a4b2d', '#c28a5a')}${strands}${dots(40, 96, 190, 1, 2.2, C.flour, 0.55)}`;
}

function galette() {
  const ring = (count, radius, rx, ry, offset, seed) => {
    const r = rng(seed);
    let out = '';
    for (let i = 0; i < count; i += 1) {
      const a = (i / count) * 360 + offset;
      const x = Math.cos(rad(a)) * radius;
      const y = Math.sin(rad(a)) * radius;
      out += `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(a + 90 + (r() - 0.5) * 10)})">
        <ellipse rx="${rx}" ry="${ry}" fill="#f4e2ac" stroke="#c98a3d" stroke-width="3"/>
        <path d="M${-rx + 6} ${-ry * 0.2} Q0 ${-ry * 0.8} ${rx - 6} ${-ry * 0.2}" fill="none" stroke="#c2523a" stroke-opacity=".7" stroke-width="3" stroke-linecap="round"/>
      </g>`;
    }
    return out;
  };
  const folds = Array.from({ length: 14 }, (_, i) => {
    const a = (i / 14) * 360;
    return `<path d="M${n(Math.cos(rad(a)) * 190)} ${n(Math.sin(rad(a)) * 190)} L${n(Math.cos(rad(a + 6)) * 244)} ${n(Math.sin(rad(a + 6)) * 244)}" stroke="#a56a2b" stroke-opacity=".6" stroke-width="3" stroke-linecap="round"/>`;
  }).join('');
  return `${shadow(262, 42, 215)}
    <path d="${blob(252, 14, 16, 120)}" fill="#a56a2b"/>
    <path d="${blob(240, 12, 16, 121)}" fill="#d7a45c"/>
    ${folds}
    <circle r="178" fill="#e3b777"/>
    ${ring(14, 138, 44, 20, 0, 3)}${ring(9, 84, 36, 17, 18, 5)}${ring(5, 34, 28, 14, 30, 7)}
    ${dots(60, 124, 200, 1, 2.4, '#fff3d6', 0.7)}
    <path d="M-100 -140 Q0 -190 110 -140" fill="none" stroke="#fff3d6" stroke-opacity=".6" stroke-width="7" stroke-linecap="round"/>`;
}

function loafcake() {
  const orange = (x, y) => `<g transform="translate(${x} ${y})">
    <circle r="68" fill="#d4701b"/><circle r="60" fill="#f1a449"/>
    ${[0, 45, 90, 135].map((a) => `<line x1="-56" y1="0" x2="56" y2="0" stroke="#fff0cf" stroke-width="4" transform="rotate(${a})"/>`).join('')}
    <circle r="9" fill="#fff0cf"/>
  </g>`;
  return `<g transform="rotate(-8)">
    ${shadow(300, 44, 150)}
    <rect x="-290" y="-132" width="580" height="264" rx="66" fill="#2c180f"/>
    <rect x="-278" y="-122" width="556" height="244" rx="58" fill="#4a291b"/>
    <path d="M-250 -96 Q0 -132 250 -96" fill="none" stroke="#7a4a30" stroke-width="12" stroke-linecap="round" stroke-opacity=".8"/>
    <path d="M-262 40 Q-230 90 -190 60 Q-150 110 -110 70" fill="none" stroke="#7a4a30" stroke-opacity=".5" stroke-width="8" stroke-linecap="round"/>
    ${orange(-150, 0)}${orange(0, -6)}${orange(150, 4)}
    ${dots(40, 130, 240, 1, 2.2, '#f1a449', 0.7, 0.4)}
  </g>`;
}

/* ------------------------------------------------------------------ sahneler */

/** Hero: keten örtülü tezgâhta ekmek, baget ve kruvasan (800x1000). */
function heroScene() {
  const stripes = [60, 150, 240].map((x) => `<rect x="${x}" y="0" width="14" height="1000" fill="#e3d4b6" fill-opacity=".7"/>`).join('');
  const grain = Array.from({ length: 16 }, (_, i) => `<path d="M70 ${250 + i * 38} Q400 ${236 + i * 38 + (i % 3) * 6} 730 ${252 + i * 38}" fill="none" stroke="#9c6b3f" stroke-opacity=".28" stroke-width="2"/>`).join('');
  return `
    <rect width="800" height="1000" fill="#efe3cb"/>
    <g transform="translate(560 0)">${stripes}</g>
    <g transform="rotate(-4 400 560)">
      <rect x="40" y="210" width="720" height="640" rx="14" fill="#a47445"/>
      <rect x="40" y="210" width="720" height="640" rx="14" fill="#b98a58"/>
      ${grain}
      <rect x="40" y="842" width="720" height="14" rx="7" fill="#7c5430" fill-opacity=".5"/>
    </g>
    <g transform="translate(400 330) scale(.64) rotate(8)">${baguette()}</g>
    <g transform="translate(300 650) scale(.78)">${boule()}</g>
    <g transform="translate(590 740) scale(.42) rotate(-6)">${croissant()}</g>
    <g transform="translate(610 560) scale(.26)">${cookie()}</g>
    ${dots(90, 77, 330, 1, 2.4, C.flour, 0.55).replace(/<circle cx="(-?[\d.]+)" cy="(-?[\d.]+)"/g, (_, x, y) => `<circle cx="${n(400 + Number(x))}" cy="${n(560 + Number(y) * 1.3)}"`)}`;
}

/** Hikâye: ahşap raflarda ekmekler (800x1000). */
function shelfScene() {
  const board = (y) => `<rect x="40" y="${y}" width="720" height="28" fill="#8d5f35"/><rect x="40" y="${y + 28}" width="720" height="10" fill="${C.ink}" fill-opacity=".14"/>`;
  const dome = (x, y, w, h, seed) => {
    const r = rng(seed);
    const cuts = [-0.35, 0, 0.35]
      .map((k) => `<path d="M${n(x + k * w * 0.5 - 16)} ${n(y - h * 0.8)} q10 ${n(h * 0.35)} 22 ${n(h * 0.66)}" stroke="${C.crumb}" stroke-width="10" stroke-linecap="round" fill="none"/>`)
      .join('');
    let fl = '';
    for (let i = 0; i < 16; i += 1) fl += `<circle cx="${n(x + (r() - 0.5) * w * 0.8)}" cy="${n(y - r() * h * 0.8)}" r="${n(1 + r() * 1.6)}" fill="${C.flour}" fill-opacity=".7"/>`;
    return `<path d="M${x - w / 2} ${y} Q${x - w / 2} ${y - h * 1.25} ${x} ${y - h * 1.25} Q${x + w / 2} ${y - h * 1.25} ${x + w / 2} ${y}Z" fill="${C.crustDark}"/>
      <path d="M${x - w / 2 + 8} ${y} Q${x - w / 2 + 8} ${y - h * 1.12} ${x} ${y - h * 1.12} Q${x + w / 2 - 8} ${y - h * 1.12} ${x + w / 2 - 8} ${y}Z" fill="${C.crust}"/>${cuts}${fl}`;
  };
  const stick = (x, y, rot) => `<g transform="translate(${x} ${y}) rotate(${rot})"><rect x="-26" y="-250" width="52" height="250" rx="26" fill="${C.crustDark}"/><rect x="-21" y="-244" width="42" height="238" rx="21" fill="${C.crust}"/>${[-200, -140, -80].map((yy) => `<ellipse cx="0" cy="${yy}" rx="22" ry="6" transform="rotate(20 0 ${yy})" fill="${C.crumb}"/>`).join('')}</g>`;
  return `
    <rect width="800" height="1000" fill="#e4d2b2"/>
    <rect x="40" y="60" width="26" height="880" fill="#7c5430"/><rect x="734" y="60" width="26" height="880" fill="#7c5430"/>
    ${board(300)}${board(600)}${board(900)}
    ${stick(150, 300, -5)}${stick(214, 300, 1)}${stick(278, 300, 6)}${dome(500, 300, 190, 120, 3)}${dome(668, 300, 120, 80, 4)}
    ${dome(170, 600, 220, 130, 5)}${dome(400, 600, 200, 118, 6)}${dome(610, 600, 170, 100, 7)}
    ${dome(200, 900, 130, 90, 8)}${dome(350, 900, 150, 96, 9)}${stick(520, 900, -4)}${stick(584, 900, 2)}${stick(648, 900, 7)}`;
}

function map() {
  return `
    <rect width="1000" height="700" fill="#ecdfc6"/>
    <rect x="70" y="80" width="250" height="170" fill="#d5d6b4"/>
    <rect x="640" y="420" width="290" height="190" fill="#d5d6b4"/>
    <g fill="none" stroke="#fbf4e4" stroke-linecap="round">
      <path d="M-10 330 H1010" stroke-width="22"/><path d="M480 -10 V710" stroke-width="22"/>
      <path d="M-10 120 L1010 200" stroke-width="12"/><path d="M200 -10 L260 710" stroke-width="12"/>
      <path d="M760 -10 L720 710" stroke-width="12"/><path d="M-10 540 H1010" stroke-width="10"/>
    </g>
    <g transform="translate(480 330)">
      <ellipse cx="0" cy="4" rx="20" ry="6" fill="${C.ink}" fill-opacity=".25"/>
      <path d="M0 0 C-22 -26 -34 -44 -34 -60 A34 34 0 0 1 34 -60 C34 -44 22 -26 0 0Z" fill="#6e1f2b"/>
      <circle cx="0" cy="-60" r="12" fill="#f8f2e7"/>
    </g>`;
}

/* ------------------------------------------------------------------ dışa aktarım */

const wrap = (body, tone, vb = '0 0 800 800') =>
  `<svg viewBox="${vb}" preserveAspectRatio="xMidYMid slice" focusable="false" aria-hidden="true">
    <rect width="100%" height="100%" fill="${TONES[tone] || TONES.cream}"/>${body}</svg>`;

/** Ürün çizimini ortalar ve ölçekler (800x800 alan). */
const centered = (inner, scale = 1) => `<g transform="translate(400 400) scale(${scale})">${inner}</g>`;

/** art anahtarı → (ton) => SVG. images.js içindeki `art` alanı bu anahtarları kullanır. */
export const arts = {
  boule: (t) => wrap(centered(boule(), 1.0), t),
  rye: (t) => wrap(centered(rye(), 1.0), t),
  baguette: (t) => wrap(centered(baguette(), 0.98), t),
  croissant: (t) => wrap(centered(croissant(), 1.0), t),
  chocolat: (t) => wrap(centered(chocolat(), 1.05), t),
  roll: (t) => wrap(centered(roll(), 1.0), t),
  cookie: (t) => wrap(centered(cookie(), 1.0), t),
  cookieSalt: (t) => wrap(centered(cookieSalt(), 1.0), t),
  cheesecake: (t) => wrap(centered(cheesecake(), 1.0), t),
  carrot: (t) => wrap(centered(carrot(), 1.0), t),
  tart: (t) => wrap(centered(tart(), 1.0), t),
  chestnut: (t) => wrap(centered(chestnut(), 1.0), t),
  galette: (t) => wrap(centered(galette(), 1.0), t),
  loafcake: (t) => wrap(centered(loafcake(), 1.0), t),
  hero: (t) => wrap(heroScene(), t, '0 0 800 1000'),
  shelf: (t) => wrap(shelfScene(), t, '0 0 800 1000'),
  map: (t) => wrap(map(), t, '0 0 1000 700'),
};
