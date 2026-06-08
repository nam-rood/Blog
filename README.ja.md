<div align="center">

<img src="logo.png" width="140" alt="Namrood Blog logo">

# Namrood Blog

技術メモ、日々の思い、個人的な興味、長く残しておきたい記録をまとめる、やわらかくコンテンツ中心の個人ブログです。

[サイトを見る](https://nam-rood.online) · [English](./README.md) · [简体中文](./README.zh.md) · [日本語](./README.ja.md) · [繁體中文](./README.tw.md)

[![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)](https://nodejs.org/)
[![pnpm 11](https://img.shields.io/badge/pnpm-11-blue)](https://pnpm.io/)
[![Astro 6.3.5](https://img.shields.io/badge/Astro-6.3.5-orange)](https://astro.build/)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6-blue)](https://www.typescriptlang.org/)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache)](https://opensource.org/licenses/Apache-2.0)

![Namrood Blog Preview](./README.webp)

</div>

## プロジェクトについて

Namrood Blog は、Namrood 自身の文章と記録のためにカスタマイズされた静的サイトです。技術メモ、学習記録、日々の更新、アニメリスト、日記、アルバム、デバイス、プロジェクト、スキル、タイムラインページを一つの場所にまとめています。

サイトは Astro で生成され、Vercel、GitHub Pages、Netlify、Cloudflare Pages などの静的ホスティングにデプロイできます。デザインはやわらかくコンテンツ中心で、書くこと、読むこと、記憶を振り返ることが静かでシンプルに感じられることを目指しています。

## ハイライト

- エッセイ、学習メモ、日記、アルバム、長期記録をまとめる個人向けアーカイブ
- RSS、サイトマップ、ローカル検索、基本的な SEO に対応した静的優先の Astro サイト
- 落ち着いた読書体験と記憶の保存を重視したやわらかいビジュアルスタイル
- アニメ、デバイス、プロジェクト、スキル、個人タイムライン用の構造化データページ
- 英語、簡体字中国語、日本語、繁体字中国語の README ドキュメント

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
tests/                  テストファイルと検証用ヘルパー
```

## ローカル開発

必要な環境：

- Node.js 22 以上
- pnpm 11

依存関係をインストールし、ローカル開発サーバーを起動します。

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

生成されたサイトは `dist/` に出力されます。ビルドスクリプトはアニメデータを更新し、Astro の本番ビルドを実行し、Pagefind の検索インデックスを生成し、フォントを圧縮します。

このリポジトリには Vercel 設定と GitHub Pages ワークフローが含まれているため、対象のホスティング環境に合わせて調整できます。

`predev` と `prebuild` スクリプトは、起動またはビルドの前にコンテンツ同期を試みます。外部コンテンツリポジトリを使わない場合は、ローカルまたは CI でコンテンツ同期を明示的に無効化してください。

```bash
ENABLE_CONTENT_SYNC=false
```

## 謝辞

このプロジェクトは [Mizuki](https://github.com/LyraVoid/Mizuki) テーマを元にカスタマイズしています。デザインの土台、コンポーネントシステム、ブログ機能を提供してくれた元プロジェクトに感謝します。現在このリポジトリは Namrood の個人ブログプロジェクトとして運用されています。

## License

このリポジトリは上流プロジェクトのライセンスファイルを保持しています。[LICENSE](./LICENSE) と [LICENSE.MIT](./LICENSE.MIT) を参照してください。
