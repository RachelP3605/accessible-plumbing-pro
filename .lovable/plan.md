## Plumbing & Beyond — New Website Plan

A clean, trustworthy, professional local-plumber website for **Plumbing & Beyond** serving San Bruno, Daly City, and the surrounding Bay Area Peninsula. Built for strong local SEO and strict WCAG 2.1 AA / ADA compliance.

### Business info (pulled from existing site)
- **Name:** Plumbing & Beyond
- **Address:** 309 San Bruno Ave E, San Bruno, CA 94066
- **Phone:** 650-588-0414
- **Service area:** San Bruno, Daly City, South San Francisco, Millbrae, Burlingame, San Mateo, Pacifica, Brisbane, Colma

### Pages (file-based routes)
```text
src/routes/
  __root.tsx            shared header, footer, skip-link, sitewide JSON-LD
  index.tsx             Home — hero, services overview, service area, CTA
  about.tsx             About — company, licensing, why choose us
  contact.tsx           Contact — phone, email, address, hours, embedded map
  services.tsx          Services index — links to all service pages
  services.drain-cleaning.tsx
  services.water-heater-repair.tsx
  services.leak-detection-repair.tsx
  services.emergency-plumbing.tsx
  services.fixture-installation.tsx
  services.sewer-line-repair.tsx
  services.repiping.tsx
  services.garbage-disposal.tsx
  sitemap[.]xml.ts      dynamic sitemap server route
```
Plus `public/robots.txt`.

### SEO
- Unique `head()` per route: `title`, `description`, `og:title`, `og:description`, `og:url`, leaf-only `<link rel="canonical">`.
- Sitewide JSON-LD `LocalBusiness` / `Plumber` schema in `__root.tsx` (name, address, phone, geo, opening hours, areaServed, priceRange).
- Per-service-page JSON-LD `Service` schema referencing the LocalBusiness.
- FAQ section on home + service pages with `FAQPage` JSON-LD.
- Local keyword targeting in H1/H2/copy: "plumber San Bruno", "Daly City plumbing", "emergency plumber Bay Area", "water heater repair San Mateo County", etc.
- Semantic HTML: one `<h1>` per page, logical heading order, `<main>`, `<nav>`, `<footer>`, `<address>`.
- Image alt text on every image; descriptive (not "image of…").
- `robots.txt` + `/sitemap.xml` server route covering all routes.
- Relative canonicals (no project URL set yet).

### ADA / WCAG 2.1 AA compliance
- Skip-to-main-content link at top of every page.
- Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text — palette tested in tokens.
- All interactive elements keyboard-reachable with visible `:focus-visible` rings.
- Tap targets ≥ 44×44 px on mobile.
- `aria-label` on all icon-only buttons (phone, menu toggle, social icons).
- `aria-current="page"` on active nav links.
- `<html lang="en">`, descriptive page titles, semantic landmarks.
- No color-only state indicators (icons + text everywhere).
- Click-to-call links: `<a href="tel:+16505880414">` with full accessible name.
- Embedded Google Maps iframe gets `title` attribute; address provided in plain text as fallback.
- `h-dvh` (not `h-screen`) for full-height sections.
- Reduced-motion media query respected for any animations.
- Form-free design (per your choice) avoids label/error pitfalls entirely.

### Contact — click-to-call/email only
- Prominent `tel:` and `mailto:` links in header, hero CTA, and footer.
- Address block with embedded map.
- Hours of operation (will use placeholder Mon–Sat 7am–7pm, 24/7 emergency — flag for confirmation).

### Design system
- Professional plumber aesthetic: deep navy/steel-blue primary, white background, warm accent (amber/copper) for CTAs.
- Inter or similar humanist sans (avoid generic AI defaults).
- All colors as `oklch` semantic tokens in `src/styles.css`.
- shadcn `Button`, `Card` primitives with custom variants.

### Images
- Generate 3–4 photographic images: hero (plumber at work), service icons or photos, about-section image. All with proper alt text.

### Open questions / placeholders to flag in delivery
- **Hours of operation** — using sensible defaults; user should confirm.
- **License number** — left as a TODO placeholder for credibility section.
- **Email address** — none on existing site; will use `info@plumbingbeyond.com` placeholder for user to replace.
- **Years in business / reviews** — left as editable copy.

### Out of scope
- Backend / database / contact form (per your choice).
- Booking system, live chat, payment.

After build, I'll suggest running an SEO scan to verify everything's clean.
