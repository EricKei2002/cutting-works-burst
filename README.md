<!-- cspell:ignore kato -->

# Cutting Works Burst

Next.js 15 + TypeScript + Tailwind CSS + Framer Motion によるWEBサイトです。スクロール時のフェードやホバー演出を取り入れ、作品ギャラリーをシンプルに閲覧できます。

- フレームワーク: Next.js (App Router)
- 言語: TypeScript
- スタイリング: Tailwind CSS v4
- アニメーション: Framer Motion
- パッケージマネージャ: Bun
- デプロイ: Vercel
- 仕様・参考: [Figmaサイト](https://item-sync-83384163.figma.site/)

## セットアップ

```bash
bun install
```

## 開発

```bash
bun run dev
```

- 開発URL: [http://localhost:3000](http://localhost:3000)
- ページ編集: `app/page.tsx`
- セクション: `app/components/`（`Hero`, `About`, `Works`, `Contact`, `Footer`）

## ビルド

```bash
bun run build
bun run start
```

## デプロイ（Vercel）

1. リポジトリをGitHubへプッシュ
2. Vercel ダッシュボードで「New Project」→ 対象リポジトリを選択
3. 環境に応じてオプションを設定しデプロイ

CLIでも可能です:

```bash
bunx vercel
```

## 画像・作品の追加/差し替え

- 画像は `public/works/` 配下に保存します（例: `public/works/kato-body-works.jpg`）。
- ギャラリーのデータは `app/data/works.ts` で管理しています。以下のように追記/編集してください。

```ts
export const worksItems = [
  {
    id: 3,
    src: "/works/kato-body-works.jpg",
    alt: "加藤自動車鈑金 外観・ウィンドウサイン",
  },
];
```

- 画像読込エラー時は自動で `/file.svg` にフォールバックします（`app/components/Works.tsx` の `WorkImage`）。
- トリミング方法を変えたい場合は `object-cover`/`object-contain` を調整してください。

## ライセンス

MIT
