---
name: modern-frontend-design
description: Build modern, polished frontend interfaces and websites with production-grade code and professional design quality. Use when the user asks to create web UIs, landing pages, dashboards, web applications, or any frontend interface. Specializes in clean code, responsive design, accessibility, and contemporary design patterns with attention to user experience. Implements Tom Panos brand guidelines for consistency.
license: MIT
---

# Modern Frontend Design

Create production-ready frontend interfaces with professional design quality, clean maintainable code, and Tom Panos brand alignment.

## Core Principles

### Professional Quality Standards
- Write semantic, accessible HTML with proper ARIA labels
- Use modern CSS patterns (Grid, Flexbox, custom properties)
- Implement responsive design mobile-first
- Ensure WCAG 2.1 AA accessibility compliance
- Optimize performance (lazy loading, code splitting)
- **Apply Tom Panos brand guidelines consistently**

### Design Excellence
- Apply consistent spacing systems (4px/8px base grid)
- Use cohesive color palettes with proper contrast ratios
- Implement typography scales with clear hierarchy
- Create intuitive interaction patterns and micro-interactions
- Design for clarity, usability, and aesthetic appeal
- **Follow Tom Panos visual identity and brand voice**

## Tom Panos Brand Integration

### Brand Values in Design
Every interface should embody these core values:
- **Practical AI Implementation**: Clear, functional design focused on real-world use
- **Human Empowerment**: Interfaces that enhance human capability and decision-making
- **Measurable Results**: Data-driven layouts that emphasize outcomes and metrics
- **Transparency**: Honest, straightforward design without unnecessary complexity

### Brand Voice in Interface
Apply brand voice principles to all copy:
- **Professional but Approachable**: Use clear, direct language avoiding excessive jargon
- **Action-Oriented**: Design CTAs and messaging around outcomes and results
- **Data-Driven**: Emphasize metrics, numbers, and measurable improvements
- **Human-Centric**: Position technology as enabler, not replacement

## Design Process

### 1. Understand Requirements
Before coding, clarify:
- **Purpose**: What problem does this interface solve?
- **Users**: Who will use it and in what context?
- **Constraints**: Framework preferences, browser support, performance targets
- **Content**: What information needs to be displayed?
- **Brand Alignment**: How does this align with Tom Panos positioning and values?

### 2. Choose Design Direction
Select an approach that fits the context:
- **Minimalist**: Clean, spacious, focused on content and clarity (default for Tom Panos brand)
- **Contemporary**: Modern trends, bold typography, rich interactions
- **Corporate**: Professional, trustworthy, structured layouts (for enterprise clients)
- **Creative**: Unique, memorable, expressive visuals (sparingly; maintains professionalism)
- **Functional**: Utility-first, data-dense, efficiency-focused (for dashboards and tools)

### 3. Implement with Quality
Build interfaces that are:
- **Responsive**: Seamless experience across all devices
- **Accessible**: Keyboard navigation, screen reader support, focus management
- **Performant**: Fast loading, smooth animations, optimized assets
- **Maintainable**: Clean code structure, reusable components, documented patterns
- **On-Brand**: Aligned with Tom Panos visual identity and messaging

## Tom Panos Color System

### Primary Colors
**Dark Background** - `#191919`
- Used for: Primary backgrounds, main page surfaces
- Context: Professional, sophisticated foundation
- Contrast: White text achieves 16.5:1 contrast ratio

**Card/Surface Background** - `#202020`
- Used for: Elevated surfaces, cards, navigation areas
- Context: Secondary surface with subtle elevation
- Contrast: White text achieves 16.2:1 contrast ratio

**Text Primary (Light)** - `#FFFFFF`
- Used for: Headings, primary text, high-emphasis content
- Context: Maximum contrast and readability
- WCAG: Exceeds AA standards on all backgrounds

**Text Secondary** - `#EDEEEE`
- Used for: Body text, descriptions, secondary content
- Context: Softer than pure white, reduces eye strain
- WCAG: 4.5:1 contrast on dark backgrounds

### Accent Colors
**Primary Blue (Action/CTA)** - `#407EC9`
- Used for: Primary buttons, calls-to-action, actionable links
- Context: Professional, trustworthy, encourages action
- Hover State: `#327DA9`
- WCAG: 7.7:1 contrast on dark backgrounds

**Teal Green (Success/Data)** - `#448361`
- Used for: Success states, positive metrics, growth indicators, data visualization
- Context: Represents measurable results and positive outcomes
- WCAG: 7.5:1 contrast on dark backgrounds

**Light Blue (Information)** - `#1E73BE` or `#0083BB`
- Used for: Informational elements, secondary links, data visualization
- Context: Communicates clarity and intelligence
- WCAG: 10.5:1 contrast on dark backgrounds

### UI/Functional Colors
**Border/Divider** - `#444B4E`
- Used for: Borders, dividers, subtle separations
- Context: Defines spaces without harsh lines
- Hover/Interactive - `#474C50`

**Form Elements** - `#364954`
- Used for: Checkboxes, form backgrounds, input areas
- Context: Distinguishes input areas from content

### Supporting Colors
**Gray Scale**
- Light Gray: `#EDEEEE` (body text on dark backgrounds)
- Mid Gray: `#A7A39A` (muted elements, captions)
- Dark Gray: `#55534E` (subtle backgrounds, disabled states)

**Semantic Colors**
- Success: `#448361` (positive outcomes)
- Warning: `#D9730D` (orange - alerts)
- Error: `#D44E49` (red - errors)
- Info: `#407EC9` (blue - information)

### Color Usage Guidelines

**Backgrounds**
- Primary surface: `#191919`
- Secondary surfaces: `#202020`
- Elevated cards: `#2F2F2F`
- Hover states: `#474C50`

**Text Hierarchy**
- H1/Primary Headlines: `#FFFFFF`
- H2-H4/Secondary Headlines: `#EDEEEE`
- Body Text: `#EDEEEE`
- Muted/Captions: `#A7A39A`

**Interactive Elements**
- Primary CTA Button: `#407EC9` background, `#FFFFFF` text
- Primary CTA Hover: `#327DA9` background
- Links: `#1E73BE` or `#0083BB` with underline on hover
- Disabled: `#55534E` background

**Data Visualization**
- Success/Growth: `#448361`
- Primary metric: `#407EC9`
- Secondary metric: `#1E73BE`
- Neutral: `#A7A39A`

### Accessibility Requirements
- Maintain 4.5:1 contrast ratio for body text
- Maintain 3:1 contrast ratio for UI elements
- Test all color combinations for WCAG AA compliance
- Provide text alternatives for color-coded information
- Support both light and dark interfaces (respect `prefers-color-scheme`)

## Tom Panos Typography System

### Font Families

**Primary Font: Red Hat Display**
- **Usage**: Headings, titles, navigation
- **Weights**: Regular (400), Medium (500), Semi-Bold (600), Bold (700)
- **Fallback**: Arial, system-ui, sans-serif
- **Character**: Modern, professional, tech-forward
- **License**: Open Font License
- **Implementation**: `font-family: 'Red Hat Display', system-ui, sans-serif;`

**Secondary Font: Geist**
- **Usage**: Body text, paragraphs, descriptions
- **Weights**: Regular (400), Medium (500), Semi-Bold (600), Bold (700)
- **Fallback**: system-ui, sans-serif
- **Character**: Clean, readable, contemporary
- **License**: Open Font License
- **Implementation**: `font-family: 'Geist', system-ui, sans-serif;`

**Monospace Font: Fira Code**
- **Usage**: Code snippets, technical content
- **Weights**: Regular (400)
- **Fallback**: Fira Mono, Menlo, Consolas, monospace
- **Features**: Programming ligatures enabled
- **Implementation**: `font-family: 'Fira Code', monospace;`

### Typography Scale

**Desktop Scale**

| Element | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|---------|------|--------|------|-------------|----------------|-------|
| Hero/H1 | Red Hat Display | Bold (700) | 48px (3rem) | 1.2 | -0.02em | Landing page hero, major section titles |
| H2 | Red Hat Display | Semi-Bold (600) | 36px (2.25rem) | 1.3 | -0.01em | Section headings, page titles |
| H3 | Red Hat Display | Semi-Bold (600) | 28px (1.75rem) | 1.4 | -0.01em | Subsection headings |
| H4 | Red Hat Display | Medium (500) | 24px (1.5rem) | 1.4 | 0 | Card titles, content blocks |
| H5 | Red Hat Display | Medium (500) | 20px (1.25rem) | 1.5 | 0 | Small section headers |
| Body Large | Geist | Regular (400) | 18px (1.125rem) | 1.6 | 0 | Introductory text, important paragraphs |
| Body Regular | Geist | Regular (400) | 16px (1rem) | 1.6 | 0 | Standard body text |
| Body Small | Geist | Regular (400) | 14px (0.875rem) | 1.5 | 0 | Captions, metadata |
| Caption/Fine Print | Geist | Regular (400) | 12px (0.75rem) | 1.4 | 0 | Footnotes, legal text, timestamps |

**Mobile Scale (Responsive Adjustments)**
- Hero/H1: 36px (2.25rem)
- H2: 28px (1.75rem)
- H3: 24px (1.5rem)
- H4: 20px (1.25rem)
- H5: 18px (1.125rem)
- Body: 16px (1rem) - same as desktop
- Small: 14px (0.875rem) - same as desktop

### Typography Guidelines

**Readability Rules**
- Line length: 50-75 characters for optimal readability
- Paragraph spacing: 1.5em between paragraphs
- Text alignment: Left-aligned for body text
- Avoid all-caps for body text (reduces readability by 30%)

**Emphasis Techniques**
- **Bold**: Use Geist Semi-Bold (600) for strong emphasis
- *Italic*: Use sparingly for subtle emphasis or foreign words
- **Color**: Use `#407EC9` (blue) for actionable items/links
- **Size**: Increase by 1 size step for importance

**Special Formatting**
- Quotes: Use italic Geist with left border accent in `#407EC9`
- Lists: 1.5em spacing between items
- Links: `#1E73BE` with underline on hover
- Code blocks: Fira Code with `#364954` background, `#EDEEEE` text

## CSS Architecture with Tom Panos Brand

Use modern CSS patterns with brand-specific design tokens:

```css
:root {
  /* Tom Panos Brand Colors */
  --color-bg-primary: #191919;
  --color-bg-secondary: #202020;
  --color-bg-elevated: #2F2F2F;
  --color-bg-hover: #474C50;
  
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #EDEEEE;
  --color-text-muted: #A7A39A;
  
  --color-blue-primary: #407EC9;
  --color-blue-primary-hover: #327DA9;
  --color-blue-secondary: #1E73BE;
  --color-blue-light: #0083BB;
  
  --color-success: #448361;
  --color-warning: #D9730D;
  --color-error: #D44E49;
  --color-info: #407EC9;
  
  --color-border: #444B4E;
  --color-form: #364954;
  
  /* Typography */
  --font-display: 'Red Hat Display', system-ui, sans-serif;
  --font-body: 'Geist', system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;
  
  /* Spacing (4px base unit) */
  --space-xs: 0.25rem;  /* 4px */
  --space-sm: 0.5rem;   /* 8px */
  --space-md: 1rem;     /* 16px */
  --space-lg: 1.5rem;   /* 24px */
  --space-xl: 2rem;     /* 32px */
  --space-2xl: 4rem;    /* 64px */
  
  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.5);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
}

/* Body and base styles */
body {
  background-color: var(--color-bg-primary);
  color: var(--color-text-secondary);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
}

/* Heading styles - Red Hat Display */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: var(--color-text-primary);
}

h1 {
  font-size: clamp(2.25rem, 1.5rem + 2vw, 3rem);
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-weight: 700;
}

h2 {
  font-size: clamp(1.75rem, 1.25rem + 1.5vw, 2.25rem);
  line-height: 1.3;
  letter-spacing: -0.01em;
  font-weight: 600;
}

h3 {
  font-size: clamp(1.5rem, 1.125rem + 1vw, 1.75rem);
  line-height: 1.4;
  letter-spacing: -0.01em;
  font-weight: 600;
}

h4 {
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 500;
}

h5 {
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 500;
}

h6 {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
}

/* Paragraph and text */
p {
  margin: var(--space-md) 0;
  line-height: 1.6;
}

strong, b {
  font-weight: 600;
  color: var(--color-text-primary);
}

em, i {
  font-style: italic;
}

/* Links */
a {
  color: var(--color-blue-secondary);
  text-decoration: none;
  transition: color var(--transition-fast), text-decoration var(--transition-fast);
}

a:hover {
  color: var(--color-blue-primary);
  text-decoration: underline;
}

a:focus-visible {
  outline: 2px solid var(--color-blue-primary);
  outline-offset: 2px;
}

/* Code */
code {
  font-family: var(--font-mono);
  background-color: var(--color-form);
  color: var(--color-text-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-md);
  font-size: 0.9em;
}

pre {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  overflow-x: auto;
  border: 1px solid var(--color-border);
}

pre code {
  background-color: transparent;
  padding: 0;
  color: inherit;
}

/* Primary CTA Button */
.btn-primary {
  background-color: var(--color-blue-primary);
  color: var(--color-text-primary);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color var(--transition-fast), 
              transform var(--transition-fast),
              box-shadow var(--transition-fast);
}

.btn-primary:hover {
  background-color: var(--color-blue-primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-blue-primary);
  outline-offset: 2px;
}

/* Secondary Button */
.btn-secondary {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1rem;
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: background-color var(--transition-fast), 
              border-color var(--transition-fast),
              box-shadow var(--transition-fast);
}

.btn-secondary:hover {
  background-color: var(--color-bg-hover);
  border-color: var(--color-blue-primary);
}

.btn-secondary:focus-visible {
  outline: 2px solid var(--color-blue-primary);
  outline-offset: 2px;
}

/* Cards */
.card {
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  transition: background-color var(--transition-fast),
              box-shadow var(--transition-fast),
              transform var(--transition-fast);
}

.card:hover {
  background-color: var(--color-bg-elevated);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

/* Forms */
input, textarea, select {
  background-color: var(--color-form);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 0.75rem 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  transition: border-color var(--transition-fast), 
              box-shadow var(--transition-fast);
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--color-blue-primary);
  box-shadow: 0 0 0 3px rgba(64, 126, 201, 0.1);
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text-primary);
}

/* Responsive grid */
.grid {
  display: grid;
  gap: var(--space-lg);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
}

/* Spacing utilities */
.mt-sm { margin-top: var(--space-sm); }
.mt-md { margin-top: var(--space-md); }
.mt-lg { margin-top: var(--space-lg); }
.mt-xl { margin-top: var(--space-xl); }

.mb-sm { margin-bottom: var(--space-sm); }
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }
.mb-xl { margin-bottom: var(--space-xl); }

.p-md { padding: var(--space-md); }
.p-lg { padding: var(--space-lg); }
.p-xl { padding: var(--space-xl); }

/* Success state */
.success {
  color: var(--color-success);
}

.bg-success {
  background-color: rgba(68, 131, 97, 0.1);
  border: 1px solid var(--color-success);
  padding: var(--space-md);
  border-radius: var(--radius-md);
}

/* Error state */
.error {
  color: var(--color-error);
}

.bg-error {
  background-color: rgba(212, 78, 73, 0.1);
  border: 1px solid var(--color-error);
  padding: var(--space-md);
  border-radius: var(--radius-md);
}

/* Info state */
.info {
  color: var(--color-info);
}

.bg-info {
  background-color: rgba(64, 126, 201, 0.1);
  border: 1px solid var(--color-info);
  padding: var(--space-md);
  border-radius: var(--radius-md);
}

/* Responsive text */
@media (max-width: 768px) {
  h1 { font-size: 2.25rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.5rem; }
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Technical Implementation

### HTML Structure
```html
<!-- Semantic markup with accessibility and brand alignment -->
<header role="banner">
  <nav aria-label="Main navigation">
    <!-- Navigation items -->
  </nav>
</header>

<main role="main">
  <section aria-labelledby="section-heading">
    <h2 id="section-heading">Section Title</h2>
    <!-- Content aligned with Tom Panos voice -->
  </section>
</main>

<footer role="contentinfo">
  <!-- Footer content -->
</footer>
```

### JavaScript Patterns
Write clean, modern JavaScript:
- Use ES6+ features (const/let, arrow functions, destructuring)
- Implement progressive enhancement
- Handle errors gracefully
- Optimize for performance (debouncing, requestAnimationFrame)

```javascript
// Intersection Observer for scroll animations
const observeElements = (selector, callback) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll(selector).forEach(el => observer.observe(el));
};
```

## Tom Panos Design Elements

### Messaging Guidelines
When writing interface copy:
- **Use active voice**: "Leverage AI to improve efficiency" vs "AI can improve efficiency"
- **Emphasize results**: "Increase team productivity by 40%" vs "Make teams more productive"
- **Be specific**: Use actual metrics and numbers
- **Action-oriented CTAs**: "Get Started," "See Results," "Implement Now" vs "Learn More"
- **Accessible language**: Avoid jargon while maintaining credibility

### Visual Hierarchy
**Information Architecture**
- Primary headline (H1): Page title or hero message
- Secondary headings (H2-H3): Major sections and topics
- Body text: Supporting details and explanations
- Accent color (blue): Actionable items, highlights, metrics
- Success color (green): Positive outcomes, data achievements

### Spacing & Layout
Apply consistent spacing based on 4px base unit:
- **Compact**: 8px (xs and sm)
- **Standard**: 16px (md)
- **Generous**: 24px (lg)
- **Section separation**: 64px (2xl)
- Align elements to grid for visual harmony

### Components - Tom Panos Themed

#### Call-to-Action Button
```html
<button class="btn-primary">
  Actionable Text (e.g., "Get Started," "See Results")
</button>
```

#### Data/Metric Card
```html
<div class="card">
  <p class="text-muted">Metric Label</p>
  <h3 class="success">+40%</h3>
  <p>Clear description of the outcome</p>
</div>
```

#### Feature Card
```html
<div class="card">
  <h4>Feature Title</h4>
  <p>Practical description emphasizing real-world benefits</p>
  <a href="#" class="btn-secondary">Learn More</a>
</div>
```

#### Success Message
```html
<div class="bg-success">
  <strong>Success</strong>
  <p>Confirmation of positive action or outcome</p>
</div>
```

## Responsive Design Patterns

### Mobile-First Approach
```css
/* Base styles for mobile */
.container {
  padding: 1rem;
}

/* Enhance for larger screens */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem;
  }
}
```

### Tom Panos Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Wide: > 1280px

## Accessibility Checklist

- [ ] Semantic HTML elements (header, nav, main, footer, section, article)
- [ ] Proper heading hierarchy (h1 → h6)
- [ ] Alt text for images describing content/context
- [ ] ARIA labels for icons and interactive elements
- [ ] Keyboard navigation fully supported (Tab, Enter, Escape)
- [ ] Focus indicators visible with `#407EC9` outline
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] Form labels associated with inputs
- [ ] Error messages linked to form fields
- [ ] Skip to main content link
- [ ] Screen reader tested
- [ ] `prefers-reduced-motion` respected for animations

## Performance Optimization

### Images
- Use modern formats (WebP, AVIF)
- Implement lazy loading with `loading="lazy"`
- Provide responsive sizes with `srcset`
- Optimize file sizes (compress, scale appropriately)
- Use Tom Panos brand colors for placeholders

### Code
- Minify CSS and JavaScript
- Remove unused styles
- Use code splitting for large applications
- Defer non-critical JavaScript
- Inline critical CSS

### Loading Strategy
```html
<!-- Critical CSS inline -->
<style>
  /* Brand colors and critical layout styles */
</style>

<!-- Defer non-critical CSS -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>

<!-- Async JavaScript -->
<script src="app.js" defer></script>
```

## Common UI Patterns (Tom Panos Themed)

### Hero Section
```html
<section class="hero">
  <h1>Leverage AI the Right Way</h1>
  <p>Empower your team to learn faster, work smarter, and become irreplaceable</p>
  <div class="cta-group">
    <button class="btn-primary">Get Started</button>
    <button class="btn-secondary">See Results</button>
  </div>
</section>
```

### Results/Metrics Grid
```html
<section class="features">
  <div class="grid">
    <div class="card">
      <p class="text-muted">Metric Type</p>
      <h3 class="success">+40%</h3>
      <p>Specific, quantifiable business improvement</p>
    </div>
    <!-- More metric cards -->
  </div>
</section>
```

### Feature Grid
```html
<section class="features">
  <div class="grid">
    <div class="card">
      <h4>Practical AI Implementation</h4>
      <p>Real-world applications focused on measurable results</p>
    </div>
    <div class="card">
      <h4>Human Empowerment</h4>
      <p>AI as a tool to enhance capability, not replace teams</p>
    </div>
    <!-- More feature cards -->
  </div>
</section>
```

### Navigation
```html
<nav class="navbar" aria-label="Main navigation">
  <a href="/" class="logo">Tom Panos</a>
  <button class="menu-toggle" aria-expanded="false" aria-controls="nav-menu">
    <span class="sr-only">Menu</span>
  </button>
  <ul id="nav-menu" class="nav-links">
    <li><a href="#features">Services</a></li>
    <li><a href="#results">Results</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

## Quality Standards

Before delivering, verify:
- **Visual Quality**: Polished, professional appearance aligned with Tom Panos brand
- **Code Quality**: Clean, maintainable, well-commented code
- **Brand Consistency**: Colors, fonts, messaging, and voice aligned with guidelines
- **Functionality**: All interactions work as expected
- **Responsiveness**: Tested across device sizes and breakpoints
- **Accessibility**: Keyboard navigation, screen reader support, WCAG AA compliance
- **Performance**: Fast load times, optimized images, smooth animations
- **Browser Support**: Works in modern browsers (latest 2 versions)

## Output Format

Deliver complete, production-ready code:
1. **HTML**: Full page structure with semantic markup and accessible elements
2. **CSS**: Complete styles using Tom Panos brand tokens and design system
3. **JavaScript**: Any interactivity or functionality needed
4. **Typography**: Include @import rules for Red Hat Display, Geist, and Fira Code
5. **Brand Notes**: How colors, fonts, and messaging align with Tom Panos brand
6. **Instructions**: How to use, customize, and deploy

Package as single HTML file when possible, or separate files for larger projects. All designs should reflect Tom Panos' professional, data-driven, and human-centric approach to AI and technology.
