# Namrood Blog

<img align="right" src="logo.png" width="180px" alt="Namrood Blog logo">

これは Namrood の個人ブログプロジェクトです。技術メモ、日々の記録、個人的な興味、長く残しておきたい内容をまとめるために作られています。汎用ブログテンプレートとしてではなく、Namrood 自身の文章と記録のためにカスタマイズされた静的サイトです。

[![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)](https://nodejs.org/)
[![pnpm 11](https://img.shields.io/badge/pnpm-11-blue)](https://pnpm.io/)
[![Astro 6.3.5](https://img.shields.io/badge/Astro-6.3.5-orange)](https://astro.build/)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6-blue)](https://www.typescriptlang.org/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache)](https://opensource.org/licenses/Apache-2.0)

サイト：[nam-rood.online](https://nam-rood.online)

README 言語：
[English](./README.md) / [简体中文](./README.zh.md) / [日本語](./README.ja.md) / [繁體中文](./README.tw.md)

![Namrood Blog Preview](./README.webp)

## プロジェクトについて

このリポジトリは、個人向けのコンテンツサイトを動かしています。プログラミングの学習メモ、生活の記録、アニメ、日記、アルバム、デバイス、プロジェクト、スキル、タイムラインなどを一つの場所にまとめています。

サイトは Astro によって静的生成され、Vercel、GitHub Pages、Netlify、Cloudflare Pages などの静的ホスティングにデプロイできます。デザインはやわらかく、コンテンツを静かに読めることを大切にしています。

## 主な内容

- 技術記事と学習ノート
- 日記と生活の記録
- アニメ記録ページ
- アルバムと画像コンテンツ
- デバイス、プロジェクト、スキルページ
- アーカイブ、カテゴリ、タグ、サイト内検索
- RSS、サイトマップ、基本的な SEO 対応

## 技術スタック

- [Astro](https://astro.build/)：静的生成とルーティング
- [Svelte](https://svelte.dev/)：インタラクティブなコンポーネント
- [Tailwind CSS](https://tailwindcss.com/)：スタイリング
- TypeScript：型チェックと保守
- Pagefind：静的サイト検索
- Expressive Code：コードブロックの拡張表示
- KaTeX：数式レンダリング
- Swup：ページ遷移

## ディレクトリ構成

```text
src/content/posts/      ブログ記事
src/content/spec/       About や Friends などの特別ページ
src/pages/              Astro のページルート
src/components/         レイアウト、機能、ウィジェットのコンポーネント
src/data/               アニメ、日記、プロジェクト、スキルなどの構造化データ
public/                 静的アセット、画像、フォント、スクリプト
scripts/                コンテンツ同期、記事作成、ビルド補助スクリプト
docs/                   プロジェクト保守用ドキュメント
```

## ローカル開発

このプロジェクトは pnpm で依存関係を管理します。

```bash
pnpm install
pnpm dev
```

開発サーバーは通常 `http://localhost:4321` で起動します。

よく使うコマンド：

| コマンド | 説明 |
| --- | --- |
| `pnpm dev` | ローカル開発サーバーを起動 |
| `pnpm build` | 本番用サイトを `dist/` にビルド |
| `pnpm preview` | 本番ビルドをローカルで確認 |
| `pnpm check` | Astro の診断を実行 |
| `pnpm type-check` | TypeScript の型チェックを実行 |
| `pnpm new-post <filename>` | 新しい記事を作成 |
| `pnpm format` | `src/` ディレクトリを整形 |
| `pnpm lint` | ソースコードの問題を確認して修正 |

## コンテンツ管理

記事は `src/content/posts/` にあります。特別ページは `src/content/spec/` にあります。

新しい記事を作成：

```bash
pnpm new-post my-new-post
```

記事 frontmatter の例：

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

## ビルドとデプロイ

本番ビルド：

```bash
pnpm build
```

生成されたサイトは `dist/` に出力されます。リポジトリには Vercel 設定と GitHub Pages ワークフローが含まれているため、利用するホスティング環境に合わせて調整できます。

外部コンテンツリポジトリを使わない場合は、ローカルまたは CI でコンテンツ同期を明示的に無効化します。

```bash
ENABLE_CONTENT_SYNC=false
```

## 謝辞

このプロジェクトは [Mizuki](https://github.com/LyraVoid/Mizuki) テーマを元にカスタマイズしています。デザインの土台、コンポーネント構成、ブログ機能を提供してくれた元プロジェクトに感謝します。現在このリポジトリは Namrood の個人ブログプロジェクトとして運用されています。

## License

上流プロジェクトのライセンス構成を保持しています。[LICENSE](./LICENSE) と [LICENSE.MIT](./LICENSE.MIT) を参照してください。
