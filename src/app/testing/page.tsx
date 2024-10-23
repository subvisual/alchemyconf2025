import SpeakerBlob1 from "@/assets/icons/speaker_type1";
import speakerTest from "@/assets/images/speaker_testpic1.svg";
export default function Testing() {
  return (
    <section className="flex min-h-[calc(100vh)] items-center justify-center">
      <SpeakerBlob1
        src={speakerTest.src}
        alt="image1"
        height="1000"
        width="888"
      />
    </section>
  );
}
