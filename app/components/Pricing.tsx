"use client";

import { Reveal } from "../components/Reveal";
import { useState } from "react";

type Size = 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60;
type ShortSide = 5 | 10 | 15 | 20;

const priceTable: Record<ShortSide, Record<Size, number>> = {
  5: { 5: 400, 10: 400, 15: 700, 20: 700, 25: 2600, 30: 2600, 35: 2600, 40: 2600, 45: 3800, 50: 3800, 55: 3800, 60: 3800 },
  10: { 5: 400, 10: 400, 15: 700, 20: 700, 25: 2600, 30: 2600, 35: 2600, 40: 2600, 45: 3800, 50: 3800, 55: 3800, 60: 3800 },
  15: { 5: 400, 10: 700, 15: 700, 20: 700, 25: 2600, 30: 2600, 35: 2600, 40: 2600, 45: 3800, 50: 3800, 55: 3800, 60: 3800 },
  20: { 5: 400, 10: 700, 15: 700, 20: 700, 25: 2600, 30: 2600, 35: 2600, 40: 2600, 45: 3800, 50: 3800, 55: 3800, 60: 3800 },
};

function formatPrice(price: number): string {
  return `¥${price.toLocaleString('ja-JP')}〜`;
}

function getFormattedPrice(shortSide: ShortSide, longSide: Size): string {
  const price = priceTable[shortSide]?.[longSide];
  if (price === undefined) {
    return "-";
  }
  return formatPrice(price);
}

const tierData = [
  {
    label: "Sサイズ",
    size: "最長辺 〜10cm",
    price: "¥400〜",
    examples: "ショップロゴ・ワンポイントに最適",
  },
  {
    label: "Mサイズ",
    size: "最長辺 10〜15cm",
    price: "¥700〜",
    examples: "車両用サイドステッカー・ガラス面",
  },
  {
    label: "Lサイズ",
    size: "最長辺 15〜25cm",
    price: "¥2,600〜",
    examples: "サインボード・イベント装飾",
  },
  {
    label: "XLサイズ",
    size: "最長辺 25〜cm",
    price: "¥3,800〜",
    examples: "看板・大型ディスプレイ",
  },
];

const addOnData = [
  { label: "デザイン制作", detail: "ラフ案からのオリジナルデザイン", price: "¥5,000〜" },
  { label: "データ持ち込み調整", detail: "Ai / PDF / PNG / JPG に対応", price: "無料〜¥3,000" },
];

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const longSides: Size[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
  const shortSides: ShortSide[] = [5, 10, 15, 20];

  return (
    <section id="pricing" className="w-full bg-background py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <Reveal>
          <div className="space-y-3 text-center sm:text-left">
            <h2 className="text-[22px] font-semibold tracking-tight text-foreground md:text-[28px]">
              Price List
            </h2>
            <p className="text-sm text-foreground/65 md:text-base">
              切り文字ステッカーの目安料金です。素材や施工方法によって前後しますので、お気軽にお問い合わせください。
            </p>
          </div>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-[32px] border border-foreground/10 bg-surface/95 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] dark:bg-white/10">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground/60">Standard Plans</h3>
                <span className="text-xs text-foreground/50 md:text-right">
                  すべて税込価格。サイズから概算費用をお調べいただけます。
                </span>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
                {tierData.map((tier) => (
                  <button
                    key={tier.label}
                    onClick={() => setIsModalOpen(true)}
                    className="rounded-3xl border border-foreground/10 bg-background/95 p-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-white/15 cursor-pointer"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="text-base font-semibold text-foreground sm:text-lg">{tier.label}</p>
                      <span className="text-xs tracking-[0.28em] text-foreground/45">{tier.size}</span>
                    </div>
                    <p className="mt-3 text-[clamp(20px,5vw,28px)] font-semibold text-foreground">{tier.price}</p>
                    <p className="mt-2 text-sm text-foreground/70">{tier.examples}</p>
                    <p className="mt-2 text-xs text-foreground/50">タップして詳細料金表を見る</p>
                  </button>
                ))}
              </div>
              <div className="hidden overflow-x-auto lg:block">
                <table className="w-full min-w-[720px] table-auto border-collapse border border-foreground/10 text-center text-foreground">
                  <thead className="sticky top-0 z-10 bg-background/90 backdrop-blur-sm">
                    <tr>
                      <th className="border border-foreground/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70 md:text-sm">
                        短辺 \\ 長辺
                      </th>
                      {longSides.map((longSide) => (
                        <th
                          key={longSide}
                          className="border border-foreground/10 px-4 py-3 text-xs font-semibold text-foreground/80 md:text-sm"
                        >
                          {longSide}cm
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {shortSides.map((shortSide, index) => (
                      <tr key={shortSide} className={index % 2 === 0 ? "bg-background/60" : "bg-background/40"}>
                        <td className="border border-foreground/10 px-4 py-3 text-xs font-semibold text-foreground/70 md:text-sm">
                          {shortSide}cm
                        </td>
                        {longSides.map((longSide) => (
                          <td key={longSide} className="border border-foreground/10 px-4 py-3 text-sm font-semibold">
                            {getFormattedPrice(shortSide, longSide)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-xs text-foreground/50 md:text-sm">
                仕上がりサイズ・カット内容により最終金額をお見積もりいたします。複数枚・大量注文もご相談ください。
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="h-full">
            <div className="flex h-full flex-col gap-6 rounded-[28px] border border-foreground/10 bg-background/95 p-6 shadow-[0_16px_50px_-35px_rgba(15,23,42,0.4)] dark:bg-white/10">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-foreground/60">Options</h3>
                <ul className="space-y-4">
                  {addOnData.map((item) => (
                    <li
                      key={item.label}
                      className="rounded-2xl border border-foreground/10 bg-foreground/[0.04] p-4 dark:bg-white/10"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <p className="text-sm font-semibold text-foreground md:text-base">{item.label}</p>
                        <span className="text-sm font-semibold text-foreground/80">{item.price}</span>
                      </div>
                      <p className="mt-1 text-xs text-foreground/60">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-dashed border-foreground/20 bg-foreground/[0.03] p-4 text-xs text-foreground/60 dark:bg-white/5 md:text-sm">
                <p>※2㎝未満の文字や細かい書体・3㎜以下の細線はカットできない場合があります。</p>
                <p className="mt-1">※小さな点や細いラインは粘着面積が少なく、剥がれやすくなる可能性があります。</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* モーダル */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm">
          <div className="mx-4 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-foreground/10 bg-background/95 p-6 shadow-2xl dark:bg-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">詳細料金表</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-full p-2 text-foreground/60 hover:bg-foreground/10 hover:text-foreground transition-colors"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] table-auto border-collapse border border-foreground/10 text-center text-foreground">
                <thead className="sticky top-0 z-10 bg-background/90 backdrop-blur-sm">
                  <tr>
                    <th className="border border-foreground/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70 md:text-sm">
                      短辺 \\ 長辺
                    </th>
                    {longSides.map((longSide) => (
                      <th
                        key={longSide}
                        className="border border-foreground/10 px-4 py-3 text-xs font-semibold text-foreground/80 md:text-sm"
                      >
                        {longSide}cm
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {shortSides.map((shortSide, index) => (
                    <tr key={shortSide} className={index % 2 === 0 ? "bg-background/60" : "bg-background/40"}>
                      <td className="border border-foreground/10 px-4 py-3 text-xs font-semibold text-foreground/70 md:text-sm">
                        {shortSide}cm
                      </td>
                      {longSides.map((longSide) => (
                        <td key={longSide} className="border border-foreground/10 px-4 py-3 text-sm font-semibold">
                          {getFormattedPrice(shortSide, longSide)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-xs text-foreground/50 md:text-sm">
              仕上がりサイズ・カット内容により最終金額をお見積もりいたします。複数枚・大量注文もご相談ください。
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
