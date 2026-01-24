# Cutting Works Burst

![Project Banner](/opengraph-image.png)

「Cutting Works Burst」は、カッティングステッカーの制作・販売を行う「Cutting Works」の公式ポートフォリオサイトです。
Next.js 15 (App Router) と Tailwind CSS v4 を基盤に、Framer Motion による洗練されたアニメーションを組み合わせ、直感的かつ没入感のあるギャラリー体験を提供します。

## 🚀 主な機能 (Features)

### 1. モダンなギャラリー UI

- **Visual Browsing**: 大量の制作実績をグリッドレイアウトで美しく表示。
- **Interactive Gallery**: ホバーエフェクトやトランジションにより、ユーザーが楽しみながらデザインを探せるインターフェースを実現。

### 2. 高度なアニメーション

- **Framer Motion Integration**: スクロール連動のフェードインや、要素の登場演出を実装。シンプルながらも動きのあるWeb体験を提供します。

### 3. 最適化された開発環境

- **Bun Runtime**: 超高速なJavaScriptランタイム「Bun」を採用し、依存関係のインストールからビルドまでを高速化。
- **Tailwind CSS v4**: 最新のCSSエンジンを活用し、ゼロランタイムのハイパフォーマンスなスタイリングを実現。

## 🛠 技術スタック (Tech Stack)

### Core

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Runtime**: [Bun](https://bun.sh/)

### Visuals & Styling

- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Design Source**: [Figma](https://item-sync-83384163.figma.site/)

### Deployment

- **Platform**: [Vercel](https://vercel.com/)

## 💻 セットアップ (Getting Started)

プロジェクトをローカル環境で実行する手順です。

### 1. 依存関係のインストール

```bash
bun install
```

### 2. 開発サーバーの起動

```bash
bun run dev
```

`http://localhost:3000` でサイトにアクセスできます。
エディタで `app/page.tsx` を編集すると、ブラウザが自動的に更新されます。

## 📂 プロジェクト構造 (Project Structure)

```
app/
├── components/      # UI Components (Hero, About, Works, Contact, Footer)
├── data/            # Static Data (works.ts - Gallery items)
├── page.tsx         # Main entry point
└── layout.tsx       # Root layout
public/
└── works/           # Work images (e.g., kato-body-works.jpg)
```

## 🎨 画像・作品の追加

ギャラリーのデータは `app/data/works.ts` で一元管理されています。

1. **画像の保存**: `public/works/` に画像ファイルを配置します。
2. **データの追加**: `app/data/works.ts` に以下の形式で追記します。

```ts
export const worksItems = [
  {
    id: 3,
    src: "/works/kato-body-works.jpg",
    alt: "作品タイトルまたは説明",
  },
  // ...
];
```

## 📜 ライセンス

MIT

---

© 2026 Eric Kei / Cutting Works Burst
