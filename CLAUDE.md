# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A React + Vite application for authoring brand-consistent A4 PDFs using the JemX design system. Pages are composed as React components, previewed in the browser at actual A4 dimensions, and exported to PDF via Puppeteer (headless Chrome) for pixel-perfect fidelity.

## Commands

```bash
npm run dev        # Start Vite dev server (localhost:5173) — preview pages in browser
npm run pdf        # Generate PDF via Puppeteer (requires dev server running in another terminal)
npm run build      # Production build
```

## Architecture

**The pipeline:** Author React components → preview in browser → Puppeteer screenshots each `.page` element → `pdf-lib` assembles screenshots into an A4 PDF. This guarantees the PDF matches the browser exactly — gradients, backdrop-filter, custom fonts all preserved.

**Why screenshots, not `page.pdf()`?** Chrome's print/PDF pipeline (`page.pdf()`) drops `backdrop-filter`, misrenders flex layouts, and strips some gradient effects. The screenshot approach captures exactly what Chrome paints on screen, bypassing the print renderer entirely. Do not switch back to `page.pdf()`.

**Key files:**
- `src/styles/tokens.css` — Single source of truth for the design system. Every colour, gradient, radius, shadow, and glow from `jemx-design-system.md` as CSS custom properties. Components reference tokens exclusively, never raw hex values.
- `src/components/Page.tsx` — The A4 page container (210mm × 297mm, 20mm padding). Each `<Page>` = one physical PDF page. The `.page` CSS class is used by the PDF script to find and screenshot each page element.
- `src/documents/` — Each file is a complete document composed of `<Page>` components. `App.tsx` renders the active document.
- `scripts/generate-pdf.ts` — Puppeteer script. Screenshots each `.page` element at 3x device scale, then assembles into a PDF via `pdf-lib` at A4 point dimensions (595.28 × 841.89pt). Waits for `document.fonts.ready` before capture.
- `jemx-design-system.md` — The reference spec. When adding tokens to `tokens.css`, values come from here.

**Fonts:** Inter and Manrope via Google Fonts `@import`. JetBrains Mono self-hosted from `public/fonts/` (woff2).

**Images/Logos:** Shared assets go in `public/images/`. Reference as `/images/filename.ext` in components (e.g. `<img src="/images/logo.svg" />`). Puppeteer loads these from the dev server during PDF generation.

## Conventions

- **No Tailwind.** Raw CSS custom properties from `tokens.css`. This is intentional — Tailwind JIT can produce subtle differences between dev and build outputs in PDF rendering.
- **Inline styles on components.** Components use React inline `style` objects referencing CSS custom properties. This keeps styles co-located and avoids class-name specificity issues in PDF output.
- **Content must fit within a Page.** The `<Page>` component has `overflow: hidden`. If content overflows, it clips — this is a feature, not a bug. It signals the author to split content across pages. There is no auto-pagination.
- **mm units for page dimensions.** Chrome renders mm faithfully with no DPI conversion issues. Don't convert to px.

## Adding a New Document

1. Create a file in `src/documents/` composing `<Page>` components
2. Update `src/App.tsx` to import and render it
3. `npm run dev` to preview, `npm run pdf` to export

## Adding a New Component

Follow the pattern in `src/components/`: accept a `style` prop for overrides, use CSS custom properties from `tokens.css`, keep styles inline.
