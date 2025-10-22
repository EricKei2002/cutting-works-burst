import { homeDescription } from "@/lib/seo";

export default function Head() {
  return (
    <>
      <meta name="description" content={homeDescription} />
    </>
  );
}
