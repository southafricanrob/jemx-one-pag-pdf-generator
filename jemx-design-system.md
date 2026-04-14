# JemX Design System

A visual reference for generating brand-consistent artefacts — PDFs, banners, presentations, social content, and promotional material.

---

## Colour Palette

### Core Colours

| Token | Value | Usage |
|---|---|---|
| Navy 900 | `#03131E` | Primary dark background, headings on light surfaces |
| Navy 850 | `#0d1b27` | Alternate dark section background |
| Navy 800 | `#062133` | Secondary dark background |
| Cream 50 | `#FFF7EC` | Light background, body text on dark surfaces |
| Paper | `#FCFCFC` | Clean white surface |
| Ink 800 | `#333333` | Body text on light surfaces |

### Accent Colours

| Token | Value | Usage |
|---|---|---|
| Coral 500 | `#FF697F` | Primary accent, buttons, icons, CTAs |
| Coral 400 | `#FF8A9C` | Lighter accent, tags, links on dark backgrounds |
| Violet 500 | `rgb(86, 79, 255)` / `#564FFF` | Secondary accent, gradient endpoint |
| Violet 400 | `rgb(118, 112, 255)` | Lighter violet for subtle highlights |
| Emerald 400 | `rgb(74, 222, 128)` | Tertiary accent (sparingly — data, particles) |

### Functional Colours

| Token | Value | Usage |
|---|---|---|
| Border Light | `rgb(230, 233, 238)` | Borders on light backgrounds |
| Border Contrast | `rgba(6, 33, 51, 0.18)` | Subtle borders on light backgrounds |
| Overlay | `rgba(6, 33, 51, 0.65)` | Dark overlays |

---

## Gradients

| Name | Value | Usage |
|---|---|---|
| AI Gradient | `linear-gradient(135deg, #FF697F 0%, #564FFF 100%)` | Signature gradient — headline text, borders, dividers, accent bars |
| AI Hot | `linear-gradient(135deg, #FF8A9C 0%, #FF697F 40%, #C84DFF 100%)` | Hero-level emphasis — animated shimmer on headline keywords |
| Coral-to-Violet | `linear-gradient(135deg, rgba(255,105,127,1) 0%, rgba(86,79,255,1) 100%)` | Buttons, full-bleed accents |
| Section Divider | `linear-gradient(90deg, transparent 0%, rgba(255,105,127,0.3) 20%, rgba(86,79,255,0.3) 80%, transparent 100%)` | Horizontal hairline between sections |

**Gradient text** is the most distinctive brand motif. Key phrases in headings use the AI Gradient as a text fill — coral-to-violet, 135 degrees.

---

## Typography

### Font Families

| Role | Family | Fallback |
|---|---|---|
| Primary (headings, buttons, UI) | Inter | sans-serif |
| Secondary (body text) | Manrope | sans-serif |
| Mono (tags, labels, code) | JetBrains Mono | monospace |

### Weight Usage

| Weight | Where |
|---|---|
| 600 (Semibold) | Headings, card titles, buttons |
| 500 (Medium) | Button labels, subheads |
| 400 (Regular) | Body, descriptions |
| 100 (Thin) | Subtle supporting labels (e.g. "A Jem Division") |

### Heading Treatment

- Headings use **Inter, semibold, navy-900** on light backgrounds or **cream-50** on dark
- Tight letter-spacing (`-0.02em`) on large headlines
- Key phrases within headings rendered in **gradient text** (coral-to-violet)
- Optional: gradient underline accent bar (3px, coral-to-violet, 70% opacity, positioned just below the text)

---

## Borders & Radii

### Border Radii

| Token | Value | Usage |
|---|---|---|
| sm | `16px` | Cards, panels |
| md | `24px` | Larger cards, modals |
| lg | `30px` | Feature panels |
| xl | `50px` | Hero elements |
| pill | `9999px` | Buttons, tags, badges |

### Border Styles

- **Light surfaces**: `1px solid rgba(230, 233, 238, 1)` or `rgba(6, 33, 51, 0.18)`
- **Dark surfaces**: `1px solid rgba(255, 255, 255, 0.08)` (default) to `rgba(255, 255, 255, 0.10)`
- **Hover on dark**: border transitions to `rgba(255, 105, 127, 0.2)` — a subtle coral tint
- **Gradient border**: uses the AI Gradient as a `::before` pseudo-element with mask-composite, 40% opacity at rest, 100% on hover

---

## Shadows & Glows

### Elevation (light backgrounds)

| Level | Value |
|---|---|
| Elev 1 | `0 2px 6px rgba(6, 33, 51, 0.05)` |
| Elev 2 | `0 6px 18px rgba(6, 33, 51, 0.08)` |
| Elev 3 | `0 12px 32px rgba(6, 33, 51, 0.12)` |

### Glows (brand accents)

| Name | Value | Usage |
|---|---|---|
| Glow Coral | `0 0 30px -5px rgba(255, 105, 127, 0.4)` | Primary CTA buttons, featured cards |
| Glow Violet | `0 0 30px -5px rgba(86, 79, 255, 0.4)` | Secondary accent glow |
| Glow AI | `0 0 40px -10px rgba(255, 105, 127, 0.3), 0 0 60px -20px rgba(86, 79, 255, 0.2)` | Combined ambient glow |

---

## Buttons

### Variants

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary Coral | `#FF697F` | White | `1.5px #FF697F` | Darken to `rgb(235, 90, 110)`, intensify coral glow, lift -1px |
| Primary Navy | `#03131E` | White | `1.5px #03131E` | Lift -1px, subtle shadow |
| Outline Navy | Transparent | Navy 900 | `1.5px rgba(6, 33, 51, 0.18)` | Lift -1px, slight navy tint |
| Outline Inverse | Transparent | White | `1.5px white` | Lift -1px, white 10% fill |
| Outline Shimmer | Transparent | White | `1.5px rgba(255,255,255,0.4)` | Coral fill sweeps left-to-right, text turns white |

### Button Anatomy

- Shape: **pill** (`border-radius: 9999px`)
- Padding: `px-6 py-3.5` (comfortable click target)
- Font: Inter, medium weight
- Icons: right-aligned, 20px, optional (calendar, play, chat)
- Active state: `scale(0.98)` press effect
- Primary CTAs carry a persistent coral glow (`box-shadow: 0 0 20px -4px rgba(255, 105, 127, 0.4)`)

---

## Cards

### Glass Card (dark backgrounds)

- Background: `rgba(255, 255, 255, 0.04)`
- Backdrop-filter: `blur(12px)`
- Border: `1px solid rgba(255, 255, 255, 0.08)`
- Shadow: `0 8px 32px rgba(0, 0, 0, 0.2)`
- Hover: background brightens to `0.07`, border to `0.12`
- Border radius: `xl` (typically `rounded-xl` / 16px in Tailwind, visually generous)

### Glass Card (light backgrounds)

- Background: `rgba(255, 255, 255, 0.65)`
- Backdrop-filter: `blur(4px)`
- Border: `1px solid rgba(255, 255, 255, 0.4)`
- Shadow: `0 8px 32px rgba(6, 33, 51, 0.08)`

### Card Hover with AI Glow

On hover, cards lift `-4px` and gain a layered shadow:
```
0 12px 32px rgba(6, 33, 51, 0.12),
0 0 0 1px rgba(255, 105, 127, 0.1),
0 0 40px -15px rgba(255, 105, 127, 0.25)
```

### Pricing Card Pattern

- Dark glass card (`bg-navy-900/80`, `backdrop-blur-xl`)
- Header area with bottom border (`border-white/5`) containing tag, title, and gradient-text price
- Body area with feature checklist (coral check icons) and full-width CTA button
- Featured card gets a subtle ambient glow behind it

---

## Tags & Badges

### Stage Tags (TRAIN / BUILD / EMBED)

- Shape: pill (`rounded-full`)
- Border: `1px solid rgba(255, 255, 255, 0.10)`
- Background: `rgba(255, 255, 255, 0.05)`
- Font: JetBrains Mono, `xs`, `tracking-widest`, uppercase
- Text colour: Coral 400 (`#FF8A9C`)

### Icon Badges

- Circle, navy-900 background
- Icon in coral-500
- Sizes: 32px (sm), 40px (md)

### Icon Containers (on dark)

- Rounded square (`rounded-lg`, 12px)
- Background: `rgba(255, 105, 127, 0.1)` (coral tinted)
- Icon: coral-500
- Hover: scale 110%

---

## Backgrounds & Atmosphere

### Section Backgrounds

| Name | Colour | Usage |
|---|---|---|
| Light | Cream 50 `#FFF7EC` | Light sections |
| Dark | Navy 900 `#03131E` | Primary dark sections |
| Dark Mid | Navy 850 `#0d1b27` | Alternate dark sections |
| Dark Alt | Navy 800 `#062133` | Tertiary dark sections |

### Background Textures

- **Dot grid (dark)**: `radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)` at 24px spacing
- **Dot grid (light)**: `radial-gradient(rgba(6,33,51,0.04) 1px, transparent 1px)` at 24px spacing

### Ambient Orbs

Soft, blurred gradient spheres placed behind content for depth:
- **Coral orb**: radial gradient of coral-500 at 35% opacity, 60px blur, slow floating animation
- **Violet orb**: radial gradient of violet-500 at 30% opacity, 60px blur, counter-floating animation
- Sizes: sm (200px), default (400px), lg (500px)
- Always `pointer-events: none`, positioned absolutely

### Section Dividers

- Top of each section: a 1px hairline gradient (`transparent → white/10 → transparent`)
- Between major areas: the AI gradient section divider (coral/violet, fades both ends)

---

## Navbar

- Floating: fixed top, inset with padding
- Glass dark: `rgba(3, 19, 30, 0.9)`, `blur(20px)`, `1px solid rgba(255,255,255,0.08)`
- Shape: pill (`rounded-pill`)
- CTA button: Primary Coral with calendar icon

---

## Footer

- Navy 900 background
- AI gradient divider at top edge
- Text: cream-50 at 40% opacity

---

## Interaction & Motion

| Token | Duration | Easing | Usage |
|---|---|---|---|
| Fast | 300ms | ease | Hover states, colour transitions |
| Medium | 400ms | ease | Accordion expand/collapse, transforms |
| Slow | 500ms | ease-in-out | Fade-ins, reveals |

### Hover Patterns

- **Buttons**: lift `-1px`, intensify shadow/glow
- **Cards**: lift `-4px`, coral glow appears, border tints coral
- **Links**: gap widens (icon shifts right), colour to coral-400
- **Active press**: `scale(0.98)` snap-back

### Entrance Animations

- **Reveal up**: fade in + translate 16px upward, 600ms ease-out
- **Slide up**: fade in + translate 10px upward, 500ms ease-out
- **Staggered**: 100ms delay increments between sibling elements

### Ambient Animations

- **Breathing glow**: 4s ease-in-out loop, box-shadow pulses coral
- **Glow pulse**: 3s ease-in-out loop, subtle coral ring expands
- **Orb float**: 15–18s gentle drift/scale/rotate cycle
- **Text shimmer**: 4s linear infinite background-position shift on hot gradient text

---

## Key Brand Patterns

1. **Dark-first aesthetic** — most sections use dark navy backgrounds; light is used sparingly for contrast
2. **Gradient text as emphasis** — the coral-to-violet gradient on key headline phrases is the signature visual device
3. **Glass morphism on dark** — cards and panels use frosted glass with very subtle white borders
4. **Coral as the action colour** — every CTA, every interactive accent, every icon highlight uses coral
5. **Generous rounding** — pills for buttons and tags, large radii for cards; nothing has sharp corners
6. **Layered depth** — ambient orbs, starfield particles, dot grids, and elevation shadows create spatial depth
7. **Restrained palette** — navy, cream, coral, violet only; no extra colours in the UI
8. **Monospace for metadata** — tags, stage labels, and small data use JetBrains Mono in uppercase tracking
