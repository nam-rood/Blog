# Namrood Blog

<img align="right" src="logo.png" width="180px" alt="Namrood Blog logo">

This is Namrood's personal blog project, built to collect technical notes, everyday thoughts, personal interests, and long-running records. It is not maintained as a generic blog template; it is a customized static site for Namrood's own writing and archive.

[![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)](https://nodejs.org/)
[![pnpm 11](https://img.shields.io/badge/pnpm-11-blue)](https://pnpm.io/)
[![Astro 6.3.5](https://img.shields.io/badge/Astro-6.3.5-orange)](https://astro.build/)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6-blue)](https://www.typescriptlang.org/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache)](https://opensource.org/licenses/Apache-2.0)

Site: [nam-rood.online](https://nam-rood.online)

README languages:
[English](./README.md) / [简体中文](./README.zh.md) / [日本語](./README.ja.md) / [繁體中文](./README.tw.md)

![Namrood Blog Preview](./README.webp)

## About this project

This repository powers a personal content site. It keeps programming notes, learning records, life updates, anime lists, diaries, albums, devices, projects, skills, and timeline pages in one place.

The site is generated statically with Astro and can be deployed to static hosting platforms such as Vercel, GitHub Pages, Netlify, or Cloudflare Pages. The design is soft and content-first, with the goal of making writing, reading, and revisiting memories feel calm and simple.

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
```

## Local development

This project uses pnpm for dependency management.

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

The generated site is written to `dist/`. The repository includes Vercel configuration and a GitHub Pages workflow, so deployment can be adapted to the target hosting platform.

If an external content repository is not used, explicitly disable content sync locally or in CI:

```bash
ENABLE_CONTENT_SYNC=false
```

## Acknowledgements

This project is customized from the [Mizuki](https://github.com/LyraVoid/Mizuki) theme. Thanks to the original project for its design foundation, component system, and blog features. This repository now serves as Namrood's personal blog project.

## License

The project keeps the upstream license setup. See [LICENSE](./LICENSE) and [LICENSE.MIT](./LICENSE.MIT).
