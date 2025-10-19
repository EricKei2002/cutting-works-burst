import { Reveal } from "../components/Reveal";

const tierData = [
  {
    label: "Sサイズ",
    size: "最長辺 〜15cm",
    price: "¥500〜",
    examples: "ショップロゴ・ワンポイントに最適",
  },
  {
    label: "Mサイズ",
    size: "最長辺 15〜40cm",
    price: "¥1,200〜",
    examples: "車両用サイドステッカー・ガラス面",
  },
  {
    label: "Lサイズ",
    size: "最長辺 40〜70cm",
    price: "¥2,600〜",
    examples: "サインボード・イベント装飾",
  },
  {
    label: "XLサイズ",
    size: "最長辺 70〜100cm",
    price: "¥3,800〜",
    examples: "看板・大型ディスプレイ",
  },
];

const addOnData = [
  { label: "デザイン制作", detail: "ラフ案からのオリジナルデザイン", price: "¥5,000〜" },
  { label: "データ持ち込み調整", detail: "Ai / PDF / PNG / JPG に対応", price: "無料〜¥2,000" },
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full bg-background py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <Reveal>
          <div className="space-y-3">
            <h2 className="text-[22px] md:text-[28px] font-semibold tracking-tight text-foreground">
              Price List
            </h2>
            <p className="text-sm text-foreground/65">
              切り文字ステッカーの目安料金です。素材や施工方法によって前後しますので、お気軽にお問い合わせください。
            </p>
          </div>
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <Reveal>
            <div className="rounded-[32px] border border-foreground/10 bg-surface/95 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] dark:bg-white/10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground/60">Standard Plans</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {tierData.map((tier) => (
                  <div
                    key={tier.label}
                    
                  className="cursor-pointer rounded-3xl border border-foreground/10 bg-background/95 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:bg-white/10"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-base font-semibold text-foreground">{tier.label}</p>
                      <span className="text-xs tracking-[0.28em] text-foreground/45">{tier.size}</span>
                    </div>
                    <p className="mt-3 text-[clamp(20px,3vw,28px)] font-semibold text-foreground">{tier.price}</p>
                    <p className="mt-2 text-sm text-foreground/70">{tier.examples}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-foreground/50">
                仕上がりサイズ・カット内容により最終金額をお見積もりいたします。複数枚・大量注文もご相談ください。
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between gap-6 rounded-[28px] border border-foreground/10 bg-background/95 p-6 shadow-[0_16px_50px_-35px_rgba(15,23,42,0.4)] dark:bg-white/10">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-foreground/60">Options</h3>
                <ul className="mt-4 space-y-4">
                  {addOnData.map((item) => (
                    <li key={item.label} className="rounded-2xl border border-foreground/10 bg-foreground/[0.04] p-4 dark:bg-white/10">
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        <span className="text-sm font-semibold text-foreground/80">{item.price}</span>
                      </div>
                      <p className="mt-1 text-xs text-foreground/60">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-dashed border-foreground/20 bg-foreground/[0.03] p-4 text-xs text-foreground/60 dark:bg-white/5">
                <p>※2㎝未満の文字や細かい書体・3㎜以下の細線はカットできない場合があります。</p>
                <p className="mt-1">※小さな点や細いラインは粘着面積が少なく、剥がれやすくなる可能性があります。</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
