// cspell:ignore kato
export type WorkItem = {
  id: number;
  src: string;
  alt: string;
};

export const worksItems: WorkItem[] = [
  { id: 1, src: "/works/work-signage.svg", alt: "LED サインデザイン" },
  { id: 2, src: "/works/work-vehicle.svg", alt: "車両ラッピング" },
  { id: 3, src: "/works/work-decal.svg", alt: "カッティングデカールキット" },
  { id: 4, src: "/works/work-storefront.svg", alt: "店舗ウィンドウグラフィック" },
  { id: 5, src: "/works/work-lettering.svg", alt: "レタリング＆タイプデザイン" },
  { id: 6, src: "/works/work-helmet.svg", alt: "ヘルメット用グラフィック" },
];
