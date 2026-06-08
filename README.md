<div align="center">

<img src="logo.png" width="140" alt="Namrood Blog logo">

# Namrood Blog

A soft, content-first personal blog for technical notes, everyday thoughts, personal interests, and long-running records.

[Visit Site](https://nam-rood.online) · [English](./README.md) · [简体中文](./README.zh.md) · [日本語](./README.ja.md) · [繁體中文](./README.tw.md)

[![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)](https://nodejs.org/)
[![pnpm 11](https://img.shields.io/badge/pnpm-11-blue)](https://pnpm.io/)
[![Astro 6.3.5](https://img.shields.io/badge/Astro-6.3.5-orange)](https://astro.build/)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6-blue)](https://www.typescriptlang.org/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache)](https://opensource.org/licenses/Apache-2.0)

![Namrood Blog Preview](./README.webp)

</div>

## About this project

Namrood Blog is a customized static site for Namrood's own writing and archive. It is not maintained as a generic blog template; it collects technical notes, learning records, life updates, anime lists, diaries, albums, devices, projects, skills, and timeline pages in one place.

The site is generated with Astro and can be deployed to static hosting platforms such as Vercel, GitHub Pages, Netlify, or Cloudflare Pages. Its design is soft and content-first, with the goal of making writing, reading, and revisiting memories feel calm and simple.

## Highlights

- Personal writing archive for essays, study notes, diaries, albums, and long-term records
- Static-first Astro site with RSS, sitemap, local search, and basic SEO support
- Soft visual style focused on calm reading and memory keeping
- Structured data pages for anime, devices, projects, skills, and personal timelines
- Multilingual README documentation for English, Simplified Chinese, Japanese, and Traditional Chinese

## What it contains

- Technical articles and study notes
- Personal diary and life records
- Anime tracking pages
- Albums and image-based content
- Devices, projects, and skills pages
- Archive, categories, tags, and local search
- RSS, sitemap, and basic SEO support

## Tech stack

- [Astro](https://astro.build/) for static generation and routing
- [Svelte](https://svelte.dev/) for interactive components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- TypeScript for type checking and maintenance
- Pagefind for static site search
- Expressive Code for enhanced code blocks
- KaTeX for math rendering
- Swup for page transitions

## Project structure

```text
src/content/posts/      Blog posts
src/content/spec/       Special pages such as about and friends
src/pages/              Astro page routes
src/components/         Layout, feature, and widget components
src/data/               Structured data for anime, diary, projects, skills, etc.
public/                 Static assets, images, fonts, and scripts
scripts/                Content sync, post creation, and build helper scripts
docs/                   Project maintenance documentation
tests/                  Test files and validation helpers
```

## Local development

Requirements:

- Node.js 22 or newer
- pnpm 11

Install dependencies and start the local development server:

```bash
pnpm install
pnpm dev
```

The development server runs at `http://localhost:4321` by default.

Common commands:

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build the production site into `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm check` | Run Astro diagnostics |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm new-post <filename>` | Create a new blog post |
| `pnpm format` | Format the `src/` directory |
| `pnpm lint` | Check and fix source code issues |

## Content maintenance

Posts live in `src/content/posts/`. Special pages live in `src/content/spec/`.

Create a new post:

```bash
pnpm new-post my-new-post
```

Example post frontmatter:

```yaml
---
title: My First Post
published: 2026-01-01
description: A short summary for this post
image: ./cover.webp
tags: [blog, notes]
category: Essay
draft: false
pinned: false
comment: true
---
```

## Build and deployment

Production build:

```bash
pnpm build
```

The generated site is written to `dist/`. The build script updates anime data, runs Astro's production build, generates the Pagefind search index, and compresses fonts.

This repository includes Vercel configuration and a GitHub Pages workflow, so deployment can be adapted to the target hosting platform.

The `predev` and `prebuild` scripts try to run content sync before starting or building. If an external content repository is not used, explicitly disable content sync locally or in CI:

```bash
ENABLE_CONTENT_SYNC=false
```

## Acknowledgements

This project is customized from the [Mizuki](https://github.com/LyraVoid/Mizuki) theme. Thanks to the original project for its design foundation, component system, and blog features. This repository now serves as Namrood's personal blog project.

## License

This repository keeps the upstream license files. See [LICENSE](./LICENSE) and [LICENSE.MIT](./LICENSE.MIT) for details.
