import { Reveal } from "../components/Reveal";

const rows = ["5cm", "10cm", "15cm", "20cm"] as const;

const columnsFirst = [
  "5cm",
  "10cm",
  "15cm",
  "20cm",
  "25cm",
  "30cm",
  "35cm",
  "40cm",
  "45cm",
  "50cm",
] as const;

const dataFirst = [
  [300, 400, 500, 700, 900, 1100, 1300, 1500, 1700, 1900],
  [400, 500, 700, 900, 1100, 1300, 1500, 1700, 1900, 2100],
  [500, 700, 900, 1100, 1300, 1500, 1700, 1900, 2100, 2300],
  [700, 900, 1100, 1300, 1500, 1700, 1900, 2100, 2300, 2500],
];

const columnsSecond = ["50cm", "60cm", "70cm", "80cm", "90cm", "100cm"] as const;

const dataSecond = [
  [1900, 2300, 2700, 3100, 3500, 3900],
  [2100, 2500, 2900, 3300, 3700, 4100],
  [2300, 2700, 3100, 3500, 3900, 4300],
  [2500, 2900, 3300, 3700, 4100, 4500],
];

function PricingTable({
  title,
  columns,
  data,
}: {
  title: string;
  columns: readonly string[];
  data: readonly (readonly number[])[];
}) {
  return (
    <div className="rounded-3xl border border-foreground/10 bg-background/95 p-6 shadow-sm">
      <h3 className="text-lg font-semibold tracking-tight text-foreground/90">
        {title}
      </h3>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-1 text-sm">
          <thead>
            <tr className="text-foreground/70">
              <th className="w-20 py-2 text-left text-xs uppercase tracking-[0.18em]">縦</th>
              {columns.map((column) => (
                <th key={column} className="px-3 py-2 text-right text-xs uppercase tracking-[0.14em]">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((rowLabel, rowIndex) => (
              <tr key={rowLabel} className="rounded-lg bg-foreground/5">
                <td className="rounded-l-lg px-3 py-3 text-left font-medium text-foreground/85">
                  {rowLabel}
                </td>
                {columns.map((column, columnIndex) => (
                  <td
                    key={`${rowLabel}-${column}`}
                    className={`px-3 py-3 text-right text-foreground/80 ${
                      columnIndex === columns.length - 1 ? "rounded-r-lg" : ""
                    }`}
                  >
                    ¥{data[rowIndex]?.[columnIndex]?.toLocaleString() ?? "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-foreground/50">
        ※ 横幅・縦幅ともに上記サイズに合わせてカットします。金額は税抜表記です。
      </p>
    </div>
  );
}

export function Pricing() {
  return (
    <section className="w-full py-24 md:py-32 bg-background">
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
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <PricingTable title="5cm〜50cm（5cm刻み）" columns={columnsFirst} data={dataFirst} />
          </Reveal>
          <Reveal delay={0.05}>
            <PricingTable title="50cm〜100cm（10cm刻み）" columns={columnsSecond} data={dataSecond} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
