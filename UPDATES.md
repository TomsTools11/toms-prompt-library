# Updates

Ongoing changelog for Tom's Prompt Library website.

---

## 2026-02-08 — Terminal/CLI Dark Theme Redesign

Complete visual redesign from light/dark dual-mode to a dark-only terminal/CLI aesthetic aligned with the Tom Panos brand style guide.

### Color System
- Replaced light mode and `prefers-color-scheme` toggle with dark-only theme
- Background shifted to true dark (`#191919`) with elevated card surfaces (`#202020`, `#2F2F2F`)
- Primary accent: `#407EC9` blue with `#327DA9` hover state
- Body text: `#EDEEEE` (softer than pure white), muted text: `#A7A39A`
- Borders: `#444B4E`, form inputs: `#364954` (distinct from card surfaces)
- Semantic colors: success `#448361`, error `#D44E49`, warning `#D9730D`

### Typography
- Removed Geist local fonts, added JetBrains Mono via Google Fonts for monospace elements
- Body uses system-ui font stack
- Headings and card titles use `font-mono` for terminal feel

### Navigation
- Solid dark nav bar (`#202020`), removed backdrop blur
- Brand styled as CLI prompt: `$ toms-prompt-library`
- Nav link styled as `./browse`

### Homepage
- Added CLI prompt line above hero: `$ browse prompts --count {N}`
- CTA button: pill-shaped with hover lift + shadow
- Category cards: hover lifts `-translate-y-0.5` with `#2F2F2F` elevated bg and shadow

### Browse Page
- Search input and select dropdowns use `#364954` form background with blue focus glow
- Filter pills: pill-shaped with blue text, hover bg transition
- Prompt cards: same lift/shadow hover pattern as category cards
- Tag pills use muted `#A7A39A` text for readability on dark bg

### Prompt Detail Page
- Breadcrumb links use `#407EC9` blue
- Title and category link use `font-mono`
- Tag pills: pill-shaped with hover color transition
- Prompt body container: `#202020` bg with `#444B4E` border
- `<pre>` uses JetBrains Mono with `#EDEEEE` text

### Copy Button
- Ghost style (transparent bg) with pill shape
- Blue border + text on hover
- "Copied!" state shows green (`#448361`) text + checkmark

### Technical
- Added `prefers-reduced-motion` media query for accessibility
- Global `focus-visible` ring uses `#407EC9` blue
- All transitions unified to `duration-150` (150ms ease)
- Custom Tailwind tokens: `rounded-pill`, `shadow-card-hover`, full color palette mapping
- Build verified: 170 static pages generated, zero lint errors

### Files Changed
- `website/src/app/globals.css` — Full CSS variable overhaul
- `website/tailwind.config.ts` — Extended colors, fonts, radius, shadows
- `website/src/app/layout.tsx` — JetBrains Mono font, terminal nav
- `website/src/app/page.tsx` — CLI hero, polished cards
- `website/src/components/PromptsDirectory.tsx` — Form styling, card interactions
- `website/src/app/prompts/[slug]/page.tsx` — Breadcrumbs, code block, tags
- `website/src/components/CopyButton.tsx` — Ghost button, success state
- `website/src/app/prompts/page.tsx` — Mono heading
