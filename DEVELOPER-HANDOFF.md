# Sansara website developer handoff

Snapshot: 15 October 2026 (Asia/Makassar).

## Run
Static HTML, CSS and vanilla JavaScript; no package install or build is required.
Run `node server.cjs` and open http://localhost:4173. Stop with Ctrl+C.
For static hosting, deploy all HTML, CSS, JavaScript and assets together while preserving paths.
External services: Google Fonts, Tailwind CDN, Leaflet CDN and OpenStreetMap tiles.

## Structure
- index.html: homepage, project highlights, Bali map, FAQ and consultation CTA.
- about.html: company, world map/statistics, experience and consultation CTA.
- projects.html: Phase 1/Phase 2 carousel and project cards.
- residences.html: residence category filters and shared residence links.
- solvyn-phase-1.html / solvyn-phase-2.html: phase listings.
- assets/residence-*.html: shared detail pages and redirects from earlier duplicate URLs.
- script.js / styles.css: shared interactions and styles.
- assets/language.js: English/Russian text switching.
- assets/projects.js, residences.js, flagship.js: page interactions.
- assets/Sansara Pictures/: supplied renders and galleries.
- assets/global-presence-map.svg: static world map. Source boundaries: https://github.com/datasets/geo-countries (Natural Earth-derived boundary data).
- assets/Logo/: Sansara logos and Solvyn City map marker.

Detail pages use <base href="../">; their asset URLs resolve from the website root.
Some legacy filenames and internal data keys remain for compatibility. Public project names are Solvyn City Phase 1 and Phase 2.

## Current content
Phase 1: 2027, leasehold 23+ years with a guaranteed 25-year leasehold extension at a fixed price.
Phase 2: 2028, leasehold 80 years.
Gallery maximum: five available images per residence.
Matching phase/directory cards share one detail page. Earlier duplicate URLs redirect.
The enquiry form opens a modal, creates a local download and prepares a WhatsApp draft. It does not automatically send messages or submit to a CRM.

## Editing
The checked-in HTML is the authoritative current snapshot. The .cjs content scripts record iterative generation and migration steps; several are one-off transformations, not an idempotent build pipeline. Do not run them all or regenerate pages blindly. Update shared pages, corresponding cards, script.js data and language.js together, then verify links and content.
The four largest project images are web-sized copies in this package/GitHub; original source renders are retained separately in the local working folder.

## Before launch
Confirm final dates, availability, pricing, legal/privacy copy and translations with the owner. Approved figures and property specifications in this snapshot came from the owner's supplied references. Some image sets remain shared illustrations.
Latest updates: homepage River Surf opens the gallery; white side arrows; blue FAQ followed by the Bali map; technical features integrated into The Sansara Way with staggered reveals. The former amenities section is preserved in archive/features-amenities/. About statistics appear under the world map and count up on entry.
