# 🚀 Dhruv Kumar — Personal Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://fonts.google.com/)

> A premium, responsive personal portfolio website for **Dhruv Kumar** — B.Tech CSE Student (2026 Passout) & Software Developer. Built with pure HTML, Vanilla CSS, and vanilla JavaScript — no frameworks, no build tools, just clean, fast, and accessible web code.

---

## ✨ Live Demo

Open `index.html` directly in any modern browser — zero build steps required.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [File Descriptions](#file-descriptions)
  - [index.html](#indexhtml)
  - [css/variables.css](#cssvariablescss)
  - [css/style.css](#cssstylecss)
  - [css/responsive.css](#cssresponsivecss)
  - [js/navigation.js](#jsnavigationjs)
  - [images/](#images)
- [Design System](#design-system)
  - [Color Palette](#color-palette)
  - [Typography](#typography)
  - [Spacing Scale](#spacing-scale)
  - [Motion Tokens](#motion-tokens)
- [Sections](#sections)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Contact](#contact)

---

## Overview

This portfolio is a fully static, single-page website featuring a **Premium Dark Glassmorphic Cyber-Tech Theme**. It presents Dhruv Kumar's profile, technical skills, featured projects, and a contact form — all in a visually stunning, production-ready design.

**Key Design Principles:**
- 🌑 Deep-space dark background with subtle grid mesh
- 💎 Glassmorphism cards with frosted-glass blur effects
- 🌈 Neon accent colors (Cyan, Purple, Pink, Gold)
- 🎞️ Smooth CSS transitions and scroll-reveal animations
- ♿ WCAG-compliant accessibility (skip links, ARIA labels, focus management)

---

## Features

| Feature | Description |
|---|---|
| 🔠 Typewriter Animation | Cycles through developer roles in the Hero section |
| 📜 Scroll Reveal | Elements fade-slide in as they enter the viewport (IntersectionObserver) |
| 🔗 Active Nav Highlighting | Navigation links dynamically highlight based on the section in view |
| 🍔 Mobile Hamburger Menu | Fully accessible slide-in menu for mobile viewports |
| 📊 Skill Gauges | Animated CSS progress bars showing proficiency percentages |
| 🗂️ Project Cards | Glass-card project showcases with tech tags and action links |
| 📬 Contact Form | Client-side validated form with real-time error messages and submit states |
| 🖨️ Print Stylesheet | Clean print-ready layout via `responsive.css` |
| ⚡ No Build Tools | Pure HTML/CSS/JS — open and run instantly |

---

## Project Structure

```
Personal-Portfolio/
├── .vscode/
│   └── settings.json          # VS Code workspace settings
│
└── portfolio/                 # ← Root of the web application
    ├── index.html             # Single-page application entry point
    ├── README.md              # Project documentation (this file)
    │
    ├── css/
    │   ├── variables.css      # Design tokens (colors, fonts, spacing, motion)
    │   ├── style.css          # Main stylesheet — all layout and component styles
    │   └── responsive.css     # Print media query overrides
    │
    ├── js/
    │   └── navigation.js      # All interactivity: nav, typewriter, scroll, form
    │
    └── images/
        ├── dhruv_profile.png              # Hero section profile photo
        ├── project_algo_visualizer.png    # AlgoVisualizer project thumbnail
        ├── project_devconnect.png         # DevConnect project thumbnail
        ├── project_cloudscale.png         # CloudScale project thumbnail
        └── icons/                         # (Reserved) Icon assets directory
```

---

## File Descriptions

### `index.html`

The **single HTML file** that constitutes the entire page. It is structured with semantic HTML5 elements and organized into clearly commented sections:

| Section | HTML Element | ID / Class | Description |
|---|---|---|---|
| Skip Link | `<a>` | `.skip-link` | Accessibility bypass link to main content |
| Header / Navbar | `<header>` | `.site-header` | Fixed top navigation bar with logo and nav links |
| Hero | `<section>` | `#home .hero` | Full-height intro with typewriter, CTA buttons, and profile avatar |
| About | `<section>` | `#about .sheet` | Bio paragraphs, stat boxes, and a spec detail list |
| Skills | `<section>` | `#skills .sheet` | Three skill categories with animated gauge bars |
| Projects | `<section>` | `#projects .sheet` | Grid of three project cards with tags and links |
| Contact | `<section>` | `#contact .sheet` | Contact channels and a validated contact form |
| Footer | `<footer>` | `.site-footer` | Copyright, description, and social links |

**External dependencies loaded via `<head>`:**
- Google Fonts: `Fira Code`, `Inter`, `Outfit`
- No third-party JS libraries — all vanilla

---

### `css/variables.css`

Defines the **global design token system** using CSS Custom Properties (`:root` variables). Loaded first so all downstream stylesheets can consume its tokens.

#### Color System

| Token | Value | Role |
|---|---|---|
| `--bg-darker` | `#030712` | Deepest background (pure space dark) |
| `--bg-dark` | `#0b0f19` | Base page background |
| `--bg-card` | `rgba(17,24,39,0.45)` | Glass card fill |
| `--text-primary` | `#f3f4f6` | Body text (cool white) |
| `--text-secondary` | `#9ca3af` | Secondary / muted text |
| `--accent-cyan` | `#06b6d4` | Primary accent — Electric Cyan |
| `--accent-purple` | `#a855f7` | Secondary accent — Cyber Purple |
| `--accent-pink` | `#ec4899` | Tertiary accent — Laser Pink |
| `--accent-gold` | `#f59e0b` | Warning / highlight — Gold |

#### Gradient Tokens

| Token | Description |
|---|---|
| `--gradient-primary` | Cyan → Blue → Purple (135°) — used for gradient text & CTAs |
| `--gradient-secondary` | Purple → Pink (135°) — secondary highlights |
| `--gradient-glow` | Radial cyan glow — avatar and accent halos |

#### `@media (prefers-reduced-motion: reduce)`

Globally disables all animations and transitions for users who have enabled the OS-level reduced-motion preference, ensuring full accessibility compliance.

---

### `css/style.css`

The **main stylesheet** (~1,135 lines) containing all layout, component, and animation styles. Organized into numbered sections:

| Section | Contents |
|---|---|
| 1. Reset & Base | Box-sizing reset, `html`/`body` base styles, background mesh grid |
| 2. Layout Utilities | `.wrap` max-width container, `.sheet` section base |
| 3. Skip Link | Accessibility skip-to-content link |
| 4. Header / Navigation | Sticky header, logo, nav links, active state, hover underlines |
| 5. Burger Menu | Mobile hamburger icon animation (3-bar to X transform) |
| 6. Hero Section | Two-column hero grid, gradient heading, typewriter cursor |
| 7. Avatar | Profile image frame with rotating border gradient & ambient glow |
| 8. Scroll Reveal | `.reveal` to `.reveal.active` fade-slide-up animation |
| 9. Sheet Sections | `sheet-tag`, `sheet-title` headings, section dividers |
| 10. About Section | Two-column about grid, stat boxes, spec detail list |
| 11. Skill Gauges | `.gauge-grid`, `.gauge-track`, `.gauge-fill` animated bars |
| 12. Project Cards | `.project-grid` CSS Grid, hover overlays, tag chips, link buttons |
| 13. Contact Section | Two-column contact grid, channel items, form fields, error states |
| 14. Footer | Three-column footer grid, social links |
| 15. Responsive | Media queries for <= 900px, <= 640px, <= 440px breakpoints |
| 16. Glassmorphism | `.glass-card` — `backdrop-filter: blur`, border, box-shadow |
| 17. Buttons | `.btn-primary`, `.btn-outline`, `.btn-submit`, `.loading` spinner |
| 18. Form States | `.field-error`, `.form-status` success/error banners |

---

### `css/responsive.css`

A lightweight file with a single responsibility: the **print stylesheet**.

```css
@media print {
  /* Removes navigation, buttons, and form status from print output */
  /* Forces white background and black text */
  /* Prevents section page-breaks */
}
```

> All responsive layout breakpoints (mobile, tablet, desktop) are handled directly in `style.css`, keeping `responsive.css` minimal and focused solely on print rendering.

---

### `js/navigation.js`

A self-contained **IIFE (Immediately Invoked Function Expression)** in strict mode. Contains four independent modules:

#### Module 1 — Mobile Navigation

```
burger click     →  toggles .open class on .nav-links
nav link click   →  closes menu
outside click    →  closes menu
Escape key       →  closes menu + returns focus to burger
```

#### Module 2 — Typewriter Animation

Cycles through four role strings, typing and deleting each with configurable speeds:

| State | Speed |
|---|---|
| Typing a character | 100ms per character |
| Deleting a character | 50ms per character |
| Pause after full word | 2000ms |
| Pause before next word | 500ms |

Roles cycled:
1. `Software Developer.`
2. `B.Tech CSE Student (2026 Passout).`
3. `Full-Stack Web Architect.`
4. `Problem Solver & Tech Enthusiast.`

#### Module 3 — Scroll Reveal & Active Nav Links

Uses two separate `IntersectionObserver` instances:

| Observer | Threshold / Margin | Purpose |
|---|---|---|
| `revealObserver` | `15%` intersection | Adds `.active` to `.reveal` elements, triggering CSS animation. Fires once per element. |
| `activeLinkObserver` | `-20% 0px -60% 0px` rootMargin | Tracks which `<section>` is in the viewport's center slice and updates nav link active states. |

#### Module 4 — Contact Form Validation

Real-time client-side validation with blur events and submit guard:

| Field | Rule |
|---|---|
| Name | Minimum 2 characters |
| Email | Must match `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` |
| Message | Minimum 10 characters |

On valid submission: simulates a 1500ms network delay, resets the form, and displays a success banner.  
On invalid submission: displays an error banner and auto-focuses the first invalid field.

---

### `images/`

| File | Usage |
|---|---|
| `dhruv_profile.png` | Hero section avatar (846 KB) |
| `project_algo_visualizer.png` | Project 01 card thumbnail (787 KB) |
| `project_devconnect.png` | Project 02 card thumbnail (633 KB) |
| `project_cloudscale.png` | Project 03 card thumbnail (734 KB) |
| `icons/` | Reserved directory for future icon SVG assets |

---

## Design System

### Color Palette

```
Deep Space Darks:
  #030712  (bg-darker)
  #0b0f19  (bg-dark)
  rgba(17,24,39,0.45) (bg-card)

Neon Accents:
  Cyan    #06b6d4  (accent-cyan)
  Purple  #a855f7  (accent-purple)
  Pink    #ec4899  (accent-pink)
  Gold    #f59e0b  (accent-gold)

Neutral Text:
  Primary    #f3f4f6  (slate-100)
  Secondary  #9ca3af  (slate-400)
  Muted      #6b7280  (slate-500)
```

### Typography

| Font | Variable | Usage |
|---|---|---|
| **Outfit** | `--font-display` | Headings (`h1`–`h4`), display text |
| **Inter** | `--font-body` | Body copy, paragraphs, labels |
| **Fira Code** | `--font-mono` | Code tags, monospaced elements |

#### Type Scale

| Token | Value | Approx Use |
|---|---|---|
| `--fs-xs` | `0.75rem` | Fine print, captions |
| `--fs-sm` | `0.875rem` | Labels, tags |
| `--fs-base` | `1rem` | Body text |
| `--fs-md` | `1.125rem` | Lead paragraphs |
| `--fs-lg` | `1.25rem` | Sub-headings |
| `--fs-xl` | `1.75rem` | Section sub-titles |
| `--fs-2xl` | `2.5rem` | Section titles |
| `--fs-3xl` | `3.5rem` | Hero sub-title |
| `--fs-4xl` | `4.5rem` | Hero main title |

### Spacing Scale

| Token | Value |
|---|---|
| `--space-1` | `0.25rem` (4px) |
| `--space-2` | `0.5rem` (8px) |
| `--space-3` | `1rem` (16px) |
| `--space-4` | `1.5rem` (24px) |
| `--space-5` | `2.5rem` (40px) |
| `--space-6` | `4rem` (64px) |
| `--space-7` | `6rem` (96px) |

### Motion Tokens

| Token | Value | Description |
|---|---|---|
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Material Design standard easing |
| `--ease-out-back` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Springy overshoot for bouncy reveals |
| `--duration-fast` | `200ms` | Hover transitions |
| `--duration-med` | `400ms` | Element entrances |
| `--duration-slow` | `700ms` | Scroll reveal animations |

---

## Sections

### Hero (`#home`)
- Two-column grid: left side has headline + typewriter + CTAs; right side has profile avatar
- Profile image in a rotating-border animated frame with ambient cyan glow halo
- Gradient text on the name using `--gradient-primary`
- Two CTA buttons: **Explore Projects** and **Let's Connect**

### About (`#about`)
- Personal bio paragraphs highlighting academic background and passion areas
- **Stat Boxes** (glass-card style): `500+ DSA Questions Solved`, `10+ Projects Built`
- **Spec List** (definition list): Discipline, Graduation Year, Focus Areas, Key Stack, Core Strengths

### Skills (`#skills`)
Three skill categories, each in a glass card with animated gauge bars:

| Category | Skills |
|---|---|
| Languages & Core | Java/C++ (92%), JS/TS (88%), Python (80%), DSA (95%) |
| Web Stack | React/Next.js (90%), Node/Express (85%), HTML5/CSS3 (92%), RESTful APIs (87%) |
| Databases & Tools | SQL/PostgreSQL/MongoDB (83%), Git/GitHub Actions (90%), Docker/K8s (75%), Linux/Shell (80%) |

### Projects (`#projects`)
Three featured project cards in a responsive grid:

| # | Project | Tech Stack |
|---|---|---|
| 01 | **AlgoVisualizer** — Algorithm visualization platform | React, D3.js, TypeScript |
| 02 | **DevConnect** — Developer matchmaking & real-time chat app | Node.js, MongoDB, WebSockets, React |
| 03 | **CloudScale** — Microservices monitoring dashboard | Go, Docker, Kubernetes, Grafana |

### Contact (`#contact`)
- Contact channels: Email (`medhruvgaur23@gmail.com`), Phone (`+91 8172961542`), Location (New Delhi, India)
- Validated contact form with Name, Email, and Message fields
- Submit button with loading spinner state
- Accessible success/error banners (`role="status"`, `aria-live="polite"`)

---

## Accessibility

This portfolio is built with accessibility as a first-class concern:

- ✅ **Skip Link** — Allows keyboard users to bypass navigation
- ✅ **ARIA Labels** — All icon-only links and buttons have descriptive `aria-label` attributes
- ✅ **ARIA Expanded** — Burger menu button correctly reflects open/closed state
- ✅ **ARIA Controls** — Burger button references its controlled nav list via `aria-controls`
- ✅ **Focus Management** — Escape key closes mobile menu and returns focus to trigger
- ✅ **ARIA Live Region** — Form status messages are announced to screen readers
- ✅ **Focus Visible** — Cyan outline on all focusable elements via `:focus-visible`
- ✅ **Reduced Motion** — All animations disabled via `prefers-reduced-motion: reduce`
- ✅ **Semantic HTML** — Proper use of `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<dl>`, `<dt>`, `<dd>`
- ✅ **Alt Text** — All images have descriptive `alt` attributes

---

## Performance

| Optimization | Implementation |
|---|---|
| No JavaScript framework | Zero framework overhead — plain vanilla JS |
| No build step | Instant open-in-browser, no bundler needed |
| Font preconnect | `<link rel="preconnect">` for Google Fonts domains |
| `display=swap` | Fonts load with `font-display: swap` to prevent render blocking |
| Observer-based animations | `IntersectionObserver` — no scroll event listeners |
| Once-only reveal | Scroll animations fire once and are unobserved afterward |
| CSS custom properties | Single source of truth — efficient cascade updates |
| `backdrop-filter` | Hardware-accelerated glassmorphism via GPU compositing |

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 88+ | ✅ Full |
| Firefox 103+ | ✅ Full |
| Safari 15.4+ | ✅ Full |
| Edge 88+ | ✅ Full |
| Opera 74+ | ✅ Full |

> **Note:** `backdrop-filter` (glassmorphism) requires a modern browser. Fallback `background-color` with opacity is applied for older environments.

---

## Getting Started

No installation or build process required.

### Option 1 — Open Directly

```
Double-click  portfolio/index.html
```

### Option 2 — Local Dev Server (Recommended)

Using the VS Code **Live Server** extension:
1. Right-click `index.html` in VS Code Explorer
2. Select **"Open with Live Server"**
3. Browser opens at `http://127.0.0.1:5500/`

Using Python's built-in server:
```bash
cd Personal-Portfolio/portfolio
python -m http.server 8080
# Open http://localhost:8080
```

Using Node.js `serve`:
```bash
npx serve portfolio/
```

---

## Customization Guide

### Updating Personal Information

Edit `index.html` directly. Key areas:

| What to change | Where to find it |
|---|---|
| Name, title | `<title>` tag and `<meta name="description">` in `<head>` |
| Hero tagline | `.hero-eyebrow` span text |
| Bio paragraphs | `#about .about-copy` `<p>` tags |
| Stats | `.stat-number` and `.stat-label` spans |
| Spec list | `#about .spec-list` `<dt>/<dd>` pairs |
| Skill gauges | `--pct: 0.XX` inline style + `.gauge-value` text |
| Project details | `#projects .project-card` articles |
| Contact info | `#contact .contact-channels` anchors |
| Social links | `<footer> .social-links` anchors |
| Email address | `href="mailto:..."` on the email channel link |

### Changing the Color Accent

In `css/variables.css`, update `--accent-cyan` and related gradient tokens:

```css
:root {
  --accent-cyan: #your-color;
  --gradient-primary: linear-gradient(135deg, #your-color 0%, ...);
}
```

### Adding a New Project

Copy an existing `<article class="project-card ...">` block in `index.html`, update:
- `<img src="images/your-project.png" alt="...">`
- `.project-index` number
- `.project-name` title
- `.project-desc` description
- `.tag` chips
- `href` links to GitHub/live demo

Then add the corresponding image to `images/`.

### Adding a New Skill Gauge

Inside any `.skills-category` in `index.html`, add:

```html
<div class="gauge">
  <div class="gauge-info">
    <span class="gauge-label">Skill Name</span>
    <span class="gauge-value">85%</span>
  </div>
  <div class="gauge-track">
    <span class="gauge-fill" style="--pct: 0.85;"></span>
  </div>
</div>
```

---

## Contact

**Dhruv Kumar**
- 📧 Email: [medhruvgaur23@gmail.com](mailto:medhruvgaur23@gmail.com)
- 📞 Phone: +91 8172961542
- 📍 Location: New Delhi, India
- 🐙 GitHub: [GitHub Profile](#)
- 💼 LinkedIn: [LinkedIn Profile](#)

---

<div align="center">

Made with ❤️ by **Dhruv Kumar** &copy; 2026

*B.Tech Computer Science & Engineering — Graduating 2026*

</div>

