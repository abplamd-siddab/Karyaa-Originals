# Karyaa Website

A multi-page marketing website for Karyaa — a managed remote staffing company based in Ahmedabad, India, serving Indian grocery importers in the UK, USA, Canada, Australia, and New Zealand.

## Run & Operate

- `pnpm --filter @workspace/karyaa-website run dev` — run the Vite dev server
- Preview at `/karyaa-website/` in the Replit preview pane

## Stack

- Vanilla HTML / CSS / JavaScript (no framework)
- Vite for dev server and bundling
- Google Fonts: Cormorant Garamond 300/400/italic, Jost 200/300/400/500

## Where things live

```
artifacts/karyaa-website/
├── index.html          — Homepage (hero, trust strip, why section)
├── services.html       — Services (4 packages, 6 commercial terms, CTA)
├── about.html          — About (story, stats bar, Siddab ecosystem cards)
├── contact.html        — Contact (form, details panel, FAQ accordion)
├── css/
│   ├── style.css       — All styles (~2700 lines, clearly sectioned)
│   └── animations.css  — Keyframes, .reveal / .is-visible, delay utilities
└── js/
    ├── nav.js          — Injects shared nav HTML via insertAdjacentHTML
    ├── main.js         — Scroll shadow, mobile hamburger, active link, reveal, year stamp
    └── form.js         — Contact form validation, success state, FAQ accordion
```

## Brand

| Token | Value |
|---|---|
| Primary dark | `#0D1B2A` (navy) |
| Gold accent | `#C8962A` |
| Light gold / off-white | `#F7F5F0` |
| Footer bg | `#080F18` |
| Heading font | Cormorant Garamond 300 |
| Body font | Jost 200/300/400/500 |

## Architecture decisions

- Nav is injected from `nav.js` (shared across all pages) — avoids copy-paste drift for the header.
- Footer is inline HTML on every page (no server includes in vanilla HTML) — identical block copy-pasted into all four pages.
- All CSS lives in one `css/style.css` file with labelled sections — intentional for a small static site.
- `color-mix(in srgb, ...)` used in hover states — requires modern browser.
- Active nav link detection is path-based in `main.js` (`window.location.pathname` vs `href`).

## Product

Karyaa provides dedicated India-based operations staff to Indian grocery importers worldwide. The site explains the four service packages (Data Entry Support, Research Support, Full Operations Support, Simran Pro Plus), the commercial terms, the Siddab Ventures ecosystem, and provides a contact form.

## Contact details

- WhatsApp: +91 97244 45451
- Email: info@karyaa.co
- Location: Ahmedabad, Gujarat, India
- Markets: UK, USA, Canada, Australia, New Zealand
- Legal entity: Siddab Ventures Pvt Ltd

## User preferences

- Fonts: Cormorant Garamond 300 for headings, Jost 200/300/400/500 for body
- Brand: navy #0D1B2A, gold #C8962A, light gold #F7F5F0
- Tagline: "WORK THAT BRIDGES WORLDS"

## Gotchas

- The bridge SVG mark is inlined everywhere (nav, hero watermarks, footer, contact details panel watermark) — update all copies if the mark changes.
- Font import must include `Jost:wght@200;300;400;500` — all four weights are used across the site.
- The `.container` class provides `max-width` + horizontal padding — use it inside `.footer-inner` and `.footer-bottom`.
