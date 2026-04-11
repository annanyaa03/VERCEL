# Vercel Homepage Clone

A pixel-accurate, fully static clone of the Vercel homepage built with plain HTML, CSS, and vanilla JavaScript. The project replicates Vercel's modern dark-themed landing page including its navigation, hero section, animations, and footer — with no frameworks or build tools required.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Sections](#sections)
- [Getting Started](#getting-started)
- [Deployment](#deployment)

---

## Overview

This project is a front-end clone of [vercel.com](https://vercel.com), recreating its layout, visual design, and interactive behaviors using only vanilla web technologies. It was built as a UI/frontend practice project to replicate a production-grade landing page from scratch.

**Language breakdown:** HTML (57.9%), CSS (38.9%), JavaScript (3.2%)

---

## Tech Stack

- **HTML5** - Semantic page structure and SVG markup
- **CSS3** - Layout, animations, transitions, responsive design, and custom properties
- **Vanilla JavaScript** - Interactive behaviors including cursor glow, scroll effects, and dropdown menus
- **Google Fonts (Inter)** - Typography matching Vercel's design system

No frameworks, libraries, package managers, or build steps are required.

---

## Project Structure

```
vercel/
├── index.html      # Full page markup (navbar, hero, sections, footer)
├── style.css       # All styles, animations, and responsive rules
├── main.js         # Interactive behaviors (cursor glow, nav scroll, dropdowns)
└── README.md
```

---

## Features

- Dark-themed UI matching Vercel's official design language
- Responsive navigation bar with mega-dropdown menus for Products, Resources, and Solutions
- Hero section with animated cursor glow effect that follows mouse movement
- SVG pyramid graphic with layered nested triangle strokes
- Background grid overlay with radial gradient lighting
- Marquee-style text section ("Develop with your favorite tools")
- Scale section with inline chip/badge elements
- Call-to-action section with corner crosshair decorations
- Comprehensive footer with six columns covering all Vercel product and company links
- Footer bottom bar with status warning banner and light/dark/system theme switcher UI
- Social media icon links (GitHub, LinkedIn, X, YouTube)
- "NEW" badge labels on recently launched product links
- Inter font from Google Fonts for authentic typography
- Pure static site — zero dependencies, opens directly in a browser

---

## Sections

### Navbar
A sticky top navigation bar with the Vercel logo (SVG triangle), three dropdown mega-menus (Products, Resources, Solutions), direct links to Enterprise and Pricing, and Log In / Ask AI / Sign Up buttons.

### Hero
The main landing section featuring the headline "Build and deploy on the AI Cloud", a subtitle, two CTA buttons (Start Deploying, Get a Demo), an SVG pyramid graphic, a cursor-tracking glow effect, and a dark grid background with a colorful radial gradient.

### Marquee / Develop Section
A typographic section with the heading "Develop with your favorite tools" accompanied by inline SVG terminal and git branch icons, and secondary text "Launch globally, instantly" and "Keep pushing".

### Scale Section
A bold headline section reading "Scale your Enterprise without compromising Security", using styled inline chip elements with icons to highlight the keywords.

### CTA Section
A dual-column call-to-action block with a "Ready to deploy?" prompt, highlighted Pro and Enterprise plan mentions, and buttons for Start Deploying, Talk to an Expert, and Explore Enterprise.

### Footer
A six-column link grid covering Get Started, Frameworks, Build, SDKs, Scale, Use Cases, Secure, Company, Resources, Community, and Learn. Includes a footer bottom bar with a live-style status warning banner and a theme switcher pill.

---

## Getting Started

No installation or build step is needed. Simply clone the repository and open the file in a browser.

```bash
git clone https://github.com/annanyaa03/vercel.git
cd vercel
```

Then open `index.html` directly in any modern web browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or use a local development server for a better experience:

```bash
# Using VS Code Live Server extension, or:
npx serve .
```

---

## Deployment

Because this is a fully static site, it can be deployed anywhere that serves static files.

**Deploy to Vercel:**
```bash
npx vercel
```

**Deploy to GitHub Pages:**
Push the repository to GitHub and enable GitHub Pages from the repository settings, pointing it to the `main` branch root.

**Deploy to Netlify:**
Drag and drop the project folder into the Netlify dashboard, or connect the GitHub repository directly.

---

## Author

[annanyaa03](https://github.com/annanyaa03)

