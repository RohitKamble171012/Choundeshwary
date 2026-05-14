# Choundeshwary Machinery

Premium industrial website for **Choundeshwary Machinery** — manufacturer of khoa & dairy processing machines (Ichalkaranji, India).

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- CSS / Tailwind animations only — **no Framer Motion, no GSAP, no shadcn**

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build / Deploy
Deploy directly to Vercel — zero config required.

```bash
npm run build
npm start
```

## Images
Place these files inside `public/images/`:

```
hero-machine.jpg
khoya-gas.jpg
paneer.jpg
cream-separator.jpg
lassi.jpg
ghee.jpg
tilting-khoya.jpg
factory.jpg
```

## Structure
```
app/
  layout.tsx        Global layout, metadata, fonts
  page.tsx          Home
  products/page.tsx Catalogue
  about/page.tsx    About
  contact/page.tsx  Contact
components/         Navbar, Hero, ProductGrid, About, WhyUs, Showcase, Gallery, Testimonials, CTA, Footer
lib/products.ts     Product data
```

## Contact (in site)
- Phone: 8208384134, 8669474287
- Address: Kudche Mala, Near Radhamohan Process, Ichalkaranji – 416115

---
Designed & Developed by **1o X Sharp Technologies**
