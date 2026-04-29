# Nurdug AG - nurdug.org

Public website for Nurdug AG, Berlin. Real estate holding with a long horizon, responsible letting, and durable value.

## Stack

Vanilla HTML/CSS/JS. No build step. Deploys to Netlify.

- `index.html` - single page, all sections + 3 legal modals
- `styles-v1.css` - palette: deep navy #0a1628 + blue #3B82E0 + copper #B87333
- `script-v1.js` - 14-language switcher, scroll reveals, mobile nav, Pattern 18 legal modal system
- `netlify.toml` - cache headers + security headers (HSTS, X-Frame-Options, Permissions-Policy)
- `robots.txt`, `sitemap.xml`, `site.webmanifest` - SEO + PWA baseline
- Images: hero (villa), logo, favicon chain, OG image, PWA icons

## Legal modals

Footer exposes three links: Impressum, Datenschutzerklaerung, Cookies. Each opens a glassmorphic modal with DE + EN content. JavaScript flips body visibility based on current language (DE for 'de', EN fallback for the other 12).

Entity data: AG (Aktiengesellschaft), HRB 81605 B Amtsgericht Charlottenburg, USt-IdNr. DE217181604, Vorstand Gudrun Funkenweh-Herzog, verantwortlich nach §18 Abs. 2 MStV: Dr. Michael Herzog.

## Languages

en, de, fr, es, it, pt, ru, zh (Simplified), zh-TW (Traditional), ja, ko, hi, ar, he. Legal modals: DE + EN only (acceptable for static info site since switcher handles content accessibility).

## Deploy

Connect repo to Netlify. Set custom domain nurdug.org. `publish = "."` so Netlify serves from repo root.

## Source

Authored by Michael Herzog (Nurdug AG) with Claude Opus 4.7 assistance. Pattern 18 Modal variant as documented in the 2nd Brain Patterns Library.
