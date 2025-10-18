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
    alt: "LED サインパネル",
    description: "薄型LEDとプリントを組み合わせて、遠目でも色が映える屋内用サインを製作。",
  },
  {
    id: 2,
    src: "/works/works2.jpg",
    alt: "店舗ウィンドウグラフィック",
    description: "ガラス面にグラデーションフィルムとカッティングを重ね、昼夜問わずブランドを訴求。",
  },
  {
    id: 3,
    src: "/works/works3.jpg",
    alt: "車両ラッピング",
    description: "企業ロゴとストライプを組み合わせたフルラッピング。耐候性フィルムで美しいラインを維持。",
  },
  {
    id: 4,
    src: "/works/works4.png",
    alt: "店舗ファサードカッティング",
    description: "ゴールド系カッティングで外観をアップデート。マット仕上げで上品にロゴを浮かび上がらせます。",
  },
  {
    id: 5,
    src: "/works/works5.png",
    alt: "レタリング＆タイプデザイン",
    description: "カスタムレタリングをカッティングで再現。視認性と個性のバランスが取れた看板文字。",
  },
  {
    id: 6,
    src: "/works/works6.jpg",
    previewSrc: "/works/IMG_7128.jpg",
    alt: "ヘルメット用グラフィック",
    description: "曲面に沿うよう分割設計したヘルメット用デカール。ラメ調フィルムで質感も演出。",
  },
];
