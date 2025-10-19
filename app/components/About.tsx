import { Reveal } from "../components/Reveal";

const serviceItems = [
  "切り文字ステッカー制作（車・看板・店舗・バイクなど）",
  "オリジナルデザイン作成",
  "データ持ち込み・入稿対応",
];

const materialNotes = [
  {
    title: "中川ケミカル紙",
    description: "屋外対応、耐水性、耐候5〜8年。車両やガラス面にも信頼して使えるフィルムです。",
  },
  {
    title: "カッティング機材（Roland）",
    description: "高精度プロッターで細部まで正確にカット。複雑なラインや小さな文字もシャープに再現。",
  },
  {
    title: "ワンストップ対応",
    description: "デザイン〜カット〜仕上げまでを一気通貫で行い、スピード感と品質を両立しています。",
  },
];

const conceptText =
  "私たちは、切り文字タイプのカッティングステッカー・ステッカーデザインを専門に制作する小さなスタジオです。シンプルで洗練されたデザインと、耐久性に優れた高品質な仕上がりを大切にしています。お客様の『伝えたい』『魅せたい』想いを、形にするお手伝いをしています。";

export function About() {
  return (
    <section id="about" className="w-full bg-background py-24 transition-colors duration-500 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal delay={0.05}>
          <h2 className="mt-4 text-[clamp(32px,5vw,46px)] font-semibold tracking-tight text-foreground">
            サービス内容
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-4  font-semibold tracking-tight text-foreground">
            店舗のウィンドウサインや車両用ステッカー、イベント装飾など、幅広い用途に対応。既存デザインからの制作はもちろん、ゼロからのオリジナルデザインにも対応しています。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-foreground/10 bg-surface p-8 shadow-sm dark:border-white/10 dark:bg-white/10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em]text-foreground">Menu</h3>
              <ul className="space-y-4 text-sm leading-relaxed text-foreground">
                {serviceItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full text-foreground" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.16}>
              <article className="rounded-3xl border border-foreground/10 bg-surface p-8 shadow-sm dark:border-white/10 dark:bg-white/10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
                  紹介・コンセプト
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground">{conceptText}</p>
              </article>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="grid gap-4 rounded-3xl border border-foreground/10 bg-surface p-6 shadow-inner dark:border-white/10 dark:bg-white/10 md:grid-cols-3">
                {materialNotes.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2 text-left">
                    <span className="text-sm font-semibold text-foreground">{item.title}</span>
                    <p className="text-xs leading-relaxed text-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
