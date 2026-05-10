# ACCRFB — Official Website

Website of the Association of Cuban Communities in the Federative Republic of Brazil. Built with [Astro](https://astro.build) and published on GitHub Pages.

---

## Requirements

- [Node.js](https://nodejs.org) 18 or higher
- npm (included with Node.js)

---

## Local development

```bash
npm install      # first time only
npm run dev      # starts the dev server at http://localhost:4321
```

Changes to `src/` are reflected in the browser automatically without a page reload.

## Build for production

```bash
npm run build    # generates the static site in dist/
npm run preview  # preview the final output locally
```

---

## Deployment

The site is published automatically to [GitHub Pages](https://accfrboficial.github.io) on every push to `main`. No manual steps are needed.

To activate it on a new repository for the first time: **Settings → Pages → Source → GitHub Actions**.

---

## Project structure

```
public/                 Images and static assets
src/
  i18n/
    es.json             Spanish strings
    pt.json             Portuguese strings
    en.json             English strings
    utils.ts            Translation helper (do not edit)
  components/           Page sections
  layouts/
    Layout.astro        HTML shell, meta tags, SEO
  pages/
    index.astro         Main page (Spanish)
    pt/index.astro      Main page (Portuguese)
    en/index.astro      Main page (English)
  styles/
    global.css          Global styles
```

---

## How to update content

### Changing text

All site text lives in `src/i18n/`. Each file corresponds to a language:

- `es.json` → Spanish
- `pt.json` → Portuguese
- `en.json` → English

Open the file for the language you want to edit and change the value of the relevant key. For example, to update the hero title in Spanish:

```json
// src/i18n/es.json
"hero-title": "Construyendo un futuro juntos en Brasil",
```

> Keep all three translation files in sync: if you add or remove a key in one language, do the same in the other two.

### Changing images

Images are stored in `public/`. To replace one:

1. Drop the new image into `public/` with the same filename as the original, **or**
2. Use a different filename and update the reference in the relevant component under `src/components/`.

Current images and where they appear:

| File | Where it appears |
|---|---|
| `logo.png` | Header and footer |
| `pic0.png` | Hero section background |
| `pic1.png` | About section |
| `pic4.jpg` | About section |
| `pic2.jpg`, `pic3.jpg`, `pic5.jpg` | Not currently used |

### Changing the Pix key or QR code

Open `src/components/Donate.astro` and edit the two variables at the top of the frontmatter:

```js
const pixKey = 'email@example.com';
const qrUrl  = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=...`;
```

The free QR generator used is [goqr.me](https://goqr.me/api/). Generate a new code with your Pix data and replace the URL.

### Changing contact details or social links

Edit `src/components/Footer.astro` directly — the email address, phone number, and links to Facebook and WhatsApp are written there.

### Adding a new language

1. Create `src/i18n/xx.json` by copying `es.json` and translating the values.
2. Add the language code to the `Locale` type and the `localeFlags`, `localeUrls`, and `localeNames` maps in `src/i18n/utils.ts`.
3. Create `src/pages/xx/index.astro` and `src/pages/xx/mant.astro` by copying the Portuguese equivalents and changing `lang = 'pt'` to `lang = 'xx'`.
4. Add the new locale to the `locales` array in `astro.config.mjs`.
