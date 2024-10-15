import ClippedBlob from "@/assets/icons/clip_blob1";
import unsplash1 from "../unsplash_1.png";

export default function Testing() {
  return (
    <section className="flex min-h-[calc(100vh)] items-center justify-center">
      <ClippedBlob src={unsplash1.src} alt="image1" height="1000" width="888" />
    </section>
  );
}
