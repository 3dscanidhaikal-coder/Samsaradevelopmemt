# Developer handoff

This is a static HTML/CSS/vanilla JavaScript website. No install or build step is required.

## Run locally
Install Node.js, then run `node server.cjs` from this folder. Open http://localhost:4173.
The server binds to 127.0.0.1. Stop it with Ctrl+C.
Internet access is needed for Google Fonts, Tailwind CDN, map resources, and the temporary Unsplash team portraits.

## Main files
- index.html: homepage
- about.html: company and temporary team portraits
- projects.html: project carousel and phase links
- residences.html: residence directory and category filters
- solvyn-phase-1.html / solvyn-phase-2.html: phase pages
- assets/residence-solvyn-*.html / assets/residence-pandawa-*.html: nine dedicated residence pages
- styles.css: shared styling and responsive rules
- script.js: shared navigation, enquiry dialogs, motion, and residence data
- assets/residences.js, projects.js, language.js, flagship.js: page-specific behaviour
- server.cjs: local preview server

Residence pages live in assets and use <base href="../">, so links and resources resolve from the website root. Preserve this when moving them.

## Generated residence pages
`node build-residence-pages.cjs` generates all nine residence pages from the residence data in script.js and the shared residences.html shell. It then runs refine-residence-pages.cjs and update-residence-recommendations.cjs.
Edit the generators as well as any page template changes to prevent future regeneration overwriting edits.

## Content requiring review
- Team portraits are temporary stock images; names and roles are placeholders.
- Some gallery images are shared architectural concepts rather than unit-specific renders.
- Phase 1 and Phase 2 have supplied render assets. The directory still includes older Solvyn/Pandawa records; reconcile names and unit specifications with the owner before launch.
- Confirm construction start/completion dates, availability, prices, and final floor plans. They are not established by the current prototype.
- The enquiry form prepares a local download and a WhatsApp draft; it does not send automatically or connect to a CRM.
- Review final privacy/legal copy, translations, and external contact links before publication.

README.md, CONTENT-SOURCES.md, brand-spec.md and the asset notes provide additional context. archive/ contains earlier layouts, not the current site.