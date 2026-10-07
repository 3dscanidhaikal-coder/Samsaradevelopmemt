# Sansara Development

A responsive architectural landing-page prototype using basic HTML, Tailwind CSS via CDN, custom CSS, and vanilla JavaScript. No build step or framework.

## Preview

Open `index.html` directly, or run `node server.cjs` and visit http://localhost:4173. The preview server listens only on the local computer. Internet access is needed for Tailwind CDN and Google Fonts; the custom stylesheet also supports the main layout independently.

## Implemented

- Image-led hero, numbered editorial chapters, Solvyn City flagship, residences, construction journey, trust, FAQs and contact.
- Transparent-to-solid header, mobile menu with keyboard handling, restrained scroll reveals, reduced-motion support, image hover effects and interactive philosophy imagery.
- Project details with all nine published residence types, native accordions, philosophy quote slider, and a validated enquiry form with a local text download and user-controlled WhatsApp draft.
- Three AI-generated architectural placeholders, optimized to WebP. Original PNGs and exact prompts are retained; see ASSETS.md.

## Content decisions and launch requirements

- The approved brand spelling is **Sansara** throughout the website.
- The PRD's Next.js Image suggestion does not apply to the explicitly requested vanilla stack.
- The typographic wordmark is a provisional identity, not an official supplied logo.
- Images are fictional concepts and identified as such. Published residence specifications and company commitments are sourced from the old site; see CONTENT-SOURCES.md. Current prices, inventory and dated construction status are still requested from the team.
- Studio philosophy statements replace unverified customer testimonials.
- The consultation form prepares a local file and a WhatsApp draft. It never automatically sends a message or submits to a CRM. Opening the draft shares it with WhatsApp; the visitor reviews and sends it there. Add a final privacy policy before launch.
- WhatsApp, Instagram and Telegram use the old site's published phone/handles. Catalogue and presentation are request flows, because the old site does not expose direct PDF downloads. RU translation and approved legal copy remain outstanding.
- Project exploration uses local detail dialogs; dedicated project pages are outside the home-page scope.

## Files

`index.html` — content and semantic structure. `styles.css` — visual system and responsive layout. `script.js` — interactions. `assets/` — generated artwork. `server.cjs` — optional local static preview server.

The previous left-aligned serif hero and navigation have been restored. The shared header/hero grid and CTA/coordinates alignment fixes are retained.

Reference: https://www.driessenarchitectuur.nl/ — reviewed for editorial structure, large imagery, restrained navigation and interactions; no assets or copy were reused.

## Restored single-page version

The active site is the full single-page layout from before the About Us split. The split homepage, About Us page and styles are preserved under `archive/` for reference.
