(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={brand:{name:`FIRIN NO. 8`,mark:`8`},locale:`tr-TR`,currency:`TRY`,timezone:`Europe/Istanbul`,seo:{title:`FIRIN NO. 8 | Butik fırın, pastane ve el yapımı ekmek`,description:`FIRIN NO. 8: her gün sıfırdan hazırlanan ekmek, kruvasan, pasta ve kurabiyeler. Demo şablon. Ürünlere göz atın, WhatsApp ile bilgi isteyin.`,ogImage:``},whatsapp:{phone:`905550000000`,greeting:`Merhaba, FIRIN NO. 8 için ürün hakkında bilgi almak istiyorum.`,baseUrl:`https://wa.me/`},contact:{phoneDisplay:`+90 555 000 00 00`,phoneHref:`tel:+905550000000`,email:``},location:{isDemo:!0,addressLines:[`Örnek Mahallesi, Örnek Sokak No: 8`,`Merkez, İstanbul`],mapsUrl:`https://www.google.com/maps/search/?api=1&query=%C4%B0stanbul`},hours:[{label:`Salı – Cuma`,days:[2,3,4,5],open:`07:00`,close:`19:00`},{label:`Cumartesi – Pazar`,days:[6,0],open:`08:00`,close:`18:00`},{label:`Pazartesi`,days:[1],open:``,close:``}],social:[{name:`Instagram`,url:`https://www.instagram.com/`,handle:`Hesap adı eklenecek`},{name:`Facebook`,url:`https://www.facebook.com/`,handle:`Sayfa adı eklenecek`}],inquiry:{quantityMax:99,messageMin:5,messageMax:600}},t={nav:{products:`Ürünler`,story:`Hikâyemiz`,process:`Üretim`,contact:`İletişim`,cta:`Sipariş Talebi`},hero:{titleLines:[`Her gün sıfırdan,`,`her sabah taze.`],lead:`FIRIN NO. 8'de hamurlar bir gün önceden hazırlanır, sabah erkenden fırına verilir. Ekmek, kruvasan, pasta ve kurabiyeler pişer pişmez tezgâha çıkar.`,primaryCta:`Ürünleri Keşfet`,secondaryCta:`Sipariş Talebi`,caption:`Tereyağlı kruvasan`},featured:{title:`Bu haftanın seçkisi`,intro:`Fırından bu hafta öne çıkan beş ürün.`,allCta:`Tüm ürünleri gör`},catalog:{title:`Ürünler`,intro:`Kategoriye göre süzün, bir ürüne dokunup ayrıntılarını görün.`,all:`Tümü`,filterLabel:`Ürün kategorileri`,count:e=>`${e} ürün`,emptyTitle:`Bu kategoride şu an ürün yok.`,emptyText:`Başka bir kategoriye göz atabilirsiniz.`,emptyAction:`Tüm ürünleri göster`,note:`Fiyatlar ve ürün bilgileri demo amaçlıdır.`,open:`Ayrıntıları gör`},process:{title:`Üretim`,intro:`Bir günün akışı: hamurdan tezgâha.`,steps:[{time:`Akşam`,title:`Malzeme tartılır`,text:`Ertesi günün üretimi için un, tereyağı ve diğer malzemeler tartılır, hamurlar yoğrulur.`},{time:`Gece`,title:`Hamur dinlenir`,text:`Hamurlar serin ortamda uzun süre mayalanır. Bu aşama acele edilmeyen, zamana bırakılan bir iştir.`},{time:`Sabaha karşı`,title:`Şekil verilir, pişer`,text:`Hamurlar şekillendirilir ve fırına verilir. Pişme süreleri ürün ürün takip edilir.`},{time:`Gün boyu`,title:`Tezgâha çıkar`,text:`Ürünler hazır oldukça tezgâha dizilir. Üretim günlük planlanır; tükenen bir ürün aynı gün yeniden hazırlanmayabilir.`}],note:`Süreç anlatımı demo içeriktir.`},story:{title:`Hamurun sabrına saygı`,lead:`FIRIN NO. 8, küçük bir tezgâhta, az ürünle ve yavaş bir tempoyla çalışan kurgusal bir mahalle fırınıdır.`,paragraphs:[`Ekmeklerde reçeteyi sade tutarız: un, su, tuz, maya ve zaman. Tatlılarda ise mevsime uygun meyve ve kuruyemişleri kullanırız.`,`Amacımız çok değil, iyi yapmak. Bu yüzden menü kısa, tezgâh küçük, her sabah aynı özenle başlar.`],motto:`Az ürün, tam dikkat.`,demo:`Bu metin demo içeriktir; gerçek bir işletmeyi tanımlamaz.`},seasonal:{title:`Mevsimin seçkisi`,season:`Sonbahar – Kış`,intro:`Mevsim değiştikçe tezgâhımız da değişir. Bu ürünler stok ve tarihe göre rafta olmayabilir.`,cta:`Ayrıntıları gör`},visit:{title:`Bizi ziyaret edin`,intro:`Hafta içi sabah erken açıyoruz. İlk çıkan ekmekler için erken gelmenizi öneririz.`,phone:`Telefon`,address:`Adres`,hours:`Çalışma saatleri`,closed:`Kapalı`,directions:`Yol Tarifi Al`,mapLabel:`Google Haritalar'da aç`,mapNote:`Harita çizimi örnektir. Gerçek adres eklendiğinde bağlantı güncellenir.`,demoNotice:`Demo adres ve telefon: gerçek bir işletmeyi göstermez.`},inquiry:{title:`Ürün hakkında soru sorun`,intro:`Formu doldurun, WhatsApp mesajınız hazırlansın. Bu bir sipariş değildir; fırın uygunluk ve fiyat için size dönüş yapar.`,submit:`WhatsApp ile Gönder`,labels:{name:`Adınız`,product:`İlgilendiğiniz ürün (isteğe bağlı)`,quantity:`Adet (isteğe bağlı)`,date:`İstediğiniz tarih (isteğe bağlı)`,message:`Mesajınız`},placeholders:{product:`Ürün seçmeden de yazabilirsiniz`,message:`Sorunuzu veya isteğinizi yazın. Örneğin: Hafta sonu için 10 kişilik bir tart mümkün mü?`},hints:{message:`En az 5, en fazla 600 karakter.`,date:`Tarih yalnızca tercihtir; uygunluk fırın tarafından bildirilir.`},result:{title:`Mesajınız hazırlandı`,text:`WhatsApp yeni sekmede açıldı. Talebin iletilmesi için mesajı orada göndermeniz gerekir. Bu bir sipariş onayı değildir; fırın yanıt verene kadar hiçbir ürün ayrılmış sayılmaz.`,retry:`WhatsApp açılmadıysa buraya tıklayın`,preview:`Gönderilecek mesajı göster`},errors:{name:`Lütfen adınızı yazın.`,messageEmpty:`Lütfen mesajınızı yazın.`,messageShort:e=>`Mesaj en az ${e} karakter olmalı.`,messageLong:e=>`Mesaj en fazla ${e} karakter olabilir.`,quantity:e=>`Adet 1 ile ${e} arasında olmalı.`,datePast:`Geçmiş bir tarih seçilemez.`,dateInvalid:`Lütfen geçerli bir tarih girin.`,summary:`Formda eksik veya hatalı alanlar var. Lütfen işaretli alanları düzeltin.`},message:{name:`Ad`,product:`Ürün`,price:`Demo fiyat`,quantity:`Adet`,date:`İstenen tarih`,message:`Mesaj`,closing:`Bu bir sipariş değil, bilgi talebidir. Uygunluk ve fiyat için dönüş yaparsanız teşekkür ederim.`}},product:{close:`Ürün penceresini kapat`,category:`Kategori`,ingredients:`İçindekiler`,allergens:`Alerjen bilgisi`,demoPrice:`Demo fiyat`,ask:`Bu ürün hakkında bilgi iste`},footer:{blurb:`Her gün sıfırdan hazırlanan ekmek ve pastalar için kurgusal bir butik fırın şablonu.`,legal:`Bu site bir demo şablondur. Marka, adres, telefon, ürünler ve fiyatlar kurgusaldır.`,social:`Sosyal medya`,socialNote:`Hesaplar yer tutucudur.`}},n=[{id:`ekmek`,label:`Ekmek`},{id:`viennoiserie`,label:`Viennoiserie`},{id:`pasta`,label:`Pasta ve Kek`},{id:`kurabiye`,label:`Kurabiye`},{id:`sezonluk`,label:`Sezonluk`}],r=[`kruvasan`,`koy-ekmegi`,`san-sebastian`,`cikolatali-kurabiye`,`limonlu-tart`],i=[{id:`koy-ekmegi`,name:`Köy Ekmeği`,category:`ekmek`,description:`Kalın, çıtır kabuklu ve yumuşak iç yapılı, uzun mayalanmış ekmek.`,price:95,unit:`somun`,ingredients:`Buğday unu, su, tuz, doğal maya.`,allergens:[`Gluten`]},{id:`cavdarli-ekmek`,name:`Çavdarlı Ekmek`,category:`ekmek`,description:`Çavdar unuyla yoğrulan, koyu kabuklu ve doyurucu somun.`,price:110,unit:`somun`,ingredients:`Çavdar unu, buğday unu, su, tuz, maya, karakimyon.`,allergens:[`Gluten`]},{id:`baget`,name:`Baget`,category:`ekmek`,description:`İnce ve çıtır, gün içinde tazelenen klasik uzun ekmek.`,price:45,unit:`adet`,ingredients:`Buğday unu, su, tuz, maya.`,allergens:[`Gluten`]},{id:`kruvasan`,name:`Tereyağlı Kruvasan`,category:`viennoiserie`,description:`Kat kat açılan, tereyağı kokulu ve çıtır dış yüzlü kruvasan.`,price:85,unit:`adet`,ingredients:`Buğday unu, tereyağı, süt, yumurta, şeker, maya, tuz.`,allergens:[`Gluten`,`Süt`,`Yumurta`]},{id:`pain-au-chocolat`,name:`Pain au Chocolat`,category:`viennoiserie`,description:`İçinde bitter çikolata şeritleri olan tereyağlı hamur.`,price:95,unit:`adet`,ingredients:`Buğday unu, tereyağı, bitter çikolata, süt, yumurta, şeker, maya, tuz.`,allergens:[`Gluten`,`Süt`,`Yumurta`,`Soya`]},{id:`kanelli-rulo`,name:`Kanelli Rulo`,category:`viennoiserie`,description:`Tarçınlı şeker dolgusu ve hafif glazürle servis edilen yumuşak rulo.`,price:90,unit:`adet`,allergens:[`Gluten`,`Süt`,`Yumurta`]},{id:`san-sebastian`,name:`San Sebastian Cheesecake`,category:`pasta`,description:`Üstü karamelize, içi kremamsı, hafif tuzlu dilim.`,price:195,unit:`dilim`,ingredients:`Krem peynir, krema, yumurta, şeker, az miktarda un, tuz.`,allergens:[`Süt`,`Yumurta`,`Gluten`]},{id:`havuclu-kek`,name:`Havuçlu Cevizli Kek`,category:`pasta`,description:`Baharatlı, nemli kek ve üzerinde labneli krema.`,price:140,unit:`dilim`,allergens:[`Gluten`,`Süt`,`Yumurta`,`Kuruyemiş (ceviz)`]},{id:`limonlu-tart`,name:`Limonlu Tart`,category:`pasta`,description:`Ekşi limon kreması ve gevrek tereyağlı hamur.`,price:160,unit:`dilim`,ingredients:`Buğday unu, tereyağı, limon, yumurta, şeker.`,allergens:[`Gluten`,`Süt`,`Yumurta`]},{id:`cikolatali-kurabiye`,name:`Çikolatalı Kurabiye`,category:`kurabiye`,description:`Büyük parça bitter çikolatalı, kenarları çıtır, içi yumuşak.`,price:55,unit:`adet`,ingredients:`Buğday unu, tereyağı, bitter çikolata, şeker, yumurta.`,allergens:[`Gluten`,`Süt`,`Yumurta`,`Soya`]},{id:`tuzlu-karamelli-kurabiye`,name:`Tuzlu Karamelli Kurabiye`,category:`kurabiye`,description:`Karamel sosu ve deniz tuzu pulları ile tatlı-tuzlu denge.`,price:60,unit:`adet`,allergens:[`Gluten`,`Süt`,`Yumurta`]},{id:`kestaneli-tart`,name:`Kestaneli Tart`,category:`sezonluk`,description:`Kestane kreması ve gevrek hamurla hazırlanan sonbahar tartı.`,price:175,unit:`dilim`,allergens:[`Gluten`,`Süt`,`Yumurta`,`Kuruyemiş`]},{id:`elmali-galette`,name:`Elmalı Galette`,category:`sezonluk`,description:`Dilimlenmiş elma ve tarçınla katlanan, rustik görünümlü tatlı.`,price:150,unit:`dilim`,allergens:[`Gluten`,`Süt`]},{id:`portakalli-kek`,name:`Portakallı Kakaolu Kek`,category:`sezonluk`,description:`Portakal kabuğu ve kakaoyla hazırlanan, dilimlenerek sunulan kek.`,price:145,unit:`dilim`,allergens:[`Gluten`,`Süt`,`Yumurta`]}],a=`İçindekiler ve alerjen bilgileri demo amaçlıdır. Gerçek ürünler için lütfen fırına danışın.`,o={hero:{src:``,art:`hero`,tone:`cream`,alt:`Keten örtülü ahşap tezgâhta duran köy ekmeği, baget ve kruvasan`,w:1200,h:1500},heroSmall:{src:``,art:`croissant`,tone:`blush`,alt:`Tabakta duran altın renkli tereyağlı kruvasan`,w:800,h:800},story:{src:``,art:`shelf`,tone:`oat`,alt:`Ahşap rafta dizilmiş ekmekler ve bagetler`,w:1200,h:1500},storySmall:{src:``,art:`boule`,tone:`blush`,alt:`Üzerinde kesikler bulunan, una bulanmış yuvarlak ekmek`,w:800,h:800},map:{src:``,art:`map`,tone:`cream`,alt:`Fırının konumunu gösteren örnek harita çizimi`,w:1e3,h:700},products:{"koy-ekmegi":{src:``,art:`boule`,tone:`oat`,alt:`Üzerinde çapraz kesikler olan, una bulanmış köy ekmeği`},"cavdarli-ekmek":{src:``,art:`rye`,tone:`cream`,alt:`Koyu kabuklu, çavdar tohumlu oval ekmek`},baget:{src:``,art:`baguette`,tone:`blush`,alt:`Üzerinde eğik kesikler bulunan üç baget`},kruvasan:{src:``,art:`croissant`,tone:`blush`,alt:`Kat kat açılmış altın renkli kruvasan`},"pain-au-chocolat":{src:``,art:`chocolat`,tone:`oat`,alt:`İçinde çikolata şeritleri görünen dikdörtgen hamur işi`},"kanelli-rulo":{src:``,art:`roll`,tone:`cream`,alt:`Spiral desenli, tarçınlı yumuşak rulo`},"san-sebastian":{src:``,art:`cheesecake`,tone:`oat`,alt:`Üstü koyu karamelize olmuş, kremamsı cheesecake dilimi`},"havuclu-kek":{src:``,art:`carrot`,tone:`blush`,alt:`Katlı havuçlu kek dilimi ve üzerinde krema`},"limonlu-tart":{src:``,art:`tart`,tone:`cream`,alt:`Dalgalı kenarlı, sarı limon kremalı tart`},"cikolatali-kurabiye":{src:``,art:`cookie`,tone:`oat`,alt:`Büyük çikolata parçalı kurabiye`},"tuzlu-karamelli-kurabiye":{src:``,art:`cookieSalt`,tone:`cream`,alt:`Üzerinde karamel ve tuz pulları olan kurabiye`},"kestaneli-tart":{src:``,art:`chestnut`,tone:`burgundy`,alt:`Üzerinde kestane kreması telleri olan kahverengi tart`},"elmali-galette":{src:``,art:`galette`,tone:`burgundy`,alt:`Ortasında elma dilimleri dizili rustik galette`},"portakalli-kek":{src:``,art:`loafcake`,tone:`burgundy`,alt:`Üzerinde portakal dilimleri bulunan çikolatalı kek`}}},s={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},c=(e=``)=>String(e).replace(/[&<>"']/g,e=>s[e]),l=new Intl.NumberFormat(e.locale,{style:`currency`,currency:e.currency,maximumFractionDigits:0}),u=e=>l.format(e),d=e=>n.find(t=>t.id===e)?.label||``,f=e=>i.find(t=>t.id===e);function p(e){return o.products[e.id]||{src:``,art:`boule`,tone:`cream`,alt:`${e.name} için örnek çizim`}}var m=`(min-width: 56rem)`,h=()=>`<svg class="brand__mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
  <circle cx="20" cy="20" r="19" fill="currentColor"/>
  <circle cx="20" cy="20" r="16" fill="none" stroke="var(--paper)" stroke-width="0.9"/>
  <text x="20" y="27.4" text-anchor="middle" font-family="var(--font-display)" font-size="22" font-weight="600" fill="var(--paper)">${c(e.brand.mark)}</text>
</svg>`;function ee(){let{nav:n}=t,r=`
    <li><a href="#urunler">${c(n.products)}</a></li>
    <li><a href="#hikaye">${c(n.story)}</a></li>
    <li><a href="#uretim">${c(n.process)}</a></li>
    <li><a href="#iletisim">${c(n.contact)}</a></li>`;return`
  <header class="site-header">
    <div class="wrap site-header__bar">
      <a class="brand" href="#top" aria-label="${c(e.brand.name)}, sayfanın başı">
        ${h()}
        <span class="brand__name">${c(e.brand.name)}</span>
      </a>

      <nav class="nav" aria-label="Ana gezinme">
        <ul class="nav__list">${r}</ul>
      </nav>

      <div class="site-header__actions">
        <a class="btn btn--primary btn--sm" href="#talep">${c(n.cta)}</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Gezinme menüsünü aç">
          <span class="nav-toggle__bars" aria-hidden="true"></span>
        </button>
      </div>
    </div>

    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobil gezinme" hidden>
      <ul class="wrap mobile-nav__list">${r}
        <li><a class="mobile-nav__cta" href="#talep">${c(n.cta)}</a></li>
      </ul>
    </nav>
  </header>`}function te(){let e=document.querySelector(`.nav-toggle`),t=document.getElementById(`mobile-nav`),n=n=>{e.setAttribute(`aria-expanded`,String(n)),e.setAttribute(`aria-label`,n?`Gezinme menüsünü kapat`:`Gezinme menüsünü aç`),t.hidden=!n};e.addEventListener(`click`,()=>n(t.hidden)),t.addEventListener(`click`,e=>{e.target.closest(`a`)&&n(!1)}),document.addEventListener(`keydown`,r=>{r.key===`Escape`&&!t.hidden&&(n(!1),e.focus())}),document.addEventListener(`click`,e=>{!t.hidden&&!e.target.closest(`.site-header`)&&n(!1)}),window.matchMedia(m).addEventListener(`change`,e=>{e.matches&&n(!1)})}var g={cream:`#f2e8d5`,oat:`#e4d2b2`,blush:`#ead3c8`,sage:`#d3d6bd`,burgundy:`#7a2433`},_={crust:`#b9782f`,crustDark:`#8a5522`,crustLight:`#d79b4e`,crumb:`#efd9a8`,flour:`#fff8ea`,choc:`#3f2216`,cream:`#f6ead0`,ink:`#2b1810`},v=e=>{let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)},y=e=>Math.round(e*10)/10,b=e=>e*Math.PI/180;function x(e,t,n,r){let i=v(r),a=[];for(let r=0;r<n;r+=1){let o=r/n*Math.PI*2,s=e+(i()-.5)*2*t;a.push([Math.cos(o)*s,Math.sin(o)*s])}let o=(e,t)=>[(e[0]+t[0])/2,(e[1]+t[1])/2],s=o(a[n-1],a[0]),c=`M${y(s[0])} ${y(s[1])}`;for(let e=0;e<n;e+=1){let t=o(a[e],a[(e+1)%n]);c+=` Q${y(a[e][0])} ${y(a[e][1])} ${y(t[0])} ${y(t[1])}`}return`${c}Z`}var S=(e,t,n=0)=>[1,.86,.72].map((r,i)=>`<ellipse cx="0" cy="${n+i*4}" rx="${y(e*r)}" ry="${y(t*r)}" fill="${_.ink}" fill-opacity=".09"/>`).join(``),C=(e,t,n,r,i,a,o,s=1)=>{let c=v(t),l=``;for(let t=0;t<e;t+=1){let e=c()*Math.PI*2,t=Math.sqrt(c())*n;l+=`<circle cx="${y(Math.cos(e)*t)}" cy="${y(Math.sin(e)*t*s)}" r="${y(r+c()*(i-r))}" fill="${a}" fill-opacity="${y(o*(.5+c()*.5))}"/>`}return l};function w(){let e=[-72,72].map(e=>`<path d="M${e} -168 Q${e+16} 0 ${e} 168" fill="none" stroke="${_.crumb}" stroke-width="20" stroke-linecap="round"/>
      <path d="M${e+7} -158 Q${e+22} 0 ${e+7} 158" fill="none" stroke="#fff3d6" stroke-opacity=".7" stroke-width="4" stroke-linecap="round"/>`).join(``),t=[-72,72].map(e=>`<path d="M-168 ${e} Q0 ${e-16} 168 ${e}" fill="none" stroke="${_.crumb}" stroke-width="20" stroke-linecap="round"/>
      <path d="M-158 ${e+7} Q0 ${e-9} 158 ${e+7}" fill="none" stroke="#fff3d6" stroke-opacity=".7" stroke-width="4" stroke-linecap="round"/>`).join(``);return`${S(250,40,200)}
    <ellipse rx="252" ry="234" fill="${_.crustDark}"/>
    <ellipse rx="240" ry="222" fill="${_.crust}"/>
    <ellipse cx="-6" cy="-12" rx="212" ry="190" fill="${_.crustLight}" fill-opacity=".55"/>
    ${e}${t}
    ${C(90,4,215,1,2.8,_.flour,.8,.9)}`}function ne(){let e=v(12),t=``;for(let n=0;n<70;n+=1){let n=(e()-.5)*520,r=(e()-.5)*240;n*n/270**2+r*r/128**2>1||(t+=`<ellipse cx="${y(n)}" cy="${y(r)}" rx="${y(4+e()*3)}" ry="${y(1.6+e())}" transform="rotate(${y(e()*180)} ${y(n)} ${y(r)})" fill="#2d1a0d" fill-opacity=".7"/>`)}let n=[-190,-95,0,95,190].map(e=>`<path d="M${e-26} -70 Q${e} -10 ${e+26} 70" fill="none" stroke="#caa26b" stroke-width="16" stroke-linecap="round"/>`).join(``);return`<g transform="rotate(-14)">
    ${S(290,38,160)}
    <rect x="-300" y="-150" width="600" height="300" rx="150" fill="#5e3818"/>
    <rect x="-288" y="-138" width="576" height="276" rx="138" fill="#7a4a22"/>
    <rect x="-262" y="-126" width="524" height="210" rx="105" fill="#93602c" fill-opacity=".6"/>
    ${n}${t}
    ${C(80,8,250,1,2.4,_.flour,.7,.45)}
  </g>`}function T(){let e=(e,t,n)=>{let r=[-210,-105,0,105,210].map(e=>`<ellipse cx="${e}" cy="-2" rx="46" ry="10" transform="rotate(-24 ${e} -2)" fill="${_.crumb}"/>
        <ellipse cx="${e-4}" cy="-6" rx="36" ry="3" transform="rotate(-24 ${e} -2)" fill="#fff3d6" fill-opacity=".7"/>`).join(``);return`<g transform="translate(0 ${e}) rotate(${t})">
      <rect x="-300" y="-42" width="600" height="84" rx="42" fill="${_.crustDark}"/>
      <rect x="-294" y="-37" width="588" height="74" rx="37" fill="${_.crust}"/>
      <rect x="-270" y="-34" width="540" height="30" rx="15" fill="${_.crustLight}" fill-opacity=".6"/>
      ${r}
      <g transform="scale(1 .16)">${C(26,n,270,3,6,_.flour,.7)}</g>
    </g>`};return`${S(300,36,170)}${e(-120,-9,3)}${e(0,-5,4)}${e(120,-1,5)}`}function E(){let e=``;return[-3,3,-2,2,-1,1,0].forEach(t=>{let n=Math.abs(t),r=t*86,i=t*t*15-40,a=128-n*24,o=70-n*5,s=t*21;e+=`<g transform="translate(${r} ${y(i)}) rotate(${s})">
      <ellipse rx="${o}" ry="${a}" fill="#8f531c"/>
      <ellipse rx="${o-6}" ry="${a-6}" fill="#c88434"/>
      <ellipse cx="-5" cy="-${y(a*.2)}" rx="${y((o-6)*.7)}" ry="${y((a-6)*.66)}" fill="#e2ad5c" fill-opacity=".9"/>
      ${[-.55,-.15,.25,.62].map(e=>`<path d="M${-o+12} ${y(a*e)} Q0 ${y(a*e-20)} ${o-12} ${y(a*e)}" fill="none" stroke="#9a5a1f" stroke-opacity=".6" stroke-width="3.4" stroke-linecap="round"/>`).join(``)}
      <ellipse cx="${-o*.3}" cy="${-a*.55}" rx="${y(o*.3)}" ry="6" fill="#fff0c8" fill-opacity=".6"/>
    </g>`}),`${S(300,56,150)}<g transform="translate(0 -30)">${e}</g>`}function re(){let e=[-80,-48,-16,16,48,80].map(e=>`<path d="M-150 ${e} Q0 ${e-12} 150 ${e}" fill="none" stroke="#a8692a" stroke-opacity=".6" stroke-width="4" stroke-linecap="round"/>`).join(``);return`<g transform="rotate(-12)">
    ${S(250,40,130)}
    <rect x="-250" y="-120" width="500" height="240" rx="96" fill="#8f561f"/>
    <rect x="-240" y="-110" width="480" height="220" rx="88" fill="#c58333"/>
    <rect x="-210" y="-98" width="420" height="120" rx="60" fill="#e0aa5a" fill-opacity=".7"/>
    ${e}
    <rect x="-262" y="-52" width="34" height="104" rx="17" fill="${_.choc}"/>
    <rect x="228" y="-52" width="34" height="104" rx="17" fill="${_.choc}"/>
    <rect x="-258" y="-48" width="10" height="60" rx="5" fill="#6b3b22" fill-opacity=".8"/>
    <rect x="236" y="-48" width="10" height="60" rx="5" fill="#6b3b22" fill-opacity=".8"/>
    ${C(40,15,200,1,2.4,_.flour,.7,.5)}
  </g>`}function ie(){let e=``,t=``,n=[],r=[];for(let e=0;e<=Math.PI*7.2;e+=.12){let t=10+e*8.6;n.push(`${y(Math.cos(e)*t)},${y(Math.sin(e)*t)}`),r.push(`${y(Math.cos(e+.35)*(t+9))},${y(Math.sin(e+.35)*(t+9))}`)}return e=`<polyline points="${n.join(` `)}" fill="none" stroke="#8a4b26" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>`,t=`<polyline points="${r.join(` `)}" fill="none" stroke="#e8c37e" stroke-opacity=".7" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,`${S(250,40,205)}
    <circle r="244" fill="#b57a38"/>
    <circle r="232" fill="#dcab62"/>
    ${t}${e}
    <path d="M60 -170 Q120 -120 90 -60 Q150 -70 175 -120 Q150 -190 60 -170Z" fill="#fff8ea" fill-opacity=".6"/>
    ${C(50,22,215,1,2.2,_.flour,.7)}`}function D(e){return`${S(245,40,205)}
    <path d="${x(238,11,34,e)}" fill="#9a6226"/>
    <path d="${x(224,10,34,e+1)}" fill="#c58a44"/>
    <path d="${x(196,12,30,e+2)}" fill="#d9a35b" fill-opacity=".7"/>`}function O(){let e=v(31),t=``;[[-110,-90],[20,-140],[120,-60],[-150,20],[-30,-20],[90,60],[-90,120],[30,140],[150,110],[-170,-50],[60,-20],[-10,80]].forEach(([n,r])=>{let i=20+e()*24,a=e()*360;t+=`<g transform="translate(${n} ${r}) rotate(${y(a)})">
      <polygon points="${-i},${-i*.5} ${-i*.1},${-i*.9} ${i},${-i*.4} ${i*.8},${i*.7} ${-i*.4},${i*.8}" fill="${_.choc}"/>
      <polygon points="${-i*.6},${-i*.3} ${-i*.05},${-i*.6} ${i*.5},${-i*.25}" fill="#6b3b22" fill-opacity=".9"/>
    </g>`});let n=[[-120,-140,-60,-100],[100,90,160,40],[-180,80,-120,110],[40,20,80,-20]].map(([e,t,n,r])=>`<path d="M${e} ${t} L${n} ${r}" stroke="#ecc486" stroke-width="4" stroke-linecap="round"/>`).join(``);return`${D(40)}${n}${t}`}function k(){let e=v(52),t=``;for(let n=0;n<26;n+=1){let n=e()*Math.PI*2,r=Math.sqrt(e())*180,i=7+e()*9;t+=`<rect x="${y(Math.cos(n)*r)}" y="${y(Math.sin(n)*r)}" width="${y(i)}" height="${y(i*.7)}" rx="1.5" transform="rotate(${y(e()*180)} ${y(Math.cos(n)*r)} ${y(Math.sin(n)*r)})" fill="#fffaf0"/>`}let n=[-90,-20,55,120].map((e,t)=>`<path d="M-170 ${e} C-90 ${e-50+t*8} -20 ${e+50} 60 ${e-10} S150 ${e+40} 178 ${e-18}" fill="none" stroke="#a8561b" stroke-opacity=".85" stroke-width="14" stroke-linecap="round"/>
      <path d="M-165 ${e-4} C-90 ${e-54+t*8} -20 ${e+46} 60 ${e-14}" fill="none" stroke="#e29a52" stroke-opacity=".7" stroke-width="4" stroke-linecap="round"/>`).join(``);return`${D(60)}${n}${t}`}function ae(){let e=v(71),t=``;for(let n=0;n<40;n+=1)t+=`<circle cx="${y(-150+e()*300)}" cy="${y(-30+e()*190)}" r="${y(1.5+e()*3)}" fill="#c9a46a" fill-opacity=".55"/>`;return`<ellipse cx="0" cy="190" rx="318" ry="52" fill="${_.ink}" fill-opacity=".08"/>
    <ellipse cx="0" cy="176" rx="300" ry="48" fill="#fbf6ec"/>
    <ellipse cx="0" cy="170" rx="262" ry="34" fill="#efe5d1"/>
    <path d="M-176 170 L-146 -120 Q0 -150 146 -120 L176 170 Q0 196 -176 170Z" fill="#f1dfb5"/>
    <path d="M60 -128 L146 -120 L176 170 Q110 184 56 186Z" fill="#dcc28c" fill-opacity=".55"/>
    ${t}
    <path d="M-150 -118 Q0 -158 150 -118 L158 -52 Q130 -30 100 -52 Q70 -28 40 -48 Q0 -22 -40 -50 Q-80 -26 -110 -52 Q-140 -30 -160 -50Z" fill="#5b3017"/>
    <path d="M-120 -110 Q0 -140 118 -112" fill="none" stroke="#8b5329" stroke-width="10" stroke-linecap="round" stroke-opacity=".8"/>
    <path d="M-176 170 L-146 -120" stroke="#8b5329" stroke-width="10" stroke-linecap="round" stroke-opacity=".55"/>`}function oe(){let e=v(81),t=``;for(let n=0;n<46;n+=1)t+=`<ellipse cx="${y(-170+e()*340)}" cy="${y(-20+e()*190)}" rx="${y(3+e()*4)}" ry="${y(1.6+e()*1.2)}" transform="rotate(${y(e()*180)} 0 0)" fill="#e5902f" fill-opacity=".8"/>`;let n=``;return[[-120,-118],[-40,-128],[40,-120],[120,-114],[-80,-96],[80,-98]].forEach(([e,t])=>{n+=`<polygon points="${e-18},${t} ${e-4},${t-14} ${e+16},${t-6} ${e+12},${t+10} ${e-8},${t+12}" fill="#9a6a3a"/>`}),`<ellipse cx="0" cy="196" rx="310" ry="48" fill="${_.ink}" fill-opacity=".08"/>
    <ellipse cx="0" cy="182" rx="292" ry="44" fill="#fbf6ec"/>
    <rect x="-190" y="-80" width="380" height="262" rx="20" fill="#c4823f"/>
    <rect x="-190" y="-10" width="380" height="36" fill="#f6ecd5"/>
    <rect x="-190" y="84" width="380" height="36" fill="#f6ecd5"/>
    <rect x="-190" y="-80" width="380" height="262" rx="20" fill="none" stroke="#9b6129" stroke-width="4"/>
    ${t}
    <path d="M-206 -86 Q-206 -158 -120 -146 Q-60 -176 0 -150 Q70 -178 120 -146 Q206 -158 206 -86 Q206 -62 190 -60 L-190 -60 Q-206 -62 -206 -86Z" fill="#fbf2dc"/>
    <path d="M-150 -118 Q-90 -136 -30 -118 M10 -122 Q70 -140 130 -118" fill="none" stroke="#e6d5ad" stroke-width="6" stroke-linecap="round"/>
    ${n}`}function A(e=`#f2cb45`,t=`#fff2a8`){let n=``;for(let e=0;e<32;e+=1){let t=e/32*Math.PI*2;n+=`<circle cx="${y(Math.cos(t)*232)}" cy="${y(Math.sin(t)*232)}" r="26" fill="#d7a360" stroke="#b57c3a" stroke-width="3"/>`}return`${S(262,42,215)}${n}
    <circle r="226" fill="#d7a360"/>
    <circle r="206" fill="#c98f4a"/>
    <circle r="192" fill="${e}"/>
    <path d="M-120 -90 A150 150 0 0 1 20 -150" fill="none" stroke="${t}" stroke-width="12" stroke-linecap="round" stroke-opacity=".75"/>
    ${C(28,91,150,1.5,3.4,`#fff8d6`,.9)}`}function j(){let e=v(95),t=``;for(let n=0;n<44;n+=1){let r=e()*Math.PI*2,i=e()*150,a=Math.cos(r)*i,o=Math.sin(r)*i,s=50+e()*70,c=e()*Math.PI*2;t+=`<path d="M${y(a)} ${y(o)} q${y(Math.cos(c)*s*.5)} ${y(Math.sin(c)*s*.5-20)} ${y(Math.cos(c)*s)} ${y(Math.sin(c)*s)}" fill="none" stroke="${n%3?`#a8703f`:`#5b361f`}" stroke-width="7" stroke-linecap="round" stroke-opacity=".9"/>`}return`${A(`#7a4b2d`,`#c28a5a`)}${t}${C(40,96,190,1,2.2,_.flour,.55)}`}function M(){let e=(e,t,n,r,i,a)=>{let o=v(a),s=``;for(let a=0;a<e;a+=1){let c=a/e*360+i,l=Math.cos(b(c))*t,u=Math.sin(b(c))*t;s+=`<g transform="translate(${y(l)} ${y(u)}) rotate(${y(c+90+(o()-.5)*10)})">
        <ellipse rx="${n}" ry="${r}" fill="#f4e2ac" stroke="#c98a3d" stroke-width="3"/>
        <path d="M${-n+6} ${-r*.2} Q0 ${-r*.8} ${n-6} ${-r*.2}" fill="none" stroke="#c2523a" stroke-opacity=".7" stroke-width="3" stroke-linecap="round"/>
      </g>`}return s},t=Array.from({length:14},(e,t)=>{let n=t/14*360;return`<path d="M${y(Math.cos(b(n))*190)} ${y(Math.sin(b(n))*190)} L${y(Math.cos(b(n+6))*244)} ${y(Math.sin(b(n+6))*244)}" stroke="#a56a2b" stroke-opacity=".6" stroke-width="3" stroke-linecap="round"/>`}).join(``);return`${S(262,42,215)}
    <path d="${x(252,14,16,120)}" fill="#a56a2b"/>
    <path d="${x(240,12,16,121)}" fill="#d7a45c"/>
    ${t}
    <circle r="178" fill="#e3b777"/>
    ${e(14,138,44,20,0,3)}${e(9,84,36,17,18,5)}${e(5,34,28,14,30,7)}
    ${C(60,124,200,1,2.4,`#fff3d6`,.7)}
    <path d="M-100 -140 Q0 -190 110 -140" fill="none" stroke="#fff3d6" stroke-opacity=".6" stroke-width="7" stroke-linecap="round"/>`}function N(){let e=(e,t)=>`<g transform="translate(${e} ${t})">
    <circle r="68" fill="#d4701b"/><circle r="60" fill="#f1a449"/>
    ${[0,45,90,135].map(e=>`<line x1="-56" y1="0" x2="56" y2="0" stroke="#fff0cf" stroke-width="4" transform="rotate(${e})"/>`).join(``)}
    <circle r="9" fill="#fff0cf"/>
  </g>`;return`<g transform="rotate(-8)">
    ${S(300,44,150)}
    <rect x="-290" y="-132" width="580" height="264" rx="66" fill="#2c180f"/>
    <rect x="-278" y="-122" width="556" height="244" rx="58" fill="#4a291b"/>
    <path d="M-250 -96 Q0 -132 250 -96" fill="none" stroke="#7a4a30" stroke-width="12" stroke-linecap="round" stroke-opacity=".8"/>
    <path d="M-262 40 Q-230 90 -190 60 Q-150 110 -110 70" fill="none" stroke="#7a4a30" stroke-opacity=".5" stroke-width="8" stroke-linecap="round"/>
    ${e(-150,0)}${e(0,-6)}${e(150,4)}
    ${C(40,130,240,1,2.2,`#f1a449`,.7,.4)}
  </g>`}function se(){return`
    <rect width="800" height="1000" fill="#efe3cb"/>
    <g transform="translate(560 0)">${[60,150,240].map(e=>`<rect x="${e}" y="0" width="14" height="1000" fill="#e3d4b6" fill-opacity=".7"/>`).join(``)}</g>
    <g transform="rotate(-4 400 560)">
      <rect x="40" y="210" width="720" height="640" rx="14" fill="#a47445"/>
      <rect x="40" y="210" width="720" height="640" rx="14" fill="#b98a58"/>
      ${Array.from({length:16},(e,t)=>`<path d="M70 ${250+t*38} Q400 ${236+t*38+t%3*6} 730 ${252+t*38}" fill="none" stroke="#9c6b3f" stroke-opacity=".28" stroke-width="2"/>`).join(``)}
      <rect x="40" y="842" width="720" height="14" rx="7" fill="#7c5430" fill-opacity=".5"/>
    </g>
    <g transform="translate(400 330) scale(.64) rotate(8)">${T()}</g>
    <g transform="translate(300 650) scale(.78)">${w()}</g>
    <g transform="translate(590 740) scale(.42) rotate(-6)">${E()}</g>
    <g transform="translate(610 560) scale(.26)">${O()}</g>
    ${C(90,77,330,1,2.4,_.flour,.55).replace(/<circle cx="(-?[\d.]+)" cy="(-?[\d.]+)"/g,(e,t,n)=>`<circle cx="${y(400+Number(t))}" cy="${y(560+Number(n)*1.3)}"`)}`}function ce(){let e=e=>`<rect x="40" y="${e}" width="720" height="28" fill="#8d5f35"/><rect x="40" y="${e+28}" width="720" height="10" fill="${_.ink}" fill-opacity=".14"/>`,t=(e,t,n,r,i)=>{let a=v(i),o=[-.35,0,.35].map(i=>`<path d="M${y(e+i*n*.5-16)} ${y(t-r*.8)} q10 ${y(r*.35)} 22 ${y(r*.66)}" stroke="${_.crumb}" stroke-width="10" stroke-linecap="round" fill="none"/>`).join(``),s=``;for(let i=0;i<16;i+=1)s+=`<circle cx="${y(e+(a()-.5)*n*.8)}" cy="${y(t-a()*r*.8)}" r="${y(1+a()*1.6)}" fill="${_.flour}" fill-opacity=".7"/>`;return`<path d="M${e-n/2} ${t} Q${e-n/2} ${t-r*1.25} ${e} ${t-r*1.25} Q${e+n/2} ${t-r*1.25} ${e+n/2} ${t}Z" fill="${_.crustDark}"/>
      <path d="M${e-n/2+8} ${t} Q${e-n/2+8} ${t-r*1.12} ${e} ${t-r*1.12} Q${e+n/2-8} ${t-r*1.12} ${e+n/2-8} ${t}Z" fill="${_.crust}"/>${o}${s}`},n=(e,t,n)=>`<g transform="translate(${e} ${t}) rotate(${n})"><rect x="-26" y="-250" width="52" height="250" rx="26" fill="${_.crustDark}"/><rect x="-21" y="-244" width="42" height="238" rx="21" fill="${_.crust}"/>${[-200,-140,-80].map(e=>`<ellipse cx="0" cy="${e}" rx="22" ry="6" transform="rotate(20 0 ${e})" fill="${_.crumb}"/>`).join(``)}</g>`;return`
    <rect width="800" height="1000" fill="#e4d2b2"/>
    <rect x="40" y="60" width="26" height="880" fill="#7c5430"/><rect x="734" y="60" width="26" height="880" fill="#7c5430"/>
    ${e(300)}${e(600)}${e(900)}
    ${n(150,300,-5)}${n(214,300,1)}${n(278,300,6)}${t(500,300,190,120,3)}${t(668,300,120,80,4)}
    ${t(170,600,220,130,5)}${t(400,600,200,118,6)}${t(610,600,170,100,7)}
    ${t(200,900,130,90,8)}${t(350,900,150,96,9)}${n(520,900,-4)}${n(584,900,2)}${n(648,900,7)}`}function le(){return`
    <rect width="1000" height="700" fill="#ecdfc6"/>
    <rect x="70" y="80" width="250" height="170" fill="#d5d6b4"/>
    <rect x="640" y="420" width="290" height="190" fill="#d5d6b4"/>
    <g fill="none" stroke="#fbf4e4" stroke-linecap="round">
      <path d="M-10 330 H1010" stroke-width="22"/><path d="M480 -10 V710" stroke-width="22"/>
      <path d="M-10 120 L1010 200" stroke-width="12"/><path d="M200 -10 L260 710" stroke-width="12"/>
      <path d="M760 -10 L720 710" stroke-width="12"/><path d="M-10 540 H1010" stroke-width="10"/>
    </g>
    <g transform="translate(480 330)">
      <ellipse cx="0" cy="4" rx="20" ry="6" fill="${_.ink}" fill-opacity=".25"/>
      <path d="M0 0 C-22 -26 -34 -44 -34 -60 A34 34 0 0 1 34 -60 C34 -44 22 -26 0 0Z" fill="#6e1f2b"/>
      <circle cx="0" cy="-60" r="12" fill="#f8f2e7"/>
    </g>`}var P=(e,t,n=`0 0 800 800`)=>`<svg viewBox="${n}" preserveAspectRatio="xMidYMid slice" focusable="false" aria-hidden="true">
    <rect width="100%" height="100%" fill="${g[t]||g.cream}"/>${e}</svg>`,F=(e,t=1)=>`<g transform="translate(400 400) scale(${t})">${e}</g>`,I={boule:e=>P(F(w(),1),e),rye:e=>P(F(ne(),1),e),baguette:e=>P(F(T(),.98),e),croissant:e=>P(F(E(),1),e),chocolat:e=>P(F(re(),1.05),e),roll:e=>P(F(ie(),1),e),cookie:e=>P(F(O(),1),e),cookieSalt:e=>P(F(k(),1),e),cheesecake:e=>P(F(ae(),1),e),carrot:e=>P(F(oe(),1),e),tart:e=>P(F(A(),1),e),chestnut:e=>P(F(j(),1),e),galette:e=>P(F(M(),1),e),loafcake:e=>P(F(N(),1),e),hero:e=>P(se(),e,`0 0 800 1000`),shelf:e=>P(ce(),e,`0 0 800 1000`),map:e=>P(le(),e,`0 0 1000 700`)};function L(e,{eager:t=!1,className:n=``}={}){if(!e)return``;let r=I[e.art]?I[e.art](e.tone):``,i=!!e.src,a=c(e.alt||``);return`<div class="media ${n}" data-tone="${c(e.tone||`cream`)}"${i?``:` role="img" aria-label="${a}"`}>
    <div class="media__art" aria-hidden="true">${r}</div>
    ${i?`<img class="media__img" src="${c(e.src)}" alt="${a}"
            ${e.w&&e.h?`width="${e.w}" height="${e.h}"`:``}
            ${t?`fetchpriority="high"`:`loading="lazy"`} decoding="async">`:``}
  </div>`}function R(e=document){e.querySelectorAll(`.media__img`).forEach(e=>{let t=e.closest(`.media`),n=()=>t.classList.add(`is-loaded`),r=()=>{t.setAttribute(`role`,`img`),t.setAttribute(`aria-label`,e.alt),e.remove()};e.complete?e.naturalWidth>0?n():r():(e.addEventListener(`load`,n,{once:!0}),e.addEventListener(`error`,r,{once:!0}))})}var z=[`Pazar`,`Pazartesi`,`Salı`,`Çarşamba`,`Perşembe`,`Cuma`,`Cumartesi`],B=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],V=e=>{let[t,n]=e.split(`:`).map(Number);return t*60+n};function H(t){let n=e.hours.find(e=>e.days.includes(t));return n&&n.open&&n.close?n:null}function U(t=new Date){let n=new Intl.DateTimeFormat(`en-US`,{timeZone:e.timezone,weekday:`short`,hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`}).formatToParts(t),r=e=>n.find(t=>t.type===e).value;return{day:B.indexOf(r(`weekday`)),minutes:Number(r(`hour`))*60+Number(r(`minute`))}}function W(t=new Date){return new Intl.DateTimeFormat(`en-CA`,{timeZone:e.timezone}).format(t)}function G(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e||``);if(!t)return null;let[n,r,i]=[Number(t[1]),Number(t[2]),Number(t[3])],a=new Date(Date.UTC(n,r-1,i,12));return a.getUTCFullYear()!==n||a.getUTCMonth()!==r-1||a.getUTCDate()!==i?null:{utc:a,day:a.getUTCDay()}}function ue(t){let n=G(t);return n?new Intl.DateTimeFormat(e.locale,{timeZone:`UTC`,day:`numeric`,month:`long`,year:`numeric`,weekday:`long`}).format(n.utc):t}function K(e=new Date){let{day:t,minutes:n}=U(e),r=H(t);if(r&&n>=V(r.open)&&n<V(r.close))return{isOpen:!0,day:t,text:`Şimdi açık. Kapanış saati ${r.close}.`};for(let e=0;e<8;e+=1){let r=(t+e)%7,i=H(r);if(i&&(e>0||n<V(i.open)))return{isOpen:!1,day:t,text:`Şu an kapalı. Sonraki açılış: ${e===0?`Bugün`:e===1?`Yarın`:z[r]} ${i.open}.`}}return{isOpen:!1,day:t,text:`Şu an kapalı.`}}function q(){let e=K();return`<p class="status" data-status data-open="${e.isOpen}">
    <span class="status__dot" aria-hidden="true"></span>
    <span data-status-text>${c(e.text)}</span>
  </p>`}function J(){let e=K();document.querySelectorAll(`[data-status]`).forEach(t=>{t.dataset.open=String(e.isOpen),t.querySelector(`[data-status-text]`).textContent=e.text}),document.querySelectorAll(`[data-hours-row]`).forEach(t=>{t.dataset.hoursRow.split(`,`).map(Number).includes(e.day)?t.setAttribute(`aria-current`,`date`):t.removeAttribute(`aria-current`)})}function de(){let n=t.hero,[r,i]=n.titleLines,a=e.location.addressLines[e.location.addressLines.length-1];return`
  <section class="hero" aria-labelledby="hero-title">
    <div class="wrap hero__grid">
      <div class="hero__copy">
        <h1 class="hero__title" id="hero-title">
          <span class="hero__line">${c(r)}</span>
          <span class="hero__line hero__line--italic">${c(i)}</span>
        </h1>
        <p class="hero__lead">${c(n.lead)}</p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="#urunler">${c(n.primaryCta)}</a>
          <a class="btn btn--ghost" href="#talep">${c(n.secondaryCta)}</a>
        </div>
        <div class="hero__facts">
          ${q()}
          <p class="hero__place">${c(a)} <span>(demo adres)</span></p>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__main">${L(o.hero,{eager:!0})}</div>
        <figure class="hero__inset">
          ${L(o.heroSmall)}
          <figcaption>${c(n.caption)}</figcaption>
        </figure>
      </div>
    </div>
  </section>`}function fe(e,t){return`<li class="pick pick--${[`lead`,`tall`,`wide`,`square`,`tall`][t]||`square`}" data-reveal>
    <button class="pick__btn" type="button" data-product="${c(e.id)}" aria-haspopup="dialog">
      <span class="pick__media">${L(p(e))}</span>
      <span class="pick__body">
        <span class="pick__cat">${c(d(e.category))}</span>
        <span class="pick__name">${c(e.name)}</span>
        <span class="pick__price">${u(e.price)}<span class="pick__unit"> / ${c(e.unit)}</span></span>
      </span>
    </button>
  </li>`}function pe(){let e=t.featured,n=r.map(f).filter(Boolean);return`
  <section class="section featured" id="secki" aria-labelledby="secki-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="secki-title" data-reveal>${c(e.title)}</h2>
        <p data-reveal>${c(e.intro)}</p>
      </div>
      <ul class="picks">${n.map(fe).join(``)}</ul>
      <p class="featured__all"><a class="link" href="#urunler">${c(e.allCta)}</a></p>
    </div>
  </section>`}var Y=`tumu`,X=e=>e===Y?i.length:i.filter(t=>t.category===e).length;function me(e){return`<li class="item" data-category="${c(e.category)}">
    <button class="item__btn" type="button" data-product="${c(e.id)}" aria-haspopup="dialog">
      <span class="item__media">${L(p(e))}</span>
      <span class="item__head">
        <span class="item__name">${c(e.name)}</span>
        <span class="item__price">${u(e.price)}</span>
      </span>
      <span class="item__desc">${c(e.description)}</span>
      <span class="sr-only">${c(t.catalog.open)}</span>
    </button>
  </li>`}function he(){let e=t.catalog,r=[{id:Y,label:e.all},...n].map((e,t)=>`<button class="filter" type="button" data-filter="${c(e.id)}" aria-pressed="${t===0}">
        <span class="filter__label">${c(e.label)}</span>
        <span class="filter__count" aria-hidden="true">${X(e.id)}</span>
        <span class="sr-only">, ${X(e.id)} ürün</span>
      </button>`).join(``);return`
  <section class="section catalog" id="urunler" aria-labelledby="urunler-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="urunler-title" data-reveal>${c(e.title)}</h2>
        <p data-reveal>${c(e.intro)}</p>
      </div>

      <div class="filters" role="group" aria-label="${c(e.filterLabel)}">${r}</div>
      <p class="catalog__status" data-catalog-status role="status" aria-live="polite">${c(e.count(i.length))}</p>

      <ul class="items" data-items>${i.map(me).join(``)}</ul>

      <div class="catalog__empty" data-empty hidden>
        <p class="catalog__empty-title">${c(e.emptyTitle)}</p>
        <p>${c(e.emptyText)}</p>
        <button class="btn btn--ghost btn--sm" type="button" data-filter="${Y}">${c(e.emptyAction)}</button>
      </div>

      <p class="note catalog__note">${c(e.note)}</p>
    </div>
  </section>`}function ge(){let e=t.catalog,r=document.getElementById(`urunler`),i=r.querySelector(`[data-items]`),a=r.querySelector(`[data-catalog-status]`),o=r.querySelector(`[data-empty]`),s=[...r.querySelectorAll(`.filters [data-filter]`)];function c(t){let r=t===Y||n.some(e=>e.id===t)?t:Y,c=0;i.querySelectorAll(`.item`).forEach(e=>{let t=r===Y||e.dataset.category===r;e.hidden=!t,t&&(c+=1)}),s.forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.filter===r)));let l=r===Y?e.all:d(r);return a.textContent=c?`${l}: ${e.count(c)}`:`${l}: ${e.emptyTitle}`,o.hidden=c>0,i.hidden=c===0,R(i),r}document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-filter]`);t&&(c(t.dataset.filter),t.closest(`.filters`)||(e.preventDefault(),document.getElementById(`urunler`).scrollIntoView()))});let l=()=>{let e=/^#urunler\/([\w-]+)$/.exec(location.hash);e&&(c(e[1]),document.getElementById(`urunler`).scrollIntoView())};window.addEventListener(`hashchange`,l),c(Y),l()}function _e(){let e=t.process,n=e.steps.map((e,t)=>`<li class="step" data-reveal>
        <p class="step__time">${c(e.time)}</p>
        <div class="step__body">
          <h3 class="step__title"><span class="sr-only">${t+1}. adım: </span>${c(e.title)}</h3>
          <p class="step__text">${c(e.text)}</p>
        </div>
      </li>`).join(``);return`
  <section class="section process" id="uretim" aria-labelledby="uretim-title">
    <div class="wrap process__grid">
      <div class="process__head">
        <h2 id="uretim-title" data-reveal>${c(e.title)}</h2>
        <p>${c(e.intro)}</p>
        <p class="note">${c(e.note)}</p>
      </div>
      <ol class="steps">${n}</ol>
    </div>
  </section>`}function ve(){let e=t.story;return`
  <section class="section story" id="hikaye" aria-labelledby="hikaye-title">
    <div class="wrap story__grid">
      <div class="story__visual">
        <div class="story__main">${L(o.story)}</div>
        <div class="story__inset">${L(o.storySmall)}</div>
      </div>
      <div class="story__copy">
        <h2 id="hikaye-title" data-reveal>${c(e.title)}</h2>
        <p class="story__lead">${c(e.lead)}</p>
        ${e.paragraphs.map(e=>`<p class="story__text">${c(e)}</p>`).join(``)}
        <p class="story__motto">${c(e.motto)}</p>
        <p class="note">${c(e.demo)}</p>
      </div>
    </div>
  </section>`}function ye(){let e=t.seasonal,n=i.filter(e=>e.category===`sezonluk`),r=n.map(t=>`<li class="season" data-reveal>
        <button class="season__btn" type="button" data-product="${c(t.id)}" aria-haspopup="dialog">
          <span class="season__media">${L(p(t))}</span>
          <span class="season__name">${c(t.name)}</span>
          <span class="season__desc">${c(t.description)}</span>
          <span class="season__price">${u(t.price)}<span class="season__unit"> / ${c(t.unit)}</span></span>
          <span class="sr-only">${c(e.cta)}</span>
        </button>
      </li>`).join(``);return`
  <section class="section seasonal" id="sezonluk" aria-labelledby="sezonluk-title">
    <div class="wrap">
      <div class="seasonal__head">
        <p class="seasonal__season">${c(e.season)}</p>
        <h2 id="sezonluk-title" data-reveal>${c(e.title)}</h2>
        <p class="seasonal__intro">${c(e.intro)}</p>
      </div>
      ${n.length?`<ul class="seasons">${r}</ul>`:``}
    </div>
  </section>`}function be(){let n=t.visit;return e.hours.map(e=>{let t=e.open&&e.close?`${c(e.open)} – ${c(e.close)}`:c(n.closed);return`<tr data-hours-row="${e.days.join(`,`)}"><th scope="row">${c(e.label)}</th><td>${t}</td></tr>`}).join(``)}function Z(){let n=t.visit,r=e.location;return`
  <section class="section visit" id="iletisim" aria-labelledby="iletisim-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="iletisim-title" data-reveal>${c(n.title)}</h2>
        <p data-reveal>${c(n.intro)}</p>
      </div>

      <div class="visit__grid">
        <div class="visit__info">
          <dl class="facts">
            <div class="fact">
              <dt>${c(n.address)}</dt>
              <dd><address>${r.addressLines.map(c).join(`<br>`)}</address></dd>
            </div>
            <div class="fact">
              <dt>${c(n.phone)}</dt>
              <dd><a href="${c(e.contact.phoneHref)}">${c(e.contact.phoneDisplay)}</a></dd>
            </div>
          </dl>
          ${r.isDemo?`<p class="demo-note"><strong>Demo bilgi.</strong> ${c(n.demoNotice)}</p>`:``}

          <table class="hours">
            <caption class="sr-only">${c(n.hours)}</caption>
            <tbody>${be()}</tbody>
          </table>
          ${q()}

          <a class="btn btn--primary visit__cta" href="${c(r.mapsUrl)}" target="_blank" rel="noopener noreferrer">
            ${c(n.directions)}<span class="sr-only"> (yeni sekmede açılır)</span>
          </a>
        </div>

        <div class="visit__map">
          <a class="map" href="${c(r.mapsUrl)}" target="_blank" rel="noopener noreferrer"
             aria-label="${c(n.mapLabel)} (yeni sekmede açılır)">
            ${L(o.map)}
            <span class="map__label">${c(n.mapLabel)}</span>
          </a>
          <p class="note">${c(n.mapNote)}</p>
        </div>
      </div>
    </div>
  </section>`}function xe({name:n,productId:r,quantity:i,date:a,message:o}){let s=t.inquiry.message,c=[e.whatsapp.greeting,``,`${s.name}: ${n.trim()}`],l=r?f(r):null;return l&&c.push(`${s.product}: ${l.name} (${s.price}: ${u(l.price)} / ${l.unit})`),i&&c.push(`${s.quantity}: ${i}`),a&&c.push(`${s.date}: ${ue(a)}`),c.push(`${s.message}: ${o.replace(/\r\n/g,`
`).trim()}`,``,s.closing),c.join(`
`)}function Se(t){let n=String(e.whatsapp.phone).replace(/\D/g,``);return`${e.whatsapp.baseUrl}${n}?text=${encodeURIComponent(t)}`}function Ce(){let r=t.inquiry,{messageMax:a,quantityMax:o}=e.inquiry,s=n.map(e=>{let t=i.filter(t=>t.category===e.id).map(e=>`<option value="${c(e.id)}">${c(e.name)}</option>`).join(``);return t?`<optgroup label="${c(e.label)}">${t}</optgroup>`:``}).join(``),l=(e,t,n,r=``)=>`
    <div class="field" data-field="${e}">
      <label class="field__label" for="f-${e}">${c(t)}</label>
      ${n}
      ${r?`<p class="field__hint" id="hint-${e}">${c(r)}</p>`:``}
      <p class="field__error" id="err-${e}" hidden></p>
    </div>`;return`
  <section class="section inquiry" id="talep" aria-labelledby="talep-title">
    <div class="wrap inquiry__grid">
      <div class="inquiry__intro">
        <h2 id="talep-title" data-reveal>${c(r.title)}</h2>
        <p>${c(r.intro)}</p>
      </div>

      <form class="form" data-form novalidate>
        <p class="form__summary" data-summary role="alert" hidden>${c(r.errors.summary)}</p>

        ${l(`name`,r.labels.name,`<input class="control" id="f-name" name="name" type="text" required autocomplete="name" aria-describedby="err-name">`)}

        <div class="form__row">
          ${l(`product`,r.labels.product,`<select class="control" id="f-product" name="product" aria-describedby="err-product">
              <option value="">${c(r.placeholders.product)}</option>${s}
            </select>`)}
          ${l(`quantity`,r.labels.quantity,`<input class="control" id="f-quantity" name="quantity" type="number" inputmode="numeric" min="1" max="${o}" step="1" aria-describedby="err-quantity">`)}
        </div>

        ${l(`date`,r.labels.date,`<input class="control" id="f-date" name="date" type="date" min="${W()}" aria-describedby="hint-date err-date">`,r.hints.date)}

        ${l(`message`,r.labels.message,`<textarea class="control control--area" id="f-message" name="message" rows="5" required maxlength="${a}"
            placeholder="${c(r.placeholders.message)}" aria-describedby="hint-message err-message"></textarea>`,r.hints.message)}

        <button class="btn btn--primary btn--block" type="submit">${c(r.submit)}</button>

        <div class="form__result" data-result role="status" hidden>
          <p class="form__result-title">${c(r.result.title)}</p>
          <p>${c(r.result.text)}</p>
          <p><a class="link" data-retry href="#" target="_blank" rel="noopener noreferrer">${c(r.result.retry)}</a></p>
          <details class="form__preview">
            <summary>${c(r.result.preview)}</summary>
            <pre data-preview></pre>
          </details>
        </div>
      </form>
    </div>
  </section>`}function we(){let n=t.inquiry,{messageMin:r,messageMax:i,quantityMax:a}=e.inquiry,o=document.querySelector(`[data-form]`);if(!o)return;let s=e=>o.elements[e],c=o.querySelector(`[data-summary]`),l=o.querySelector(`[data-result]`),u=new Set,d=!1,f=(e,t)=>{let n=s(e),r=o.querySelector(`#err-${e}`);n.setAttribute(`aria-invalid`,t?`true`:`false`),o.querySelector(`[data-field="${e}"]`).classList.toggle(`has-error`,!!t),r.textContent=t,r.hidden=!t},p={name:()=>s(`name`).value.trim()?``:n.errors.name,product:()=>``,quantity:()=>{let e=s(`quantity`).value;if(e===``)return``;let t=Number(e);return Number.isInteger(t)&&t>=1&&t<=a?``:n.errors.quantity(a)},date:()=>{let e=s(`date`).value;return e?G(e)?e<W()?n.errors.datePast:``:n.errors.dateInvalid:``},message:()=>{let e=s(`message`).value.trim().length;return e?e<r?n.errors.messageShort(r):e>i?n.errors.messageLong(i):``:n.errors.messageEmpty}},m=e=>{let t=p[e]();return f(e,t),t===``};o.addEventListener(`input`,e=>{let t=e.target.name;t&&(l.hidden=!0,(u.has(t)||d)&&m(t))}),o.addEventListener(`change`,e=>{let t=e.target.name;t&&p[t]&&(u.add(t),m(t))}),o.addEventListener(`focusout`,e=>{let t=e.target.name;t&&p[t]&&(u.has(t)||s(t).value)&&(u.add(t),m(t))}),o.addEventListener(`submit`,e=>{e.preventDefault(),d=!0,l.hidden=!0;let t=[`name`,`product`,`quantity`,`date`,`message`].filter(e=>!m(e));if(c.hidden=t.length===0,t.length){s(t[0]).focus();return}let n=xe({name:s(`name`).value,productId:s(`product`).value,quantity:s(`quantity`).value,date:s(`date`).value,message:s(`message`).value}),r=Se(n);o.querySelector(`[data-retry]`).href=r,o.querySelector(`[data-preview]`).textContent=n,l.hidden=!1,window.open(r,`_blank`,`noopener,noreferrer`)})}function Te(e){let t=document.getElementById(`f-product`);t&&[...t.options].some(t=>t.value===e)&&(t.value=e,t.dispatchEvent(new Event(`change`,{bubbles:!0})))}function Ee(){let{nav:r,footer:i}=t,{location:a,contact:o}=e,s=e.hours.map(e=>`<li><span>${c(e.label)}</span><span>${e.open&&e.close?`${c(e.open)} – ${c(e.close)}`:c(t.visit.closed)}</span></li>`).join(``),l=e.social.map(e=>e.url?`<li><a href="${c(e.url)}" target="_blank" rel="noopener noreferrer">${c(e.name)}<span class="sr-only"> (yeni sekmede açılır)</span></a> <span class="footer__handle">${c(e.handle)}</span></li>`:`<li>${c(e.name)} <span class="footer__handle">${c(e.handle)}</span></li>`).join(``),u=n.map(e=>`<li><a href="#urunler" data-filter="${c(e.id)}">${c(e.label)}</a></li>`).join(``);return`
  <footer class="footer">
    <div class="wrap">
      <div class="footer__grid">
        <div class="footer__brand">
          <p class="footer__name">${h()}<span>${c(e.brand.name)}</span></p>
          <p>${c(i.blurb)}</p>
        </div>

        <nav aria-label="Alt gezinme">
          <h2 class="footer__title">Sayfa</h2>
          <ul class="footer__list">
            <li><a href="#urunler">${c(r.products)}</a></li>
            <li><a href="#hikaye">${c(r.story)}</a></li>
            <li><a href="#uretim">${c(r.process)}</a></li>
            <li><a href="#talep">${c(r.cta)}</a></li>
            <li><a href="#iletisim">${c(r.contact)}</a></li>
          </ul>
        </nav>

        <nav aria-label="Ürün kategorileri">
          <h2 class="footer__title">Kategoriler</h2>
          <ul class="footer__list">${u}</ul>
        </nav>

        <div>
          <h2 class="footer__title">İletişim</h2>
          <address class="footer__address">${a.addressLines.map(c).join(`<br>`)}</address>
          ${a.isDemo?`<p class="footer__demo">Demo adres</p>`:``}
          <ul class="footer__list footer__contact">
            <li><a href="${c(o.phoneHref)}">${c(o.phoneDisplay)}</a></li>
            ${o.email?`<li><a href="mailto:${c(o.email)}">${c(o.email)}</a></li>`:``}
          </ul>
          <ul class="footer__list footer__hours">${s}</ul>
        </div>

        <div>
          <h2 class="footer__title">${c(i.social)}</h2>
          <ul class="footer__list">${l}</ul>
          <p class="footer__demo">${c(i.socialNote)}</p>
        </div>
      </div>

      <p class="footer__legal">
        <span>© ${new Date().getFullYear()} ${c(e.brand.name)}.</span>
        <span>${c(i.legal)}</span>
      </p>
    </div>
  </footer>`}var Q=/^#urun\/([\w-]+)$/,De=`<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
  <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
</svg>`;function Oe(e){let n=t.product,r=e.ingredients||e.allergens?.length;return`
    <div class="pdialog__media">${L(p(e))}</div>
    <div class="pdialog__body">
      <p class="pdialog__cat">${c(d(e.category))}</p>
      <h2 class="pdialog__title" id="pdialog-title">${c(e.name)}</h2>
      <p class="pdialog__price">
        <span class="sr-only">${c(n.demoPrice)}: </span>${u(e.price)}<span class="pdialog__unit"> / ${c(e.unit)}</span>
        <span class="pdialog__demo">${c(n.demoPrice)}</span>
      </p>
      <p class="pdialog__desc">${c(e.description)}</p>

      <dl class="pdialog__info">
        ${e.ingredients?`<div><dt>${c(n.ingredients)}</dt><dd>${c(e.ingredients)}</dd></div>`:``}
        ${e.allergens?.length?`<div><dt>${c(n.allergens)}</dt><dd><ul class="allergens">${e.allergens.map(e=>`<li>${c(e)}</li>`).join(``)}</ul></dd></div>`:``}
      </dl>
      ${r?`<p class="note">${c(a)}</p>`:``}

      <button class="btn btn--primary pdialog__ask" type="button" data-ask="${c(e.id)}">${c(n.ask)}</button>
    </div>`}function ke(){let e=document.createElement(`dialog`);e.className=`pdialog`,e.setAttribute(`aria-labelledby`,`pdialog-title`),e.innerHTML=`
    <div class="pdialog__sheet">
      <button class="pdialog__close" type="button" aria-label="${c(t.product.close)}">${De}</button>
      <div class="pdialog__content" data-content></div>
    </div>`;let n=e.querySelector(`[data-content]`),r=null,i=null;function a(t,a){let o=f(t);o&&(r=a||document.activeElement,i=t,n.innerHTML=Oe(o),R(n),e.querySelector(`.pdialog__sheet`).scrollTop=0,e.open||(e.showModal(),document.documentElement.classList.add(`is-locked`)),history.replaceState(null,``,`#urun/${t}`))}function o(){e.open&&e.close()}e.querySelector(`.pdialog__close`).addEventListener(`click`,o);let s=!1;e.addEventListener(`pointerdown`,t=>{s=t.target===e}),e.addEventListener(`click`,t=>{t.target===e&&s&&o();let n=t.target.closest(`[data-ask]`);if(n){let e=n.dataset.ask;o(),Te(e),location.hash=`talep`}}),e.addEventListener(`close`,()=>{document.documentElement.classList.remove(`is-locked`),Q.test(location.hash)&&history.replaceState(null,``,location.pathname+location.search),r&&document.activeElement===document.body&&document.contains(r)&&r.focus(),r=null,i=null});function l(){let e=Q.exec(location.hash);e&&e[1]!==i&&a(e[1])}return{element:e,open:a,close:o,openFromHash:l}}function Ae(){if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window))return;document.documentElement.classList.add(`reveal-on`);let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`is-in`),e.unobserve(t.target))})},{rootMargin:`0px 0px -8% 0px`,threshold:.1});document.querySelectorAll(`[data-reveal]`).forEach(t=>e.observe(t))}document.getElementById(`app`).innerHTML=`
  ${ee()}
  <main id="icerik" tabindex="-1">
    ${de()}
    ${pe()}
    ${he()}
    ${_e()}
    ${ve()}
    ${ye()}
    ${Z()}
    ${Ce()}
  </main>
  ${Ee()}
`;var $=ke();document.body.append($.element),te(),ge(),we(),R(document),J(),window.setInterval(J,6e4),Ae(),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-product]`);t&&(e.preventDefault(),$.open(t.dataset.product,t))}),window.addEventListener(`hashchange`,$.openFromHash),$.openFromHash();