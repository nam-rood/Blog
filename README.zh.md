# Namrood 的个人博客

<img align="right" src="logo.png" width="180px" alt="Namrood Blog logo">

这是 Namrood 的个人博客项目，用来记录技术学习、生活片段、兴趣收藏和一些长期慢慢积累的内容。它不是一个通用博客模板仓库，而是一个已经被改造成个人站点的静态博客项目。

[![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)](https://nodejs.org/)
[![pnpm 11](https://img.shields.io/badge/pnpm-11-blue)](https://pnpm.io/)
[![Astro 6.3.5](https://img.shields.io/badge/Astro-6.3.5-orange)](https://astro.build/)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6-blue)](https://www.typescriptlang.org/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache)](https://opensource.org/licenses/Apache-2.0)

站点地址：[nam-rood.online](https://nam-rood.online)

README 语言：
[English](./README.md) / [简体中文](./README.zh.md) / [日本語](./README.ja.md) / [繁體中文](./README.tw.md)

![Namrood Blog Preview](./README.webp)

## 项目介绍

这个仓库承载的是一个偏个人向的内容站。博客既保存技术学习笔记，也记录生活中的一些小事，还包含番剧、日记、相册、设备、项目、技能和时间线等页面。

项目基于 Astro 静态生成，适合部署到 Vercel、GitHub Pages、Netlify、Cloudflare Pages 等静态托管平台。页面风格偏柔和，重点是让内容安静地被展示出来。

## 主要内容

- 技术文章和学习笔记
- 生活记录与日记页面
- 番剧记录页面
- 相册与图片内容
- 设备、项目、技能展示
- 归档、分类、标签和站内搜索
- RSS、站点地图和基础 SEO 支持

## 技术栈

- [Astro](https://astro.build/)：静态站点生成与页面路由
- [Svelte](https://svelte.dev/)：交互组件
- [Tailwind CSS](https://tailwindcss.com/)：样式系统
- TypeScript：类型检查与项目维护
- Pagefind：静态站内搜索
- Expressive Code：代码块高亮与增强展示
- KaTeX：数学公式渲染
- Swup：页面切换与过渡体验

## 目录说明

```text
src/content/posts/      博客文章
src/content/spec/       关于、友链等特殊页面内容
src/pages/              Astro 页面路由
src/components/         页面组件与功能组件
src/data/               番剧、日记、项目、技能等结构化数据
public/                 静态资源、图片、字体和脚本
scripts/                内容同步、文章创建、构建辅助脚本
docs/                   项目维护文档
```

## 本地开发

项目使用 pnpm 管理依赖。

```bash
pnpm install
pnpm dev
```

开发服务器默认运行在：`http://localhost:4321`

常用命令：

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm build` | 构建生产站点到 `dist/` |
| `pnpm preview` | 本地预览生产构建结果 |
| `pnpm check` | 运行 Astro 检查 |
| `pnpm type-check` | 运行 TypeScript 类型检查 |
| `pnpm new-post <文件名>` | 创建一篇新文章 |
| `pnpm format` | 格式化 `src/` 目录 |
| `pnpm lint` | 检查并修复源码问题 |

## 内容维护

文章存放在 `src/content/posts/`，特殊页面内容存放在 `src/content/spec/`。

新建文章：

```bash
pnpm new-post 我的新文章
```

文章 frontmatter 示例：

```yaml
---
title: 我的第一篇文章
published: 2026-01-01
description: 这是一篇文章摘要
image: ./cover.webp
tags: [博客, 记录]
category: 随笔
draft: false
pinned: false
comment: true
---
```

## 构建与部署

生产构建命令：

```bash
pnpm build
```

构建产物会输出到 `dist/`。仓库中已经包含 Vercel 配置和 GitHub Pages 工作流，可根据实际部署平台配置环境变量。

如果不使用独立内容仓库，建议在本地或 CI 中显式设置：

```bash
ENABLE_CONTENT_SYNC=false
```

## 致谢

本项目基于 [Mizuki](https://github.com/LyraVoid/Mizuki) 主题改造而来，感谢原项目提供的设计基础、组件能力和博客功能。当前仓库在此基础上整理为 Namrood 的个人博客项目。

## License

项目保留上游许可证设置，详见 [LICENSE](./LICENSE) 与 [LICENSE.MIT](./LICENSE.MIT)。
