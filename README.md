# 🌍 The Red Soil

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/medium.svg)](https://astro.build)

For people and planet: eco-socialist analysis from Africa and the Global South.

An Astro-powered publication exploring capitalism, colonialism, and climate collapse through a decolonial, eco-socialist lens. Written from South Africa, this site examines how liberation is impossible without dismantling the systems that exploit both people and the planet — and why a decolonised, eco-socialist future is not optional, but necessary.

## 🌟 Features

✓ **Eco-socialist Analysis** - Critical examination of capitalism, colonialism, and climate systems

✓ **Decolonial Perspective** - Analysis from Africa and the Global South

✓ **MDX Support** - Full support for both Markdown and MDX content files with embedded JSX

✓ **Reading Time Display** - Automatic calculation and display of estimated reading time

✓ **Table of Contents** - Auto-generated TOC with scroll spy navigation for long-form content

✓ **Responsive Layout** - Mobile-first design with elegant desktop sidebar

✓ **Minimal JavaScript** - Essential JS only for enhanced features, ensuring fast performance

✓ **SEO Optimized** - Built-in meta tags and structured data

✓ **Accessibility First** - Semantic HTML and ARIA attributes

✓ **Self-Hosted Fonts** - No external dependencies for privacy

✓ **Type-Safe** - Full TypeScript support

✓ **RSS Feed** - Automatic RSS feed generation for content syndication

✓ **Search Functionality** - Built-in search with JSON index

✓ **Categories System** - Organised content by categories with dedicated pages

## 💻 Tech Stack

- **Framework:** [Astro](https://astro.build) with MDX integration
- **Language:** TypeScript
- **Styling:** Scoped CSS with CSS Variables and Dark Mode support
- **Fonts:** Self-hosted via @fontsource (Oswald, Work Sans, JetBrains Mono)
- **Icons:** Remixicon
- **Build Tools:** Fontaine for font metric optimisation

## ⚡ Quick Start

### Prerequisites

- Node.js 22.21.1 or higher
- Git

### Installation

1. Clone this repository:

```bash
git clone https://github.com/theredsoil/konscio.git
cd konscio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:4321`

## ⚙️ Configuration

All site configuration is centralised in `src/config.ts`.

## 📝 Writing Content

### Dispatches

Create dispatches as Markdown or MDX files in `src/content/dispatches/`. MDX files support embedded JSX for rich content:

```markdown
---
title: "Your Article Title"
datePublished: "YYYY-MM-DD"
description: "Brief SEO description"
author: "Your Name"
excerpt: "Short summary for listings"
categories: ["Category1", "Category2"]
tags: ["tag1", "tag2"]
image: "/images/your-open-graph-image.webp"
---
```

We strongly encourage new dispatches and articles from all authors, especially those written in languages other than English. Original content in any language is welcome and valued. We do not accept translations of existing posts, but we celebrate linguistic diversity and encourage contributors to share perspectives in their own languages.

For a full guide to contributing articles—including required frontmatter, image conventions, submission process, and editorial guidelines—please see [CONTRIBUTING.md](CONTRIBUTING.md).

### Frontmatter Reference

| Field           | Type    | Required | Description                      |
| --------------- | ------- | -------- | -------------------------------- |
| `title`         | string  | Yes      | Post title                       |
| `description`   | string  | No       | Post description for SEO         |
| `datePublished` | string  | Yes      | Publication date (YYYY-MM-DD)    |
| `dateModified`  | string  | No       | Last modified date (YYYY-MM-DD)  |
| `excerpt`       | string  | Yes      | Brief description for listings   |
| `categories`    | array   | Yes      | Post categories                  |
| `tags`          | array   | Yes      | Post tags                        |
| `author`        | string  | No       | Author name (defaults to config) |
| `image`         | string  | No       | Featured image path              |
| `draft`         | boolean | No       | Draft status (defaults to false) |

## 🛠️ Commands

All commands are run from the root of the project:

| Command           | Action                                     |
| ----------------- | ------------------------------------------ |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`         |
| `npm run preview` | Preview your build locally                 |
| `npm run check`   | Check TypeScript types                     |
| `npm run format`  | Format code with Prettier                  |
| `npm run test`    | Run tests with Vitest                      |

## 🚀 Deployment

This site is designed for static hosting. Build the site and deploy the `dist/` folder to any static hosting service.

### Build Commands

```bash
# Build for production
npm run build

# Preview the build locally
npm run preview
```

## 🤝 Contributing

We welcome both code and content. Articles should centre eco-socialist, decolonial analysis from Africa and the Global South; original pieces in any language are encouraged. For the full workflow (content frontmatter, submission routes, editorial process, commit message format, and development steps) read [CONTRIBUTING.md](CONTRIBUTING.md).

Summary:

✓ Add posts in `src/content/dispatches/` with required frontmatter

✓ Use clear English for any new English content

✓ Run `npm run check`, `npm run test` before a Pull Request

✓ Follow the commit prefixes: Add:, Fix:, Update:, Remove:, Docs:

Community standards and enforcement are covered in [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Security disclosure guidance is in [SECURITY.md](SECURITY.md).

## 📄 License

This project is **dual licensed**:

- **Code** (software in `src/`, scripts, etc.): [MIT License](LICENSES/MIT.txt)
- **Content** (text, images, documentation, data, media): [CC0 1.0 Universal](LICENSES/CC0-1.0.txt)

See [`LICENCE`](LICENCE) for a full explanation and SPDX identifiers.

Unless otherwise noted, code is MIT and content is CC0 1.0 Universal by default. Contributions are accepted under these terms.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Icons by [Remixicon](https://remixicon.com/)
- Fonts by [Fontsource](https://fontsource.org/)
- Theme based on [Volks-Typo](https://github.com/jdrhyne/volks-typo), created by [jdrhyne](https://github.com/jdrhyne)
- Inspired by the urgent need for decolonial, eco-socialist transformation
