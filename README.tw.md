<div align="center">

<img src="logo.png" width="140" alt="Namrood Blog logo">

# Namrood 的個人部落格

一個柔和、以內容為中心的個人部落格，用來記錄技術筆記、日常想法、個人興趣和長期累積的內容。

[造訪網站](https://nam-rood.online) · [English](./README.md) · [简体中文](./README.zh.md) · [日本語](./README.ja.md) · [繁體中文](./README.tw.md)

[![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)](https://nodejs.org/)
[![pnpm 11](https://img.shields.io/badge/pnpm-11-blue)](https://pnpm.io/)
[![Astro 6.3.5](https://img.shields.io/badge/Astro-6.3.5-orange)](https://astro.build/)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6-blue)](https://www.typescriptlang.org/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache)](https://opensource.org/licenses/Apache-2.0)

![Namrood Blog Preview](./README.webp)

</div>

## 專案介紹

Namrood Blog 是一個為 Namrood 的個人寫作與歸檔定製的靜態站點。它把技術筆記、學習記錄、生活更新、追番清單、日記、相簿、設備、專案、技能和時間線頁面集中在一個地方。

站點基於 Astro 生成，可部署到 Vercel、GitHub Pages、Netlify、Cloudflare Pages 等靜態託管平台。整體設計偏柔和、以內容為中心，希望讓寫作、閱讀和回看記憶都保持安靜而簡單。

## 亮點

- 面向個人寫作的長期歸檔，涵蓋隨筆、學習筆記、日記、相簿和長期記錄
- 靜態優先的 Astro 站點，支援 RSS、網站地圖、本地搜尋和基礎 SEO
- 柔和的視覺風格，專注於平靜閱讀和記憶保存
- 使用結構化資料維護追番、設備、專案、技能和個人時間線頁面
- 提供英文、簡體中文、日文和繁體中文 README 文件

## 主要內容

- 技術文章與學習筆記
- 生活記錄與日記頁面
- 追番記錄頁面
- 相簿與圖片內容
- 設備、專案、技能展示
- 歸檔、分類、標籤和站內搜尋
- RSS、網站地圖和基礎 SEO 支援

## 技術棧

- [Astro](https://astro.build/)：靜態生成與頁面路由
- [Svelte](https://svelte.dev/)：互動元件
- [Tailwind CSS](https://tailwindcss.com/)：樣式系統
- TypeScript：型別檢查與專案維護
- Pagefind：靜態站內搜尋
- Expressive Code：程式碼區塊增強展示
- KaTeX：數學公式渲染
- Swup：頁面切換與過渡體驗

## 目錄說明

```text
src/content/posts/      部落格文章
src/content/spec/       關於、友鏈等特殊頁面內容
src/pages/              Astro 頁面路由
src/components/         版面、功能與小工具元件
src/data/               追番、日記、專案、技能等結構化資料
public/                 靜態資源、圖片、字體和腳本
scripts/                內容同步、文章建立和建置輔助腳本
docs/                   專案維護文件
tests/                  測試文件與驗證輔助內容
```

## 本地開發

環境需求：

- Node.js 22 或更新版本
- pnpm 11

安裝依賴並啟動本地開發伺服器：

```bash
pnpm install
pnpm dev
```

開發伺服器預設執行在 `http://localhost:4321`。

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

建置產物會輸出到 `dist/`。建置腳本會更新追番資料，執行 Astro 生產建置，生成 Pagefind 搜尋索引，並壓縮字體。

倉庫中已包含 Vercel 配置和 GitHub Pages 工作流程，可依目標託管平台進行調整。

`predev` 和 `prebuild` 腳本會在啟動或建置前嘗試執行內容同步。如果不使用外部內容倉庫，請在本地或 CI 中明確停用內容同步：

```bash
ENABLE_CONTENT_SYNC=false
```

## 致謝

本專案基於 [Mizuki](https://github.com/LyraVoid/Mizuki) 主題定製而來。感謝原專案提供的設計基礎、元件系統和部落格功能。目前這個倉庫作為 Namrood 的個人部落格專案使用。

## License

本倉庫保留上游授權文件。詳見 [LICENSE](./LICENSE) 與 [LICENSE.MIT](./LICENSE.MIT)。
