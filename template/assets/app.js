// ═══════════════════════════════════════════════════
//  1. SITE CONFIG — change these for a new project
// ═══════════════════════════════════════════════════
const SITE = {
  brand: 'SITA', brandAccent: 'Operation',
  subtitle: 'ELQ AIRPORT · IT OPERATIONS',
  heroKicker: 'AIRPORT IT OPERATIONS · LIVE NETWORK',
  heroTitle: 'ELQ Airport',
  heroText: 'One operational view for sections, devices, tags and network ports.',
  tagLabel: 'SITA tag'            // what the asset tag is called in this project
};

// ═══════════════════════════════════════════════════
//  2. DATA — sections → groups → nodes → assets
//  Replace the sample rows with the real data of the new project.
// ═══════════════════════════════════════════════════
const SECTIONS = [
  { id: 'a', label: 'Terminal 1', short: 'T1', color: '#59C7FF', groups: [
    { key: 'ckb', name: 'CKB', desc: 'Check-In Workstations', loc: 'Departure Hall', color: '#4BA3FF', nodes: [
      { name: 'T1-CKB001', ip: '10.0.0.11', assets: [
        { type: 'Computer', model: 'HP Elite Mini 600 G9', sn: 'SN-0001', tag: 'XS00000001' },
        { type: 'Monitor',  model: 'HP Series 3 Pro',      sn: 'SN-0002', tag: 'XS00000002' } ] },
      { name: 'T1-CKB002', ip: '10.0.0.12', assets: [
        { type: 'Computer', model: 'HP Elite Mini 600 G9', sn: 'SN-0003', tag: '' } ] } ] },
    { key: 'fids', name: 'FIDS', desc: 'Flight Information Displays', loc: 'Public Area', color: '#9D7EF7', nodes: [
      { name: 'T1-FIDS001', ip: '10.0.1.21', loc: 'Gate 1', assets: [
        { type: 'Screen', model: 'LG Digital Signage', sn: '', tag: 'XS00000010', loc: 'Gate 1' } ] } ] }
  ]},
  { id: 'b', label: 'Terminal 2', short: 'T2', color: '#2CE0D0', groups: [
    { key: 'gtu', name: 'GTU', desc: 'Gate Workstations', loc: 'Departure Gates', color: '#1FD8C8', nodes: [
      { name: 'T2-GTU001', ip: '10.1.0.31', assets: [
        { type: 'Computer', model: 'HP Elite Mini 600 G9', sn: 'SN-0100', tag: 'XS00000100' } ] } ] }
  ]}
];

// ═══════════════════════════════════════════════════
//  3. ENGINE — normally no changes needed below
// ═══════════════════════════════════════════════════
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const blank = v => (v == null || v === '—') ? '' : v;
const sec = id => SECTIONS.find(s => s.id === id);
const grpAssets = g => g.nodes.reduce((a, n) => a + n.assets.length, 0);
const secStats = s => ({ groups: s.groups.length, nodes: s.groups.reduce((a, g) => a + g.nodes.length, 0),
                         assets: s.groups.reduce((a, g) => a + grpAssets(g), 0) });

// ── Navigation ──
const ICONS = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  section: '<path d="M3 20h18"/><path d="M5 20V9l7-4 7 4v11"/><path d="M9 20v-5h6v5"/>',
  missing: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><path d="M7.5 7.5h.01"/>'
};
const icon = k => `<svg class="nt-ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>`;
let curPage = 'home';
function buildNav() {
  const tabs = [['home', 'Home', icon('home')], ...SECTIONS.map(s => ['sec:' + s.id, s.label, icon('section')]), ['missing', 'Missing Tags', icon('missing')]];
  document.getElementById('nb-tabs').innerHTML = tabs.map(([id, l, i]) =>
    `<button class="nt" data-page="${id}" onclick="go('${id}')">${i}${esc(l)}</button>`).join('');
  document.getElementById('t-drawer').innerHTML = tabs.map(([id, l]) =>
    `<button class="nt" data-page="${id}" onclick="go('${id}');closeDrawer()">${esc(l)}</button>`).join('');
}
function go(id) { id.startsWith('sec:') ? openSection(id.slice(4)) : nav(id); }
function nav(id, tab) {
  document.querySelectorAll('.pg').forEach(p => p.classList.toggle('on', p.id === 'pg-' + id));
  curPage = tab || id;
  document.querySelectorAll('.nt[data-page]').forEach(b => b.classList.toggle('on', b.dataset.page === curPage));
  window.scrollTo({ top: 0, behavior: 'instant' });
}
function toggleDrawer() { const d = document.getElementById('t-drawer'); d.classList.contains('open') ? closeDrawer() : (d.classList.add('open'), document.body.style.overflow = 'hidden'); }
function closeDrawer() { document.getElementById('t-drawer').classList.remove('open'); document.body.style.overflow = ''; }
function placeDrawer() { document.getElementById('t-drawer').style.top = document.getElementById('topbar').offsetHeight + 'px'; }
window.addEventListener('resize', () => { placeDrawer(); if (innerWidth > 960) closeDrawer(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeDrawer(); closeModal(); } });
const tick = () => document.getElementById('clk').textContent = new Date().toLocaleTimeString();
setInterval(tick, 1000);

// ── Hero banner (same on every page) ──
function hero(id, c) {
  document.getElementById(id).innerHTML = `<section class="dash-hero">
    <div class="dash-hero-copy">
      <div class="dash-hero-kicker"><span class="dash-hero-pulse"></span> ${esc(c.kicker)}</div>
      <h1>${c.title}</h1><p>${esc(c.text)}</p>
      <div class="dash-hero-meta">${(c.meta || []).map(m => `<span><b>${m[0]}</b> ${m[1]}</span>`).join('')}</div>
    </div>
    <div class="dash-hero-orbit" aria-hidden="true">
      <div class="hero-orbit-ring hero-orbit-ring-a"></div><div class="hero-orbit-ring hero-orbit-ring-b"></div>
      <div class="hero-orbit-core"><span>${esc(c.core)}</span><small>ONLINE</small></div>
      <div class="hero-plane">✈</div>
      <i class="hero-node hero-node-a"></i><i class="hero-node hero-node-b"></i><i class="hero-node hero-node-c"></i>
    </div></section>`;
}

// ── Clickable counter tile ──
const tile = (val, label, sub, color, onclick) =>
  `<div class="mcard mc-go" role="button" tabindex="0" style="--mc-c:${color}" onclick="${onclick}" onkeydown="if(event.key==='Enter'){${onclick}}">
    <div class="mv">${val}</div><div class="ml">${esc(label)}</div><div class="ms">${esc(sub)}</div><span class="mc-arr">→</span></div>`;

// ── Home ──
function buildHome() {
  const all = SECTIONS.map(secStats), sum = k => all.reduce((a, s) => a + s[k], 0);
  hero('hero-home', { kicker: SITE.heroKicker, title: SITE.heroTitle, text: SITE.heroText, core: SITE.brand,
    meta: [[SECTIONS.length, 'sections'], [sum('nodes'), 'nodes'], [sum('assets'), 'assets']] });
  document.getElementById('ms-home').innerHTML =
    SECTIONS.map(s => { const st = secStats(s); return tile(st.nodes, s.label + ' nodes', st.groups + ' groups', s.color, `openNodes('${s.id}')`); }).join('') +
    tile(sum('assets'), 'Total assets', 'all sections', 'var(--amb)', `openNodes('all')`) +
    tile(MISSING.tag.length, 'Missing tags', MISSING.sn.length + ' without serial', 'var(--red)', `nav('missing')`);
  document.getElementById('home-sections').innerHTML = SECTIONS.map(s => { const st = secStats(s); return `
    <div class="tcard" style="--c:${s.color}" onclick="openSection('${s.id}')">
      <div class="tcard-top"><span class="tbadge t1">${esc(s.short)}</span><span class="tarr">→</span></div>
      <div class="tcard-title">${esc(s.label)}</div>
      <div class="tcard-sub">${st.groups} groups · ${st.assets} assets</div>
      <div class="tcard-cats">${s.groups.map(g => `<span><b>${g.nodes.length}</b> ${esc(g.name)}</span>`).join('')}</div>
    </div>`; }).join('');
  const q = [['Missing Tags', MISSING.tag.length + ' without tag', '#F28C28', '#E11D48', "nav('missing')"],
             ...SECTIONS.map((s, i) => [s.label, secStats(s).nodes + ' nodes', ['#8B5CF6', '#06B6D4', '#A3E635'][i % 3], ['#3B82F6', '#22D3A0', '#14B8A6'][i % 3], `openSection('${s.id}')`])];
  document.getElementById('home-quick').innerHTML = q.map(([n, c, a, b, on]) =>
    `<div class="ql" role="button" tabindex="0" style="--q1:${a};--q2:${b}" onclick="${on}"><div class="ql-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS.section}</svg></div><div class="ql-txt"><div class="ql-name">${esc(n)}</div><div class="ql-count">${esc(c)}</div></div><span class="ql-go">→</span></div>`).join('');
}

// ── Section page: counters + group cards ──
function openSection(id) {
  const s = sec(id), st = secStats(s);
  document.getElementById('sec-bc').innerHTML = `<span class="bc-a" onclick="nav('home')">Home</span><span class="bc-sep">/</span><span class="bc-cur">${esc(s.label)}</span>`;
  hero('hero-section', { kicker: s.label.toUpperCase() + ' · LIVE', title: esc(s.label), core: s.short, text: `${st.groups} groups, ${st.nodes} nodes and ${st.assets} assets.`,
    meta: [[st.nodes, 'nodes'], [st.assets, 'assets'], [st.groups, 'groups']] });
  document.getElementById('ms-section').innerHTML = tile(st.nodes, 'Total nodes', st.groups + ' groups', s.color, `openNodes('${id}')`) +
    tile(st.assets, 'Total assets', 'tap to view', 'var(--grn)', `openNodes('${id}')`);
  document.getElementById('sec-groups').innerHTML = s.groups.map(g => `
    <div class="grp" onclick="openNodes('${id}','${g.key}')">
      <div class="grp-bar" style="background:${g.color}"></div>
      <div class="grp-body"><div class="grp-name">${esc(g.name)}</div><div class="grp-desc">${esc(g.desc)}</div>
        <div class="grp-foot"><div class="grp-stats">
          <div class="gst"><div class="gst-v" style="color:${g.color}">${g.nodes.length}</div><div class="gst-l">Nodes</div></div>
          <div class="gst"><div class="gst-v">${grpAssets(g)}</div><div class="gst-l">Assets</div></div>
        </div><span class="grp-arr">→</span></div></div></div>`).join('');
  nav('section', 'sec:' + id);
}

// ── Node cards view (section, group or everything) ──
let nv = { sec: 'all', grp: null }, shownNodes = [];
function nvGroups() {
  const secs = nv.sec === 'all' ? SECTIONS : [sec(nv.sec)];
  return secs.flatMap(s => s.groups.filter(g => !nv.grp || g.key === nv.grp).map(g => [s, g]));
}
function openNodes(secId, grpKey) {
  nv = { sec: secId, grp: grpKey || null };
  const s = secId === 'all' ? null : sec(secId), g = grpKey && s.groups.find(x => x.key === grpKey);
  const title = g ? g.name : s ? s.label : 'All nodes', gs = nvGroups();
  document.getElementById('nv-bc').innerHTML = `<span class="bc-a" onclick="nav('home')">Home</span><span class="bc-sep">/</span>` +
    (s ? `<span class="bc-a" onclick="openSection('${s.id}')">${esc(s.label)}</span><span class="bc-sep">/</span>` : '') + `<span class="bc-cur">${esc(title)}</span>`;
  hero('hero-nodes', { kicker: (s ? s.label : 'ALL SECTIONS').toUpperCase() + ' · NODES', title: esc(title), core: g ? g.name : s ? s.short : SITE.brand,
    text: g ? `${g.desc} — ${g.loc}.` : 'Tap a card for serial number, tag and location.',
    meta: [[gs.reduce((a, [, x]) => a + x.nodes.length, 0), 'nodes'], [gs.reduce((a, [, x]) => a + grpAssets(x), 0), 'assets']] });
  document.getElementById('nv-q').value = '';
  renderNodes();
  nav('nodes', s ? 'sec:' + s.id : 'home');
}
function typeChips(a) {
  const c = {}; a.forEach(x => c[x.type] = (c[x.type] || 0) + 1);
  const k = Object.keys(c);
  return k.slice(0, 2).map(t => `<span class="nc-chip">${esc(t)}${c[t] > 1 ? ' ×' + c[t] : ''}</span>`).join('') + (k.length > 2 ? `<span class="nc-chip more">+${k.length - 2}</span>` : '');
}
function renderNodes() {
  const q = document.getElementById('nv-q').value.toLowerCase();
  shownNodes = [];
  const html = nvGroups().map(([s, g]) => {
    const cards = g.nodes.filter(n => !q || [n.name, n.ip, n.loc, ...n.assets.flatMap(a => [a.type, a.model, a.sn, a.tag])].some(v => (v || '').toLowerCase().includes(q)))
      .map(n => { const i = shownNodes.push({ s, g, n }) - 1; return `
        <button type="button" class="nc" style="--c:${g.color}" onclick="openNode(${i})">
          <div class="nc-top"><span class="nc-name">${esc(n.name)}</span><span class="nc-n">${n.assets.length}</span></div>
          <div class="nc-ip">${esc(n.ip || '—')}</div>
          <div class="nc-chips">${n.loc ? `<span class="nc-chip loc">${esc(n.loc)}</span>` : typeChips(n.assets)}</div></button>`; }).join('');
    return cards && `<div class="miss-sec" style="--c:${g.color}"><div class="miss-hdr"><span class="fsec-bar"></span><span class="fsec-name">${esc(g.name)}</span><span class="fsec-desc">${esc(g.desc)}</span><span class="fsec-count">${g.nodes.length}</span></div><div class="nc-grid">${cards}</div></div>`;
  }).join('');
  document.getElementById('nv-list').innerHTML = html || '<div class="empty-note">Nothing matches.</div>';
  document.getElementById('nv-rc').textContent = `${shownNodes.length} nodes · tap a card for details`;
}

// ── Detail modal ──
const fact = (l, v, cls) => { v = blank(v) || '—'; return `<button type="button" class="nd-fact${cls ? ' ' + cls : ''}" ${v === '—' ? 'disabled' : ''} onclick="copyFact(this)"><span class="nd-fl">${l}</span><span class="nd-fv mono">${esc(v)}</span></button>`; };
function openNode(i) {
  const { s, g, n } = shownNodes[i], a = n.assets, one = a.length === 1 ? a[0] : null;
  let facts = fact('IP address', n.ip) + fact('Location', (one && one.loc) || n.loc || g.loc) + fact('Group', g.name) + fact('Section', s.label);
  if (one) facts = fact('Serial number', one.sn) + fact(SITE.tagLabel, one.tag, 'sita') + fact('Model', one.model) + facts;
  const list = one || !a.length ? '' : `<div class="nd-sec">ASSETS · ${a.length}</div><div class="nd-assets">` + a.map(x => `
    <div class="nd-asset"><div class="nd-asset-top"><span class="nd-asset-type">${esc(x.type)}</span><span class="nd-asset-model">${esc(x.model || '—')}</span></div>
    <div class="nd-asset-kv"><button type="button" onclick="copyFact(this)"><i>SERIAL</i><b>${esc(x.sn || '—')}</b></button>
    <button type="button" class="sita" onclick="copyFact(this)"><i>${esc(SITE.tagLabel.toUpperCase())}</i><b>${esc(x.tag || '—')}</b></button></div></div>`).join('') + '</div>';
  const card = document.getElementById('nd-card');
  card.style.setProperty('--c', g.color);
  card.innerHTML = `<div class="nd-head"><div class="nd-badges"><span class="nd-badge">${esc(g.name)}</span><span class="nd-badge dim">${esc(s.label)}</span></div>
    <button type="button" class="nd-x" onclick="closeModal()" aria-label="Close">✕</button><h2 id="nd-title">${esc(n.name)}</h2><p>${esc(g.desc)}</p></div>
    <div class="nd-body"><div class="nd-facts">${facts}</div>${list}</div>`;
  document.getElementById('nd-overlay').classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closeModal() { document.getElementById('nd-overlay').classList.remove('on'); document.body.style.overflow = ''; }
function copyFact(b) { const t = (b.querySelector('.nd-fv') || b.querySelector('b')).textContent; try { navigator.clipboard.writeText(t).then(() => { b.classList.add('copied'); setTimeout(() => b.classList.remove('copied'), 900); }); } catch (e) {} }

// ── Missing tags / serials ──
const MISSING = { tag: [], sn: [] };
SECTIONS.forEach(s => s.groups.forEach(g => g.nodes.forEach(n => n.assets.forEach(a => {
  if (!blank(a.tag)) MISSING.tag.push({ s, g, n, a });
  if (!blank(a.sn)) MISSING.sn.push({ s, g, n, a });
}))));
let missKind = 'tag';
function setMiss(k) { missKind = k; document.querySelectorAll('.miss-tab').forEach(b => b.classList.toggle('on', b.dataset.k === k)); renderMissing(); }
function renderMissing() {
  shownNodes = [];
  const cards = MISSING[missKind].map(({ s, g, n, a }) => {
    const i = shownNodes.push({ s, g, n }) - 1;
    return `<button type="button" class="nc" style="--c:${g.color}" onclick="openNode(${i})"><div class="nc-top"><span class="nc-name">${esc(a.type)}</span></div>
      <div class="nc-ip">${esc(n.name)}</div><div class="nc-chips"><span class="nc-chip miss-flag">${missKind === 'tag' ? 'No tag' : 'No serial'}</span></div></button>`;
  }).join('');
  document.getElementById('miss-list').innerHTML = cards ? `<div class="nc-grid">${cards}</div>` : '<div class="empty-note">Nothing missing.</div>';
}

// ── Export: styled Excel (ExcelJS from cdnjs) and CSV ──
function nodesSpec() {
  const rows = nvGroups().flatMap(([s, g]) => g.nodes.flatMap(n => n.assets.map(a => [s.label, g.name, n.name, n.ip || '', a.type, a.model || '', a.sn || '', a.tag || '', a.loc || n.loc || ''])));
  return { file: 'Nodes', title: `${SITE.brand} ${SITE.brandAccent} — nodes`, rows, band: 2,
    cols: ['SECTION', 'GROUP', 'NODE', 'IP', 'TYPE', 'MODEL', 'SERIAL', SITE.tagLabel.toUpperCase(), 'LOCATION'] };
}
async function exportNodes(fmt) {
  const sp = nodesSpec(), today = new Date().toISOString().slice(0, 10);
  if (fmt === 'csv') {
    const q = c => '"' + String(c).replace(/"/g, '""') + '"';
    return dl(`${sp.file}_${today}.csv`, 'text/csv;charset=utf-8', '﻿' + [sp.cols, ...sp.rows].map(r => r.map(q).join(',')).join('\r\n'));
  }
  if (!window.ExcelJS) await new Promise((ok, no) => { const s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js'; s.onload = ok; s.onerror = no; document.head.appendChild(s); });
  const wb = new ExcelJS.Workbook(), ws = wb.addWorksheet('Data', { views: [{ state: 'frozen', ySplit: 2 }] }), n = sp.cols.length;
  const fill = c => ({ type: 'pattern', pattern: 'solid', fgColor: { argb: c } });
  ws.mergeCells(1, 1, 1, n); Object.assign(ws.getCell(1, 1), { value: sp.title, font: { bold: true, size: 14, color: { argb: 'FFFFFFFF' } }, fill: fill('FF0B1B2D') });
  ws.addRow(sp.cols).eachCell(c => Object.assign(c, { font: { bold: true, color: { argb: 'FFFFFFFF' } }, fill: fill('FF1F4E79') }));
  let shade = false, prev;
  sp.rows.forEach((r, i) => { if (i && r[sp.band] !== prev) shade = !shade; prev = r[sp.band];
    const row = ws.addRow(r); if (shade) row.eachCell(c => c.fill = fill('FFEAF2FB')); row.getCell(8).font = { bold: true, color: { argb: 'FFC55A11' } }; });
  ws.autoFilter = { from: { row: 2, column: 1 }, to: { row: 2, column: n } };
  sp.cols.forEach((h, i) => ws.getColumn(i + 1).width = Math.min(44, Math.max(10, ...sp.rows.map(r => String(r[i]).length), h.length) + 3));
  dl(`${sp.file}_${today}.xlsx`, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', await wb.xlsx.writeBuffer());
}
async function dl(name, type, data) {
  const blob = new Blob([data], { type });
  if (window.claude && claude.use) { const d = await claude.use('downloads').catch(() => null); if (d) return d.save({ filename: name, data: blob }).catch(() => {}); }
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove();
}

// ── Boot ──
document.getElementById('brand-name').innerHTML = `${esc(SITE.brand)} <span>${esc(SITE.brandAccent)}</span>`;
document.getElementById('brand-sub').textContent = SITE.subtitle;
document.title = `${SITE.brand} ${SITE.brandAccent}`;
buildNav(); buildHome(); renderMissing(); tick(); placeDrawer();
hero('hero-missing', { kicker: 'DATA QUALITY', title: 'Missing<br><span>Tags</span>', core: 'TAGS', text: 'Assets without a tag or serial number.',
  meta: [[MISSING.tag.length, 'without tag'], [MISSING.sn.length, 'without serial']] });
document.getElementById('miss-n-tag').textContent = MISSING.tag.length;
document.getElementById('miss-n-sn').textContent = MISSING.sn.length;
nav('home');
