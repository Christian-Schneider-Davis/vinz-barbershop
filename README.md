# Vinz Barber Shop — Website

A one-page marketing site for Vinz Barber Shop (Barcelona), built with React + Vite.
Every WhatsApp and Instagram link on the page is a real, clickable CTA driving
customers to book via WhatsApp or follow on Instagram.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/` that you can deploy anywhere (Netlify,
Vercel, GitHub Pages, your own hosting, etc.).

## Editing business info

Everything specific to the shop — phone numbers, Instagram handle, address,
and opening hours — lives in one place:

```
src/data/businessInfo.js
```

Edit that file and the WhatsApp links, Instagram links, hours table, and map
all update automatically across the whole site.

## Structure

- `src/components/Navbar.jsx` — sticky header with nav links + "Reservar cita" CTA
- `src/components/Hero.jsx` — headline, WhatsApp + Instagram CTAs, animated barber pole
- `src/components/Services.jsx` — service cards, each with its own WhatsApp booking link
- `src/components/About.jsx` — brand story / trust points
- `src/components/Instagram.jsx` — Instagram follow banner
- `src/components/HoursLocation.jsx` — hours table, embedded Google Map, directions button
- `src/components/Footer.jsx` — contact details and social links
- `src/components/WhatsAppButton.jsx` — floating WhatsApp button, visible on every scroll position

## Notes

- The Instagram "grid" uses stylized icon tiles rather than real photos —
  swap in real photos from `@Vinzbarbershop_bcn` any time by replacing the
  tiles in `Instagram.jsx` with `<img>` elements.
- No prices are listed for services since none were provided; each service
  card links straight to WhatsApp so customers can confirm price and
  availability directly with the shop.
