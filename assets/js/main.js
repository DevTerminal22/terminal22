
/** Configurações **/
const WHATSAPP_NUMBER = "5534992340119";
const DEFAULT_GREETING = "Olá! Vim pelo site da Terminal 22 e quero uma landing page.";

/** Util **/
const qs = (sel, el=document) => el.querySelector(sel);
const qsa = (sel, el=document) => [...el.querySelectorAll(sel)];

/** Cursor custom **/
(function initCursor(){
  const dot = qs('.custom-cursor');
  const ring = qs('.cursor-follower');
  if(!dot || !ring) return;
  window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  });
})();

/** Mobile menu **/
(function mobileMenu(){
  const btn = qs('#menu-btn');
  const menu = qs('#mobile-menu');
  if(!btn || !menu) return;
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    btn.classList.toggle('open');
  });
  qsa('#mobile-menu a').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));
})();

/** WhatsApp helper **/
function buildWaText({source="site", plan=null, price=null, utm=""}={}){
  const base = [];
  base.push(DEFAULT_GREETING);
  if (plan) base.push(`Plano: ${plan}${price?` (R$ ${price})`:``}`);
  base.push(`Fonte: ${source.toUpperCase()}`);
  if (utm) base.push(`UTM: ${utm}`);
  return encodeURIComponent(base.join(" | "));
}
function waHref(opts={}){
  const text = buildWaText(opts);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
function openWA(opts={}){
  window.open(waHref(opts), "_blank");
}

/** Bind CTAs top/hero/cta-final **/
qsa('[data-wa]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const utm = new URLSearchParams(window.location.search).toString();
    openWA({ source: el.getAttribute('data-wa') || 'cta', utm });
  });
});

/** Bind botões dos planos **/
qsa('button[data-plan]').forEach(btn => {
  btn.addEventListener('click', () => {
    const plan = btn.getAttribute('data-plan');
    const price = btn.getAttribute('data-price');
    const utm = new URLSearchParams(window.location.search).toString();
    openWA({ source: 'planos', plan, price, utm });
  });
});

/** Acessibilidade pequena: teclado abre links dos planos **/
qsa('button[data-plan]').forEach(btn => {
  btn.addEventListener('keyup', (e) => {
    if(e.key === 'Enter' || e.key === ' ') btn.click();
  });
});
