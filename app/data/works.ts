// cspell:ignore kato
export type WorkItem = {
  id: number;
  src: string;
  alt: string;
};

export const worksItems: WorkItem[] = [
  { id: 1, src: "/next.svg", alt: "Next.js Logo" },
  { id: 2, src: "/vercel.svg", alt: "Vercel Logo" },
  // New photo from user
  {
    id: 3,
    src: "/works/kato-body-works.jpg",
    alt: "加藤自動車鈑金 外観・ウィンドウサイン",
  },
  { id: 4, src: "/next.svg", alt: "Work 4" },
  { id: 5, src: "/vercel.svg", alt: "Work 5" },
  { id: 6, src: "/next.svg", alt: "Work 6" },
];
