import SpeakerBlob1 from "@/assets/icons/speaker_type1";
import speakers from "../_constants/speakers.json";
import speakerTest from "@/assets/images/speaker_testpic1.svg";
import SpeakerBlob from "@/assets/icons/speaker_blob";
import Image from "next/image";
import SpeakerBlobWip from "@/assets/icons/speaker_blob_wip";

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
      <SpeakerBlob1
        src={speakerTest.src}
        alt="image1"
        height="1000"
        width="888"
      />
      <div className="relative mx-auto grid grid-cols-2 justify-center gap-x-11 gap-y-[74px] py-[74px]">
        {speakers.map((speakers) => (
          <div
            key={speakers.id}
            className="flex h-[560px] w-[560px] items-center justify-center bg-grey"
          >
            <SpeakerBlob1
              src={speakerTest.src}
              alt="image1"
              height="1000"
              width="888"
            />
            {/* <SpeakerBlob src={testSpeaker1.src} /> */}
            {/* <Image */}
            {/*   src={speakers.image} */}
            {/*   width={288} */}
            {/*   height={96} */}
            {/*   alt={`Speaker ${speakers.id}`} */}
            {/*   className="h-auto w-full" */}
            {/* /> */}
          </div>
        ))}
      </div>
      {/* <div className="h-11"> */}
      {/* <SpeakerBlob /> */}
      {/* <SpeakerBlob1 src={testSpeaker1.src} height="560" width="358" alt="" /> */}
      {/* </div> */}
    </section>
  );
}
