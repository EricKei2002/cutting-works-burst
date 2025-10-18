<!-- cspell:ignore kato vercel -->

# Cutting Works Burst - AI Agent Instructions

このプロジェクトは、Next.js 15を使用したポートフォリオサイトで、アニメーション効果を活用したシンプルな作品ギャラリーを提供します。

## アーキテクチャ概要

- **App Router構造**: Next.js 15のApp Routerパターンを採用
- **コンポーネント分割**: `app/components/`に機能別コンポーネントを配置
- **データフロー**: `app/data/works.ts`がギャラリーのソースデータを管理

## 主要コンポーネントと役割

1. **Works.tsx**
   - ギャラリー表示の中核コンポーネント
   - Framer Motionによるアニメーション制御
   - 画像読み込みエラー時の自動フォールバック機能
   ```typescript
   // 画像コンポーネントの例
   <WorkImage src={src} alt={alt} onError={() => setCurrentSrc("/file.svg")} />
   ```

2. **Reveal.tsx**
   - スクロールアニメーション用のラッパーコンポーネント
   - セクション単位でのフェードイン効果を実装

## 開発ワークフロー

1. **ローカル開発**:
   ```bash
   npm install
   npm run dev  # http://localhost:3000
   ```

2. **作品の追加/更新**:
   - 画像を `public/works/` に配置
   - `app/data/works.ts` にエントリを追加:
   ```typescript
   export const worksItems = [{
     id: 3,
     src: "/works/example.jpg",
     alt: "作品説明"
   }];
   ```

3. **デプロイ**:
   - Vercelを使用（GitHubと連携）
   - プッシュ時に自動デプロイ

## プロジェクト固有の規則

1. **画像管理**:
   - 作品画像は必ず `public/works/` に配置
   - フォールバック画像として `/file.svg` を使用

2. **コンポーネント規則**:
   - クライアントサイドコンポーネントには "use client" を明示
   - アニメーション関連の処理は Framer Motion に集約

3. **型定義**:
   - 作品データは `WorkItem` 型で統一
   - コンポーネントのProps型は明示的に定義

## 依存関係とインテグレーション

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Vercel (デプロイ)