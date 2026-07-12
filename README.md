# We Outside!

**We Outside!** is a lightweight proof of concept for small community outdoor events — picnics, neighborhood festivals, nonprofit gatherings, and park celebrations.

This is a fictional demo application built with modern React patterns. It is designed to be easy to host, easy to update, and accessible for all ages.

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The static output is written to `dist/` and is suitable for hosts such as Netlify, Vercel, GitHub Pages, or any static file server.

### SPA fallback

This app uses client-side routing (React Router). Configure your host to serve `index.html` for unknown paths so direct links like `/vendors` work on refresh.

## Routes

| Route | Page |
|-------|------|
| `/` | Landing page with hero navigation |
| `/vendors` | Vendor listings |
| `/map` | Event map image |
| `/schedule` | Main stage schedule (cards or image) |
| `/contact` | Contact form |

## Vendor data

Fictional vendor entries live in [`src/data/vendors.ts`](src/data/vendors.ts). Update that file to change names, categories, booth numbers, or social links.

## Schedule

The Schedule page supports two client-configured display modes:

| Mode | Value | Presentation |
|------|-------|----------------|
| Cards (default) | `cards` | Interactive expandable schedule cards |
| Image | `image` | Existing client-provided schedule graphic |

Set `VITE_SCHEDULE_DISPLAY_MODE` in `.env` (see [`.env.example`](.env.example)). Accepted values are `cards` and `image`. Invalid or missing values fall back to `cards`.

Structured schedule events live in [`src/data/schedule.ts`](src/data/schedule.ts). Types are defined in [`src/types/schedule.ts`](src/types/schedule.ts).

To add, remove, or edit events, update the `scheduleEvents` array. Each event includes `id`, `title`, `time`, `description`, and optional `socialLinks` with `platform` and `url`.

Social link platforms: `instagram`, `facebook`, `tiktok`, `youtube`, or `link` (generic). Icons use [Line Awesome](https://icons8.com/line-awesome) via CDN in `index.html`.

### Card schedule behavior

- Collapsed cards show only the title and time.
- Click or tap a card to expand it in place and reveal the description and social links.
- Only one card can be expanded at a time; selecting another card collapses the previous one.
- Selecting the active card again collapses it.
- Scrolling the page collapses the expanded card (with a small scroll-distance guard to avoid accidental collapse on mobile layout shifts).
- Image mode preserves the existing schedule graphic workflow via [`src/config/assets.ts`](src/config/assets.ts).

## Replacing images

Image paths are centralized in [`src/config/assets.ts`](src/config/assets.ts).

| Asset | Current placeholder | Replace with |
|-------|---------------------|--------------|
| Hero | `src/assets/images/event-hero.png` | Replace with a new hero image and update import in `assets.ts` |
| Event map | `src/assets/images/event-map-placeholder.png` | Replace with a client-provided map graphic |
| Schedule | `src/assets/images/event-schedule-placeholder.svg` | Client `event-schedule-placeholder.png` |

After adding new files, update the imports in `src/config/assets.ts`. Page components do not need to change.

## Application modes

Mode is controlled by `VITE_APP_MODE` (see [`.env.example`](.env.example)).

| Mode | Value | Contact behavior |
|------|-------|------------------|
| Demo (default) | `demo` | Form validates and shows alert: `This feature is not live for the demo`. EmailJS is **not** called. |
| Production | `production` | Form sends via EmailJS when configured. |

Configuration is centralized in [`src/config/appConfig.ts`](src/config/appConfig.ts). Components should not read raw `import.meta.env` values directly.

## Contact / EmailJS architecture

```
ContactForm.tsx  →  contactService.ts  →  @emailjs/browser (production only)
```

- **`ContactForm.tsx`** — labels, validation, form state, errors, calls the service.
- **`contactService.ts`** — demo vs production behavior and EmailJS sending.
- **`appConfig.ts`** — mode and EmailJS environment values.

### Production EmailJS variables

```env
VITE_APP_MODE=production
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Copy `.env.example` to `.env` and fill in your EmailJS values. Do not commit `.env` — it is gitignored.

### Activating live contact delivery

1. Create an EmailJS service, template, and public key.
2. Set `VITE_APP_MODE=production` in `.env`.
3. Provide the three `VITE_EMAILJS_*` variables.
4. Rebuild and deploy.

Template parameters sent: `from_name`, `reply_to`, `message` (adjust your EmailJS template to match).

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- EmailJS (`@emailjs/browser`)

## License

Proof of concept — replace placeholder content and imagery before client use.
