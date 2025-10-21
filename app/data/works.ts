// cspell:ignore kato
export type WorkItem = {
  id: number;
  src: string;
  alt: string;
  description: string;
  previewSrc?: string;
};

export const worksItems: WorkItem[] = [
  {
    id: 1,
    src: "/works/works1.jpg",
    alt: "看板切文字ステッカー",
    description: "",
  },
  {
    id: 2,
    src: "/works/works2.jpg",
    alt: "切文字ステッカー",
    description: "車両ワンポイントカスタムに",
  },
  {
    id: 3,
    src: "/works/works3.jpg",
    alt: "切文字ステッカー",
    description: "車両ワンポイントカスタムに",
  },
  {
    id: 4,
    src: "/works/works4.png",
    alt: "ステッカーデザイン作成",
    description: "チームステッカーデザイン作成、ステッカー印刷",
  },
  {
    id: 5,
    src: "/works/works5.png",
    alt: "デザイン持ち込みカッティングステッカー作成",
    description: "デザイン持ち込みに対応しています。",
  },
  {
    id: 6,
    src: "/works/works6.jpg",
    previewSrc: "/works/IMG_7128.jpg",
    alt: "オリジナルデザイン作成",
    description: "相談しながらオリジナルデザインを作成します。",
  },
];
