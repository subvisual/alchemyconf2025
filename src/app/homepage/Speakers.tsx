import SpeakerBlob1 from "@/assets/icons/speaker_type1";
import speakers from "../_constants/speakers.json";
import testSpeaker1 from "@/assets/images/speaker_testpic1.svg";
import SpeakerBlob from "@/assets/icons/speaker_blob";
// import Image from "next/image";

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="my-[136px] flex flex-col items-center justify-center"
    >
      <div className="relative mb-32 w-[400px] text-center font-koulen text-[120px] leading-none text-dark-blue">
        Speakers
        <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
          Speakers
        </span>
      </div>
      <div className="w-[760px] text-center font-zilla_slab text-2.5xl font-medium text-dark-blue">
        Alchemy Conf 2025 brings together the brightest minds in the Elixir
        community. The top experts in our community will share what they’ve
        learned about building, innovation, and real-world applications.
      </div>
      <div className="h-11">
        {/* <SpeakerBlob /> */}
        {/* <SpeakerBlob1 src={testSpeaker1.src} height="560" width="358" alt="" /> */}
      </div>
    </section>
  );
}
