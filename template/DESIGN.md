# Operations Dashboard Template

A reusable copy of the ELQ IT Dashboard design. Static site: no build step, no server, no database.
To start a new project, copy this folder, edit the config and data at the top of `assets/app.js`, and deploy.

## Asking Claude to reuse it

> Build a dashboard for <project> using the template in `template/` of Y1zeee/ELQ_IT_Dashboard.
> Same design, header, glass navigation and cards. Sections: …, groups: …, data: …

## Files

| File | What it holds |
|---|---|
| `index.html` | Page shell: top bar (brand mark, clock), glass nav, page containers, detail modal |
| `assets/app.js` | 1. `SITE` config · 2. `SECTIONS` data · 3. engine (navigation, hero, tiles, cards, modal, missing tags, export) |
| `assets/style.css` | Full design system (tokens, components, responsive rules), shared with the live dashboard |

## Change for a new project

1. **Brand** – `SITE.brand`, `SITE.brandAccent`, `SITE.subtitle`, hero texts, `SITE.tagLabel` (e.g. "Asset tag").
2. **Logo mark** – the `<svg>` inside `.nb-mark` in `index.html` (plane icon; replace the path for another symbol).
3. **Data** – `SECTIONS` → `groups` → `nodes` → `assets` (`type, model, sn, tag, loc`). Navigation tabs, counters, cards, Missing Tags and exports are generated from it.
4. **Colours** – tokens in `:root` at the top of `style.css` (`--blu`, `--tel`, `--pur`, `--amb`, `--grn`, `--red`, surfaces `--s1..--s3`, text `--t0..--t3`). Each section/group also has its own `color`.

## Design system

**Look:** dark navy background with soft gradient mesh, glass surfaces, blue→teal accent gradient, orange for tag numbers.
**Type:** Inter (UI text), JetBrains Mono (names, IPs, serials, numbers).

| Component | Classes | Notes |
|---|---|---|
| Brand header | `.nb-logo`, `.nb-mark`, `.nb-logo-name`, `.nb-logo-sub` | Gradient tile + plane + animated flight path |
| Glass navigation | `.nb-tabs .nt`, `.nt.on`, `.nt-ic` | Pill buttons, icon per page, glowing active tab; `.nb-drawer` on mobile |
| Hero banner | `.dash-hero` (built by `hero()`) | Kicker, big title, text, meta numbers, orbit with plane |
| Counter tiles | `.mstrip .mcard.mc-go` (built by `tile()`) | Clickable, open a filtered card view |
| Section cards | `.tcard`, `.tcard-cats` | Summary per section |
| Quick access | `.ql-grid .ql` | Gradient icon tiles, last row stretches |
| Group cards | `.grp-grid .grp` | Colour bar, node and asset counts |
| Node cards | `.nc-grid .nc` | Name, IP, type chips; tap opens the modal |
| Collapsible section | `.fsec`, `.fsec-hdr`, `.fsec.open` | Used for grouped lists |
| Detail modal | `.nd-overlay`, `.nd-card`, `.nd-fact`, `.nd-asset` | Click a value to copy it; tag values orange (`.sita`) |
| Search / actions | `.bar input`, `.btn.btn-g`, `.btn.btn-b` | Excel (green) and CSV (blue) |
| Missing data | `.miss-tabs`, `.miss-tab.on`, `.nc-chip.miss-flag` | Red chip for what is missing |

**Layout rules:** full width on every screen with safe-area padding; no sideways scroll; grids use `auto-fill/minmax`; tested 375 px → 2560 px.

**Exports:** Excel via ExcelJS (dark title row, blue header, zebra bands per node, frozen header, filter, orange tag column); CSV with UTF-8 BOM and the same columns. Inside the claude.ai preview, downloads go through the viewer's `downloads` capability.

## Run and deploy

- Local: open `index.html`, or `python3 -m http.server 8080` inside the folder.
- Any static host: upload the folder (Cloudflare Pages/Workers static assets, Netlify, Vercel, GitHub Pages, Hostinger `public_html`).
- Needs internet only for Google Fonts and the ExcelJS library.
