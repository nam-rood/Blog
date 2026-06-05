# Namrood 的個人部落格

<img align="right" src="logo.png" width="180px" alt="Namrood Blog logo">

這是 Namrood 的個人部落格專案，用來記錄技術學習、生活片段、興趣收藏，以及一些想長期保存的內容。它不是一個通用部落格模板倉庫，而是一個已經整理成個人站點的靜態部落格專案。

[![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)](https://nodejs.org/)
[![pnpm 11](https://img.shields.io/badge/pnpm-11-blue)](https://pnpm.io/)
[![Astro 6.3.5](https://img.shields.io/badge/Astro-6.3.5-orange)](https://astro.build/)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6-blue)](https://www.typescriptlang.org/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache)](https://opensource.org/licenses/Apache-2.0)

網站：[nam-rood.online](https://nam-rood.online)

README 語言：
[English](./README.md) / [简体中文](./README.zh.md) / [日本語](./README.ja.md) / [繁體中文](./README.tw.md)

![Namrood Blog Preview](./README.webp)

## 專案介紹

這個倉庫承載的是一個偏個人向的內容站。部落格保存技術學習筆記，也記錄生活中的一些小事，並包含追番、日記、相簿、設備、專案、技能和時間線等頁面。

專案基於 Astro 靜態生成，適合部署到 Vercel、GitHub Pages、Netlify、Cloudflare Pages 等靜態託管平台。頁面風格偏柔和，重點是讓內容安靜地被展示出來。

## 主要內容

- 技術文章與學習筆記
- 生活記錄與日記頁面
- 追番記錄頁面
- 相簿與圖片內容
- 設備、專案、技能展示
- 歸檔、分類、標籤和站內搜尋
- RSS、網站地圖和基礎 SEO 支援

## 技術棧

- [Astro](https://astro.build/)：靜態站點生成與頁面路由
- [Svelte](https://svelte.dev/)：互動元件
- [Tailwind CSS](https://tailwindcss.com/)：樣式系統
- TypeScript：型別檢查與專案維護
- Pagefind：靜態站內搜尋
- Expressive Code：程式碼區塊高亮與增強展示
- KaTeX：數學公式渲染
- Swup：頁面切換與過渡體驗

## 目錄說明

```text
src/content/posts/      部落格文章
src/content/spec/       關於、友鏈等特殊頁面內容
src/pages/              Astro 頁面路由
src/components/         頁面元件與功能元件
src/data/               追番、日記、專案、技能等結構化資料
public/                 靜態資源、圖片、字體和腳本
scripts/                內容同步、文章建立、建置輔助腳本
docs/                   專案維護文件
```

## 本地開發

專案使用 pnpm 管理依賴。

```bash
pnpm install
pnpm dev
```

開發伺服器預設執行在：`http://localhost:4321`

常用命令：

| 命令 | 說明 |
| --- | --- |
| `pnpm dev` | 啟動本地開發伺服器 |
| `pnpm build` | 建置生產站點到 `dist/` |
| `pnpm preview` | 本地預覽生產建置結果 |
| `pnpm check` | 執行 Astro 檢查 |
| `pnpm type-check` | 執行 TypeScript 型別檢查 |
| `pnpm new-post <檔案名>` | 建立一篇新文章 |
| `pnpm format` | 格式化 `src/` 目錄 |
| `pnpm lint` | 檢查並修復原始碼問題 |

## 內容維護

文章存放在 `src/content/posts/`，特殊頁面內容存放在 `src/content/spec/`。

建立新文章：

```bash
pnpm new-post 我的新文章
```

文章 frontmatter 範例：

```yaml
---
title: 我的第一篇文章
published: 2026-01-01
description: 這是一篇文章摘要
image: ./cover.webp
tags: [部落格, 記錄]
category: 隨筆
draft: false
pinned: false
comment: true
---
```

## 建置與部署

生產建置命令：

```bash
pnpm build
```

建置產物會輸出到 `dist/`。倉庫中已包含 Vercel 配置和 GitHub Pages 工作流程，可依實際部署平台配置環境變數。

如果不使用獨立內容倉庫，建議在本地或 CI 中明確設定：

```bash
ENABLE_CONTENT_SYNC=false
```

## 致謝

本專案基於 [Mizuki](https://github.com/LyraVoid/Mizuki) 主題改造而來，感謝原專案提供的設計基礎、元件能力和部落格功能。目前這個倉庫已整理為 Namrood 的個人部落格專案。

## License

專案保留上游授權設定，詳見 [LICENSE](./LICENSE) 與 [LICENSE.MIT](./LICENSE.MIT)。
